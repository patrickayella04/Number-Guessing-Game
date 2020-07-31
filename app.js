/**
 * GAME FUNCTIONS:
 * - Player must guess a number between a min and max
 * - Player gets a certain amount of guesses
 * - Notify player of guesses remaining
 * - let player choose to play again
 */

 // Game Values
let min = 1,
    max = 11,
    winningNum = getRandomNum(min, max),
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

// Play agian event listener - add to parent for even delegation
game.addEventListener('mousedown', function (e) { // click will reload the page to quickly so we use mousedown
    if (e.target.className === 'play-again') {
        window.location.reload(); // reloads the page
    }
} )

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
        // Game over - won

        // // Disable input
        // guessInput.disabled = true;
        // // Change border color
        // guessInput.style.borderColor = 'green';
        // // Set message
        // setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

        // Streemline code - Here we replace the code above with the gameOver function. 

        gameOver(true, `${winningNum} is correct, YOU WIN!`, 'green');


    } else {
        // Wrong number
        guessesLeft -= 1; // This is a shorter way of writting guessesLeft = guessesLeft - 1;

        if (guessesLeft === 0) {
            // Game over - lost
            // Disable input
            // guessInput.disabled = true;
            // // Change border color
            // guessInput.style.borderColor = 'red';
            // // Set message
            // setMessage(`Game Over, you lost. The correct number was ${winningNum} `, 'red');

            // Streemline code - Here we replace the code above with the gameOver function. 

            gameOver(false, `Game Over, you lost. The correct number was ${winningNum} ` )



        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }


    }
});
// Game over
function gameOver(won, msg) {
    
    let color;
    // Here we use a conditional with a ternary operator
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Set text color
    message.style.color = color;
    // Set message
    setMessage(msg);

    // Play Again?
    guessBtn.value = 'Play Again';
    // we add a new class name, because we will add a new event handler to this button.
    guessBtn.className += 'play-again'; // we append a class name.
}

function getRandomNum(min, max) {
    // return this into winningNum
    return Math.floor(Math.random()*(max-min + 1)+min);// max-min equals 9, + 1 eqauls 10. Random() will give number between 1-9. so we add min which in our cas is 1 but it might be something else for someone elses game. so we use its variable of min. We then wrap everything in Math.floor which is a method that rounds numbers down to whole numbers.
}


// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}