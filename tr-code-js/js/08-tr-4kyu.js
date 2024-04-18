{  /**8 kyu  Convert a Boolean to a String 
Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.      */

  const booleanToString = b => '' + b;
  // const booleanToString = b => String(b);
  // const booleanToString = b => Boolean(b) === false ? 'false' : 'true';
  // console.log(booleanToString(true));
  // console.log(booleanToString(false));
}

{  /**  7 kyu  Make a function that does arithmetic!
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".
A few examples:(Input1, Input2, Input3 --> Output)
5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!    */

  const arithmetic = (a, b, operator) => operator === 'add' ? a + b : operator === 'subtract' ? a - b : operator === 'multiply' ? a * b : a / b;
  // console.log(arithmetic(5, 2, "multiply"));
  // console.log(arithmetic(1, 2, "add"));
}

{  /**  8 kyu  Merge two sorted arrays into one
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]        */

  const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
  // const mergeArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
  // const mergeArrays = (arr1, arr2) => [...arr1, ...arr2].filter((e, i, ar) => ar.indexOf(e) === i).sort((a, b) => a - b);
  // console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));
}

{  /**  6 kyu  Mexican Wave
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.
 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Good luck and enjoy!
Kata Series
If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.
Rank 
Maze Runner
Rank 
Scooby Doo Puzzle
Rank 
Driving License
Rank 
Connect 4
Rank 
Vending Machine
Rank 
Snakes and Ladders
Rank 
Mastermind
Rank 
Guess Who?
Rank 
Am I safe to drive?
Rank 
Mexican Wave
Rank 
Pigs in a Pen
Rank 
Hungry Hippos
Rank 
Plenty of Fish in the Pond
Rank 
Fruit Machine
Rank 
Car Park Escape     */

  const wave = str => [...str].reduce((res, e, i) => [...res, (str.slice(0, i) + e.toUpperCase() + str.slice(i + 1))].filter((e => e !== str)), []);

  // function wave(str, res = []) {
  //   [...str].map((e, i) => (/\w/.test(e)) ? res.push(str.slice(0, i) + e.toUpperCase() + str.slice(i + 1)) : []);
  //   return res;
  // };
  // function wave(str, res = []) {
  //   [...str].forEach((e, i) => (/\w/.test(e)) ? res.push(str.slice(0, i) + e.toUpperCase() + str.slice(i + 1)) : 0);
  //   return res;
  // };
  // function wave(str) {
  //   let res = [];
  //   str.split('').forEach((e, i) => {
  //     let strS = str.slice(i).replace(/[a-z]/, e => e.toUpperCase());
  //     let newStr = str.slice(0, i) + strS;
  //     res.push(newStr);
  //   });
  //   return res.filter((e, i, ar) => ar.indexOf(e) === i).filter(e => e !== str);
  // }
  // console.log(wave(' gap '));
  // console.log(wave("hello"));
  // console.log(wave("two words "));
}

{  /** 8 kyu5 without numbers !! 
Write a function that always returns 5
Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/ */

  const unusualFive = () => 'true '.length;
  // console.log(unusualFive());
}

{  /**7 kyu  Jaden Casing Strings  
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org  */

  String.prototype.toJadenCase = function (s) {
    let result = '';
    this.s = s;
    this.s.split(' ').forEach(s => [(result += ' ' + s.replace(/^[a-z]/, s[0].toUpperCase()))]);
    return result.trim();
  };
  const string = new String();
  // console.log(string.toJadenCase("How can mirrors be real if our eyes aren't real"));
  // console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"));
}

{  /**8 kyu  Holiday VIII - Duty Free 
The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the savings over the normal high street price would effectively cover the cost of your holiday.
You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and the cost of the holiday (in £).
For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.
Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle. If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.
All inputs will be integers. Please return an integer. Round down.            */

  const dutyFree = (normPrice, discount, hol) => hol / normPrice / discount * 100 ^ 0;
  // const dutyFree = (normPrice, discount, hol) => ~~(hol / normPrice / discount * 100);
  // const dutyFree = (normPrice, discount, hol) => Math.floor(hol / normPrice / discount * 100);
  // console.log(dutyFree(12, 50, 1000));
  // console.log(dutyFree(17, 0, 500));
  // console.log(dutyFree(24, 35, 3000));
}

