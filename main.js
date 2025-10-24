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

console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("Chose between rock, paper or scissors").toLowerCase();
}

console.log(getHumanChoice());
