// Array References in JavaScript
// In JavaScript, arrays are reference types.
// Variables do not store the array's actual content directly but instead store a pointer to the array's location in memory.

let arr = ['a', 'b'];
let arrCopy = arr;
console.log(arrCopy);
console.log(arrCopy.push('c'));
console.log(arr);

console.log(arr == arrCopy);

let Arr = ['a', 'b'];
let ArrCopy = ['a', 'b'];
console.log(ArrCopy);
console.log(ArrCopy.push('c'));
console.log(Arr);

console.log(Arr == ArrCopy);