{  /**  6 kyu  Highest Scoring Word
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
For example, the score of abad is 8 (1 + 2 + 1 + 4).
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid. */

  const high = (x, sumValues = []) => {
    sumValues = x.split(' ').map(e => [...e].reduce((res, el, i) => res + (el.charCodeAt() - 96), 0));
    return x.split(' ')[sumValues.indexOf(Math.max(...sumValues))];
  };

  // const high = (x, sumValues = []) => {
  //   sumValues = x.split(' ').map(e => [...e].reduce((res, el, i) => res + (el.charCodeAt() - 96), 0));
  //   return x.split(' ')[sumValues.indexOf(Math.max(...sumValues))];
  // };

  // const high = (x, sumValues = []) => {
  //   sumValues = x.split(' ').map(e => [...e].reduce((res, el, i) => res + (el.charCodeAt() - 96), 0));
  //   const idx = sumValues.indexOf(Math.max(...sumValues));
  //   return x.split(' ')[idx];
  // };

  // const high = (x, sumValues = []) => {
  //   sumValues = x.split(' ').map(e => [...e].reduce((res, el, i) => res + (el.codePointAt() - 96), 0));
  //   const max = Math.max(...sumValues);
  //   const idx = sumValues.indexOf(max);
  //   return x.split(' ')[idx];
  // };
  // console.log(high('man i need a taxi up to ubud'));
}

{  /**7 kyu  Find the capitals 
Instructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]  */

  // const capitals = word => [...word].reduce((res, el, i) => /[A-Z]/.test(el) ? [...res, i] : res, []);
  // const capitals = word => [...word].reduce((res, el, i) => el === el.toUpperCase() ? res.concat(i) : res, []);
  const capitals = word => [...word].reduce((res, el, i) => el.match(/[A-Z]/) ? [...res, i] : res, []);
  // console.log(capitals('CodEWaRs'));
}

{ /** 7 kyu  Find the middle element       
As a part of this Kata, you need to create a function that when provided with a triplet,
 returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).
For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
Another example (just to make sure it is clear):
gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.    */

  const gimme = triplet => triplet.findIndex(e => e === [...triplet].sort((a, b) => a - b)[1]);
  // const gimme = triplet => triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
  // console.log(gimme([15, 110, 34]));
}

{  /**8 kyu  Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"   */

  const replace = s => s.replace(/[aeiou]/gi, '!');
  // const replace = s => [...s].map(e => e.replace(/[aeiou]/i, '!')).join('');
  // console.log(replace("!Hi! Hi!"));
}

{  /** 7 kyu  Alternate capitalization
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
Good luck!
If you like this Kata, please try:  */

  const capitalize = s => [0, 1].map(idx => [...s].map((e, i) => idx - i % 2 ? e : e.toUpperCase()).join(''));
  // const capitalize = s => [[...s].map((e, i) => !(i % 2) ? e = e.toUpperCase() : e).join(''), [...s].map((e, i) => i % 2 ? e = e.toUpperCase() : e).join('')];
  // console.log(capitalize("abcdef"));
}

{  /** 8 kyu  Plural 
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
All values will be positive integers or floats, or zero. */

  const plural = n => n !== 1;
  // console.log(plural(17));
}

{  /**  8 kyu  Enumerable Magic #25 - Take the First N Elements 
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.*/

  const take = (arr, n) => arr.slice(0, n);
}

{  /**6 kyu  Give me a Diamond
Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"   */

  const diamond = n => {
    if (n % 2 && n > 0) {
      return [...Array.from({ length: n }, ((_, i) => {
        const ws = Math.abs((n - 1) / 2 - i);
        // const ws = Math.abs((n / 2 ^ 0) - i);
        const asterisksCount = n - ws * 2;
        return Array(ws + 1).join(' ') + Array(asterisksCount + 1).join('*');
      }))].join('\n') + '\n';
    }
    return null;
  };

  // const diamond = (n, q = -1, k = n) => n % 2 && n > 0 ? Array.from({ length: n }, e => q / 2 < n / 2 ? e = ' '.repeat((n - q) / 2 - 1) + '*'.repeat(q += 2) + '\n'
  // : e = ' '.repeat((n - k) / 2 + 1) + '*'.repeat(k -= 2) + '\n').join('') : null;

  // console.log(diamond(11));
}

{  /**  7 kyu  Money, Money, Money 
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
Note to Tax: not the invested principal is taxed, but only the year's accrued interest
Example:
  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00

After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.
Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.  */

  function calculateYears(principal, interest, tax, desired, years = 0) {
    if (principal >= desired) return years;
    return calculateYears(principal += principal * interest * (1 - tax), interest, tax, desired, years += 1);
  };

  // let calculateYears = (principal, interest, tax, desired, years = 0) => (principal >= desired) ? years
  // : calculateYears(principal += principal * interest * (1 - tax), interest, tax, desired, ++years);


  // console.log(calculateYears(1000, 0.05, 0.18, 1100));
  // console.log(calculateYears(1000, 0.01625, 0.18, 1200));
}

