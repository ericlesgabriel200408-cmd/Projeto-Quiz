/* ==========================================================================
   BASE DE PERGUNTAS DO CYBER ARENA (30 Normais + 2 Bônus = 100 Pontos)
   100% em JavaScript puro, sem necessidade de servidor externo ou SQL.
   ========================================================================== */
const questionsData = [
  { id: 1, topic: "Streaming, jogos online e gamification", question: "Que tipo de serviço plataformas como Netflix, Disney+ e Spotify oferecem?", options: ["Serviços de armazenamento local de arquivos", "Serviços exclusivos de edição de documentos", "Serviços de hospedagem de sites", "Serviços de streaming (de áudio e vídeo)"], answer: 3, isBonus: false, explanation: "Netflix, Disney+ e Spotify distribuem conteúdo pela internet para reprodução sob demanda." },
  { id: 2, topic: "Streaming, jogos online e gamification", question: "O que é indispensável para conseguir jogar um jogo online multiplayer?", options: ["Uma placa de vídeo dedicada", "Uma conta em rede social", "Conexão com a internet", "Um controle sem fio"], answer: 2, isBonus: false, explanation: "O multiplayer online depende da comunicação entre o dispositivo do jogador e os servidores ou demais participantes pela rede." },
  { id: 3, topic: "Streaming, jogos online e gamification", question: "Como é chamada a aplicação de elementos e dinâmicas de jogos em contextos que não são jogos?", options: ["Desfragmentação", "Gamification (ou Gamificação)", "Virtualização", "Compactação"], answer: 1, isBonus: false, explanation: "Gamificação aplica elementos típicos de jogos, como metas, pontos e recompensas, em contextos não lúdicos." },
  { id: 4, topic: "Streaming, jogos online e gamification", question: "Qual é a principal plataforma voltada para transmissões e streaming de jogos ao vivo?", options: ["Twitch", "LinkedIn", "GitHub", "Google Maps"], answer: 0, isBonus: false, explanation: "A Twitch é conhecida por transmissões ao vivo, especialmente de jogos e eventos relacionados." },
  { id: 5, topic: "Streaming, jogos online e gamification", question: "Qual recurso das plataformas de streaming permite assistir a conteúdos sem estar conectado à internet?", options: ["Compartilhamento de tela", "Modo desenvolvedor", "Sincronização de contatos", "Modo offline (ou download de conteúdo)"], answer: 3, isBonus: false, explanation: "O download permite guardar conteúdo no dispositivo para assistir ou ouvir sem conexão ativa." },
  { id: 6, topic: "Streaming, jogos online e gamification", question: "O que o atraso de conexão (lag) causa nos jogos online competitivos?", options: ["Melhora automaticamente a resolução", "Aumenta a autonomia da bateria", "Prejudica o desempenho e tempo de resposta do jogador", "Desbloqueia itens pagos"], answer: 2, isBonus: false, explanation: "Lag é atraso na comunicação pela rede e pode fazer comandos chegarem tarde ao jogo." },
  { id: 7, topic: "Streaming, jogos online e gamification", question: "Quais são dois exemplos comuns de elementos visuais usados em gamificação para engajar usuários?", options: ["Somente anúncios em vídeo", "Sistemas de ranking e medalhas (badges)", "Apenas mensagens de erro", "Bloqueio de todos os desafios"], answer: 1, isBonus: false, explanation: "Rankings e medalhas são elementos de gamificação usados para reconhecer progresso e incentivar participação." },
  { id: 8, topic: "Streaming, jogos online e gamification", question: "Todos os jogos online são totalmente gratuitos?", options: ["Não, muitos são pagos ou possuem microtransações", "Sim, todos são gratuitos", "Sim, desde que sejam online", "Não, jogos online nunca são gratuitos"], answer: 0, isBonus: false, explanation: "Há jogos pagos, gratuitos com compras internas e modelos por assinatura; nem todos são totalmente gratuitos." },
  { id: 9, topic: "Privacidade digital, golpes virtuais e senhas", question: "Quais elementos devem ser combinados para criar uma senha forte?", options: ["Somente o nome completo", "A mesma palavra repetida", "Apenas a data de nascimento", "Letras maiúsculas, minúsculas, números e caracteres especiais"], answer: 3, isBonus: false, explanation: "Combinar diferentes tipos de caracteres e usar senhas longas e exclusivas aumenta a resistência a tentativas de adivinhação." },
  { id: 10, topic: "Privacidade digital, golpes virtuais e senhas", question: "Por que não se deve reutilizar a mesma senha em múltiplos sites?", options: ["Facilita lembrar todas as contas", "Impede a autenticação de dois fatores", "Porque compromete a segurança de todas as contas caso uma seja vazada", "Aumenta a velocidade da internet"], answer: 2, isBonus: false, explanation: "Se uma senha reutilizada vaza, invasores podem tentar usá-la em outros serviços." },
  { id: 11, topic: "Privacidade digital, golpes virtuais e senhas", question: "Como é chamado o golpe cibernético que engana pessoas para obter dados pessoais ou senhas?", options: ["Desfragmentação", "Phishing", "Streaming", "Bluetooth"], answer: 1, isBonus: false, explanation: "Phishing usa mensagens ou páginas enganosas para induzir a vítima a revelar informações ou credenciais." },
  { id: 12, topic: "Privacidade digital, golpes virtuais e senhas", question: "Qual camada extra de verificação aumenta a segurança do acesso às contas online?", options: ["Autenticação de dois fatores (2FA)", "Modo avião", "Compactação de arquivos", "Navegação anônima apenas"], answer: 0, isBonus: false, explanation: "A autenticação de dois fatores exige uma segunda prova de identidade além da senha." },
  { id: 13, topic: "Privacidade digital, golpes virtuais e senhas", question: "Como devemos agir ao receber links de remetentes desconhecidos em e-mails ou mensagens?", options: ["Clicar para testar o link", "Encaminhar para todos os contatos", "Responder informando a senha", "Não clicar e verificar a procedência da mensagem"], answer: 3, isBonus: false, explanation: "Links inesperados podem levar a páginas falsas ou downloads maliciosos; verifique o remetente por um canal confiável." },
  { id: 14, topic: "Privacidade digital, golpes virtuais e senhas", question: "Qual ferramenta ajuda a criar e armazenar senhas complexas e seguras?", options: ["Editor de imagens", "Reprodutor de vídeo", "Gerenciador de senhas", "Calculadora simples"], answer: 2, isBonus: false, explanation: "Gerenciadores podem gerar senhas fortes e armazená-las em um cofre protegido." },
  { id: 15, topic: "Privacidade digital, golpes virtuais e senhas", question: "Onde podem ocorrer golpes virtuais além de e-mails?", options: ["Somente em redes cabeadas", "Em redes sociais, aplicativos de mensagens e sites falsos", "Apenas em lojas físicas", "Somente em jogos offline"], answer: 1, isBonus: false, explanation: "Golpes podem aparecer em várias plataformas digitais, inclusive redes sociais, mensageiros e páginas falsas." },
  { id: 16, topic: "Privacidade digital, golpes virtuais e senhas", question: "Qual o risco de compartilhar dados pessoais em excesso nas redes sociais?", options: ["Aumento dos riscos de invasão de privacidade e engenharia social", "Reduz todos os riscos", "Garante anonimato total", "Impede que dados sejam copiados"], answer: 0, isBonus: false, explanation: "Dados excessivos podem ajudar golpistas a personalizar abordagens e responder perguntas de recuperação de contas." },
  { id: 17, topic: "Inteligência artificial no dia a dia", question: "Que tecnologia permite o funcionamento de assistentes como Siri, Alexa e Google Assistant?", options: ["Somente GPS", "Impressão 3D", "Sistema de arquivos", "Inteligência Artificial (IA)"], answer: 3, isBonus: false, explanation: "Assistentes virtuais usam técnicas de IA para interpretar pedidos e produzir respostas ou executar tarefas." },
  { id: 18, topic: "Inteligência artificial no dia a dia", question: "O que os aplicativos usam para sugerir filmes e músicas personalizados ao usuário?", options: ["Sorteios aleatórios sem dados", "Apenas o brilho da tela", "Algoritmos de recomendação baseados em IA", "Cabos de rede"], answer: 2, isBonus: false, explanation: "Sistemas de recomendação analisam sinais e padrões para sugerir conteúdos que podem interessar ao usuário." },
  { id: 19, topic: "Inteligência artificial no dia a dia", question: "Como a Inteligência Artificial consegue identificar tendências e fazer previsões?", options: ["Ignorando todos os dados", "Aprendendo padrões a partir de grandes volumes de dados (Machine Learning)", "Usando somente regras de ortografia", "Desligando sensores"], answer: 1, isBonus: false, explanation: "Aprendizado de máquina identifica padrões em dados e os usa para estimativas ou classificações." },
  { id: 20, topic: "Inteligência artificial no dia a dia", question: "Chatbots de atendimento ao cliente utilizam qual tecnologia para responder aos usuários?", options: ["Inteligência Artificial e Processamento de Linguagem Natural (PLN)", "Somente compressão de vídeo", "Protocolo de impressão", "Sistema de arquivos FAT"], answer: 0, isBonus: false, explanation: "Chatbots podem combinar modelos de IA com técnicas de processamento de linguagem para interpretar e gerar texto." },
  { id: 21, topic: "Inteligência artificial no dia a dia", question: "Qual recurso de e-mail usa IA para bloquear mensagens indesejadas?", options: ["Modo noturno", "Desfragmentador de disco", "Controle de volume", "Filtro de spam"], answer: 3, isBonus: false, explanation: "Filtros de spam classificam mensagens suspeitas ou indesejadas usando regras e modelos de IA." },
  { id: 22, topic: "Inteligência artificial no dia a dia", question: "Que tipo de Inteligência Artificial é capaz de gerar novos textos, imagens e áudios a partir de comandos (prompts)?", options: ["Somente banco de dados relacional", "Sistema operacional móvel", "IA Generativa", "Rede local sem fio"], answer: 2, isBonus: false, explanation: "IA generativa produz novos conteúdos, como texto, imagem ou áudio, a partir de instruções e contexto." },
  { id: 23, topic: "Inteligência artificial no dia a dia", question: "Qual tecnologia de IA é amplamente usada para desbloqueio de segurança em smartphones?", options: ["Leitura de código de barras", "Reconhecimento facial", "NFC para pagamento apenas", "Acelerômetro para passos"], answer: 1, isBonus: false, explanation: "O reconhecimento facial compara características do rosto para auxiliar na autenticação do dispositivo." },
  { id: 24, topic: "Inteligência artificial no dia a dia", question: "As decisões tomadas por sistemas de Inteligência Artificial são sempre livres de erros?", options: ["Não, sistemas de IA podem conter falhas e vieses nos dados", "Sim, são sempre perfeitas", "Sim, se conectadas à internet", "Não, porque não usam dados"], answer: 0, isBonus: false, explanation: "Modelos de IA podem errar e reproduzir vieses presentes nos dados de treinamento ou no desenho do sistema." },
  { id: 25, topic: "Smartphones, dispositivos mobile e baterias", question: "Qual é a tecnologia de bateria mais utilizada nos smartphones atuais?", options: ["Níquel-cádmio em todos os modelos", "Pilhas alcalinas descartáveis", "Bateria de chumbo-ácido", "Íons de Lítio (Li-Ion)"], answer: 3, isBonus: false, explanation: "Baterias de íons de lítio são amplamente usadas em smartphones por sua densidade de energia e recarregabilidade." },
  { id: 26, topic: "Smartphones, dispositivos mobile e baterias", question: "Manter o celular sempre carregado em 100% é a melhor prática para preservar a bateria?", options: ["Sim, 100% sempre é a única prática recomendada", "A bateria deve ficar sempre em 0%", "Não, o ideal para a vida útil é manter a carga entre 20% e 80%", "Carregar apenas uma vez por mês"], answer: 2, isBonus: false, explanation: "Evitar longos períodos em extremos de carga e calor pode ajudar a reduzir o desgaste da bateria." },
  { id: 27, topic: "Smartphones, dispositivos mobile e baterias", question: "Para que serve o Modo Avião em um dispositivo móvel?", options: ["Aumenta a potência do processador permanentemente", "Desativa conexões sem fio e ajuda a economizar energia da bateria", "Apaga todos os arquivos", "Melhora a cobertura de rede"], answer: 1, isBonus: false, explanation: "O modo avião desativa as conexões de rádio; recursos sem fio podem ser reativados manualmente em alguns aparelhos." },
  { id: 28, topic: "Smartphones, dispositivos mobile e baterias", question: "Qual tipo de tela consome menos energia ao exibir fundos e cores escuras?", options: ["Tela AMOLED (ou OLED)", "Tela CRT", "Tela de papel comum", "Tela LCD sempre com retroiluminação desligada"], answer: 0, isBonus: false, explanation: "Em telas OLED/AMOLED, pixels escuros podem emitir menos luz e consumir menos energia que pixels claros." },
  { id: 29, topic: "Smartphones, dispositivos mobile e baterias", question: "Quais aparelhos, além dos smartphones, se enquadram na categoria de dispositivos mobile?", options: ["Somente computadores de mesa", "Apenas impressoras", "Somente televisores sem conexão", "Tablets, smartwatches e e-readers"], answer: 3, isBonus: false, explanation: "Dispositivos móveis incluem aparelhos portáteis como tablets, relógios inteligentes e leitores digitais." },
  { id: 30, topic: "Smartphones, dispositivos mobile e baterias", question: "Qual o principal impacto do uso frequente de carregamento rápido na bateria?", options: ["Elimina toda degradação da bateria", "Desativa a bateria", "Aumento da geração de calor durante o carregamento", "Dobra sempre a capacidade"], answer: 2, isBonus: false, explanation: "O carregamento rápido pode gerar mais calor, e temperaturas elevadas contribuem para o desgaste químico da bateria." },
  { id: 31, topic: "Pergunta Surpresa Bônus (5 pts)", question: "Como o nível de brilho da tela impacta a bateria do celular?", options: ["O brilho não tem qualquer efeito", "Brilho mais alto consome mais energia e reduz a duração da bateria", "Brilho alto desliga o processador", "Brilho baixo impede carregamento"], answer: 1, isBonus: true, explanation: "A tela é um dos componentes que mais consome energia; maior brilho aumenta esse consumo." },
  { id: 32, topic: "Pergunta Surpresa Bônus (5 pts)", question: "Como as atualizações do sistema operacional podem beneficiar a bateria do aparelho?", options: ["Otimizando o gerenciamento de energia e consumo dos aplicativos", "Impedindo qualquer uso de aplicativos", "Aumentando sempre o brilho", "Desativando permanentemente a bateria"], answer: 0, isBonus: true, explanation: "Atualizações podem corrigir falhas e melhorar a eficiência energética do sistema." }
];

