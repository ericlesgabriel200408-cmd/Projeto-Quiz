-- Passo 9 — Testes das regras de negócio

-- Teste 1: nome de usuário duplicado (viola UNIQUE).
-- Resultado esperado: duplicate key value violates unique constraint.
INSERT INTO jogadores (nome_usuario, senha) VALUES ('teste_unico', 'senha-temporaria');
INSERT INTO jogadores (nome_usuario, senha) VALUES ('teste_unico', 'outra-senha');

-- Teste 2: pergunta sem enunciado (viola NOT NULL).
INSERT INTO perguntas (id_pergunta, topico, enunciado, pontos, is_bonus, explicacao)
VALUES (999, 'Tema de teste', NULL, 3, FALSE, 'Explicação de teste');

-- Teste 3: pontuação-base não positiva (viola CHECK pontos > 0).
INSERT INTO perguntas (id_pergunta, topico, enunciado, pontos, is_bonus, explicacao)
VALUES (998, 'Tema de teste', 'Pergunta de teste', 0, FALSE, 'Explicação de teste');

-- Teste 4: ordem de opção fora do intervalo 1 a 4 (viola CHECK).
INSERT INTO opcoes (id_pergunta, texto_opcao, is_correta, ordem)
VALUES (1, 'Opção fora do intervalo', FALSE, 5);

-- Teste 5: duplicar a ordem de uma opção da mesma pergunta (viola UNIQUE id_pergunta + ordem).
INSERT INTO opcoes (id_pergunta, texto_opcao, is_correta, ordem)
VALUES (1, 'Opção com ordem duplicada', FALSE, 1);

-- Teste 6: marcar uma segunda opção correta na mesma pergunta (viola índice único parcial).
UPDATE opcoes SET is_correta = TRUE
WHERE id_opcao = (SELECT id_opcao FROM opcoes WHERE id_pergunta = 1 AND is_correta = FALSE ORDER BY ordem LIMIT 1);

-- Teste 7: partida com pontuação negativa (viola CHECK pontuacao_total >= 0).
-- Cria um jogador de teste se ainda não existir, para garantir que a FK seja válida.
INSERT INTO jogadores (nome_usuario, senha) VALUES ('teste_partida', 'senha-temporaria')
ON CONFLICT (nome_usuario) DO NOTHING;
INSERT INTO partidas (id_jogador, pontuacao_total, pontos_bonus, tempo_segundos, ajudas_usadas)
SELECT id_jogador, -1, 0, 10, 0 FROM jogadores WHERE nome_usuario = 'teste_partida';

-- Teste 8: partida com jogador inexistente (viola FK).
INSERT INTO partidas (id_jogador, pontuacao_total, pontos_bonus, tempo_segundos, ajudas_usadas)
VALUES (-999, 0, 0, 10, 0);

-- Observação: o esquema impede zero ou mais de uma alternativa correta por meio do índice apenas no limite "mais de uma".
-- A exigência de exatamente quatro opções e pelo menos uma correta também deve ser validada na carga/edição dos dados.
