const names = [undefined,'Deva','Sanjay','Kishore'];

const [name1 = "Default Name", ...name2] = names; // ...name2 = rest parameter --> it will defined within the array.
const [name = "Default Name", ...[nam1]] = names; // ...[nam1] --> it will select the array of first element.
const [nam = "Default Name", ...[,,val3]] = names; // ...[,,val2]] --> it will print                                                                                                                                                                                                                               
console.log(name1);
console.log(name2);
console.log(nam1);
console.log(val3);