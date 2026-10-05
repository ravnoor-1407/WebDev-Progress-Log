// this with Arrow Functions
// For regular functions, scope depends on calling object which calls the function.
// For arrow functions, the scope is lexical in nature (it depends on the scope of parent).

const student = {
    name: "Ravnoor",
    age: 19,
    prop: this, // Global Scope (in Node.js it’s {} in strict mode, or global in non‑strict mode).
    getName: function () {
        console.log(this); // Prints student object
        return this.name; // Returns "Ravnoor"
    },
    getAge: () => {
        console.log(this); // Prints the global object {}
        return this.age; // Returns undefined (because the global object doesn’t have an age property)
    },
    getInfo1: function () {
        setTimeout( () => {
            console.log(this); // Prints student object
        },2000);
    },
    getInfo2: function () {
        setTimeout( function ()  {
            console.log(this); // Prints Timeout object in Node.js
        },2000);
    }
};

// When you call student.getName(), 'this' refers to the student object.
console.log(student.getName());

// Here, the parent scope of arrow function is the global context where student was defined.
console.log(student.getAge());

// Immediately returns undefined (no return in getInfo1)
// After 2s: Arrow Function inherits 'this' from getInfo1 i.e. student
console.log(student.getInfo1());

// Immediately returns undefined (no return in getInfo2)
// After 2s: Regular Function inside setTimeout has its own 'this'
console.log(student.getInfo2());