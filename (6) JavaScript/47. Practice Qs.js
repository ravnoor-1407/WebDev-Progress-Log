// Practice Questions on Functions

// Q1. Create a function to print a poem.
function printFunPoem() {
    const poem = `
    🌞 Rise and shine, the day is new,
    🌸 Flowers laugh with morning dew.
    🐦 Birds sing songs, so sweet, so bright,
    🌈 Colors dance in morning light.

    🍕 Lunch arrives, a tasty treat,
    😂 Friends bring joy, the vibe’s upbeat.
    🌙 Night falls slow, the stars all gleam,
    ✨ Drifting softly into dream.
  `;
  
  console.log(poem);
}
printFunPoem();

// Q2. Create a function to roll a dice and it always displays a value of dice (1 to 6).
function rollDice() {
    let diceNum = Math.floor(Math.random() * 6) + 1;
    console.log(`🎲 You rolled a ${diceNum}! 🥳`);
}
rollDice();

// Q3. Create a function that gives us the average of 3 numbers.
function calcAverage(a, b, c) {
    console.log(`The average of ${a}, ${b} and ${c} is ${(a + b + c) / 3}`);
}
calcAverage(6,7,8);

// Q4. Create a function that prints multiplication table of a number.
function mulTable(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
    }
}
mulTable(5);

// Q5. Create a function that returns the sum of numbers from 1 to n.
function calcSum(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(calcSum(10)); // Because we used return keyword

// Q6. Create a function that returns the concatenation of all the strings in an array.
let arrStr = ["Hey", "! ", "I'm ", "Ravnoor","...", "Nice ", "to ", "meet ", "you."];
function concatStr(arr) {
    let result = "";
    for(let i = 0; i < arr.length; i++) {
        result = result + arr[i];
    }
    return result;
}
console.log(concatStr(arrStr)); // Because we used return keyword