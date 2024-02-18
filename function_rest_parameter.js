const person1 = {
    name: "Deva",
    age: 25,
};

const person2 = {
    name: "Sanjay",
    age: 22,
};

function printPerson(...arg) {
    console.log(arg);
    console.log(arg);
}

printPerson(person1);
printPerson(); 