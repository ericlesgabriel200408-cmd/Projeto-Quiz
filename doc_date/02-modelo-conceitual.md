| Entidade                 | Atributos                             | Identificador   |
| ------------------------ | ------------------------------------- | --------------- |
| **Questão**              | código, título, enunciado, explicação | código          |
| **Assunto**              | nome                                  | nome            |
| **Nível de dificuldade** | código, descrição                     | código          |
| **Alternativa**          | letra, texto, correta                 | letra + questão |
| **Referência**           | título, URL, idioma                   | URL             |
| **Editora**              | nome                                  | nome            |
| **Idioma**               | código, descrição                     | código          |
| **Palavra-chave**        | termo                                 | termo           |


| Relacionamento                          | Cardinalidade                       | Justificativa                                                                                                       | Requisito |
| --------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------- |
| **Questão pertence a Assunto**          | Questão (1,1) — Assunto (1,N)       | Toda questão pertence a exatamente um assunto. Não existem dois assuntos com o mesmo nome.                          | **RD02**  |
| **Questão possui Nível de dificuldade** | Questão (1,1) — Nível (1,N)         | Toda questão possui exatamente um nível de dificuldade, pertencente a um conjunto controlado.                       | **RD03**  |
| **Questão possui Alternativa**          | Questão (4,4) — Alternativa (1,1)   | Cada questão possui quatro alternativas, identificadas pelas letras A a D.                                          | **RD04**  |
| **Questão é apoiada por Referência**    | Questão (1,1) — Referência (1,N)    | Cada questão cita uma única referência, e uma mesma referência pode amparar várias questões.                        | **RD06**  |
| **Referência é publicada por Editora**  | Referência (1,1) — Editora (1,N)    | Cada referência é publicada por uma editora, e o nome da editora é gravado uma única vez.                           | **RD07**  |
| **Referência possui Idioma**            | Referência (1,1) — Idioma (1,N)     | O idioma da referência pertence a um conjunto controlado.                                                           | **RD08**  |
| **Questão possui Palavra-chave**        | Questão (0,N) — Palavra-chave (0,N) | Cada questão pode receber zero ou mais palavras-chave, e uma mesma palavra-chave pode ser usada em várias questões. | **RD09**  |
