const employee = {
    fullName: "Devashankar",
    lastName: undefined,
    age: 25,
}
/*
function printNameandAge (employee) {  // direct uasge in function without destructuring.
    console.log(employee.fullName+'-'+employee.age);
}
printNameandAge(employee);
*/
const {fullName,age} = employee; // destructuring
console.log(fullName);
console.log(age);

function printNameandAge ({fullName,lastName="V",age}) { // destructuring can be written in this format also.
    console.log(fullName+'-'+lastName+'-'+age);
}
printNameandAge(employee);