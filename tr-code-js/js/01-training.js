/**  There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, null. */

function printWordToScreen() {
    const somewords = "This is an example."
    console.log(somewords)
};
// printWordToScreen();

function helloWorld() {
    const str = "Hello World!";
    console.log(str);
};
// helloWorld();

/**
Write function bmi that calculates body mass index(bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
 */

function bmi(weight, height) {
    const bmi = weight / height / height;
    console.log(bmi);
    if (bmi <= 18.5) return "Underweight";
    if (bmi <= 25.0) return "Normal";
    if (bmi <= 30.0) return "Overweight";
    else return "Obese";
};
// console.log(bmi(61.2, 1.8));

/**  Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
 Input will always be valid, i.e. no negative integers. */

const countSheep = function (num) {
    let message = '';
    for (let i = 1; i <= num; i++) {
        message += `${i} sheep...`
    }
    return message;
};

// console.log(countSheep(3));

/**  Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
 Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and
 it's not part of it, see the sample tests. */

const summation = function (num) {
    let sum = 0;

    for (let i = 0; i <= num; i++) {
        sum += i;
    };
    return sum;
};
// console.log(summation(5));

/**  Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle */

function findNeedle(haystack) {
    const idx = haystack.indexOf('needle');
    return idx === -1 ? 'nothing`s found' : `found the needle at position ${idx}`;
};
// console.log(findNeedle(['123124234', undefined, 'world', 'hay', 2, '3', true, 'needle', false]));

/**  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times. */

function repeatStr(n, s) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        result += s;
    };
    return result;
};
// console.log(repeatStr(4, 'ter'));

/**   Write a function that removes the spaces from the string, then return the resultant string.   */

function noSpace(x) {
    return x.split(' ').join('');
};
// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

/**  This kata is about multiplying a given number by eight if it is an even number and by nine otherwise. */

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
};
// console.log(simpleMultiplication(2));
// console.log(simpleMultiplication(3));

/**  Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development 
and functioning of living organisms.If you want to know more: http://en.wikipedia.org/wiki/DNA
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell);
 you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
Example: (input --> output) */

function dnaStrand(dna) {
    return dna.replaceAll('T', 't').replaceAll('A', 'T').replaceAll('t', 'A')
        .replaceAll('G', 'g').replaceAll('C', 'G').replaceAll('g', 'C');
};
// console.log(dnaStrand("GTAT"));

/**  Given a random non-negative number, you have to return the digits of this number within an array in reverse order.  */

function digitize(n) {
    const numberStringReversed = n.toString().split('').reverse();
    let numberArray = [];
    numberStringReversed.forEach(element => {
        numberArray.push(Number(element));
    });
    return numberArray;
};
// console.log(digitize(35231));

/**  Given an array of integers your solution should find the smallest integer.

For example: Given [34, 15, 88, 2] your solution will return 2
             Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.   */

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return (Math.min(...args));
    };
};

function findSmallestInt(args) {
    console.log(Math.min(...args));
};
// findSmallestInt([34, 15, 88, 2]);



/**  You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
 Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.   */


function findNextSquare(sq) {
    const num = Math.sqrt(sq)
    return num % 1 !== 0 ? -1 : Math.pow(num + 1, 2);
};
// console.log(findNextSquare(9));

/**  In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
   */

function printerErrorA(s) {
    // let errNumber = 0;
    // const arr1 = 'abcdefghjiklm'.split('');
    // const strArr = s.split('');
    // strArr.forEach(el => {
    //     if (!arr1.includes(el)) {
    //         errNumber++;
    //     };
    // });
    // return (`${errNumber}/${s.length}`);

    const errorRate = s.match(/[n-z]/i) === null ? 0 : s.match(/[n-z]/gi).length;
    return `${errorRate}/${s.length}`;
};

function printerError(s) {
    if (s.match(/[n-z]/i) === null) {
        return `0/${[s.length]}`
    } else {
        // console.log(s.match(/[n-z]/g));
        // console.log(s.match(/[n-z]/));
        const errorRate = s.match(/[n-z]/gi).length;
        return `${errorRate}/${[s.length]}`
    }
}
// console.log(printerError("aaabbbbhaijjjm"));
// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

