function addition (value1,value2){
    function divison (value3,value4) { // Inner function --> will be defined only in the inside of the function.
        const number = value3 / value4;
        return number;
    }
    console.log(divison(10,2));

    const num = value1 + value2;
    return num; 
}
console.log(addition(6,7));