function employee(name, salary, department) {
    this.name = name;
    this.salary = salary;
    this.department = department;

    this.info = function() {
        console.log(`${name} monthly salary is ${salary} and it come from ${department} department`)
    }
}

const s1 = new employee('naresh', 200000, 'Commerce')
s1.info()