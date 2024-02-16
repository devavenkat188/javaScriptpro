let empid = Symbol.for("empno"); // Symbol.for --> is used for global registry.
let empname = Symbol.for("Deva");
console.log(empid == empname);