let playerScore = 0;
let computerScore = 0;
let rounds = 0;

// gives a random value from the array
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    let randomPlay = Math.floor(Math.random() * choice.length);
    return choice[randomPlay]
}

const playerChoice = ['rock', 'paper', 'scissors'];


const body = document.querySelector('body');
body.setAttribute('style',
    'background:linear-gradient(152deg, rgba(82,169,179,1) 0%, rgba(106,217,230,1) 33%, rgba(151,226,235,1) 73%, rgba(156,244,255,1) 100%); width: 100vw;height:100vh');
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Rock, Paper, Scissors';
title.setAttribute('style', 'color:#0c3136; background:linear-gradient(159deg, rgba(151,226,235,1) 0%, rgba(151,226,235,1) 24%, rgba(156,244,255,1) 59%, rgba(156,244,255,1) 80%, rgba(156,244,255,1) 100%); text-align:center;text-transform:uppercase;padding:0.5em 0; font-size:3em;font-family: Roboto, sans-serif; font-weight: 700;word-spacing: 0.5rem; width:50%; margin: 0 auto; margin-top:1em; border: 2px solid #0c3136')
const container = document.createElement('div');
container.classList.add('container');
body.appendChild(title);
body.appendChild(container);
// title.setAttribute('style', 'color: blue; background: white');





const rock = document.createElement('button');
rock.setAttribute('style', 'color:#fff;width:9em;background:linear-gradient(315deg, rgba(78,236,255,1) 0%, rgba(59,195,209,1) 33%, rgba(32,186,205,1) 73%, rgba(9,138,154,1) 100%); padding:1em 2em; font-size:2rem;text-transform:uppercase;font-weight:700; border-radius: 100px;')
rock.textContent = 'Rock';
rock.classList.add('button')
const paper = document.createElement('button');
paper.setAttribute('style', 'color:#fff;width:9em;background:linear-gradient(315deg, rgba(78,236,255,1) 0%, rgba(59,195,209,1) 33%, rgba(32,186,205,1) 73%, rgba(9,138,154,1) 100%); padding:1em 2em; font-size:2rem;text-transform:uppercase;font-weight:700;border-radius: 100px;')
paper.textContent = 'Paper';
paper.classList.add('button')
const scissors = document.createElement('button');
scissors.setAttribute('style', 'color:#fff;width:9em;background:linear-gradient(315deg, rgba(78,236,255,1) 0%, rgba(59,195,209,1) 33%, rgba(32,186,205,1) 73%, rgba(9,138,154,1) 100%); padding:1em 2em; font-size:2rem;text-transform:uppercase;font-weight:700;border-radius: 100px;')
scissors.textContent = 'Scissors';
scissors.classList.add('button')


const scores = document.createElement('div');
scores.setAttribute('style', 'display:flex; justify-content:space-around;padding:2em 0; align-items: center; margin:3em 0; border:2px solid #0c3136;background: linear-gradient(90deg, rgba(63,237,255,1) 0%, rgba(3,67,75,1) 100%);');


container.appendChild(scores);

const choices = document.createElement('div');
choices.setAttribute('style', 'display:flex; gap:3em;')
container.appendChild(choices);

choices.appendChild(rock);
choices.appendChild(paper);
choices.appendChild(scissors);



container.setAttribute('style', 'width: 100%; display:flex; flex-direction:column; justify-content:center;align-items:center;gap:2em;padding-top:1em')

const playerScoreTag = document.createElement('div');
playerScoreTag.setAttribute('style', 'display:flex; flex-direction:column; width:25em;color: #0c3136;align-items:center;font-family: Roboto, sans-serif;')
// container.appendChild(computerScoreBoard);
const playerTag = document.createElement('span');
playerTag.setAttribute('style', 'font-size:2rem;color: #0c3136; text-transform:uppercase;padding:1em;font-family: Roboto, sans-serif;')
playerTag.textContent = 'You:'
playerScoreTag.appendChild(playerTag);

const playerScoreBoard = document.createElement('span');
playerScoreBoard.classList.toggle('playerScoreBoard');
playerScoreBoard.setAttribute('style', 'font-size:4.5rem;color: #0c3136;font-family: Roboto, sans-serif;')
playerScoreBoard.innerText = (0);
// container.appendChild(playerScoreBoard);
playerScoreTag.appendChild(playerScoreBoard);

scores.appendChild(playerScoreTag);

const computerScoreTag = document.createElement('div');
computerScoreTag.setAttribute('style', 'display:flex; flex-direction:column;width:25em;color: #86f4ff; align-items:center;font-family: Roboto, sans-serif;')
const computerTag = document.createElement('span');
computerTag.textContent = 'Computer:'
computerTag.setAttribute('style', 'font-size:2rem;color: #86f4ff; text-transform:uppercase;padding:1em;font-family: Roboto, sans-serif;')
computerScoreTag.appendChild(computerTag);

