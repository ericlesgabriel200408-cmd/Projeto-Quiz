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

COMMIT;
