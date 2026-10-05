// Array Methods in JavaScript

let cars = ["BMW", "Lambhorgini", "Rolls-Royce"];

console.log("Before any method implementation: ", cars);

// 1. push() method: adds an element to the end of an array
console.log("Length after adding 'Porsche': ", cars.push("Porsche"));
console.log("Array after push: ", cars);

// 2. pop() method: deletes the element from end and returns it
console.log("Element removed from end: ", cars.pop());
console.log("Array after pop: ", cars);

// 3. unshift() method: adds an element to the start of an array
console.log("Length after adding 'Porsche' at start: ", cars.unshift("Porsche"));
console.log("Array after unshift: ", cars);

// 4. shift() method: deletes the element from start and returns it
console.log("Element removed from front: ", cars.shift());
console.log("Array after shift: ", cars);

// 5. indexOf() method: return index of something
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];

console.log(primary.indexOf("yellow")); // 1
console.log(primary.indexOf("Yellow")); // -1
console.log(primary.indexOf("green")); // -1

// 6. includes() method: search for a value
console.log(primary.includes("red")); // true
console.log(primary.includes("green")); // `false

// concat() method: joins two arrays
// Here this doesn't changes the existing individual arrays, it just joins the two.
// If we want we can assign it to new variable to see this!!
// Also the array written first gives its elements priority in output 

console.log(primary.concat(secondary));
console.log(secondary.concat(primary));

// 7. reverse() method: reverses the element sequence of an array
// To get the original array back, we can again use this method as it applies on the array itself
console.log(primary.reverse());

// 8. slice() method: copies a portion of an array
// slice(start, end) ending index is exclusive
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice()); // returns the complete array
console.log(colors.slice(2)); // returns array with starting element having index 2 and so on
console.log(colors.slice(2, 3));
console.log(colors.slice(2, 4));
console.log(colors.slice(-3)); // 6 - 3 = 4 starting index

// 9. splice() method: removes/ replaces/ add elements in place
// splice(start, deleteCount, elements that are to be added)

console.log("Last two elements removed: ", colors.splice(4));
console.log(colors);
console.log("First element removed: ", colors.splice(0, 1));
console.log(colors);
console.log("Last two elements removed:", colors.splice(0, 1, "black", "grey"));
console.log(colors);

// 10. sort() method: sorts an array
let squares = [25, 16, 4, 49, 64, 36, 9, 1];
console.log(squares.sort); // This doesn't sort in ascending order as numbers are converted to strings via unicode values
let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
console.log(days.sort());