{  /**8 kyu  Lario and Muigi Pipe Problem 
Issue
Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
The pipes are correct when each pipe after the first is 1 more than the previous one.
Task
Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8  */

  // const pipeFix = (numbers, [n] = numbers) => Array.from({ length: numbers.pop() - n + 1 }, (_, i) => n + i);

  function pipeFix(numbers, [n] = numbers, arr = [n]) {
    const [max] = numbers.slice(-1);
    while (n < max) {
      n++;
      arr = [...arr, n];
    }
    return arr;
  }
  // console.log(pipeFix([-1, 4]));
}

{  /** 8 kyu  altERnaTIng cAsE <=> ALTerNAtiNG CaSe   */

  String.prototype.toAlternatingCase = function (str) {
    this.str = str;
    return this.str.split('').map(e => e.match(/[a-z]/) ? e.toUpperCase() : e.toLowerCase()).join('');
  };
  const string = new String();
  // console.log(string.toAlternatingCase("hello world"));
}

{ /**  8 kyu  Powers of 2 
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]*/
  //;
  const powersOfTwo = n => [...Array(n + 1)].map((_, i) => 2 ** i);
  // const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => Math.pow(e, i));
  // const powersOfTwo = n => Array.from({ length: n + 1 }, (e = 2, i) => Math.pow(e, i));
  // const powersOfTwo = n => {
  //   let arr = [];
  //   for (let i = 0; i <= n; i++) {
  //     arr[i] = 2 ** i;
  //   } return arr;
  // };
  // console.log(powersOfTwo(4));
}

{  /**7 kyu  Simple Fun #176: Reverse Letter  
Given a string str, reverse it and omit all non-alphabetic characters.
Example
For str = "krishan", the output should be "nahsirk".
For str = "ultr53o?n", the output should be "nortlu".
Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.
[output] a string   */

  const reverseLetter = str => [...str].reduce((res, e) => /[a-z]/.test(e) ? e + res : res, '');
  // const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');
  // console.log(reverseLetter("ultr53o?n"));
}

{
  const howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0;
  // console.log(howManyLightsabersDoYouOwn('first'));
}

{  /**8 kyu  Welcome to the City
Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
Example:
['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!   */

  function sayHello(name, city, state) {
    return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!';
  }
  // console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
}

{  /**5 kyu  Integers: Recreation One
1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
Task
Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.
We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
Example:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see "Sample Tests".
Note
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.   */

  // function listSquared(m, n) {
  //   const results = [];
  //   const arr = Array.from({ length: n }, (_, i) => 1 + i);
  //   const ar = arr.slice(m - 1).map(e => arr.filter(el => !(e % el))).map((el) => {
  //     let sum = 0;
  //     el.forEach(e => {
  //       sum += (Math.pow(e, 2));
  //     });
  //     if (Math.sqrt(sum) % 1 === 0) {
  //       const element = el[el.length - 1];
  //       let res = [element, sum];
  //       results.push(res);
  //     }
  //   });
  //   return results;
  // }

  // function listSquared(m, n) {
  //   const results = [];
  //   const arr = Array.from({ length: n }, (_, i) => 1 + i);
  //   const ar = arr.slice(m - 1).map(e => arr.filter(el => !(e % el))).map((el) => {
  //     let sum = 0;
  //     el.map(e => sum += e * e);
  //     if (!(sum ** .5 % 1)) {
  //       const element = el[el.length - 1];
  //       let res = [element, sum];
  //       results.push(res);
  //     }
  //   });
  //   return results;
  // }

  // function listSquared(m, n) {
  //   const results = [];
  //   for (let i = m; i <= n; i++) {
  //     let sum = 0;
  //     for (let j = 1; j <= n; j++) {
  //       if (!(i % j)) sum += j ** 2;
  //     }
  //     if (!(sum ** .5 % 1)) results.push([i, sum]);
  //   }
  //   return results;
  // }

  function listSquared(m, n, res = []) {
    for (let i = m; i <= n; i++) {
      let sum = 0;

      for (let j = 1; j <= n; j++) {
        if (!(i % j)) sum += j * j;
      }
      if (!(sum ** .5 % 1)) res.push([i, sum]);
    }
    return res;
  }
  // console.log(listSquared(250, 500));
  // console.log(listSquared(1, 250));
  // console.log(listSquared(42, 250));
}

