function getFullName(firstName,lastName){
    if(firstName === "") {
        return;
    }
    else if (firstName === firstName && lastName === "") {
        return; // The return statement will does not return anything.
    }
    else {
    const name = firstName + " " + lastName;
    console.log(name);
    }
}
getFullName("Deva","V");