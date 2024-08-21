let choices = ['Rock', 'Paper', 'Scissors']; // Make an array of the possible choices ['Rock', 'Paper', Scissors]




const getComputerChoice = () => {
    let random = Math.floor((Math.random() * 3)); // Generate a random number between 0 and 2 (1 and 3)
    return choices[random]
}

let humanScore = 0;
let compScore = 0;

const updateScores = () => {
    humanScoreEl.textContent = humanScore;
    compScoreEl.textContent = compScore;
    if (humanScore >= 5) {
        commentary.textContent = "You have defeated the computer and won the world championship! PLAY AGAIN?"
        humanScore = 0;
        compScore = 0;
    }
    if (compScore >= 5 || humanScore >= 5) {
        commentary.textContent = "Oh no, the robots are gonna rule the world now I guess... PLAY AGAIN?"
        humanScore = 0;
        compScore = 0;
    }
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) { // it's a draw
        return `You chose ${humanChoice}, Computer chose ${computerChoice}... 
        It's a draw! Try again!`;
    } else if ( // If humanchoice beats computerchoice return "YOU WIN"
        (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') ||
        (humanChoice === 'PAPER' && computerChoice === 'ROCK')
    ) {
        humanScore++
        return `You chose ${humanChoice}, Computer chose ${computerChoice}...
        Humans win! Suck it Robot scum!`.trim();
    } else {
        compScore++
        return `You chose ${humanChoice}, Computer chose ${computerChoice}...
        You are inferior to the cold hard silicon, Computers win!`;
    }
}

let optionElements = document.querySelectorAll('.option');
let commentary = document.querySelector('#commentary');
let humanScoreEl = document.querySelector('#human-score');
let compScoreEl = document.querySelector('#comp-score');

optionElements.forEach(el => {
    el.addEventListener('click', function (e) {
        console.log(e.target.textContent);
        commentary.textContent = (playRound(e.target.textContent.trim(), getComputerChoice().toUpperCase()));
        updateScores();
    });
});