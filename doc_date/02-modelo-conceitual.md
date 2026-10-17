# Passo 4 — Modelo conceitual do Tech Trivia

## Entidades e atributos

| Entidade | Atributos | Identificador |
|---|---|---|
| **Jogador** | nome de usuário, senha, data de cadastro | id do jogador |
| **Pergunta** | tema, enunciado, pontuação-base, indicador de bônus, explicação | id da pergunta |
| **Opção** | texto da opção, indicação de correta, ordem de exibição | id da opção |
| **Partida** | pontuação total, pontos bônus, tempo em segundos, ajudas usadas, data da partida | id da partida |

## Relacionamentos e cardinalidades

| Relacionamento | Cardinalidade | Justificativa |
|---|---|---|
| **Jogador realiza Partida** | Jogador (0,N) — Partida (1,1) | Um jogador pode não ter partidas ou pode registrar várias; cada partida registrada pertence a um jogador. |
| **Pergunta possui Opção** | Pergunta (1,4) — Opção (1,1) | Cada pergunta deve possuir quatro opções; cada opção pertence a uma única pergunta. |

## Regras do modelo conceitual

1. `Jogador` é identificado por `id_jogador`; o nome de usuário não pode se repetir.
2. `Pergunta` é identificada por `id_pergunta` e contém os dados que a API entrega ao frontend.
3. `Opção` tem uma ordem de 1 a 4 por pergunta. Exatamente uma das quatro opções deve ser correta.
4. `Partida` registra somente resultados de jogadores cadastrados; o modo Convidado não envia resultados ao banco.
5. Pontuação, bônus, tempo e quantidade de ajudas não podem ser negativos.

## Fora do modelo atual

A versão atual não possui entidades separadas para categoria/assunto, dificuldade, referência, editora, idioma ou palavra-chave. O tema é armazenado diretamente em `perguntas.topico`, e o banco não guarda URL de fonte bibliográfica. Essas entidades não devem aparecer no DER como tabelas implementadas, a menos que a equipe decida ampliar também o código e a API.

**Nota para o desenho:** em Chen, desenhem entidades como retângulos, atributos como elipses e relacionamentos como losangos. Identifiquem as chaves primárias e anotem as cardinalidades indicadas acima.