{  /**  7 kyu  Two to One 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"   */

  const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');
  // const longest = (s1, s2) => (s1 + s2).split('').filter((e, i, arr) => arr.indexOf(e) === i).sort().join('');
  // const longest = (s1, s2) => [...s1 + s2].filter((e, i, arr) => arr.indexOf(e) === i).sort().join('');
  // console.log(longest("aretheyhere", "yestheyarehere"));
}

{/** 8 kyu  Fix your code before the garden dies!
You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.
Your task is to debug the code before your plants die! */

  function rainAmount(mm) {
    if (mm < 40) {
      return "You need to give your plant " + `${40 - mm}` + "mm of water";
    } else {
      return "Your plant has had more than enough water for today!";
    }
  }
  // console.log(rainAmount(39));
}

{/**  6 kyu  Sort the odd 
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]      */


  const sortArray = array => {
    const sortedOdd = array.filter(e => e % 2).sort((a, b) => a - b);
    return array.map(e => (e % 2) ? sortedOdd.shift() : e);
    // return array.map(e => (e % 2) ? sortedOdd.splice(0, 1) : e).flatMap(e => e);
    // let oddIdx = 0;
    // return array.map(e => (e % 2) ? sortedOdd[oddIdx++] : e);
  };
  // console.log(sortArray([5, 3, 2, 8, 1, 4]));
  // console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));
}

{/**  7 kyu  Flatten and sort an array
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.
Example:
Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]. */

  const flattenAndSort = array => array.reduce((res, e) => Array.isArray(e) ? [...res, ...e] : [...res, e], []).sort((a, b) => a - b);
  // const flattenAndSort = array => array.flatMap(e => e).sort((a, b) => a - b);
  // console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5], 7]));
}

{/**  7 kyu  Odd or Even? 
Given a list of integers, determine whether the sum of its elements is odd or even.
Give your answer as a string matching "odd" or "even".
If the input array is empty consider it as: [0] (array with a zero).    */

  // const oddOrEven = array => array.reduce((sum, e) => sum + e, 0) % 2 ? 'odd' : 'even';
  const oddOrEven = array => ['even', 'odd'][Math.abs(array.reduce((sum, e) => sum + e, 0) % 2)];
  // console.log(oddOrEven([0, -1, -5, 1]));
}

{/**  6 kyu  Multiplication table
Your task, is to create N×N multiplication table, of size provided in parameter.
For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:
[[1,2,3],[2,4,6],[3,6,9]]   */

  // const multiplicationTable = size => {
  //   const line = Array.from({ length: size }, (_, i) => i + 1);
  //   return Array.from({ length: size }, e => line.map((_, i) => line.map(e => (i + 1) * e)))[0];
  // };

  // const multiplicationTable = size => {
  //   let res = [];
  //   for (let i = 0; i < size; i++) {
  //     res[i] = [];
  //     for (let j = 1; j <= size; j++) {
  //       res[i].push((i + 1) * j);
  //     }
  //   }
  //   return res;
  // };

  const multiplicationTable = size => Array.from({ length: size }, (_, i) => Array.from({ length: size }, (_, j) => (i + 1) * (j + 1)));
  // console.log(multiplicationTable(3));
}

{  /** 8 kyu  Parse nice int from char problem 
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.   */

  const getAge = inputString => +inputString[0];
  // const getAge = inputString => parseInt(inputString);
  // console.log(getAge("4 years old"));
}

{  /** 8 kyu  Training JS #5: Basic data types--Object 
Give you a function animal, accept 1 parameter:obj like this:
{name:"dog",legs:4,color:"white"}
and return a string like this:
"This white dog has 4 legs."   */

  const animal = obj => {
    const { name, legs, color } = obj;
    return `This ${color} ${name} has ${legs} legs.`;
  };
  // console.log(animal({ name: "dog", legs: 4, color: "white" }));
}

{  /**  8 kyu  Bin to Decimal  
   Complete the function which converts a binary number (given as a string) to a decimal number.       */

  const binToDec = bin => parseInt(bin, 2);

  // const binToDec = bin => [...bin].reverse().reduce((num, e, i) => num + e * 2 ** i, 0);

  //   let num = 0, n = 1;
  //   const arr = [...bin].reverse().map((e, idx) => {
  //     idx ? n *= 2 : n;
  //     Number(e) ? num += n : num, 0;
  //   });
  //   return num;
  // };

  // console.log(binToDec('1001001'));
}

