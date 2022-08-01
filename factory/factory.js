function Developer(name) {
    this.name = name
    this.type = "DEVELOPER"
}

function Tester(name) {
    this.name = name
    this.type = "TESTER"
}

function EmployeFactory() {
    this.create = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name)
            case 2:
                return new Tester(name)
        }
    }
}

function say() {
    console.log(`Hi i am ${this.name} and i am ${this.type}`)
}

const employees = [];
const employeeFactory = new EmployeFactory();

employees.push(employeeFactory.create("Karol", 1))
employees.push(employeeFactory.create("Karol", 2))
employees.push(employeeFactory.create("Karol", 1))
employees.push(employeeFactory.create("Karol", 2))

employees.forEach(employee => {
    say.call(employee)
})