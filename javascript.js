const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");

let playerChoice;

rockButton.addEventListener('click', () => {
    playerChoice = "Rock";
    console.log(game());
});

scissorsButton.addEventListener('click', () => {
    playerChoice = "Scissors";
    console.log(game());
});

paperButton.addEventListener('click', () => {
    playerChoice = "Paper";
    console.log(game());
});


// let computerScore = 0;
// let playerScore = 0;
let computerChoice;

// function printScore() {
//     return ` Your points: ${playerScore}
//     The computer\'s points: ${computerScore}`
// }



function game() {

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


    // //To get a player choice
    // let playerChoice = prompt("Rock, scissors, or paper?", "type here");
    // //

//     //To make the player choice case insensitive
//     playerChoice = playerChoice.toLowerCase();
//     let firstLetter = playerChoice.slice(0,1);
//     firstLetter = firstLetter.toUpperCase();
//     playerChoice = firstLetter + playerChoice.slice(1);
//     //

    //Test who wins
    function playRound() {
        if (computerChoice == playerChoice) {
            return `The computer chose ${computerChoice}! Draw!`
        } else if ((computerChoice == "Rock" && playerChoice == "Scissors") || (computerChoice == "Scissors" && playerChoice == "Paper") || (computerChoice == "Paper" && playerChoice == "Rock") ) {
            // computerScore++;
            return `The computer chose ${computerChoice}! You lose!`;
        } else if ((playerChoice == "Rock" && computerChoice == "Scissors") || (playerChoice == "Scissors" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Rock") ) {
            // playerScore++;
            return `The computer chose ${computerChoice}! You win!`
        // } else {
        //     return "Please type rock scissors or paper."
        }
    }
    //

    return playRound()
}


// while (computerScore + playerScore < 5) {
    // console.log(game());
// }


