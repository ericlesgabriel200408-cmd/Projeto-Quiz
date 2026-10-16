# Tech Trivia — Contexto, minimundo e requisitos

## 1. Introdução e contexto

O **Tech Trivia** é um quiz educativo sobre tecnologia. A aplicação apresenta perguntas de múltipla escolha, embaralha as alternativas, mostra o resultado e uma explicação após a resposta, contabiliza pontos e registra a partida de jogadores cadastrados.

O projeto utiliza uma aplicação web em HTML, CSS e JavaScript, um servidor Node.js com Express e um banco PostgreSQL acessado pela biblioteca `pg`. O servidor disponibiliza as rotas `/api/login`, `/api/perguntas` e `/api/partidas`.

A versão atual do código armazena no banco os jogadores, as perguntas, as opções de resposta e as partidas. Portanto, as perguntas e alternativas **não ficam somente no código JavaScript**: `servers.js` consulta as tabelas `perguntas` e `opcoes` para fornecer os dados à interface.

## 1.1 Escopo

| O banco faz | O banco não faz |
|---|---|
| Armazena os nomes de usuário e senhas cadastrados. | Renderiza a interface ou controla as telas do quiz. |
| Armazena enunciados, temas, explicações, opções, indicação da resposta correta e sinalizador de pergunta bônus. | Executa o cronômetro ou embaralha as alternativas; essas tarefas são feitas pelo JavaScript. |
| Registra a pontuação, os pontos bônus, o tempo e a quantidade de ajudas usadas em partidas de jogadores cadastrados. | Registra as partidas do modo Convidado: o código atual não as envia ao banco. |
| Permite consultar as perguntas por meio da API do servidor. | Mantém referências bibliográficas, editoras, idiomas ou palavras-chave: não há tabelas para esses dados na versão atual. |

## 1.2 Usuários

| Usuário | O que faz |
|---|---|
| Jogador cadastrado | Informa nome de usuário e senha, inicia o quiz e tem os resultados da partida enviados ao banco. |
| Convidado | Inicia o quiz sem cadastro; a partida não é persistida no banco. |
| Desenvolvedor | Mantém o código, o banco, as perguntas e as opções de resposta. As rotas de cadastro e consulta são implementadas em `servers.js`. |

## 2. Minimundo

O sistema é um jogo de perguntas e respostas com temas relacionados a tecnologia. A planilha enviada contém 32 perguntas distribuídas entre quatro temas: streaming, jogos online e gamification; privacidade digital, golpes virtuais e senhas; inteligência artificial no dia a dia; e smartphones, dispositivos mobile e baterias.

Cada pergunta é armazenada com identificador, tema, enunciado, pontuação, indicador de bônus e explicação. Cada pergunta possui quatro opções ordenadas, e uma delas deve ser marcada como correta. A rota `/api/perguntas` reúne as opções de cada pergunta e devolve os objetos no formato esperado pelo JavaScript.

O jogador pode entrar com uma conta ou como convidado. No quiz, cada pergunta tem um cronômetro de 20 segundos. A aplicação disponibiliza três pulos, duas utilizações da ajuda que remove duas alternativas erradas e uma utilização da ajuda que revela a resposta correta. O uso de ajuda reduz a pontuação possível daquela pergunta. Respostas corretas valem até 3 pontos nas perguntas comuns e até 5 nas perguntas marcadas como bônus; respostas erradas ou com tempo esgotado valem zero.

Perguntas puladas são apresentadas novamente ao final para revisão. Ao concluir, a aplicação exibe a pontuação, os pontos bônus, o tempo total e um resumo das respostas. Para jogadores cadastrados, a aplicação envia a pontuação total, os pontos bônus, o tempo em segundos e as ajudas usadas para a tabela `partidas`. A interface atual mostra o resultado da partida, mas não consulta nem monta um ranking persistido.