{  /**  6 kyu  Delete occurrences of an element if it occurs more than n times
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21]. 

const { assert } = require('chai');
describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21])
    assert.sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
    assert.sameOrderedMembers(deleteNth([12,39,19,39,39,19,12], 1), [12, 39, 19])
  });
});              */

  // const deleteNth = (arr, n) => arr.filter((e, i) => { let ar = arr.slice(0, i).filter(el => el === e).length < n;/* console.log(ar); */  return ar; });

  // const deleteNth = (arr, n) => {
  //   const unique = new Set(arr);

  //   unique.forEach(element => {
  //     let ar = arr.filter(e => e === element);

  //     for (let i = 0; i < ar.length - n; i++) {
  //       if (ar.length > n) arr.splice(arr.lastIndexOf(element), 1);
  //     }
  //   });
  //   return arr;
  // };

  // const deleteNth = (arr, n) => arr.filter((e, i) => arr.slice(0, i).filter(el => el === e).length < n);

  const deleteNth = (arr, n) => {

    // console.log(new Set(arr));
    [...new Set(arr)].map(el => {
      const ar = arr.filter(e => e === el);
      // console.log(ar);
      for (let i = 0; i < ar.length - n; i++) {
        if (ar.length > n) arr.splice(arr.lastIndexOf(el), 1);
      }
    });
    return arr;
  };
  // console.log(deleteNth([20, 37, 20, 21], 1));
  // console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1));
  // console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
}

{  /**  6 kyu  Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""               */
  const solution = string => string.replace(/[A-Z]/g, " $&");
  // console.log(solution("camelCasingTest"));
  // console.log(solution("camelCasing"));
  // console.log(solution(""));
}

{  /**  8 kyu  Find the Remainder
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
Division by zero should return NaN.
Examples:
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language) */
  // const remainder = (n, m) => n > m && m ? n % m : m > n && n ? m % n : m === n && m ? 0 : NaN;
  const remainder = (n, m) => {
    const arr = [n, m].sort((a, b) => a - b);
    return arr[1] % arr[0];
  };
  // console.log(remainder(0, 21));
}

{  /** 6 kyu  Help the bookseller ! 
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).

Notes:
In the result codes and their values are in the same order as in M.
See "Samples Tests" for the return.                                        */

  const stockList = (listOfArt, listOfCat) => !listOfArt.length || !listOfCat.length ? '' : listOfCat.map(cat => '(' + cat + ' : ' + listOfArt.reduce((sum, code) =>
    sum + (code.charAt() === cat ? +code.split(' ')[1] : 0), 0) + ')').join(' - ');

  // const stockList = (listOfArt, listOfCat) => !listOfArt.length || !listOfCat.length ? '' :
  //   [...listOfCat].map(e => [...listOfArt].filter(el => e === el[0]
  //   ).reduce((res, e) => res + +e.match(/\s[0-9]+/), 0)).map((el, i) => `(${listOfCat[i]} : ${el})`).join(' - ');
  // console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]));
}

{  /* 7 kyu  Small enough? - Beginner
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false. You can assume all values in the array are numbers.     */

  const smallEnough = (a, limit) => a.every(e => e <= limit);
  // console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
}

{  /**  7 kyu  Form The Minimum
  Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications      */

  // const minValue = values => Number([...new Set(values)].sort((a, b) => a - b).join(''));
  // const minValue = values => parseInt([...new Set(values)].sort((a, b) => a - b).join(''));
  const minValue = values => +[...new Set(values)].sort((a, b) => a - b).join('');
  // console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]));
}

{  /**   5 kyu      Sum of Pairs
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.  */

  function sumPairs(ints, s) {
    const arr = ints.map((el, i) => ints.slice(0, i).concat(ints.slice(i + 1)).find(e => e === s - el)).filter(e => e || e === 0);
    return arr.length ? [arr[arr.length / 2], arr.find(e => e === s - arr[arr.length / 2])] : undefined;

    // const inds = [];
    // const pair = [];
    // let array = [...ints];

    // for (let i = 0; i < array.length; i++) {
    //   const delta = s - array[i];
    //   ints = ints.slice(1);

    //   for (let j = 0; j < ints.length; j++) {
    //     if (delta !== ints[j]) continue;
    //     pair.push(array[i], ints[j],);
    //     inds.push(j);
    //   }
    // }
    // if (!pair.length) return undefined;
    // return (pair.length === 4 && inds[1] < inds[0]) ? pair.slice(-2) : pair.slice(0, 2);
  }
  // console.log(sumPairs([20, -13, 40], -7));
  // console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));
  // console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
  // console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));
  // console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
}

{  /**7 kyu  Row Weights 
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.
rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.
rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.  */

  const rowWeights = array => array.reduce((res, e, i, arr) => {
    !(i % 2) ? res[0] += e : res[1] += e;
    return res;
  }, [0, 0]);
  // console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]));
}

