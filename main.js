// console.log("Hello World");
// console.log(1 + 4);

function getComputerChoice() {
  const choiceOne = "rock";
  const choiceTwo = "paper";
  const choiceThree = "scissors";

  const randomChoice = Math.floor(Math.random() * 3) + 1;

  let computerResult = "";

  if (randomChoice === 1) {
    computerResult = choiceOne;
  } else if (randomChoice === 2) {
    computerResult = choiceTwo;
  } else {
    computerResult = choiceThree;
  }
  return computerResult.toLowerCase();
}

// console.log(getComputerChoice());

function getHumanChoice() {
  let humanMessage = prompt("Chose between rock, paper or scissors");

  if (!humanMessage) {
    alert("Too bad ! See you next time :)");
    return;
  }

  humanMessage = humanMessage.toLowerCase();

  if (humanMessage === "no") {
    alert("Thank you for playing")
    return;
  }
  return humanMessage;
}

// console.log(getHumanChoice());

function playAgain() {
  let message = prompt("Do you want to play again?", "yes");

  if (!message) {
    alert("Too bad ! See you next time :)");
    return;
  }

  message = message.toLowerCase();

  if (message === "yes") {
    playGame();
  } else if (message === "no") {
    alert("Thank you for playing");
    return;
  } else {
    let attempts = 0;
    while (attempts < 2) {
      alert("Wrong answer! Please answer with 'yes' or 'no'.");
      message = prompt("Do you want to play again? (yes or no)", "yes");
      if (!message) {
        alert("Too bad ! See you next time :)");
        return;
      }

      message = message.toLowerCase();

      if (message === "yes") {
        playGame();
        return;
      } else if (message === "no") {
        alert("Thank you for playing!");
        return;
      }
      attempts++;
    }
    alert("Too many invalid attempts. Exiting the game.");
  }
}

// console.log(playAgain()); 

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! ${humanChoice} it's the same than ${computerChoice}.`);

  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {

    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);

  } else {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);

  }
  console.log(`Scores - You: ${humanScore} | Computer: ${computerScore}`);
}

  const computerSelection = getComputerChoice()
  const humanSelection = getHumanChoice()

playRound(humanSelection, computerSelection)

