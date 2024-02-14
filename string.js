let myVariable="Computer Science";

console.log(myVariable.length);
console.log(myVariable.charAt(10));
console.log(myVariable.indexOf("e"));
console.log(myVariable.lastIndexOf("e"));
console.log(myVariable.slice(3,10)); // it does n't display the 10 th index position character.
console.log(myVariable.slice(11));
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());
console.log(myVariable.includes("Com"));
console.log(myVariable.split("e"));
console.log(myVariable.split(""));

/* 
16
c
6
15
puter S
ience
COMPUTER SCIENCE
computer science
true
[ 'Comput', 'r Sci', 'nc', '' ]
[
  'C', 'o', 'm', 'p',
  'u', 't', 'e', 'r',
  ' ', 'S', 'c', 'i',
  'e', 'n', 'c', 'e'
]
*/

