let itemCost = [35,55,270,98,100,190,460,8,20];

let minimalCostLessthan100 = itemCost.filter(x => x <= 100); // filter --> will work based on the condition
// we give.

console.log(minimalCostLessthan100);
console.log(minimalCostLessthan100.length);