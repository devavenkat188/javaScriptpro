// return --> string type
function getFullName(firstName,lastName){
    const name = firstName+' '+lastName;
    return name;  // the function with a return keyword of a value.
}
let fullName = getFullName('Arun','M');
console.log(fullName);

 // return --> with number type
 function getAddition(value1,value2){
    const value = value1 + value2;
    return value;
 }
 let addition = getAddition(5,6);
 console.log(addition);

 // return --> with array type
 function getNames(name1,name2){
    const names = [name1,name2];
    return names;
 }
 let totalNames = getNames('Sanjay','Deva');
 console.log(totalNames);
 
 //return --> with object type
 function getLocation(location1,location2) {
    return {location1,location2}; // if key & value has the same name then we mention like this.
    // we use return statement directly without store into a another variable.
    const location = {location1:location1,location2:location2}; // consider the object has key & value pair.
    return location;
 }
 let totalLocation = getLocation('Salem','Erode');
 console.log(totalLocation);
