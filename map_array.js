let priceUSD = [20,30,15];

let priceINR = priceUSD.map(x => x*83); // map is used to convert the given value into the other values based
// our requirement with new array fromat.

console.log(priceINR);

priceINR = priceUSD.map(convert); // without arrow function.

function convert(val){
    return val*83;
}
console.log(priceINR);