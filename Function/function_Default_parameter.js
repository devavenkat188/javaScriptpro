const person1 = {
    name: 'Deva',
    age: 25,
};
const person2 = {
    name: 'Sanjay',
    age: 22,
};
function getDetails(person = {name: 'Default Name', age: 0}){ // here the default parameter will used to set the default
    // instead of undefined.
    console.log(person.name);
    console.log(person.age);
}
getDetails(); // it is achevied by call the function without any parameters.