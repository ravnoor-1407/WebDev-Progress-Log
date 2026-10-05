// Truthy and falsy values in JavaScript
// Everything is js is a true or false in boolean context.
// This doesn't mean their value itself is falue or tue, but they treated as false or true if taken in boolean context.

// Falsy values
// false, 0, -0, 0n(BigInt value),""(empty string), null, undefined, NaN

// Truthy values
// Everything else

if (true) {
    console.log("true has true value");
} else {
    console.log("true has false value");
}

if (false) {
    console.log("false has true value");
} else {
    console.log("false has false value");
}

if (1) {
    console.log("1 has true value");
} else {
    console.log("1 has false value");
}

if (0) {
    console.log("0 has true value");
} else {
    console.log("0 has false value");
}

if ("") {
    console.log("'' has true value");
} else {
    console.log("'' has false value");
}

if ("ApnaCollege") {
    console.log("'ApnaCollege' has true value");
} else {
    console.log("'ApnaCollege' has false value");
}

if (null) {
    console.log("null has true value");
} else {
    console.log("null has false value");
}

if (undefined) {
    console.log("undefined has true value");
} else {
    console.log("undefined has false value");
}