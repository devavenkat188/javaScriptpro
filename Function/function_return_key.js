
function printPerson(firstName,lastName) {
    if(firstName==='' || lastName==='') { // if the condition satisfy it will return nothing.
        return; // it is used to execute the necssary code only, within the function.
    }
    fullName = firstName+' '+lastName;
    console.log(fullName);
}
printPerson('Arun','M');