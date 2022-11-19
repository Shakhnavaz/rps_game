// function getComputerChoice(userInput) {
//     // if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors') {
//     //     console.log(userInput)
//     // } else {
//     //     console.log('please input: rock, paper or scissors') 
//     // } 
//     let rps 
//     let mathResult = Math.floor(Math.random() * 3);
//     if (mathResult == 0) {
//         rps = 'rock'
//     } else if (mathResult == 1) { 
//         rps = 'paper'
//     } else if (mathResult == 2) {
//         rps = 'scissors'
//     } 
    
// }

// // function playRound(playerSelection, computerSelection) {

// // }

// // const playerSelection = 'rock';
// const computerSelection = getComputerChoice(playerSelection);

//---------------------------------------------------------------------------------------

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

// console.log(getComputerChoice(mathResult));



function getUserChoice() {
    let userInput = window.prompt('Choose rock, paper or scissors:')
    return userInput
}

getUserChoice();

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log('Tie!');
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log(`You Lost! ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}!`);

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!}`);

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!}`);

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!}`);

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}!}`);
    } else {
        console.log('Please enter rock, paper or scissors')
    }
} 

console.log(playRound(getUserChoice, getComputerChoice));


