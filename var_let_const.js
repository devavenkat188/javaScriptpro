if (true){
    var varVariable="This is true";
}
    var varVariable="The var variable can be re-declare";

console.log(varVariable);

if(true) {
    let letVariable="This is used only Inside a block";
    
    console.log(letVariable);
}



if(true){
    const conVariable="This is also block scoped variables";
    console.log(conVariable);
}

const constVar = {name: "Deva"};
let letVar = 1;

constVar.name = "Shankar";

console.log(constVar); // we can modify the properties of the class created by using the const variable

/* 
The var variable can be re-declare
This is used only Inside a block
This is also block scoped variables
{ name: 'Shankar' }
*/