/* ==========================================================================
   CONFIGURAÇÃO DOS AVATARES PRÉ-DEFINIDOS E ARMAZENAMENTO LOCAL (localStorage)
   ========================================================================== */
const AVATAR_CONFIG = {
  "av-1": { icon: "⚡", className: "av-1" },
  "av-2": { icon: "🤖", className: "av-2" },
  "av-3": { icon: "💻", className: "av-3" },
  "av-4": { icon: "🚀", className: "av-4" },
  "av-5": { icon: "🛡️", className: "av-5" },
  "av-6": { icon: "🎮", className: "av-6" },
  "av-guest": { icon: "👤", className: "av-guest" }
};

const STORAGE_USERS_KEY = "quiz_tech_users_v1";
const STORAGE_RANKING_KEY = "quiz_tech_ranking_v1";
const STORAGE_LAST_USER_KEY = "quiz_tech_last_user_v1";

function getStoredUsers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_USERS_KEY)) || {};
  } catch {
    return {};
  }
}

function saveStoredUsers(users) {
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

function getStoredRanking() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_RANKING_KEY)) || [];
  } catch {
    return [];
  }
}

function saveStoredRanking(ranking) {
  localStorage.setItem(STORAGE_RANKING_KEY, JSON.stringify(ranking));
}

