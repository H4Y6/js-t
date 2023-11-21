{
    const createUser = function (name, age) {
        // return { name: name, age: age };
        const eyeColor = 'green';

        return { name, age, eyeColor };
    }

    const user = createUser('Smith', 33);
    // console.log(user);
}

{
    const user = { name: 'Peter', age: 32 };

    const addProps = function ({ ...obj }, key, value) {
        obj[key] = value;

        return obj;
    }
    // const developer = addProps(user, 'salary', 2222);
    const developer = addProps(user, 'rating', 4.2);

    // console.log(user);
    // console.log(developer);
}
{
    const user = { name: 'Peter', age: 32 };

    const addProps = function (obj, key, value) {

        return { ...obj, [key]: value };
    }
    let developer = addProps(user, 'salary', 2222);
    // console.log(developer);

    // developer = addProps(user, 'rating', 4.2);
    // console.log(developer);
    // console.log(user);
}

{
    const employeeSam = { name: 'Sam', salary: 4100 };
    const employeeTom = { name: 'Tom', salary: 2700, bonus: 200 };

    const company = {
        employees: [],
        totalSalaryFund: 7000,

        addEmployee(employee) {
            this.employees.push(employee);
        },

        estimateTotalSalary() {
            let totalSalary = 0;

            for (const employee of this.employees) {
                const bonus = employee.bonus ?? 0;
                totalSalary += employee.salary + bonus;
            }

            return totalSalary;
        },

        // calculateAllSalary() {
        //     let sum = 0;

        //     for (const employee of this.employees) {
        //         const bonus = employee.bonus ?? 0;
        //         sum += employee.salary + bonus;
        //     }

        //     return sum;
        // },
    };

    company.addEmployee(employeeSam);
    company.addEmployee(employeeTom);
    console.log(company.employees);

    console.log(company.estimateTotalSalary())
    // console.log(company.calculateAllSalary())
}