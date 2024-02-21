let age = {value: 25};
let newAge = {...age}; // using spred operator we can achieve deep copy object.

age.value++;

console.log("Age ");
console.log(age);
console.log("newAge ");
console.log(newAge);