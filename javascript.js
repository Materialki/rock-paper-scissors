const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");
const resultMessage = document.querySelector(".current-round-results");
const compScoreDiv = document.querySelector("#computer-score");
const playerScoreDiv = document.querySelector("#player-score");
const resetButton = document.querySelector("#reset");

let playerChoice;
let computerChoice;

let computerScore = 0;
let playerScore = 0;

rockButton.addEventListener('click', () => {
    playerChoice = "Rock";
    resultMessage.textContent = game();
    compScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
});

scissorsButton.addEventListener('click', () => {
    playerChoice = "Scissors";
    resultMessage.textContent = game();
    compScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
});

paperButton.addEventListener('click', () => {
    playerChoice = "Paper";
    resultMessage.textContent = game();
    compScoreDiv.textContent = computerScore;
playerScoreDiv.textContent = playerScore;
});

resetButton.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    compScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
})

compScoreDiv.textContent = computerScore;
playerScoreDiv.textContent = playerScore;

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

    //Test who wins
    function playRound() {
        if (computerChoice == playerChoice) {
            return `The computer chose ${computerChoice}! Draw!`
        } else if ((computerChoice == "Rock" && playerChoice == "Scissors") || (computerChoice == "Scissors" && playerChoice == "Paper") || (computerChoice == "Paper" && playerChoice == "Rock") ) {
            computerScore++;
            return `The computer chose ${computerChoice}! You lose!`;
        } else if ((playerChoice == "Rock" && computerChoice == "Scissors") || (playerChoice == "Scissors" && computerChoice == "Paper") || (playerChoice == "Paper" && computerChoice == "Rock") ) {
            playerScore++;
            return `The computer chose ${computerChoice}! You win!`
        }
    }
    //

    return playRound()
}


// while (computerScore + playerScore < 5) {
    // console.log(game());
// }


