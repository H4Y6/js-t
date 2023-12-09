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
        totalCompanyFund: 17000,
        income: 0,

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

        // calculateAllSalarySum() {
        //     let sum = 0;

        //     for (const employee of this.employees) {
        //         const bonus = employee.bonus ?? 0;
        //         sum += employee.salary + bonus;
        //     }

        //     return sum;
        // },

        estimateCompanyIncome() {
            this.income = this.totalCompanyFund - this.estimateTotalSalary();
            return this.income
        },
    };

    company.addEmployee(employeeSam);
    company.addEmployee(employeeTom);
    // console.log(company);

    // console.log(company.estimateTotalSalary());
    // console.log(company.calculateAllSalarySum());

    // console.log(company.estimateCompanyIncome());
    // console.log(company);

    const estimateTotalSalary = company.estimateTotalSalary.bind(company);
    // console.log(estimateTotalSalary())
}

{
    const obj = {
        name: 'Pit',
        showName() {
            console.log(this.name);
        }
    }

    const showName = obj.showName.bind(obj)
    // showName();
}

{
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    // function getAllPropValues(propName) {
    //     const propValues = [];
    //     for (const product of products) {
    //         product[propName] ? propValues.push(product[propName]) : propValues;
    //     };
    //     return propValues;
    // }

    function getAllPropValues(propName) {
        const propValues = [];
        for (const product of products) {
            if (product[propName]) {
                propValues.push(product[propName]);
            };
        };
        return propValues;
    }

    console.log(getAllPropValues('name'));
    console.log(getAllPropValues('nam'));
}