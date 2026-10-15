# Passos 5 e 6 — Modelo lógico, normalização e dicionário
Marco M2. A entrega do passo 5 é o modelo lógico: o desenho em `entregas/03-logico.pdf` (ou `.png`) e este texto em `entregas/03-logico.md`.

O desenho parte do modelo conceitual e mostra tabelas, colunas, chave primária e chaves estrangeiras. Não é outro DER. Pode ser feito no brModelo (modelo lógico) ou no Visual Paradigm Online. Se a normalização achar violação, corrijam o desenho e o texto.
O desenho parte do modelo conceitual e mostra tabelas, colunas, chave primária e chaves estrangeiras
## 5. Modelo lógico

Conforme definido no escopo do projeto, o banco de dados é responsável exclusivamente por gerenciar usuários, pontuações e rankings, ficando as perguntas e alternativas armazenadas no código da aplicação

| Relacionamento no DER | Cardinalidade | Vira | Onde fica a FK ou a tabela associativa | Requisito |
| Jogador realiza Partida| Jogador (1,1) — Partida (0,N) | Chave Estrangeira (FK) | FK `id_jogador` na tabela `partida` | RD07, RD08, RD10 |

---

### Normalização

Dependências funcionais no formato `determinante → dependente`, com o requisito que sustenta.

| ID | Dependência Funcional | Requisito |
| --- | --- | --- |
| DF1 | `id_jogador → nome, email, cpf, data_cadastro` | RD07 |
| DF2 | `id_partida → id_jogador, pontuacao_total, pontos_bonus, tempo_segundos, ajudas_usadas, data_partida` | RD07, RD08, RD10 |

---

| Forma | Por que o esquema atende | Tabela em que isso aparece |
| --- | --- | --- |
| **1FN** | Todos os atributos possuem valores atômicos e indivisíveis. Não existem grupos repetidores nem colunas multivaloradas. | `jogador`, `partida` |
| **2FN** | Não existem dependências parciais de chave composta. Como as tabelas possuem apenas chaves primárias simples (`id_jogador` e `id_partida`), a 2FN é atendida por definição. | `jogador`, `partida` |
| **3FN** | Não existem dependências transitivas entre atributos não-chave. Todos os atributos dependem exclusivamente e diretamente de suas respectivas chaves primárias. | `jogador`, `partida` |

---

## 6. Dicionário de dados

### Tabela: `jogador`

| Coluna | Tipo e tamanho | Nulo | Restrição | Descrição |
| --- | --- | --- | --- | --- |
| `id_jogador` | INT / SERIAL | NOT NULL | PK | Identificador único do jogador cadastrado. |
| `nome` | VARCHAR(100) | NOT NULL | | Nome completo do jogador. |
| `email` | VARCHAR(150) | NOT NULL | UNIQUE | Endereço de e-mail único do jogador. |
| `cpf` | VARCHAR(14) | NOT NULL | UNIQUE | CPF único do jogador. |
| `data_cadastro` | TIMESTAMP | NOT NULL | DEFAULT CURRENT_TIMESTAMP | Data e hora em que o cadastro do jogador foi efetuado. |

---

### Tabela: `partida`

| Coluna | Tipo e tamanho | Nulo | Restrição | Descrição |
| --- | --- | --- | --- | --- |
| `id_partida` | INT / SERIAL | NOT NULL | PK | Identificador único do registro da partida. |
| `id_jogador` | INT | NOT NULL | FK → jogador.id_jogador | Chave estrangeira que vincula a partida ao jogador. |
| `pontuacao_total` | INT | NOT NULL | CHECK (pontuacao_total >= 0) | Pontuação total obtida pelo jogador na partida. |
| `pontos_bonus` | INT | NOT NULL | DEFAULT 0 / CHECK (pontos_bonus >= 0) | Pontos acumulados nas perguntas bônus. |
| `tempo_segundos` | INT | NOT NULL | CHECK (tempo_segundos >= 0) | Duração total da partida em segundos. |
| `ajudas_usadas` | INT | NOT NULL | DEFAULT 0 / CHECK (ajudas_usadas >= 0) | Quantidade de recursos de ajuda utilizados na rodada. |
| `data_partida` | TIMESTAMP | NOT NULL | DEFAULT CURRENT_TIMESTAMP | Data e hora em que a partida foi concluída. |