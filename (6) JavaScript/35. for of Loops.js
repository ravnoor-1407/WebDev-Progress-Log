// For of Loops In JavaScript
// It is used to iterate directly over the values of an iterable object.

/*
for (element of collection(arrays, strings)) {
    // do something
}
*/

let veggies = ["Onion", "Capsicum", "Tomato", "Olives", "Mushrooms", "Corn"];
for (veggie of veggies) {
    console.log(veggie);
}

for (char of "apnacollege") {
    console.log(char);
}

// Nested for of loop
let information = [["Ravnoor", "Software Engineer"], ["Chahat", "Commercial Pilot"], ["Sirjan", "Lawyer"]];
for(data of information) {
    console.log("Occupation of Candidate: ");
    for(details of data) {
        console.log(details);
    }
}