function applyAvatarBadge(element, avatarKey, extraClass = "") {
  if (!element) return;
  const cfg = AVATAR_CONFIG[avatarKey] || AVATAR_CONFIG["av-1"];
  element.className = `avatar-badge ${cfg.className} ${extraClass}`.trim();
  element.textContent = cfg.icon;
}

function selecionarRadioAvatar(radioGroupName, avatarKey) {
  const radio = document.querySelector(`input[name="${radioGroupName}"][value="${avatarKey}"]`);
  if (radio) {
    radio.checked = true;
  }
}

/* ==========================================================================
   ESTADO DO JOGO
   ========================================================================== */
let currentQuestionIndex = 0;
let userScore = 0;
let bonusPointsEarned = 0;
let userAnswers = [];
let userData = { name: "", avatar: "av-1", isGuest: false };
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
let userManuallyClickedAvatarOnLogin = false;

// Restaura automaticamente o último usuário e sua imagem selecionada ao abrir o app
function restaurarUltimoUsuarioNaTelaLogin() {
  const lastUserKey = localStorage.getItem(STORAGE_LAST_USER_KEY);
  if (!lastUserKey) return;

  const users = getStoredUsers();
  const savedAccount = users[lastUserKey];
  if (!savedAccount) return;

  const inputName = document.getElementById("input-name");
  if (inputName && !inputName.value) {
    inputName.value = savedAccount.name;
  }
  if (savedAccount.avatar) {
    selecionarRadioAvatar("avatar", savedAccount.avatar);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  restaurarUltimoUsuarioNaTelaLogin();

  // Detecta se o usuário clicou manualmente em uma imagem na tela de login
  document.querySelectorAll('input[name="avatar"]').forEach(radio => {
    radio.addEventListener("change", () => {
      userManuallyClickedAvatarOnLogin = true;
    });
  });

  // Ao digitar um nome já cadastrado, seleciona automaticamente o avatar salvo daquela conta
  document.getElementById("input-name")?.addEventListener("input", (event) => {
    const typedKey = event.target.value.trim().toLowerCase();
    const users = getStoredUsers();
    if (users[typedKey] && users[typedKey].avatar && !userManuallyClickedAvatarOnLogin) {
      selecionarRadioAvatar("avatar", users[typedKey].avatar);
    }
  });

  // Atualiza a prévia grande na tela de Perfil assim que clicar em outra opção
  document.querySelectorAll('input[name="profile-avatar"]').forEach(radio => {
    radio.addEventListener("change", (event) => {
      applyAvatarBadge(
        document.getElementById("profile-avatar-display"),
        event.target.value,
        "profile-avatar-large"
      );
    });
  });

  document.getElementById("register-form")?.addEventListener("submit", handleStartQuiz);
  document.getElementById("btn-guest-login")?.addEventListener("click", startAsGuest);
  document.getElementById("btn-start-game")?.addEventListener("click", startQuizGame);
  document.getElementById("btn-show-profile")?.addEventListener("click", openProfileScreen);
  document.getElementById("btn-show-ranking")?.addEventListener("click", openRankingScreen);
  document.getElementById("btn-save-avatar")?.addEventListener("click", saveNewAvatar);
  document.getElementById("btn-show-rules")?.addEventListener("click", () => showScreen("screen-rules"));
  document.getElementById("btn-show-credits")?.addEventListener("click", () => showScreen("screen-credits"));
  document.getElementById("btn-back-menu")?.addEventListener("click", () => showScreen("screen-menu"));
  document.getElementById("btn-back-menu-credits")?.addEventListener("click", () => showScreen("screen-menu"));
  document.getElementById("btn-back-menu-profile")?.addEventListener("click", () => showScreen("screen-menu"));
  document.getElementById("btn-back-menu-ranking")?.addEventListener("click", () => showScreen("screen-menu"));
  document.getElementById("btn-back-register")?.addEventListener("click", () => {
    userManuallyClickedAvatarOnLogin = false;
    if (!userData.isGuest && userData.avatar) {
      selecionarRadioAvatar("avatar", userData.avatar);
    }
    showScreen("screen-register");
  });

  document.getElementById("btn-hint")?.addEventListener("click", removeTwoOptions);
  document.getElementById("btn-skip")?.addEventListener("click", skipQuestion);
  document.getElementById("btn-reveal")?.addEventListener("click", revealCorrectAnswer);
  document.getElementById("btn-exit-quiz")?.addEventListener("click", abandonQuiz);
  document.getElementById("btn-restart")?.addEventListener("click", restartQuiz);
  document.getElementById("btn-next-question")?.addEventListener("click", nextQuestion);

  renderRankingLists();
  updateHelpButtons();
});

