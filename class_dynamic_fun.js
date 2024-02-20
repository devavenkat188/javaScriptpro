class Employee {
    // employeeName; // in javascript global variable is taken by default. so we don't need to define.
    print(name) { // dynamic function -- by adding name as a parameter.
        this.employeeName = name;
        console.log(name);
    }
    
    specialPrint() {
        console.log("Special Print = "+this.employeeName);
    }
    addition() {
        this.value1 = 10;
        this.value2 = 20;
        this.value3 = this.value1+this.value2;
        console.log(this.value3);
    }
}
let employee = new Employee();
employee.print("Deva");

let emp2 = new Employee();
emp2.print("Sanjay");

employee.specialPrint();
employee.addition();