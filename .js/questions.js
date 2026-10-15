
/* QUIZ TECH — BANCO DE PERGUNTAS 30 perguntas principais + 2 perguntas bônus */

const questionsData = [
  {
    id: 1,
    topic: "Streaming, jogos online e gamification",
    question: "Que tipo de serviço plataformas como Netflix, Disney+ e Spotify oferecem?",
    options: [
      "Serviços de streaming (de áudio e vídeo)",
      "Armazenamento ilimitado de arquivos em nuvem",
      "Redes sociais para compartilhamento de código",
      "Plataformas exclusivas para criação de jogos 3D"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 2,
    topic: "Streaming, jogos online e gamification",
    question: "O que é indispensável para conseguir jogar um jogo online multiplayer?",
    options: [
      "Conexão com a internet",
      "Placa de vídeo dedicada de última geração",
      "Óculos de realidade virtual (VR)",
      "Assinatura mensal de provedor local"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 3,
    topic: "Streaming, jogos online e gamification",
    question: "Como é chamada a aplicação de elementos e dinâmicas de jogos em contextos que não são jogos?",
    options: [
      "Gamification (ou Gamificação)",
      "Engenharia Reversa",
      "Realidade Aumentada",
      "Virtualização de Processos"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 4,
    topic: "Streaming, jogos online e gamification",
    question: "Qual é a principal plataforma voltada para transmissões e streaming de jogos ao vivo?",
    options: ["Twitch", "Spotify", "Vimeo", "Steam"],
    answer: 0,
    points: 3
  },
  {
    id: 5,
    topic: "Streaming, jogos online e gamification",
    question: "Qual recurso das plataformas de streaming permite assistir a conteúdos sem estar conectado à internet?",
    options: [
      "Modo offline (ou download de conteúdo)",
      "Transmissão via Bluetooth",
      "Espelhamento de tela",
      "Sincronização em nuvem ativa"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 6,
    topic: "Streaming, jogos online e gamification",
    question: "O que o atraso de conexão (lag) causa nos jogos online competitivos?",
    options: [
      "Prejudica o desempenho e tempo de resposta do jogador",
      "Aumenta a resolução gráfica automaticamente",
      "Melhora a precisão dos comandos executados",
      "Acelera a taxa de atualização da tela (FPS)"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 7,
    topic: "Streaming, jogos online e gamification",
    question: "Quais são dois exemplos comuns de elementos visuais usados em gamificação para engajar usuários?",
    options: [
      "Sistemas de ranking e medalhas (badges)",
      "Pop-ups e banners publicitários",
      "Listas de termos de uso e privacidade",
      "Caixas de texto e botões de envio"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 8,
    topic: "Streaming, jogos online e gamification",
    question: "Todos os jogos online são totalmente gratuitos?",
    options: [
      "Não, muitos são pagos ou possuem microtransações",
      "Sim, todos são 100% gratuitos por lei",
      "Sim, desde que jogados pelo navegador web",
      "Não, apenas jogos educativos cobram mensalidade"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 9,
    topic: "Privacidade digital, golpes virtuais e senhas",
    question: "Quais elementos devem ser combinados para criar uma senha forte?",
    options: [
      "Letras maiúsculas, minúsculas, números e caracteres especiais",
      "Apenas números em sequência crescente",
      "Data de nascimento e nome completo",
      "Palavras simples em inglês sem símbolos"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 10,
    topic: "Privacidade digital, golpes virtuais e senhas",
    question: "Por que não se deve reutilizar a mesma senha em múltiplos sites?",
    options: [
      "Porque compromete a segurança de todas as contas caso uma seja vazada",
      "Porque diminui a velocidade da conexão de internet",
      "Porque os navegadores bloqueiam senhas repetidas",
      "Porque aumenta o consumo de memória RAM do dispositivo"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 11,
    topic: "Privacidade digital, golpes virtuais e senhas",
    question: "Como é chamado o golpe cibernético que engana pessoas para obter dados pessoais ou senhas?",
    options: ["Phishing", "Firewall", "Ransomware", "Defacing"],
    answer: 0,
    points: 3
  },
  {
    id: 12,
    topic: "Privacidade digital, golpes virtuais e senhas",
    question: "Qual camada extra de verificação aumenta a segurança do acesso às contas online?",
    options: [
      "Autenticação de dois fatores (2FA)",
      "Troca de IP automático",
      "Criptografia de disco rígido",
      "Verificação de antivírus mensal"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 13,
    topic: "Privacidade digital, golpes virtuais e senhas",
    question: "Como devemos agir ao receber links de remetentes desconhecidos em e-mails ou mensagens?",
    options: [
      "Não clicar e verificar a procedência da mensagem",
      "Clicar imediatamente para conferir o conteúdo",
      "Encaminhar para todos os contatos da lista",
      "Responder solicitando mais informações do remetente"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 14,
    topic: "Privacidade digital, golpes virtuais e senhas",
    question: "Qual ferramenta ajuda a criar e armazenar senhas complexas e seguras?",
    options: [
      "Gerenciador de senhas",
      "Bloco de notas do sistema",
      "Planilha compartilhada",
      "Histórico do navegador"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 15,
    topic: "Privacidade digital, golpes virtuais e senhas",
    question: "Onde podem ocorrer golpes virtuais além de e-mails?",
    options: [
      "Em redes sociais, aplicativos de mensagens e sites falsos",
      "Exclusivamente em caixas eletrônicos presenciais",
      "Apenas em redes Wi-Fi públicas de aeroportos",
      "Somente em computadores sem sistema operacional"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 16,
    topic: "Privacidade digital, golpes virtuais e senhas",
    question: "Qual o risco de compartilhar dados pessoais em excesso nas redes sociais?",
    options: [
      "Aumento dos riscos de invasão de privacidade e engenharia social",
      "Perda automática da conta de e-mail vinculada",
      "Desativação dos recursos de câmera do celular",
      "Redução no limite de armazenamento em nuvem"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 17,
    topic: "Inteligência artificial no dia a dia",
    question: "Que tecnologia permite o funcionamento de assistentes como Siri, Alexa e Google Assistant?",
    options: [
      "Inteligência Artificial (IA)",
      "Computação Quântica pura",
      "Redes Fibra Óptica",
      "Armazenamento Flash"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 18,
    topic: "Inteligência artificial no dia a dia",
    question: "O que os aplicativos usam para sugerir filmes e músicas personalizados ao usuário?",
    options: [
      "Algoritmos de recomendação baseados em IA",
      "Sorteios aleatórios no banco de dados",
      "Filtros de localização por GPS apenas",
      "Pesquisas manuais de moderadores"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 19,
    topic: "Inteligência artificial no dia a dia",
    question: "Como a Inteligência Artificial consegue identificar tendências e fazer previsões?",
    options: [
      "Aprendendo padrões a partir de grandes volumes de dados (Machine Learning)",
      "Consultando fóruns na internet em tempo real",
      "Copiando códigos estáticos pré-programados",
      "Simulando circuitos físicos analógicos"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 20,
    topic: "Inteligência artificial no dia a dia",
    question: "Chatbots de atendimento ao cliente utilizam qual tecnologia para responder aos usuários?",
    options: [
      "Inteligência Artificial e Processamento de Linguagem Natural (PLN)",
      "Tradução automática de código assembly",
      "Reconhecimento exclusivo de comandos numéricos",
      "Scripts de macros executados manualmente"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 21,
    topic: "Inteligência artificial no dia a dia",
    question: "Qual recurso de e-mail usa IA para bloquear mensagens indesejadas?",
    options: [
      "Filtro de spam",
      "Caixa de saída",
      "Marcador de rascunhos",
      "Cópia oculta (Cco)"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 22,
    topic: "Inteligência artificial no dia a dia",
    question: "Que tipo de Inteligência Artificial é capaz de gerar novos textos, imagens e áudios a partir de comandos (prompts)?",
    options: [
      "IA Generativa",
      "IA Reativa Estática",
      "Algoritmo de Busca Linear",
      "Compilador de Linguagem"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 23,
    topic: "Inteligência artificial no dia a dia",
    question: "Qual tecnologia de IA é amplamente usada para desbloqueio de segurança em smartphones?",
    options: [
      "Reconhecimento facial",
      "Leitura de retina a laser infravermelho",
      "Análise de voz em segundo plano",
      "Sensor de proximidade ultrassônico"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 24,
    topic: "Inteligência artificial no dia a dia",
    question: "As decisões tomadas por sistemas de Inteligência Artificial são sempre livres de erros?",
    options: [
      "Não, sistemas de IA podem conter falhas e vieses nos dados",
      "Sim, pois computadores não cometem erros em hipótese alguma",
      "Sim, desde que estejam conectados à internet",
      "Não, elas erram apenas quando falta energia elétrica"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 25,
    topic: "Smartphones, dispositivos mobile e baterias",
    question: "Qual é a tecnologia de bateria mais utilizada nos smartphones atuais?",
    options: [
      "Íons de Lítio (Li-Ion)",
      "Níquel-Cádmio (NiCd)",
      "Chumbo-Ácido",
      "Alcalina Recarregável"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 26,
    topic: "Smartphones, dispositivos mobile e baterias",
    question: "Manter o celular sempre carregado em 100% é a melhor prática para preservar a bateria?",
    options: [
      "Não, o ideal para a vida útil é manter a carga entre 20% e 80%",
      "Sim, pois evita que a bateria descarregue totalmente",
      "Sim, pois garante maior velocidade no processador",
      "Não, o correto é descarregar a bateria até 0% diariamente"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 27,
    topic: "Smartphones, dispositivos mobile e baterias",
    question: "Para que serve o Modo Avião em um dispositivo móvel?",
    options: [
      "Desativa conexões sem fio e ajuda a economizar energia da bateria",
      "Aumenta o sinal da rede de dados móveis em voos",
      "Ativa o piloto automático de navegação GPS",
      "Permite fazer chamadas de emergência sem chip"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 28,
    topic: "Smartphones, dispositivos mobile e baterias",
    question: "Qual tipo de tela consome menos energia ao exibir fundos e cores escuras?",
    options: [
      "Tela AMOLED (ou OLED)",
      "Tela LCD IPS",
      "Tela TFT",
      "Tela de Matriz Passiva"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 29,
    topic: "Smartphones, dispositivos mobile e baterias",
    question: "Quais aparelhos, além dos smartphones, se enquadram na categoria de dispositivos mobile?",
    options: [
      "Tablets, smartwatches e e-readers",
      "Computadores Desktop e Servidores Rack",
      "Monitores CRT e Teclados Mecânicos",
      "Roteadores de fibra e Racks de rede"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 30,
    topic: "Smartphones, dispositivos mobile e baterias",
    question: "Qual o principal impacto do uso frequente de carregamento rápido na bateria?",
    options: [
      "Aumento da geração de calor durante o carregamento",
      "Perda imediata da memória de armazenamento",
      "Danos irreversíveis na tela do aparelho",
      "Cancelamento do plano de dados da operadora"
    ],
    answer: 0,
    points: 3
  },
  {
    id: 31,
    topic: "PERGUNTA SURPRESA BÔNUS!",
    isBonus: true,
    question: "BÔNUS 1: Como o nível de brilho da tela impacta a bateria do celular?",
    options: [
      "Brilho mais alto consome mais energia e reduz a duração da bateria",
      "O brilho não possui qualquer relação com o consumo de energia",
      "Brilho mais baixo consome mais bateria por demandar mais processamento",
      "O consumo depende apenas da cor do papel de parede escolhido"
    ],
    answer: 0,
    points: 5
  },
  {
    id: 32,
    topic: "PERGUNTA SURPRESA BÔNUS!",
    isBonus: true,
    question: "BÔNUS 2: Como as atualizações do sistema operacional beneficiam a bateria do aparelho?",
    options: [
      "Otimizando o gerenciamento de energia e consumo dos aplicativos",
      "Aumentando a capacidade física de miliamperes (mAh) da bateria",
      "Desativando permanentemente as notificações de redes sociais",
      "Reduzindo a velocidade da memória RAM para gastar menos carga"
    ],
    answer: 0,
    points: 5
  }
];


/* =====================================================
   EXPLICAÇÕES DAS RESPOSTAS
===================================================== */


const explanations = {
  1: "Serviços de streaming transmitem áudio e vídeo pela internet, permitindo acessar filmes, séries e músicas sob demanda.",
  2: "Jogos online multiplayer precisam de conexão com a internet para trocar informações entre os jogadores e os servidores.",
  3: "Gamificação é a aplicação de elementos de jogos, como pontos, desafios e recompensas, em atividades que não são jogos.",
  4: "A Twitch é uma plataforma conhecida por transmissões ao vivo, especialmente de jogos, com interação entre criadores e espectadores.",
  5: "O modo offline permite baixar conteúdos antecipadamente para assistir ou ouvir sem conexão ativa com a internet.",
  6: "O lag provoca atrasos na comunicação entre o jogador e o servidor, prejudicando o tempo de resposta e o desempenho.",
  7: "Rankings e medalhas representam conquistas e progresso, ajudando a motivar e engajar os participantes.",
  8: "Nem todos os jogos são gratuitos. Alguns são pagos e outros oferecem compras opcionais, assinaturas ou microtransações.",
  9: "Uma senha forte deve ser difícil de adivinhar. Comprimento, variedade de caracteres e exclusividade ajudam a proteger a conta.",
  10: "Se uma senha reutilizada vazar, outras contas que usam a mesma combinação também podem ficar vulneráveis.",
  11: "Phishing é uma tentativa de enganar a pessoa para que revele informações, como senhas e dados bancários.",
  12: "A autenticação de dois fatores adiciona uma segunda etapa de verificação além da senha.",
  13: "Links inesperados podem levar a páginas falsas ou maliciosas. Verifique o remetente e o endereço antes de clicar.",
  14: "Gerenciadores de senhas ajudam a criar, guardar e organizar senhas fortes sem precisar memorizar todas.",
  15: "Golpes digitais podem ocorrer em redes sociais, aplicativos de mensagens, e-mails e sites falsos.",
  16: "O excesso de informações pessoais publicadas pode aumentar os riscos de fraude, engenharia social e invasão de privacidade.",
  17: "Assistentes virtuais usam inteligência artificial para interpretar pedidos e ajudar a realizar tarefas.",
  18: "Algoritmos de recomendação analisam padrões e preferências para sugerir conteúdos que podem interessar ao usuário.",
  19: "Machine Learning identifica padrões nos dados e usa esses padrões para classificar informações ou fazer previsões.",
  20: "Chatbots podem usar inteligência artificial e processamento de linguagem natural para interpretar mensagens e formular respostas.",
  21: "Filtros de spam identificam mensagens suspeitas ou indesejadas usando regras e, em muitos serviços, modelos de IA.",
  22: "A IA generativa cria novos conteúdos, como textos, imagens e áudios, a partir de instruções e padrões aprendidos.",
  23: "O reconhecimento facial compara características do rosto para ajudar a confirmar a identidade do usuário.",
  24: "Sistemas de IA podem errar por limitações do modelo, dados inadequados ou vieses. Seus resultados precisam ser avaliados.",
  25: "Baterias de íons de lítio são comuns em smartphones por sua densidade de energia e capacidade de recarga.",
  26: "Evitar calor e longos períodos em níveis extremos de carga pode ajudar a reduzir o desgaste da bateria. As recomendações variam por aparelho.",
  27: "O modo avião desativa inicialmente as conexões de rádio celular e pode reduzir o consumo de energia, dependendo do uso.",
  28: "Em telas OLED e AMOLED, pixels escuros podem consumir menos energia porque cada pixel emite sua própria luz.",
  29: "Tablets, smartwatches e leitores digitais são dispositivos móveis projetados para uso portátil.",
  30: "O carregamento rápido pode gerar mais calor. A temperatura elevada é um dos fatores que contribuem para o desgaste da bateria.",
  31: "Brilho elevado exige mais energia da tela e pode reduzir a duração da bateria.",
  32: "Atualizações podem corrigir falhas e melhorar a eficiência energética, embora o efeito varie conforme o aparelho e a atualização."
};

/* =====================================================
   ESTADO E REGRAS DO JOGO
===================================================== */
let currentQuestionIndex = 0;
let userScore = 0;
let bonusPointsEarned = 0;
let userAnswers = [];
let userData = { name: "", email: "", cpf: "", isGuest: false };
let timerInterval = null;
let secondsElapsed = 0;
let questionSeconds = 20;
let answerAlreadySelected = false;
let currentQuestionHelpCount = 0;
let helpCounts = { skip: 3, remove: 2, reveal: 1 };
let skippedQuestions = [];
let gameQuestions = [];
let isReviewingSkipped = false;
let removedOptionIndexes = new Set();
let currentShuffledOptions = [];
let revealedCorrectAnswer = false;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("register-form")?.addEventListener("submit", handleStartQuiz);
  document.getElementById("btn-guest-login")?.addEventListener("click", startAsGuest);
  document.getElementById("btn-start-game")?.addEventListener("click", startQuizGame);
  document.getElementById("btn-show-rules")?.addEventListener("click", () => showScreen("screen-rules"));
  document.getElementById("btn-show-credits")?.addEventListener("click", () => showScreen("screen-credits"));
  document.getElementById("btn-back-menu")?.addEventListener("click", () => showScreen("screen-menu"));
  document.getElementById("btn-back-menu-credits")?.addEventListener("click", () => showScreen("screen-menu"));
  document.getElementById("btn-hint")?.addEventListener("click", removeTwoOptions);
  document.getElementById("btn-skip")?.addEventListener("click", skipQuestion);
  document.getElementById("btn-reveal")?.addEventListener("click", revealCorrectAnswer);
  document.getElementById("btn-exit-quiz")?.addEventListener("click", abandonQuiz);
  document.getElementById("btn-restart")?.addEventListener("click", restartQuiz);
  document.getElementById("btn-next-question")?.addEventListener("click", nextQuestion);
  updateHelpButtons();
});

function showScreen(screenId) {
  document.querySelectorAll(".card-screen").forEach(screen => screen.classList.remove("active"));
  document.getElementById(screenId)?.classList.add("active");
}

function formatCPF(input) {
  let value = input.value.replace(/\D/g, "").slice(0, 11);
  if (value.length > 9) value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{1,2}).*/, "$1.$2.$3-$4");
  else if (value.length > 6) value = value.replace(/^(\d{3})(\d{3})(\d{1,3}).*/, "$1.$2.$3");
  else if (value.length > 3) value = value.replace(/^(\d{3})(\d{1,3}).*/, "$1.$2");
  input.value = value;
}

function shuffleArray(options, correctIndex) {
  const shuffled = options.map((option, index) => ({ option, isCorrect: index === correctIndex, originalIndex: index }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function handleStartQuiz(event) {
  event.preventDefault();
  const nameInput = document.getElementById("input-name");
  const emailInput = document.getElementById("input-email");
  const cpfInput = document.getElementById("input-cpf");
  const termsInput = document.getElementById("chk-terms");
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const cpf = cpfInput.value.trim();

  if (!name) { alert("Por favor, preencha seu nome."); nameInput.focus(); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { alert("Por favor, informe um e-mail válido."); emailInput.focus(); return; }
  if (cpf.replace(/\D/g, "").length !== 11) { alert("Por favor, informe um CPF completo."); cpfInput.focus(); return; }
  if (!termsInput.checked) { alert("Confirme as informações para continuar."); return; }

  userData = { name, email, cpf, isGuest: false };
  document.getElementById("player-display-name").textContent = name;
  document.getElementById("player-display-info").textContent = `(${email})`;
  document.getElementById("menu-player-name").textContent = name;
  document.getElementById("menu-player-info").textContent = `(${email})`;
  showScreen("screen-menu");
}

function startAsGuest(event) {
  event?.preventDefault();
  userData = { name: "Convidado", email: "", cpf: "", isGuest: true };
  document.getElementById("player-display-name").textContent = "Convidado";
  document.getElementById("player-display-info").textContent = "(Modo Convidado)";
  document.getElementById("menu-player-name").textContent = "Convidado";
  document.getElementById("menu-player-info").textContent = "(Modo Convidado)";
  showScreen("screen-menu");
}

function resetGameState() {
  currentQuestionIndex = 0;
  userScore = 0;
  bonusPointsEarned = 0;
  userAnswers = [];
  secondsElapsed = 0;
  questionSeconds = 20;
  answerAlreadySelected = false;
  currentQuestionHelpCount = 0;
  helpCounts = { skip: 3, remove: 2, reveal: 1 };
  skippedQuestions = [];
  gameQuestions = [...questionsData];
  isReviewingSkipped = false;
  removedOptionIndexes = new Set();
  currentShuffledOptions = [];
  revealedCorrectAnswer = false;
  questionsData.forEach(q => { delete q.currentShuffledOptions; });
  document.getElementById("current-score").textContent = "0";
  document.getElementById("total-timer").textContent = "00:00";
  updateHelpButtons();
}

function startQuizGame() {
  resetGameState();
  showScreen("screen-quiz");
  loadQuestion();
  startQuestionTimer();
  startTotalTimer();
}

function startTotalTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const el = document.getElementById("total-timer");
    if (el) el.textContent = formatTime(secondsElapsed);
  }, 1000);
}

function startQuestionTimer() {
  if (window.questionTimerInterval) clearInterval(window.questionTimerInterval);
  questionSeconds = 20;
  renderQuestionTimer();
  window.questionTimerInterval = setInterval(() => {
    if (answerAlreadySelected) return;
    questionSeconds--;
    renderQuestionTimer();
    if (questionSeconds <= 0) handleTimeout();
  }, 1000);
}

function renderQuestionTimer() {
  const el = document.getElementById("question-timer");
  if (el) {
    el.textContent = `Tempo: ${questionSeconds}s`;
    el.classList.toggle("timer-warning", questionSeconds <= 5);
  }
}

function stopQuestionTimer() {
  if (window.questionTimerInterval) {
    clearInterval(window.questionTimerInterval);
    window.questionTimerInterval = null;
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function loadQuestion() {
  const question = gameQuestions[currentQuestionIndex];
  if (!question) { finishQuiz(); return; }

  answerAlreadySelected = false;
  currentQuestionHelpCount = 0;
  removedOptionIndexes = new Set();
  revealedCorrectAnswer = false;

  const feedback = document.getElementById("answer-feedback");
  feedback.hidden = true;
  feedback.classList.remove("is-correct", "is-wrong");

  document.getElementById("quiz-topic-title").textContent = question.topic || "Quiz Tech";
  document.getElementById("question-progress").textContent =
    `Pergunta ${String(currentQuestionIndex + 1).padStart(2, "0")} de ${gameQuestions.length}`;
  const points = question.isBonus ? 5 : 3;
  document.getElementById("question-points").textContent = `(Vale até ${points} pontos)`;
  document.getElementById("question-text").textContent = question.question;
  document.getElementById("btn-next-question").textContent = "PRÓXIMA PERGUNTA";

  currentShuffledOptions = shuffleArray(question.options, question.answer);
  question.currentShuffledOptions = currentShuffledOptions;
  renderOptions();
  updateHelpButtons();
}

function renderOptions() {
  const container = document.getElementById("options-container");
  container.innerHTML = "";
  const letters = ["A", "B", "C", "D"];
  let visibleIndex = 0;

  currentShuffledOptions.forEach((option, originalVisibleIndex) => {
    if (removedOptionIndexes.has(option.originalIndex)) return;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.dataset.originalIndex = String(option.originalIndex);

    const letter = document.createElement("strong");
    letter.textContent = `${letters[visibleIndex]})`;
    button.appendChild(letter);
    button.appendChild(document.createTextNode(` ${option.option}`));

    if (revealedCorrectAnswer && option.isCorrect) {
      button.classList.add("correct-answer");
      button.title = "Esta é a alternativa correta";
    }
    button.addEventListener("click", () => selectOption(originalVisibleIndex));
    container.appendChild(button);
    visibleIndex++;
  });
}

function selectOption(selectedIndex) {
  if (answerAlreadySelected) return;
  answerAlreadySelected = true;
  stopQuestionTimer();

  const question = gameQuestions[currentQuestionIndex];
  const selectedOption = currentShuffledOptions[selectedIndex];
  const correctOption = currentShuffledOptions.find(option => option.isCorrect);
  const isCorrect = selectedOption.isCorrect;
  const buttons = document.querySelectorAll("#options-container .option-btn");

  buttons.forEach(button => {
    button.disabled = true;
    const originalIndex = Number(button.dataset.originalIndex);
    const option = currentShuffledOptions.find(item => item.originalIndex === originalIndex);
    if (option?.isCorrect) button.classList.add("correct-answer");
    if (originalIndex === selectedOption.originalIndex && !isCorrect) button.classList.add("wrong-answer");
  });

  const maxPoints = question.isBonus ? 5 : 3;
  const earnedPoints = isCorrect
    ? Math.max(1, maxPoints - currentQuestionHelpCount)
    : 0;

  if (isCorrect) {
    userScore += earnedPoints;
    if (question.isBonus) bonusPointsEarned += earnedPoints;
  }

  const explanation = explanations[question.id] ||
    "A alternativa correta corresponde ao conceito técnico apresentado na pergunta.";

  userAnswers.push({
    id: question.id,
    question: question.question,
    selected: selectedOption.option,
    correctAnswer: correctOption.option,
    correct: isCorrect,
    skipped: false,
    timedOut: false,
    pointsEarned: earnedPoints,
    explanation
  });

  document.getElementById("current-score").textContent = userScore;
  const feedback = document.getElementById("answer-feedback");
  const title = document.getElementById("feedback-title");
  const explanationText = document.getElementById("feedback-explanation");
  feedback.hidden = false;
  feedback.classList.toggle("is-correct", isCorrect);
  feedback.classList.toggle("is-wrong", !isCorrect);

  title.textContent = isCorrect
    ? `Resposta correta! +${earnedPoints} ponto(s)`
    : "Resposta incorreta!";
  explanationText.textContent = isCorrect
    ? explanation
    : `Você escolheu: ${selectedOption.option}. Resposta correta: ${correctOption.option}. ${explanation}`;
  updateHelpButtons();
}

function handleTimeout() {
  if (answerAlreadySelected) return;
  answerAlreadySelected = true;
  stopQuestionTimer();

  const question = gameQuestions[currentQuestionIndex];
  const correctOption = currentShuffledOptions.find(option => option.isCorrect);
  document.querySelectorAll("#options-container .option-btn").forEach(button => {
    button.disabled = true;
    const option = currentShuffledOptions.find(item => item.originalIndex === Number(button.dataset.originalIndex));
    if (option?.isCorrect) button.classList.add("correct-answer");
  });

  const explanation = explanations[question.id] || "Revise o conceito apresentado nesta pergunta.";
  userAnswers.push({
    id: question.id, question: question.question, selected: "Tempo esgotado",
    correctAnswer: correctOption.option, correct: false, skipped: false,
    timedOut: true, pointsEarned: 0, explanation
  });

  const feedback = document.getElementById("answer-feedback");
  feedback.hidden = false;
  feedback.classList.remove("is-correct");
  feedback.classList.add("is-wrong");
  document.getElementById("feedback-title").textContent = "Tempo esgotado! 0 pontos";
  document.getElementById("feedback-explanation").textContent =
    `A resposta correta era: ${correctOption.option}. ${explanation}`;
  updateHelpButtons();
}

function updateHelpButtons() {
  const skip = document.getElementById("btn-skip");
  const remove = document.getElementById("btn-hint");
  const reveal = document.getElementById("btn-reveal");
  if (skip) { skip.disabled = helpCounts.skip <= 0 || answerAlreadySelected || isReviewingSkipped; skip.textContent = `Pular (${helpCounts.skip})`; }
  if (remove) { remove.disabled = helpCounts.remove <= 0 || answerAlreadySelected; remove.textContent = `Remover 2 (${helpCounts.remove})`; }
  if (reveal) { reveal.disabled = helpCounts.reveal <= 0 || answerAlreadySelected; reveal.textContent = `Mostrar correta (${helpCounts.reveal})`; }
}

function removeTwoOptions() {
  if (answerAlreadySelected || helpCounts.remove <= 0) return;
  const wrongOptions = currentShuffledOptions.filter(option =>
    !option.isCorrect && !removedOptionIndexes.has(option.originalIndex)
  );
  // Mantém a correta e apenas uma alternativa incorreta.
  const toRemove = wrongOptions.slice(0, Math.max(0, wrongOptions.length - 1));
  if (!toRemove.length) return;
  toRemove.forEach(option => removedOptionIndexes.add(option.originalIndex));
  helpCounts.remove--;
  currentQuestionHelpCount++;
  renderOptions();
  updateHelpButtons();
}

function revealCorrectAnswer() {
  if (answerAlreadySelected || helpCounts.reveal <= 0) return;
  helpCounts.reveal--;
  currentQuestionHelpCount++;
  revealedCorrectAnswer = true;
  renderOptions();
  updateHelpButtons();
}

function skipQuestion() {
  if (answerAlreadySelected || helpCounts.skip <= 0) return;
  const question = gameQuestions[currentQuestionIndex];
  helpCounts.skip--;
  skippedQuestions.push(question);
  stopQuestionTimer();
  currentQuestionIndex++;
  if (currentQuestionIndex < gameQuestions.length) {
    loadQuestion();
    startQuestionTimer();
  } else if (!isReviewingSkipped && skippedQuestions.length) {
    beginSkippedQuestions();
  } else {
    finishQuiz();
  }
  updateHelpButtons();
}

function beginSkippedQuestions() {
  isReviewingSkipped = true;
  gameQuestions = skippedQuestions.splice(0);
  currentQuestionIndex = 0;
  if (!gameQuestions.length) { finishQuiz(); return; }
  loadQuestion();
  startQuestionTimer();
}

function nextQuestion() {
  if (!answerAlreadySelected) return;
  stopQuestionTimer();
  currentQuestionIndex++;
  if (currentQuestionIndex < gameQuestions.length) {
    loadQuestion();
    startQuestionTimer();
  } else if (!isReviewingSkipped && skippedQuestions.length) {
    beginSkippedQuestions();
  } else {
    finishQuiz();
  }
}

function abandonQuiz() {
  const confirmed = confirm("Tem certeza de que deseja sair do quiz? O progresso desta partida será perdido.");
  if (!confirmed) return;
  stopQuestionTimer();
  clearInterval(timerInterval);
  timerInterval = null;
  showScreen("screen-menu");
}

function finishQuiz() {
  stopQuestionTimer();
  clearInterval(timerInterval);
  timerInterval = null;
  showScreen("screen-feedback");
  document.getElementById("final-score").textContent = userScore;
  document.getElementById("bonus-points-text").textContent =
    `${bonusPointsEarned} pontos bônus conquistados nas perguntas surpresa.`;
  document.getElementById("final-time").textContent = formatTime(secondsElapsed);
  document.getElementById("ranking-position").textContent = "Resultado desta partida";

  const summaryList = document.getElementById("answers-summary-list");
  summaryList.innerHTML = "";
  userAnswers.forEach((answer, index) => {
    const item = document.createElement("li");
    const status = answer.skipped ? "PULADA (será respondida na revisão)"
      : answer.timedOut ? "TEMPO ESGOTADO"
      : answer.correct ? `ACERTOU (+${answer.pointsEarned} pts)` : "ERROU (0 pts)";
    item.textContent = `Pergunta ${index + 1}: ${status}. Sua resposta: ${answer.selected}. Resposta correta: ${answer.correctAnswer}. ${answer.explanation}`;
    summaryList.appendChild(item);
  });
}

function restartQuiz() {
  stopQuestionTimer();
  clearInterval(timerInterval);
  timerInterval = null;
  showScreen("screen-menu");
}



/* Adicionando o Banco de Dados SQL */

function finishQuiz() {
  stopQuestionTimer();
  clearInterval(timerInterval);
  timerInterval = null;
  showScreen("screen-feedback");

  // Exibe o resultado na tela normalmente
  document.getElementById("final-score").textContent = userScore;
  
  // Regra: Salvar no banco SOMENTE se NÃO for convidado
  if (!userData.isGuest) {
    salvarPartidaNoBanco({
      id_jogador: userData.id,
      pontuacao_total: userScore,
      pontos_bonus: bonusPointsEarned,
      tempo_segundos: secondsElapsed,
      ajudas_usadas: (3 - helpCounts.skip) + (2 - helpCounts.remove) + (1 - helpCounts.reveal)
    });
  } else {
    console.log("Modo Convidado: partida concluída sem envio ao banco de dados.");
  }
}


