class Employee {
    employeeName = 'Devashankar';

    print() {
        console.log(this.employeeName);
    }
}

let employee = new Employee(); // employee & employee2 is instance variable by accessing the instance 
// variable using this keyword.
employee.print();
// console.log(employee.employeeName);

let employee2 = new Employee();
employee2.employeeName = "Sanjay";
employee2.print();
// console.log(employee2.employeeName);