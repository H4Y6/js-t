{/**  6 kyu  Array.diff 
 Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]               */

  function arrayDiff(a, b) {
    // return a.filter(e => b.indexOf(e) < 0);
    // return a.filter(e => b.indexOf(e) === -1);
    return a.filter(e => !b.includes(e));

    // let arr = [...a];
    // b.map(e => arr = arr.filter(el => el !== e));
    // return arr;
  };
  // console.log(arrayDiff([1, 2, 2, 3], [3, 1]));
}

{/** 6 kyu  Who likes it? 
 You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.       */


  function likes(names) {
    switch (names.length) {
      case 0: return "no one likes this";
      case 1: return `${names[0]} likes this`;
      case 2: return `${names[0]} and ${names[1]} like this`;
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }

  // console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
}

{/**6 kyu  Replace With Alphabet Position 
Welcome.
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )    */

  function alphabetPosition(text) {
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // return [...text].filter(e => e == e.match(/[a-z]/i)).map(e => 1 + (alphabet.includes(e) ? alphabet.indexOf(e) : alphabet.indexOf(e.toLowerCase()))).join(' ');
    return [...text.replace(/[^a-z]/gi, '').toUpperCase()].map(e => e.charCodeAt() - 64).join(' ');

    // const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // return [...text].filter(e => e == e.match(/[a-z]/i))
    //   .map(e => { return alphabet.includes(e) ? alphabet.indexOf(e) + 1 : alphabet.indexOf(e.toLowerCase()) + 1; }).join(' ');
  }
  // console.log(alphabetPosition("The narwhal bacons at midnight."));
  // console.log('A'.charCodeAt());
}

{  /**  8 kyu   Is it even? 
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.    */

  function testEven(n) {
    return !(n % 2);
    // return (n % 1 > 0) ? false : n % 2 !== 0 ? false : true;
  }
  // console.log(testEven(7));
}

{  /**8 kyu  Welcome!  
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]
Possible invalid inputs include:

IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied          */

  function greet(language) {
    // switch (language) {
    //   case 'czech': return "Vitejte";
    //   case 'danish': return "Velkomst";
    //   case 'dutch': return "Welkom";
    //   case 'estonian': return "Tere tulemast";
    //   case 'finnish': return "Tervetuloa";
    //   case 'flemish': return "Welgekomen";
    //   case 'french': return "Bienvenue";
    //   case 'german': return "Willkommen";
    //   case 'irish': return "Failte";
    //   case 'italian': return "Benvenuto";
    //   case 'latvian': return "Gaidits";
    //   case 'lithuanian': return "Laukiamas";
    //   case 'polish': return "Witamy";
    //   case 'spanish': return "Bienvenido";
    //   case 'swedish': return "Valkommen";
    //   case 'welsh': return "Croeso";

    //   default: return 'Welcome';
    // }

    const data = [
      ["english", "Welcome"],
      ["czech", "Vitejte"],
      ["danish", "Velkomst"],
      ["dutch", "Welkom"],
      ["estonian", "Tere tulemast"],
      ["finnish", "Tervetuloa"],
      ["flemish", "Welgekomen"],
      ["french", "Bienvenue"],
      ["german", "Willkommen"],
      ["irish", "Failte"],
      ["italian", "Benvenuto"],
      ["latvian", "Gaidits"],
      ["lithuanian", "Laukiamas"],
      ["polish", "Witamy"],
      ["spanish", "Bienvenido"],
      ["swedish", "Valkommen"],
      ["welsh", "Croeso"]
    ];
    return (data.map((e) => (e[0] === language) ? e[1] : 0).filter(e => e)[0]) || 'Welcome';
  }

  // console.log(greet('IP_ADDRESS_INVALID'));
  // console.log(greet('german'));
}

{  /**  5 kyu  Rot13 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".                                */

  function rot13(message) {
    return message.replace(/[a-z]/gi, str => String.fromCharCode(str.charCodeAt() + (/[a-m]/i.test(str) ? 13 : -13)));

    /**  RegExp.prototype.test() -->  Метод test() в JavaScript виконує пошук з використанням регулярного виразу для відповідності між регулярним виразом та вказаним рядком.  Він повертає true, якщо є відповідність, і false в іншому випадку.    */

    // return message.replace(/[a-z]/gi, str => String.fromCharCode(str.charCodeAt(0) + (str.toLowerCase() < 'n' ? 13 : -13)));

    // const codes = [...message].map(e => e.charCodeAt()).map(cc => ((cc > 64 && cc < 78) || (cc > 96 && cc < 110)) ? cc += 13 : ((cc > 77 && cc < 91) || (cc > 109 && cc < 123)) ? cc -= 13 : cc);
    // return String.fromCharCode(...codes);

    // const codes = [...message].map(e => e.charCodeAt());
    // const codesCoded = codes.map(cc => {
    //   if ((cc > 64 && cc < 78) || (cc > 96 && cc < 110)) { return cc += 13; };
    //   if ((cc > 77 && cc < 91) || (cc > 109 && cc < 123)) { return cc -= 13; };
    //   return cc;
    // });

    // const codes = [...message].map(e => e.charCodeAt());
    // const codesCoded = codes.map(cc => ((cc > 64 && cc < 78) || (cc > 96 && cc < 110)) ? cc += 13 : ((cc > 77 && cc < 91) || (cc > 109 && cc < 123)) ? cc -= 13 : cc);
    // const stringCoded = String.fromCharCode(...codesCoded);
    // return stringCoded;

    // console.log("🌟".charCodeAt(), "🌟".charCodeAt(1), "🌟".codePointAt(), ".".charCodeAt(), "A".charCodeAt(), "a".charCodeAt(),);
  }
  // console.log(rot13('The quick brown fox jumps over the lazy dog.'));  /**  Gur dhvpx oebja sbk whzcf bire gur ynml qbt. */
  // console.log(rot13("test"));  /**  Grfg */
}

{  /**  6 kyu  Build Tower  
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]                                   */

  function towerBuilder(nFloors) {
    return [...Array(nFloors)].map((_, i) => ' '.repeat(nFloors - 1 - i) + '*'.repeat(2 * i + 1) + ' '.repeat(nFloors - 1 - i));

    // const res = [];
    // for (let i = 0; i < nFloors; i++) {
    //   res.push(' '.repeat(nFloors - 1 - i) + '*'.repeat(1 + 2 * i) + ' '.repeat(nFloors - 1 - i));
    // }
    // return res;

    // let codes = [];
    // const ws = '32';
    // let wsCodes = [];
    // for (let j = 1; j < nFloors; j++) {
    //   wsCodes.push(ws);
    // }
    // const res = [];
    // let str = '';
    // const code = '42';
    // codes = ([...wsCodes, code, ...wsCodes]);
    // str = String.fromCharCode(...codes);

    // res.push(str);

    // for (let i = 1; i < nFloors; i++) {
    //   str = String.fromCharCode(...codes);
    //   codes.splice(0, 1);
    //   codes.splice(codes.length - 1, 1);
    //   codes.splice(codes.length / 2, 0, code, code);

    //   str = String.fromCharCode(...codes);

    //   res.push(str);
    // }
    // return res;
  }
  // console.log(towerBuilder(4));
}

{  /**  8 kyu  Reversed Strings  
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'            */

  const solution = str => [...str].reverse().join('');
  // console.log(solution('world'));
}

{  /**  7 kyu  Count the divisors of a number 
Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.  */

  const getDivisorsCnt = (n) => {
    let res = 0;
    for (let i = 1; i <= n / 100; i++) {
      if (n % i === 0) res++;
    }
    for (let j = 99; j > 1; j--) {
      if (n % j === 0) res++;
    }
    return res + 1;
  };
  // console.log(getDivisorsCnt(30));
}

{  /**6 kyu  Find the odd int        
 Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).           */

  function findOdd(A) {
    // return A.find(e => A.filter(el => el === e).length % 2);

    return A.reduce((res, e) => A.filter(el => el === e).length % 2 ? res = e : res, 0);

    // return A.filter((e, i, arr) => arr.indexOf(e) === i).reduce((res, e) => A.filter(el => el === e).length % 2 ? res = e : res, 0);

    // let res = 0;
    // A.filter((e, i, arr) => arr.indexOf(e) === i).map(e => A.filter(el => el === e).length % 2 ? res = e : res);
    // return res;
  }
  // function findOdd(A) {
  //   let res = 0;
  //   const unique = A.filter((e, i, arr) => arr.indexOf(e) === i);
  //   for (let i = 0; i < unique.length; i++) {
  //     if (A.filter(e => e === unique[i]).length % 2 !== 0) res = unique[i];
  //   }
  //   return res;
  // }

  // const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
  // console.log(findOdd([0, 1, 0, 1, 1]));
}

{  /**  8 kyu  How good are you really?  There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!   */

  function betterThanAverage(classPoints, yourPoints) {
    return [...classPoints, yourPoints].reduce((res, e) => res + e, 0) / (classPoints.length + 1) < yourPoints;
  }
  // console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
}

{  /** 8 kyu  Is the string uppercase?   Is the string uppercase?
Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True    */

  String.prototype.isUpperCase = function () {
    return this === this.toUpperCase();
    // return !/[a-z]/g.test(this);
    // return !this.match(/[a-z]/g);
    // return !String(this).match(/[a-z]/g);
    // return String(this) === this.toUpperCase();
  };
  // console.log('ACSKLDFJSSKLDFJSKLDFJ'.isUpperCase());
}

{  /**8 kyu  Convert a String to a Number! 
We need a function that can transform a string into a number. What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7  */

  const stringToNumber = function (str) {
    // return parseInt(str);
    // return Number(str);
    return +str;
    // return eval(str);
  };
  // console.log(stringToNumber("-7"));
}

{  /**8 kyu  Convert a string to an array   
Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]   */

  const stringToArray = (string) => string.split(' ');
  // console.log(stringToArray("Robin Singh"));
}

{  /**8 kyu  Sum The Strings
 Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)    */

  const sumStr = (a, b) => String((+a + +b));
  // const sumStr = (a, b) => (+a + +b).toString();

  // console.log(sumStr(4, 5));
}

{  /**  8 kyu  Reversed sequence Build a function that returns an array of integers from n to 1 where n>0.
Example : n=5 --> [5,4,3,2,1]    */

  const reverseSeq = (n) => {
    return Array.from(Array(n), () => n--);
    // return Array(n).fill().map((_, i) => n - i);
    // return Array(n).fill(n).map((e, i) => e - i);

    // const arr = [];
    // for (let i = 0; i < n; i++) {
    //   const element = i + 1;
    //   arr.push(element);
    // }
    // return arr.reverse();
  };
  // console.log(reverseSeq(5));
}

{  /**  8 kyu  Area or Perimeter 
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
Example(Input1, Input2 --> Output):
6, 10 --> 32
3, 3 --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.  */

  const areaOrPerimeter = function (l, w) {
    // return l - w ? 2 * (l + w) : l * l;
    // return l === w ? l * l : 2 * (l + w);
  };
  // console.log(areaOrPerimeter(3, 3));
  // console.log(areaOrPerimeter(3, 9));
}

{  /**7 kyu  String ends with? 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
Examples:
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false  */

  function solution(str, ending) {
    // return ending ? str.slice(-ending.length) === ending : true;
    // return str.endsWith(ending);
  }
  // console.log(solution('abc', 'abc'));
}

{  /**  5 kyu  Calculating with Functions
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));   */

  // const [
  //   zero, one, two, three, four, five, six, seven, eight, nine,
  // ] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => fn => fn ? fn(e) : e);
  // const [plus, minus, times, dividedBy] = ['+', '-', '*', '/'].map((operator) => (x) => (n) => Math.floor(eval(`${n} ${operator} ${x}`)));

  // const num = n => fn => fn ? fn(n) : n;
  // const zero = num(0),
  //   one = num(1),
  //   two = num(2),
  //   three = num(3),
  //   four = num(4),
  //   five = num(5),
  //   six = num(6),
  //   seven = num(7),
  //   eight = num(8),
  //   nine = num(9);
  // const plus = x => n => n + x,
  //   minus = x => n => n - x,
  //   times = x => n => n * x,
  //   dividedBy = x => n =>  Math.floor(n / x)

  const zero = func => func ? func(0) : 0;
  const one = func => func ? func(1) : 1;
  const two = func => func ? func(2) : 2;
  const three = func => func ? func(3) : 3;
  const four = func => func ? func(4) : 4;
  const five = func => func ? func(5) : 5;
  const six = func => func ? func(6) : 6;
  const seven = func => func ? func(7) : 7;
  const eight = func => func ? func(8) : 8;
  const nine = func => func ? func(9) : 9;
  const plus = n => x => x + n;
  const minus = n => x => x - n;
  const times = n => x => x * n;
  const dividedBy = n => x => Math.floor(x / n);

  // function zero(func) { return func ? func(0) : 0; }
  // function one(func) { return func ? func(1) : 1; }
  // function two(func) { return func ? func(2) : 2; }
  // function three(func) { return func ? func(3) : 3; }
  // function four(func) { return func ? func(4) : 4; }
  // function five(func) { return func ? func(5) : 5; }
  // function six(func) { return func ? func(6) : 6; }
  // function seven(func) { return func ? func(7) : 7; }
  // function eight(func) { return func ? func(8) : 8; }
  // function nine(func) { return func ? func(9) : 9; }
  // function plus(num) { return function (x) { return x + num; }; }
  // function minus(num) { return function (x) { return x - num; }; }
  // function times(num) { return function (x) { return x * num; }; }
  // function dividedBy(num) { return function (x) { return Math.floor(x / num); }; }

  // console.log(seven(times(five())));
  // console.log(six(dividedBy(two())));
}

{  /**  5 kyu  Maximum subarray sum 
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.    */

  const maxSequence = arr => {
    // const results = [];
    // if (arr.every(e => e < 0)) return 0;
    // let sum = 0;
    // arr.forEach(e => {
    //   sum += e;
    //   results.push(sum);

    //   arr = arr.slice(1);
    //   let arrR = arr.reverse();
    //   let sumR = 0;
    //   arrR.forEach(e => {
    //     sumR += e;
    //     results.push(sumR);
    //     arrR = arrR.slice(1);
    //   });
    // });
    // return Math.max(...results);

    let result = 0;
    let current = 0;
    arr.forEach(el => {
      current = Math.max(0, current + el);
      result = Math.max(result, current);
    });
    return result;

    // let result = 0;
    // let current = 0;
    // arr.forEach(el => {
    //   current + el <= 0 ? current = 0 : current += el;
    //   result = Math.max(result, current);
    // });
    // return result;

    // let result = 0;
    // let current = 0;
    // for (const key of arr) {
    //   current + key <= 0 ? current = 0 : current += key;
    //   result = Math.max(result, current);
    // }
    // return result;
  };
  // console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  // console.log(maxSequence([-2, -3, -1, -5]));
  // console.log(maxSequence([]));
  // console.log(maxSequence([-2, -1, 3, 4, 1, 2, 1, 5, -4]));
};

{  /**8 kyu  Grasshopper - Check for factor 
This function should test if the factor is a factor of base.
Return true if it is a factor or false if it is not.
About factors
Factors are numbers you can multiply together to get another number.
2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.        */

  function checkForFactor(base, factor) {
    return !(base % factor);
  }
  // console.log(checkForFactor(24617, 3));
  // console.log(checkForFactor(12, 3));
}

{  /**  6 kyu  Equal Sides Of An Array 
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.
Note: Please remember that in most languages the index of an array starts at 0.

Input
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note
If you are given an array with multiple answers, return the lowest correct index.  */

  function findEvenIndex(arr) {
    let sum = 0;

    const mapSlicetArraySum = (ar, i) => ar.slice(i).map((e, i, ar) => sum += e)[ar.length - 1 - i];

    if (mapSlicetArraySum(arr, 1) === 0) return 0;
    // if (arr.slice(1).map((e, i, arr) => sum += e)[arr.length - 2] === 0) return 0;
    if (arr.slice(0, -1).map((e, i, arr) => sum += e)[arr.length - 2]) return 7;

  }
  // console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
  // console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
  // console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
  // console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
}

{/** 8 kyu  Even or Odd->  Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.  */
  function evenOrOdd(number) {
    return number % 2 ? 'Odd' : 'Even';
  }
  // console.log(evenOrOdd(0));
}

{  /**  5 kyu  Directions Reduction 
Once upon a time, on a way through the old wild mountainous west,…
… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
How I crossed a mountainous desert the smart way.
The directions given to the man are, for example, the following (depending on the language):
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
or
{ "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
or
[North, South, South, East, West, North, West]
You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
["WEST"]
or
{ "WEST" }
or
[West]
Other examples:
In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

Task
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
See more examples in "Sample Tests:"
Notes
Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
if you want to translate, please ask before translating.       */

  function dirReduc(ar) {
    ar.map((_, i, ar) => {
      if (ar[i] === 'NORTH' && ar[i + 1] === 'SOUTH') { ar.splice(i, 2); dirReduc(ar); }
      if (ar[i] === 'SOUTH' && ar[i + 1] === 'NORTH') { ar.splice(i, 2); dirReduc(ar); }
      if (ar[i] === 'EAST' && ar[i + 1] === 'WEST') { ar.splice(i, 2); dirReduc(ar); }
      if (ar[i] === 'WEST' && ar[i + 1] === 'EAST') { ar.splice(i, 2); dirReduc(ar); }
    });
    // ar.forEach((element, i, ar) => {
    //   if (ar[i] === 'NORTH' && ar[i + 1] === 'SOUTH') { ar.splice(i, 2); dirReduc(ar); }
    //   if (ar[i] === 'SOUTH' && ar[i + 1] === 'NORTH') { ar.splice(i, 2); dirReduc(ar); }
    //   if (ar[i] === 'EAST' && ar[i + 1] === 'WEST') { ar.splice(i, 2); dirReduc(ar); }
    //   if (ar[i] === 'WEST' && ar[i + 1] === 'EAST') { ar.splice(i, 2); dirReduc(ar); }
    // });
    return ar;
  }
  // console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
  // console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
  // console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
}

{  /** 7 kyu   Highest and Lowest 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.   */

  function highAndLow(numbers) {
    // return [Math.max(...numbers.split(' ')), Math.min(...numbers.split(' '))].join(' ');
    return Math.max(...numbers.split(' ')) + " " + Math.min(...numbers.split(' '));
    // return [Math.max(...numbers.split(' ').map(e => +e)), Math.min(...numbers.split(' ').map(e => +e))].join(' ');
  }
  // console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
}

{/**  7 kyu  Beginner Series #3 Sum of Numbers  
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.       */

  // const getSum = (a, b) => a === b ? a : a > b ? a + getSum(a - 1, b) : a + getSum(a + 1, b);
  const getSum = (a, b) => (Math.abs(a - b) + 1) * (a + b) / 2;

  // const getSum = (a, b, c = a) => {
  //   if (a > b) { a = b; b = c; }
  //   let res = a;
  //   for (let i = 1; i <= b - a; i++) { res += a + i; }
  //   return res;
  // };

  // const getSum = (a, b) => {
  //   let res = a;
  //   if (a < b) {
  //     for (let i = 1; i <= b - a; i++) {
  //       res += a + i;
  //     }
  //   }
  //   if (a > b) {
  //     for (let i = 1; i <= a - b; i++) {
  //       res += a - i;
  //     }
  //   }
  //   return res;
  // };
  // console.log(getSum(3, 5));
}

{/**  6 kyu  Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""                    */

  // const solution = string => string.replace(/(?=[A-Z])/g, " ");
  // const solution = string => string.replace(/[A-Z]/g, ' $&');
  const solution = (string, regex = /[A-Z]/g) => string.replace(regex, ` $&`);

  // function solution(string) {
  //   let splitStr = string.split("");
  //   let newStr = string.split("");
  //   let capStr = string.toUpperCase().split("");
  //   for (let i = splitStr.length - 1; i >= 0; i--) {
  //     if (splitStr[i] === capStr[i]) {
  //       newStr.splice(i, 0, ' ');
  //     }
  //   }
  //   return newStr.join("");
  // }
  // console.log(solution("camelCasingTest"));
}

{  /**  8 kyu  Rock Paper Scissors! Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.
Examples(Input1, Input2 --> Output):
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!" */

  const rps = (p1, p2) => (p1 === p2) ? 'Draw!' : (p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock') ? 'Player 1 won!' : 'Player 2 won!';

  // const rps = (p1, p2) => {
  //   const winners = { 'scissors': 'paper', 'rock': 'scissors', 'paper': 'rock' };
  //   return p1 === p2 ? 'Draw!' : winners[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!';

  // if (p1 === p2) return 'Draw!';
  // if ((p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock')) return 'Player 1 won!';
  // return 'Player 2 won!';
  // };
  // console.log(rps('scissors', 'paper'));
  // console.log(rps('rock', 'scissors'));
  // console.log(rps('paper', 'rock'));
}

{  /**  8 kyu  Calculate average
Write a function which calculates the average of the numbers in a given list.
Note: Empty arrays should return 0.   */

  function findAverage(array) {
    return array.length ? array.reduce((res, e) => res + e / array.length, 0) : 0;
  }
  // console.log(findAverage([1, 2, 3, 4]));
}

{  /**  8 kyu  The Feast of Many Beasts
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.       */

  function feast(beast, dish) {
    return beast.at(0) === dish.at(0) && beast.at(-1) === dish.at(-1);
    // return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
    // return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
  }
  // console.log(feast("chickadee", "chocolate cake"));
  // console.log(feast("brown bear", "bear claw"));
}

{  /**  8 kyu  Function 1 - hello world
Make a simple function called greet that returns the most-famous "hello world!".
Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?     */

  const greet = () => 'hello world!';
  // console.log(greet());
}

{  /**8 kyu  Function 2 - squaring an argument      Now you have to write a function that takes an argument and returns the square of it.    */
  const square = num => num ** 2;
  // console.log(square(3));
}

{  /**  8 kyu  L1: Set Alarm  Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:
employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false    */

  function setAlarm(employed, vacation) {
    return employed > vacation;
    // return employed && !vacation;
  }
  // console.log(setAlarm(true, false));
}

{  /**  8 kyu  Fake Binary 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string    */

  function fakeBin(x) {
    return x.replace(/[\d]/g, d => d > 4 ? 1 : 0);
    // return [...x].map(e => e < 5 ? 0 : 1).join('');
    // return [...x].reduce((res, e) => e > 4 ? res + 1 : res + 0, '');
    // return [...x].map(d => d > 4 ? d.replace(d, 1) : d.replace(d, 0)).join('');
  }
  // console.log(fakeBin('45385593107843568'));
}

{  /** 7 kyu  Sum of two lowest positive integers  
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.  */

  function sumTwoSmallestNumbers(numbers) {
    // return (numbers.splice(numbers.indexOf(Math.min(...numbers)), 1)[0] + Math.min(...numbers));
    // return numbers.sort((a, b) => a - b).slice(0, 2).reduce((sum, e) => sum + e);
    const [n, m] = numbers.sort((a, b) => a - b); return n + m;
    // return numbers.sort((a, b) => b - a).pop() + numbers.pop();
  }
  // console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
}

{  /**  8 kyu  What is between?
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
For example:
a = 1
b = 4
--> [1, 2, 3, 4]   */

  function between(a, b, arr = []) {
    // return Array.from(Array(1 + b - a), (_, i) => a + i);
    // return [...Array(1 + b - a)].map((e, i) => a + i);
    return a > b ? arr : between(a + 1, b, arr = [...arr, a]);
    // arr.push(a); return a >= b ? arr : between(a + 1, b, arr);
  }
  // console.log(between(1, 4));
}

{  /**6 kyuConsecutive strings   
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption     */

  function longestConsec(strarr, k) {
    let n = strarr.length;
    if (n = 0 || k > n || k <= 0) return "";
    return strarr.map((e, i) => strarr.slice(i, i + k).join('')).reduce((acc = '', el) => acc.length < el.length ? acc = el : acc, '');
    // return strarr.reduce((acc = '', e, i) => {
    //   let sliced = strarr.slice(i, i + k).join('');
    //   return acc.length < sliced.length ? acc = sliced : acc;
    // }, '');
  }
  // console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 2));
  // console.log(longestConsec([], 2));
}

{  /** 7 kyu  Sort array by string length  
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]
Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.    */

  function sortByLength(array) {
    return [...array].sort((v, z) => v.length - z.length);
  }
  // console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
}

{  /**  7 kyu Find the stray number 
You are given an odd-length array of integers, in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number.
The input array will always be valid! (odd-length >= 3)
Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3              */

  function stray(numbers) {
    return numbers.find(e => numbers.indexOf(e) === numbers.lastIndexOf(e));
  }
  // console.log(stray([1, 2, 1]));
}

{  /*  5 kyu String incrementer     
Your job is to write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100
Attention: If the number has leading zeros the amount of digits should be considered.      */

  //  function incrementString(string) {
  //     const d = string.match(/[\d]/g).join('');
  //     const end = +d + 1;
  //     return ('' + end).length > d.length ? string.slice(0, -d.length) + end : string.slice(0, -('' + end).length) + end;
  //   }

  function incrementString(string) {
    // console.log(string.match(/0?\9*$/));
    // console.log(string.match(/0?[1-9]*$/));
    // console.log(string.match(/(0?[1-9]*?$)/));
    return string.replace(/(\d?9*$)/, e => e ? +e + 1 : 1);

    // let end = '';
    // const obj = string.match(/\d*$/g);
    // for (const key in obj) {
    //   const element = obj[key];
    //   end += element;
    // }
    // const n = end.length;
    // if (!n) return string + 1;
    // end++;
    // return (end + '').length > n ? string.slice(0, -n) + end : string.slice(0, -('' + end).length) + end;
  }
  // console.log(incrementString("009"));
  // console.log(incrementString("foobar999"));
  // console.log(incrementString("foobar00999"));
  // console.log(incrementString("foobar000"));
  // console.log(incrementString("foo"));
  // console.log(incrementString("fo99obar99"));
}

{  /**  8 kyu  Returning Strings 
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
[Make sure you type the exact thing I wrote or the program may not execute properly]               */

  function greet(name) {
    // return `Hello, ${name} how are you doing today?`;
    return `Hello, <name> how are you doing today?`.replace('<name>', name);
  }
  // console.log(greet("Shingles"));
}

{  /**  7 kyu  Friend or Foe?
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output. */

  function friend(friends) {
    return friends.filter(e => e.length === 4);
  }
  // console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]));
}

{  /**7 kyu  Regex validate PIN code  
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false    */

  function validatePIN(pin) {
    return /^\d{4}$|^\d{6}$/.test(pin);
    // return (pin.length === 4 && pin.match(/\d/g).filter(e => typeof +e === 'number').length) === 4
    //   || (pin.length === 6 && pin.match(/\d/g).filter(e => typeof +e === 'number').length) === 6;
  }
  // console.log(validatePIN("113t34"));
}

{  /**  8 kyu  Will you make it? 
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Function should return true if it is possible and false if not.     */

  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft;
  };
  // console.log(zeroFuel(50, 25, 2));
}

{
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  // console.log(range(6, 11, 1));
  // console.log(range(-6, -11, -1));
}

{
  /* 8 kyu;  Sentence Smash
   Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
     Example
   ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'  */

  function smash(words) {
    return words.join(" ");
  };
  // console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
}

{  /**  7 kyu  Exes and Ohs 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false               */

  function XO(str) {
    // return ![...str.toLowerCase()].reduce((res, el) => el === 'x' ? res + 1 : el === 'o' ? res - 1 : res, 0);

    // const s = str.toLowerCase(); return s.split('o').length === s.split('x').length;

    return str.replace(/x/gi, '').length === str.replace(/o/gi, '').length;

    // const obj = str.toLowerCase().match(/['x','o']/g);
    // let res = 0;
    // for (const key in obj) {
    //   obj[key] === 'x' ? res++ : obj[key] === 'o' ? res-- : 11;
    // }
    // return !res;
  }
  // console.log(XO("oxoXxOm"));
}

{  /** 8 kyu  Sort and Star You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
The returned value must be a string, and have "***" between each of its letters.
You should not remove or add elements from/to the array.                       */

  function twoSort(s) {
    // return [...[...s].sort()[0]].join('***');

    // return [...s.reduce((a, e) => e > a ? a : e, 0)].join('***');
    // return [...s.reduce((acc, e) => e > acc ? acc : e)].join('***');

    return [...s].sort()[0].replace(/./g, `***$&`).slice(3);
    // const [a] = [...s].sort();
    // return a.replace(/./g, `***$&`).slice(3);

    // const [a] = [...s].sort();
    // return [...a].join('***');
  }
  // console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
  // console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier"]));
}

{  /**  8 kyu  Abbreviate a Two Word Name 
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F     */

  const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase();
  // const abbrevName = name => (name.match(/\b\w/g) + '').replace(',', '.').toUpperCase();
  // const abbrevName = name => name.match(/\b\w/g).toString().replace(',', '.').toUpperCase();

  // const abbrevName = name => {
  // const n = name.toUpperCase().split(' ');
  // return `${n[0][0]}.${n[1][0]}`;
  // };
  // console.log(abbrevName("g Favuzzi"));
  // console.log(abbrevName("Sam Harris"));
}

{  /**  7 kyu  Sum of a sequence
Your task is to write a function which returns the sum of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, end, step.
If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
Examples
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
This is the first kata in the series:
Sum of a sequence (this kata)
Sum of a Sequence [Hard-Core Version]    */

  const sequenceSum = (begin, end, step) => {
    let sum = 0;
    for (let i = begin; i <= end; i += step) {
      sum += i;
    }
    return sum;

    // return begin > end ? 0 : Array.from({ length: (end - begin) / step + 1 }, (_, i) => begin + i * step).reduce((acc, el) => acc + el);
    // return begin > end ? 0 : begin + sequenceSum(begin + step, end, step);
  };
  // console.log(sequenceSum(2, 6, 2));
  // console.log(sequenceSum(1, 5, 3));
}

{  /** 5 kyu Extract the domain name from a URL
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"          */

  function domainName(url) {

    // return url.match('http') ? url.replace(/https?:/, '').replace(/www.?/, '').slice(2).match(/\w*-?\w+-?\w*-?\w*/)[0]
    //   : url.replace(/https?:/, '').replace(/www.?/, '').match(/\w*-?/)[0];
    return url.replace(/.*\/\/|www.|\..*/g, '');
    // return url.replace(/https?:/, '').replace('//', '').replace(/www./, '').split('.')[0];
    // return url.replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0];

  }
  // console.log(domainName("https://google.com"));
  // console.log(domainName("www.xakep.ru"));
  // console.log(domainName("https://www.06obi8-3rjois-qfljpf-zu3jyh.info"));
  // console.log(domainName("https://www.yucg3rmrq4d5-0mdh4srf-bk1.edu/default.html"));
  // console.log(domainName("http://github.com/carbonfive/raygun"));
  // console.log(domainName("http://www.zombie-bites.com"));
}

{  /**6 kyu  Playing with digits
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
~( +...)=n∗k
If it is the case we will return k, if not return -1.
Note: n and p will always be strictly positive integers.
Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1
n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k
n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51  */

  function digPow(n, p) {
    return (res => res % 1 ? -1 : res)([...n + ""].reduce((res, e) => res + e ** p++, 0) / n);
    // const res = [...n + ''].reduce((res, d) => res + d ** p++, 0) / n;
    // return (res % 1) ? -1 : res;

    // const res = [...n + ''].reduce((res, d, i) => res + d ** (p + i), 0) / n;
    // return (res % 1) ? -1 : res;
  }
  // console.log(digPow(46288, 3));
  // console.log(digPow(92, 1));
}

{  /**  7 kyu  Sum of the first nth term of Series 
Your task is to write a function which returns the sum of following series upto nth term(parameter).
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00
You will only be given Natural Numbers as arguments.
Examples:(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"   */

  function SeriesSum(n, sum = 0) {
    // return Array.from({ length: n }).reduce((sum, _, i) => sum + 1 / (1 + 3 * i), 0).toFixed(2);
    // return Array.from({ length: n }, (_, i) => 1 / (1 + i * 3)).reduce((res, e) => res + e, 0).toFixed(2);
    return n ? SeriesSum(n - 1, sum + 1 / (3 * n - 2)) : sum.toFixed(2);
  }
  // console.log(SeriesSum(7));
}

{  /** 7 kyu  Count the Digit 
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Implement the function taking n and d as parameters and returning this count.
Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1.           */

  function nbDig(n, d) {
    // const re = new RegExp(d, 'g');
    // console.log(re);
    // return Array.from({ length: ++n }, (_, i) => i * i).join('').match(re).length;

    return Array.from({ length: ++n }, (_, i) => i * i).join('').split(d).length - 1;
    // return [...Array.from({ length: ++n }, (_, i) => i * i).join('')].filter(e => e === d + '').length;
  }
  // console.log(nbDig(25, 1));
  // console.log(nbDig(25, 2));
}

{  /**  7 kyu  Remove anchor from URL 
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"             */

  function removeUrlAnchor(url) {
    return url.split('#')[0];
    // return url.replace(/\#.+/, '');
  }
  // console.log(removeUrlAnchor("www.codewars.com#about"));
  // console.log(removeUrlAnchor("www.codewars.com"));
}

{  /** 8 kyu  Count by X 
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).
Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]             */

  function countBy(x, n, z = []) {
    return n ? countBy(x, n - 1, [...z, x * n]) : z.reverse();
    // return [...Array(n)].map((_, idx) => ++idx * x);
    // return Array.from({ length: n }, (_, i) => x * (i + 1));
  }
  // console.log(countBy(2, 5));
  // console.log(countBy(1, 10));
}

{  /**  8 kyu  Double Char Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
Good Luck!*/

  function doubleChar(str) {
    return str.split('').map(e => e + e).join('');
    // return str.split('').map(e => e.repeat(2)).join('');
  }
  // console.log(doubleChar("Adidas"));
  // console.log(doubleChar("1234!_ "));
  // console.log(doubleChar("Hello World"));
}

{  /*8 kyu  Remove exclamation marks 
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.     */

  function removeExclamationMarks(s) {
    return s.split('!').join('');
    // return s.replace(/!/g, '');
  }
  // console.log(removeExclamationMarks("Hello World!"));
}

{  /** 8 kyu  Third Angle of a Triangle
You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.
https://en.wikipedia.org/wiki/Triangle              */

  function otherAngle(a, b) {
    return 180 - a - b;
  }
  // console.log(otherAngle(43, 78));
}

{/**8 kyu  Convert a Number to a String!  We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?
Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"     */

  const numberToString = String;
  // const numberToString = String;
  // const numberToString = num => String(num);
  // const numberToString = num => num + '';
  // console.log(numberToString('5715310'));
}

{  /**8 kyu  Beginner Series #4 Cockroach 
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
For example:
1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.  */

  function cockroachSpeed(s) {
    // 100000cm / 3600s = 1 / .036;
    return Math.floor(s / .036);
  }
  // console.log(cockroachSpeed(1.09));
}

{  /**8 kyu  Grasshopper - Terminal game move function  
Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:
move(3, 6) should equal 15 */

  function move(position, roll) {
    return position + 2 * roll;
  }
  // console.log(move(3, 6));
}

{  /** 7 kyu  Is this a triangle? 
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
(In this case, all triangles must have surface greater than 0 to be accepted).
Examples:
Input -> Output
1,2,2 -> true
4,2,3 -> true
2,2,2 -> true
1,2,3 -> false
-5,1,3 -> false
0,2,3 -> false
1,2,9 -> false     */

  function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
    // return a + b + c - Math.max(a, b, c) - Math.min(a, b, c) > Math.max(a, b, c) - Math.min(a, b, c);
  }
  // console.log(isTriangle(2, 2, 3));
}

