class Employee {
    #name = "Sanjay";
    #salary = 500;
    set employeeName (name) {
        this.#name = 'Name: '+name; // we can modify for our own use to set the name by using variable
        // declare as a private.
    }

    get employeeName(){
        return this.#name;
    }

    get employeeSalary() {
        return '₹ '+this.#calculateSalary();
    }

    #calculateSalary() {         // private function also used within the class for our changes no need to
        // modified by others.
        this.#salary = this.#salary+100;
        return this.#salary;
    }

    specialPrint() {
        console.log(this.#name);
    }

}
let employee = new Employee();
employee.employeeName = "Deva"; // setter
employee.name = "Venkat"
console.log(employee.employeeName); // getter 
console.log(employee.employeeSalary); // getter
employee.specialPrint();