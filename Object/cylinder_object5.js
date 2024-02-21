/*
5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.
 */
let cylinder = {
    diameter: 8,
    height: 6,
};
let volume;
function volumeofCylinder(){
    volume = Math.PI*cylinder.diameter/2*cylinder.diameter/2*cylinder.height;
    return volume;
}
volumeofCylinder(cylinder);
console.log(volume.toFixed(4));

// let volume = Math.PI*cylinder.radius*cylinder.radius*cylinder.height;
// console.log(volume.toFixed(4));