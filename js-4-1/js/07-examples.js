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
    return 'See console.log';
};

const names = users.map(getName);
// console.log('names:', names);

const mapArray = (array, cb) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        const newElement = cb(array[i], i, array);
        result.push(newElement);
    }
    return result;
};

mapArray(users, getName);
// mapArray(users, logger);

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

/**       flat() or  flat(2 or 3 or infinity)    &&    flatMap                 */

const getFriends = ({ friends }) => friends;
const friends = users.map(({ friends }) => friends).flat();
const flatMappedFriends = users.flatMap(getFriends);

// console.log('flat() friends', friends);
// console.log('flatMap() friends', flatMappedFriends);


const flatMapArray = (array, cb) => {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        const El = cb(array[i], i, array);

        if (Array.isArray(El)) {
            // for (const iterator of El) {
            //     result.push(iterator);
            // }

            result.push(...El);

            // for (let i = 0; i < El.length; i++) {
            //     const element = El[i];
            //     result.push(element);
            // }
        } else { result.push(El); }
    }
    console.log(result);
    return result;
};

// flatMapArray(users, getFriends)

/**        filter()             */

/**  cb:  */ const getActive = (({ isActive }) => isActive);
/**  cb:  */ const getSelectedBalance = (({ balance }) => balance > 2900);

const filterArray = (array, cb) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) {
            result.push(array[i]);
        };
    }
    console.log(result);
    return result;
};
// filterArray(users, getActive);
// filterArray(users, getSelectedBalance);

/**        find()              */

const findByName = ({ name }) => name === 'Sharlene Bush';
const findByEmail = ({ email }) => email === "elmahead@omatom.com";

// console.log(users.find(findByName));

const findInArray = (array, cb) => {

    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array))
            return (array[i]);
    }
    return undefined;
};
// console.log(findInArray(users, findByName));
// console.log(findInArray(users, findByEmail));

/**        findindex()              */

const i = users.findIndex(({ name }) => name === 'Sharlene Bush');
// console.log(i);

const findIndexInArray = (array, cb) => {

    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array))
            return i;
    }
    return -1;
};
// console.log(findIndexInArray(users, ({ name }) => name === 'Sharlene Bush'));

/**        every()              */

const isActive = ({ isActive }) => isActive;

// console.log(users.every(isActive));

const checkEvery = (array, cb) => {
    for (let i = 0; i < array.length; i++) {
        if (!cb(array[i], i, array)) {
            return false;
        };
    }
    return true;
};
// console.log(checkEvery(users, isActive));

/**        some()              */

// console.log(users.some(isActive));

const checkSome = (array, cb) => {
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) {
            return true;
        }
    }
    return false;
};
// console.log(checkSome(users, isActive));

/**        reduce()              */

const getBalance = (acc, { balance }) => acc + balance;

// console.log('The total balance ->', users.reduce(getBalance, 0));

const reduceArray = ((array, cb, initialValue) => {
    let acc = initialValue ?? array[0].balance;
    const idx = initialValue !== undefined ? 0 : 1;

    for (let i = idx; i < array.length; i++) {
        acc = cb(acc, array[i], i, array);
    }
    return acc;
});
// console.log('The total balance is', reduceArray(users, getBalance));


const countActive = ((n, { isActive }) => isActive ? n + 1 : n);          /**  OR: 
const countActive = ((n, { isActive }) => { return isActive ? n + 1 : n; });    */

const showName = ((acc = ' ', { name }) => (acc + name + '; '));

const reduceArr = (array, cb, initValue) => {
    let acc = initValue ?? 0;

    for (let i = 0; i < array.length; i++) {
        acc = cb(acc, array[i], i, array);
    }
    return acc;
};
console.log('countActive ->', reduceArr(users, countActive, 0));
console.log('userNames ->', reduceArr(users, showName, ' '));

{
    const getTotalBalanceByGender = (users, gender) => users.reduce((acc, user) => user.gender === gender ? (acc + user.balance) : acc, 0);

    console.log('totalMaleBalance ->', getTotalBalanceByGender(users, 'male'));
    console.log('totalFemaleBalance ->', getTotalBalanceByGender(users, 'female'));
}