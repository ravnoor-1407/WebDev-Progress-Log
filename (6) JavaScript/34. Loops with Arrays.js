// Loops with Arrays

// Print the fruits one by one along with index number.

let fruits = ["Mango", "Apple", "Banana", "Orange", "Guava", "Pineapple"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
console.log('Backward Sequence: ')
for (let i = fruits.length; i >= 0; i--) {
    console.log(i, fruits[i]);
}

// Nested Loops with Nested Arrays

let heroes = [["Iron Man", "Captain America", "Thor"], ["Superman", "Batman", "Spiderman"]];

for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i]);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(j, heroes[i][j]);
    }
}

let students = [["Ravnoor", 92], ["Shradha", 97], ["Aman", 95]];

for (let i = 0; i < students.length; i++) {
    console.log(`Info of Student ${i+1}`);
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}