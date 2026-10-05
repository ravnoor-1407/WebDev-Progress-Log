// Practice Questions on Strings and String Methods

// Q1 For a given string trim it and covert to uppercase

let msg = "help!";
console.log(msg.trim().toUpperCase());

// Q2 For a string, predict the output

let name = "ApnaCollege";
console.log(name.slice(4, 9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));

// Q3 Separate "College" part in above string and replace 'l' with 't'
console.log(name.slice(4).replace('l', 't'));