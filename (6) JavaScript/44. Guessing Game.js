// Guessing Game in JavaScript

// User enters a maximum number and then tries to guess a random generated number between 1 to that maximum number.

// Step 1: Import prompt-sync
const prompt = require('prompt-sync')();

// Step 2: Ask user for the maximum number
const maxNum = parseInt(prompt("Enter the maximum number🔢: "));

// Step 3: Generate a random number between 1 and maxNum
const randomNum = Math.floor(Math.random() * maxNum) + 1;

// Step 4: Ask the user to guess
let guess = prompt(`🤔 Guess a number between 1 and ${maxNum}: `);

// Step 5: Keep looping until the guess is correct
while (true) {
    if (guess.toLowerCase() == "quit") {
        console.log("👋 🚪 You exited the game. Goodbye! Better luck next time");
        break;
    }

    let numGuess = parseInt(guess);

    if(numGuess == randomNum){
        console.log(`🎉 Correct! The number was ${randomNum} 🎯`);
        break;
    } else if (numGuess > randomNum) {
        guess = prompt("📈 Too high! Try again (or type 'quit'): ");
    } else if (numGuess < randomNum) {
        guess = prompt("📉 Too low! Try again (or type 'quit'): ");
    } else {
        guess = prompt("⚠️ Invalid input! Enter a number or 'quit': ");
    }
}