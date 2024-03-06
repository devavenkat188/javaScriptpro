// Abrreviate by gathering first letter of each word.
let personName = 'Robert Andrew George';

let words = personName.split(' ');
console.log(words);
let firstLetter = words.map(word => word.slice(0,1));
console.log(firstLetter);
let abbreviate = firstLetter.join('');
console.log(abbreviate);