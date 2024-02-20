/* let arr = [4,6,2,3,1,1,3,5,7,8,4,3];

let newarr = arr.reduce(
    (accumulator,currval) => {
        if(accumulator[currval]) {
            accumulator[currval]++;
        }
        else if(accumulator[currval]>1) {
            accumulator[currval];
        }
        else {
            accumulator[currval] = 1;
        }
        return accumulator;
    }
,{})

console.log(newarr);
*/
let input = [6,-5,7,-2,4,6,-1];
let positiveNumbers = input.filter(findpositiveNumbers);
function findpositiveNumbers(val,index) {
    return val = val > 0;
}
console.log(positiveNumbers);
let sumofPositiveNumbers = positiveNumbers.reduce(sum);
function sum(val,el){
    return val = val+el;
}
console.log(sumofPositiveNumbers);