{  /** 8 kyu  Sum of positive 
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0. */

  function positiveSum(arr) {
    return arr.reduce((sum, e) => e > 0 ? sum + e : sum, 0);
  }
  // console.log(positiveSum([-1, -2, 3, 4, -5]));
}

{  /** Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.
number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90  */

  function saleHotdogs(n) {
    return n < 5 ? 100 * n : n >= 10 ? 90 * n : 95 * n;
  }
  // console.log((saleHotdogs(22)));
}

{/** 8 kyu  What's the real floor? Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
Write a function that given a floor in the american system returns the floor in the european system.
With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.
More information here
Examples
1  =>  0 
0  =>  0
5  =>  4
15  =>  13
-3  =>  -3        */

  function getRealFloor(n) {
    // return n <= 0 ? n : n < 13 ? n - 1 : n - 2;
    return n > 0 ? --n - (n > 13) : n;
  }
  // console.log(getRealFloor(21));
}

{  /**  6 kyu  Simple Encryption #1 - Alternating Split 
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
Examples:
encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.
If the string S is an empty value or the integer N is not positive, return the first argument without changes.
This kata is part of the Simple Encryption Series:
Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty
Have fun coding it and please don't forget to vote and rank this kata! :-)  */

  function encrypt(text, n) {
    if (!text) return text;
    let codes = [...text].map((_, i) => text.charCodeAt(i));
    for (let j = 0; j < n; j++) {
      let odd = [];
      let even = [];
      for (let i = 0; i < codes.length; i += 2) {
        if (i + 1 < codes.length) odd = [...odd, codes[i + 1]];
        even = [...even, codes[i]];
      }
      codes = [...odd, ...even];
    }
    return String.fromCharCode(...codes);
  }

  function decrypt(encryptedText, n) {
    if (!encryptedText) return encryptedText;
    let codes = [...encryptedText].map((_, i) => encryptedText.charCodeAt(i));

    for (let j = 0; j < n; j++) {
      const idx = Math.floor(codes.length / 2);
      const even = codes.slice(idx);
      const odd = codes.slice(0, idx);
      codes = [];
      for (let i = 0; i < even.length; i++) {
        codes.push(even[i]);
        if (i < odd.length) codes.push(odd[i]);
      }
    }
    return String.fromCharCode(...codes);
  }
  // console.log(encrypt("This is a test!", 1));
  // console.log(encrypt(null, 1));
  // console.log(decrypt("s eT ashi tist!", 2));
  // console.log(decrypt("hsi  etTi sats!", 1));
}
/** another way  */
{
  function encrypt(text, n) {
    if (!text) return text;
    let codes = [...text].map((_, i) => text.charCodeAt(i));
    for (let j = 0; j < n; j++) {
      const odd = codes.filter((_, i) => i % 2);
      const even = codes.filter((_, i) => !(i % 2));
      codes = [...odd, ...even];
    }
    return String.fromCharCode(...codes);
  }

  function decrypt(encryptedText, n) {
    if (!encryptedText) return encryptedText;
    let codes = [...encryptedText].map((_, i) => encryptedText.charCodeAt(i));

    for (let j = 0; j < n; j++) {
      const idx = codes.length / 2;
      const even = codes.slice(idx);
      const odd = codes.slice(0, idx);
      codes = [];
      for (let i = 0; i < even.length; i++) {
        codes.push(even[i]);
        if (i < odd.length) codes.push(odd[i]);
      }
    }
    return String.fromCharCode(...codes);
  }
  // console.log(encrypt("This is a test!", 1));
  // console.log(encrypt(null, 1));
  // console.log(decrypt("s eT ashi tist!", 2));
  // console.log(decrypt("hsi  etTi sats!", 1));
}
/** one more way  */
{
  function encrypt(text, n) {
    if (!text) return text;
    let chars = text.split('');
    while (n-- > 0) {
      let oddChars = chars.filter((_, i) => i % 2);
      let evenChars = chars.filter((_, i) => !(i % 2));
      chars = oddChars.concat(evenChars);
    }
    return chars.join('');
  }

  function decrypt(encryptedText, n) {
    if (!encryptedText) return encryptedText;
    let chars = encryptedText.split('');
    const idx = chars.length / 2;
    // const idx = parseInt(chars.length / 2);
    while (n-- > 0) {
      let oddChars = chars.slice(0, idx);
      let evenChars = chars.slice(idx);
      chars = [];
      while (evenChars.length) {
        chars.push(evenChars.shift());
        if (oddChars.length) chars.push(oddChars.shift());
      }
    }
    return chars.join('');
  }
  // console.log(encrypt("This is a test!", 1));
  // console.log(encrypt(null, 1));
  // console.log(decrypt("s eT ashi tist!", 2));
  // console.log(decrypt("hsi  etTi sats!", 1));
}

