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
// console.log('total balance:', getResult(users, countBalance, 0));

const countActive = (total, { isActive }) => total = isActive === true ? total + 1 : total;
// console.log('active quantity:', getResult(users, countActive, 0));

const getActiveName = (string, el) => string = el.isActive === true ? string + el.name + '; ' : string;
// console.log('active names:', getResult(users, getActiveName, ''));

const arrayReduce = (array, cb, initialValue) => {
    let acc = initialValue ?? array[0];
    let i = acc === undefined ? 1 : 0;

    for (; i < array.length; i++) {
        acc = cb(acc, array[i], i, array);
    }
    return acc;
};
// console.log('total balance >', arrayReduce(users, countBalance, 0));
// console.log('active quantity >', arrayReduce(users, countActive, 0));
// console.log('active names >', arrayReduce(users, getActiveName, 0));

{
    function filter_list(l) { return l.filter(e => Number.isInteger(e)); }
    // function filter_list(l) { return l.filter(Number.isInteger); }
    // const filter_list = (l) => l.filter(e => typeof e === 'number');

    // console.log(filter_list([1, 'a', 'b', 0, 15]));
}

{
    // Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value,
    //  remove the one with a lower index. If you get an empty array/list, return an empty array/list.
    // Don't change the order of the elements that are left.

    // Examples;
    Input => [1, 2, 3, 4, 5], output => [2, 3, 4, 5];

    // function removeSmallest(numbers) {
    //     const bigerNumbers = [...numbers];
    //     const minNumber = Math.min(...numbers);
    //     const i = [...numbers].findIndex(n => n === minNumber);
    //     bigerNumbers.splice(i, 1);
    //     return (bigerNumbers);
    // }

    // function removeSmallest(numbers) {
    //     const minNumber = Math.min.apply(this, numbers);
    //     // const minNumber = Math.min(...numbers);
    //     return numbers.filter((_, i) => i !== numbers.indexOf(minNumber));
    // }

    // const removeSmallest = array => {
    //     const biggerArray = [...array];
    //     biggerArray.splice((array.findIndex(n => n === Math.min(...array))), 1);
    //     return biggerArray;
    // };

    // const removeSmallest = numbers => {
    //     const idx = numbers.indexOf(Math.min(...numbers));
    //     return [...numbers].slice(0, idx).concat(numbers.slice(idx + 1));
    // };

    // const removeSmallest = numbers => {
    //     const newArray = [...numbers];
    //     newArray.splice(numbers.indexOf(Math.min(...numbers)), 1);
    //     return newArray;
    // };

    const removeSmallest = array => array.filter((_, i) => i !== array.indexOf(Math.min(...array)));

    // const removeSmallest = array => array.filter((e, i) => i !== array.indexOf(Math.min.apply(this, array)));

    // const removeSmallest = array => array.filter((_, i) => i !== array.reduce((idx, _, i) => array[idx] > array[i] ? i : idx, 0));

    // const removeSmallest = array => array.filter((_, i) => i !== (array.findIndex(n => n === Math.min(...array))));

    // const removeSmallest = array => array.filter((_, i) => i !== array.reduce((idx, n, i) => idx = n < array[idx] ? i : idx, 0));

    // function removeSmallest(array) { return array.filter((_, i) => i !== array.reduce((idx, n, i) => idx = n < array[idx] ? i : idx, 0)); }

    // console.log(removeSmallest([5, 1, 3, 2, 1, 4]));
}

{
    // class Kata {
    //     static getVolumeOfCuboid(length, width, height) {
    //         return length * width * height;
    //     }
    // }

    class Kata {
        static getVolumeOfCuboid(...args) {
            return args.reduce((volume, sideSize) => volume * sideSize, 1);
        }
    }

    // console.log(Kata.getVolumeOfCuboid(2, 3, 4));
}

{
    // You have to write a function that accepts three parameters:

    // cap is the amount of people the bus can hold excluding the driver.
    // on is the number of people on the bus excluding the driver.
    // wait is the number of people waiting to get on to the bus excluding the driver.
    // If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

    function enough(cap, on, wait) {
        return +(wait > cap - on && wait - cap + on);
    }

    // function enough(cap, on, wait) {
    //     return on + wait - cap > 0 ? on + wait - cap : 0;
    // }

    console.log(enough(100, 0, 50));
}
