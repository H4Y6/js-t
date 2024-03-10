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

  function solution(string) {
    let splitStr = string.split("");
    let newStr = string.split("");
    let capStr = string.toUpperCase().split("");
    for (let i = splitStr.length - 1; i >= 0; i--) {
      if (splitStr[i] === capStr[i]) {
        newStr.splice(i, 0, ' ');
      }
    }
    return newStr.join("");
  }

  console.log(solution("camelCasingTest"));
}