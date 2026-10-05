// Destructuring Assignment in JavaScript
// It refers to storing values in multiple variables

let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"];
let winner = names[0];
let runnerup = names[1];
let seconRunnerup = names[2];

// Destructuring assignment
[winner, runnerup, secondRunnerup, fourthPlace, fifthPlace] = names;

console.log(winner);
console.log(runnerup);
console.log(secondRunnerup);
console.log(fourthPlace);
console.log(fifthPlace);

// Using Rest Operator
[winner, runnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(others);

// Destructuring For Objects
const student = {
    name: "ravnoor",
    age: 19,
    collegeSem: 3,
    subjects: ["C++", "Operating Systems", "Computer Networks", "Community Development Project"],
    username: "shineravnoor@gmail.com",
    password: "n*****007"
};

/*
let username = student.username;
let password = student.password;

This way is so lengthy and time-consuming.
*/

let {username, password} = student;

console.log(username);
console.log(password);

let {username: user, password: secret} = student;

console.log(user);
console.log(secret);