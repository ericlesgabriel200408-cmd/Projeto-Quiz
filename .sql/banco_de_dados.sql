-- Coloquei a base do banco aqui, mas apenas para noção, não é para ser executado. --

-- 1. Tabela de Jogadores (Nome e Senha)
CREATE TABLE jogadores (
    id_jogador SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(50) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL, -- Recomendado salvar a senha criptografada (hash)
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabela de Perguntas
CREATE TABLE perguntas (
    id_pergunta INT PRIMARY KEY,
    topico VARCHAR(150) NOT NULL,
    enunciado TEXT NOT NULL,
    pontos INT DEFAULT 3,
    is_bonus BOOLEAN DEFAULT FALSE,
    explicacao TEXT NOT NULL
);

-- 3. Tabela de Opções de Resposta
CREATE TABLE opcoes (
    id_opcao SERIAL PRIMARY KEY,
    id_pergunta INT REFERENCES perguntas(id_pergunta) ON DELETE CASCADE,
    texto_opcao TEXT NOT NULL,
    is_correta BOOLEAN DEFAULT FALSE,
    ordem INT NOT NULL
);

-- 4. Tabela de Partidas
CREATE TABLE partidas (
    id_partida SERIAL PRIMARY KEY,
    id_jogador INT REFERENCES jogadores(id_jogador) ON DELETE CASCADE,
    pontuacao_total INT NOT NULL,
    pontos_bonus INT DEFAULT 0,
    tempo_segundos INT NOT NULL,
    ajudas_usadas INT DEFAULT 0,
    data_partida TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);