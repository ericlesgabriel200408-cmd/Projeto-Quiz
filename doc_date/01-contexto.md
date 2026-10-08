# Passos 1 a 3 — Contexto, minimundo e requisitos

Marco M1. Copiem para `entregas/01-contexto.md`.

## 1. Introdução e contexto

Em um parágrafo: o que é o Tech Trivia e qual o objetivo deste banco.
O Tech Trivia é um jogo Quiz com 32 perguntas, tendo seu sistema de pontuação de acordo com a respsota correta, O objetivo do banco é armazenar e organizar os dados dos usuários,pontuações e ranks
Escopo. Listem só o que o banco faz e o que fica de fora.
Ela lista o nome do usuário, idade,pontução do usuário e o rank final dos usuários para calcular a média de potuação geral, fica de fora as perguntas e resposta que ficam diretamente nas linhas de códigos

| O banco faz | O banco não faz |
| armazena cadstro de usuário(nome,senha),pontuação,rank   | não armazena perguntas,não armazena resposta, |
| | |

Usuários. Quem usa o sistema e o que cada um faz com os dados. Não criem tabela de usuário se nenhum requisito pedir cadastro, senha ou sessão.

| Usuário | O que faz |
| Jogador | responde as perguntas com o objetivo de aumentar a pontuação|
| Quem cadastra perguntas |Fiscaliza as reposta completa e atividades dos jogadores |

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
| Código   | Categoria        | Item / Regra                                                                                                                                 |
| -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **RD01** | Regra de Negócio | O Quiz possui exatamente **32 perguntas** em uma partida.                                                                                    |
| **RD02** | Regra de Negócio | As perguntas são distribuídas entre **4 temas definidos pelos criadores do sistema**.                                                        |
| **RD03** | Regra de Negócio | Cada pergunta possui exatamente **4 alternativas de resposta**.                                                                              |
| **RD04** | Regra de Negócio | Cada pergunta possui **uma única alternativa correta**.                                                                                      |
| **RD05** | Regra de Negócio | As perguntas são **cadastradas pelos criadores do sistema** e não são geradas automaticamente pelo banco de dados.                           |
| **RD06** | Regra de Negócio | O Quiz não possui **perguntas repetidas**.                                                                                                   |
| **RD07** | Regra de Negócio | As alternativas de uma mesma pergunta não são repetidas.                                                                                     |
| **RD08** | Regra de Negócio | As perguntas possuem nível de dificuldade **fácil, médio ou avançado**.                                                                      |
| **RD09** | Regra de Negócio | O Quiz possui **2 perguntas surpresa**, com valor de **5 pontos cada**.                                                                      |
| **RD10** | Regra de Negócio | A pontuação é definida pela forma de resposta: **3 pontos na primeira tentativa, 2 pontos utilizando ajuda e 1 ponto na segunda tentativa**. |
| **RD11** | Regra de Negócio | Cada pergunta permite até **2 tentativas**, e cada opção de ajuda pode ser utilizada **uma vez durante o Quiz**.

| Código   | Categoria           | Item / Requisito                                                                                                    |
| -------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **RA01** | Requisito Funcional | O sistema deve permitir o **cadastro do usuário**.                                                                  |
| **RA02** | Requisito Funcional | O sistema deve disponibilizar as opções **Iniciar, Regras, Créditos e Ranking**.                                    |
| **RA03** | Requisito Funcional | O sistema deve exibir o **enunciado, as alternativas e as opções de ajuda** de cada pergunta.                       |
| **RA04** | Requisito Funcional | O sistema deve permitir o uso das opções de ajuda **eliminar duas alternativas** ou **mostrar a resposta correta**. |
| **RA05** | Requisito Funcional | O sistema deve apresentar **feedback com a resposta, explicação e exemplo** após a resposta do usuário.             |
| **RA06** | Requisito Funcional | O sistema deve **calcular a pontuação** conforme as regras definidas para cada resposta.                            |
| **RA07** | Requisito Funcional | O sistema deve **exibir a pontuação final ao término do Quiz**.                                                     ||

| Código    | Categoria      | Requisito                                                                                                |
| --------- | -------------- | -------------------------------------------------------------------------------------------------------- |
| **RNF01** | Acessibilidade | O sistema deve utilizar **cores com contraste adequado** para facilitar a visualização das informações.  |
| **RNF02** | Acessibilidade | O sistema deve permitir **navegação por teclado utilizando Tab e Enter**.                                |
| **RNF03** | Interface      | A interface deve utilizar **elementos retangulares com bordas arredondadas** para perguntas e respostas. |
| **RNF04** | Interface      | A interface deve utilizar **elementos visuais relacionados aos temas de tecnologia e jogos**.            |
