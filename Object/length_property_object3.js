/*
3. Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 */

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12,
};
var property = [];
for(key in student){
    if(student !== undefined){
        property.push(key);
    }
}
console.log(property.length);