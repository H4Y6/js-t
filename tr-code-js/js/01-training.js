/**  There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, null. */

function printWordToScreen() {
    const somewords = "This is an example.";
    console.log(somewords);
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
        message += `${i} sheep...`;
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
    const num = Math.sqrt(sq);
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
        return `0/${[s.length]}`;
    } else {
        // console.log(s.match(/[n-z]/g));
        // console.log(s.match(/[n-z]/));
        const errorRate = s.match(/[n-z]/gi).length;
        return `${errorRate}/${[s.length]}`;
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
    descendingArray.forEach(el => { el.toString(); str += el; });
    return Number(str);
};

function descendingOrderA(n) {
    const stringArray = (n.toString().split(''));
    stringArray.sort().reverse();

    let string = '';
    stringArray.forEach(el => { el.toString(); string += el; });
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

String.prototype.toJadenCase = function (s) {
    this.s = s;
    const subStrs = this.s.split(' ');
    let newStr = '';
    subStrs.forEach(s => [(newStr += ' ' + s.replace(/^./, s[0].toUpperCase()))]);
    return newStr.trim();
};

const str = new String();

console.log(str.toJadenCase("How can mirrors be real if our eyes aren't real"));
// console.log(String.prototype.toJadenCase());


// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 .;


function squareSum(numbers) {
    // let sum = 0;
    // numbers.map(n => sum += Math.pow(n, 2));
    // return sum;

    return numbers.reduce((sum, n) => sum + n ** 2, 0);

    // return numbers.reduce((sum, n) => sum + n * n, 0);
}
// console.log(squareSum([1, 2, 2]));


// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

{
    function filter_list(l) {
        // return l.filter(n => typeof (n) === 'number');
        return l.filter(n => n === +n);
    }
    // console.log(filter_list([1, 2, 'a', 'b']));
}
{
    class Car {
        static description() {
            ' car instance';
        }

        #price;

        constructor({ brand, model, price } = {}) {
            this.brand = brand;
            this.model = model;
            this.#price = price;
        }

        get price() {
            return this.#price;
        }

        set price(newPrice) {
            this.#price = newPrice;
        }
    }

    const car = new Car({
        brand: 'Audi',
        model: 'A5',
        price: 33000,
    });

    // console.log(car.__proto__ === Car.prototype);

    car.price = (34000);
    // console.log('car ->', car);
    // console.log('car.price->', car.price);
}

{
    class User {
        email;

        constructor(email) {
            this.email = email;
        }

        get email() {
            return this.email;
        }

        set email(newEmail) {
            this.email = newEmail;
        }
    }
    class Admin extends User {
        blacklistedEmails = [];

        blacklist(email) {
            this.blacklistedEmails.push(email);
        }

        isBlacklisted(email) {
            return this.blacklistedEmails.includes(email);
        }

        static AccessLevel = {
            BASIC: "basic",
            SUPERUSER: "superuser",
        };

        constructor({ email, accessLevel }) {
            super(email);
            this.accessLevel = accessLevel;
        }

        // Change code above this line
    }

    const mango = new Admin({
        email: "mango@mail.com",
        accessLevel: Admin.AccessLevel.SUPERUSER,
    });
}

{
    class Storage {
        constructor(items) {
            this.items = items;
        }

        getItems() {
            return this.items;
        }

        addItem(newItem) {
            this.items.push(newItem);
        }
        removeItem(itemToRemove) {
            this.items.splice(items.indexOf(itemToRemove), 1);
        }
    }
}

{
    class StringBuilder {
        #value;

        constructor(initialValue = '') {

            this.#value = initialValue;
        }

        getValue() {
            return this.#value;
        }

        padEnd(str) {
            return this.#value += str;
        }

        padStart(str) {
            this.#value = str + this.#value;
            // this.#value = [str, #this.value].join('');
        }

        padBoth(str) {
            this.#value = str + this.padEnd(str);
            // this.#value = [str, this.padEnd(str)].join('');
        }
    }

    // const builder = new StringBuilder("."); console.log('builder ->', builder);
    // builder.padEnd('^');            /* */   console.log('builder ->', builder);
    // builder.padStart('^');          /* */   console.log('builder ->', builder);
    // builder.padBoth('=');           /* */   console.log('builder ->', builder); console.log(builder.getValue());
}

{
    class Car {
        #brand;

        constructor({ brand, model, price }) {
            this.#brand = brand;
            this.model = model;
            this.price = price;
        }

        getBrand() {
            return this.#brand;
        };

        changeBrand(newBrand) {
            this.#brand = newBrand;
        }
    }
}

{
    class User {
        static Roles = { ADMIN: "admin", EDITOR: "editor", };
        #email;
        #role;

        constructor({ email, role }) {
            this.#email = email;
            this.#role = role;
        }
        get role() {
            return this.#role;
        }

        set role(newRole) {
            this.#role = newRole;
        }
    }

    const mango = new User({ email: "mango@mail.com", role: User.Roles.ADMIN, });
    // console.log(mango.Roles); // undefined 
    // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }
    // console.log(mango.role); // "admin"
    mango.role = User.Roles.EDITOR;
    // console.log(mango.role); /** "editor" */
}

{
    class Car {
        #brand;
        #model;
        #price;

        static MAX_PRICE = 50000;

        constructor({ brand, model, price }) {
            this.#brand = brand;
            this.#model = model;
            this.#price = price;
            this.maxPrice = Car.MAX_PRICE;
        }

        get brand() {
            return this.#brand;
        };

        set brand(newBrand) {
            this.#brand = newBrand;
        }

        get model() {
            return this.#model;
        }

        set model(newModel) {
            this.#model = newModel;
        }

        get price() {
            return this.#price;
        }

        set price(newPrice) {
            if (newPrice > Car.MAX_PRICE) { return "Expensive!"; } else { this.#price = newPrice; }
        }
    }
    const bmw = new Car({ brand: 'bmw', model: 'H3', price: 35000 });
    console.log(bmw.price);
    bmw.price = 55555;

    console.log('bmw ->', bmw);
}

{
    class Car {
        static #MAX_PRICE = 50000;
        static checkPrice(price) {
            return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
        }

        constructor({ price }) {
            this.price = price;
        }
    }

    const audi = new Car({ price: 36000 });
    const bmw = new Car({ price: 64000 });

    // console.log(Car.checkPrice(audi.price));    // "Success! Price is within acceptable limits"
    // console.log(Car.checkPrice(bmw.price));     // "Error! Price exceeds the maximum"

}

{
    class Storage {
        #items;

        constructor(items) {
            this.#items = items;
        }

        getItems() {
            return this.#items;
        }

        addItem(newItem) {
            this.#items.push(newItem);
        }

        removeItem(itemToRemove) {
            this.#items = this.#items.filter(item => item !== itemToRemove);
        }
    }


    const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
    // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
    storage.addItem("Droid");
    // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
    storage.removeItem("Prolonger");
    // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
}

{
    class User {
        // email;

        constructor(email) {
            this.email = email;
        }

        get _email() {
            return this.email;
        }

        set _email(newEmail) {
            this.email = newEmail;
        }
    }

    class Admin extends User {

        blacklistedEmails = [];


        static AccessLevel = {
            BASIC: "basic",
            SUPERUSER: "superuser",
        };

        constructor({ email, accessLevel }) {
            super(email);
            this.accessLevel = accessLevel;
        }

        blacklist(email) {
            this.blacklistedEmails.push(email);
        }

        isBlacklisted(email) {
            return this.blacklistedEmails.includes(email);
        }
    }

    const mango = new Admin({
        email: "mango@mail.com",
        accessLevel: Admin.AccessLevel.SUPERUSER,
    });

    console.log(mango.email); // "mango@mail.com"
    console.log(mango.accessLevel); // "superuser"

    mango.blacklist("poly@mail.com");
    console.log(mango.blacklistedEmails); // ["poly@mail.com"]
    console.log(mango.isBlacklisted("mango@mail.com")); // false
    console.log(mango.isBlacklisted("poly@mail.com")); // true

}