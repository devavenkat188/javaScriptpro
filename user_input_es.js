let fullName = prompt("Enter your Name");
if(fullName.length>1){
    console.log(fullName ?? "you didn't enter your name");
}
else {
    console.log("please enter your name");
}