/**  Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
 *  Essentially, rearrange the digits to create the highest possible number.
Examples:
    Input: 42145 Output: 54421
    Input: 123456789 Output: 987654321    */


function descendingOrder(n) {
    const stringArray = (n.toString().split(''));
    const descendingArray = [];
    const numberArray = [];
    stringArray.forEach(el => numberArray.push(Number(el)));
    const l = numberArray.length;
    orderDescent(l);

    function orderDescent(a) {
        if (a <= 0) {
            return;
        } {
            let maxNumber = Math.max(...numberArray);
            descendingArray.push(maxNumber);
            numberArray.splice(numberArray.indexOf(maxNumber), 1);
            orderDescent(a - 1);
        };
    };
    let str = '';
    descendingArray.forEach(el => { el.toString(); str += el });
    return Number(str);
};

function descendingOrderA(n) {
    const stringArray = (n.toString().split(''));
    stringArray.sort().reverse();

    let string = '';
    stringArray.forEach(el => { el.toString(); string += el });
    return Number(string);
};

function descendingOrderB(n) {
    // const string = (n.toString().split('')).sort().reverse().join('');
    const string = n.toString().split('').sort((a, b) => b - a).join('');
    return parseInt(string);
    // return Number(string);
};

// function descendingOrder(n) {
//     const str = n.toString().split('').sort((a, b) => b - a).join('');
//     return Number(str);
// };

// console.log(descendingOrder(15));
// console.log(descendingOrderA(42124));
// console.log(descendingOrderB(421745));


function capitalizeFirstLetter(string) {
    const strs = string.split(' ');
    let newStr = '';
    strs.forEach(str => (newStr += `${(str[0].toUpperCase() + str.slice(1))} `));
    return newStr.trim();

    // console.log(string && string[0].toUpperCase() + string.slice(1));
    console.log(string.charAt(0).toUpperCase() + string.slice(1));

};

// console.log(capitalizeFirstLetter("how can mirrors be real if our eyes aren't real"));

// subStrs.forEach(s => (newStr += ' ' + s[0].toUpperCase() + s.slice(1)));
// console.log(newStr, typeof (newStr) === 'string');

// for (let i = 0; i < subStrs.length; i++) {
//     const s = subStrs[i];
//     newStr += ' ' + s.replace(/^./, s[0].toUpperCase());
// };

// const String = function (s) { this.s = s };

String.prototype.toJadenCase = function () {
    this.s = "How can mirrors be real if our eyes aren't real";
    const subStrs = this.s.split(' ');
    let newStr = '';
    subStrs.forEach(s => [(newStr += ' ' + s.replace(/^./, s[0].toUpperCase()))]);
    return newStr.trim();
};

const str = new String();

// console.log(str.toJadenCase());
// console.log(String.prototype.toJadenCase());

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
        for (const { name } of this.potions) {
            if (name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }
        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        const potionIndex = this.potions.findIndex(p => p.name === potionName);
        if (potionIndex === -1) {
            return `Potion ${potionName} is not in inventory!`;
        }
        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        const potionIndex = this.potions.findIndex(p => p.name === oldName);
        if (potionIndex === -1) {
            return `Potion ${oldName} is not in inventory!`;
        }
        this.potions[potionIndex].name = newName;
    },
};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Idast"));

function processCall(recipient, onAvailable, onNotAvailable) {
    const isRecipientAvailable = Math.random() > 0.5;
    if (!isRecipientAvailable) {
        onNotAvailable(recipient);
        return;
    }
    onAvailable(recipient);
}

function takeCall(name) {
    console.log(`Соединяем с ${name}, ожидайте...`);
}
function activateAnsweringMachine(name) {
    console.log(`Абонент ${name} недоступен, оставьте сообщение.`
    );
}

function leaveHoloMessage(name) {
    console.log(`Абонент ${name} недоступен, записываем голограмму.`
    );
}
// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        if (!this.pizzas.includes(pizzaName)) {
            return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
        };
        return onSuccess(pizzaName);
    },
};

