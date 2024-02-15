let fullName = prompt("Enter your Name");
if(fullName){
    console.log(fullName ?? "you didn't enter your name");
}
else {
    console.log("please enter your name");
}
console.log(fullName.trim().length); // .trim() --> is used to remove the white spacing .