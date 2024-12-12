function playGame(playerSelection) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    const outcomeDiv = document.getElementById('outcome');
    outcomeDiv.innerHTML = `
        <p>You chose: ${playerSelection}</p>
        <p>Computer chose: ${computerSelection}</p>
        <p>${result}</p>
    `;
}