{  /** 5 kyu
Product of consecutive Fib numbers
The Fibonacci numbers are the numbers in the following integer sequence (Fn):
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
such as
F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
F(n) * F(n+1) = prod.
Your function productFib takes an integer (prod) and returns an array:
[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.
If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return
[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.
Some Examples of Return:
(depend on the language)
productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
Note:
You can see examples for your language in "Sample Tests".*/

  function productFib(prod, n = 1, numbers = [0, 1]) {
    while (n ** 2 < prod) {
      n = numbers[numbers.length - 2] + numbers[numbers.length - 1];
      numbers.push(n);
    }
    let res = numbers.slice(-2);
    if (res[0] * res[1] - prod < 0) res.push(res[0] + res[1]); res = res.slice(-2);
    return [res[0], res[1], res[0] * res[1] === prod];
  }
  /* another way*/
  {
    function productFib(prod, [n, m] = [0, 1]) {
      while (n * m < prod) {
        m = m + n; n = m - n;
        // let c = n; n = m; m = n + c;
      }
      return [n, m, !(n * m - prod)];
    }
    // console.log(productFib(193864606));
    // console.log(productFib(5895));
    // console.log(productFib(447577));
  }
}

{/**8 kyu  get character from ASCII Value
  Write a function which takes a number and returns the corresponding ASCII char for that value.
Example:
65 --> 'A'
97 --> 'a'
48 --> '0
For ASCII table, you can refer to http://www.asciitable.com/                */

  const getChar = String.fromCharCode;
  // function getChar(c) {
  //   return String.fromCharCode(c);
  // }
  // console.log(getChar(57));
}

