// console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let round = 1;
let gameOver = false;

// <!-- WELCOME SCREEN -->

function startGame() {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.add("visible");
}

// <!-- GAME OVERLAY -->

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
const emojiMap = { rock: "✊", paper: "🖐️", scissors: "✌️" };

function playRound(humanChoice) {
  if (gameOver) return;

  const computerChoice = getComputerChoice();

  document.getElementById("human-choice-display").textContent =
    `${emojiMap[humanChoice]}`;
  document.getElementById("computer-choice-display").textContent =
    `${emojiMap[computerChoice]}`;

  let resultText = "";
  let resultEmoji = "";

  if (humanChoice === computerChoice) {
    resultText = "It's a tie!";
    resultEmoji = "😊";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultText = `You win! ${emojiMap[humanChoice]} beats ${emojiMap[computerChoice]}.`;
    resultEmoji = "🎊";
  } else {
    computerScore++;
    resultText = `You lose! ${emojiMap[computerChoice]} beats ${emojiMap[humanChoice]}.`;
    resultEmoji = "❌";
  }

  document.getElementById("result-emoji").textContent = resultEmoji;
  document.getElementById("result").textContent = resultText;
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("round").textContent = round++;

  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;
    setTimeout(() => showModal(), 350);
  }
}

//  <!-- MODAL OVERLAY -->

function showModal() {
  const playerWon = humanScore > computerScore;
  document.getElementById("modal-emoji").textContent = playerWon ? "🏆" : "🤖";
  document.getElementById("modal-message").textContent = playerWon
    ? "Congratulations! You won the game!"
    : "Game Over! The computer won.";
  document.getElementById("modal-score").textContent =
    `Final Score: You : ${humanScore} - Computer : ${computerScore}`;
  document.getElementById("modal-overlay").classList.add("show");
}
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  round = 1;
  gameOver = false;
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("round").textContent = round;
  document.getElementById("result").textContent = "Choose your weapon";
  document.getElementById("result-emoji").textContent = "";
  document.getElementById("result-emoji").classList.remove("fade");
  document.getElementById("human-choice-display").textContent = "YOU";
  document.getElementById("computer-choice-display").textContent = "CPU";
  document.getElementById("modal-overlay").classList.remove("show");
}
function quitGame() {
  resetGame();
  document.getElementById("welcome-screen").classList.remove("hidden");
  document.getElementById("game-screen").classList.remove("visible");
}
