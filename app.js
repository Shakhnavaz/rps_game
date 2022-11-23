let rps 
let mathResult = Math.floor(Math.random() * 3);

function getComputerChoice() {

    if (mathResult == 0) {
        rps = 'rock'
    } else if (mathResult == 1) { 
        rps = 'paper'
    } else if (mathResult == 2) {
        rps = 'scissors'
    } 
    return rps
}       

function getPlayerChoice() {
    let userInput = prompt('Input rock, paper or scissors: ')
    return userInput
}

// console.log(getComputerChoice(mathResult));


let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    


    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie!'
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return `You Lost! ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return `You Win! ${playerSelection} beats ${computerSelection}!`

    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return `You lost! ${computerSelection} beats ${playerSelection}!`

    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return `You win! ${playerSelection} beats ${computerSelection}!`

    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return `You win! ${playerSelection} beats ${computerSelection}!`

    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return `You lost! ${computerSelection} beats ${playerSelection}!`
    } else {
        return 'Please enter rock, paper or scissors'
    }
    
} 


// console.log(playRound(playerSelection, computerSelection));      

function game() {
    
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()
    console.log('---------------------')
    console.log('me: ' + playerSelection.toLowerCase())
    console.log('computer: ' + getComputerChoice())
    return playRound(playerSelection, computerSelection)     

}

for (let i = 0; i > 5; i++) {
    if (i > 5) {
        console.log(game());
    }
}