{  /**  8 kyu  Student's Final Grade 
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
This function should return a number (final grade). There are four types of final grades:
100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):
100, 12 --> 100
99, 0 --> 100
10, 15 --> 100
85, 5 --> 90
55, 3 --> 75
55, 0 --> 0
20, 2 --> 0
*Use Comparison and Logical Operators.       */

  function finalGrade(exam, projects) {
    return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
  }
  // console.log(finalGrade(55, 0));
}

{  /**  8 kyu   Total amount of points 
Our football team has finished the championship.
Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
For example: ["3:1", "2:2", "0:1", ...]
Points are awarded for each match as follows:if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
Notes:
our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4       */

  const points = games => games.reduce((acc, [x, _, y]) => acc += x > y ? 3 : !(x - y), 0);
  // const points = games => games.reduce((acc, [x, _, y]) => acc += x > y ? 3 : !(x - y) ? 1 : 0, 0);
  // const points = games => Object.values(games).reduce((acc, e, i, arr) => acc += e[0] > e[2] ? 3 : e[0] === e[2] ? 1 : 0, 0);
  // function points(games, res = 0) {
  // for (const key in games) {
  //   let x = games[key][0];
  //   let y = games[key][2];
  //   res += x > y ? 3 : x === y ? 1 : 0;
  // }
  // return res;
  // }
  // console.log(points(["1:0", "2:0", "3:5", "4:5", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
}

