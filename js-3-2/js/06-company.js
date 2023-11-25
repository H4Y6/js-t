const employeeSam = { name: 'Sam', salary: 4100 };
const employeeTom = { name: 'Tom', salary: 2700, bonus: 200 };

const company = {
    employees: [],
    totalCompanyFund: 17000,
    income: 0,

    addEmployee(employee) {
        this.employees.push(employee);
    },

    deleteEmployee(name) {
        const newEmployees = [];

        for (const employee of this.employees) {
            if (employee.name === name) {
                console.log(`${employee.name} deleted`)
                continue;
            }
            newEmployees.push(employee)
        }

        if (newEmployees.length === this.employees.length) {
            return `${name} not found`;
        }

        this.employees = newEmployees;
        return { employees: this.employees };
    },

    calculateAllSalarySum() {
        let sum = 0;

        for (const employee of this.employees) {
            const bonus = employee.bonus ?? 0;
            sum += employee.salary + bonus;
        }

        return sum;
    },

    calculateCompanyIncome() {
        this.income = this.totalCompanyFund - this.calculateAllSalarySum();
        return this.income;
    },
};
company.addEmployee(employeeSam);
company.addEmployee(employeeTom);
console.log(company);

console.log(company.calculateCompanyIncome());

// console.log(company.deleteEmployee('Salm'));
console.log(company.deleteEmployee('Sam'));

const calculateIncome = company.calculateCompanyIncome.bind(company);
console.log(calculateIncome());

