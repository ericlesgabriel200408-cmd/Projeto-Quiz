/**
 * =====================================================
 * ARQUIVO: servers.js
 * DESCRIÇÃO: Servidor Backend principal do CYBER ARENA.
 * Responsável por gerir rotas HTTP, conexão com o banco de dados
 * PostgreSQL na nuvem (Supabase/Neon) e requisições da interface.
 * =====================================================
 */

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

// Inicialização da aplicação Express para gerenciamento de rotas
const app = express();
app.use(express.json());
app.use(cors());

// Configuração para servir os ficheiros estáticos do frontend (arquivos da pasta raiz/superior)
app.use(express.static(__dirname + '/..'));

/**
 * CONFIGURAÇÃO DA CONEXÃO COM O POSTGRESQL (NUVEM)
 * Para executá-lo localmente no VS Code, certifique-se de definir 
 * a variável de ambiente DATABASE_URL no seu terminal.
 */
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Teste inicial de conexão ao banco de dados PostgreSQL na nuvem
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco PostgreSQL na nuvem:', err.stack);
  }
  console.log('Conexão com o PostgreSQL (Nuvem) estabelecida com sucesso!');
  release();
});

/**
 * =====================================================
 * ROTA 1: AUTENTICAÇÃO E REGISTO DE JOGADOR (Com Avatar)
 * Método: POST /api/login
 * Finalidade: Verifica se o utilizador já existe. Se existir, valida a senha.
 * Se não existir, cria o registo na base de dados salvando nome, senha e avatar.
 * =====================================================
 */
app.post('/api/login', async (req, res) => {
  const { nome_usuario, senha, avatar } = req.body;
  const userAvatar = avatar || '👨‍💻'; // Define um avatar padrão caso não seja enviado

  try {
    // Consulta para verificar se o nome de usuário já está cadastrado
    let result = await pool.query(
      'SELECT id_jogador, senha, avatar FROM jogadores WHERE nome_usuario = $1',
      [nome_usuario]
    );

    if (result.rows.length > 0) {
      const jogador = result.rows[0];
      // Validação de senha
      if (jogador.senha !== senha) {
        return res.status(401).json({ error: 'Senha incorreta!' });
      }
      return res.json({
        id_jogador: jogador.id_jogador,
        nome_usuario,
        avatar: jogador.avatar || userAvatar,
        message: 'Login efetuado com sucesso!'
      });
    } else {
      // Registo de novo jogador caso o nome não exista
      const novoJogador = await pool.query(
        'INSERT INTO jogadores (nome_usuario, senha, avatar) VALUES ($1, $2, $3) RETURNING id_jogador, avatar',
        [nome_usuario, senha, userAvatar]
      );
      return res.json({
        id_jogador: novoJogador.rows[0].id_jogador,
        nome_usuario,
        avatar: novoJogador.rows[0].avatar,
        message: 'Registo efetuado com sucesso!'
      });
    }
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: 'Erro ao autenticar no servidor.' });
  }
});

/**
 * =====================================================
 * ROTA 2: CONSULTAR PERGUNTAS E OPÇÕES DO QUIZ
 * Método: GET /api/perguntas
 * Finalidade: Busca todas as perguntas e opções na base de dados
 * e formata os dados em formato JSON para consumo direto no frontend.
 * =====================================================
 */
app.get('/api/perguntas', async (req, res) => {
  try {
    const query = `
      SELECT p.id_pergunta AS id, 
             p.topico, 
             p.enunciado AS question, 
             p.pontos, 
             p.is_bonus AS "isBonus", 
             p.explicacao,
             o.texto_opcao, 
             o.is_correta
      FROM perguntas p
      JOIN opcoes o ON p.id_pergunta = o.id_pergunta
      ORDER BY p.id_pergunta, o.ordem;
    `;
    const result = await pool.query(query);

    const questionsMap = {};
    result.rows.forEach(row => {
      if (!questionsMap[row.id]) {
        questionsMap[row.id] = {
          id: row.id,
          topic: row.topico,
          question: row.question,
          points: row.pontos,
          isBonus: row.isBonus,
          explanation: row.explicacao,
          options: [],
          answer: 0
        };
      }
      questionsMap[row.id].options.push(row.texto_opcao);
      if (row.is_correta) {
        questionsMap[row.id].answer = questionsMap[row.id].options.length - 1;
      }
    });

    res.json(Object.values(questionsMap));
  } catch (err) {
    console.error('Erro ao procurar perguntas:', err);
    res.status(500).json({ error: 'Erro ao carregar perguntas.' });
  }
});

