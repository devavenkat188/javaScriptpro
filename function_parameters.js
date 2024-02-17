function multiply (num1, num2){
    if (num2 === undefined){
        num2 = 1;
    }
    else {
        return num1 * num2;
    }
}
console.log(multiply(5,6));