let costOfEachBook = [35,100,230,560,60,28,40,70];
let totalCostofBook = costOfEachBook.reduce((total,element) => total + element); // total --> will be the accumulator.
console.log(totalCostofBook);

// Example:
arr2d = [
    ['a','b','c'],
    ['c','d','f'],
    ['d','f','g']
];

let count = arr2d.flat().reduce( // executes reducer callback & returns accumulated result.
    (accumulator,currVal) => {
        if(accumulator[currVal]) {
            accumulator[currVal]++;
        } else {
            accumulator[currVal] = 1;
        }
        return accumulator;
    }
,{});
console.log(count);