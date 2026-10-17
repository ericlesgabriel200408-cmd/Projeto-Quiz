/* =====================================================
   CONFIGURAÇÃO DA API E DADOS DO BANCO
===================================================== */
const API_URL = 'http://localhost:3000/api';
let questionsData = [];
let explanations = {};

// Função para buscar as perguntas do PostgreSQL via API
async function carregarPerguntasDoBanco() {
  try {
    const response = await fetch(`${API_URL}/perguntas`);
    const data = await response.json();
    
    questionsData = data;
    explanations = {};
    data.forEach(q => {
      explanations[q.id] = q.explanation;
    });
    console.log("Perguntas carregadas do banco de dados com sucesso!");
  } catch (error) {
    console.error("Erro ao carregar perguntas do servidor:", error);
  }
}
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
  carregarPerguntasDoBanco();
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

function shuffleArray(options, correctIndex) {
  const shuffled = options.map((option, index) => ({ option, isCorrect: index === correctIndex, originalIndex: index }));
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

async function handleStartQuiz(event) {
  event.preventDefault();
  const nameInput = document.getElementById("input-name");
  const passwordInput = document.getElementById("input-password");
  const termsInput = document.getElementById("chk-terms");
  const name = nameInput.value.trim();
  const password = passwordInput.value.trim();
  if (!name || !password) {
    alert("Por favor, preencha o nome de utilizador e a senha.");
    return;
  }
  if (!termsInput.checked) {
    alert("Confirme as informações para continuar.");
    return;
  }
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome_usuario: name, senha: password })
    });
    const data = await response.json();
    if (!response.ok) {
      alert(data.error || "Erro ao realizar login.");
      return;
    }
    userData = { id: data.id_jogador, name: data.nome_usuario, isGuest: false };
    document.getElementById("player-display-name").textContent = name;
    document.getElementById("player-display-info").textContent = "";
    document.getElementById("menu-player-name").textContent = name;
    document.getElementById("menu-player-info").textContent = "";
    showScreen("screen-menu");
  } catch (error) {
    alert("Não foi possível conectar ao servidor backend.");
    console.error(error);
  }
}


function startAsGuest(event) {
  event?.preventDefault();
  userData = { name: "Convidado", password: "", isGuest: true };
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

  // 1. Exibe os resultados e detalhes na tela final
  document.getElementById("final-score").textContent = userScore;
  document.getElementById("bonus-points-text").textContent =
    `${bonusPointsEarned} pontos bônus conquistados nas perguntas surpresa.`;
  document.getElementById("final-time").textContent = formatTime(secondsElapsed);
  document.getElementById("ranking-position").textContent = "Resultado desta partida";

  // 2. Preenche a lista de resumo de respostas
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

  // 3. Grava no banco de dados PostgreSQL se NÃO for convidado
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

// Função para enviar os dados da partida ao backend para salvar no banco de dados

async function salvarPartidaNoBanco(dadosPartida) {
  try {
    const response = await fetch(`${API_URL}/partidas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosPartida)
    });
    const result = await response.json();
    console.log("Partida guardada no banco:", result);
  } catch (error) {
    console.error("Erro ao guardar partida na base de dados:", error);
  }
}