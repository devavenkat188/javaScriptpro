class Employee {
    static #name = "Devashankar";
    static #salary = 1000;
    static set employeeSalary(salary){
        Employee.#salary = salary;
    }
    static get employeeSalary() {
        return Employee.#salary;
    }
    printName() { // here the function is normal
        console.log(Employee.#name);
    }
}
console.log(Employee.employeeSalary);

emp = new Employee(); // so we need to create a new variable for accessing the method name of printName()
emp.printName();