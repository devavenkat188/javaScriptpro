class Employee {
    
    print(name) { // dynamic function -- by adding name as a parameter.
        console.log(name);
    }
}
let employee = new Employee();
employee.print("Deva");

let emp2 = new Employee();
emp2.print("Sanjay");