{  /**  7 kyu  Isograms 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false        */

  const isIsogram = str => new Set(str.toLowerCase()).size === str.length;
  // const isIsogram = str => [...str.toLowerCase()].filter((e, i, arr) => arr.indexOf(e) === i).join('') === str.toLowerCase();
  // console.log(isIsogram(""));
  // console.log(isIsogram("abba"));
  // console.log(isIsogram("Dermatoglyphics"));
}

{  /**  8 kyu  Name Shuffler
Write a function that returns a string in which firstname is swapped with last name.
Example(Input --> Output)
"john McClane" --> "McClane john"   */

  const nameShuffler = str => str.split(' ').reverse().join(' ');
  // const nameShuffler = str => str.split(' ')[1] + ' ' + str.split(' ')[0];
  // const nameShuffler = str => {
  //   const [a, b] = str.split(' ');
  //   return [b, a].join(' ');
  // };
  // console.log(nameShuffler('tom jerry'));
}

{  /**7 kyu  Round up to the next multiple of 5 
Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
Examples:
input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5  etc.
Input may be any positive or negative integer (including 0).
You can assume that all inputs are valid integers.           */

  const roundToNext5 = n => n % 5 ? roundToNext5(n + 1) : n;
  // const roundToNext5 = n => 5 * Math.ceil(n / 5);
  // const roundToNext5 = n => !(n % 5) ? n : (n > 0) ? 5 * parseInt(n / 5) + 5 : 5 * parseInt(n / 5);
  // const roundToNext5 = n => {
  // while (n % 5) {
  // n++;
  // } return n;
  // };
  // console.log(roundToNext5(-11));
}

