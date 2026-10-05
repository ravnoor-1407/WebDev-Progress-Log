// Accessing JSON Data

// Case 1: Converting JSON string to JS object
let jsonString = '{"fact":"In the 1750s, Europeans introduced cats into the Americas to control pests.","length":75}';

let validData = JSON.parse(jsonString);
console.log(validData);        // Access whole object
console.log(validData.fact);   // Access property


// Case 2: Converting JS object to JSON string
let student = {
    name: "Ravnoor",
    marks: 95
};

let studentJSON = JSON.stringify(student);
console.log(studentJSON);