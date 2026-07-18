class Employee {
    constructor (name,salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    constructor (name, salary, teamsize) {
        super(name,salary);
        this.teamsize = teamsize;
    }
}

let manager = new Manager("Alpesh", 200000, 20);