{  /**  7 kyu  Get the Middle Character
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
#Output
The middle character(s) of the word represented as a string.         */

  const getMiddle = s => s.slice((s.length - 1) / 2, s.length / 2 + 1);
  // const getMiddle = s => s.length % 2 ? s.charAt(s.length / 2) : s.slice(s.length / 2 - 1, s.length / 2 + 1);
  // console.log(getMiddle('test'));
}

{  /**  8 kyu  No zeros for heros 
Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway          */

  const noBoringZeros = n => n % 10 || !n ? n : noBoringZeros(n /= 10);
  // const noBoringZeros = n => n ? +('' + n).replace(/0*$/g, "") : 0;
  // console.log(noBoringZeros(101000));
}

{  /** 7 kyu  Sort Numbers 
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
For example:
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []  */

  const solution = (nums) => (nums || []).sort((a, b) => a - b);
  // const solution = nums => nums ? nums.sort((a, b) => a - b) : [];
  // console.log(solution(null));
}

{/** 6 kyu  Detect Pangram / ambiguity -> failed /
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.       */

  // function isPangram(string) {
  //   const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //   return array.every(el => string.toLowerCase().includes(el));
  // }

  // function isPangram(string) {
  //   return string.toLowerCase().match(/[a-z]/g).filter((el, i, arr) => arr.indexOf(el) === i).length === 26 ? 'True' : 'False';
  // }
  // const isPangram = string => new Set(string.toLowerCase().match(/[a-z]/g)).size == 26;
  const isPangram = string => string.toLowerCase().replace(/\W/g, '').split('').filter((e, i, arr) => arr.indexOf(e) === i).length == 26;
  // console.log(isPangram("The quick brown fox jumps over the lazy dog."));
  // console.log(isPangram("The lazy dog."));
}

