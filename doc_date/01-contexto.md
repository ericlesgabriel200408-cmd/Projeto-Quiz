# Passos 1 a 3 — Contexto, minimundo e requisitos

## 1. Introdução e contexto

O Tech Trivia é um jogo Quiz com 32 perguntas, tendo seu sistema de pontuação de acordo com as respostas corretas, em seguida também conta com um sistema que disponibiliza fontes e explicação das perguntas.
Possui sistemas de ajuda e tempo de conclusão do quiz.

O objetivo do banco é armazenar e organizar os dados dos usuários, pontuações e ranks. Ela lista o nome do usuário, idade, pontução do jogador e o rank final dos jogadores para calcular a média de potuação geral, ficando de fora do banco perguntas e resposta, que ficam diretamente nas linhas de códigos.


## 1.1 Escopo
A tabela a seguir apresenta as responsabilidades do banco de dados e o que está fora do seu escopo.

| O banco faz | O banco não faz |
|---|---|
| Armazena cadastro de usuário. Nome, senha, pontuação e ranking.   |Armazenamento de perguntas, respostas, imagens e interface gráfica.  |
| Permite pesquisa por palavra chave. | 

## 1.2 Usuários

| Usuário | O que faz |
|---|---|
| Jogador             | lê as perguntas e escolhe uma alternativa dentre as existentes, consulta a explicação e fonte após(resposta: certa ou errada) |
| desenvolvedor |Responsavel pela criação do quiz, cadastro, alteração e exclusão de questões, alternativas, categorias, níveis de dificuldade, referências e palavras-chave.


## 2. Minimundo
Minimundo – Projeto Quiz

O sistema consiste em um jogo de perguntas e respostas (Quiz) desenvolvido por um grupo de estudantes com o objetivo de facilitar os estudos de forma rápida, prática e interativa. O sistema permite que o usuário se cadastre, acesse o Quiz, responda perguntas de diferentes temas e acompanhe sua pontuação ao final da partida.

O Quiz possui quatro temas principais: Streaming, Jogos Online & Gamification; Inteligência Artificial no Dia a Dia; Smartphones, Dispositivos Mobile & Baterias; e Privacidade Digital, Golpes Virtuais & Senhas. Cada tema possui perguntas elaboradas pelos próprios criadores do sistema. O banco de dados não gera perguntas automaticamente, sendo todas as questões previamente cadastradas pelos responsáveis pelo projeto.

Cada partida possui 32 perguntas, sendo que cada questão apresenta quatro alternativas de resposta. O usuário pode ter até duas tentativas para responder uma pergunta e também possui recursos de ajuda, podendo escolher entre eliminar duas alternativas ou mostrar a resposta correta, com uso limitado durante o Quiz.

As perguntas possuem diferentes níveis de dificuldade, começando pelo nível fácil e podendo avançar para médio e avançado conforme o desempenho do usuário. Também existem duas perguntas surpresa, que possuem uma pontuação diferenciada de 5 pontos cada.

O sistema possui um mecanismo de pontuação, no qual o usuário recebe mais pontos quando responde corretamente na primeira tentativa. Uma resposta correta na primeira tentativa vale 3 pontos, uma resposta utilizando ajuda vale 2 pontos e uma resposta correta na segunda tentativa vale 1 ponto. A pontuação é acumulada durante a partida e apresentada ao usuário ao final do Quiz.

Além do sistema de perguntas, o Quiz possui uma tela inicial com cadastro de usuário, seguida de uma tela principal contendo opções como iniciar o jogo, visualizar as regras, créditos e ranking de pontuação. O sistema também busca oferecer acessibilidade por meio de contraste adequado de cores e navegação utilizando as teclas Tab e Enter.

Após o usuário selecionar uma alternativa, o sistema apresenta a resposta e uma explicação completa, permitindo que o jogador compreenda o conteúdo mesmo quando responder incorretamente. Em seguida, o usuário pode utilizar o botão de continuar para avançar para a próxima pergunta.

Ao finalizar todas as perguntas, o sistema apresenta o resultado final da partida, permitindo que o usuário conheça sua pontuação e possa participar do ranking. Dessa forma, o sistema busca unir aprendizado, competição e gamificação, tornando o processo de estudo mais dinâmico e acessível.

> 

## 3. Requisitos e regras de negócio

Esta seção reúne as regras de negócio, os requisitos funcionais e os requisitos não funcionais do sistema.

### 3.1 Regras de negócio

| Código | Texto do requisito | Tipo |
|---|---|---|
| RD01 | Toda questão possui um código único, título, enunciado e explicação, todos obrigatórios. | Regra de negócio |
| RD02 | Toda questão pertence a uma categoria dentre as 4 cateogiras existentes | Regra de negócio |
| RD03 | Toda questão pertence a um nivel de difilculdade, sendo ela progressiva, começando fácil e progressivamente aumentando o nivel de dificuldade | Regra de negócio |
| RD04 | Toda questão possui alternativas identificadas por letras, cada uma com seu texto. | Regra de negócio |
| RD05 | Exatamente uma alternativa de cada questão é correta. | Regra de negócio |
| RD06 | Cada questão pode possuir zero ou mais palavras-chave. | Regra de negócio |
| RD07 | Cada jogador possui um nome de identificação e pode acumular pontuações. | Regra de negócio |
| RD08 | O ranking deve ser organizado com base nas pontuações registradas dos jogadores. | Regra de negócio |
| RD09 | Opção de ajuda contendo 1 ajuda que elimina 2 respostas erradas  | Regra de negócio |
| RD10 | Cronometro funcional identificando o tempo de conclusão final, presente no ranking  | Regra de negócio |

### 3.2 Requisitos funcionais

| Código | Texto do requisito | Tipo |
|---|---|---|
| RF01 | O sistema deve permitir cadastrar questões. | Funcional |
| RF02 | O sistema deve permitir consultar questões por categoria. | Funcional |
| RF03 | O sistema deve permitir filtrar questões por nível de dificuldade. | Funcional |
| RF04 | O sistema deve permitir consultar as alternativas e os gabaritos. | Funcional |
| RF05 | O sistema deve permitir alterar e excluir questões. | Funcional |

### 3.3 Requisitos não funcionais

| Código | Texto do requisito | Tipo |
|---|---|---|
| RNF01 | O banco de dados deve utilizar PostgreSQL. | Não funcional |
| RNF02 | O banco de dados deve garantir a integridade dos dados. | Não funcional |
| RNF03 | O banco de dados deve evitar registros duplicados nas informações que exigem unicidade. | Não funcional |

### 3.4 Classificação dos requisitos

- **Funcional:** descreve uma ação ou serviço que o sistema deve oferecer.
- **Não funcional:** define uma característica, restrição ou condição de qualidade do sistema, como o SGBD utilizado e a integridade dos dados.
- **Regra de negócio:** estabelece uma condição ou regra que os dados e as operações do sistema devem respeitar.

