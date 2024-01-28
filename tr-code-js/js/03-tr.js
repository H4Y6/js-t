{/**                  Matrix                */
    const matrix = [
        [1, 2],
        [3, 4],
    ];

    function flatArray(matrix) {
        const items = [];
        for (const row of matrix) {
            for (const item of row) {
                items.push(item);
            }
        }
        return items;
    }
    // console.log(flatArray(matrix));
}

const users = [
    { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, gender: "male" },
    { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, gender: "female" },
    { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, gender: "male" },
    { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, gender: "female" },
    { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"], isActive: true, balance: 3951, gender: "male" },
    { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"], isActive: false, balance: 1498, gender: "male" },
    { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, gender: "female" }
];

{   /**       map()        */

    // const getUserNames = array => { return array.map(({ name }) => name); };
    const getName = ({ name }) => name;                 /**  calback function   */
    const getUserNames = array => array.map(getName);
    // console.log(getUserNames(users));

    const getEmail = ({ email }) => email;               /**  calback function   */
    const getUsersEmail = (users).map(getEmail);
    // console.log(getUsersEmail);                 /**  declarative function map logged result  */

    const logger = (el, idx, arr) => console.log(`El:${el.name}, index:${idx}, length:${arr.length}.`);
    // logger(users[3], 3, users);

    const mapArray = (array, cb) => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            const newEl = cb(array[i], i, array);
            result.push(newEl);
        }
        return result;
    };
    // console.log(mapArray(users, getName));    /**  imperative function logged result  */
    // console.log(mapArray(users, getEmail));   /**  imperative function logged result  */
}

{   /**       flatMap()        */

    const getFriends = ({ friends }) => friends;  /**  calback function   */

    const flatMapArray = (array, cb) => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            const newEl = cb(array[i], i, array);

            if (Array.isArray(newEl)) {
                // result = [...result, ...newEl];   /**alternative way: via spread */

                for (const el of newEl) {
                    result.push(el);
                }
            } else { result.push(newEl); }
        }
        return result;
    };

    // console.log(flatMapArray(users, getFriends));  /**  imperative function logged result  */
    // console.log(users.flatMap(getFriends));        /**  declarative function flatMap logged result  */
}

{             /**       filter()        */

    const filterActive = (el, idx, arr) => el.isActive === true;

    const filterArray = (array, cb) => {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) {
                result.push(array[i]);
            }
        }
        return result;
    };
    // console.log(filterArray(users, filterActive));   /**  imperative function result*/
    // console.log(users.filter(filterActive));        /**  declarative function result*/
}

{               /**       find()        */

    const findEmail = ({ email }, idx, arr) => email === "sharlenebush@tubesys.com";

    const findArrayEl = (array, cb) => {
        let result;

        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) {
                result = array[i];
                break;  /** OR  */
                // return result;
            }
        }
        return result;
    };

    const findArrayIdx = (array, cb) => {
        let result;

        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) {
                result = i;
                break;  /** OR  */
                // return result;
            }
        }
        return result;
    };
    // console.log(findArrayEl(users, findEmail));  /**   imperative function result*/
    // console.log(findArrayIdx(users, findEmail)); /**   imperative function result*/
    // console.log(users.find(findEmail));          /**  declarative function result*/
}

{            /**       every()        */

    const checkEveryIsActive = ({ isActive }, idx, arr) => isActive;
    const checkEveryHasEmail = ({ email }, idx, arr) => email;

    const checkEveryInArray = (array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (!cb(array[i], i, array)) return false;
        }
        return true;
    };
    // console.log(checkEveryInArray(users, checkEveryIsActive));
    // console.log(users.every(checkEveryIsActive));
    // console.log(checkEveryInArray(users, checkEveryHasEmail));
    // console.log(users.every(checkEveryHasEmail));

}

{            /**       some()        */

    const checkSomeIsActive = ({ isActive }, idx, arr) => isActive;
    const checkSomeHasEmail = ({ email }, idx, arr) => email;

    const checkSomeInArray = (array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) return true;
        }
        return false;
    };
    // console.log(checkSomeInArray(users, checkSomeIsActive));
    // console.log(users.some(checkSomeIsActive));
    // console.log(checkSomeInArray(users, checkSomeHasEmail));
    // console.log(users.some(checkSomeHasEmail));
}

{            /**       reduce()        */
    const sum = (total, { balance }) => { return total + balance; };

    const reduceArray = (array, cb, initialValue) => {
        // let acc = initialValue ? initialValue : array[0];  /**  OR  */
        let acc = initialValue ?? array[0];
        const idx = initialValue === undefined ? 0 : 1;

        for (let i = idx; i < array.length; i++) {
            acc = cb(acc, array[i], i, array);
        }
        return acc;
    };

    console.log(reduceArray(users, sum, 0));
    const totalBalance = users.reduce(sum, 0);
    console.log(totalBalance);
}