function showScreen(screenId) {
  document.querySelectorAll(".card-screen").forEach(screen => screen.classList.remove("active"));
  document.getElementById(screenId)?.classList.add("active");
}

function shuffleArray(options, correctIndex) {
  const shuffled = options.map((option, index) => ({
    option,
    isCorrect: index === correctIndex,
    originalIndex: index
  }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/* ==========================================================================
   AUTENTICAÇÃO, MODO CONVIDADO E PERFIL DO JOGADOR
   ========================================================================== */
function handleStartQuiz(event) {
  event.preventDefault();
  const name = document.getElementById("input-name").value.trim();
  const password = document.getElementById("input-password").value.trim();
  const termsChecked = document.getElementById("chk-terms").checked;
  const avatarInput = document.querySelector('input[name="avatar"]:checked');
  const selectedAvatar = avatarInput ? avatarInput.value : "av-1";

  if (!name || !password) {
    alert("Por favor, preencha o nome de usuário e a senha.");
    return;
  }
  if (!termsChecked) {
    alert("Aceite os termos para continuar.");
    return;
  }

  const users = getStoredUsers();
  const key = name.toLowerCase();

  if (users[key]) {
    if (users[key].password !== password) {
      alert("Senha incorreta para este usuário!");
      return;
    }

    // Se o usuário escolheu uma nova imagem na tela de login, atualiza; se não mantém a salva
    const finalAvatar = userManuallyClickedAvatarOnLogin
      ? selectedAvatar
      : (users[key].avatar || selectedAvatar);

    users[key].avatar = finalAvatar;
    saveStoredUsers(users);

    userData = {
      name: users[key].name,
      avatar: finalAvatar,
      isGuest: false
    };
  } else {
    users[key] = {
      name,
      password,
      avatar: selectedAvatar,
      lastScore: 0,
      bestScore: 0,
      totalCorrect: 0,
      totalAnswered: 0,
      gamesPlayed: 0
    };
    saveStoredUsers(users);
    userData = { name, avatar: selectedAvatar, isGuest: false };
  }

  // Salva o último usuário conectado para já trazer a imagem selecionada no próximo acesso
  localStorage.setItem(STORAGE_LAST_USER_KEY, key);
  userManuallyClickedAvatarOnLogin = false;

  // Garante que a tela de login e a tela de perfil já fiquem sincronizadas com o avatar escolhido
  selecionarRadioAvatar("avatar", userData.avatar);
  selecionarRadioAvatar("profile-avatar", userData.avatar);

  atualizarInterfaceUsuario();
  renderRankingLists();
  showScreen("screen-menu");
}

function startAsGuest(event) {
  event?.preventDefault();
  userData = { name: "Convidado", avatar: "av-guest", isGuest: true };
  atualizarInterfaceUsuario();
  renderRankingLists();
  showScreen("screen-menu");
}

function atualizarInterfaceUsuario() {
  // Atualiza a imagem e nome na próxima tela (Menu Principal)
  applyAvatarBadge(document.getElementById("menu-player-avatar"), userData.avatar);
  document.getElementById("menu-player-name").textContent = userData.name;
  document.getElementById("menu-player-info").textContent = userData.isGuest ? " (Modo Convidado)" : "";

  // Atualiza a imagem e nome na tela de Perfil
  applyAvatarBadge(document.getElementById("profile-avatar-display"), userData.avatar, "profile-avatar-large");
  selecionarRadioAvatar("profile-avatar", userData.avatar);

  // Atualiza a imagem e nome na barra lateral do Quiz
  applyAvatarBadge(document.getElementById("player-display-avatar"), userData.avatar);
  document.getElementById("player-display-name").textContent = userData.name;
  document.getElementById("player-display-info").textContent = userData.isGuest ? "(Convidado)" : "";

  const btnProfile = document.getElementById("btn-show-profile");
  if (btnProfile) {
    btnProfile.disabled = userData.isGuest;
    btnProfile.textContent = userData.isGuest ? "👤 Perfil (Bloqueado)" : "👤 Perfil";
  }
}

function openProfileScreen() {
  if (userData.isGuest) {
    alert("Crie uma conta salva para acessar os dados do Perfil.");
    return;
  }

  const users = getStoredUsers();
  const account = users[userData.name.toLowerCase()];
  if (!account) return;

  const accuracy = account.totalAnswered > 0
    ? Math.round((account.totalCorrect / account.totalAnswered) * 100)
    : 0;

  applyAvatarBadge(document.getElementById("profile-avatar-display"), account.avatar, "profile-avatar-large");
  document.getElementById("profile-username").textContent = account.name;
  document.getElementById("profile-games-count").textContent = `Partidas concluídas: ${account.gamesPlayed}`;
  document.getElementById("profile-last-score").textContent = `${account.lastScore} pts`;
  document.getElementById("profile-best-score").textContent = `${account.bestScore} pts`;
  document.getElementById("profile-accuracy-rate").textContent = `${accuracy}%`;

  selecionarRadioAvatar("profile-avatar", account.avatar);
  showScreen("screen-profile");
}

function saveNewAvatar() {
  if (userData.isGuest) return;
  const selected = document.querySelector('input[name="profile-avatar"]:checked');
  if (!selected) return;

  const users = getStoredUsers();
  const key = userData.name.toLowerCase();
  if (!users[key]) return;

  users[key].avatar = selected.value;
  saveStoredUsers(users);

  // Sincroniza a imagem também no ranking salvo e na tela de login
  const ranking = getStoredRanking();
  ranking.forEach(item => {
    if (item.name.toLowerCase() === key) {
      item.avatar = selected.value;
    }
  });
  saveStoredRanking(ranking);

  userData.avatar = selected.value;
  selecionarRadioAvatar("avatar", userData.avatar);
  atualizarInterfaceUsuario();
  renderRankingLists();
  alert("Imagem de perfil atualizada e salva com sucesso!");
}

/* ==========================================================================
   RANKING REAL (IMAGEM DE PERFIL + NOME + PONTUAÇÃO + TEMPO CONCLUÍDO)
   ========================================================================== */
function openRankingScreen() {
  renderRankingLists();
  showScreen("screen-ranking");
}

function atualizarRankingComPartida(name, avatar, score, timeSeconds) {
  const ranking = getStoredRanking();
  const key = name.toLowerCase();
  const existingIndex = ranking.findIndex(item => item.name.toLowerCase() === key);

  if (existingIndex >= 0) {
    const prev = ranking[existingIndex];
    if (score > prev.score || (score === prev.score && timeSeconds < prev.timeSeconds)) {
      ranking[existingIndex] = { name, avatar, score, timeSeconds };
    } else {
      ranking[existingIndex].avatar = avatar;
    }
  } else {
    ranking.push({ name, avatar, score, timeSeconds });
  }

  ranking.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.timeSeconds - b.timeSeconds;
  });

  saveStoredRanking(ranking.slice(0, 10));
}

function renderRankingLists() {
  const ranking = getStoredRanking();
  const containers = [
    document.getElementById("ranking-list"),
    document.getElementById("full-ranking-list")
  ];

  containers.forEach(list => {
    if (!list) return;
    list.innerHTML = "";

    if (ranking.length === 0) {
      list.innerHTML = "<li class='ranking-item'>Nenhuma partida registrada ainda.</li>";
      return;
    }

    ranking.forEach((item, index) => {
      const cfg = AVATAR_CONFIG[item.avatar] || AVATAR_CONFIG["av-1"];
      const li = document.createElement("li");
      li.className = "ranking-item";

      li.innerHTML = `
        <div class="ranking-player-info">
          <strong>#${index + 1}</strong>
          <span class="avatar-badge ${cfg.className} ranking-avatar-mini">${cfg.icon}</span>
          <span class="ranking-player-name">${item.name}</span>
        </div>
        <div class="ranking-player-stats">
          ${item.score} pts
          <small>Tempo: ${formatTime(item.timeSeconds)}</small>
        </div>
      `;
      list.appendChild(li);
    });
  });
}

/* ==========================================================================
   MECÂNICA DO QUIZ, CRONÔMETROS E AJUDAS
   ========================================================================== */
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
  document.getElementById("current-score").textContent = "0";
  document.getElementById("total-timer").textContent = "00:00";
  updateHelpButtons();
}

