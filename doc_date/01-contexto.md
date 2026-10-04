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

Um ou dois parágrafos, na voz de quem encomenda o sistema. É deste texto que saem as entidades e as regras. Cubram pergunta, categoria, fonte, publicador, idioma e alternativas, inclusive a possibilidade de mais de duas alternativas no futuro.
Somos um grupo de estudantes desenvolvendo um jogo Quiz com o intuito de facilitar os estudos com perguntas rápidas e práticas, com 4 temas definidos sendo eles abordados no dia a dia
sendo cada pergunta com 4 alternativas de escolhas, não tem perguntas e resposta repetidas , as perguntas são feitas pelos criadores do sistema o banco não gera nenhuma pergunta automaticamente.
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