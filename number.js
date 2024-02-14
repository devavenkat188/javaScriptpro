const myVariable="44";
const myValue="45.78 world"
const myNumber=45;
const myFloat=47.8;

console.log(myNumber===myFloat);
console.log(Number(myVariable)+6);
console.log(Number(true));
console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myValue));
console.log(Number.parseFloat(myNumber)); // if floating value is not there then it represent the integer value
console.log(Number.parseInt(myValue)); // display only the integer value.
