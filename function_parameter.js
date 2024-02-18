const person1 = {
    name: "Deva",
    age: 25,
};

const person2 = {
    name: "Sanjay",
    age: 22,
};

function printName(name,age) { // name & age is the parameter.
    console.log(name);
    console.log(age);
}
printName(person1.name,person1.age);
printName(person2.name,person2.age);