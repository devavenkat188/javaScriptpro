
arr = [4,6,2,3,1,1,3,5,7,8,4,3];

let uniqueValue = arr.reduce(
    (accumulator,value) => {
        if(accumulator.indexOf(value) === -1) {
            accumulator.push(value);
        }
        return accumulator;
    },
[]);
console.log(uniqueValue);
