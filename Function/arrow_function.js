const getFullName = (firstName,lastName) => { // Arrow Function --> it is used to display the function wihout using
    // the function keyword & function name. 
    const name = firstName+' '+lastName;
    return name;
}
let fullName = getFullName('Deva','V');
console.log(fullName);
 
// if it is a single line code then it will be written as follows.
const getName = (firstName,lastName) => firstName+' '+lastName;
let fullNames = getFullName('Arun','M');
console.log(fullNames);