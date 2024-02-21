let input = 'name' // consider the input is given by the user.

let alien = {
    name: "Devashankar", // name : --> Key & "Devashankar" --> value.
    tech: "JavaScript",
    'work exp': 4,
};

console.log(alien);
console.log(alien.name); // which is used to select particular properties from the object by using . operator.
console.log(alien['tech']); // using array brackets with ''.
console.log(alien["work exp"]);
console.log(alien[input]); // it's compulsory to use this type of operator.

