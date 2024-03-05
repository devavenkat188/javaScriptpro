const person1 = {
    name: "Deva",
    age: 25,
};
const person2 = {
    name: "Sanjay",
    age: 22,
};
function getPerson(name,age) { // name & age --> multiple parameters
    console.log(name);
    console.log(age);
}
getPerson(person1.name,person1.age); // person1.name & person1.age --> multiple arguments
getPerson(person2.name,person2.age);
getPerson("Arun",25);