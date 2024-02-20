/*
arr2d = [
    ['d','e','v','a'],
    ['s','h','a','n'],
    ['k','a','r'],
];

let count = arr2d.flat().reduce(
    (accumulator,currVal) => {
        if(accumulator[currVal]){
            accumulator[currVal]++;
        }
        else {
            accumulator[currVal] = 1;
        }
        return accumulator;
    }
,{});
console.log(count);
*/

arr2d = [
    ['v','e','n','k'],
    ['a','t','a','c'],
    ['a','l','a','m'],
];

let count = arr2d.flat().reduce(
    (accumulate,currvalue) => {
        if(accumulate[currvalue]) {
            accumulate[currvalue]++;
        }
        else {
            accumulate[currvalue] = 1;
        }
        return accumulate;
    }
,{});
console.log(count);