{  /** 8 kyu  Vowel remover  
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata       */

  const shortcut = string => [...string].filter(e => !'aeiou'.includes(e)).join('');
  // const shortcut = string => string.replace(/[a,e,i,o,u]/g, '');
  // console.log(shortcut("codewars"));
  // console.log(shortcut('how are you today?'));
}

{  /**8 kyu  Super Duper Easy  
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".   */

  const problem = x => isNaN(x) ? 'Error' : x * 50 + 6;
  // const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;
  // console.log(problem(7));
}

{  /** 8 kyu  Remove First and Last Character
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters. */

  const removeChar = str => str.replace(/^\w|\w$/g, '');
  // console.log(removeChar('place'));
}

{  /**8 kyu  The Wide-Mouthed frog!   
The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.  */

  const mouthSize = animal => /alligator/i.test(animal) ? 'small' : 'wide';
  // const mouthSize = animal => animal.match(/alligator/i) ? 'small' : 'wide';
  // const mouthSize = animal => animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
  // console.log(mouthSize('alligator'));
}

{  /**8 kyu Find the position! 
When provided with a letter, return its position in the alphabet.
Input :: "a"
Ouput :: "Position of alphabet: 1"    */

  const position = letter => 'Position of alphabet: ' + (letter.charCodeAt() - '`'.charCodeAt());
  // const position = letter => `Position of alphabet: ${letter.charCodeAt() - 96}`;

  // const letters = 'abcdefghijklmnopqrstuvwxyz';
  // const position = letter => `Position of alphabet: ${letters.indexOf(letter) + 1}`;

  // console.log(position('a'));
}

{  /** 6 kyu  Find the unique number  
here is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
This is the first kata in series:
Find the unique number (this kata)
Find the unique string
Find The Unique            */

  function findUniq(arr) {
    return arr.find((e, i, arr) => arr.indexOf(e) === arr.lastIndexOf(e));
  }
  // console.log(findUniq([0, 0, 0.55, 0, 0]));
}

