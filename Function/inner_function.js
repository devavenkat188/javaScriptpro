
function getFullName(firstName,lastName) {
    function getTotalMarks(mark1,mark2) { // inner function --> cab be used only inside the function only, it can't be
        // used at outside of the function.
        const marks = ((mark1+mark2)/2);
        return marks;
    }
    let totalMarks = getTotalMarks(70,98);
    console.log(totalMarks);

    const name = firstName+' '+lastName;
    return name;
}
let fullName = getFullName('Deva','V');
console.log(fullName);