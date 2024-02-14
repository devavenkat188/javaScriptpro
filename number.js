const myVariable="44";
const myValue="45.78567 world"
const myNumber=45;
const myFloat=47.8;
const add=myFloat.toString();

console.log(myNumber===myFloat);
console.log(Number(myVariable)+6);
console.log(Number(true));
console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myValue)); 
console.log(Number.parseFloat(myNumber)); // if floating value is not there then it represent the integer value
console.log(Number.parseFloat(myValue).toFixed(2)); // it will round off the values and return in string datatype
console.log(Number.parseInt(myValue)); // display only the integer value.
console.log(myNumber.toString()); // convert number into the string datatype.
console.log(add);
console.log(Number.parseFloat(myValue).toFixed(3).toString(),Number(true));
console.log(Number.isNaN(myNumber)); // it will check both datatype & values.
console.log(isNaN(myValue)); // it will check only the values.

/* 
false
50
1
true
45.78567
45
45.79
45
45
47.8
45.786 1
false
true
*/
