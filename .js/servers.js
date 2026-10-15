
// Colocando o Banco de dados PostgreSQL a funcionar com o pgAdmin 4,
// este código cria um servidor Node.js usando Express para gerir autenticação de jogadores, 
// consulta de perguntas e registo de resultados de partidas.

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Configuração de acesso ao PostgreSQL gerido via pgAdmin 4
const pool = new Pool({
  user: 'postgres',                 // Utilizador do PostgreSQL
  host: 'localhost',                // Servidor local
  database: 'Quiz Tech Trivia',     // Nome da base de dados no pgAdmin 4
  password: 'Play2014',             // Senha  PostgreSQL
  port: 1901,                       // Porta padrão do PostgreSQL
});


 //  ROTA 1: AUTENTICAÇÃO / REGISTO DE JOGADOR (NOME E SENHA)
 // Por conta de já ter o arquivo foi usado .json no lugar de .txt,
 //  para que o frontend consiga ler os dados do backend.

app.post('/api/login', async (req, res) => {
  const { nome_usuario, senha } = req.body;

  try {
    // 1. Procura se o utilizador já existe no banco
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
      // 2. Regista novo utilizador se não existir
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

  // ROTA 2: CONSULTAR PERGUNTAS E OPÇÕES DA BASE DE DADOS

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

    // Agrupa as opções no formato esperado pelo frontend JavaScript
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


 //  ROTA 3: REGISTRAR RESULTADO DA PARTIDA

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

app.listen(3000, () => {
  console.log('Servidor ativo em http://localhost:3000/api/perguntas');
});



// Fazendo teste de conexão com o banco de dados PostgreSQL via pgAdmin 4

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar ao PostgreSQL:', err.stack);
  }
  console.log('Conexão com o PostgreSQL estabelecida com sucesso!');
  release();
});