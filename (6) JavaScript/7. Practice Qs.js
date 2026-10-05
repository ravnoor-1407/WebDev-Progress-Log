// Practice Questions on let, const and var Keywords in JavaScript

// Q1. What is the value of age after the following code is executed?
let age = 23;
age + 2; // After 2 years

console.log("Age after 2 years: ", age);
// Output: 23 because we did not update the value of age, we just calculated age + 2 but did not assign it back to age.
// To update the value of age, we need to do: age = age + 2; or age += 2;

//Q2. What is the value of avg after the following code is executed?
let hindi = 80;
let english = 90;
let maths = 100;
let avg = (hindi + english + maths) / 3;

console.log("Average marks: ", avg);
// Output: 90