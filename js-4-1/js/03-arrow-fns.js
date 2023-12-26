/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

const add = function (a, b, c) {
    console.log(arguments);
    return a + b + c;
};

const addArrowSimple = (a, b, c) => a + b + c;
console.log(addArrowSimple(5, 10, 15));

const addArrowSimpleArgs = (a, b, c) => console.log(args); /*args are not defined */
// addArrowSimpleArgs(5, 10, 15);

const addArrowSimpleArgsRest = (...args) => {
    console.log(args);
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}; /*Use rest to get arguments */

addArrowSimpleArgsRest(5, 10, 15);


// const addArrow = (a, b, c) => {
//     return a + b + c;
// };

console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

const fnA = function () {
    return {
        a: 5,
    };
};

console.log(fnA());

const arrowFnA = () => ({ arrowA: 5 });  /** to have implicit return with object use () */

console.log(arrowFnA());

const filter = (array, test) => {
    const filteredArray = [];

    for (const el of array) {
        console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

// const callback1 = value => value >= 3;

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

console.log(r1);

// const callback2 = value => value <= 4;

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
console.log(r2);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

// const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log(r3);

{
    // const setFiltreRule = (value, limitedValue) => value <= limitedValue;

    // const filtre = (array, number, cb) => {
    //     const filtredArray = [];
    //     for (const el of array) {
    //         if (cb(el, number)) {
    //             filtredArray.push(el);
    //         }
    //     }
    //     return filtredArray;
    // };

    const filtre = (array, cb) => {
        const filtredArray = [];
        for (const el of array) {
            if (cb(el)) {
                filtredArray.push(el);
            }
        }
        return filtredArray;
    };

    // console.log(filtre([3, 5, 2, 7, 8, 4], 4, setFiltreRule));
    console.log(filtre([3, 5, 2, 7, 8, 4], item => item <= 5));
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
            const potionNames = Object.values(this.potions);
            const idx = potionNames.findIndex(p => p.name === newPotion.name);

            if (idx === -1) {
                this.potions.push(newPotion);
            };
            {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            };
        },
        removePotion(potionName) {
            const potionNames = Object.values(this.potions);
            const idx = potionNames.findIndex(p => p.name === potionName);
            if (idx === -1) {
                return `Potion ${potionName} is not in inventory!`;
            }

            this.potions.splice(idx, 1);
        },
        updatePotionName(oldName, newName) {
            const potionIndex = Object.values(this.potions).findIndex(p => p.name === oldName);

            if (potionIndex === -1) {
                return `Potion ${oldName} is not in inventory!`;
            }

            this.potions[potionIndex].name = newName;
        },
    };

}

{
    const users = [{ name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, gender: "male" }, { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, gender: "female" }, { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, gender: "male" }, { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, gender: "female" }, { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"], isActive: true, balance: 3951, gender: "male" }, { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"], isActive: false, balance: 1498, gender: "male" }, { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, gender: "female" }]

    const getTotalBalanceByGender = (users, gender) => {
        let balance = 0;
        for (const user of users) {
            if (user.gender === gender) { balance += user.balance; }
        }
        console.log(balance);
        return balance;
    };
    getTotalBalanceByGender(users, 'male')
}