function startQuizGame() {
  resetGameState();
  renderRankingLists();
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
  const earnedPoints = isCorrect ? Math.max(1, maxPoints - currentQuestionHelpCount) : 0;

  if (isCorrect) {
    userScore += earnedPoints;
    if (question.isBonus) bonusPointsEarned += earnedPoints;
  }

  userAnswers.push({
    id: question.id,
    question: question.question,
    selected: selectedOption.option,
    correctAnswer: correctOption.option,
    correct: isCorrect,
    timedOut: false,
    pointsEarned: earnedPoints,
    explanation: question.explanation
  });

  document.getElementById("current-score").textContent = userScore;
  const feedback = document.getElementById("answer-feedback");
  feedback.hidden = false;
  feedback.classList.toggle("is-correct", isCorrect);
  feedback.classList.toggle("is-wrong", !isCorrect);

  document.getElementById("feedback-title").textContent = isCorrect
    ? `Resposta correta! +${earnedPoints} ponto(s)`
    : "Resposta incorreta!";
  document.getElementById("feedback-explanation").textContent = isCorrect
    ? question.explanation
    : `Você escolheu: ${selectedOption.option}. Resposta correta: ${correctOption.option}. ${question.explanation}`;
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

  userAnswers.push({
    id: question.id,
    question: question.question,
    selected: "Tempo esgotado",
    correctAnswer: correctOption.option,
    correct: false,
    timedOut: true,
    pointsEarned: 0,
    explanation: question.explanation
  });

  const feedback = document.getElementById("answer-feedback");
  feedback.hidden = false;
  feedback.classList.remove("is-correct");
  feedback.classList.add("is-wrong");
  document.getElementById("feedback-title").textContent = "Tempo esgotado! 0 pontos";
  document.getElementById("feedback-explanation").textContent =
    `A resposta correta era: ${correctOption.option}. ${question.explanation}`;
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
  const wrongOptions = currentShuffledOptions.filter(option => !option.isCorrect && !removedOptionIndexes.has(option.originalIndex));
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

  const summaryList = document.getElementById("answers-summary-list");
  summaryList.innerHTML = "";
  userAnswers.forEach((answer, index) => {
    const item = document.createElement("li");
    const status = answer.timedOut ? "TEMPO ESGOTADO"
      : answer.correct ? `ACERTOU (+${answer.pointsEarned} pts)` : "ERROU (0 pts)";
    item.textContent = `Pergunta ${index + 1}: ${status}. Sua resposta: ${answer.selected}. Resposta correta: ${answer.correctAnswer}. ${answer.explanation}`;
    summaryList.appendChild(item);
  });

  if (!userData.isGuest) {
    const users = getStoredUsers();
    const key = userData.name.toLowerCase();
    const correctCount = userAnswers.filter(a => a.correct).length;

    if (users[key]) {
      users[key].lastScore = userScore;
      if (userScore > users[key].bestScore) {
        users[key].bestScore = userScore;
      }
      users[key].totalCorrect += correctCount;
      users[key].totalAnswered += userAnswers.length;
      users[key].gamesPlayed += 1;
      saveStoredUsers(users);
    }

    atualizarRankingComPartida(userData.name, userData.avatar, userScore, secondsElapsed);
    renderRankingLists();

    const ranking = getStoredRanking();
    const pos = ranking.findIndex(r => r.name.toLowerCase() === key) + 1;
    document.getElementById("ranking-position").textContent = pos > 0
      ? `${pos}º Lugar no Ranking Oficial`
      : "Registrado no Perfil";
  } else {
    document.getElementById("ranking-position").textContent = "Modo Convidado (não salvo no ranking)";
  }
}

function restartQuiz() {
  stopQuestionTimer();
  clearInterval(timerInterval);
  timerInterval = null;
  showScreen("screen-menu");
}