class Employee {

    set employeeName (name) {
        this.name = name;
    }

    specialPrint() {
        console.log(this.name);
    }
}
let employee = new Employee();
employee.employeeName = "Deva";
employee.specialPrint();