function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
    return `Error! ${error}`;
}

// Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

{
    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;

        for (let i = 0; i < orderedItems.length; i += 1) {
            totalPrice += orderedItems[i];
        }

        return totalPrice;
    }

    function calculateTotalPriceFE(orderedItems) {
        let totalPrice = 0;

        orderedItems.forEach(el => totalPrice += el)
        return totalPrice;
    }

    // console.log(calculateTotalPrice([164, 48, 291]))
    // console.log(calculateTotalPriceFE([164, 48, 291]))
}

{
    function filterArray(numbers, value) {
        const newNumbers = [];

        numbers.forEach(el => {
            if (el > value)
                newNumbers.push(el);
        })
        return newNumbers;
    };
    // console.log(filterArray([1, 24, 8, 41, 76], 38));

    function getCommonElements(firstArray, secondArray) {
        const commonElements = [];

        firstArray.forEach(el => {
            if (secondArray.includes(el)) commonElements.push(el)
        });
        return commonElements;
    };
    // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

    const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
    // console.log(calculateTotalPrice(31, 40));

    const getTotalPrice = (orderedItems) => {
        let totalPrice = 0;
        const sumPrice = (price) => totalPrice += price;

        orderedItems.forEach(sumPrice);

        return totalPrice;
    };
    // console.log(getTotalPrice([412, 371, 94, 63, 176]));

    const filterArrayArrow = (numbers, value) => {
        const filterredArray = [];
        numbers.forEach(n => { if (n > value) filterredArray.push(n) })
        return filterredArray;
    };
    // console.log(filterArrayArrow([12, 24, 8, 41, 76], 20));
}

{
    function getCommonElements(firstArray, secondArray) {
        const commonArray = [];

        firstArray.forEach(el => {
            if (secondArray.includes(el))
                commonArray.push(el);
        })
        return commonArray;
    };
    // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;

        // const sumPrice = price => totalPrice += price;
        // orderedItems.forEach(sumPrice);

        orderedItems.forEach(item => totalPrice += item)

        return totalPrice;
    };
    // console.log((calculateTotalPrice([412, 371, 94, 63, 176])));

    const filterArray = (numbers, value) => {
        const filteredNumbers = [];
        numbers.forEach(number => { if (number > value) filteredNumbers.push(number) });
        return filteredNumbers;
    };
    // console.log(filterArray([12, 24, 8, 41, 76], 38));
}

{
    const getCommonElements = (firstArray, secondArray) => {
        const commonElements = [];

        firstArray.forEach(el => {
            if (secondArray.includes(el)) { commonElements.push(el) };
        });
        return commonElements;
    };
    // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

    const changeEven = (numbers, value) => {
        const newNumbers = [];

        numbers.forEach(el => {
            if (el % 2 === 0) newNumbers.push(value + el);
            newNumbers.push(el);
        });
        return newNumbers;
    };
    // console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
}

const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
        genres: ["adventure", "history"],
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
        genres: ["fiction"],
    },
    {
        title: "Redder Than Blood",
        author: "Tanith Lee",
        rating: 7.94,
        genres: ["mysticism"],
    },
    {
        title: "The Dreams in the Witch House",
        author: "Howard Lovecraft",
        rating: 8.67,
    },
];


{  /**   map  && flatMap    */
    const planets = ["Earth", "Mars", "Venus", "Jupiter"];
    const planetsLengths = planets.map(pl => pl.length);
    // console.log(planetsLengths);


    const titles = books.map(b => b.title);
    // console.log(titles);

    const genres = books.flatMap(b => b.genres);
    // console.log(genres);
}

