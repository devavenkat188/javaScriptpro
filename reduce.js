let itemCost = [30,50,12,580,570,450,8,78,94,260,340];

let total_Cost = itemCost.reduce((total,element)=>total+element,0); // two parameter --> total (accumulator), element.
console.log(total_Cost);