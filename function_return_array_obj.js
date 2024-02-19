function getVaule(value1,value2){
    const value = [value1 * value2];
    return value;
}
function getDetails(firstName,lastName,gender,dob) {
   // const detail = {firstName:firstName,lastName:lastName,gender:gender,dob:dob}; // obj --> key and value pair.
    return {firstName,lastName,gender,dob};
    // if the key & value pair has the same name then just give key only.
    // return detail;
}
let getArray = getVaule(4,5);
console.log(getArray); // return the value in array format.
console.log(getDetails('Devashankar','V','Male',8899442540)); // return the value in object format.
