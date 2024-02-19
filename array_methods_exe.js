let arr = [5,8,10,7,9,11];

arr.splice(3,3,17,19,111); // Replace 7,9,11 with 17,19,111.
console.log(arr);

arr.unshift(100); // Insert 100 in the beginning
console.log(arr);

arr.splice(6,0,200); // Insert 200 in last but one position
console.log(arr);

arr.push(1000); // Add 1000 at the end
console.log(arr);

console.log(arr.length); // Insert 0 in the middle. use arr.length to find middle.
arr.splice(5,0,0);
console.log(arr);