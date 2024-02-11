const users = [
    { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, gender: "male" },
    { name: "Sharlene Bush", email: "sharl@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, gender: "female" },
    { name: "Ross Vazq", email: "ross@xinre.com", eyeColor: "green", friends: ["Mary Mosh", "Pada Garson", "Nao Buner"], isActive: false, balance: 3793, gender: "male" },
    { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, gender: "female" },
    { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong"], isActive: true, balance: 3951, gender: "male" },
    { name: "Bak Doson", email: "bak@igeer.com", eyeColor: "brown", friends: ["Jack Luca", "Linda Chap"], isActive: false, balance: 1498, gender: "male" },
    { name: "Sheree Anthony", email: "sheree@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, gender: "female" }
];

const countBalance = (total, { balance }) => total + balance;
const countTotalBalance = (array, cb, total) => array.reduce(cb, total);

console.log('total balance', countTotalBalance(users, countBalance, 0));

const arrayReduce = (array, cb, initialValue) => {
    let acc = initialValue ?? array[0];
    const idx = acc === undefined ? 1 : 0;

    for (let i = idx; i < array.length; i++) {
        acc = cb(acc, array[i], i, array);
    }
    return acc;
};
console.log('total balance >', arrayReduce(users, countBalance, 0));