/*
1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
 */
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};

var property = [];
for(let key in student){
    if(student !== undefined){
        property.push(key);
    }
}
var result = property.join(",");
console.log(result);
