# Tech Trivia — Como entregar o projeto

A equipe constrói o banco só de cima para baixo: texto e requisitos, DER, tabelas. A normalização justifica esse desenho.

Identifiquem uma vez, neste arquivo copiado para o repositório:


| Campo       | Preenchimento |
| ----------- | ------------- |
| Equipe      |   13          |
| Integrantes |Vinicius Ian Alves de Morais, Samuel Silva de Oliveira, Ericles Gabriel Clemente Queiroz, Samuel Vitor Alves de Carvalho,Johann de Carvalho dos Santos      |
| Repositório | https://github.com/ericlesgabriel200408-cmd/Projeto-Quiz.git              |
| Data        | 04/10/2026              |


## Regras

- Equipe: a mesma de Aplicativos para Web.
- SGBD: PostgreSQL. A justificativa da escolha cabe em uma frase no modelo físico.
- Nomes: português, minúsculos, sem acento, no singular. Chave primária: `id_<tabela>`.
- Modelo conceitual: DER na notação de Chen, em PDF ou imagem, no brModelo ou no Visual Paradigm Online.
- Modelo lógico: outro desenho, com tabelas, colunas, PK e FK, no brModelo (modelo lógico) ou no Visual Paradigm Online.
- Scripts: rodam em sequência, do zero, num banco vazio, sem erro.
- A partir do modelo físico, nomes de tabelas e colunas são contrato com a disciplina de Web. Mudança posterior entra no repositório e é comunicada.



## O que entregar


| Marco | Semana | Passos | Arquivo                                  |
| ----- | ------ | ------ | ---------------------------------------- |
| M1    | 2      | 1 a 4  | `01-contexto.md` e `02-conceitual.pdf`   |
| M2    | 4      | 5 e 6  | `03-logico.pdf` e `03-logico.md`         |
| M3    | 6      | 7      | `04-ddl.sql`                             |
| M4    | 8      | 8 e 9  | `05-dml-consultas.sql` e `06-testes.sql` |


```text
entregas/
  00-identificacao.md
  01-contexto.md
  02-conceitual.pdf
  03-logico.pdf
  03-logico.md
  04-ddl.sql
  05-dml-consultas.sql
  06-testes.sql
```

Ordem de execução: `04-ddl.sql`, depois `05-dml-consultas.sql`, depois `06-testes.sql`.

A extensão do enunciado continua opcional, valendo até 1 ponto. Se fizerem, acrescentem o DER, o DDL e uma consulta numa pasta `08-extensao/`.
