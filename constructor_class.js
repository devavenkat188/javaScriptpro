class Employee {
    #name;
    #salary;

    constructor(name,salary){
        this.#name = name;
        this.#salary = salary;
    }
    set employeeName(name) {
        this.#name = 'Name: '+name;
    }
    get employeeName(){
        return this.#name;
    }
    get employeeSalary(){
        return this.#calculateSalary();
    }
    #calculateSalary() {
        this.#salary = this.#salary+100;
        return this.#salary;
    }
    specialPrint() {
        console.log("Special Name "+this.#name);
    }
}
let employee = new Employee("Deva",500);
console.log(employee.employeeSalary);
employee.specialPrint();