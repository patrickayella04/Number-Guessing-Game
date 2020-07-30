/**
 * GAME FUNCTIONS:
 * - Player must guess a number between a min and max
 * - Player gets a certain amount of guesses
 * - Notify player of guesses remaining
 * - let player choose to play again
 */

 // Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function () {
    //The parseInt() function parses a string and returns an integer.
    let guess = parseInt(guessInput.value);
    console.log(guess);
    // To validate our input - we need a conditional
    //The isNaN() function determines whether a value is an illegal number (Not-a-Number).                //This function returns true if the value equates to NaN. Otherwise it returns false.
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    } else {

    }
});
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}