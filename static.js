class Employee {
    static #name = "Devashankar";
    static #salary = 500;

    static set employeeSalary (salary) {
        Employee.#salary = salary; // due to static variable it can be accessed by class name. variable.
    }
    static set employeeName (name) {
        Employee.#name = name;
    }
    static get employeeName (){
        return Employee.#name;
    }
    static get employeeSalary (){
        return Employee.#salary;
    }
}
Employee.salary = 1000;        // it can't possible because it's already in private variable.
console.log(Employee.employeeSalary);
console.log(Employee.employeeName);