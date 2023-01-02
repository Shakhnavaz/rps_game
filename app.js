function getComputerChoice() {
  let mathResult = Math.floor(Math.random() * 3);
  const arr = ["rock", "paper", "scissors"];
  return arr[mathResult];
}

function playRound(playerSelection, computerSelection) {
  const relations = { rock: "paper", paper: "scissors", scissors: "rock" };
  let ps = playerSelection.toLowerCase();
  let cs = computerSelection.toLowerCase();

  if (!Object.keys(relations).includes(ps)) {
    return "Please type rock, paper or scissors";
  }

  if (ps == cs) {
    return "tie!";
  }

  return relations[ps] == cs ? "you lost!" : "you win!";
}

function game() {
  let playerSelection = prompt("Input rock, paper or scissors: ");
  let computerSelection = getComputerChoice();

  console.log("---------------------");
  console.log("me: " + playerSelection.toLowerCase());
  console.log("computer: " + computerSelection);
  return playRound(playerSelection, computerSelection);
}

// playing 5 rounds
// for (let i = 0; i < 5; i++) {
//   console.log(game());
// }
