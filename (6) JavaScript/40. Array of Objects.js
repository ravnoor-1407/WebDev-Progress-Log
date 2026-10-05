// Array of Objects in JavaScript
// An array of objects is a powerful data structure that stores multiple structured entities (objects) within a single ordered list (array).
// It combines the sequential indexing of arrays with the descriptive key-value grouping of objects
// The most common and efficient way to define an array of objects in JavaScript is by using array literal syntax ([]) combined with object literals ({}).

const studentInfo = [
    {
        name: "ravnoor",
        age: 19,
        grade: 12,
        gender: "female"
    },
    {
        name: "jaisneet",
        age: 13,
        grade: 8,
        gender: "female"
    },
    {
        name: "jaiteg",
        age: 10,
        grade: 4,
        gender: "male"
    }
];

// Accessing the array
console.log(studentInfo);

// Accessing individual object
console.log(studentInfo[0]);
// console.log(studentInfo[1]);
// console.log(studentInfo[2]);

// Accessing the key-value pair of object 
console.log(studentInfo[0].name);

// Addition
studentInfo[0].school = "LPU";

// Updation
studentInfo[0].grade = "2nd year"
console.log(studentInfo[0]);