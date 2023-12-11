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

    // console.log(getAllPropValues('name'));
    // console.log(getAllPropValues('nam'));
}

{
    const products = [
        { name: "Radar", price: 1300, quantity: 4 },
        { name: "Scanner", price: 2700, quantity: 3 },
        { name: "Droid", price: 400, quantity: 7 },
        { name: "Grip", price: 1200, quantity: 9 },
    ];

    function calculateTotalPrice(productName) {
        for (const { name, price, quantity } of products) {
            if (name === productName) { return price * quantity; }
        }
        return 0;
    }

    // console.log(calculateTotalPrice("Grip"));
    // console.log(calculateTotalPrice("Blaster"));
}

{
    const scores = [89, 64, 42, 17, 93, 51, 26];
    const worstScore = Math.min(...scores);
    const bestScore = Math.max(...scores);

    // console.log(worstScore, bestScore);
}

{
    function add(...args) {
        let total = 0;
        for (const arg of args) {
            total += arg;
        }
        return total;
    }

    // console.log(add(74, 11, 62, 46, 12, 36));
}

{
    function addOverNum(number, ...args) {
        let total = 0;

        for (const arg of args) {
            number < arg ? total += arg : total;
        }
        console.log(total);
        return total;
    }

    // addOverNum(50, 15, 27)
}

{
    function findMatches(arr, ...args) {
        const matches = [];
        for (const arg of args) {
            (arr).includes(arg) ? matches.push(arg) : matches;
        }
        console.log(matches);
        return matches;
    }

    // findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
}

{
    const bookShelf = {
        books: ["The last kingdom", "Haze", "The guardian of dreams"],
        updateBook(oldName, newName) {
            const i = this.books.indexOf(oldName);
            this.books.splice(i, 1, newName);
            console.log(this.books);
        },
    };
    // bookShelf.updateBook("Haze", "Dungeon chronicles");
}

{
    const atTheOldToad = {
        potions: ["Speed potion", "Dragon breath", "Stone skin"],
        getPotions() {

            return this.potions;
        },
        addPotion(potionName) {
            this.potions.push(potionName);
        },
        removePotion(potionName) {
            const i = this.potions.indexOf(potionName);
            this.potions.splice(i, 1);
        },
        updatePotionName(oldName, newName) {
            const i = this.potions.indexOf(oldName);
            this.potions.splice(i, 1, newName);
        },
    };
    // console.log(atTheOldToad.addPotion("Invisibility"));
    // console.log(atTheOldToad.removePotion("Invisibility"));
    // console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
    // console.log(atTheOldToad.getPotions());
}

{
    const atTheOldToad = {
        potions: [
            { name: "Speed potion", price: 460 },
            { name: "Dragon breath", price: 780 },
            { name: "Stone skin", price: 520 },
        ],
        getPotions() {
            return this.potions;
        },
        addPotion(newPotion) {
            for (const potion of this.potions) {
                if (potion.name === newPotion.name) {
                    return `Error! Potion ${newPotion.name} is already in your inventory!`;
                }
            }

            this.potions.push(newPotion);
        },
        removePotion(potionName) {
            const potionIndex = this.potions.findIndex(p => p.name === potionName);
            if (potionIndex === -1) {
                return `Potion ${potionName} is not in inventory!`;
            }

            this.potions.splice(potionIndex, 1);
        },
        updatePotionName(oldName, newName) {
            const potionIndex = this.potions.findIndex(p => p.name === oldName);

            if (potionIndex === -1) {
                return `Potion ${oldName} is not in inventory!`;
            }

            this.potions[potionIndex].name = newName;
        },
    };
    // console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
    // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
    // console.log(atTheOldToad.removePotion("Speed potion"));
    // atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
    // console.log(atTheOldToad.getPotions());
}