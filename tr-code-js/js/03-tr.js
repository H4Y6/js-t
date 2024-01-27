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
    const getName = ({ name }) => name;
    const getUserNames = array => array.map(getName);
    console.log(getUserNames(users));

    const arrayMap = (array, cb) => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            const newEl = cb(array[i], i, array);
            result.push(newEl);
        }
        return result;
    };
    console.log(arrayMap(users, getName));
}