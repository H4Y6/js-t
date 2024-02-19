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

        // const array = [];
        // let arrayLength = 0;

        // for (let i = 1; i <= n; i++) {
        //     arrayLength += i;
        // }

        // for (let i = 0; i < arrayLength; i++) {
        //     const element = i * 2 + 1;
        //     array.push(element);
        // }
        // return array.slice(-n).reduce((sum, num) => sum + num, 0);
    }
    // console.log(rowSumOddNumbers(4));
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

// console.log(sum([4, 5, 6, 7, 8, 9, 10, 11])); 4 * 15;
// console.log(4 * 15); 

{  /*
    Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.          */

    function getGrade(s1, s2, s3) {
        const averageScore = (s1 + s2 + s3) / 3;

        return averageScore < 60 ? 'F' : averageScore < 70 ? 'D' : averageScore < 80 ? 'C' : averageScore < 90 ? 'B' : 'A';

        // switch (true) {
        //     case averageScore < 60:
        //         return 'F';
        //     case averageScore < 70:
        //         return 'D';
        //     case averageScore < 80:
        //         return 'C';
        //     case averageScore <= 90:
        //         return 'B';

        //     default: return 'A';
        // }
    }
    // console.log(getGrade(92, 87, 94));
}

{/*After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).    */

    // const rentalCarCost = (d) => d < 3 ? 40 * d : d < 7 ? 40 * d - 20 : 40 * d - 50;
    const rentalCarCost = d => 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0);
    // const rentalCarCost = d => { d > 6 ? d -= 50 / 40 : d > 2 ? d -= 20 / 40 : d; return 40 * d; };
    // console.log(rentalCarCost(7));
}

{
    function makeUpperCase(str) {
        return str.toUpperCase();
    }
    // console.log(makeUpperCase("Hello"));
}

{/*  The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task=> Given a year, return the century it is in. */

    function century(year) {
        return Math.ceil(year / 100);
    }
    // console.log(century(1));
}

{ /*Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.*/

    const quarterOf = month => Math.ceil(month / 3);
    // const quarterOf = month => month > 9 ? 4 : month > 6 ? 3 : month > 3 ? 2 : 1;
    // const quarterOf = month => month % 3 !== 0 ? parseInt(month / 3) + 1 : month / 3;

    // const quarterOf = month => {
    //     switch (month) {
    //         case 1:
    //         case 2:
    //         case 3:
    //             return 1;

    //         case 4:
    //         case 5:
    //         case 6:
    //             return 2;

    //         case 7:
    //         case 8:
    //         case 9:
    //             return 3;

    //         default: return 4;
    //     }
    // };

    // const quarterArray = [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9],
    //     [10, 11, 12],
    // ];
    // const quarterOf = (month) => 1 + quarterArray.findIndex((quarter) => quarter.includes(month));
    // console.log(quarterOf(11));
}

{  /*  There is a bus moving in the city which takes and drops some people at each bus stop.
You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.
Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.   */


    var number = busStops => busStops.reduce((acc, busStop) => acc + busStop[0] - busStop[1], 0);

    // console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));

}

{   /*  Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.   */

    const sumArray = array => array ? [...array].sort((a, b) => a - b).slice(1, -1).reduce((sum, n) => sum + n, 0) : 0;
    // const sumArray = array => array && array.length > 1 ? array.reduce((sum, n) => sum + n, 0) - Math.min(...array) - Math.max(...array) : 0;
    // const sumArray = array => Array.isArray(array) && array.length > 1 ? array.reduce((sum, n) => sum + n, 0) - Math.min(...array) - Math.max(...array) : 0;

    // console.log(sumArray([2, 1, 3]));
}

{  /*  Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.  */

    // function correct(string) {
    //     const newOString = string.replaceAll(0, 'O');
    //     const newOSString = newOString.replaceAll(5, 'S');
    //     const newOSIString = newOSString.replaceAll('1', 'I');
    //     return newOSIString;
    // }

    // const correct = string => string.replaceAll(0, 'O').replaceAll(5, 'S').replaceAll(1, 'I');
    const correct = string => string.replace(/\d/g, a => 'OI   S'[a]);
    // const correct = string => string.replaceAll(/0/g, 'O').replaceAll(/5/g, 'S').replaceAll(/1/g, 'I');
    // const correct = (string) => [...string].map(el => ({ '0': 'O', '1': 'I', '5': 'S' })[el] || el).join('');

    // console.log(correct("L0ND0N"));
    // console.log(correct("DUBL1N"));
    // console.log(correct("51NGAP0RE"));
}

