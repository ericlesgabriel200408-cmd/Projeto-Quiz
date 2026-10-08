| **Entidade**    | **Atributos**                                     | **Identificador** |
| --------------- | ------------------------------------------------- | ----------------- |
| **Usuário**     | nome, e-mail                                      | e-mail            |
| **Pergunta**    | código, enunciado, nível de dificuldade, surpresa | código            |
| **Tema**        | nome                                              | nome              |
| **Alternativa** | letra, texto, correta                             | letra + Pergunta  |

| **Relacionamento**                          | **Cardinalidade**                  | **Justificativa**                                                                                 | **Requisito**    |
| ------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------- |
| **Usuário realiza Quiz**                    | Usuário (0,N) — Quiz (1,1)         | O sistema deve permitir o cadastro do usuário e disponibilizar o Quiz para ele.                   | RA01, RA02       |
| **Pergunta pertence a Tema**                | Pergunta (1,1) — Tema (1,N)        | Cada pergunta pertence a um dos temas definidos para o Quiz.                                      | RD02             |
| **Pergunta possui Alternativa**             | Pergunta (4,4) — Alternativa (1,1) | Cada pergunta possui exatamente quatro alternativas.                                              | RD03             |
| **Pergunta possui uma alternativa correta** | Pergunta (1,1) — Alternativa (0,1) | Cada pergunta possui exatamente uma alternativa correta.                                          | RD04             |
| **Usuário responde Pergunta**               | Usuário (0,N) — Pergunta (0,N)     | O usuário responde às perguntas durante a execução do Quiz, podendo realizar até duas tentativas. | RD11, RA03       |
| **Usuário recebe pontuação**                | Usuário (0,N) — Pontuação (1,1)    | A pontuação é calculada conforme a forma de resposta e apresentada ao final do Quiz.              | RD10, RA06, RA07 |
