const dirtyMultyply = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        array[i] *= value;
    }
};
const numbers = [1, 4, 2, 5, 7];

// console.log(numbers);
// dirtyMultyply(numbers, 3);
// console.log(numbers);

const pureMultyply = (array, value) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i] * value);
    }
    return newArray;
};
pureMultyply(numbers, 5);
// console.log(numbers);

const users = [
    { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, gender: "male" },
    { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, gender: "female" },
    { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, gender: "male" },
    { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, gender: "female" },
    { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"], isActive: true, balance: 3951, gender: "male" },
    { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"], isActive: false, balance: 1498, gender: "male" },
    { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, gender: "female" }
];

/**     map()        */

/**  cb ->  */   const getName = (({ name }) => name);
/**  cb ->  */   const logger = ({ name, isActive }, i, array) => {
    console.log(`Index ${i}, user ${name},  active: ${isActive}. Element count: ${array.length}`);
    return `Index ${i}, user ${name},  active: ${isActive}. Element count: ${array.length}\
    `;
};

const names = users.map(getName);
console.log('names:', names);

const mapArray = (array, cb) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const newElement = cb(array[i], i, array);
        result.push(newElement);
    }
    return result;
};

mapArray(users, getName);
mapArray(users, logger);

{
    const isActiveDatum = ({ isActive }, i) => `Index ${i} is active -> ${isActive}`;  /**  cb   */

    const mapArray = (array, cb) => {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            result.push(cb(array[i], i, array));
        }
        console.table(result);
        return result;
    };
    // mapArray(users, isActiveDatum);
}

/**           flatMap                 */