{  /*  You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
For example, when the input is green, output should be yellow.  */

    // const updateLight = current => { return { 'red': 'green', 'green': 'yellow', 'yellow': 'red', }[current]; };
    const updateLight = current => ({ 'red': 'green', 'green': 'yellow', 'yellow': 'red', }[current]);
    // const updateLight = current => current === 'red' ? 'green' : current === 'green' ? 'yellow' : 'red';

    // function updateLight(current) {
    //     switch (current) {
    //         case 'red':
    //             return 'green';

    //         case 'yellow':
    //             return 'red';

    //         default: return 'yellow';
    //     }
    // };

    // function updateLight(current) {
    //     const colors = ['red', 'green', 'yellow',];
    //     return colors[colors.indexOf(current) + 1] ?? colors[0];
    // }

    // console.log(updateLight("yellow"));
}

{  /*  Kata Task
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that  */

    const humanYearsCatYearsDogYears = humanYears => {
        const ages = [humanYears];
        ages[1] = (humanYears - 2) * 4 + 24;
        ages[2] = ages[1] + humanYears - 2;
        // return --humanYears ? ages : [1, 15, 15];
        return humanYears > 1 ? ages : [1, 15, 15];
    };
    // console.log(humanYearsCatYearsDogYears(10));
}

{  /*  The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("   */

    function duplicateEncode(word) {
        let string = '';
        const w = word.toLowerCase();
        for (let i = 0; i < w.length; i++) {
            string += w.indexOf(w[i]) === w.lastIndexOf(w[i]) ? '(' : ')';
            // string += (w.slice(0, i) + w.slice(i + 1)).includes(w.slice(i, i + 1)) ? ')' : '(';
        }
        return string;
    }
    // const duplicateEncode = w => w.replace(/./g, c => (new RegExp(`([${c}]).*\\1`, 'gi')).test(w) ? ')' : '(');

    // console.log(duplicateEncode('Success'));
}

{  /*  Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)  */

    function persistence(num, n = 0) {
        // if (num.toString().length < 2) return n;
        if (num < 10) return n;
        n++;
        // num = [...num.toString()].reduce((acc, el) => acc * el, 1);
        num = [...num + ''].reduce((acc, el) => acc * el, 1);
        return persistence(num, n);
    }

    // const persistence = num => {
    // for (let i = 0; 9 < num; i++) {
    // [...num.toString()].reduce((acc, el) => acc * el, 1);
    // [...num + ''].reduce((acc, el) => acc * el, 1);
    // }
    // return i;
    // };
    console.log(persistence(999));
}

{
    // function countDown(n) {
    //     for (let i = n; i > 0; i -= 1) {
    //         console.log(i);
    //     }
    //     console.log('Ok!');
    // }

    function countDown(n) {

        if (n < 1) {
            console.log("OK!");
            return;
        }
        console.log(n);
        countDown(n - 1);
    }
    // countDown(4);

    function sumRange(n, total = 0) {
        if (n < 1) return total;
        return sumRange(n - 1, total + n);

    }
    // console.log(sumRange(5));


    const tree = {
        name: 'John',
        children: [
            {
                name: 'Jim',
                children: []
            },
            {
                name: 'Zoe',
                children: [
                    { name: 'Kyle', children: [], },
                    { name: 'Sofia', children: [] }
                ],
            },
        ],

    };
    function printChildren(t) {
        if (t.children.length === 0) { return; }

        t.children.forEach((child) => {
            console.log(child.name);
            printChildren(child);
        });
    }


    // printChildren(tree);

    function factorial(n, result = 1) {
        if (n < 1) {
            return result;
        }
        return factorial(n - 1, result *= n);
    }
    // console.log(factorial(5));

    const sumRangeA = (n, total = 0) => {
        if (n < 1) {
            return total;
        }
        return sumRangeA(n - 1, total += n);
    };
    // console.log(sumRangeA(6));
}

{
    function countDown(n) {
        const result = [];
        for (let i = n; i > 0; i--) {
            result.push(i);
        }
        return result;
    }
    // console.log(...countDown(4));

    const countDownR = (n, result) => {
        if (n < 1) {
            console.log('OK!');
            return;
        } {
            result.push(n);
            countDownR(n - 1, result);
        }
        return result;
    };
    // console.log(countDownR(7, []));

    function sumRange(n) {
        let total = 0;

        for (let i = n; i > 0; i--) {
            total += i;
        }
        return total;
    }
    // console.log(sumRange(4));

    function sumRangeR(n, total = 0) {
        if (n < 1) {
            return total;
        }
        return sumRangeR(n - 1, total + n);
    }
    // console.log(sumRangeR(4));

    const factorial = (n) => {
        // if (n < 2) { return n; }
        // const result = factorial((n - 1)) * n;
        // return result;
        return n < 2 ? n : factorial(n - 1) * n;
    };
    // console.log(factorial(4));

    const pow = (a, n) => {
        // if (n <= -2) return 1 / (a / pow(a, n + 1));
        // if (n === -1) return 1 / a;
        // if (n === 0) return 1;
        // if (n < 2) return a;
        // return a * pow(a, n - 1);
        return n <= -2 ? 1 / (a / pow(a, n + 1)) : n === -1 ? 1 / a : n === 0 ? 1 : n < 2 ? a : a * pow(a, n - 1);
    };
    // console.log(pow(10, 3));
}