const users = [
    { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, skills: ["ipsum", "lorem"], gender: "male", age: 37, balance: 2811, gender: "male" },
    { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, skills: ["tempor", "mollit", "commodo", "veniam", "laborum"], gender: "female", age: 34, balance: 3821, gender: "female" },
    { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, skills: ["nulla", "anim", "proident", "ipsum", "elit"], gender: "male", age: 24, balance: 3793, gender: "male" },
    { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, skills: ["adipisicing", "irure", "velit"], gender: "female", age: 21, balance: 2278, gender: "female" },
    { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong"], isActive: true, balance: 3951, skills: ["ex", "culpa", "nostrud"], gender: "male", age: 27, balance: 3951, gender: "male" },
    { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman"], isActive: false, balance: 1498, skills: ["non", "amet", "ipsum"], gender: "male", age: 38, balance: 1498, gender: "male" },
    { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, skills: ["lorem", "veniam", "culpa"], gender: "female", age: 39, balance: 2764, gender: "female" },
];

{
    const getUserNames = users => {
        return users.map(u => u.name);
    };
    // console.log(getUserNames(users));

    const getUserEmails = users => {
        return users.map(u => u.email);
    };
    // console.log(getUserEmails(users));
}


{
    /**   filter && find */

    const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

    const evenNumbers = numbers.filter(n => n % 2 === 0);
    const oddNumbers = numbers.filter(n => n % 2 !== 0);

    // console.log(evenNumbers);
    // console.log(oddNumbers);

    const MIN_RATING = 8;
    const AUTHOR = "Bernard Cornwell";

    const topRatedBooks = books.filter(b => b.rating >= MIN_RATING);
    const booksByAuthor = books.filter(b => b.author === AUTHOR);
    // console.log(topRatedBooks);
    // console.log(booksByAuthor);

    const LOW_SCORE = 50;
    const HIGH_SCORE = 80;
    const students = [
        { name: "Mango", score: 83 },
        { name: "Poly", score: 59 },
        { name: "Ajax", score: 37 },
        { name: "Kiwi", score: 94 },
        { name: "Houston", score: 64 },
    ];
    const best = students.filter(student => student.score >= HIGH_SCORE);
    // console.log(best); // Массив объектов с именами Mango и Kiwi 
    const worst = students.filter(student => student.score < LOW_SCORE);
    // console.log(worst); // Массив с одним объектом Ajax 
    // В коллбек-функции удобно деструктуризировать свойства объекта 
    const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
    // console.log(average);

    const allCourses = students.flatMap(student => student.courses);
    const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

    // console.log(uniqueCourses);

    const allGenres = books.flatMap(b => b.genres);
    const uniqueGenres = allGenres.filter((el, idx, array) => array.indexOf(el) === idx);

    // console.log(uniqueGenres);

    const getUsersWithEyeColor = (users, color) => {
        return users.filter(u => u.eyeColor === color);
    };
    // console.log(getUsersWithEyeColor(users, 'blue'))

    const getUsersWithAge = (users, minAge, maxAge) => {
        return users.filter(u => u.age > minAge && u.age < maxAge);
    };
    // console.log(getUsersWithAge(users, 20, 30));

    const getUsersWithFriend = (users, friendName) => {
        return users.filter(u => u.friends.includes(friendName));
    };
    // console.log(getUsersWithFriend(users, "Briana Decker"));

    const getFriends = (users) => {
        return users.flatMap(u => u.friends).filter((f, idx, frs) => frs.indexOf(f) === idx);
    };
    // console.log(getFriends(users));

    const getActiveUsers = (users) => {
        return users.filter(u => u.isActive === true);
    };
    // console.log(getActiveUsers(users));

    {
        const BOOK_TITLE = 'The Dream of a Ridiculous Man';
        const AUTHOR = 'Robert Sheckley';

        const bookWithTitle = books.find(b => b.title === BOOK_TITLE);
        const bookByAuthor = books.find(b => b.author === AUTHOR);
        // console.log(bookWithTitle, bookByAuthor);
    }

    {
        const getUserWithEmail = (users, email) => {
            return users.find(u => u.email === email);
        };
        // console.log(getUserWithEmail(users, "elmahead@omatom.com"));
    }

    const firstArray = [26, 94, 36, 18];
    const secondArray = [17, 61, 23];
    const thirdArray = [17, 26, 94, 61, 36, 23, 18];

    const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
    const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

    const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
    const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

    const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
    const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);


    const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
    const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

    const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
    const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

    const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
    const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

    // console.log(eachElementInFirstIsEven, eachElementInFirstIsOdd, eachElementInSecondIsEven, eachElementInSecondIsOdd, eachElementInThirdIsEven, eachElementInThirdIsOdd)
    // console.log(anyElementInFirstIsEven, anyElementInFirstIsOdd, anyElementInSecondIsEven, anyElementInSecondIsOdd, anyElementInThirdIsEven, anyElementInThirdIsOdd);

    const isEveryUserActive = (users) => {
        return users.every(u => u.isActive === true);
    };
    // console.log(isEveryUserActive(users));

    const isAnyUserActive = users => {
        return users.some(u => u.isActive === true);
    };
    // console.log(isAnyUserActive(users));

    /**    reduce()     */

    const players = [
        { name: "Mango", playtime: 1270, gamesPlayed: 4 },
        { name: "Poly", playtime: 469, gamesPlayed: 2 },
        { name: "Ajax", playtime: 690, gamesPlayed: 3 },
        { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
    ];

    const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
        return acc + player.playtime / player.gamesPlayed;
    }, 0);
    // console.log(totalAveragePlaytimePerGame);

    const calculateTotalBalance = users => {
        return users.reduce((acc, user) => {
            return acc + user.balance;
        }, 0);
    };
    // console.log(calculateTotalBalance(users));

    const getTotalFriendCount = arr => {
        return arr.reduce((acc, { friends }) => {
            return acc + friends.length;
        }, 0);
    };
    // console.log(getTotalFriendCount(users));

    /**    sort()     */

    const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

    const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
    const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

    // console.log(ascendingReleaseDates);
    // console.log(descendingReleaseDates);

    const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Howard Lovecraft"];

    const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
    const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

    // console.log(authorsInAlphabetOrder);
    // console.log(authorsInReversedOrder);

    const sortedByAuthorName = [...books].sort((fArr, sArr) => fArr.author.localeCompare(sArr.author));
    const sortedByReversedAuthorName = [...books].sort((fArr, sArr) => sArr.author.localeCompare(fArr.author));
    const sortedByAscendingRating = [...books].sort((fArr, sArr) => fArr.rating - sArr.rating);
    const sortedByDescentingRating = [...books].sort((fArr, sArr) => sArr.rating - fArr.rating);

    // console.log(sortedByAuthorName);
    // console.log(sortedByReversedAuthorName);
    // console.log(sortedByAscendingRating);
    // console.log(sortedByDescentingRating);

    const sortByAscendingBalance = users => {
        return [...users].sort((aArr, bArr) => aArr.balance - bArr.balance);
    };
    // console.log(sortByAscendingBalance(users));

    const sortByDescendingFriendCount = users => {
        return [...users].sort((aArr, bArr) => bArr.friends.length - aArr.friends.length);
    };
    // console.log(sortByDescendingFriendCount(users));

    const sortByName = users => {
        return [...users].sort((aArr, bArr) => aArr.name.localeCompare(bArr.name));
    };
    // console.log(sortByName(users));

    const MIN_BOOK_RATING = 8;
    const names = [...books].filter(({ rating }) => rating > MIN_BOOK_RATING).map(({ author }) => author).sort((a, b) => a.localeCompare(b));

    // console.log(names);

    const getNamesSortedByFriendCount = users => {
        // return [...users].sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);
    };
    // console.log(getNamesSortedByFriendCount(users));

    const getSortedFriends = users => {
        return [...users].flatMap(({ friends }) => friends).filter((el, idx, arr) => arr.indexOf(el) === idx).sort((a, b) => a.localeCompare(b));
    };
    // console.log(getSortedFriends(users));

    const getTotalBalanceByGender = (arr, gender) => {
        return arr.filter(el => el.gender === gender).reduce((acc, { balance }) => {
            return acc + balance;
        }, 0);
    };
    // console.log(getTotalBalanceByGender(users, 'female'));
}