**Observação sobre os dados:** a planilha CSV contém perguntas e respostas corretas, mas não contém alternativas incorretas nem explicações. Para completar a carga inicial do banco, o arquivo `05-dml-consultas.sql` inclui alternativas distratoras e explicações complementares elaboradas para o protótipo. Esses complementos devem ser revisados pela equipe antes da entrega final. A planilha também não identifica quais perguntas são bônus; por isso, a carga inicial não marca perguntas como bônus sem confirmação da equipe.

## 3. Requisitos e regras de negócio

### 3.1 Regras de negócio

| Código | Regra | Evidência no projeto |
|---|---|---|
| RN01 | Cada jogador cadastrado possui identificador e nome de usuário únicos. | Tabela `jogadores` e rota `/api/login`. |
| RN02 | A senha informada é necessária para autenticar o nome de usuário existente. | Rota `/api/login`. |
| RN03 | Cada pergunta deve possuir tema, enunciado e explicação. | Tabela `perguntas`. |
| RN04 | Cada pergunta deve possuir quatro opções ordenadas e exatamente uma opção correta. | Tabela `opcoes`; a carga de dados deve respeitar essa regra. |
| RN05 | Uma opção pertence a uma única pergunta. | FK `opcoes.id_pergunta`. |
| RN06 | Uma partida registrada pertence a um jogador cadastrado. | FK `partidas.id_jogador`. |
| RN07 | Pontuação, pontos bônus, tempo e ajudas registrados não podem ser negativos. | Restrições `CHECK` da tabela `partidas`. |
| RN08 | O modo Convidado não registra a partida no banco. | Condição `userData.isGuest` em `questions.js`. |
| RN09 | O cronômetro de cada pergunta inicia em 20 segundos. | `questionSeconds` em `questions.js`. |
| RN10 | A pontuação máxima é 3 para pergunta comum e 5 para pergunta bônus; cada uso de ajuda naquela pergunta reduz o valor possível em 1, com mínimo de 1 ponto quando a resposta está correta. | Função `selectOption()` em `questions.js`. |

### 3.2 Requisitos funcionais

| Código | Requisito funcional |
|---|---|
| RF01 | Permitir cadastrar um nome de usuário com senha por meio da rota `/api/login`. |
| RF02 | Permitir iniciar o jogo no modo Convidado. |
| RF03 | Consultar as perguntas e opções na rota `/api/perguntas`. |
| RF04 | Exibir o enunciado e quatro opções embaralhadas. |
| RF05 | Exibir o resultado da resposta e sua explicação. |
| RF06 | Disponibilizar ajuda para pular, remover duas opções erradas e revelar a resposta correta, com limites por partida. |
| RF07 | Controlar o tempo de cada pergunta e o tempo total da partida. |
| RF08 | Calcular e apresentar a pontuação final e o resumo das respostas. |
| RF09 | Registrar partidas de jogadores cadastrados pela rota `/api/partidas`. |

### 3.3 Requisitos não funcionais

| Código | Requisito não funcional |
|---|---|
| RNF01 | Utilizar PostgreSQL como SGBD. |
| RNF02 | Utilizar Node.js e Express para disponibilizar a API. |
| RNF03 | Utilizar chaves primárias, chaves estrangeiras, unicidade e verificações para preservar a integridade dos dados. |
| RNF04 | A interface deve permitir navegação por teclado e apresentar contraste visual adequado, conforme os elementos implementados no HTML/CSS. |

### 3.4 Limitações identificadas na versão atual

- O código salva a senha recebida diretamente na tabela `jogadores`; antes de publicar a aplicação, deve-se implementar hash de senha e configurar as credenciais do banco por variáveis de ambiente.
- O cadastro e a autenticação estão combinados na mesma rota: se o nome de usuário não existir, a rota cria a conta.
- A interface exibe “Resultado desta partida”, mas não recupera resultados para formar um ranking persistente.
- A planilha não informa fontes bibliográficas, alternativas incorretas, explicações nem quais perguntas são bônus. Esses dados precisam ser revisados/completados pela equipe.
