// this Keyword in JavaScript
// 'this' keyword refers to an object that is executing the current piece of code.

const student = {
    name: "Ravnoor",
    age: 19,
    address: "Phagwara,Punjab,India",
    math: 92,
    physics: 88,
    chemistry: 85,
    computerScience: 95,
    english: 90,
    getAvg: function() {
        console.log(this); // gives 'student' object as output

        // let avg = (math + physics + chemistry + computerScience + english) / 5;
        // The issue in your code is that inside the getAvg method, you’re trying to use variables like math, physics, etc. directly. 
        // But those aren’t defined in the function’s scope — they’re properties of the student object.
        let avg = (this.math + this.physics + this.chemistry + this.computerScience + this.english) / 5;
        console.log(`${this.name} got average marks = ${avg}`);
    }
}
student.getAvg();

function getSum(a, b) {
    console.log(this);
}
getSum();

// Since this function is not stored in any object, hence, console.log(this) gives the window function (in browser) and global function (in .nodejs) by default.