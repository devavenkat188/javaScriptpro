const person1 = {
    name: 'Arun',
    age: 25,
};
const person2 = {
    name: 'Sanjay',
    age: 22,
};
function getPerson(person) { // obj as a parameter.
    console.log(person.name);
    console.log(person.age);
}
getPerson(person1); // object as a argument.
getPerson(person2);
getPerson({name: 'Deva', age: 25});