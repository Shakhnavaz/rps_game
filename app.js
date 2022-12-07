function getComputerChoice() {
  let mathResult = Math.floor(Math.random() * 3);
  if (mathResult == 0) {
    return "rock";
  } else if (mathResult == 1) {
    return "paper";
  } else if (mathResult == 2) {
    return "scissors";
  }
}

function getPlayerChoice() {
  let userInput = prompt("Input rock, paper or scissors: ");
  return userInput;
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

// playing round

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return "Tie!";
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "paper"
  ) {
    return `You Lost! ${computerSelection} beats ${playerSelection}!`;
  } else if (
    playerSelection.toLowerCase() == "rock" &&
    computerSelection == "scissors"
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "scissors"
  ) {
    return `You lost! ${computerSelection} beats ${playerSelection}!`;
  } else if (
    playerSelection.toLowerCase() == "paper" &&
    computerSelection == "rock"
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "paper"
  ) {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (
    playerSelection.toLowerCase() == "scissors" &&
    computerSelection == "rock"
  ) {
    return `You lost! ${computerSelection} beats ${playerSelection}!`;
  } else {
    return "Please enter rock, paper or scissors";
  }
}

function game() {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  console.log("---------------------");
  console.log("me: " + playerSelection.toLowerCase());
  console.log("computer: " + computerSelection);
  return playRound(playerSelection, computerSelection);
}

// playing 5 rounds

for (let i = 0; i < 5; i++) {
  if (i < 5) {
    console.log(game());
  }
}
