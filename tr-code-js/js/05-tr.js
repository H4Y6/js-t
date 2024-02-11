const users = [
    { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, gender: "male" },
    { name: "Sharlene Bush", email: "sharl@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, gender: "female" },
    { name: "Ross Vazq", email: "ross@xinre.com", eyeColor: "green", friends: ["Mary Mosh", "Pada Garson", "Nao Buner"], isActive: false, balance: 3793, gender: "male" },
    { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, gender: "female" },
    { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong"], isActive: true, balance: 3951, gender: "male" },
    { name: "Bak Doson", email: "bak@igeer.com", eyeColor: "brown", friends: ["Jack Luca", "Linda Chap"], isActive: false, balance: 1498, gender: "male" },
    { name: "Sheree Anthony", email: "sheree@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, gender: "female" }
];

const getResult = (array, cb, total) => array.reduce(cb, total);

const countBalance = (total, { balance }) => total + balance;
console.log('total balance:', getResult(users, countBalance, 0));

const countActive = (total, { isActive }) => total = isActive === true ? total + 1 : total;
console.log('active quantity:', getResult(users, countActive, 0));

const getActiveName = (string, el) => string = el.isActive === true ? string + el.name + '; ' : string;
console.log('active names:', getResult(users, getActiveName, ''));

const arrayReduce = (array, cb, initialValue) => {
    let acc = initialValue ?? array[0];
    let i = acc === undefined ? 1 : 0;

    for (; i < array.length; i++) {
        acc = cb(acc, array[i], i, array);
    }
    return acc;
};
console.log('total balance >', arrayReduce(users, countBalance, 0));
console.log('active quantity >', arrayReduce(users, countActive, 0));
console.log('active names >', arrayReduce(users, getActiveName, 0));