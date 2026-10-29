-- Passo 7 — Modelo físico (PostgreSQL)
-- Equipe: 13
-- PostgreSQL. Por que este SGBD: Compatível com as tabelas e consultas de servers.js.
-- Criar um banco vazio e executar este arquivo antes de 05-dml-consultas.sql.
-- Justificativa do PostgreSQL: oferece integridade referencial, restrições declarativas e consultas relacionais para os dados do quiz.

BEGIN;
-- Criando a Tabela jogadores para armazenar os dados dos usuários --
CREATE TABLE jogadores (
    id_jogador SERIAL PRIMARY KEY,
    nome_usuario VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- Criando a tabela de perguntas, onde ficaram armazenadas as perguntas utilizadas no projeto --
-- Observação: foi colodado tópico de is_bonus, para se referir se essa é a pergunta bonûs que vale 5 pontos. --
CREATE TABLE perguntas (
    id_pergunta INT PRIMARY KEY,
    topico VARCHAR(150) NOT NULL,
    enunciado TEXT NOT NULL,
    pontos INT NOT NULL DEFAULT 3 CHECK (pontos > 0),
    is_bonus BOOLEAN NOT NULL DEFAULT FALSE,
    explicacao TEXT NOT NULL
);
-- Criando a tabela das opções complementar das perguntas, como está sendo utilizada 4 resposta sendo 1 correta, elas foram organizadas e verificadas por aqui --
-- foi utilizado o boolean para facilitar o codigo com apenas aceitando a resposta como true ou false, e em caso de não responder o default que irá considerar como falso --
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
-- Criando a tabela para registro das partidas --
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
