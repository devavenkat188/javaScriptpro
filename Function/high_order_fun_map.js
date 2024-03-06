let priceUSD = [20,30,15];
let priceINR = priceUSD.map(x => x*83); // map --> will execute a call back for each array element & returns a new array.
console.log(priceINR);
// Map:
priceINR = priceUSD.map(convert)

function convert(val) {
    return val*83;
}
console.log(priceINR);

// Array of objects:

const input = [
            {name: 'Arun', age: 25, rollno: 1},
            {name: 'Amul', age:24, rollno: 2},
            {name: 'Deva', age:25, rollno: 3},
            {name: 'Sanjay', age:22, rollno: 4},
]
ages = input.map(personAge)
function personAge(person) {
    return person.age;
}
console.log(ages);

names = input.map(personName)
function personName(person) {
    return person.name;
}
console.log(names);

rollnos = input.map(personRollno => personRollno.rollno)
console.log(rollnos);