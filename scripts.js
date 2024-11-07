document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start');
    const playRoundButton = document.getElementById('play-round');

    startButton.addEventListener('click', startGame);
    playRoundButton.addEventListener('click', playRound);
});

function startGame() {
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        alert('Sergant, please enter your call!!!');
        return;
    }
    document.getElementById('user-name').textContent = username;
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

let userScore = 0;
let computerScore = 0;

function playRound() {
    const userNumber = Math.floor(Math.random() * 100) + 1;
    const computerNumber = Math.floor(Math.random() * 100) + 1;
    let result = '';

    if (userNumber > computerNumber) {
        userScore++;
        result = 'Humans won the battle!';
    } else if (userNumber < computerNumber) {
        computerScore++;
        result = 'Machines won the battle(';
    } else {
        result = 'Eternal war';
    }

    document.getElementById('user-number-text').textContent = userNumber;
    document.getElementById('computer-number-text').textContent = computerNumber;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result').textContent = result;

    if (userScore === 3 || computerScore === 3) {
        setTimeout(function() {
            if (userScore === 3) {
                alert('You won the war, great work Sergant!');
            } else {
                alert('Machines won the war, you were bad');
            }
            resetGame();
        }, 100);
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('user-number-text').textContent = '';
    document.getElementById('computer-number-text').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById('username').value = '';
    document.getElementById('input-container').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}
