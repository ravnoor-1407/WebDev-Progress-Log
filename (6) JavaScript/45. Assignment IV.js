// Assignment-IV

// Q1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6.]

let diceRoll = Math.random();
diceRoll = diceRoll * 6;
diceRoll = Math.floor(diceRoll);
diceRoll = diceRoll + 1;
console.log(`🎲 You rolled a ${diceRoll}! 🥳`);

// Q2. Create an object representing a car that stores the following properties for the car: name, model, color
// Print car's name

const car = {
    name: "Jeep Wrangler",
    model: ["Rubicon", "Unlimited", "Willys 41 Special Edition"],
    color: "Black"
};
console.log(car);
console.log(car.name);

// Q3. Create an object Person with their name, age and city.
// Edit their city's original value to change it to "New York".
// Add new property country and set it to United States

const Person = {
    name: "Ravnoor",
    age: 19,
    city: "Phagwara"
};
console.log(Person);
Person.city = "New York";
console.log(Person);
Person.country = "United States";
console.log(Person);