let computerChoice;

function getComputerChoice() {
    let rand = Math.floor(3 * Math.random());

    if (rand == 0) {
        computerChoice = "Scissor"
    } else if (rand == 1) {
        computerChoice = "Rock"
    } else {
        computerChoice = "Paper"
    }
}

let playerChoice = prompt("Rock, scissors, or paper?", "type here");

// function playRound(computerChoice, playChoice) {
//     switch (computerChoice && playerChoice)

//     }
// }

// if (playerChoice == /rock/i) {
    
// }

