let age = {value : 25};
let newAge = JSON.parse(JSON.stringify(age)); // JSON.stringify(age) --> will convert object into string
// JSON.parse(age) --> will convert string into the object.
age.value++;

console.log("Age ");
console.log(age);
console.log("newAge ");
console.log(newAge);