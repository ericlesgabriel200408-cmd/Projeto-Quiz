# Passos 5 e 6 — Modelo lógico, normalização e dicionário de dados

O modelo abaixo corresponde às tabelas consultadas e atualizadas por `servers.js`.

## 5. Modelo lógico

### Tabelas e relacionamentos

- `jogadores` (**PK** `id_jogador`)
- `perguntas` (**PK** `id_pergunta`)
- `opcoes` (**PK** `id_opcao`, **FK** `id_pergunta` → `perguntas.id_pergunta`)
- `partidas` (**PK** `id_partida`, **FK** `id_jogador` → `jogadores.id_jogador`)

| Relacionamento | Cardinalidade | Implementação |
|---|---|---|
| Jogador realiza Partida | `jogadores` 1 : N `partidas` | FK `partidas.id_jogador`. |
| Pergunta possui Opção | `perguntas` 1 : 4 `opcoes` | FK `opcoes.id_pergunta`; `UNIQUE(id_pergunta, ordem)` e ordem de 1 a 4. |

Os nomes plurais foram mantidos porque são os nomes utilizados pela API atual (`jogadores`, `perguntas`, `opcoes`, `partidas`). Alterá-los exige atualizar também as consultas de `servers.js`.

### Normalização

| ID | Dependência funcional | Requisito |
|---|---|---|
| DF1 | `id_jogador → nome_usuario, senha, data_cadastro` | Identificação e autenticação do jogador. |
| DF2 | `id_pergunta → topico, enunciado, pontos, is_bonus, explicacao` | Dados próprios de cada pergunta. |
| DF3 | `id_opcao → id_pergunta, texto_opcao, is_correta, ordem` | Cada opção pertence a uma pergunta e possui sua própria ordem. |
| DF4 | `id_partida → id_jogador, pontuacao_total, pontos_bonus, tempo_segundos, ajudas_usadas, data_partida` | Histórico de resultados. |

| Forma normal | Justificativa | Tabelas |
|---|---|---|
| **1FN** | Os atributos guardam valores atômicos; as opções foram separadas da pergunta em linhas próprias. | Todas. |
| **2FN** | As tabelas usam chaves primárias simples, sem dependência parcial de chave composta. | Todas. |
| **3FN** | Os atributos não-chave dependem diretamente da chave primária da própria tabela. Não há dados de jogador repetidos em `partidas` além da FK necessária. | Todas. |

## 6. Dicionário de dados

### Tabela `jogadores`

| Coluna | Tipo | Nulo | Restrição | Descrição |
|---|---|---|---|---|
| `id_jogador` | `SERIAL` | Não | PK | Identificador do jogador. |
| `nome_usuario` | `VARCHAR(50)` | Não | UNIQUE | Nome usado para entrar no quiz. |
| `senha` | `VARCHAR(255)` | Não | — | Senha recebida pela rota de login. A versão atual não aplica hash; isso deve ser corrigido antes da publicação. |
| `data_cadastro` | `TIMESTAMP` | Sim | DEFAULT `CURRENT_TIMESTAMP` | Data e hora de criação da conta. |

### Tabela `perguntas`

| Coluna | Tipo | Nulo | Restrição | Descrição |
|---|---|---|---|---|
| `id_pergunta` | `INT` | Não | PK | Identificador da pergunta, atribuído na carga. |
| `topico` | `VARCHAR(150)` | Não | — | Tema apresentado na tela do quiz. |
| `enunciado` | `TEXT` | Não | — | Texto da pergunta. |
| `pontos` | `INT` | Não | DEFAULT 3; CHECK `pontos > 0` | Pontuação-base cadastrada. O frontend atual calcula 3 ou 5 pontos a partir de `is_bonus`. |
| `is_bonus` | `BOOLEAN` | Não | DEFAULT `FALSE` | Indica se a pergunta é bônus. |
| `explicacao` | `TEXT` | Não | — | Explicação mostrada após a resposta. |

### Tabela `opcoes`

| Coluna | Tipo | Nulo | Restrição | Descrição |
|---|---|---|---|---|
| `id_opcao` | `SERIAL` | Não | PK | Identificador da opção. |
| `id_pergunta` | `INT` | Não | FK → `perguntas.id_pergunta`; ON DELETE CASCADE | Pergunta à qual a opção pertence. |
| `texto_opcao` | `TEXT` | Não | — | Texto da alternativa. |
| `is_correta` | `BOOLEAN` | Não | DEFAULT `FALSE` | Indica a alternativa correta. |
| `ordem` | `INT` | Não | CHECK de 1 a 4; UNIQUE com `id_pergunta` | Ordem de leitura das alternativas antes do embaralhamento. |

### Tabela `partidas`

| Coluna | Tipo | Nulo | Restrição | Descrição |
|---|---|---|---|---|
| `id_partida` | `SERIAL` | Não | PK | Identificador do resultado. |
| `id_jogador` | `INT` | Não | FK → `jogadores.id_jogador`; ON DELETE CASCADE | Jogador que concluiu a partida. |
| `pontuacao_total` | `INT` | Não | CHECK `>= 0` | Pontuação total. |
| `pontos_bonus` | `INT` | Não | DEFAULT 0; CHECK `>= 0` | Pontos obtidos em perguntas bônus. |
| `tempo_segundos` | `INT` | Não | CHECK `>= 0` | Duração total da partida em segundos. |
| `ajudas_usadas` | `INT` | Não | DEFAULT 0; CHECK `>= 0` | Quantidade de ajudas usadas. |
| `data_partida` | `TIMESTAMP` | Sim | DEFAULT `CURRENT_TIMESTAMP` | Data e hora do registro da partida. |

### Observação sobre fontes

O modelo antigo previa referências, editoras e idiomas, mas esses campos não existem no banco nem na API atuais. A consulta de explicação foi, portanto, alinhada ao que o código realmente fornece. Para guardar fontes bibliográficas, será necessário criar as tabelas e atualizar o backend.
