# Projeto-Quiz
# Projeto Quiz (Nome em Aberto ainda)

## Sobre o Projeto
O **Projeto Quiz** está a ser desenvolvido como um teste prático de conhecimento, tanto para estudantes como para aspirantes na área tecnológica. O objetivo principal é a entrega final do curso superior de **Análise e Desenvolvimento de Sistemas**. O sistema é composto por uma aplicação web frontend interativa, uma API REST em Node.js/Express e integração com banco de dados relacional PostgreSQL (gerido via pgAdmin 4).

---

## Estrutura e Tópicos do Quiz
O questionário é composto por um total de **30 perguntas + 2 Pergunta Bônus** selecionadas de forma colaborativa pelos membros da equipa. Os temas abrangem:

1. **Streaming, Jogos Online & Gamification** – 8 Perguntas
2. **Inteligência Artificial no Dia a Dia (Assistentes & Ferramentas)** – 8 Perguntas
3. **Smartphones, Dispositivos Mobile & Baterias** – 8 Perguntas
4. **Privacidade Digital, Golpes Virtuais & Senhas** – 8 Perguntas
- **Perguntas Surpresa:** 2 questões adicionais valendo 5 pontos cada

*Complemento de Tópicos do Banco de Dados:*
- **HTML, CSS & Desenvolvimento Web**
- **JavaScript & Programação Assíncrona**
- **Modelagem de Banco de Dados, SQL & PostgreSQL**
- **Algoritmos, Estruturas de Repetição & Lógica de Programação**
- **Engenharia de Software & Arquitetura de APIs**

---

## Regras e Mecânica de Jogo
- **Tentativas:** Cada questão possui 4 opções de resposta e o utilizador dispõe de  **1 tentativas** por pergunta
- **Ajuda Disponível:** O jogador tem direito a **ajuda** durante todo o percurso do quiz, podendo escolher entre:
  * **Retirar 2 respostas incorretas (até 2 vezes por partida):** Elimina 2 opções erradas, mantendo a correta e 1 incorreta.
  * **Mostrar diretamente a resposta correta (1 vez por partida):** Destaca visualmente a alternativa correta na tela (sendo necessário clicar para confirmar a escolha).
  * **Pular pergunta para o final (até 3 vezes por partida):** Envia a questão para a fila de revisão no final do quiz.
- **Dificuldade Progressiva:** O grau de dificuldade aumenta (fácil, médio, avançado) à medida que o utilizador avança nas respostas certas.
- **Cronômetro:** O cronômetro de 20 segundos por pergunta funciona como temporizador (ao zerar considera resposta errada e passa para o feedback). Há também um cronômetro global acumulativo exibido na barra superior para acompanhar o tempo total de jogo.
- **Autenticação e Modos:** Suporte a cadastro/login de jogadores (armazenados na tabela `jogadores` do PostgreSQL) e opção de **Modo Convidado** (para jogar sem persistência no banco).
- **Abandono de Partida:** Opção de sair do quiz a qualquer momento com solicitação de confirmação.

---

## Sistema de Pontuação
O sistema foi concebido para somar um total geral de **100 pontos** (90 pontos corridos + 10 pontos extra nas perguntas finais)
- **1ª Tentativa Correta:** 3 pontos (pergunta normal) / 5 pontos (pergunta bônus)
- **Com 1 Ajuda:** 2 pontos
- **Com 2 Ajudas:** 1 ponto (pontuação mínima para acertos com ajudas)
- **Erro ou Tempo Esgotado:** 0 pontos
- *Nota:* A pontuação funciona de forma corrida e é exibida ao lado no painel e final do jogo. Ao concluir a partida, as estatísticas de pontuação, bônus, tempo total (em segundos) e ajudas utilizadas são gravadas na tabela `partidas`.

---

