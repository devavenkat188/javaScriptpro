/*
Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223
*/

function reverseNumber(number) {
    let reverse = 0;
    while(number !== 0 ) {
        reverse = reverse*10 + number % 10;
        number = Math.floor(number/10);
        }
        return reverse;
}
let x=32243;
let reversedx = reverseNumber(x);
console.log(reversedx);
