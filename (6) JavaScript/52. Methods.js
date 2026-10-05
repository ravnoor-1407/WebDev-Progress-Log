// Methods in JavaScript
// Actions that can be performed on an object.
// In simpler language, we define variables in the form of key-value pair for an object.
// Similarly, if we want to define functions in an object, then these functions are called methods.

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    }
}

console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(7, 8));
console.log(calculator.subtract(7, 3));
console.log(calculator.multiply(5, 5));


// Method Shorthand
const greeter = {
    sayHello(name) {
        return `Hello, ${name}!`;
    },
    sayGoodbye(name) {
        return `Goodbye, ${name}!`;
    }
};

console.log(greeter.sayHello("Ravnoor"));
console.log(greeter.sayGoodbye("Ravnoor"));

// After this now, you might be clear how Math Object Functions work. Let's take a look:

// Math.random();
// Math.sqrt(25);
// Math.max(10, 30, 50, 40, 20);

// const Math = {
//     random: function() { /* logic */ */},
//     sqrt: function(x) { /* logic */ */},
//     max: function(a, b, c,...) { /* logic */ */}
// }

// Similarly, we earlier studied array and string methods they also work on same concept.
// In JavaScript, everything except primitives (number, string, boolean, null, undefined, symbol, bigint) is an object.
// Hence, Arrays are just objects internally