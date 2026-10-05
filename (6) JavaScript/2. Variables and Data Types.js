// Variables in JavaScript
// Variables are used to store data values that can be used and manipulated throughout the program.

fullname = "Ravnoor Kaur"; // String variable
console.log("Name:", fullname);
console.log(typeof fullname);

age = 20; // Number variable
console.log("Age:", age);
console.log(typeof age);

isStudent = true; // Boolean variable
console.log("Is Student:", isStudent);
console.log(typeof isStudent);

height = 5.3; // Float variable
console.log("Height (in feet):", height);
console.log(typeof height);

job = null; // Null variable
console.log("Job:", job);
console.log(typeof job);

bankBalance = undefined; // Undefined variable
console.log("Bank Balance:", bankBalance);
console.log(typeof bankBalance);

bankAccount = 12345678901234567890n; // BigInt variable
console.log("Bank Account Number:", bankAccount);
console.log(typeof bankAccount);

studentID = Symbol("studentID"); // Symbol variable
console.log("Student ID Symbol:", studentID);
console.log(typeof studentID);

// Variable rules:
// 1. Variable names must begin with a letter, underscore (_), or dollar sign ($).
// 2. Variable names cannot begin with a number.
// 3. Variable names can only contain letters, numbers, underscores, or dollar signs.
// 4. Variable names are case-sensitive (e.g., 'age' and 'Age' are different variables).
// 5. Reserved words (like JavaScript keywords) cannot be used as variable names.
// 6. Use 'let', 'const', or 'var' to declare variables for better practice and scope management.

var city = "Phagwara"; // Using 'var': We can re-declare and update the variable. A global scope variable.
console.log("City:", city);

let country = "India"; // Using 'let': We cannot re-declare but update the variable. A block scope variable.
console.log("Country:", country);

const zipCode = 144402; // Using 'const': We cannot re-declare or update the variable. A block scope variable.
console.log("Zip Code:", zipCode);

// Practice Questions:

// Ques: Create a const object called "product" to store information.
// Product Name = Parker Jotter Standard Ball Pen
// Price = 270
// Offer = 5% off
// Rating = 4.5 stars
// Deal of the Day = true

const product = {
    productName: "Parker Jotter Standard Ball Pen",
    rating: 4.5,
    offer: "5% off",
    price: 270,
    dealOfTheDay: true,
};
console.log("Product Details:", product);

// Ques: Create a const object called "Instagram profile" to store information.
// Username = shradhakhapra
// Posts = 196
// Followers = 569k
// Following = 4
// isFollowing = true
// Bio = "Entrepreneur|Apna College|Ex Microsoft DRDO|To educate someone is the highest privilege"

const instagramProfile = {
    username: "shradhakhapra",
    posts: 196,
    followers: "569k",
    following: 4,
    isFollowing: true,
    bio: "Entrepreneur|Apna College|Ex Microsoft DRDO Intern|To educate someone is the highest privilege",
};
console.log("Instagram Profile:", instagramProfile);