let costOfItems = [35,234,12,34,54,123,87,190];
itemCostLessthan100 = costOfItems.filter(cost) // filter --> returns new array by checking each value of original 
// array using callback function.
function cost(costItems){
        return costItems < 100;
}
console.log(itemCostLessthan100);

costMorethan100 = costOfItems.filter(costItem => costItem>100)
console.log(costMorethan100);