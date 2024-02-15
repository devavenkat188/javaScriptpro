let fullName = prompt("Enter your full name");
console.log(fullName); // It will return either our name or if we give cancel it will return null value
console.log(fullName ?? "You didn't Enter your Name"); // Nullified operator --> it will return the message
// instead of null as the output.
