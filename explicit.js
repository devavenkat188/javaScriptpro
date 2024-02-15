let bigInt = 5n;
let numvar = 3;
let total = bigInt + BigInt(numvar); // --> BigInt and normal Number can not be add dirctly. so used Explicit type conversion.
let add = Number(bigInt) + numvar;
console.log(total);
console.log(add);

/*
8n
8
 */