{  /**7 kyu  Factorial 
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).  */

  const factorial = (n, res = 1) => {
    if (n > 12 || n < 0) {
      throw new RangeError("The argument must be between 0 and 12.");
    }
    return n ? n * factorial(n - 1) : res;

    // for (n; n > 1; n -= 1) {
    //   res *= n;
    // }
    // return res;
  };
  // console.log(factorial(6));
};

{  /**  7 kyu  Maximum Length Difference  You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
Find max(abs(length(x) − length(y)))
If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string                        */

  function mxdiflg(a1, a2) {
    const sortedArr1 = a1.sort((a, b) => b.length - a.length);
    const sortedArr2 = a2.sort((a, b) => b.length - a.length);
    const max1 = sortedArr1[0].length;
    const min1 = sortedArr1.slice(-1)[0].length;
    const max2 = sortedArr2[0].length;
    const min2 = sortedArr2.slice(-1)[0].length;

    // const lengthArr1 = a1.map(e => e.length).sort((a, b) => b - a);
    // const lengthArr2 = a2.map(e => e.length).sort((a, b) => b - a);
    // const [max1] = lengthArr1;
    // const [min1] = lengthArr1.slice(-1);
    // const [max2] = lengthArr2;
    // const [min2] = lengthArr2.slice(-1);

    return (max1 && max2) ? (max1 - min2 > max2 - min1 ? max1 - min2 : max2 - min1) : -1;
  }
  // console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ['rwetfgowqnxcnx\zxt']));
}

{  /**  8 kyu  String cleaning
Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
Examples (input -> output)
'! !'                 -> '! !'
'123456789'           -> ''
'This looks5 grea8t!' -> 'This looks great!'
Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact. */

  const stringClean = s => s.split('').filter(el => !'0123456789'.includes(el)).join('');
  // const stringClean = s => s.split('').filter(el => el != parseInt(el)).join('');
  // const stringClean = s => s.replace(/\d/g, '');
  // const stringClean = s => s.replace(/[0-9]/g, '');
  // console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"));
}

{  /**  8 kyu  Sum of differences in array
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element the result should be 0   */

  // const sumOfDifferences = arr => {
  //   let sum = 0;
  //   arr.sort((a, b) => b - a);
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i + 1] || arr[i + 1] === 0) {
  //       sum += arr[i] - arr[i + 1];
  //     }
  //   }
  //   return sum;
  // };

  // const sumOfDifferences = arr => {
  //   const [max] = arr.sort((a, b) => b - a).slice(0, 1);
  //   const [min] = arr.slice(-1);
  //   return max - min ? max - min : 0;
  // };

  // const sumOfDifferences = arr => arr.length > 1 ? arr.sort((a, b) => a - b).pop() - arr.shift() : 0;

  const sumOfDifferences = arr => arr.length > 1 ? arr.sort((a, b) => a - b)[arr.length - 1] - arr[0] : 0;

  // console.log(sumOfDifferences([0, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, -1, -1, 0, 0, 0]));
  // console.log(sumOfDifferences([6, 23, 23, 4, 20, 5, -13, -5, -2, 13, -9, -19, 0]));
  // console.log(sumOfDifferences([1, 2, 10]));
  // console.log(sumOfDifferences([]));
};

{  /**  7 kyu  Sum of Minimums! 
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
For Example:
[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
Note: You will always be given a non-empty list containing positive values.       */

  const sumOfMinimums = arr => arr.reduce((acc, el) => acc + Math.min(...el), 0);
  // console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
}

{  /**  8 kyu  Remove First and Last Character Part Two 
This is a spin off of my first kata.
You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"
""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL        */

  const array = string => string.split(',').slice(1, -1).join(' ') || null;
  // console.log(array('A1,B2'));
}

{  /**  8 kyu  Find Maximum and Minimum Values of a List Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes
You may consider that there will not be any empty arrays/vectors.     */

  const min = function (list) {
    return list.reduce((acc, el) => el < acc ? acc = el : acc, Infinity);
  };

  const max = function (list) {
    return list.reduce((acc, el) => el > acc ? acc = el : acc, 0);
  };
  // console.log(min([4, 6, 2, 1, 9, 63, -134, 566]));
  // console.log(min([-52, 56, 30, 29, -54, 0, -110, -1]));
  // console.log(max([-52, 56, 30, 29, -54, 0, -110]));
  // console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
}

{  /**  7 kyu  Factorial       Your task is to write function factorial.         */

  const factorial = n => n < 1 ? 1 : n * factorial(n - 1);
  // console.log(factorial(4));
}

