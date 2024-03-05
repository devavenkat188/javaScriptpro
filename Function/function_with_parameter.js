const person1 = {
    name: 'Deva',
    age: 25,
};
const person2 = {
    name: 'Sanjay',
    age: 22,
};
function getName(name, age) { // name & age --> Parameter
    console.log(name, age);
}
getName(person1.name, person1.age); // One function can be used at multiple times.
getName(person2.name);