## Acessibilidade e Layout
- **Acessibilidade:** Foco em acessibilidade visual (cores com contrastes adequados) e motora (navegação facilitada através das teclas `Tab` e `Enter`).
- **Tela Inicial:** Cadastro/Login de utilizador, opção de Convidado, menu principal com botões de início, regras, créditos e atalho de navegação.
- **Elementos Visuais:** Balões informativos em formato retangular com bordas arredondadas. As explicações completas das respostas ocupam o painel de feedback com indicação de acerto/erro e a justificativa técnica completa.
- **Botão Próxima Pergunta:** Exibido juntamente com a resposta completa para garantir o tempo de leitura do utilizador antes de avançar.
- **Painel de Feedback Final:** Exibe o resultado da partida, pontuação total, bônus conquistados, tempo final e uma lista detalhada de revisão questão por questão.

---

## Paleta de Cores (Em Discussão)
Atualmente existem opções de paletas mapeadas para definir a identidade visual do projeto
- **Paleta Tech-Criativa:** Inclui tons como *Void Black* (`#0B0F19`), *Neon Cyan* (`#00FFEC`), *Roxo Magnético* (`#8A2BE2`), *Solar Lime* (`#00FF38`) e *Rosa Fluorescente* (`#FF007F`)
- **Paleta Minimalista Light / Industrial:** Baseada em tons neutros (`#eef2f5`, `#0f172a`), detalhes em Laranja Tech (`#ff6b35`), Destaque Verde Sucesso (`#16a34a`) e Alerta Vermelho (`#dc2626`).
- **Paleta Minimalista Avançado (SaaS, FinTech e IA)**

---

## Organização da Equipe
- **Dinâmica de Trabalho:** A participação é mútua e todos os membros colaboram em todas as etapas. As tarefas semanais são divididas igualmente com prazos estipulados.
- **Integrantes:** Ericles Q., Samuel O., Samuel C., Vinicius M. e Johhann S.
- **Disciplinas:** Desenvolvimento Frontend para Web, Modelagem de Banco de Dados, Algoritmos e Pensamento Computacional, Design Profissional.
- **Comunicação:** Realizada através de grupos no **Discord**, **WhatsApp** e reuniões presenciais no final das aulas.

---

## Arquitetura de Software e Banco de Dados

### Estrutura de Arquivos do Projeto
- `index.html`: Interface única estruturada em telas (Cadastro, Menu, Regras, Créditos, Quiz e Feedback).
- `style.css`: Estilização e layout responsivo da aplicação.
- `questions.js`: Lógica do jogo (JavaScript), gerenciamento de temporizadores, ajudas, controle de estado e integração `fetch` com a API.
- `servers.js`: Servidor backend Node.js / Express com conexão à base de dados PostgreSQL.
- `banco_de_dados.sql`: Script DDL com a criação das tabelas e chave estrangeiras.
- `Peguntas e Reposta Projeto Quiz.csv`: Mapeamento das questões e alternativas.

### Modelagem do Banco de Dados (PostgreSQL)
1. **`jogadores`**: Armazena `id_jogador`, `nome_usuario` (único), `senha` e `data_cadastro`.
2. **`perguntas`**: Armazena `id_pergunta`, `topico`, `enunciado`, `pontos`, `is_bonus` e `explicacao`.
3. **`opcoes`**: Armazena `id_opcao`, `id_pergunta` (FK), `texto_opcao`, `is_correta` e `ordem`.
4. **`partidas`**: Armazena `id_partida`, `id_jogador` (FK), `pontuacao_total`, `pontos_bonus`, `tempo_segundos`, `ajudas_usadas` e `data_partida`.

---

## Como Executar o Projeto

1. **Configurar a Base de Dados:**
   - Execute o script `banco_de_dados.sql` (ou os scripts `04-ddl.sql` e `05-dml-consultas.sql`) no PostgreSQL via **pgAdmin 4**.
2. **Iniciar o Backend Node.js:**
   - Instale as dependências com `npm install express pg cors`.
   - Execute o servidor com `node .js/servers.js`.
   - A API estará rodando em `http://localhost:3000/api`.
3. **Executar a Aplicação:**
   - Abra o arquivo `index.html` no navegador ou acesse via servidor local para iniciar o Quiz Tech.