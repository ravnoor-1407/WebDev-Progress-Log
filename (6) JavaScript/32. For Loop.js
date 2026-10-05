// For Loop in JavaScript

/*
for (initialisation; condition; updation) {
    // do something
}
*/

// Print first 5 natural numbers
console.log("First 5 natural numbers: ");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Print all odd numbers from 1 to 15
console.log("Odd numbers from 1 to 15: ");
for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

console.log("Backward Sequence: ");
for (let i = 15; i >= 1; i -= 2) {
    console.log(i);
}

// Print all even numbers from 2 to 10
console.log("Even numbers from 2 to 10: ");
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

console.log("Backward Sequence: ");
for (let i = 10; i >= 2; i -= 2) {
    console.log(i);
}

/* Infinite Loops:

for (let i = 1; i >= 0; i++){

}

for (let i = 1; i <= 5; i--){

}

for (let i = 1; ; i++){

}
*/

// Print a multiplication table of 4
console.log("Multiplication table of 4: ");
for (let i = 4; i <= 40; i += 4) {
    console.log(i);
}

// Nested for loop
for (let i = 1; i <= 3; i++) {
    console.log(`Outer Loop ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}