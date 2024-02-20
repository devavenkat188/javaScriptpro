const employee = {
    fullName: "Devashankar",
    lastName: "V",
    age: 25,
}
/*
function printNameandAge (employee) {
    console.log(employee.fullName+'-'+employee.age);
}
printNameandAge(employee);
*/
const {fullName,age} = employee; // destructuring
console.log(fullName);
console.log(age);

function printNameandAge ({fullName,age}) { // destructuring can be written in this format also.
    console.log(fullName+'-'+age);
}
printNameandAge(employee);