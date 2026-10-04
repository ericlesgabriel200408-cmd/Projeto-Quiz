-- Passo 9 — Testes das regras de negócio
-- Rode depois da carga. Cada bloco deve falhar.
-- Colem a mensagem de erro do PostgreSQL no comentário Resultado.
-- Troquem os nomes pelos do dicionário.

-- Regra: não existem duas categorias com o mesmo nome.
-- Resultado:
-- INSERT INTO categoria (nome) VALUES ('nome que já existe');

-- Regra: não existem duas fontes com a mesma URL.
-- Resultado:
-- INSERT INTO fonte (titulo, url, id_publicador, id_idioma)
-- VALUES ('outra', 'url que já existe', 1, 'en');

-- Regra: pergunta sem título, enunciado ou explicação não entra.
-- Resultado:
-- INSERT INTO pergunta (id_pergunta, titulo, enunciado, explicacao, id_categoria, id_fonte, id_alternativa_correta)
-- VALUES ('fact-999', NULL, 'enunciado', 'explicacao', 1, 1, 1);