{  /**8 kyu  Expressions Matter  
Task
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.
Notes
The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
Input >> Output Examples:
expressionsMatter(1,2,3)  ==>  return 9
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.        */

  const expressionMatter = (a, b, c) => Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);

  // function expressionMatter(a, b, c) {
  //   if (a === 1 && c === 1) return a + b + c;
  //   if (a === 1 && b === 1) return (a + b) * c;
  //   if (b === 1 && c === 1) return a * (b + c);
  //   if (a === 1) return (a + b) * c;
  //   if (b === 1 && (a >= c)) return a * (b + c);
  //   if (b === 1 && a < c) return (a + b) * c;
  //   if (c === 1) return a * (b + c);
  //   return a * b * c;
  // }
  // console.log(expressionMatter(2, 1, 2));
  // console.log(expressionMatter(2, 1, 1));
  // console.log(expressionMatter(3, 5, 7));
  // console.log(expressionMatter(5, 6, 1));
  // console.log(expressionMatter(5, 1, 3));
  // console.log(expressionMatter(9, 1, 1));
}

{  /**  8 kyu  You Can't Code Under Pressure #1
Code as fast as you can! You need to double the integer and return it.   */

  const doubleInteger = i => 2 * i;
}

{  /**  8 kyu  DNA to RNA Conversion
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
Create a function which translates a given DNA string into RNA.
For example:
"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.       */

  // const DNAtoRNA = dna => dna.replaceAll('T', 'U');
  const DNAtoRNA = dna => dna.split('T').join('U');
  // console.log(DNAtoRNA("GACCGCCGCC"));
}

{  /**8 kyu   Grasshopper - Messi Goals   */
  const laLigaGoals = 43;
  const championsLeagueGoals = 10;
  const copaDelReyGoals = 5;
  const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
}

{  /** 7 kyu  Two fighters, one winner. 
Create a function that returns the name of the winner in a fight between two fighters.
Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
Your function also receives a third argument, a string, with the name of the fighter that attacks first.
Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }    */

  {
    function Fighter(name, health, damagePerAttack) {
      this.name = name;
      this.health = health;
      this.damagePerAttack = damagePerAttack;
      this.toString = function () { return this.name; };
    }
  }

  class Fighter {
    constructor(name, health, damagePerAttack) {
      this.name = name;
      this.health = health;
      this.damagePerAttack = damagePerAttack;
      this.toString = function () { return this.name; };
    }
  }


  const fighter1 = new Fighter('Lew', 10, 2);
  const fighter2 = new Fighter('Lew', 10, 2);

  function declareWinner(fighter1, fighter2, firstAttacker) {
    return "Write your code here";
  }
}

{  /**  7 kyu  Vowel Count  
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces. */

  const getCount = str => (str.match(/[a,e,i,o,u]/g) || '').length;
  // const getCount = str => str.match(/[a,e,i,o,u]/g) ? str.match(/[a,e,i,o,u]/g).length : 0;
  // console.log(getCount('abracadabra'));
  // console.log(getCount('my pyx'));
}

{  /**  7 kyu  Growth of a Population
At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants
At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213
It will need 3 entire years.
More generally given parameters:
p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
the function nb_year should return n number of entire years needed to get a population greater or equal to p.
aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.                    */

  const nbYear = (p0, percent, aug, p, n = 0) => p0 >= p ? n : nbYear(p0 + (Math.floor(p0 * percent / 100) + aug), percent, aug, p, n + 1);
  // console.log(nbYear(1500000, 2.5, 10000, 2000000));
}

{  /**  8 kyu  Determine offspring sex based on genes XX and XY chromosomes 
If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son."  */

  const chromosomeCheck = sperm => `Congratulations! You're going to have a ${/Y/.test(sperm) ? `son` : `daughter`}.`;
  // const chromosomeCheck = sperm => /Y/.test(sperm) ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";
  // console.log(chromosomeCheck('XY'));
}

{  /**  8 kyu Hex to Decimal 
Complete the function which converts hex number (given as a string) to a decimal number.  */

  const hexToDec = hexString => parseInt(hexString, 16);
  // console.log(hexToDec('FF'));
}

{  /**  8 kyu  A wolf in sheep's clothing
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
Note: there will always be exactly one wolf in the array.
Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"   */

  const warnTheSheep = queue => queue.pop() === ('wolf') ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${queue.length - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`;

  // const warnTheSheep = queue => queue.length - 1 - queue.indexOf('wolf') ? `Oi! Sheep number ${queue.length - 1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep';

  // const warnTheSheep = queue => queue.length - 1 - queue.findIndex(e => e === 'wolf') ? `Oi! Sheep number ${queue.length - 1 - queue.findIndex(e => e === 'wolf')}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep';
  // console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
}

{  /**  7 kyu  Square Every Digit 
In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.       */

  const squareDigits = num => +('' + num).split('').map(e => e * e).join('');
  // console.log(squareDigits(3212));
}

{  /**  8 kyu  Drink about
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.
Rules:
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)
13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"       */

  const peopleWithAgeDrink = old => `drink ${old < 14 ? `toddy` : old < 18 ? `coke` : old < 21 ? 'beer' : 'whisky'}`;
  // const peopleWithAgeDrink = old => old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky';
  // console.log(peopleWithAgeDrink(25));
}

{  /**  6 kyu  The Supermarket Queue
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)
Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times
queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.
queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.
P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool         */

  const queueTime = (customers, n) => {
    return Math.max(...customers.reduce((acc, el) => {
      let idx = acc.indexOf(Math.min(...acc));
      acc[idx] += el;
      return acc;
    }, Array.from({ length: n }, e => 0)));
  };

  // const queueTime = (customers, n) => {
  //   let m = customers.length;
  //   if (m <= 0) return 0;
  //   let timeArr = customers.splice(0, n);

  //   while (m > 0) {
  //     let newEl = +customers.splice(0, 1);
  //     m -= 1;
  //     let min = Math.min(...timeArr);
  //     timeArr = timeArr.map((e, i, ar) => e === min && ar.indexOf(e) === i ? e + newEl : e);
  //   };
  //   return Math.max(...timeArr);
  // };

  // console.log(queueTime([1, 2, 3, 4, 5], 100));
  // console.log(queueTime([1, 2, 3, 4, 5], 3));
  // console.log(queueTime([], 1));
  // console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
}

{  /** 8 kyu  Find Multiples of a Number 
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6. */

  const findMultiples = (integer, limit) => Array.from({ length: limit / integer }, (e, i) => (++i) * integer);

  // const findMultiples = (integer, limit) => {
  //   let arr = [];
  //   for (let i = integer; i <= limit; i += integer) {
  //     arr.push(i);
  //   }
  //   return arr;
  // };

  // const findMultiples = (integer, limit) => {
  //   let arr = [];
  //   for (let i = 1; i <= limit / integer; i++) {
  //     const el = i * integer;
  //     arr.push(el);
  //   }
  //   return arr;
  // };
  console.log(findMultiples(11, 54));
}