{  /* 8 kyu   Beginner - Lost Without a Map
Given an array of integers, return a new array with each value doubled.
[1, 2, 3] --> [2, 4, 6]  **/

  const maps = x => x.map(el => 2 * el);
  // console.log(maps([3, 5]));
}

{  /** 8 kyu Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
Note: Input will either be a positive integer (or a string for untyped languages).  */

  const apple = x => x ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
  // const apple = x => Number(x) ** 2 > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.';
  // console.log(apple('31'));
}

{  /** 8 kyu  All Star Code Challenge #18
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0
Notes: The first argument can be an empty string
In languages with no distinct character data type, the second argument will be a string of length 1       */

  const strCount = (str, letter) => str.length - str.replaceAll(letter, '').length;
  // const strCount = (str, letter) => str.split('').filter(el => el === letter).length;
  // const strCount = (str, letter) => str.split('').reduce((res, el) => el === letter ? res + 1 : res, 0);
  // console.log(strCount('Hello', 'l'));
}

{  /** 8 kyu  Find out whether the shape is a cube 
  To find the volume (centimeters cubed) of a cuboid you use the formula:
volume = Length * Width * Height
But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
It's up to you to find out whether the cuboid has equal sides (= is a cube).
Return true if the cuboid could have equal sides, return false otherwise.
Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
Note: side will be an integer    */

  const cubeChecker = (volume, side) => side > 0 ? volume === side ** 3 : false;
  // console.log(cubeChecker(27, 3));
}

{  /**  8 kyu  Do you speak "English"?
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".
The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.
Upper or lower case letter does not matter -- "eNglisH" is also correct.
Return value as boolean values, true for the string to contains "English", false for it does not.   */

  // const spEng = sentence => Boolean(sentence.match(/english/i));
  const spEng = sentence => /english/i.test(sentence);
  // const spEng = sentence => sentence.toLowerCase().includes('english');
  // console.log(spEng('12engLIsh345ert'));
}

{  /**  7 kyu  Fix string case
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!
Please also try:
Simple time difference
Simple remove duplicates      */

  const solve = s => [...s].reduce((t, el) => t + /[a-z]/.test(el), 0) < s.length / 2 ? s.toUpperCase() : s.toLowerCase();

  // const solve = s => {
  //   if (!s.match(/[A-Z]/g) || s.match(/[A-Z]/g).length === s.length) { return s; }
  //   return s.match(/[A-Z]/g).length > s.length / 2 ? s.toUpperCase() : s.toLowerCase();
  // };
  // console.log(solve("coDE"));
};

{  /**  8 kyu  Regular Ball Super Ball
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
ball1 = new Ball();
ball2 = new Ball("super");
ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"         */

  // function Ball(ballType = 'ballType') {
  //   this.ballType = ballType;
  // }

  class Ball {
    constructor(ballType = 'regular') {
      this.ballType = ballType;
    }
  }
  const ballA = new Ball();
  const ballB = new Ball('local');
  // console.log(ballA);
}

{  /**  6 kyu  Tortoise racing 
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.
When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?
More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?
The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.
If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.
Examples:
(form of the result depends on the language)
race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"     */

  function race(v1, v2, g, res = []) {
    if (v1 > v2) return null;
    const time = Math.floor(g / (v2 - v1) * 3600) / 3600;
    res.push(Math.floor(time), Math.floor(time * 60 % 60), Math.round(time * 3600 % 60));
    // const seconds = Math.floor(g / (v2 - v1) * 3600);
    // res[2] = seconds % 60;
    // res[1] = (seconds - res[2]) / 60 % 60;
    // res[0] = ((seconds - res[2]) / 60 - res[1]) / 60;
    return res;
  }
  // console.log(race(80, 91, 37));
}

{  /**  6 kyu  Reverse or rotate?
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).
If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.
If
sz is <= 0 or if str == "" return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".                                */

  function revrot(str, sz) {
    if (sz <= 0 || str === "") return "";
    const strArr = [];
    if (str.length % sz) str = str.slice(0, -str.length % sz);
    for (let i = 0; i < str.length; i += sz) {
      let subStr = (str.split('').splice(i, sz));
      if (subStr.reduce((sum, el) => sum + +el, 0) % 2 !== 0) {
        subStr.push(subStr.shift());
        strArr.push(subStr.join(''));
      } else {
        subStr.reverse();
        strArr.push(subStr.join(''));
      }
    }
    return strArr.join('');
  }
  // console.log(revrot("123456779", 4));
  // console.log(revrot("733049910872815764", 5));
}

