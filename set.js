let arr = [4,6,2,3,1,1,3,5,7,8,4,3];

let uniqueValue = new Set(arr);

console.log(uniqueValue);

let mySet2 = new Set()
mySet2.add(4);
mySet2.add(45);
mySet2.add('mnp');
mySet2.add({'a':1,'b':2}); // obj is a reference type so it has different address type. so for this it will
// support duplicate values with different memory address.
mySet2.add(4);
mySet2.add({'a':1,'b':2});

console.log(mySet2);
console.log(mySet2.size);
console.log(mySet2.has(45));
console.log(mySet2.delete(45));
console.log(mySet2);
console.log(mySet2.add(45));
console.log(mySet2);

let arr2 = Array.from(mySet2);
console.log(arr2);

