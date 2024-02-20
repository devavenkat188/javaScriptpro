const arr1 = [7,6,5,4,3,2,1];  // array of numbers & array of strings
const arr2 = [ // array of objects.
    {name: "one",value: 1},
    {name: "two",value: 2},
    {name: "three",value: 3},
    {name: "four",value: 4},
    {name: "five",value: 5},
    {name: "six",value: 6},
    {name: "seven",value: 7},
];

console.log(arr1.includes(5));
console.log(arr1.indexOf(3));

const foundName = arr2.find((element,inedx) => { // arrow function
    if(element.name === "six") {
        return true;
    }
});
console.log(foundName);

const foundNames = arr2.find(findElements); // general function
function findElements(element,index) {
    if(element.name === "seven") {
        return true;
    }
}
console.log(foundNames);

let index = -1;
const findNames = arr2.find((element,_index) => {
    if(element.name === "four") {
        index = _index;
        return true;
    }
});

console.log(index);
console.log(findNames);

const foundIndex = arr2.findIndex((element) => {
    if(element.name === "six"){
        return true;
    }
});

console.log(foundIndex);