let workingHours = Math.floor(Math.random()*12);
let additionalWorkingHours = workingHours > 9.00 ? "you have additional working hours": "you have negative working hours";
console.log(additionalWorkingHours +` ${workingHours}`);
