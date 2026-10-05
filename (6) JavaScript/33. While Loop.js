// While Loop in JavaScript

/*
while (condition) {
    //do something
}

Example:
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
*/

// Print all numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

console.log("Backwards Sequence: ");
i = 10;  // Don't write let i = 10 as it means reinitialization and it's not allowed, instead updation is allowed
while (i >= 1) {
    console.log(i);
    i--;
}

// Guessing favourite movie
let favMovie = "Disney Tangled";

const prompt = require('prompt-sync')();
let guess = prompt("Hey there! Can you guess my favourite movie?");

while ((guess !== favMovie) && (guess !== "Quit")) {
    console.log("Wrong guess!");
    guess = prompt("Wrong guess! Try again or type 'Quit' to stop:");
}

if (guess === favMovie) {
    console.log("Yay! You guessed it right 🎉");
} else {
    console.log("Game over. See you next time.");
}

// break keyword: It stops the execution of the loop
// Genrally it is used with whie loop but we can use with for loop as well.

i = 1;
while (i <= 5)  {
    if (i == 3) {
        break;
    }
    console.log(i);
    i++;
}
console.log("We used break at 3.");