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
  let humanMessage = prompt("Choose between rock, paper or scissors");

  if (!humanMessage) {
    alert("Quitting already? The computer was just getting started 😜");
    return;
  }

  humanMessage = humanMessage.toLowerCase();

  if (humanMessage === "no") {
    alert("Thank you for playing");
    return;
  } else {
    return humanMessage;
  }
}

// console.log(getHumanChoice());

function playAgain() {
  let message = prompt("Do you want to play again?", "yes or no");

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;

  const playRound = function (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(
        `It's a tie! ${humanChoice} it's the same than ${computerChoice}.`
      );
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    console.log(`Scores - You: ${humanScore} | Computer: ${computerScore}`);
  };

  while (humanScore < 5 && computerScore < 5) {
    round++;
    console.log(`Round ${round}`);

    let humanChoice;
    while (true) {
      humanChoice = getHumanChoice();

      if (!humanChoice) {
        console.log("Player exited the game.");
        return;
      }

      humanChoice = humanChoice.toLowerCase();

      if (
        humanChoice === "rock" ||
        humanChoice === "paper" ||
        humanChoice === "scissors"
      ) {
        break;
      } else {
        alert(
          "You didn't choose a valid answer! Please choose rock, paper, or scissors."
        );
      }
    }

    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(
      `After ${round} rounds, you win the game! Final Score: ${humanScore} - ${computerScore}`
    );
  } else {
    console.log(
      `After ${round} rounds, computer wins the game! Final Score: ${computerScore} - ${humanScore}`
    );
  }
  playAgain();
}

playGame();
