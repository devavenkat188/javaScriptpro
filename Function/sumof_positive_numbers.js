input = [6,-5,7,-2,4,6,-1];

let positiveVal = input.filter(value => value >= 0)
// console.log(positiveVal);
let sumofPositive = positiveVal.reduce((total,element) => total + element)
console.log(sumofPositive);