const computerScoreBoard = document.createElement('span');
computerScoreBoard.classList.toggle('computerScore');
computerScoreBoard.setAttribute('style', 'font-size:4.5rem;font-family: Roboto, sans-serif;color: #86f4ff;')
computerScoreBoard.innerText = (0);

computerScoreTag.appendChild(computerScoreBoard);

const winText = document.createElement('span');
winText.textContent = 'You Win!'
winText.setAttribute('style', 'display: none;font-size:6rem; color:#fff; text-transform:uppercase; padding: 1em 0;')
const loseText = document.createElement('span');
loseText.textContent = 'You Lose!'
loseText.setAttribute('style', 'display: none;font-size:6rem; color:#0c3136; text-transform:uppercase; padding: 1em 0;')

scores.appendChild(winText);
scores.appendChild(loseText);

scores.appendChild(computerScoreTag);

const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again';
playAgain.setAttribute('style', 'font-size:2.5rem;font-weight:500;color: #0c3136;font-family: Roboto, sans-serif; text-transform:uppercase;padding: 0.5em 1em; margin-top: 1em; background:linear-gradient(55deg, rgba(78,236,255,1) 0%, rgba(59,195,209,1) 33%, rgba(32,186,205,1) 73%, rgba(9,138,154,1) 100%);')
container.appendChild(playAgain);





// plays a round of a game
function round(playerChoice) {
    const computerChoice = computerPlay();
    // let playerChoice = prompt('What do you choose?', '').toLowerCase();

    // if (playerChoice === null) {
    //     return 0;
    // }

    if (playerChoice === 'rock' & computerChoice === 'paper' || playerChoice === 'paper' & computerChoice === 'scissors' || playerChoice === 'scissors' & computerChoice === 'rock') {
        computerScore += 1;
        computerScoreBoard.innerText = computerScore;
        if (computerScore >= 5) {
            lose();
        }
        // alert('You lose the round!');
    }
    else if (playerChoice === 'rock' & computerChoice === 'scissors' || playerChoice === 'paper' & computerChoice === 'rock' || playerChoice === 'scissors' & computerChoice === 'paper') {
        playerScore += 1;
        playerScoreBoard.innerText = playerScore;
        if (playerScore >= 5) {
            win();
        }
        // alert('You win the round!');
    }

    else if (playerChoice === computerChoice) {
        // alert('It is a tie')
        console.log('Its a tie')
    }

    else {
        alert('Try again');
    }

}


rock.addEventListener('click', function () {
    round(playerChoice[0]);
})
paper.addEventListener('click', function () {
    round(playerChoice[1]);
})
scissors.addEventListener('click', function () {
    round(playerChoice[2]);
})


// repeats rounds until someone wins the game

function win() {
    // playerScoreBoard.setAttribute('style', 'font-size:2.5rem;')
    // playerScoreBoard.innerText = 'You Win!'
    // computerScoreBoard.setAttribute('style', 'font-size:2.5rem;')
    // computerScoreBoard.innerText = 'Computer Loses!'
    computerScoreTag.setAttribute('style', 'display:none;')
    playerScoreTag.setAttribute('style', 'display:none;')

    winText.setAttribute('style', 'display: block; color:#fff; font-size:6rem; text-transform:uppercase;font-family: Roboto, sans-serif; padding: 0.5em 1em')

    rock.setAttribute('disabled', 1);
    paper.setAttribute('disabled', 1);
    scissors.setAttribute('disabled', 1);
}

function lose() {
    // computerScoreBoard.setAttribute('style', 'font-size:2.5rem;')
    // computerScoreBoard.innerText = 'Computer Wins!'
    // playerScoreBoard.setAttribute('style', 'font-size:2.5rem;')
    // playerScoreBoard.innerText = 'You Lose!'
    computerScoreTag.setAttribute('style', 'display:none;')
    playerScoreTag.setAttribute('style', 'display:none;')

    loseText.setAttribute('style', 'display: block;color:#0c3136; font-size:6rem; text-transform:uppercase;font-family: Roboto, sans-serif; padding: 0.5em 1em')

    rock.setAttribute('disabled', 1);
    paper.setAttribute('disabled', 1);
    scissors.setAttribute('disabled', 1);
}

function restart() {


    computerScore = 0;
    playerScore = 0;

    loseText.setAttribute('style', 'display: none')
    winText.setAttribute('style', 'display: none')
    computerScoreTag.setAttribute('style', 'display:flex; flex-direction:column; width:25em;color: #fff;align-items:center;font-family: Roboto, sans-serif;')
    playerScoreTag.setAttribute('style', 'display:flex; flex-direction:column; width:25em;color: #0c3136;align-items:center;font-family: Roboto, sans-serif;')
    playerScoreBoard.innerText = 0;
    computerScoreBoard.innerText = 0;
    computerScoreBoard.setAttribute('style', 'font-size:4.5rem;');
    playerScoreBoard.setAttribute('style', 'font-size:4.5rem;');

    rock.removeAttribute('disabled');
    paper.removeAttribute('disabled');
    scissors.removeAttribute('disabled');
}

playAgain.addEventListener('click', function () {
    restart();
});