/**
 * =====================================================
 * ROTA 3: REGISTRAR RESULTADO DA PARTIDA
 * Método: POST /api/partidas
 * Finalidade: Insere na tabela 'partidas' o desempenho final do jogador
 * (pontuação, bónus, tempo em segundos e quantidade de ajudas usadas).
 * =====================================================
 */
app.post('/api/partidas', async (req, res) => {
  const { id_jogador, pontuacao_total, pontos_bonus, tempo_segundos, ajudas_usadas } = req.body;

  try {
    await pool.query(
      `INSERT INTO partidas (id_jogador, pontuacao_total, pontos_bonus, tempo_segundos, ajudas_usadas) 
       VALUES ($1, $2, $3, $4, $5)`,
      [id_jogador, pontuacao_total, pontos_bonus, tempo_segundos, ajudas_usadas]
    );
    res.json({ success: true, message: 'Partida guardada com sucesso!' });
  } catch (err) {
    console.error('Erro ao guardar partida:', err);
    res.status(500).json({ error: 'Erro ao guardar partida na base de dados.' });
  }
});

/**
 * =====================================================
 * ROTA 4: OBTER RANKING REAL DO BANCO DE DADOS
 * Método: GET /api/ranking
 * Finalidade: Executa uma consulta avançada com Window Function (ROW_NUMBER)
 * para listar o Top 10 ordenado por maior pontuação e menor tempo de conclusão.
 * =====================================================
 */
app.get('/api/ranking', async (req, res) => {
  try {
    const query = `
      WITH ranking_apurado AS (
          SELECT 
              p.id_jogador,
              p.pontuacao_total,
              p.tempo_segundos,
              p.data_partida,
              ROW_NUMBER() OVER (PARTITION BY p.id_jogador ORDER BY p.pontuacao_total DESC, p.tempo_segundos ASC) as rn
          FROM partidas p
      )
      SELECT 
          j.avatar,
          j.nome_usuario,
          r.pontuacao_total,
          r.tempo_segundos,
          r.data_partida
      FROM ranking_apurado r
      JOIN jogadores j ON j.id_jogador = r.id_jogador
      WHERE r.rn = 1
      ORDER BY r.pontuacao_total DESC, r.tempo_segundos ASC
      LIMIT 10;
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar ranking:', err);
    res.status(500).json({ error: 'Erro ao carregar ranking do servidor.' });
  }
});

/**
 * =====================================================
 * ROTA 5: OBTER ESTATÍSTICAS DO PERFIL DO JOGADOR
 * Método: GET /api/jogador/:id
 * Finalidade: Retorna os dados detalhados para o painel de perfil:
 * maior pontuação histórica, última pontuação obtida e total de partidas.
 * =====================================================
 */
app.get('/api/jogador/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const query = `
      SELECT 
          j.id_jogador,
          j.nome_usuario,
          j.avatar,
          COALESCE(MAX(p.pontuacao_total), 0) AS maior_pontuacao,
          (
              SELECT p2.pontuacao_total 
              FROM partidas p2 
              WHERE p2.id_jogador = j.id_jogador 
              ORDER BY p2.data_partida DESC 
              LIMIT 1
          ) AS ultima_pontuacao,
          COUNT(p.id_partida) AS total_partidas
      FROM jogadores j
      LEFT JOIN partidas p ON j.id_jogador = p.id_jogador
      WHERE j.id_jogador = $1
      GROUP BY j.id_jogador, j.nome_usuario, j.avatar;
    `;
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Jogador não encontrado.' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erro ao buscar perfil:', err);
    res.status(500).json({ error: 'Erro ao carregar perfil do jogador.' });
  }
});

// Inicialização da porta dinâmica (gerenciada por provedores como Render ou padrão local 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});