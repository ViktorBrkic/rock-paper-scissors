let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// gives a random value from the array
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]
}

// plays a round of a game
function round() {
    let computerChoice = computerPlay();
    let playerChoice = prompt('What do you choose?', '').toLowerCase();

    // if (playerChoice === null) {
    //     return 0;
    // }


    if (playerChoice === 'rock' & computerChoice === 'paper') {
        computerScore += 1;
        alert('You lose, paper beats rock!');
    }
    else if (playerChoice === 'paper' & computerChoice === 'scissors') {
        computerScore += 1;
        alert('You lose, scissors beat paper!');
    }
    else if (playerChoice === 'scissors' & computerChoice === 'paper') {
        computerScore += 1;
        alert('You lose, rock beats scissors!');
    }
    else if (playerChoice === 'rock' & computerChoice === 'scissors') {
        playerScore += 1;
        alert('You win, rock beats scissors!');
    }
    else if (playerChoice === 'paper' & computerChoice === 'rock') {
        playerScore += 1;
        alert('You win, paper beats rock!');
    }
    else if (playerChoice === 'scissors' & computerChoice === 'paper') {
        playerScore += 1;
        alert('You win, scissors beat paper!');
    }
    else if (playerChoice === computerChoice) {
        alert('It is a tie')
    }

    else {
        alert('Try again');
    }

    if (playerScore >= 3) {
        alert('You win the game!')
    } else if (computerScore >= 3) {
        alert('Computer wins the game!')
    }
}

//repeats rounds until someone wins the game
function game() {

    for (rounds = 1; playerScore < 3 && computerScore < 3; rounds++) {
        round();
    }
}
game();