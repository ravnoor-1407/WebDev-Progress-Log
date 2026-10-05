// Nested Objects in JavaScript
// A nested object in JavaScript is simply an object that contains another object as a property value.
// These are basically object of objects that store information of multiple objects

const schoolInfo = {
    ravnoor: {
        age: 19,
        grade: 12,
        gender: "female"
    },
    jaisneet: {
        age: 13,
        grade: 8,
        gender: "female"
    },
    jaiteg: {
        age: 10,
        grade: 4,
        gender: "male"
    }
};

// Accessing parent object
console.log(schoolInfo);

// Accessing individual objects
console.log(schoolInfo.jaiteg);
// console.log(schoolInfo.jaisneet);
// console.log(schoolInfo.ravnoor);

// Accessing sub key-value pairs
console.log(schoolInfo.jaiteg.age); // 10

// We can update or delete values in same manner as we learnt earlier
schoolInfo.jaiteg.age = 11;
console.log(schoolInfo.jaiteg.age); // 11