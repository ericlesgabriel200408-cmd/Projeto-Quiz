# Projeto-Quiz
# Projeto CYBER ARENA

## Sobre o Projeto
O **Projeto CYBER ARENA** foi desenvolvido como um teste prático de conhecimentos na área de tecnologia, voltado tanto para estudantes quanto para entusiastas da área. O objetivo principal é a entrega final do 2 semestre do curso de **Análise e Desenvolvimento de Sistemas e Ciência da Computação**. A aplicação foi construída **exclusivamente com HTML, CSS e JavaScript puros**, contando com interface responsiva, sistema de perfis com avatares pré-definidos, estatísticas individuais e ranking local persistente no navegador.

---

## Estrutura e Tópicos do Quiz
O questionário é composto por um total de **32 perguntas** (**30 perguntas regulares** + **2 Perguntas Surpresa Bônus**) selecionadas de forma colaborativa pelos membros da equipe. Os temas abrangem:

1. **Streaming, Jogos Online & Gamification** – 8 Perguntas (3 pontos cada)
2. **Privacidade Digital, Golpes Virtuais & Senhas** – 8 Perguntas (3 pontos cada)
3. **Inteligência Artificial no Dia a Dia (Assistentes & Ferramentas)** – 8 Perguntas (3 pontos cada)
4. **Smartphones, Dispositivos Mobile & Baterias** – 6 Perguntas (3 pontos cada)
- **Perguntas Surpresa Bônus:** 2 questões adicionais valendo **5 pontos** cada

---

## Regras e Mecânica de Jogo
- **Tentativas:** Cada questão possui 4 alternativas embaralhadas automaticamente e o usuário dispõe de **1 tentativa** por pergunta.
- **Ajudas Disponíveis:** O jogador tem direito a recursos de auxílio durante a partida, podendo utilizar:
  * **Pular pergunta para o final (até 3 vezes por partida):** Envia a questão para a fila de revisão no final do quiz.
  * **Retirar 2 respostas incorretas (até 2 vezes por partida):** Elimina 2 opções erradas, mantendo a alternativa correta e 1 incorreta.
  * **Mostrar diretamente a resposta correta (1 vez por partida):** Destaca visualmente a alternativa correta na tela (ainda sendo necessário clicar na opção para confirmar a resposta).
- **Cronômetros:** O cronômetro regressivo de **20 segundos** por pergunta funciona como temporizador (exibindo alerta visual pulsante nos últimos 5 segundos e contabilizando 0 ponto caso o tempo acabe). Há também um **cronômetro global acumulativo** (`MM:SS`) na barra superior para registrar o tempo total da partida.
- **Autenticação, Perfil e Modos:**
  * **Conta Salva (Cadastro/Login):** Registra usuário, senha e imagem de perfil pré-definida; libera o acesso à tela **Perfil** e salva os resultados no **Ranking Oficial**.
  * **Modo Convidado:** Permite jogar sem criar conta, sem salvar pontuação no ranking e com o acesso ao **Perfil** bloqueado.
- **Abandono de Partida:** Opção de sair do quiz a qualquer momento pelo botão `ABANDONAR QUIZ`, mediante caixa de confirmação.

---

## Sistema de Pontuação
O sistema foi estruturado para somar um total máximo de **100 pontos** (90 pontos nas 30 questões regulares + 10 pontos nas 2 questões bônus):
- **Acerto sem ajuda:** 3 pontos (pergunta normal) / 5 pontos (pergunta bônus)
- **Acerto com 1 ajuda na questão:** reduz 1 ponto do valor máximo da pergunta
- **Acerto com 2 ajudas na questão:** reduz 2 pontos do valor máximo (pontuação mínima garantida de **1 ponto** por acerto)
- **Erro ou Tempo Esgotado:** 0 pontos
- *Nota:* A pontuação é atualizada em tempo real na barra lateral durante a partida. Ao concluir o quiz, os dados de pontuação, bônus e tempo total são gravados automaticamente no **Perfil** do jogador e no **Ranking Top 10** (ordenado por maior pontuação e menor tempo de conclusão).

---

## Acessibilidade e Layout
- **Acessibilidade:** Alto contraste entre fundo escuro e elementos interativos, feedback duplo (cor + texto explicativo para acertos, erros e tempo esgotado) e suporte à navegação via teclado (`Tab` e `Enter`).
- **Telas da Aplicação:**
  1. **Cadastro / Login:** Entrada com usuário, senha, seleção entre **6 imagens de perfil pré-definidas** (com memória automática do último avatar escolhido) e opção de **Entrar como Convidado**.
  2. **Menu Principal:** Exibe a foto e o nome do jogador ativo, botão principal **Iniciar Quiz** e grade de acesso rápido para **Ranking**, **Perfil**, **Regras** e **Créditos**.
  3. **Meu Perfil (Contas Salvas):** Exibe foto de perfil, contador de partidas concluídas, **Última Pontuação**, **Pontuação Mais Alta**, **Taxa de Acerto (%)** e opção para trocar e salvar a imagem de perfil.
  4. **Ranking Geral (Top 10):** Exibe os 10 melhores colocados com posição, foto de perfil, nome, pontuação e tempo de conclusão.
  5. **Área do Quiz:** Layout responsivo em 2 colunas (Pergunta e alternativas em balões retangulares arredondados à esquerda; Ranking Oficial, dados do jogador e botões de ajuda à direita) e painel de explicação técnica após cada resposta.
  6. **Resultado Final:** Apresenta o placar final, pontos bônus conquistados, tempo total, colocação no ranking e lista rolável de revisão questão por questão.

