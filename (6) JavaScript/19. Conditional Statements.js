// Conditional Statements in JavaScript

// 1. if statement
// The if statement executes a block of code if a specified condition is true.
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
    console.log("You can vote.");
    console.log("You can drive.");
}

// Q: Create a traffic light system that shows what to do based on color.
let trafficLight = "green";
if (trafficLight === "red") {
    console.log("Stop! Traffic light is red.");
}
if (trafficLight === "yellow") {
    console.log("Slow down! Traffic light is yellow.");
}
if (trafficLight === "green") {
    console.log("Go! Traffic light is green.");
}

// 2. else if statement
// The else if statement allows you to specify a new condition to test if the previous condition was false.
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
}

let month = "July";
if (month === "December" || month === "January" || month === "February") {
    console.log("It's winter.");
} else if (month === "March" || month === "April" || month === "May") {
    console.log("It's spring.");
} else if (month === "June" || month === "July" || month === "August") {
    console.log("It's summer.");
} else if (month === "September" || month === "October" || month === "November") {
    console.log("It's autumn.");
}

// 3. else statement
// The else statement executes a block of code if all previous conditions are false.
let temperature = 30;
if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature < 15) {
    console.log("It's cold outside.");
} else {
    console.log("It's neither hot nor cold outside.");
}

/*
Q: Create a system to calculate popcorn prices based on size customer asked for:
If size is 'XL', price is Rs. 250.
If size is 'L', price is Rs. 200.
If size is 'M', price is Rs. 100.
If size is 'S', price is Rs. 50.
*/

let popcornSize = 'XL';

if (popcornSize === "XL") {
  console.log("You chose XL 🍿 — Price: Rs. 250. Jumbo crunch incoming!");
} else if (popcornSize === "L") {
  console.log("You picked L 🍿 — Price: Rs. 200. Large and in charge!");
} else if (popcornSize === "M") {
  console.log("You went with M 🍿 — Price: Rs. 100. Medium but mighty!");
} else if (popcornSize === "S") {
  console.log("You selected S 🍿 — Price: Rs. 50. Small but snack-tastic!");
} else {
  console.log("Oops! That size doesn’t exist 🚫. Try XL, L, M, or S.");
}

// 4. Nested if else statement
// A nested if-else statement is a control flow structure where one if or if-else statement is placed inside another if or else block.
// It allows programs to evaluate multiple levels of dependent conditions in a hierarchical or step-by-step manner.

let marks = 75;

if (marks >= 33) {
    console.log("Congrats! You passed.");
    if (marks >=90) {
        console.log("You got A+ grade.");
    } else if (marks >= 80) {
        console.log("You got A grade.");
    } else if (marks >= 70) {
        console.log("You got B+ grade.");
    } else if (marks >= 60) {
        console.log("You got B grade.");
    } else {
        console.log("You got C grade.");
    }
} else {
    console.log("Better luck next time!");
}