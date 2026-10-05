// Javascript Object Literals
// They are used to store keyed collections and complex entities.
// Objects are collection of properties.
// The property exists in key value pairs.

// Example: 
// Object -> student
// Key-value pairs -> name: "shradha", age: 23, marks: 94.4

const delhi = {
    latitude: "28.7041° N",
    longitude: "77.1025° E"
};
console.log(delhi);

const item = {
    name:"Peplum top",
    price: 1050.99,
    discount: 50,
    colors: ["pink", "yellow", "blue"]
};
console.log(item)
// Using const for objects is a JavaScript best practice because it protects your variable reference from being accidentally replaced, while still letting you change the data inside.

// IMPORTANT NOTE:
// JS automatically converts object keys to strings.
// Even if we made the number as key, the number will be converted to string. 

const obj = {
    1: 'a',
    2: 'b',
    null: 'c',
    undefined: 'd',
    true: 'e'
};
console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log(obj[true]);

// Create an object literal for the propeties of thread or twitter post
const post = {
    username: "@ravnoor_1407",
    content: "coding aesthetics",
    likes: "500K",
    reposts: "93.8K",
    tags: ["@apnacollege", "@cse_lpu"]
};

// Get values of the object literals
const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};
console.log(student);
console.log(student["name"]); // using square brackets
console.log(student.age); // using dot(.) operator

let academics = "marks";
console.log(student[academics]); // using square brackets is efficient when accessing through variable assignment 

// Add or Update values
console.log("Before updation of city: ", student.city);

// (a) Updation
student.city = "Mumbai";
console.log("After updation of city: ", student.city);
console.log(student);

// (b) Addition
student.gender = "female";
console.log("Added new key-value pair GENDER" );
console.log(student);

// (c) Deletion
delete student.marks;
console.log("After deleting marks: ", student);