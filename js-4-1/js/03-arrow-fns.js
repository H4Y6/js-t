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
            const potionIndex = this.potions.indexOf(potionName);

            if (potionIndex === -1) {
                return `Potion ${potionName} is not in inventory!`;
            }

            this.potions.splice(potionIndex, 1);
        },
        updatePotionName(oldName, newName) {
            const potionIndex = this.potions.indexOf(oldName);

            if (potionIndex === -1) {
                return `Potion ${oldName} is not in inventory!`;
            }

            this.potions.splice(potionIndex, 1, newName);
        },
    };

}
