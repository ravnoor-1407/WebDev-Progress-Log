// Practice Questions on Array Methods

// Q1 For given start state of an array, change it to final form using methods:
// Start: ['january', 'july', 'march', 'august']
// Final: ['july', 'june', 'march', 'august']

let month = ["january", "july", "march", "august"];
console.log("Starting state:", month);

// Remove 'january' & 'july' from start using shift()
month.shift();
month.shift();
console.log("Intermediate state: ", month);

// Adding 'june' & 'july' using unshift()
month.unshift("june");
month.unshift("july");
console.log("Final state: ", month);

// Q2 For given start state of an array, change it to final form using splice method:
// Start: ['january', 'july', 'march', 'august']
// Final: ['july', 'june', 'march', 'august']

month = ['january', 'july', 'march', 'august'];
console.log("Splice starting state:", month);

console.log("Removing january july:", month.splice(0, 2));
console.log("Intermediate state: ", month);

month.splice(0, 0, 'july', 'june');
console.log("Adding the july june:");
console.log("Final state: ", month);

// Q3 Return the index of 'javascript' from given array, if it is reversed
// languages = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

let languages = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log("Original array: ", languages);
console.log("Index of javascript before reversal: ", languages.indexOf('javascript'));
console.log("After reversal: ", languages.reverse());
console.log("Index of javascript: ", languages.indexOf('javascript'));