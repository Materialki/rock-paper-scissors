let computerScore = 0;
let playerScore = 0;
let computerChoice;

function printScore() {
    return ` Your points: ${playerScore}
    The computer\'s points: ${computerScore}`
}

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


    //To get a player choice
    let playerChoice = prompt("Rock, scissors, or paper?", "type here");
    //

    //To make the player choice case insensitive
    playerChoice = playerChoice.toLowerCase();
    let firstLetter = playerChoice.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    playerChoice = firstLetter + playerChoice.slice(1);
    //

    // Computer points: ${computerScore}
    // Your points:

    //Test who wins
    function playRound() {
        if (computerChoice == playerChoice) {
            return `The computer chose ${computerChoice}! Draw!` + printScore()
        } else if ((computerChoice == "Rock" && playerChoice == "Scissors") || (computerChoice == "Scissors" && playerChoice == "Paper") || (computerChoice == "Paper" && playerChoice == "Rock") ) {
            computerScore++;
            return `The computer chose ${computerChoice}! You lose!` + printScore()
        } else if ((playerChoice == "Rock" && computerChoice == "Scissors") || (playerChoice == "Scissors" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Rock") ) {
            playerScore++;
            return `The computer chose ${computerChoice}! You win!` + printScore()
        } else {
            return "Please type rock scissors or paper."
        }
    }
    //

    return playRound()

//console.log(playRound())
}

for (let i = 0; i < 5; i++) {
    console.log(game());
}


