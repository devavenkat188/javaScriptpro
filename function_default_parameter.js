const person1 = {
    name: "Deva",
    age: 25,
};

const person2 = {
    name: "Sanjay",
    age: 22,
};

function printPerson(person = { name: "DefaultName", age: 0}) {
    console.log(person.name);
    console.log(person.age);
}

printPerson(person1);
printPerson();