// Operator Precedence in JavaScript
// Operator precedence determines how operators are parsed concerning each other.
// Operators with higher precedence become the operands of operators with lower precedence.

// () > ** > *,/,% > +,-

let result1 = 2 + 3 * 2 ** 3; 
// 1. 2 ** 3 = 8
// 2. 3 * 8 = 24
// 3. 2 + 24 = 26
console.log(result1); // Output: 26

let result2 = (2 + 3) * 2 ** 3;
// 1. (2 + 3) = 5
// 2. 2 ** 3 = 8
// 3. 5 * 8 = 40
console.log(result2); // Output: 40

let check1 = 5 + 5 > 3 * 3;
// 1. 5 + 5 = 10 and 3 * 3 = 9
// 2. 10 > 9
console.log(check1); // Output: true

let check2 = true || false && false;
// 1. false && false evaluates to false
// 2. true || false evaluates to true
console.log(check2); // Output: true

let check3 = (true || false) && false;
// 1. (true || false) evaluates to true
// 2. true && false evaluates to false
console.log(check3); // Output: false


// let badMix = null ?? "default" || "fallback"; // Error

let goodMix = (null ?? "default") || "fallback";
console.log(goodMix); // Output: "default"

let status = "active";
let userStatus = status === "active" ?? "guest";
// 1. status === "active" evaluates to true
// 2. true ?? "guest" evaluates to true
console.log(userStatus); // Output: true

let a, b, c;
a = b = c = 10 + 5;
// 1. 10 + 5 = 15 (Arithmetic runs first)
// 2. c = 15
// 3. b = c (15)
// 4. a = b (15)
console.log(a, b, c); // Output: 15 15 15