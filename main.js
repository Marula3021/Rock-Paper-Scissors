console.log("Hello World");
console.log(1 + 4);

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
  return prompt("Chose between rock, paper or scissors").toLowerCase();
}

// console.log(getHumanChoice());

function playAgain() {
  let message = prompt("Do you want to play again?", "yes");

  if (message === "yes") {
    playGame();
  } else if (message === "no") {
    alert("Thank you for playing");
  } else if (!message) {
    alert("Too bad ! See you next time :)");
  } else {
    let attempts = 0;
    while (attempts < 3) {
      alert("Wrong answer! Please answer with 'yes' or 'no'.");
      message = prompt("Do you want to play again? (yes or no)", "yes");
      if (!message) {
        alert("Too bad ! See you next time :)");
        return;
      }
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
