-- Passo 7 — Modelo físico (PostgreSQL)
-- Equipe: 13
-- PostgreSQL. Por que este SGBD: Compatível com as tabelas e consultas de servers.js.
-- Criar um banco vazio e executar este arquivo antes de 05-dml-consultas.sql.
-- Justificativa do PostgreSQL: oferece integridade referencial, restrições declarativas e consultas relacionais para os dados do quiz.

BEGIN;

CREATE TABLE jogadores (
    id_jogador SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE perguntas (
    id_pergunta INT PRIMARY KEY,
    topico VARCHAR(150) NOT NULL,
    enunciado TEXT NOT NULL,
    pontos INT NOT NULL DEFAULT 3 CHECK (pontos > 0),
    is_bonus BOOLEAN NOT NULL DEFAULT FALSE,
    explicacao TEXT NOT NULL
);

CREATE TABLE opcoes (
    id_opcao SERIAL PRIMARY KEY,
    id_pergunta INT NOT NULL REFERENCES perguntas(id_pergunta) ON DELETE CASCADE ON UPDATE CASCADE,
    texto_opcao TEXT NOT NULL,
    is_correta BOOLEAN NOT NULL DEFAULT FALSE,
    ordem INT NOT NULL CHECK (ordem BETWEEN 1 AND 4),
    CONSTRAINT uq_opcoes_ordem UNIQUE (id_pergunta, ordem)
);

-- Impede que uma pergunta tenha mais de uma opção marcada como correta.
CREATE UNIQUE INDEX uq_opcoes_uma_correta
    ON opcoes (id_pergunta)
    WHERE is_correta = TRUE;

CREATE TABLE partidas (
    id_partida SERIAL PRIMARY KEY,
    id_jogador INT NOT NULL REFERENCES jogadores(id_jogador) ON DELETE CASCADE ON UPDATE CASCADE,
    pontuacao_total INT NOT NULL CHECK (pontuacao_total >= 0),
    pontos_bonus INT NOT NULL DEFAULT 0 CHECK (pontos_bonus >= 0),
    tempo_segundos INT NOT NULL CHECK (tempo_segundos >= 0),
    ajudas_usadas INT NOT NULL DEFAULT 0 CHECK (ajudas_usadas >= 0),
    data_partida TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
