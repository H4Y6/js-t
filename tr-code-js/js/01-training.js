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
    console.log(filterArrayArrow([12, 24, 8, 41, 76], 20));
}
