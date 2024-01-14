function printWordToScreen() {
    const somewords = "This is an example."
    console.log(somewords)
};
printWordToScreen();

function helloWorld() {
    const str = "Hello World!";
    console.log(str);
};
helloWorld();

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
console.log(bmi(61.2, 1.8));

/**  Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
 Input will always be valid, i.e. no negative integers. */

const countSheep = function (num) {
    let message = '';
    for (let i = 1; i <= num; i++) {
        message += `${i} sheep...`
    }
    return message;
};

console.log(countSheep(3));

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
console.log(summation(5));

/**  Can you find the needle in the haystack?
Write a function findNeedle() that takes an array full of junk but containing one "needle"
After your function finds the needle it should return a message (as a string) that says:
"found the needle at position " plus the index it found the needle */

function findNeedle(haystack) {
    const idx = haystack.indexOf('needle');
    return idx === -1 ? 'nothing`s found' : `found the needle at position ${idx}`;
};
console.log(findNeedle(['123124234', undefined, 'world', 'hay', 2, '3', true, 'needle', false]));

/**  Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times. */

function repeatStr(n, s) {
    let result = '';

    for (let i = 1; i <= n; i++) {
        result += s;
    };
    return result;
};
console.log(repeatStr(4, 'ter'));

