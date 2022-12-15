let computerChoice;
// let playerChoice;

//To get a computer choice
let rand = Math.floor(3 * Math.random());

if (rand == 0) {
    computerChoice = "Scissors"
} else if (rand == 1) {
    computerChoice = "Rock"
} else {
    computerChoice = "Paper"
}
//


//To get a player choice
let playerChoice = prompt("Rock, scissors, or paper?", "type here");
// playerChoice = toUpperCase(playerChoice.slice(0,1))
//playerChoice = typedValue;


playerChoice = playerChoice.toLowerCase();
let firstLetter = playerChoice.slice(0,1);
firstLetter = firstLetter.toUpperCase();
playerChoice = firstLetter + playerChoice.slice(1);


// if (typedValue == /rock/i) {
//     playerChoice = "Rock"
// } else if (typedValue == /scissors/i) {
//     playerChoice = "Scissors"
// } else if (typedValue == /paper/i) {
//     playerChoice = "Paper"
// } else {
//     playerChoice = null;
// }
//

//
function playRound() {
    if (computerChoice == playerChoice) {
        return `The computer chose ${computerChoice}! Draw!`
    } else if ((computerChoice == "Rock" && playerChoice == "Scissors") || (computerChoice == "Scissors" && playerChoice == "Paper") || (computerChoice == "Paper" && playerChoice == "Rock") ) {
        return `The computer chose ${computerChoice}! You lose!`
    } else {
        return `The computer chose ${computerChoice}! You win!`
    }
}

console.log(playRound(), computerChoice, playerChoice)
