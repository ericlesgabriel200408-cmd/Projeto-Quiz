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

Cada partida possui 30 perguntas, sendo que cada questão apresenta quatro alternativas de resposta. O usuário pode ter até duas tentativas para responder uma pergunta e também possui recursos de ajuda, podendo escolher entre eliminar duas alternativas ou mostrar a resposta correta, com uso limitado durante o Quiz.

As perguntas possuem diferentes níveis de dificuldade, começando pelo nível fácil e podendo avançar para médio e avançado conforme o desempenho do usuário. Também existem duas perguntas surpresa, que possuem uma pontuação diferenciada de 5 pontos cada.

O sistema possui um mecanismo de pontuação, no qual o usuário recebe mais pontos quando responde corretamente na primeira tentativa. Uma resposta correta na primeira tentativa vale 3 pontos, uma resposta utilizando ajuda vale 2 pontos e uma resposta correta na segunda tentativa vale 1 ponto. A pontuação é acumulada durante a partida e apresentada ao usuário ao final do Quiz.

Além do sistema de perguntas, o Quiz possui uma tela inicial com cadastro de usuário, seguida de uma tela principal contendo opções como iniciar o jogo, visualizar as regras, créditos e ranking de pontuação. O sistema também busca oferecer acessibilidade por meio de contraste adequado de cores e navegação utilizando as teclas Tab e Enter.

Após o usuário selecionar uma alternativa, o sistema apresenta a resposta e uma explicação completa, permitindo que o jogador compreenda o conteúdo mesmo quando responder incorretamente. Em seguida, o usuário pode utilizar o botão de continuar para avançar para a próxima pergunta.

Ao finalizar todas as perguntas, o sistema apresenta o resultado final da partida, permitindo que o usuário conheça sua pontuação e possa participar do ranking. Dessa forma, o sistema busca unir aprendizado, competição e gamificação, tornando o processo de estudo mais dinâmico e acessível.

> 

## 3. Requisitos e regras de negócio

Cada RD01–RD11 e cada RA01–RA07 entra numa linha. Não deixem código de fora.

Categoria/ ItemRegras de Negócio (RN)
Estrutura: 30 perguntas divididas em 4 temas + 2 perguntas surpresa.Alternativas: Cada pergunta possui 4 opções.Tentativas: Até 2 tentativas por pergunta.Pontuação: Máximo de 100 pontos (90 corridas + 10 das surpresas).Critério de Pontuação: 3 pontos (1ª tentativa), 2 pontos (com ajuda), 1 ponto (2ª tentativa).Exibição de Pontuação: Acumulada de forma oculta e revelada apenas ao final.Ajuda: 2 opções (eliminar 2 erradas ou mostrar a correta), utilizáveis apenas 1 vez cada no quiz inteiro.Dificuldade: Progressiva (fácil, médio e avançado).Cronômetro (Em debate): Decrescente, pausado durante o feedback, encerra o jogo caso zere.

Requisitos Funcionais (RF)
Cadastro de usuário na tela inicial. Navegação para Iniciar, Regras, Créditos e Ranking.
Exibição de enunciado, alternativas e ajudas. Aplicação do recurso de ajuda escolhido.
Feedback visual com explicação/exemplo completo após a resposta.
Controle de tempo regressivo e pausa automática (se implementado).
Cálculo e exibição da pontuação final.

Requisitos Não Funcionais (RNF)	
Acessibilidade Visual: Paleta de cores com contraste adequado.
Acessibilidade Motora: Navegação completa por teclado (Tab e Enter).
Design/Interface: Balões retangulares de bordas arredondadas e elementos visuais tematizados (tecnologia e jogos).
