const employee = {
    name: {
        firstName: 'Devashankar',
        lastName: 'V',
    },
    age: 25,
    isMajor: true,
}
// const  {name:{firstName}} = employee;

let firstName;
({name:{firstName}} = employee);

console.log(employee.name.firstName);
console.log(firstName);