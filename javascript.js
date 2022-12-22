//html event listeners
const rockButton = document.querySelector('#rock');
const scissorsButton = document.querySelector("#scissors");
const paperButton = document.querySelector("#paper");
const resultMessage = document.querySelector(".current-round-results");
const compScoreDiv = document.querySelector("#computer-score");
const playerScoreDiv = document.querySelector("#player-score");
const resetButton = document.querySelector("#reset");
const disResultsDiv = document.querySelector(".display-results");
const body = document.querySelector("body");
const crr = document.querySelector(".current-round-results")
//

//declaring choices and scores
let playerChoice;
let computerChoice;

let computerScore = 0;
let playerScore = 0;
//

//putting initial score in html
compScoreDiv.textContent = computerScore;
playerScoreDiv.textContent = playerScore;
//

//what happens when you click the buttons
rockButton.addEventListener('click', () => {
    playerChoice = "Rock";
    resultMessage.textContent = game();
    compScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
    isEnd();
});

scissorsButton.addEventListener('click', () => {
    playerChoice = "Scissors";
    resultMessage.textContent = game();
    compScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
    isEnd();
});

paperButton.addEventListener('click', () => {
    playerChoice = "Paper";
    resultMessage.textContent = game();
    compScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
    isEnd();
});

resetButton.addEventListener('click', () => {
    computerScore = 0;
    playerScore = 0;
    compScoreDiv.textContent = computerScore;
    playerScoreDiv.textContent = playerScore;
    crr.removeChild(endGame)
})
//

function isEnd() {

    if (computerScore == 5 || playerScore == 5) {

        if (computerScore == 5) {
            crr.textContent = "Sorry! The computer won. Please press the reset button to play again."
        }

        if (playerScore == 5) {
            crr.textContent = "Congrats! You won! Please press the reset button to play again."
        }
    }
}

function game() {

    if (computerScore < 5 && playerScore < 5) {

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
}


// while (computerScore + playerScore < 5) {
    // console.log(game());
// }


