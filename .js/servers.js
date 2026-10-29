const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');


// Aqui é para concetar o PostgreSQL na nuvem (Supabase / Neon) para teste localmente
// codigo para executalo no servidor local vscode
// abra um terminal e digite o seguinte comando para definir a variável de ambiente DATABASE_URL:

// copie a partir daqui: $env:DATABASE_URL="postgresql://postgres:[senha da superbase ]@db.bqkxxfsetsnjkepiqogg.supabase.co:5432/postgres";
// em seguida, execute o comando para iniciar o servidor localmente:
// node .js/servers.js
// servidor contectado rode o index e faça os teste que precisa.
const app = express();
app.use(express.json());
app.use(cors());

// Servir os ficheiros estáticos do frontend (caso o servidor hospede os arquivos)
app.use(express.static(__dirname + '/..'));

// Conexão com o PostgreSQL exclusivamente via Nuvem (Supabase / Neon)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// Teste inicial de conexão ao banco na nuvem
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao banco PostgreSQL na nuvem:', err.stack);
  }
  console.log('Conexão com o PostgreSQL (Nuvem) estabelecida com sucesso!');
  release();
});

// ROTA 1: AUTENTICAÇÃO / REGISTO DE JOGADOR
app.post('/api/login', async (req, res) => {
  const { nome_usuario, senha } = req.body;

  try {
    let result = await pool.query(
      'SELECT id_jogador, senha FROM jogadores WHERE nome_usuario = $1',
      [nome_usuario]
    );

    if (result.rows.length > 0) {
      const jogador = result.rows[0];
      if (jogador.senha !== senha) {
        return res.status(401).json({ error: 'Senha incorreta!' });
      }
      return res.json({
        id_jogador: jogador.id_jogador,
        nome_usuario,
        message: 'Login efetuado com sucesso!'
      });
    } else {
      const novoJogador = await pool.query(
        'INSERT INTO jogadores (nome_usuario, senha) VALUES ($1, $2) RETURNING id_jogador',
        [nome_usuario, senha]
      );
      return res.json({
        id_jogador: novoJogador.rows[0].id_jogador,
        nome_usuario,
        message: 'Registo efetuado com sucesso!'
      });
    }
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ error: 'Erro ao autenticar no servidor.' });
  }
});

// ROTA 2: CONSULTAR PERGUNTAS E OPÇÕES
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

// ROTA 3: REGISTRAR RESULTADO DA PARTIDA
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

// Inicialização da porta dinâmica gerenciada pelo Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});