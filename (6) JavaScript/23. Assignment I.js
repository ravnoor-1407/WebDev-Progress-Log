// Assignment-I

// Q1 Create a number variable num with some value. Now, print"good" if the number is divisible by 10 and print "bad" if it is not.
let num = 30;

if (num % 10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

/*
Q2 Take the user's name and age as input using prompts.
Then return back the following statement to the user as an alert (by sustituting their name and age)
name is age years old [Use template literals to print this sentence]
*/
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");

let message = `${name} is ${age} years old.`;
console.log(message);
alert(message);

/*
Q3 Write a switch statement to print the months in a quarter.
Months in Quarter 1: January, February, March
Months in Quarter 2: April, May, June
Months in Quarter 3: July, August, September
Months in Quarter 4: October, November, December
[Use the number as the case value in switch]
*/

let quarter = 2;

switch (quarter) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("Invalid quarter");
        break;
}

/*
A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.
For a given string print if it is golden or not.
*/
let string = "Algorithm";
if((string[0] == 'a' || string[0] == 'A') && string.length >= 5) {
    console.log("Yeah! It's a golden string.");
} else {
    console.log("Nope! It's not a golden string.");
}

// Q5 Write a program to find the largest of 3 numbers.
let a = 5;
let b = 25;
let c = 15;

if (a > b) {
    if (a > c) {
        console.log(a + "is the largest number.");
    } else {
        console.log(c + "is the largest number.");
    }
} else {
    if (b > c) {
        console.log(b + "is the largest number.");
    } else {
        console.log(c + "is the largest number.");
    }
}

/*
Q6 Write a program to check if 2 numbers have the same last digit.
Eg:32 and 47852 have the same last digit i.e. 2.
*/
let num1 = 53;
let num2 = 93;
if ((num1 % 10) == (num2 % 10)) { // When we find modulo using 10, it tells last digit as remainder
    console.log("Numbers have the same last digit which is", num1 % 10);
} else {
    console.log("Numbers don't have the same last digit");
}