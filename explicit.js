let bigInt = 5n;
let numvar = 9;
let check;
let total = bigInt + BigInt(numvar); // --> BigInt and normal Number can not be add dirctly. so used Explicit type conversion.
let add = Number(bigInt) + numvar;
check = bigInt >= numvar; // --> boolean will be work fine with bigInt.
console.log(total);
console.log(add);
console.log(check);

/*
8n
8
false
 */