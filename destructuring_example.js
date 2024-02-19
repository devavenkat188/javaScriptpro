let names = ['Devashankar','Sanjay','Arun',undefined]; // there is undefined means we can set own name to the
// variables.

const [name1,name2, ,name4 = "Default Name"] = names; // name1 .. --> are the variables.
// follow the order to skip the names in-between.

console.log(name1);
console.log(name2);
console.log(name4);