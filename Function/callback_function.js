function greetConsole(name) {
    console.log('Hello '+name);
}
function greetHeading(name) {
    console.log('Welcome '+name);
}
function greet(callback) {
    callback("Deva");
}
greet(greetConsole); // while calling the function we pass the function name --> (greetConsole) as a argument.

greet(name => {
    console.log('Welcome '+name); // instead of arguments we can pass function defnition also.
}); 