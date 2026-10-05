// Rest Parameter in JavaScript
// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.

function calcSum(...args) {
    console.log(`You gave us ${args.length} arguments.`);
    let sum = args.reduce((result, current) => result + current, 0);
    console.log(`The sum of arguments is: ${sum}`);
    
    for (let i = 0; i < args.length; i++) {
        console.log(`Argument ${i + 1}: ${args[i]}`);
    }
}
calcSum(0);
calcSum(1, 2);
calcSum(1, 2, 3, 4);

/*
arguments is an array-like object, not a true array.
That means you can access elements with arguments[i] and check arguments.length, but you cannot directly use array methods like .reduce() on it.

function calcProduct() {
    console.log(arguments);
    console.log(arguments.length); //4
    console.log(arguments.reduce( (product, element) => {
        return product * element;
    }, 1));
}
calcProduct(2, 3, 4, 5);
*/

function calcProduct(...args) {
    console.log(args);
    console.log(args.length);
    console.log(
        args.reduce((product, element) => product * element, 1)
    );
}
calcProduct(2, 3, 4, 5);

/*
In your function definition, message is the first parameter.
When you call minNum("Let's hunt for minimum number", 120, 500, -120, -500);,
"Let's hunt for minimum number" is passed into message.
The rest of the numbers (120, 500, -120, -500) are collected into the ...args array.
Inside the function, console.log(message); simply prints that string.
*/
function minNum(message, ...args) {
    console.log(message);
    console.log(
        args.reduce( (min, element) => {
            if (min > element) {
                return element;
            } else {
                return min;
            }
        })
    );
}
minNum("Let's hunt for minimum number", 120, 500, -120, -500);