{  /**  8 kyu  Reversing Words in a String 
You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
Example (Input --> Output)
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"        */

  const reverse = string => string.split(' ').reverse().join(' ');
  // console.log(reverse('I am an expert at this'));
}

{  /**  5 kyu  Regex Password Validation
You need to write regex that will validate a password to make sure it meets the following criteria:
At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)    */

  /**  ^: Asserts the start of the string.
  (?=.*[a-z]): Requires at least one lowercase letter.
  (?=.*[A-Z]): Requires at least one uppercase letter.
  (?=.*\d): Requires at least one digit.
  [A-Za-z\d]{6,}: Matches alphanumeric characters (including both uppercase and lowercase letters) with a minimum length of 6.
  $: Asserts the end of the string. */

  const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[_])\w{6,}$/;
}

{  /**  8 kyu  Price of Mangoes
There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples
mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free    */

  const mango = (quantity, price) => ((quantity % 3) + (quantity - quantity % 3) / 3 * 2) * price;
  // console.log(mango(5, 3));
}

{  /**  8 kyu  Hello, Name or World!
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
Examples:
* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"   */

  const hello = name => `Hello, ${name ? name.toLowerCase().replace(/\w/, e => e.toUpperCase()) : 'World'}!`;
  // const hello = name => `Hello, ${name ? name.charAt().toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`;
  // const hello = name => `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'}!`;
  // console.log(hello('john'));
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

  const getDivisorsCnt = n => {
    let count = 1;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i) continue;
      count += 1;
    }
    return count;
  };
  // console.log(getDivisorsCnt(30));
}

{  /** 8 kyu  Sum of Multiples
Find the sum of all multiples of n below m
Keep in Mind:
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"               */

  function sumMul(n, m) {
    if (m < 1) return "INVALID";
    let sum = 0;

    // for (let i = 0; i < m; i += n) {
    //   sum += n * i;
    // }
    // return sum;
    // }

    for (let i = 1; i < m / n; i++) {
      sum += n * i;
    }
    return sum;
  }
  // console.log(sumMul(1, 157));
}

{  /**  8 kyu  Area of a Square
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)     */

  function squareArea(A) {
    return +((2 * A / Math.PI) ** 2).toFixed(2);
  }
  // console.log(squareArea(2));
}

{  /**  8 kyu  No Loops 2 - You only need one
*** No Loops Allowed ***
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.
Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
Looking for more, loop-restrained fun? Check out the other kata in the series: */

  function check(a, x) { return a.includes(x); };
  // console.log(check(['what', 'a', 'great', 'kata'], 'kat'));
  // console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));
}

{  /**  6 kyu  Encrypt this!
Description:
Encrypt this!
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"            */

  // const encryptThis = text => text.split(' ').map(e => e.replace(/(^\w)(\w)(\w*)(\w)/, `$1$4$3$2`).replace(/\w/, e.charCodeAt())).join(' ');

  const encryptThis = text => text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (w, l2, mid, r) => w.charCodeAt(0) + r + mid + l2);

  // const encryptThis = text => text.split(' ').map(e => e.length > 2 ? e.charCodeAt() + e.slice(-1) + e.slice(2, -1) + e.slice(1, 2)
  //   : e.length > 1 ? e.charCodeAt(0) + e.charAt(1) : e.charCodeAt(0)).join(' ');
  // console.log(encryptThis("Thank you Piotr for all your help"));
  // console.log(encryptThis("T"));
}

{  /**  7 kyu  Summing a number's digits 
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
For example: (Input --> Output)
10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.          */

  const sumDigits = number => Math.abs(number).toString().split('').reduce((sum, el) => sum + +el, 0);
  // console.log(sumDigits(-32));
}

{  /**  7 kyu  Even numbers in an array 
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]                     */

  const evenNumbers = (array, number) => array.filter(e => !(e % 2)).slice(-number);
  // console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 4));
}

{  /** 7 kyu  No oddities here
Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.     */

  const noOdds = values => values.filter(e => !(e % 2));
  // console.log(noOdds([3, 5, 6, 8, 33]));
}

{  /**  6 kyu  Title Case
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.
Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
Arguments (Haskell)
First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)
First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'                           */

  function titleCase(title, minorWords) {
    return title.toLowerCase().split` `.map(e => minorWords ? (minorWords.toLowerCase().split` `.some(el => el === e) ? e
      : e.charAt().toUpperCase() + e.slice(1)) : e.charAt().toUpperCase() + e.slice(1)).join(' ').replace(/^\w/, e => e.toUpperCase());
  }
  // console.log(titleCase('a clash of KINGS', 'a an the of'));
  // console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
  // console.log(titleCase('First a of in', 'an often into'));
}