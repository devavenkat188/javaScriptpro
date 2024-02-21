/*
9. Write a JavaScript program to calculate circle area and perimeter.
Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
 */
function circle(radius) {
    this.radius =radius;

    this.area = function() {
        return Math.PI*radius*radius;
    };
    this.perimeter = function() {
        return 2*Math.PI*radius;
    };
}
var result = new circle(3);
console.log("Area of the Circle = "+result.area().toFixed(2));
console.log("Perimeter of the Circle = "+result.perimeter().toFixed(2));
