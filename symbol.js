let empid = Symbol("Deva"); // Symbol() --> represent a unique identifier.
let empid2 = Symbol(12);
let result = empid;
console.log(result);
console.log(typeof(result));
console.log(empid2.toString()); // it wil be forefully we converted symbol into a string type.
console.log(typeof(empid2.toString())); 

/*
Symbol(Deva)
symbol
Symbol(12)
string
 */