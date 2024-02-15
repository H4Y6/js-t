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

    // function enough(cap, on, wait) { return +(wait > cap - on && wait - cap + on); }
    // const enough = (cap, on, wait) => +(cap < on + wait && on + wait - cap);

    const enough = (cap, on, wait) => on + wait - cap > 0 ? on + wait - cap : 0;

    /**   The + sign before the expression converts the boolean result to a numeric value (0 for false, 1 for true).
            The function returns this numeric value, indicating whether there are enough resources. */

    // console.log(+(true && 55));
    // console.log(+(false && 55));

    // console.log(enough(100, 44, 60));
}

{
    function invert(array) {
        return array.map(el => -el);
    }
    // console.log(invert([1, 2, 3, -4, 5]));
}
// d + a=2s + 2a;
// a = 2s - d;
{
    // function twiceAsOld(dadYearsOld, sonYearsOld) {
    //     return Math.abs(2 * sonYearsOld - dadYearsOld);
    // }

    function twiceAsOld(dadYearsOld, sonYearsOld) {
        return 2 * sonYearsOld - dadYearsOld > 0 ? 2 * sonYearsOld - dadYearsOld : dadYearsOld - 2 * sonYearsOld;
    }
    // console.log(twiceAsOld(46, 7));
}

{
    // Consider an array/list of sheep where some sheep may be missing from their place.
    //  We need a function that counts the number of sheep present in the array (true means present).
    // Hint: Don't forget to check for bad values like null/undefined.
    // example: [undefined, null, false, true], result = 1;

    function countSheeps(sheep) {
        // return sheep.reduce((count, el) => count + (el ? 1 : 0), 0);
        // return sheep.reduce((count, el) => el ? count + 1 : count, 0);
        // return sheep.filter(sh => sh).length;
        // return sheep.filter(Boolean).length;
        let count = 0;
        sheep.forEach((sh) => count += sh ? 1 : 0);
        return count;
    };
    // console.log(countSheeps([undefined, true, null, false, true]));
}

{
    function makeNegative(num) {
        // return num > 0 ? -num : num;
        // return -Math.abs(num);
        return 0 - Math.abs(num);
    }
    // console.log(makeNegative(0));
}

{   /*
    Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
    Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
    If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
    If he doesn't get 10 hoops, return the string "Keep at it until you get it".   */

    function hoopCount(n) {
        return n > 9 ? "Great, now move on to tricks" : "Keep at it until you get it";
    }
    // console.log(hoopCount(2));
}

{   /* The terms are the smallest of n consecutive odd numbers whose sum is n^3: 1, 3 + 5 = 8 = 2^3, 7 + 9 + 11 = 27 = 3^3, etc. - Amarnath Murthy, May 19 2001
    
    /*  Given the triangle of consecutive odd numbers:
                    1              
                 3     5           
              7     9    11        
          13    15    17    19     
       21    23    25    27    29  */

    // Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
    //         1 -->  1
    //         2 --> 3 + 5 = 8

    function rowSumOddNumbers(n) {
        // let length = 0;
        // for (let i = 1; i <= n; i++) {
        //     length += i;
        // }
        // const array = [];
        // for (let i = 1; i <= length; i++) {
        //     const a = (i * 2) - 1;
        //     array.push(a);
        // }
        // const row = array.slice(-n);
        // return row.reduce((sum, el) => sum + el, 0);

        return n ** 3;

        // const array = [];
        // let arrayLength = 0;

        // for (let i = 1; i <= n; i++) {
        //     arrayLength += i;
        // }

        // for (let i = 0; i < arrayLength; i++) {
        //     array.push(2 * i + 1);
        // }
        // return array.slice(-n).reduce((sum, el) => sum + el, 0);

        const array = [];
        let arrayLength = 0;

        for (let i = 1; i <= n; i++) {
            arrayLength += i;
        }

        for (let i = 0; i < arrayLength; i++) {
            const element = i * 2 + 1;
            array.push(element);
        }
        return array.slice(-n).reduce((sum, num) => sum + num, 0);
    }
    console.log(rowSumOddNumbers(4));
}


/*  The sum of n consecutive integers:
Сума n послідовних цілих чисел може бути обчислена за допомогою формули:
{ Сума послідовних чисел } = \frac{ n }{ 2} \left( Перше число  + Останнє число \right);
де:

 n - кількість чисел у послідовності.
 Перше число - перше число в послідовності.
 Останнє число - останнє число в послідовності.
 Наприклад, якщо ми маємо послідовність чисел від 1 до 50, то:  */

/* Перше число = 1
Останнє число = 50;
n = 50 - 1 + 1 = 50
Тоді сума цих послідовних чисел від 1 до 50 дорівнює:

[\text{ Сума } = \frac{ 50}{ 2} \left(1 + 50 \right) = 25 \cdot 51 = 1275]; 
    Сума  = { 50} / { 2} \left(1 + 50 \right) = 25 * 51 = 1275
*/

const sum = array => array.reduce((acc, n) => acc + n, 0);

console.log(sum([4, 5, 6, 7, 8, 9, 10, 11])); 4 * 15;
console.log(4 * 15); 
