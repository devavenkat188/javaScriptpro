const person1 = {
    name: 'Deva',
    age: 25,
};
const person2 = {
    name: 'Arun',
    age:25,
};
function getPerson(...arg){ // (...arg) --> rest parameter --> don't know the no.of parameters.
    console.log(arg);
}
getPerson(person1.name,person2.name,'Santhosh');
getPerson(person1.age,person2.age,24);