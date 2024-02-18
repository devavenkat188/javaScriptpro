const person1 = {
    name: "Deva",
    age: 25,
};

const person2 = {
    name: "Sanjay",
    age: 22,
};

function printPerson(...arg) { // rest parameters.
    console.log(arg);
}

printPerson(person1);
printPerson(person1.name,person1.age);
printPerson(person2);
printPerson('Arun',25); 