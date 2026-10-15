-- Passo 7 — Modelo físico
-- Equipe:
-- PostgreSQL. Por que este SGBD:
-- Contrato com Aplicativos para Web: os nomes abaixo são os acordados.
-- Banco vazio:
--   createdb tech_trivia
--   psql -d tech_trivia -v ON_ERROR_STOP=1 -f 04-ddl.sql
-- Só esquema e domínio fixo (idiomas, alternativas).
-- Categorias, publicadores, fontes e perguntas ficam no passo 8.

BEGIN;

-- TODO: CREATE TABLE, na ordem em que as FK permitem.
-- PK id_<tabela>. Nomes em português, minúsculos, sem acento, singular.
-- PK, FK, NOT NULL, UNIQUE e CHECK declarados aqui, como no dicionário.

-- TODO: INSERT do domínio fixo.
-- Passo 7 — Modelo físico
-- Equipe:
-- PostgreSQL. Por que este SGBD: SGBD relacional de alto desempenho, robusto e eficiente para garantir integridade referencial, unicidade nos cadastros de jogadores e cálculo rápido de estatísticas de ranking.
-- Contrato com Aplicativos para Web: os nomes abaixo são os acordados.
-- Banco vazio:
--   createdb tech_trivia
--   psql -d tech_trivia -v ON_ERROR_STOP=1 -f 04-ddl.sql
-- Nota: Perguntas, opções, explicações e áreas temáticas são mantidas diretamente no código da aplicação (questions.js).

BEGIN;

-- 1. Tabela Jogador
CREATE TABLE jogador (
    id_jogador SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabela Partida
CREATE TABLE partida (
    id_partida SERIAL PRIMARY KEY,
    id_jogador INT NOT NULL REFERENCES jogador(id_jogador) ON DELETE CASCADE ON UPDATE CASCADE,
    pontuacao_total INT NOT NULL CONSTRAINT chk_partida_pontuacao CHECK (pontuacao_total >= 0),
    pontos_bonus INT NOT NULL DEFAULT 0 CONSTRAINT chk_partida_bonus CHECK (pontos_bonus >= 0),
    tempo_segundos INT NOT NULL CONSTRAINT chk_partida_tempo CHECK (tempo_segundos >= 0),
    ajudas_usadas INT NOT NULL DEFAULT 0 CONSTRAINT chk_partida_ajudas CHECK (ajudas_usadas >= 0),
    data_partida TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMIT;
COMMIT;
