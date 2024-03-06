let input = [6,-5,7,-2,4,6,-1];

input.forEach((value,index,input) => {
    input[index] = value >= 0;
})
console.log(input);