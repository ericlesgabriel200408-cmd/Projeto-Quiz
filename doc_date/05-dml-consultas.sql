-- Passo 8 — Carga de teste e consultas
-- Rode depois de 04-ddl.sql.
--   psql -d tech_trivia -v ON_ERROR_STOP=1 -f 05-dml-consultas.sql
-- Troquem os nomes pelos do dicionário.

BEGIN;

-- Massa mínima, nesta ordem: categoria, publicador, fonte, pergunta.
-- No mínimo:
--   6 perguntas com id fact-001, fact-002, ...
--   2 categorias, uma com pelo menos 2 perguntas
--   2 publicadores, um com pelo menos 2 fontes
--   1 URL citada por 2 perguntas
--   uma pergunta cuja correta é Certo e outra cuja correta é Errado
-- Não insiram de novo categoria, publicador ou URL já gravados.

-- TODO: INSERT

COMMIT;

-- RA01. Categorias em ordem alfabética, com a quantidade de perguntas.
-- Resultado:
-- TODO

-- RA02a. Uma pergunta aleatória, de qualquer categoria.
-- Resultado (id sorteado):
-- TODO

-- RA02b. Uma pergunta aleatória de uma categoria recebida por parâmetro.
-- Resultado:
-- TODO

-- RA03. Título, enunciado e alternativas de uma pergunta.
-- Resultado:
-- TODO

-- RA04. Dada a pergunta e a alternativa escolhida, se acertou.
-- Provem com a alternativa correta e com a errada.
-- Resultado:
-- TODO

-- RA05. Explicação e fonte: título, publicador, URL e idioma.
-- Resultado:
-- TODO

-- RA06. Publicadores mais citados, com o número de perguntas.
-- Resultado:
-- TODO

-- RA07. Fontes citadas por mais de uma pergunta.
-- Resultado:
-- TODO
