let arr = ['a','b','c','e'];

 arr.push('f'); // push --> add elements to the end & returns new length.
console.log(arr);

arr.pop(); // pop --> remove the elements from the end & return removed value.
console.log(arr);

arr.shift(); // shift --> remove the elements from the beigning of the array & returns removed value.
console.log(arr);

arr.unshift('a'); // unshift --> will add the elements from the begining & display the new length.
console.log(arr);

arr.splice(2,1); // splice --> used to remove the in-between elements.
console.log(arr);

arr.splice(1,2 ,'d' ,'c'); // splice  --> used to add 2 vaues in the array.
console.log(arr)

arr.splice(1,0 ,'b'); // splice --> by specifying 0 the value will be added only & it will not delete any
// other values.
console.log(arr);

console.log(arr.slice(1,3)); // slice --> (starting index, ending index) & ending index not included.

console.log(arr.slice(-2));

console.log(arr.reverse()); // reverse --> it will reverse the array enitrely.

let str = arr.join(); // join --> converts array to string.
console.log(str);

let str2 = "d-e-v-a"; // split --> used to convert string to array.
let arr2 = str2.split('-');
console.log(arr2);

let firstArr = [1,2,3,4];
let secondArr = [5,6,7,8];

let joinArray = [firstArr,secondArr]; // it is used to join the two different array into a 2d array.
console.log(joinArray);

let singleArray = firstArr.concat(secondArr); // concat --> is used to join two different array into a 
// sinle dimensional array.
console.log(singleArray);

let singleArr = [...firstArr,...secondArr]; // spread (...) --> is used to join two different array into a 
// single dimensional array.
console.log(singleArr);