---

## Paleta de Cores
A identidade visual definitiva do projeto foi implementada via variáveis CSS (`:root`) no arquivo `.css/style.css`:
- **Fundo Principal (Degradê Escuro):** Roxo Escuro Profundo (`#1D1142`) e Azul-Marinho Profundo (`#0D1024`)
- **Cartões e Containers:** Fundo de Cartão (`#1A1636`), Blocos Internos (`#241F47`) e Bordas Sutis (`#39326B`)
- **Tipografia:** Branco Puro (`#FFFFFF`) para títulos/textos principais e Lilás Suave (`#B4B0D0`) para subtítulos
- **Botões e Destaques:**
  * **Botão Principal (`Iniciar Quiz` / `Entrar`):** Amarelo Dourado (`#FFD43B`)
  * **Botão `Ranking`:** Rosa/Magenta Vibrante (`#EC4899`)
  * **Botão `Perfil`:** Escuro Translúcido (`#262147`)
  * **Botão `Regras` e Ajudas:** Violeta Elétrico (`#8B5CF6`)
  * **Botão `Créditos`:** Azul Brilhante (`#3B82F6`)
- **Feedbacks:** Verde Esmeralda (`#22C55E`) para respostas corretas e Vermelho Coral (`#EF4444`) para erros e alertas de tempo.

---

## Organização da Equipe
- **Dinâmica de Trabalho:** A participação é mútua e todos os membros colaboram em todas as etapas. As tarefas semanais são divididas igualmente com prazos estipulados.
- **Integrantes:** Ericles Q., Samuel O., Samuel C. e Vinicius M.
- **Disciplinas:** Desenvolvimento Frontend para Web, Modelagem de Banco de Dados, Algoritmos e Pensamento Computacional, Design Profissional.
- **Comunicação:** Realizada através de grupos no **Discord**, **WhatsApp** e reuniões presenciais no final das aulas.

---

## Arquitetura de Software e Banco de Dados

### Estrutura de Arquivos do Projeto
- `index.html`: Interface única estruturada em 8 telas (Login/Cadastro, Menu Principal, Perfil, Ranking Geral, Regras, Créditos, Área do Quiz e Resultado Final).
- `.css/style.css`: Estilização completa, paleta de cores em variáveis `:root`, avatares estilizados, responsividade mobile e documentação interna em cada bloco `{}`.
- `.js/questions.js`: Base das 32 perguntas e explicações, motor do quiz, cronômetros, sistema de ajudas, autenticação, cálculo de estatísticas de perfil e persistência de dados.

### Persistência e Modelagem de Dados (`localStorage`)
Seguindo a arquitetura definida exclusivamente em **HTML, CSS e JavaScript**, os dados são estruturados em formato JSON no `localStorage` do navegador em três coleções:
1. **`quiz_tech_users_v1` (Contas e Estatísticas de Perfil):** Armazena `name`, `password`, `avatar`, `lastScore` (última pontuação), `bestScore` (pontuação mais alta), `totalCorrect`, `totalAnswered` (base para a taxa de acerto em %) e `gamesPlayed`.
2. **`quiz_tech_ranking_v1` (Ranking Oficial Top 10):** Armazena `name`, `avatar`, `score` e `timeSeconds`, ordenando os 10 melhores resultados.
3. **`quiz_tech_last_user_v1` (Preferência de Acesso):** Armazena o último usuário conectado para pré-selecionar automaticamente sua imagem de perfil ao abrir o sistema.

---

## Como Executar o Projeto

1. **Baixar os Arquivos:**
   - Mantenha a estrutura de pastas do projeto com `index.html` na raiz, `style.css` dentro da pasta `.css/` e `questions.js` dentro da pasta `.js/`.
2. **Abrir no Navegador:**
   - Dê um duplo clique no arquivo `index.html` para abri-lo em qualquer navegador moderno (Chrome, Edge, Firefox) ou execute via **Live Server** no VS Code (`http://127.0.0.1:5500/index.html`).
3. **Jogar:**
   - Cadastre um usuário e escolha uma imagem de perfil para salvar suas estatísticas no **Perfil** e disputar o **Ranking**, ou clique em **Entrar como Convidado** para iniciar uma partida rápida.

---

## Link Acesso Figma

- https://www.figma.com/design/pgkJrx2es9GauxC135AlWO/Projeto-CYBER-ARENA?node-id=0-1&t=ytHLU2aghQHbhCLU-1