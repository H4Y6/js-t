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

{  /**  6 kyu  Detect Pangram 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.         */

  // const isPangram = string => 'abcdefghijklmnopqrstuvwxyz'.split('').every(e => string.toLowerCase().includes(e));

  const isPangram = string => new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

  // const isPangram = string => string.replace(/\W|\d/g, '').toLowerCase().split('').filter((e, i, arr) => arr.indexOf(e) === i).length === 26;

  // const isPangram = string => new Set(string.replace(/\W|\d/g, '').toLowerCase()).size === 26;

  // console.log(isPangram("The quick brown fox jumps over the lazy dog."));
  // console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'));
}

{  /**  5 kyu  Primes in numbers 
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.
Example: n = 86240 should return "(2**5)(5)(7**2)(11)"              */

  // function primeFactors(n) {
  //   const factors = [];
  //   for (let i = 2; i <= n; i++) {
  //     let a = 0;
  //     while (n % i === 0) {
  //       n /= i;
  //       a++;
  //     }
  //     if (!a) continue;
  //     factors.push([i, a]);
  //   }
  //   return factors.reduce((str, el) => str += (el[1] === 1) ? '(' + el[0] + ')' : '(' + el[0] + "**" + el[1] + ')', '');
  // }

  const primeFactors = n => {
    const factors = [];
    for (let i = 2; i <= n; i++) {
      let amount = 0;
      while (n % i === 0) {
        n /= i;
        amount += 1;
      }
      if (amount === 0) continue;
      amount > 1 ? factors.push(`(${i}**${amount})`) : factors.push(`(${i})`);
    }
    return factors.join('');
  };
  // console.log(primeFactors(86240));
}

{  /**  6 kyu  Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89 = 8**1 + 9**2
 

The next number in having this property is 135:

See this property again: 
135 = 1**1 + 3**2 + 5**3
 

Task
We need a function to collect these numbers, that may receive two integers 
a,𝑏 that defines the range (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[𝑎,𝑏][a,b] the function should output an empty list.

90, 100 --> []                                            */

  function sumDigPow(a, b) {
    const arr = [];
    for (let i = a; i <= b; i++) {

      let sum = 0;
      for (let j = 1; j <= (i + '').length; j++) {
        sum += (i + '')[j - 1] ** j;

      }
      if (sum === i) arr.push(i);
    }

    return arr;
  }

  // console.log(sumDigPow(1, 150));
}

{  /**  8 kyu  Regex count lowercase letters
Your task is simply to count the total number of lowercase letters in a string.
Examples
"abc" ===> 3
"abcABC123" ===> 3
"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
"" ===> 0;
"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
"abcdefghijklmnopqrstuvwxyz" ===> 26           */

  // const lowercaseCount = str => str.replace(/[^a-z]/g, '').length;
  // const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;
  // const lowercaseCount = str => [...str].filter(e => /[a-z]/.test(e)).length;

  // console.log(lowercaseCount("323a"));
  // console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"));
  // console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"));
}

{  /**  7 kyu  Anagram Detection
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
Examples
"foefet" is an anagram of "toffee"
"Buckethead" is an anagram of "DeathCubeK"        */

  const sortStr = (str) => str.toLowerCase().split('').sort().join();
  const isAnagram = (test, original) => sortStr(test) === sortStr(original);

  // const isAnagram = (test, original) => test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join();

  // const isAnagram = (test, original) => test.length === original.length ?
  //   !test.toLowerCase().split('').map(e => original = original.toLowerCase().replace(e, '')).slice(-1)[0] : false;

  // const isAnagram = (test, original) => {
  //   let str;
  //   if (test.length === original.length) {
  //     str = test.toLowerCase().split('').map(e => original = original.toLowerCase().replace(e, ''));
  //     const [res] = str.slice(-1);
  //     return !res;
  //   }
  //   return false;
  // };

  // console.log(isAnagram("apple", "pale"));
  // console.log(isAnagram("Buckethead", "DeathCubeK"));
  // console.log(isAnagram("dkgINQkXMCPViXY", "NIMPCXXkiVkdQg"));
  // console.log(isAnagram("IDaQbJBRvLFLzOviQr", "QzravBLivJaDQILObF"));
}

{  /**  7 kyu  Sum of numbers from 0 to N
We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input: > 6
Output:  0+1+2+3+4+5+6 = 21

Input:  > -15
Output:  -15<0

Input:  > 0
Output:  0=0     */

  const SequenceSum = (n) => {
    if (n < 0) return `${n} < 0`;
    let str = '';
    let sum = 0;
    for (let i = 0; i <= n; i++) {
      str += i + '+';
      sum += i;
    }

    return str.slice(0, -1) + ' = ' + sum;
  };
  // console.log(SequenceSum(-15));
  // console.log(SequenceSum(6));
}

{  /**8 kyu  Multiply the number 
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)      */

  const multiply = number => number * 5 ** (Math.abs(number) + '').length;

  // console.log(multiply(10));
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
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.   */
  function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () { return this.name; };
  }

  function declareWinner(fighter1, fighter2, firstAttacker) {

    if (fighter1.name === firstAttacker) {

      while (fighter1.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        if (fighter2.health <= 0) return fighter1.name;
        fighter1.health -= fighter2.damagePerAttack;
        if (fighter1.health <= 0) return fighter2.name;
      }
    }

    if (fighter2.name === firstAttacker) {

      while (fighter1.health > 0) {
        fighter1.health -= fighter2.damagePerAttack;
        if (fighter1.health <= 0) return fighter2.name;
        fighter2.health -= fighter1.damagePerAttack;
        if (fighter2.health <= 0) return fighter1.name;
      }
    }
  }
  // console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));
  // console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"));
}

{  /**  8 kyu  Exclamation marks series #1: Remove an exclamation mark from the end of string
28710392% of 3,46712,632 of 27,964myjinxin2015 
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"            */

  const remove = string => string.replace(/!$/, '');
  // console.log(remove("Hi!!!"));
}

{  /** 8 kyu   Difference of Volumes of Cuboids 
In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
Your function will be tested with pre-made examples as well as random ones.
If you can, try writing it in one line of code.       */

  const findDifference = (a, b) => Math.abs(a.reduce((acc, el) => acc * el, 1) - b.reduce((acc, el) => acc * el, 1));
  // const findDifference = (a, b) => Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
  // console.log(findDifference([4, 4, 7], [3, 9, 3]));
}

{  /**  7 kyu  Sum of angles 
Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.        */

  const angle = n => (n - 2) * 180;
  // console.log(angle(96));
}

{  /**  7 kyu  Predict your age! 
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!
In honor of my grandfather's memory we will write a function using his formula!
Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.
Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.       */

  const predictAge = (...ages) => Math.floor([...ages].reduce((acc, el) => acc + el * el, 0) ** (1 / 2) / 2);
  // console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
}

{/*  7kyu  Largest pair sum in array   
Given a sequence of numbers, find the largest pair sum in the sequence.
For example
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.     */

  // const largestPairSum = numbers => [...numbers].sort((a, b) => a - b).slice(-2).reduce((sum, n) => sum + n, 0);

  // const largestPairSum = numbers => [...numbers].sort((a, b) => b - a).slice(0, 2).reduce((sum, n) => sum + n, 0);

  const largestPairSum = numbers => {
    const max = Math.max(...numbers);
    return numbers.indexOf(max) === numbers.lastIndexOf(max) ? max + Math.max(...numbers.filter(e => e !== max)) : max * 2;
  };

  // const largestPairSum = numbers => {
  //   let sum = -Infinity;
  //   for (let i = 0; i < numbers.length - 1; i++) {
  //     const n = numbers[i];
  //     for (let j = 0; j < numbers.length; j++) {
  //       if (j === i) continue;
  //       const num = numbers[j];
  //       if (n + num > sum) sum = n + num;
  //     }
  //   }
  //   return sum;
  // };
  // console.log(largestPairSum([10, 14, 2, 23, 19]));
  // console.log(largestPairSum([-29, -19]));
  // console.log(largestPairSum([-100, -29, -24, -19, 19]));
}

{  /** 8 kyu  Training JS #10: loop statement --for
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.
If you forgot how to push an element to an a       */

  function pickIt(array) {
    const odd = [], even = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      (element % 2 ? odd : even).push(element);
    }
    return [odd, even];
  }
  // console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));
}

{  /**  7 kyu  Sorted? yes? no? how? 
Complete the method which accepts an array of integers, and returns one of the following:
"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.  */

  const isSortedAndHow = array => {
    const str = JSON.stringify(array);
    const ascendingStr = JSON.stringify([...array].sort((a, b) => a - b));
    const descendingStr = JSON.stringify(JSON.parse(ascendingStr).reverse());
    return str === ascendingStr ? "yes, ascending" : str === descendingStr ? "yes, descending" : 'no';
  };

  // const isSortedAndHow = array => JSON.stringify([...array].sort((a, b) => b - a)) === JSON.stringify(array) ? "yes, descending" : JSON.stringify([...array].sort((a, b) => a - b)) === JSON.stringify(array) ? "yes, ascending" : 'no';

  // const isSortedAndHow = array => [...array].sort((a, b) => b - a).map((e, i) => e === array[i]).every(e => e) ? "yes, descending" : [...array].sort((a, b) => a - b).map((e, i) => e === array[i]).every(e => e) ? "yes, ascending" : 'no';
  // console.log(isSortedAndHow([15, 7, 3, -8]));
  // console.log(isSortedAndHow([1, 5, 7]));
  // console.log(isSortedAndHow([12, 5, 7]));
};

{  /**  7 kyu  Love vs friendshipIf　a = 1, b = 2, c = 3 ... z = 26
If　a = 1, b = 2, c = 3 ... z = 26
Then l + o + v + e = 54
and f + r + i + e + n + d + s + h + i + p = 108
So friendship is twice as strong as love :-)
Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
The input will always be made of only lowercase letters and will never be empty.                */

  // console.log('a'.charCodeAt());
  const wordsToMarks = string => [...string].reduce((acc, e) => acc + e.charCodeAt() - 96, 0);
  // console.log(wordsToMarks("friends"));
}

{  /**  8 kyu  Return the day
Complete the function which returns the weekday according to the input number:
1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"         */

  function whatday(num) {

    return num && num < 8 ? new Date(0, 0, num - 1).toLocaleString('en', { weekday: 'long' }) : "Wrong, please enter a number between 1 and 7";

    // switch (num) {
    //   case 1: return "Sunday";
    //   case 2: return "Monday";
    //   case 3: return "Tuesday";
    //   case 4: return "Wednesday";
    //   case 5: return "Thursday";
    //   case 6: return "Friday";
    //   case 7: return "Saturday";

    //   default: return "Wrong, please enter a number between 1 and 7";
    // }
  }
  // console.log(whatday(7));
}

{  /**  7 kyu  Minimize Sum Of Array (Array Series #1)
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74   */

  const minSum = arr => arr.sort((a, b) => a - b).reduce((sum, e) => sum + e * arr.pop(), 0);

  // const minSum = arr => arr.sort((a, b) => a - b).reduce((sum, e, i) => sum + e * arr[arr.length - 1 - i], 0) / 2;

  // function minSum(arr) {
  //   const sortedArr = [...arr].sort((a, b) => a - b);
  //   return sortedArr.slice(-arr.length / 2).reverse().reduce((sum, e, i) => sum + e * sortedArr[i], 0);
  // };
  const ar = [12, 6, 10, 26, 3, 24];
  // console.log(minSum([...ar]));
}

{  /** 7 kyu  Maximum Product
Task
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
Notes
Array/list size is at least 2.
Array/list numbers could be a mixture of positives, negatives also zeroes .
Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .
adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])  ==>  return -14
Explanation:
The maximum product obtained from multiplying -2 * 7 = -14, and they're adjacent numbers in the array.  */

  const adjacentElementsProduct = array => Math.max(...(array.map((e, i) => e * array[i + 1])).slice(0, -1));

  // const adjacentElementsProduct = array => Math.max(...(array.slice(0, -1).map((e, i) => e * array.slice(1)[i])));

  // console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]));
}

{  /**  6 kyu  Transform To Prime
Task :
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
Notes
List size is at least 2 .
List's numbers will only positives (n > 0) .
Repetition of numbers in the list could occur .
The newer list's sum should equal the closest prime number .

Input >> Output Examples
1- minimumNumber ({3,1,2}) ==> return (1)
Explanation:
Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .
2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
Explanation:
Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .
3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
Explanation:
Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .         */

  // function minimumNumber(numbers) {
  //   const sum = numbers.reduce((sum, e) => sum + e);

  //   for (let i = sum; i < Infinity; sum % 2 ? i += 2 : i++) {
  //     let Indices = [];

  //     for (let j = 2; j < i; j++) {
  //       if (i % j === 0) Indices.push([j]);
  //     }
  //     if (!Indices.length) return i - sum;
  //   }

  function minimumNumber(numbers) {
    const sum = numbers.reduce((sum, e) => sum + e);
    for (let i = sum; ; i % 2 ? i += 2 : i++) {
      if (isPrime(i)) return i - sum;
    };
  }

  function isPrime(n) {
    for (let j = 2; j < n; j++) {
      if (n % j === 0) return false;
    }
    return true;
  }
  // console.log(minimumNumber([2, 12, 8, 4, 6]));
  // console.log(minimumNumber([50, 39, 49, 6, 17, 28]));
}

{  /** 7 kyu  Nth Smallest Element (Array Series #4) 
Given an array/list of integers, find the Nth smallest element in the array.
Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.
Input >> Output Examples
arr=[3,1,2]            n=2    ==> return 2 
arr=[15,20,7,10,4,3]   n=3    ==> return 7 
arr=[2,169,13,-5,0,-1] n=4    ==> return 2 
arr=[2,1,3,3,1,2],     n=3    ==> return 2 
Playing with Numbers Series                      */

  const nthSmallest = (arr, pos) => [...Array.from(arr)].sort((a, b) => a - b)[pos - 1];
  // const nthSmallest = (arr, pos) => [...arr].sort((a, b) => a - b)[pos - 1];
  // console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5));
}

{  /**  7 kyu  Product Of Maximums Of Array (Array Series #2) 
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
Explanation:
Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is  10 * 10 * 8 * 4 * 3 = 9600 .
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is  -4 * -1 = 4 .
maxProduct ({10, 3, -1, -27} , 3)  return (-30)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 * 3 * -1 = -30 .     */

  const maxProduct = (numbers, size) => [...numbers].sort((a, b) => a - b).slice(-size).reduce((res, el) => res * el, 1);

  // console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
}

{ /**  7 kyu  Array Leaders (Array Series #3)
An element is leader if it is greater than The Sum all the elements to its right side.
Task
Given an array/list [] of integers , Find all the LEADERS in the array.
Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Returned Array/list should store the leading numbers in the same order in the original array/list .
Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side
Note : The last element 0 is equal to right sum of its elements (abstract zero).
arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side
5 is greater than the sum all the elements to its right side
Note : The last element 2 is greater than the sum of its right elements (abstract zero).
arrayLeaders ({5, 2, -1}) ==> return {5, 2}
Explanation:
5 is greater than the sum all the elements to its right side
2 is greater than the sum all the elements to its right side
Note : The last element -1 is less than the sum of its right elements (abstract zero).
arrayLeaders ({0, -1, -29, 3, 2}) ==> return {0, -1, 3, 2}
Explanation:
0 is greater than the sum all the elements to its right side
-1 is greater than the sum all the elements to its right side
3 is greater than the sum all the elements to its right side
Note : The last element 2 is greater than the sum of its right elements (abstract zero).          */

  const arrayLeaders = numbers => numbers.filter((e, i) => e > numbers.slice(i + 1).reduce((sum, e) => sum + e, 0));

  // console.log(arrayLeaders([16, 17, 4, 3, 5, 2]));
  // console.log(arrayLeaders([-36, -12, -27]));
}

{  /**  7 kyu  Maximum Gap (Array Series #4)  
Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives and negatives also zeros_
Repetition of numbers in the array/list could occur.
The Maximum Gap is computed Regardless the sign.
Input >> Output Examples
maxGap ({13,10,5,2,9}) ==> return (4)
Explanation:
The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .
maxGap ({-3,-27,-4,-2}) ==> return (23)
Explanation:
The Maximum Gap after sorting the array is 23 , The difference between  |-4- (-27) | = 23 .
Note : Regardless the sign of negativity .
maxGap ({-7,-42,-809,-14,-12}) ==> return (767)  
Explanation:
The Maximum Gap after sorting the array is 767 , The difference between  | -809- (-42) | = 767 .
Note : Regardless the sign of negativity .
maxGap ({-54,37,0,64,640,0,-15}) //return (576)
Explanation:
The Maximum Gap after sorting the array is 576 , The difference between  | 64 - 640 | = 576 .
Note : Regardless the sign of negativity .        */

  function maxGap(numbers) {
    const sorted = numbers.sort((a, b) => b - a);
    return Math.max(...sorted.map((e, i) => e - sorted.slice(1)[i]).slice(0, -1));
  }
  // console.log(maxGap([24, 299, 131, 14, 26, 25]));
  // console.log(maxGap([-3, -27, -4, -2]));
}

{  /**  regExp   */

  var str = "ABABCDEababcde";
  const [a, b, c] = str.match(/ab/i);
  // console.log(str.match(/ab/i).input);
  // console.log(str.match(/ab/ig).length);
  // console.log(str.match(/ab/).index);


  function count2(str, char) {
    return str.length - str.replace(new RegExp(char, "g"), "").length;
  }
  function count3(str, char) {
    return str.split(char).length;
  }
  // console.log(count2('aaaaa', 'a'));
  // console.log(count3("aaaaa", "b"));
}

{/**7 kyu  Product Array (Array Series #5)
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
Notes
Array/list size is at least 2 .
Array/list's numbers Will be only Positives
Repetition of numbers in the array/list could occur.
Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 20 is the product of all array's elements except the first element
The second element 12 is the product of all array's elements except the second element .
productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1
The second element 2 is the product of all array's elements except the second element 5
The Third element 5 is the product of all array's elements except the Third element 2.
productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
The first element 180 is the product of all array's elements except the first element 10
The second element 600 is the product of all array's elements except the second element 3
The Third element 360 is the product of all array's elements except the third element 5
The Fourth element 300 is the product of all array's elements except the fourth element 6
Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2        */

  function productArray(numbers) {
    const product = numbers.reduce((total, e) => total * e);
    return numbers.map(e => product / e);
  }
  // console.log(productArray([16, 17, 4, 3, 5, 2]));
}

{  /** 7 kyu  Minimum Steps (Array Series #6) 
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
Notes:
List size is at least 3.
All numbers will be positive.
Numbers could occur more than once , (Duplications may exist).
Threshold K will always be reachable.
Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
We add two smallest elements (1 + 2), their sum is 3 .
Then we add the next smallest number to it (3 + 3) , so the sum becomes 6 .
Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
minimumSteps({8 , 9, 4, 2}, 23)  ==> return (3)
Explanation:
We add two smallest elements (4 + 2), their sum is 6 .
Then we add the next smallest number to it (6 + 8) , so the sum becomes 14 .
Now we add the next smallest number (14 + 9) , so the sum becomes 23 .
Now the result is greater or equal to 23 , Hence the output is (3) i.e (3) operations are required to do this .
minimumSteps({19,98,69,28,75,45,17,98,67}, 464)  ==>  return (8)
Explanation:
We add two smallest elements (19 + 17), their sum is 36 .
Then we add the next smallest number to it (36 + 28) , so the sum becomes 64 .
We need to keep doing this until the sum becomes greater or equal to K (464 in this case), which will require 8 Steps .     */

  const minimumSteps = (numbers, value) => [...numbers].sort((a, b) => a - b).filter(e => (value -= e) > 0, 0).length;

  // function minimumSteps(numbers, value) {
  //   const arr = [...numbers].sort((a, b) => a - b);
  //   for (let sum = 0, i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //     if (sum >= value) return i;
  //   }
  // }
  // console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));
  // console.log(minimumSteps([8, 9, 10, 4, 33, 2], 23));
}

{  /**  7 kyu  Maximum Triplet Sum (Array Series #7) 
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Notes :
Array/list size is at least 3 .
Array/list numbers could be a mixture of positives , negatives and zeros .
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)
Note : duplications are not included when summing , (i.e) the numbers added only once .
2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .
3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .     */

  const maxTriSum = numbers => [...new Set(numbers.sort((a, b) => a - b))].slice(-3).reduce((res, e) => res + e);
  // console.log(maxTriSum([-13, -50, 57, 13, 67, -13, 57, 108, 67]));
}

{  /**  7 kyu  Row Weights
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
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.      */

  // const rowWeights = (array) => array.reduce((res, e, i) => (res[i % 2] += e, res), [0, 0]);

  const rowWeights = (array) => {
    let res = [0, 0];
    array.forEach((e, i) => {
      res[i % 2] += e;
    });

    return res;
  };

  // const rowWeights = (array) => {
  //   let res = [0, 0];
  //   array.forEach((e, i) => {
  //     i % 2 ? res[i % 2] += e : res[i % 2] += e;
  //   });
  //   return res;
  // };

  // const rowWeights = (array) => [
  //   array.reduce((acc, el, i, arr) => !(i % 2) ? acc + el : acc, 0),
  //   array.reduce((acc, el, i, arr) => i % 2 ? acc + el : acc, 0)
  // ];

  // console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]));
  // console.log(rowWeights([0]));
}

{  /**  7 kyu  Form The Minimum
   Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications
minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications    */

  const minValue = values => +[...values].sort().filter((e, i, arr) => e !== arr[i + 1]).join('');
  // console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
}

{  /** 5 kyu  Gap in Primes 
The prime numbers are not regularly spaced. For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2-gaps primes: 3-5, 5-7, 11-13, 17-19, 29-31, 41-43
A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes (see: http://mathworld.wolfram.com/PrimeGaps.html).
We will write a function gap with parameters:
g (integer >= 2) which indicates the gap we are looking for
m (integer > 2) which gives the start of the search (m inclusive)
n (integer >= m) which gives the end of the search (n inclusive)
In the example above gap(2, 3, 50) will return [3, 5] or (3, 5) or {3, 5} which is the first pair between 3 and 50 with a 2-gap.
So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).
In such a case (no pair of prime numbers with a gap of `g`)
In C: return [0, 0]
In C++, Lua, COBOL: return `{0, 0}`. 
In F#: return `[||]`. 
In Kotlin, Dart and Prolog: return `[]`.
In Pascal: return Type TGap (0, 0).
Examples:
- gap(2, 5, 7) --> [5, 7] or (5, 7) or {5, 7}
gap(2, 5, 5) --> nil. In C++ {0, 0}. In F# [||]. In Kotlin, Dart and Prolog return []`
gap(4, 130, 200) --> [163, 167] or (163, 167) or {163, 167}
([193, 197] is also such a 4-gap primes between 130 and 200 but it's not the first pair)
gap(6,100,110) --> nil or {0, 0} or ... : between 100 and 110 we have 101, 103, 107, 109 but 101-107is not a 6-gap because there is 103in between and 103-109is not a 6-gap because there is 107in between.
You can see more examples of return in Sample Tests.
Note for Go
For Go: nil slice is expected when there are no gap between m and n. Example: gap(11,30000,100000) --> nil   */

  // Execution Timed Out 
  function gap(g, m, n) {
    const primes = [];
    for (let i = m; i <= n; i++) {
      let res = [];
      for (let j = 2; j < n; j++) {
        if (i % j === 0) continue;
        res.push([i, j]);
      }
      if (!(n - 3 - res.length)) primes.push(i);
    }

    for (let i = 0; i < primes.length; i++) {
      if (primes[i + 1] - primes[i] === g) {
        return [primes[i], primes[i + 1]];
      }
    }
    return null;
  }
  // console.log(gap(10, 300, 400));
  // console.log(gap(6, 100, 110));
}

{  /** 8 kyu  Get number from string  
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56  */

  const getNumberFromString = s => +s.match(/\d/g).join('');
  // const getNumberFromString = s => +s.replace(/\D/g, '');
  // const getNumberFromString = s => +s.split('').filter(e => e.match(/\d/)).join('');
  // console.log(getNumberFromString("this is number: 7"));
  // console.log(getNumberFromString("123"));
}

{  /** 7 kyu  Switcheroo  
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
Example:
'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'  */

  const switcheroo = x => x.replace(/[ab]/g, x => x === 'a' ? 'b' : 'a');
  // const switcheroo = x => x.replaceAll('a', 'd').replaceAll('b', 'a').replaceAll('d', 'b');

  // console.log(switcheroo('aaabcccbaaa'));
}

{  /** 8 kyu  Who is going to pay for the wall? 
Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"          */

  const whoIsPaying = name => name.length > 2 ? [name, name.slice(0, 2)] : [name.slice(0, 2)];
  // console.log(whoIsPaying('Mexico'));
}

{  /**  7 kyu  Number of Decimal Digits
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.
All inputs will be valid. */

  const digits = n => `${n}`.length;
  // const digits = n => n.toString().length;
  // console.log(digits(342));
}

{  /**  8 kyu  Check same case
Write a function that will check if two given characters are the same case.
If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1       */

  const sameCase = (a, b) => {
    if ((/\w/).test(b) && (/\w/).test(a) && (/\D/).test(b) && (/\D/).test(a)) return (/[A-Z]/).test(a) === (/[A-Z]/).test(b) ? 1 : 0;
    return -1;
  };

  // console.log(sameCase('a', ','));
}

{  /**  7 kyu  Binary Addition 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.
Examples:(Input1, Input2 --> Output (explanation)))
 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)         */

  function addBinary(a, b) {
    return (a + b).toString(2);
  }
  // console.log(addBinary(5, 9));
  // console.log(addBinary(5, 1));
}

{  /**  8 kyu  Tip Calculator  Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
You need to consider the following ratings:
Terrible: tip 0%
Poor: tip 5%
Good: tip 10%
Great: tip 15%
Excellent: tip 20%
The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
"Rating not recognised" in Javascript, Python and Ruby...
...or null in Java
...or -1 in C#
Because you're a nice person, you always round up the tip, regardless of the service.     */

  function calculateTip(amount, rating) {
    switch (rating.toLowerCase()) {
      case 'terrible': return 0;
      case 'poor': return Math.ceil(amount * 0.05);
      case 'good': return Math.ceil(amount * 0.1);
      case 'great': return Math.ceil(amount * 0.15);
      case 'excellent': return Math.ceil(amount * 0.2);
      default: return "Rating not recognised";
    }
  }
  // console.log(calculateTip(20, "Excellent"));
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
If you are given an array with multiple answers, return the lowest correct index.      */

  const findEvenIndex = arr => arr.findIndex((_, i) => arr.slice(0, i).reduce((sum, e) => sum + e, 0) === arr.slice(i + 1).reduce((sum, e) => sum + e, 0));

  // function findEvenIndex(arr) {
  //   let leftSum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     let rightSum = 0;

  //     for (let j = i + 1; j < arr.length; j++) {
  //       rightSum += arr[j];
  //     }
  //     if (leftSum === rightSum) return i;
  //     console.log(leftSum);
  //     console.log(rightSum);
  //     leftSum += arr[i];
  //   }
  //   return -1;
  // }
  // console.log(findEvenIndex([1, 2, 3, 47, 3, 2, 1]));
  // console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
  // console.log(findEvenIndex([10, -80, 10, 10, 15, 35]));
}

{  /**  7 kyu  Ones and Zeros 
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.    */

  const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
  // const binaryArrayToNumber = arr => arr.reverse().reduce((res, e, i) => res + e * 2 ** i, 1) - 1;

  // console.log(binaryArrayToNumber([1, 0, 1, 0]));
}

{  /**  8 kyu  Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
Examples
"Hi!"     ---> "Hi!"
"Hi!!!"   ---> "Hi!"
"!Hi"     ---> "Hi!"
"!Hi!"    ---> "Hi!"
"Hi! Hi!" ---> "Hi Hi!"
"Hi"      ---> "Hi!"        */

  const remove = string => string.replace(/!/g, '') + '!';
  // console.log(remove("Hi! Hi!"));
}

{  /**  7 kyu  Sum of Cubes
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
Assume that the input n will always be a positive integer.
Examples: (Input --> output)
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)          */

  // const sumCubes = n => [...Array(n).keys()].reduce((sum, e) => sum + (e + 1) ** 3, 0);
  const sumCubes = (n, sum = 0) => n < 1 ? sum : sumCubes(n - 1, sum + n ** 3);

  // const sumCubes = n => n === 1 ? n ** 3 : n ** 3 + sumCubes(n - 1);

  // function sumCubes(n) {
  //   if (n === 1) {
  //     return n ** 3;
  //   } else {
  //     return n ** 3 + sumCubes(n - 1);
  //   }
  // }

  // console.log(sumCubes(3));
}

{  /**  8 kyu  Grasshopper - Combine strings
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.
Example:
combineNames('James', 'Stevens')
returns:
'James Stevens'  */

  const combineNames = (firstName, lastName) => [firstName, lastName].join(' ');
  // console.log(combineNames('James', 'Stevens'));
}

{  /** 5 kyu  Best travel
John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.
Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)
ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
Notes:
try not to modify the input list of distances ls
in some languages this "list" is in fact a string (see the Sample Tests).     */

  function chooseBestSum(t, k, ls) {

  }
  // console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
  // console.log(chooseBestSum(163, 4, [50, 55, 56, 57, 58]));
  // console.log(chooseBestSum(163, 4, [91]));
}

{  /** 8 kyu  Holiday VI - Shark Pontoon 
Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
You are given 5 variables;
sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
sharkSpeed = how fast it can move in metres/second.
pontoonDistance = how far you need to swim to safety in metres.
youSpeed = how fast you can swim in metres/second.
dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
The pontoon, you, and the shark are all aligned in one dimension.
If you make it, return "Alive!", if not, return "Shark Bait!".         */

  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) sharkSpeed /= 2;
    return pontoonDistance / youSpeed < sharkDistance / sharkSpeed ? "Alive!" : "Shark Bait!";
  }
  // console.log(shark(24, 0, 4, 8, true));
  // console.log(shark(12, 50, 4, 8, true));
}

{  /**  6 kyu  Consonant value
Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".
We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"
-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26
For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
For C: do not mutate input. */

  const solve = s => Math.max(...s.split(/a|e|i|o|u/).map(e => e.split('').reduce((sum, el) => sum + el.charCodeAt() - 96, 0)));

  // console.log(solve("mischtschenkoana"));
}

{  /**  7 kyu  Mumbling
 This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.     */

  const accum = (s) => s.split('').map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i)).join('-');
  // const accum = (s) => s.split('').map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i) + '-').join('').slice(0, -1);

  // console.log(accum('ZpglnRxqenU'));
}

{  /** 8 kyu  Is it a number?
Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
Valid examples, should return true:
isDigit("3")
isDigit("  3  ")
isDigit("-3.23")
should return false:
isDigit("3-4")
isDigit("  3   5")
isDigit("3 5")
isDigit("zero")       */

  function isDigit(s) {
    return !isNaN(s);  /** 1 test failed */
  }
  // console.log(isDigit('8.7'));
}

{  /** 8 kyu  Remove duplicates from list
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
The order of the sequence has to stay the same.
Examples:
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]           */

  function distinct(a) {
    // return Array.from(new Set(a));
    return [...new Set(a)];
    // return a.filter((e, i) => i === a.indexOf(e));
  }
  // console.log(distinct([1, 2, 1, 1, 3, 2]));
}

{  /**  8 kyu  Beginner - Reduce but Grow
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24        */

  const grow = x => eval(x.join('*'));
  // const grow = x => x.reduce((res, el) => res * el, 1);
  // console.log(grow([1, 2, 3]));
}

{  /** 7 kyu  Power of two 
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
You may assume the input is always valid.
Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.      */

  // const isPowerOfTwo = n => Math.log2(n) % 1 === 0;
  // const isPowerOfTwo = n => Number.isInteger(Math.log2(n));
  const isPowerOfTwo = n => n < 1 ? false : n === 1 ? true : n % 2 ? false : isPowerOfTwo(n /= 2);
  // const isPowerOfTwo = n => n === 1 ? true : n < 1 ? false : isPowerOfTwo(n /= 2);
  // const isPowerOfTwo = n => n === 1 ? true : n % 2 || n < 1 ? false : isPowerOfTwo(n /= 2);

  // function isPowerOfTwo(n) {
  // if (n === 1) return true;
  // if (n % 2) {
  //   return false;
  // }

  // return isPowerOfTwo(n /= 2);

  // }
  // console.log(isPowerOfTwo(4096));
  // console.log(isPowerOfTwo(0));
}

{  /**
Time to test your basic knowledge in functions! Return the odds from a list:
[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []           */

  const odds = values => values.filter(e => e % 2);
  // console.log(odds([1, 2, 3, 4, 5]));
  // console.log(odds([2, 4]));
}

{  /** 8 kyu Name on billboard
   You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).
You can not use multiplier "*" operator.
If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).  */

  function billboard(name, price = 30) {
    // return name.length / (1 / price);

    return [...name].reduce((result, _) => result + price, 0);

    // let result = 0;
    // for (let i = 0; i < name.length; i++) {
    //   result += price;
    // }
    // return result;
  }
  // console.log(billboard("Hadufuns John", 20));
}

{  /** 8 kyu  Is there a vowel in there? 
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
If they are, change the array value to a string of that vowel.
Return the resulting array.     */

  const isVow = a => a.map(el => {
    if (el === 'a'.charCodeAt() || el === 'e'.charCodeAt() || el === 'i'.charCodeAt() || el === 'o'.charCodeAt() || el === 'u'.charCodeAt()) return el = String.fromCharCode(el);
    return el;
  });
  // console.log(isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106]));
}

{  /**  7 kyu  Greet Me
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
Example:
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"       */

  const greet = name => `Hello ${name.toLowerCase().replace(/\w/, el => el.toUpperCase())}!`;
  // const greet = name => 'Hello ' + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + '!';
  // console.log(greet('riley'));
}

{  /**  8 kyu  Reverse List Order
In this kata you will create a function that takes in a list and returns a list with the reverse order.
Examples (Input -> Output)
* [1, 2, 3, 4]  -> [4, 3, 2, 1]
* [9, 2, 0, 7]  -> [7, 0, 2, 9]      */

  // const reverseList = list => list.reduceRight((arr, el) => arr.concat(el), []);
  const reverseList = list => list.reduce((arr, el, i) => arr.concat(list[list.length - 1 - i]), []);
  // const reverseList = list => list.reverse();
  // console.log(reverseList([9, 2, 0, 7]));
}

{  /**  6 kyu  Buying a car 
Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:

parameter (positive int or float, guaranteed) start_price_old (Old car price)
parameter (positive int or float, guaranteed) start_price_new (New car price)
parameter (positive int or float, guaranteed) saving_per_month 
parameter (positive float or int, guaranteed) percent_loss_by_month

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
Detail of the above example:
end month 1: percent_loss 1.5 available -4910.0
end month 2: percent_loss 2.0 available -3791.7999...
end month 3: percent_loss 2.0 available -2675.964
end month 4: percent_loss 2.5 available -1534.06489...
end month 5: percent_loss 2.5 available -395.71327...
end month 6: percent_loss 3.0 available 766.158120825...
return [6, 766] or (6, 766)
where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).

Note:

Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
We don't take care of a deposit of savings in a bank:-)    */

  const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
    if (startPriceOld - startPriceNew >= 0) return [0, Math.round(startPriceOld - startPriceNew)];
    let percentLoss = percentLossByMonth;

    let differ = (startPriceOld - startPriceNew) * (100 - percentLoss) / 100;
    let available = differ + savingperMonth;
    if (available >= 0) return [1, Math.round(available)];

    for (let i = 2; available < 0; i++) {
      i % 2 ? percentLoss : percentLoss += 0.5;
      differ *= (100 - percentLoss) / 100;
      available = differ + savingperMonth * i;
      if (available >= 0) return [i, Math.round(available)];
    }
  };
  // console.log(nbMonths(2000, 8000, 1000, 1.5));
  // console.log(nbMonths(1600, 3000, 1000, 1.2));
}

{  /**  6 kyu  Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""             */

  function solution(string) {
    // return string.replace(/[A-Z]/g, " $&");
    return string.split(/(?=[A-Z])/).join(' ');
    // return string.replace(/([A-Z])/g, ' $1');
    // return string.split("").map(e => e === e.toUpperCase() ? e = ` ${e}` : e).join('');
  }
  // console.log(solution("camelCasing"));
}

{  /**  5 kyu  Sum of Pairs 
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
NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.     */
  // Execution Timed Out

  function sumPairs(ints, s) {
    const inds = [];
    const pair = [];
    let array = [...ints];

    for (let i = 0; i < array.length; i++) {
      const delta = s - array[i];
      ints = ints.slice(1);

      for (let j = 0; j < ints.length; j++) {
        if (delta !== ints[j]) continue;
        pair.push(array[i], ints[j],);
        inds.push(j);
      }
    }
    if (!pair.length) return undefined;
    return (pair.length === 4 && inds[1] < inds[0]) ? pair.slice(-2) : pair.slice(0, 2);
  }
  // console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
}

{  /** 8 kyu  Power
  The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.   */

  const numberToPower = (number, power) => Array(power).fill(number).reduce((res, n) => res * n, 1);
  // const numberToPower = (number, power) => power > 0 ? number * numberToPower(number, power - 1) : 1;

  // function numberToPower(number, power) {
  //   let res = 1;
  //   for (let i = 0; i < power; i++) {
  //     res *= number;
  //   }
  //   return res;
  // }
  // console.log(numberToPower(3, 2));
  // console.log(numberToPower(10, 6));
}

{  /** 8 kyu  Training JS #2: Basic data types--Number
  I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.  */
  let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

  function equal1() {
    let a = v1,
      b = v1;
    return a + b;
  }

  //Please refer to the example above to complete the following functions
  function equal2() {
    let a = v3, //set number value to a
      b = v1; //set number value to b
    return a - b;
  }

  function equal3() {
    let a = v1, //set number value to a
      b = v5; //set number value to b
    return a * b;
  }

  function equal4() {
    let a = v4, //set number value to a
      b = v5; //set number value to b
    return a / b;
  }

  function equal5() {
    let a = v6, //set number value to a
      b = v3; //set number value to b
    return a % b;
  }
}

{  /** 8 kyu  Multiplication table for number
  Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.  */

  const multiTable = number => [...Array(10)].map((_, i) => `${++i} * ${number} = ${i * number}`).join('\n');
  // const multiTable = number => Array(10).fill('').map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join('\n');
  // const multiTable = number => Array.from({ length: 10 }, (_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join('\n');
  // const multiTable = number => `1 * ${number} = ${number}\n2 * ${number} = ${2 * number}\n3 * ${number} = ${3 * number}\n4 * ${number} = ${4 * number}\n5 * ${number} = ${5 * number}\n6 * ${number} = ${6 * number}\n7 * ${number} = ${7 * number}\n8 * ${number} = ${8 * number}\n9 * ${number} = ${9 * number}\n10 * ${number} = ${10 * number}`;
  // console.log(multiTable(5));
}

{  /**  7 kyu  Jaden Casing Strings
  Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"    /test failed */


  String.prototype.toJadenCase = function () {
    this.s = "How can mirrors be real if our eyes aren't real";
    const subStrs = this.s.split(' ');
    let newStr = '';
    subStrs.forEach(s => [(newStr += ' ' + s.replace(s[0], s[0].toUpperCase()))]);
    return newStr.trim();
  };

  // console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"));
}

{  /**   7 kyu  Most digits 
  Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.       */

  function findLongest(array) {
    return array.reduce((res, el) => res = (el + '').length > (res + '').length ? el : res, 0);
  }
  // console.log(findLongest([8, 900, 500]));
}

{  /**  7 kyu  Sort the Gift Code
  Happy Holidays fellow Code Warriors!
Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.
Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?
Sort the Gift Code
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.
Examples (Input -- => Output):
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"      */

  function sortGiftCode(code) {
    return code.split('').sort().join('');
  }
  // console.log(sortGiftCode('abcdef'));
}

{  /**  8 kyu  OOP: Object Oriented Piracy
 You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!
Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?
You begin with writing a generic Ship class / struct:
class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
}
Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:
draft - an estimate of the ship's weight based on how low it is in the water
crew - the count of crew on board
const titanic = new Ship(15, 10);
Task
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.
Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!
Add the method
isWorthIt
to decide if the ship is worthy to loot. For example:
titanic.isWorthIt() // return false
Good luck and may you find GOOOLD!    */

  // function Ship(draft, crew) {
  //   this.draft = draft;
  //   this.crew = crew;
  //   this.isWorthIt = function () {
  //     return this.draft - this.crew * 1.5 > 20;
  //   };
  // }

  // function Ship(draft, crew) {
  // this.draft = draft;
  // this.crew = crew;
  // this.isWorthIt = function () {
  //   return this.draft - this.crew * 1.5 > 20;
  // };
  // }
  // Ship.prototype.isWorthIt = function () {
  //   return this.draft - this.crew > 20;
  // };

  class Ship {
    constructor(draft, crew) {
      this.draft = draft;
      this.crew = crew;
    }
    isWorthIt() {
      return this.draft - this.crew * 1.5 > 20;
    }
  }
  // const tit = new Ship(72, 34);
  // console.log(tit.isWorthIt());
}

{  /**  6 kyu  A Rule of Divisibility by 13
  From Wikipedia:
"A divisibility rule is a shorthand way of determining whether a given integer is divisible by a fixed divisor without performing the division, usually by examining its digits."
When you divide the successive powers of 10 by 13 you get the following remainders of the integer divisions:
1, 10, 9, 12, 3, 4 because:
10 ^ 0 ->  1 (mod 13)
10 ^ 1 -> 10 (mod 13)
10 ^ 2 ->  9 (mod 13)
10 ^ 3 -> 12 (mod 13)
10 ^ 4 ->  3 (mod 13)
10 ^ 5 ->  4 (mod 13)
(For "mod" you can see: https://en.wikipedia.org/wiki/Modulo_operation)
Then the whole pattern repeats. Hence the following method:
Multiply
the right most digit of the number with the left most number in the sequence shown above,
the second right most digit with the second left most digit of the number in the sequence.
The cycle goes on and you sum all these products. Repeat this process until the sequence of sums is stationary.
Example:
What is the remainder when 1234567 is divided by 13?

7      6     5      4     3     2     1  (digits of 1234567 from the right)
×      ×     ×      ×     ×     ×     ×  (multiplication)
1     10     9     12     3     4     1  (the repeating sequence)
Therefore following the method we get:
 7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
We repeat the process with the number 178:
8x1 + 7x10 + 1x9 = 87
and again with 87:
7x1 + 8x10 = 87
From now on the sequence is stationary (we always get 87) and the remainder of 1234567 by 13 is the same as the remainder of 87 by 13 ( i.e 9).
Task:
Call thirt the function which processes this sequence of operations on an integer n (>=0). thirt will return the stationary number.
thirt(1234567) calculates 178, then 87, then 87 and returns 87.
thirt(321) calculates 48, 48 and returns 48 */

  function thirt(n) {
    // const powerArray = [1, 2, 4, 8, 3, 6, 12, 11, 9, 8, 10, 7];
    const powerArray = [1, 10, 9, 12, 3, 4];
    // return String(n).length <= 2 ? n : thirt(n = (n + '').split('').sort((a, b) => b - a).reduce((sum, el, i) => sum += powerArray[i % powerArray.length] * Number(el), 0));
  }
  // console.log(thirt(8529));
}

{  /**  7 kyu  esreveR
  Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
(the dedicated builtin(s) functionalities are deactivated) */

  // const reverse = function (array) {
  //   return array.reduceRight((ar, el) => {
  //     ar.push(el);
  //     return ar;
  //   }, []);
  // };

  // const reverse = array => array.reduceRight((ar, el) => {
  //   ar.push(el);
  //   return ar;
  // }, []);
  // const reverse = array => array.reduceRight((ar, el) => [...ar, el], []);
  const reverse = array => array.reduce((ar, el) => [el].concat(ar), []);
  // const reverse = array => array.map((el, i, ar) => el = ar[ar.length - 1 - i]);

  // console.log(reverse([1, null, 14, "two"]));
}

{  /** 8 kyu  get ascii value of character 
  Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/  */

  const getASCII = c => c.charCodeAt();
  // console.log(getASCII('a'));
}

{  /**  8 kyu  Take the Derivative
  This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
for example:
derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8. It should output "56x^7", the first number 56 being the product of the two numbers, and the second number being the exponent minus 1.
derive(7, 8) --> this should output "56x^7" 
derive(5, 9) --> this should output "45x^8" 
Notes:
The output of this function should be a string
The exponent will never be 1, and neither number will ever be 0  */

  function derive(coefficient, exponent) {
    // return `${coefficient * exponent}x^${exponent - 1}`;
    return coefficient * exponent + 'x^' + (exponent - 1);
  }
  // console.log(derive(7, 9));
}

{  /**  7 kyu  Check the exa
  The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
If the score < 0, return 0.
For example:
    Correct answer    |    Student's answer   |   Result         
 ---------------------|-----------------------|-----------
 ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
 ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
 ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
 ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0            */

  // function checkExam(array1, array2) {
  //   return array2.reduce((res, el, i) => {
  //     if (el === "") return res + 0;
  //     if (el === array1[i]) return res + 4;
  //     if (el !== array1[i]) return res - 1;
  //   }, 0) < 0 ? 0 : array2.reduce((res, el, i) => {
  //     if (el === "") return res + 0;
  //     if (el === array1[i]) return res + 4;
  //     if (el !== array1[i]) return res - 1;
  //   }, 0);
  // }

  // function checkExam(array1, array2, res = 0) {
  //   for (let i = 0; i < array2.length; i++) {
  //     if (array2[i] === "") res += 0;
  //     if (array2[i] === array1[i]) res += 4;
  //     if (array2[i] !== array1[i] && array2[i] !== '') res -= 1;
  //   }
  //   return res > 0 ? res : 0;
  // }

  // function checkExam(array1, array2, res = 0) {
  //   for (let i = 0; i < array2.length; i++) {
  //     array2[i] === array1[i] ? res += 4 : array2[i] ? res -= 1 : res;
  //   }
  //   return res > 0 ? res : 0;
  // }

  function checkExam(array1, array2, res = 0) {
    for (let i = 0; i < array2.length; i++) {
      res += array2[i] === array1[i] ? 4 : array2[i] ? - 1 : 0;
    }
    return res > 0 ? res : 0;
  }

  // const checkExam = (array1, array2) =>
  //   Math.max(array2.reduce((res, el, i) => {
  //     if (el === "") return res + 0;
  //     if (el === array1[i]) return res + 4;
  //     if (el !== array1[i]) return res - 1;
  //   }, 0), 0);

  // const checkExam = (array1, array2) => Math.max(array2.reduce((res, el, i) => (el === "") ? res + 0 : (el === array1[i]) ? res + 4 : res - 1, 0), 0);

  // console.log(checkExam(["a", "a", "b", "b"], ["", "", "o", "b"]));
}

{  /** 7 kyu  You're a square!
  You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.
Task
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples:
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false    */

  // const isSquare = n => Number.isInteger(n ** (1 / 2));
  // const isSquare = n => n ** (1 / 2) % 1 === 0;
  // const isSquare = n => parseInt(n ** (1 / 2)) === n ** (1 / 2);
  // const isSquare = n => n ** (1 / 2) === ~~(n ** (1 / 2));
  const isSquare = n => !(n ** (1 / 2) % 1);

  // console.log(isSquare(409));
}

{  /** 8 kyu  Who ate the cookie?
  For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)    */

  const cookie = x => typeof x === 'string' ? "Who ate the last cookie? It was Zach!"
    : typeof x === 'number' ? "Who ate the last cookie? It was Monica!"
      : "Who ate the last cookie? It was the dog!";

  // console.log(cookie("Ryan"));
  // console.log(cookie(44.2));
  // console.log(cookie([]));
}

{  /**7 kyu  Filter the number 
  Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
Task
Your task is to return a number from a string.
Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.  */

  // const filterString = value => +value.replace(/\D/g, '');
  const filterString = value => +value.split('').filter(el => !isNaN(el)).join('');
  // const filterString = value => +value.split('').filter(el => el.match(/\d/)).join('');
  // console.log(filterString("aa1bb2cc3dd"));
}

{  /** 8 kyu  A Strange Trip to the Market
  You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."
It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!
There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.
Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty". Your function should return true if you're talking with The Loch Ness Moster, false otherwise.   */

  // function isLockNessMonster(s) {
  //   const monsterWords = ["tree fiddy", "three fifty", "3.50"];
  //   return monsterWords.find(el => s.includes(el)) ? true : false;
  // }

  // const isLockNessMonster = s => /th?ree fi(?:ft|dd)y|3\.50/.test(s);
  // const isLockNessMonster = s => /tree fiddy|3\.50/.test(s);
  const isLockNessMonster = s => ~s.indexOf('tree fiddy') || ~s.indexOf('3.50') ? true : false;  /**  ~  binary not operator */
  // console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
}

{  /**  8 kyu  Sleigh Authentication
  Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.
Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.
Examples:
var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)   */

  // class Sleigh {
  //   constructor(name, password) {
  //     this.name = name;
  //     this.password = password;
  //   }
  //   authenticate(name, password) {
  //     return (name === "Santa Claus" && password === "Ho Ho Ho!");
  //   };
  // };

  // class Sleigh {
  //   authenticate(name, password) {
  //     return (name === "Santa Claus" && password === "Ho Ho Ho!");
  //   };
  // };

  class Sleigh { } /**  or old version: function Sleigh() { } */
  Sleigh.prototype.authenticate = (name, password) => name === "Santa Claus" && password === "Ho Ho Ho!";
  // console.log(Sleigh.prototype.authenticate("Santa Claus", "Ho Ho Ho!"));
}

{  /**7 kyu  Count the divisors of a number 
  Count the number of divisors of a positive integer n.
Random tests go up to n = 500000.
Examples (input --> output)
4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.    */

  // const getDivisorsCnt = n => {
  //   let count = 0;
  //   for (let i = 1; i <= n; i++) {
  //     !(n % i) ? count += 1 : count;
  //   }
  //   return count;
  // };

  const getDivisorsCnt = n => Array.from({ length: n }, (el, i) => el = i + 1).reduce((count, el) => !(n % el) ? count + 1 : count, 0);
  // const getDivisorsCnt = n => Array.from({ length: n }, (el, i) => el = i + 1).reduce((count, el) => !(n % el) ? count + 1 : count, 0);
  // const getDivisorsCnt = n => Array.from({ length: n }, (el, i) => el = i + 1).filter(el => !(n % el)).length;
  // console.log(getDivisorsCnt(12));
}

{  /** 6 kyu  +1 Array
  Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.
Examples
Valid arrays
[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]
Invalid arrays
[1, -9] is invalid because -9 is not a non-negative integer
[1, 2, 33] is invalid because 33 is not a single-digit integer    */

  function upArray(arr) {
    if (arr.find(e => e > 9 || e < 0)) return null;
    const newArr = +arr.join('') + 1;
    if (String(newArr).length >= arr.length) return String(newArr).split('').map(e => +e);
    arr[arr.length - 1] += 1;
    return arr;
  }
  // console.log(upArray([2, 3, 9, 9]));
  // console.log(upArray([0, 3]));
  // console.log(upArray([9, 9]));
  // console.log(upArray([9, 19]));
  // console.log(upArray([9, -1]));
}

{  /** 8 kyu  Grasshopper - Messi goals function
  Messi goals function
Messi is a soccer player with goals in three leagues:
LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid.
For example:
5, 10, 2  -->  17      */

  const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  // console.log(goals(12, 4, 7));
}

{  /** 7 kyu  Spacify
  Modify the spacify function so that it returns the given string with spaces inserted between each character.
spacify("hello world") // returns "h e l l o   w o r l d"   */

  const spacify = str => [...str].join(' ');
  // const spacify = str => str.split(' ').map(e => e.split('').join(' ')).join('   ');
  // console.log(spacify("hello world"));
}

{  /** 8 kyu  Type of sum 
    Return the type of the sum of the two arguments  */

  const typeOfSum = (a, b) => typeof (a + b);
  // console.log(typeOfSum(12, 1));
  // console.log(typeOfSum(true, 1));
  // console.log(typeOfSum(null, undefined));
  // console.log(typeOfSum(null, ''));
}

{ /** 8 kyu  Find Nearest square number
  Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.
For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.
If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.
Good luck :)   */
  const nearestSq = n => (Math.round(n ** .5)) ** 2;
  // const nearestSq = n => n ** .5 - ~~(n ** .5) < .5 ? (~~(n ** .5)) ** 2 : (Math.ceil(n ** .5) ** 2);
  // console.log(nearestSq(15));
};

{  /** 7 kyu  Simple remove duplicates 
  Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:
For input: [3, 4, 4, 3, 6, 3]
remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]
More examples can be found in the test cases.  */

  const solve = arr => [...new Set(arr.reverse())].reverse();
  // const solve = arr => arr.filter((e, i, ar) => i === ar.lastIndexOf(e));
  // console.log(solve([3, 4, 4, 3, 6, 3]));
}

{  /**  8 kyu  Kata Example Twist
  This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
Add the value "codewars" to the array websites 1,000 times.   */


  // let arr = [];
  // arr.push((('codewars ')).repeat(1000));
  // const websites = arr[0].trim().split(' ');

  const websites = Array.from({ length: 1000 }, () => 'codewars');
  // const websites = Array.from({ length: 1000 }, el => el = 'codewars');
  // const websites = Array(1000).fill('codewars');
  // console.log(websites);
}

{  /** 6 kyu  Array Helper
  This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Explanation:
square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
Example
var numbers = [1, 2, 3, 4, 5];
numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5] test failed */

  class SecondaryArray extends Array {
    square() {
      return this.map(el => el ** 2);
    }

    cube() {
      return this.map(el => el ** 3);
    }

    average() {
      return this.reduce((sum, el) => sum + el, 0) / this.length;
    };

    sum() {
      return this.reduce((sum, el) => sum + el, 0);
    };

    even() {
      return this.filter(el => !(el % 2));
    };

    odd() {
      return this.filter(el => el % 2);
    };
  }

  const numbers = new SecondaryArray(2, 4, 6, 7, 11);

  // console.log(numbers.square());
  // console.log(numbers.cube());
  // console.log(numbers.average());
  // console.log(numbers.sum());
  // console.log(numbers.even());
  // console.log(numbers.odd());



  // const myArray = new ExtendedArray(1, 2, 3, 4);
  // console.log(myArray.sum()); // Outputs: 10

  // Array.prototype.square = function (numbers) {
  //     return numbers.map(el => el ** 2);
  //   };

  // Array.prototype.cube = function (numbers) {
  //     return numbers.map(el => el ** 3);
  //   };

  // Array.prototype.average = function (numbers) {
  //     return numbers.reduce((sum, el) => sum + el, 0) / numbers.length;
  //   };

  // Array.prototype.sum = function (numbers) {
  //     return numbers.reduce((sum, el) => sum + el, 0);
  //   };

  // Array.prototype.even = function (numbers) {
  //     return numbers.filter(el => !(el % 2));
  //   };

  // Array.prototype.odd = function (numbers) {
  //     return numbers.filter(el => el % 2);
  //   };

  // console.log(Array.prototype.square([2, 4, 6]));
  // console.log(Array.prototype.cube([2, 4, 6]));
  // console.log(Array.prototype.average([2, 4, 6]));
  // console.log(Array.prototype.sum([2, 4, 6]));
  // console.log(Array.prototype.even([2, 4, 6]));
  // console.log(Array.prototype.odd([2, 4, 6, 7, 11]));
}

{  /**  6 kyu  The Vowel Code
  Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
For example, decode("h3 th2r2") would return "hi there".
For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.   */
  {

    const encode = string => string.replace(/[aeiou]/g, el => ' aeiou'.indexOf(el));
    const decode = string => string.replace(/\d/g, el => ' aeiou'[el]);

    // const vowels = ['a', 'e', 'i', 'o', 'u'];

    // function encode(string) {
    //   return string.split('').map(el => vowels.includes(el) ? el = vowels.indexOf(el) + 1 + '' : el).join('');
    // }

    // function decode(string) {
    //   return string.split('').map(el => {
    //     if ((/\D/).test(el)) return el;
    //     return vowels[+el - 1];
    //   }).join('');
    // }

    // console.log(encode('hello'));
    // console.log(encode('This is an encoding test.'));
    // console.log(decode('h2ll4'));
  }
}

{  /** 8 kyu  Pythagorean Triple
  Given an unsorted array of 3 positive integers [ n1, n2, n3 ], determine if it is possible to form a Pythagorean Triple using those 3 integers.
A Pythagorean Triple consists of arranging 3 integers, such that:
a2 + b2 = c2
Examples
[5, 3, 4] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
[3, 4, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 32 + 42 = 52
[13, 12, 5] : it is possible to form a Pythagorean Triple using these 3 integers: 52 + 122 = 132
[100, 3, 999] : it is NOT possible to form a Pythagorean Triple using these 3 integers - no matter how you arrange them, you will never find a way to satisfy the equation a2 + b2 = c2
Return Values
For Python: return True or False
For JavaScript: return true or false
Other languages: return 1 or 0 or refer to Sample Tests.    */

  const isPythagoreanTriple = (integers) => {
    const [x, y, max] = integers.sort((a, b) => a - b);
    return x ** 2 + y ** 2 === max ** 2;
  };

  // const isPythagoreanTriple = (integers) => {
  //   const max = Math.max(...integers);
  //   const [x, y] = integers.filter(e => e !== max);
  //   return x ** 2 + y ** 2 === max ** 2;
  // };
  // console.log(isPythagoreanTriple([3, 4, 5]));
}

{  /** 7 kyu  Automorphic Number (Special Numbers Series #6)
  Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Task
Given a number determine if it Automorphic or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive
Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .
autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .
autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .
autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225 .
autoMorphic (625) -->> return "Automorphic"
Explanation:
625 squared is 390625 , Ends with the same number's digits which are 625 .
autoMorphic (1) -->> return "Automorphic"
Explanation:
1 squared is 1 , Ends with the same number's digits which are 1 .
autoMorphic (6) -->> return "Automorphic"
Explanation:
6 squared is 36 , Ends with the same number's digits which are 6    */

  const automorphic = n => String(n * n).endsWith(n) ? 'Automorphic' : 'Not!!';
  // const automorphic = n => RegExp(`${n}$`).test(n * n) ? 'Automorphic' : 'Not!!';
  // const automorphic = n => `${n * n}`.slice(-('' + n).length) === '' + n ? 'Automorphic' : 'Not!!';

  // console.log(automorphic(625));
};

{  /** 8 kyu  Training JS #8: Conditional statement--switch
  Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.
+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
Tip: Using default for most of the cases can reduce your work.*/

  function howManydays(month) {
    let days;
    switch (month) {
      case 2:
        days = 28;
        break;

      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;

      default: days = 31;
    }
    return days;
  }
  // console.log(howManydays(4));
}

{  /** 8 kyu  Training JS #18: Methods of String object--concat() split() and its good friend join()
  Implement a function which accepts 2 arguments: string and separator.
The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
For example:
splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!    */

  function splitAndMerge(string, separator) {
    return string.split(' ').map(el => el.split('').join(separator)).join(' ');
  }
  // console.log(splitAndMerge("My name is John", " "));
  // console.log(splitAndMerge("My name is John", "-"));
  // console.log(splitAndMerge("My name is John", "."));
  // console.log(splitAndMerge("My name is John", ","));
}

{  /** 7 kyu  Tidy Number
  A Tidy number is a number whose digits are in non-decreasing order.
Task
Given a number, Find if it is Tidy or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as a Boolean
Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .
tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .
tidyNumber (13579) ==> return (true)
Explanation:
The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .
tidyNumber (2335) ==> return (true)
Explanation:
The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3     */

  const tidyNumber = n => n === +[...`${n}`].sort().join('');
  // const tidyNumber = n => n === +[...n + ''].sort().join('');
  // const tidyNumber = n => n === +(n + '').split('').sort().join('');
  // console.log(tidyNumber(2335));
}

{ /** 8 kyu  Enumerable Magic - Does My List Include This?
  Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false. */

  // const include = (arr, item) => arr.includes(item);
  const include = (arr, item) => arr.indexOf(item) >= 0;
  // const include = (arr, item) => arr.some(e => e === item);
  // console.log(include([1, 2, 3, 4, 5], 3));
}

{   /** 8 kyu.
   Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests. */
  function twoDecimalPlaces(n) {
    return n.toFixed(2);
  }
  // console.log(twoDecimalPlaces(5.5589));

  /** 8 kyu Exclamation marks series #2: Remove all exclamation marks from the end of sentence */

  function remove(string) {
    return string.replace(/!$/, '');
  }

  /** 7 kyu
max diff - easy
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7   */

  function maxDiff(list) {
    return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0;
  };
  // console.log(maxDiff([1, 2, 3, -4]));

  /** 7 kyu Smallest value of an array
   Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0     */

  function min(arr, toReturn) {
    const n = Math.min(...arr);
    return toReturn === 'index' ? arr.indexOf(n) : n;
  }

  // console.log(min([1, 2, 3, 4, 5], 'value'));
  // console.log(min([1, 2, 3, 4, 5], 'index'));
}

{  /** 8 kyu  Compare within margin 
  Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

Please note the following:
When a is close to b, return 0.
For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.
Otherwise...
When a is less than b, return -1.
When a is greater than b, return 1.
If margin is not given, treat it as if it were zero.
Assume: margin >= 0
Tip: Some languages have a way to make parameters optional.
Example 1
If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.
This is because a and b are no more than 3 numbers apart.
Example 2
If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.
This is because the distance between a and b is greater than 0, and a is less than b.    */

  function closeCompare(a, b, margin = 0) {
    return a + margin < b ? -1 : a - margin > b ? 1 : 0;
  }
  // console.log(closeCompare(1.99, 5, 3));
}

{  /** 7 kyu  Parts of a list 
  Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.
Examples of returns in different languages:
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
or
 a = {"az", "toto", "picaro", "zone", "kiwi"} -->
{{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or 
a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
[("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
or
a = ["az", "toto", "picaro", "zone", "kiwi"] -->
"(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"        */

  // function partlist(arr) {
  //   return arr.map((e, i) => [arr.slice(0, i + 1).join(' '), arr.slice(i + 1).join(' ')]).slice(0, -1);
  // }
  const partlist = arr => arr.map((_, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);

  // console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]));
}

{ /** 5 kyu  What's a Perfect Power anyway?
  A perfect power is a classification of positive integers:
In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.
Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.
Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

Examples
Test.describe("perfect powers", function(){
  Test.it("should work for some examples",function(){
    Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
    Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
    Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
  });
});  */

  const isPP = (n, q = 2) => Math.round(n ** (1 / q) * 10 ** 7) / 10 ** 7 % 1 === 0 ? [(Math.round(n ** (1 / q))), q] : n ** (1 / q) < 2 ? null : isPP(n, q += 1);
  // const isPP = (n, q = 2) => n ** (1 / q) % 1 === 0 || n ** (1 / q) % 1 > .999999 || n ** (1 / q) % 1 < 10 ** -11
  //   ? [(Math.round(n ** (1 / q))), q] : n ** (1 / q) < 2 ? null : isPP(n, q += 1);
  // console.log(isPP(121));
  // console.log(isPP(228669389707));
}

{  /** 7 kyu  Ordered Count of Characters
  Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
Consult the solution set-up for the exact data structure implementation depending on your language.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]    */

  const orderedCount = text => Array(...new Set(text)).map(el => [el, text.split(el).length - 1]);
  // const orderedCount = text => Array(...new Set(text)).map(el => [el, text.match(RegExp(el, 'g')).length]);
  // const orderedCount = text => Array(...new Set(text)).reduce((res, e) => res = [...res, [e, [...text].filter(el => el === e).length]], []);
  // console.log(orderedCount('abracadabra'));
}

{  /** 8 kyu
  Grasshopper - Function syntax debugging 
  A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.  */

  function main(verb, noun) {
    return verb + noun;
  }
  // console.log(main('take ', 'item'));
}

{  /** 6 kyu  Dashatize it
  Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.
 Ex:  274 -> '2-7-4'
      6815 -> '68-1-5'     */

  const dashatize = num => ('' + num).match(/[13579]|[24680]+/g).join('-');
  // const dashatize = num => ('' + num).split('').map(n => (n % 2) ? '-' + n + '-' : n).join('').trim('-').replace(/--/g, '-').replace(/^-|-$/g, '');
  // console.log(dashatize(374982165));
}

{  /**  6 kyu  If you can read this... 
  You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).
Input:
If, you can read?
Output:
India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
Note:
There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace   */

  const NATO = {
    A: 'Alfa',
    N: 'November',
    B: 'Bravo',
    O: 'Oscar',
    C: 'Charlie',
    P: 'Papa',
    D: 'Delta',
    Q: 'Quebec',
    E: 'Echo',
    R: 'Romeo',
    F: 'Foxtrot',
    S: 'Sierra',
    G: 'Golf',
    T: 'Tango',
    H: 'Hotel',
    U: 'Uniform',
    I: 'India',
    V: 'Victor',
    J: 'Juliett',
    W: 'Whiskey',
    K: 'Kilo',
    X: 'Xray',
    L: 'Lima',
    Y: 'Yankee',
    M: 'Mike',
    Z: 'Zulu'
  };  /* There is a preloaded dictionary that you can use, named NATO.   */

  const toNato = words => [...words.toUpperCase()].filter(e => e !== " ").map(e => NATO[e] ? NATO[e] : e).join(' ');
  // const toNato = words => words.replace(/\s/g, '').toUpperCase().replace(/./g, e => NATO[e] ? ' ' + NATO[e] : ' ' + e).trim();

  // function toNato(words) {
  // const nato = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu'];
  // return words.toUpperCase().split(' ').join('').split('').map(e => nato[e.charCodeAt() - 65] ?? e).join(' ');

  // return words.toUpperCase().split(' ').join('').split('').map(e => nato[e.charCodeAt() - 65] ?? e).join(' ');
  // return words.toUpperCase().split(' ').join('').split('').map(e => nato[e.charCodeAt() - 65] ? nato[e.charCodeAt() - 65] : e).join(' ');
  // }

  // console.log(toNato('If you can, read!'));
}

{ /** 6 kyu  Multi-tap Keypad Text Entry on an Old Mobile Phone
  Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|  *  | |space| |  #  |
|     | |  0  | |     |
------- ------- -------
Prior to the development of T9 systems (predictive text entry), the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through all its possible values, in order. For example:

Pressing the button 7 repeatedly will cycle through the letters P -> Q -> R -> S -> 7 -> P -> ....
Pressing the button 0 is cycling through SPACE -> 0 -> SPACE -> 0 -> ....
Buttons with a single symbol on it just type this symbol.
A character is "locked in" and inserted into the message once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). For example:

To type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7).
To type in a digit 3, you would press the button 3 four times.
To type in the message "ABC", you would press the button 2 once, wait a second, then press the button 2 twice to enter the letter B, then pause for another second, and press the button 2 three times, to enter the letter C. You would have to press the button 2 six times in total.
In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated...

For this assignment, write code that can calculate the amount of button presses required for any phrase, with the following requirements:

Punctuation can be ignored for this exercise.
Likewise, the phone doesn't distinguish between upper and lowercase characters (but you should allow your module to accept input in either form, for convenience).
Tested phrases contain letters (A-Z and a-z), digits (0-9), and special characters # and *.     */


  // function presses(phrase) {
  //   const taps = { '1adgjmptw *#': 1, '0behknqux': 2, cfilorvy: 3, '234568sz': 4, 79: 5 };
  //   return [...phrase.toLowerCase()].map((e) => Object.keys(taps).find(el => el.includes(e))).reduce((res, e) => res + taps[e], 0);
  // }

  // function presses(phrase) {
  //   const taps = { '1adgjmptw *#': 1, '0behknqux': 2, cfilorvy: 3, '234568sz': 4, 79: 5 };
  //   return [...phrase.toLowerCase()].reduce((res, e) => res + taps[Object.keys(taps).find(el => el.includes(e))], 0);
  // }

  // const presses = phrase => phrase.replace(/[23568sz]/gi, 4).replace(/[adgjmptw *#]/gi, 1).replace(/[0behknqux]/gi, 2)
  //   .replace(/[cfilorvy]/gi, 3).replace(/[79]/g, 5).split('').reduce((res, e) => res + +e, 0);

  const presses = phrase => [...phrase.toLowerCase()].reduce((res, e) =>
    res + 1 + ['1adgjmptw *#', '0behknqux', 'cfilorvy', '234568sz', '79'].findIndex(el => el.includes(e)), 0);

  // console.log(presses('lol'));
  // console.log(presses('0123456789'));
  // console.log(presses('HOW R U'));
}

{  /** 7 kyu  Going to the cinema
  My friend John likes to go to the cinema. He can choose between system A and system B.

System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
Example:
If John goes to the cinema 3 times:

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

The function movie has 3 parameters: card (price of the card), ticket (normal price of a ticket), perc (fraction of what he paid for the previous ticket) and returns the first n such that

ceil(price of System B) < price of System A.
More examples:
movie(500, 15, 0.9) should return 43 
    (with card the total price is 634, with tickets 645)
movie(100, 10, 0.95) should return 24 
    (with card the total price is 235, with tickets 240)       */

  function movie(card, ticket, perc) {
    let n = 1;
    const ticketPrice = ticket;
    for (n; Math.ceil(card) >= ticketPrice * n; n++) {
      ticket *= perc;
      card += ticket;
      console.log(n, 'ticket->', ticket, 'card->', card, 'n-price->', ticketPrice * n);
    }
    return n;
  }
  // console.log(movie(500, 15, 0.9));
  // console.log(movie(100, 10, 0.95));
}

{ /**8 kyu  Parse float
  Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.    */

  const parseF = s => isNaN(parseFloat(s)) ? null : parseFloat(s);
  // const parseF = s => parseFloat(s) === +s ? parseFloat(s) : null;
  // console.log(parseF('js'));
  // console.log(parseF(true));
  // console.log(parseF('3.002'));
}

{ /**8 kyu  ES6 string addition 
  It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string. */

  function joinStrings(string1, string2) {
    return `${string1} ${string2}`;
  }
  // console.log(joinStrings('aslop', 7));
}

{ /**7 kyu  Sort Out The Men From Boys
  Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd!alt!alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys!alt!alt
Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists .!alt
Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

Input >> Output Examples:
menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
Explanation:
Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
Explanation:
Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }

Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .

menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
Explanation:
Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .    */
  function menFromBoys(arr) {
    arr = Array(...new Set(arr));
    return [...arr.filter(e => !(e % 2)).sort((a, b) => a - b), ...arr.filter(e => e % 2).sort((a, b) => b - a)];
  }
  // console.log(menFromBoys([20, 33, 50, 34, 43, 46, 33]));
}

{ /**8 kyu  Printing Array elements with Comma delimiters
   Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"

Note: if this seems too simple for you try the next level

Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕   */
  function printArray(array) {
    // return array.join(',');
    return array.join();
    // return array.toString();
  }
  // console.log(printArray(["h", "o", "l", "a"]));
}

{ /** 8 kyu
  Training JS #3: Basic data types--String  */
  var a1 = "A", a2 = "a", b1 = "B", b2 = "b", c1 = "C", c2 = "c", d1 = "D", d2 = "d", e1 = "E", e2 = "e", n1 = "N", n2 = "n";
  function Dad() {
    return d1 + a2 + d2;
  }
  function Bee() {
    return b1 + e2.repeat(2);
  }
  function banana() {
    return b2 + a2 + (n2 + a2).repeat(2);
  }

  //answer some questions if you finished works above
  function answer1() {
    return "no";
  }
  function answer2() {
    return "no";
  }
  function answer3() {
    return "yes";
  }
  // console.log(Dad());
  // console.log(Bee());
  // console.log(banana());
}

{ /*  8 kyu  Training JS #12: loop statement --for..in and for..of 
  MUNITY
Leaderboards
Achieve honor and move up the global leaderboards
Chat
Join our Discord server and chat with your fellow code warriors
Discussions
View our Github Discussions board to discuss general Codewars topics
ABOUT
Docs
Learn about all of the different aspects of Codewars
y6r Avatar
4 kyu
1,165
8 kyu
Training JS #12: loop statement --for..in and for..of
1546292% of 1,55310,217 of 10,264myjinxin20151 Issue Reported
 JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
In lesson #11, we learned that the for loop can be used to traverse an array. If we want to traverse an object, we can use a variant of the for: for..in. This can traverse all the keys of the object. An example:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
console.log("keys of ob:")
showObjectKeys(ob);
console.log("values of ob:")
showObjectValues(ob);
Code results:

keys of ob:
item1
item2
item3
item4
values of ob:
This
is
an
example
for..in can also be used with arrays. Modifying the code above:

function showObjectKeys(obj){
  for (var key in obj){
    console.log(key);
  }
}
function showObjectValues(obj){
  for (var key in obj){
    console.log(obj[key]);
  }
}
var arr=["one","two","three"];
console.log("keys of arr:")
showObjectKeys(arr);
console.log("values of arr:")
showObjectValues(arr);
Code results:

keys of arr:
0
1
2
values of arr:
one
two
three
As you can see, the keys are the indices of the array elements. Important: When using for..in with an array, the key (index) is always a string, not a number. In the example above, the keys are "0", "1", and "2". We can't see the quotes because console.log() doesn't show them.

Although for..in can be used to traverse the array, this is discouraged because in some cases the order may be unexpected. So it's recommended that you use another variant for this: for..of (new in ES6). for..of can traverse all the values of the array (without accessing them through their index). Function showObjectValues() from above can be modified like this:

function showArrayValues(arr){
  for (var value of arr){
    console.log(value);
  }
}
Ok, lesson is over, let's do a task with for..in.

Task
The function giveMeFive accepts 1 parameter, obj, which is an object.

Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

At the end, return your array.

You should use for..in in your code, otherwise your solution may not pass this kata.      f*/

  function giveMeFive(obj) {
    const arr = [];
    for (const key in obj) {
      if (obj.hasOwnProperty.call(obj, key)) {
        if (key.length === 5) arr.push(key);
        if (obj[key].length === 5) arr.push(obj[key]);
      }
    }
    return arr;
  }
  // console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }));
}

{ /**  7 kyu  Currying functions: multiply all elements in an array
  To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

Example:

multiplyAll([1, 2, 3])(2) = [2, 4, 6];
You must not mutate the original array   */

  const multiplyAll = array => n => array.map(e => e * n);
  // console.log(multiplyAll([1, 2, 3])(4));
  // console.log(multiplyAll([1, 2])(11));
}

{ /** 6 kyu  Meeting
  John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.             */

  function meeting(s) {
    // return s.split(';').map(e => e.split(':').reverse().join(' ').toUpperCase()).sort().map(e => e.replace(e, `(${e})`)).join('').replace(/\s/g, ', ');
    return s.split(';').map(e => e.split(':').reverse().join(', ').toUpperCase()).sort().map(e => e.replace(e, `(${e})`)).join('');
  }
  // console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));
}

{ /** 7 kyu  Balanced Number
  A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

Examples
7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.
295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.
959 ==> return "Balanced"
Explanation:
middle digit(s): 5
sum of all digits to the left of the middle digit(s) -> 9
sum of all digits to the right of the middle digit(s) -> 9
9 and 9 are equal, so it's balanced.
27102983 ==> return "Not Balanced"
Explanation:
middle digit(s): 02
sum of all digits to the left of the middle digit(s) -> 10
sum of all digits to the right of the middle digit(s) -> 20
10 and 20 are not equal, so it's not balanced.                */

  // const balancedNum = number => {
  //   number = String(number);
  //   if (number.length < 3) return 'Balanced';
  //   if (number.length % 2) return [...number.slice(- number.length / 2)].reduce((sum, e) => sum + +e, 0) === [...number.slice(0, number.length / 2)].reduce((sum, e) => sum + +e, 0) ? 'Balanced' : 'Not Balanced';
  //   if (number.length % 2 === 0) return [...number.slice(- number.length / 2 + 1)].reduce((sum, e) => sum + +e, 0) === [...number.slice(0, number.length / 2 - 1)].reduce((sum, e) => sum + +e, 0) ? 'Balanced' : 'Not Balanced';
  // };

  // const balancedNum = number => {
  //   number = [...number + ''];
  //   let delta = 0;
  //   for (let i = 0; i < number.length / 2 - 1; i++) {
  //     delta += (number[i] - number[number.length - 1 - i]);
  //   }
  //   return delta ? 'Not Balanced' : 'Balanced';
  // };

  const balancedNum = number => {
    number = [...number + ''];
    return number.slice(-number.length / 2 + .5).reduce((res, e, i) => res + +e - +number[i], 0) ? 'Not Balanced' : 'Balanced';
  };
  // console.log(balancedNum(57875));
  // console.log(balancedNum(5845));
  // console.log(balancedNum(56239814));
}

{ /** 8 kyu  Fuel Calculator: Total Cost 
  In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.
Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.         */

  function fuelPrice(litres, pricePerLitre) {
    let discount = ~~(litres / 2) * .05;
    // let discount = Math.floor(litres / 2) * .05;
    if (discount > .25) discount = .25;
    return +((pricePerLitre - discount) * litres).toFixed(2);
  }
  // console.log(fuelPrice(55, 1.23));
}

{ /** 8 kyu  Training JS #11: loop statement --break,continue
  We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

function findFirstOddNumber(arr){
  var result;
  for (var i=0;i<arr.length;i++){
    if (arr[i]%2==1){
      result=arr[i];
      break;
    }
  }
  return result;
}
In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

function dontDisplayNegative(arr){
  for (var i=0;i<arr.length;i++){
    if (arr[i]<0) continue;   
    console.log(arr[i])
  }
}
In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

Through the use of break and continue, you can make the loop statement more flexible and convenient.

Ok, lesson is over. let's us do some task with break and continue.

Task
Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code. otherwise, your solution may not pass this kata.  */

  function grabDoll(dolls) {
    const bag = [];
    for (let i = 0; i < dolls.length; i++) {
      if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
      bag.push(dolls[i]);
      if (bag.length > 2) break;
    }
    return bag;
  }
  // console.log(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]));
}

{ /** 8 kyu  Grasshopper - Personalized Message
  Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'  */

  // const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest';
  const greet = (name, owner) => 'Hello ' + (name === owner ? 'boss' : 'guest');
  // console.log(greet('Greg', 'Greg'));
}

{ /** 7 kyu  Bumps in the Road
  Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead     */

  // const bump = x => x.replaceAll('_', '').length > 15 ? 'Car Dead' : "Woohoo!";
  const bump = x => x.split('n').length > 16 ? 'Car Dead' : "Woohoo!";
  // const bump = x => x.split('').reduce((bumps, bump) => bumps + (bump === 'n' ? 1 : 0), 0) > 15 ? 'Car Dead' : "Woohoo!";
  // console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"));
}

{ /** 7 kyu  JavaScript Array Filter
  JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
The solution would work like the following:
getEvenNumbers([2,4,5,6]) // should == [2,4,6]  */

  const getEvenNumbers = numbersArray => numbersArray.filter(e => !(e % 2));
  // console.log(getEvenNumbers([2, 4, 5, 6]));
}

{ /**8 kyu  Grasshopper - Array Mean
  To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

1+3+5+7 = 16
2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

16/4 = 4
3. The mean (or average) of this list is 4      */

  const findAverage = nums => nums.reduce((sum, e) => sum + e, 0) / nums.length;
  // console.log(findAverage([1, 3, 5, 7]));
}

{ /** 8 kyu  Remove the time
  You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.
You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
Write a function that takes the website date/time in its original string format and returns the shortened format.
Input
Input will always be a string, e.g., "Friday May 2, 7pm". 
Output
Output will be the shortened string, e.g., "Friday May 2".   */

  // const shortenToDate = longDate => longDate.split(', ')[0];

  const shortenToDate = longDate => {
    const [date] = longDate.split(', ');
    return date;
  };

  // const shortenToDate = longDate => {
  //   const [day, month, date] = longDate.split(' ');
  //   return `${day} ${month} ${date}`.slice(0, -1);;
  // };

  // const shortenToDate = longDate => longDate.replace(/,\s\w*$/, '');
  // console.log(shortenToDate("Friday May 2, 9am"));
}

{ /** 8 kyu  Crash Override 
  Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'   */


  let firstName = { A: 'Alpha', B: 'Beta', C: 'Cache', D: 'Data', E: 'Energy', F: 'Function', G: 'Glitch', H: 'Half-life', I: 'Ice', J: 'Java', K: 'Keystroke', L: 'Logic', M: 'Malware', N: 'Nagware', O: 'OS', P: 'Phishing', Q: 'Quantum', R: 'RAD', S: 'Strike', T: 'Trojan', U: 'Ultraviolet', V: 'Vanilla', W: 'WiFi', X: 'Xerox', Y: 'Y', Z: 'Zero' };

  let surname = { A: 'Analogue', B: 'Bomb', C: 'Catalyst', D: 'Discharge', E: 'Electron', F: 'Faraday', G: 'Gig', H: 'Hacker', I: 'IP', J: 'Jabber', K: 'Killer', L: 'Lazer', M: 'Mike', N: 'n00b', O: 'Overclock', P: 'Payload', Q: 'Quark', R: 'Roy', S: 'Spy', T: 'T-Rex', U: 'Unit', V: 'Virus', W: 'Worm', X: 'X', Y: 'Yob', Z: 'Zombie' };

  // function aliasGen(s1, s2) {
  //   s1 = s1[0].toUpperCase();
  //   s2 = s2[0].toUpperCase();
  //   return /[A-Z]/.test((s1)) && /[A-Z]/.test((s2)) ? firstName[s1] + ' ' + surname[s2] : "Your name must start with a letter from A - Z.";
  // }

  // function aliasGen() {
  //   const [s1] = arguments[0].toUpperCase();
  //   const [s2] = arguments[1].toUpperCase();
  //   return /[A-Z]/.test((s1)) && /[A-Z]/.test((s2)) ? `${firstName[s1]} ${surname[s2]}` : "Your name must start with a letter from A - Z.";
  // }

  function aliasGen() {
    const s1 = arguments[0].toUpperCase().charAt();
    const s2 = arguments[1].toUpperCase().charAt();
    return /[A-Z]/.test((s1)) && /[A-Z]/.test((s2)) ? `${firstName[s1]} ${surname[s2]}` : "Your name must start with a letter from A - Z.";
  }
  // console.log(aliasGen("Mike", "Millington"));
}

{ /** 8 kyu  Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
  Remove n exclamation marks in the sentence from left to right. n is positive integer.
Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"         */

  // function remove(s, n) {
  //   for (let i = 0; i < n; i++) {
  //     s = !s.includes('!') ? s : s.replace('!', '');
  //   }
  //   return s;
  // }

  // const remove = (s, n) => !s.includes('!') || n < 1 ? s : remove(s = s.replace('!', ''), n -= 1);

  // const remove = (s, n) => s.replace(/!/g, e => n-- > 0 && s.includes('!') ? '' : e);

  const remove = (s, n) => [...s].filter(e => e !== '!' || n-- < 1).join('');
  // console.log(remove("Hi!!!", 1));
}

{ /** 7 kyu
  V A P O R C O D E 
  ASC Week 1 Challenge 4 (Medium #1)
Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.
Note that spaces should be ignored in this case.
Examples
"Lets go to the movies"       -->  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
"Why isn't my code working?"  -->  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"        */

  const vaporcode = string => [...string.match(/[^ ]/g)].join('  ').toUpperCase();
  // const vaporcode = string => [...string.match(/\S/g)].join('  ').toUpperCase();
  // const vaporcode = string => string.replaceAll(' ', '').split('').join('  ').toUpperCase();
  // console.log(vaporcode("Lets go to the movies!"));
}

{ /** 8 kyu  Pillars
  There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:
number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).   */

  const pillars = (numPill, dist, width) => numPill > 1 ? (numPill - 1) * (dist * 100 + width) - width : 0;
  // console.log(pillars(12, 15, 30));
}

{ /** 7 kyu  Find the vowels
  We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
So given a string "super", we should return a list of [2, 4].
Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)   */

  // const vowelIndices = word => [...word].reduce((res, e, i) => res = e.match(/[aeiouy]/i) ? [...res, i + 1] : res, []);
  // const vowelIndices = (word, res = []) => [...word].map((e, i) => res = e.match(/[aeiouy]/i) ? [...res, i + 1] : res).reverse()[0];
  const vowelIndices = word => [...word].reduce((res, e, i) => /[aeiouy]/i.test(e) ? [...res, ++i] : res, []);
  // console.log(vowelIndices('YoMama'));
}

{ /**7 kyu  Sum of Odd Cubed Numbers
  Find the sum of the odd numbers within an array, after cubing the initial integers.
   The function should return undefined if any of the values aren't numbers.*/

  const cubeOdd = arr => arr.some(e => isNaN(e)) ? undefined : arr.filter(e => e % 2).reduce((sum, e) => sum + e ** 3, 0);
  // const cubeOdd = arr => arr.filter(e => isNaN(e)).length ? undefined : arr.filter(e => e % 2).reduce((sum, e) => sum + e ** 3, 0);
  // console.log(cubeOdd([1, 'e', 4, 5, 4, 3]));
}

{ /** 7 kyu  Simple beads count
  Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.*/

  const countRedBeads = n => n ? (n - 1) * 2 : 0;
  // console.log(countRedBeads(-10));
}

{ /** 6 kyu  Reverse every other word in the string
  Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.    */

  // const reverse = str => str.split(' ').map((e, i, ar) => i % 2 ? [...e].reverse().join('') : e).join(' ').replace('  ', '');
  const reverse = str => str.split(' ').map((e, i, ar) => i % 2 ? [...e].reverse().join('') : e).join(' ').trim();
  // console.log(reverse("I really don't like reversing strings!"));
}

{ /** 7 kyu  Alphabet symmetry
  Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.
Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,
solve(["abode","ABc","xyzD"]) = [4, 3, 1]
Input will consist of alphabet characters, both uppercase and lowercase. No spaces. */

  const alphabet = 'abcdefghijklmnopqrstuvwxwz';
  const solve = arr => arr.map(e => [...e].filter((el, i, ar) => i === alphabet.indexOf(el.toLowerCase())).length);
  // const solve = arr => arr.map(e => [...e].reduce((count, el, i, ar) => i === alphabet.indexOf(el.toLowerCase()) ? count + 1 : count, 0));
  // console.log(solve(["abode", "ABc", "xyzD"]));
  // console.log(solve(["abide", "ABc", "xyz"]));
  // console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"]));
  // console.log(solve(["encode", "abc", "xyzD", "ABmD"]));
}

{ /** 8 kyu  CSV representation of array 
  Create a function that returns the CSV representation of a two-dimensional numeric array.
Example:
input:
   [[ 0, 1, 2, 3, 4 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]] 
    
output:
     '0,1,2,3,4\n'
    +'10,11,12,13,14\n'
    +'20,21,22,23,24\n'
    +'30,31,32,33,34'
Array's length > 2.   */

  // const toCsvText = array => array.map(e => e.join(',')).join('\n');
  const toCsvText = array => array.join('\n');

  //   console.log(toCsvText(
  //     [[0, 1, 2, 3, 45],
  //     [10, 11, 12, 13, 14],
  //     [20, 21, 22, 23, 24],
  //     [30, 31, 32, 33, 34]]));
}

{ /** 7 kyu  The Coupon Code
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false    */

  // const dateString = "October 13, 2024 11:13:00";
  // const customDate = new Date(dateString);

  const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => (new Date(expirationDate) - new Date(currentDate)) >= 0 && enteredCode === correctCode;
  // console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
}

{ /** 6 kyu  Highest Rank Number in an Array
  Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
Note: no empty arrays will be given.
Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3   */

  const highestRank = arr => {
    const set = [...new Set(arr)].sort((a, b) => b - a);
    const counts = set.map(e => arr.filter(el => el === e).length);

    return set[counts.indexOf(Math.max(...counts))];
  };
  // console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 2, 2, 2, 10, 12, 10]));
}

{ /** 6 kyu  Fibonacci, Tribonacci and friends
  If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.
Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.
Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.
xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
xbonacci {1,1} produces the Fibonacci sequence       */

  // function Xbonacci(signature, n) {
  //   let newArr = [...signature];
  //   for (let i = 0; i < n - signature.length; i++) {
  //     newArr.push(newArr.slice(i).reduce((sum, e) => sum + e, 0));
  //   }
  //   return newArr.slice(0, n);
  // }

  // function Xbonacci(signature, n) {
  //   let newArr = signature.slice(0, n);
  //   for (let i = 0; i < n - signature.length; i++) {
  //     newArr.push(newArr.slice(i).reduce((sum, e) => sum + e, 0));
  //   }
  //   return newArr;
  // }

  function Xbonacci(signature, n) {
    let newArr = signature.slice(0, n);
    while (newArr.length < n) {
      newArr = [...newArr, (newArr.slice(- signature.length).reduce((sum, e) => sum + e, 0))];
      // newArr.push(newArr.slice(- signature.length).reduce((sum, e) => sum + e, 0));
    }
    return newArr;
  }

  // const Xbonacci = (signature, n, count = signature.length) =>
  // signature.length >= n ? signature.slice(0, n) : Xbonacci([...signature, signature.slice(signature.length - count).reduce((sum, e) => sum + e)], n, count);
  // signature.length < n ? Xbonacci([...signature, signature.slice(signature.length - count).reduce((sum, e) => sum + e)], n, count) : signature.slice(0, n);

  // console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20));
  // console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0], 15));
  // console.log(Xbonacci([1, 0, 0, 0, 0, 0, 0], 0));
}

{ /** 7 kyu  Rotate for a Max 
  Let us begin with an example:
Take a number: 56789. Rotate left, you get 67895.
Keep the first digit in place and rotate left the other digits: 68957.
Keep the first two digits in place and rotate the other ones: 68579.
Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
You have the following sequence of numbers:
56789 -> 67895 -> 68957 -> 68579 -> 68597
and you must return the greatest: 68957.

Task
Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
So max_rot (or maxRot or ... depending on the language) is such as:
max_rot(56789) should return 68957
max_rot(38458215) should return 85821534            */

  function maxRot(n) {
    let arr = n.toString();
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
      let res = [];
      res.push(...arr.slice(0, i), ...arr.slice(i + 1), arr[i]);
      arr = [...res];
      max < +res.join('') ? max = +res.join('') : max;
    }
    return max;
  }
  // console.log(maxRot(56789));
  // console.log(maxRot(38458215));
  // console.log(maxRot(195881031));
  // console.log(maxRot(896219342));
  // console.log(maxRot(69418307));
}

{ /** true or false */
  function trueOrFalse(val) {
    if (val === true) { return 'true'; }
    else { return 'false'; }
  }
}

{ /** 7 kyu  Alternate case 
  Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD   */

  function alternateCase(s) {
    return [...s].map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join('');
  }
  // console.log(alternateCase('fTor'));
}

{  /** 7 kyu  The Office I - Outed 
  Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, you've been using the work computers to smash in endless hours of codewars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).  */

  function outed(meet, boss) {
    return Object.keys(meet).reduce((rating, e) => rating + (e === boss ? meet[e] * 2
      : meet[e]), 0) / Object.keys(meet).length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
  }
  // console.log(outed({ 'tim': 0, 'jim': 2, 'randy': 0, 'sandy': 7, 'andy': 0, 'katie': 5, 'laura': 1, 'saajid': 2, 'alex': 3, 'john': 2, 'mr': 0 }, 'laura'));
  // console.log(outed({ "tim": 0, "jim": 7, "randy": 0, "sandy": 8, "andy": 8, "katie": 8, "laura": 6, "saajid": 4, "alex": 5, "john": 4, "mr": 6 }, "jim"));
}

{ /** 8 kyu  Define a card suit
You get any card as an argument. Your task is to return the suit of this card (in lowercase).
Our deck (is preloaded):
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'    */

  // function defineSuit(card) {
  //   const cc = card.charCodeAt(card.length - 1);
  //   return cc === 9824 ? 'spades' : cc === 9827 ? 'clubs' : cc === 9829 ? 'hearts' : 'diamonds';
  // }

  // function defineSuit(card) {
  //   const char = { '♠': 'spades', '♣': 'clubs', '♥': 'hearts', '♦': 'diamonds' };
  //   return char[card.charAt(card.length - 1)];
  // }

  // function defineSuit(card) {
  //   if (card.includes('♠')) return 'spades';
  //   if (card.includes('♣')) return 'clubs';
  //   if (card.includes('♥')) return 'hearts';
  //   return 'diamonds';
  // }

  function defineSuit(card) {
    switch (card.slice(-1)) {
      case '♠': return 'spades';
      case '♣': return 'clubs';
      case '♥': return 'hearts';
      default: return 'diamonds';
    }
  }

  // console.log(defineSuit("♦"));

  // console.log('♠'.charCodeAt());
  // console.log('♣'.charCodeAt());
  // console.log('♥'.charCodeAt());
  // console.log('♦'.charCodeAt());
}

{ /** 8 kyu  Polish alphabet
  Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.
For example:
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"   */

  const letters = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };

  function correctPolishLetters(string) {
    return string.replaceAll('ą', 'a').replaceAll('ć', 'c').replaceAll('ę', 'e').replaceAll('ł', 'l').replaceAll('ń', 'n').replaceAll('ó', 'o').replaceAll('ś', 's').replaceAll('ź', 'z').replaceAll('ż', 'z');
  }
  // console.log(correctPolishLetters("Jędrzej Błądziński"));
}

{ /** 6 kyu  Kebabize
  Modify the kebabize function so that it converts a camel case string into a kebab case.
"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:
the returned string should only contain lowercase letters     */

  function kebabize(str) {
    // return (/[A-z]/.test(str) ? str.replace(/[A-Z]/g, e => '-' + e.toLowerCase()) : '').replace(/^[-]|[0-9]/g, '');
    // return str.replace(/[A-Z]/g, e => '-' + e.toLowerCase()).replace(/^[-]|[0-9]/g, '');
    return str.replace(/\d/g, '').split(/(?=[A-Z])/).join('-').toLowerCase();
  }
  // console.log(kebabize("CAMEL"));
  // console.log(kebabize("camelsHave3Humps"));
}

{ /**7 kyu  Sum of Triangular Numbers
  Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."

[01]
02 [03]
04 05 [06]
07 08 09 [10]
11 12 13 14 [15]
16 17 18 19 20 [21]
e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
Triangular Numbers cannot be negative so return 0 if a negative number is given.   */

  function sumTriangularNumbers(n) {
    let sumA = 0;
    for (let i = 0, sum = 0; i <= n; i++) {
      sum += i;
      sumA += sum;
    }
    return sumA;
  }
  // console.log(sumTriangularNumbers(6));
}

{ /** 7 kyu Incrementer
  Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
Notes:
return an empty array if your array is empty
arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]                             #  9+3 = 12  -->  2    */

  function incrementer(nums) {
    return nums.map((e, i) => (e + i + 1) % 10);
  }
  // console.log(incrementer([4, 6, 9, 1, 3]));
}

{ /** 8 kyu  Contamination #1 -String-
  An AI has infected a text with a character!!
This text is now fully mutated to this character.
If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!
Note: The character is a string of length 1 or an empty string.
Example
text before = "abc"
character   = "z"
text after  = "zzz"   */

  function contamination(text, char) {
    return text.replace(/./g, e => e = char);
    // return char.repeat(text.length);
    // return text.replace(/./g, char);
  }
  // console.log(contamination("//case", " "));
  // console.log(contamination("case", "s"));
}

{ /** 7 kyu  Speed Control
  In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:
x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:
0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:
[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.
Example:
With the above data your function gps(s, x) should return 74
Note: With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:
 (3600 * delta_distance) / s. */

  function gps(s, x) {
    return x.length < 2 ? 0 : Math.max(...x.map((e, i) => Math.floor((x[i + 1] - e) * 3600 / s)).slice(0, -1));
    // return x[x.length - 1] > 1 ? Math.max(...x.map((e, i) => Math.floor((x[i + 1] - e) * 3600 / s)).slice(0, -1)) : 0;
  }
  // console.log(gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]));
}

{ /** 8 kyu  8 kyu  Basic data types--Array 
  In javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array() or var arr=[]
Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.
Each element in the array has an index, use arr[index] to get the value of element.
index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].
If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:
var arr=[1,2,3];     //define an array arr contains elements 1 2 3
arr.push(4);         //add element 4 to arr
console.log(arr)     //[1,2,3,4]
arr.pop();           //remove the last element from arr
console.log(arr)     //[1,2,3]
Task
I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.
    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
When you have finished the work, click "Run Tests" to see if your code is working properly.
In the end, click "Submit" to submit your code pass this kata.*/

  function getLength(arr) {
    return arr.length;
  }
  function getFirst(arr) {
    return arr[0];
  }
  function getLast(arr) {
    return arr[arr.length - 1];
  }
  function pushElement(arr) {
    const el = 1;
    arr.push(el);
  }
  function popElement(arr) {
    arr.pop();
  }
}

{ /** 7 kyu  Divide and Conquer
  Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
Return as a number. */

  // const divCon = x => x.reduce((res, e) => res + (e === +e ? e : -1 * e), 0);
  const divCon = x => x.reduce((res, e) => res + (e === +e ? e : -e), 0);
  // const divCon = x => x.reduce((res, e) => typeof e === 'string' ? res - e : res + e, 0);
  // console.log(divCon([9, 3, '7', '3']));
}

{ /** 8 kyu  Geometry Basics: Distance between points in 2D 
  This series of katas will introduce you to basics of doing geometry with computers.
Point objects have attributes x and y.
Write a function calculating distance between Point a and Point b.
Input coordinates fit in range −50⩽x,y⩽50. Tests compare expected result and actual answer with tolerance of 1e-6.   */

  function distanceBetweenPoints(a, b) {
    return (b - a);
  }
  // console.log(distanceBetweenPoints(-10.2, 12.5));
}

{ /** 7 kyu  Folding your way to the moon
  Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.
You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)
Note: Of course you can't do half a fold. You should know what this means ;P
Also, if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.         */

  const foldTo = distance => { };
  // console.log(foldTo());
}

{ /**  8 kyu  Convert to Binary
  Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
to_binary(1)  /* should return 1 
to_binary(5)  /* should return 101 
to_binary(11) /* should return 1011
Exampl
toBinary(1)  /* should return 1 
toBinary(5)  /* should return 101 
toBinary(11) /* should return 1011  */

  // const toBinary = n => {
  //   const arr = [];
  //   for (let i = n; i >= 1; i = Math.floor(i / 2)) {
  //     arr.push(i % 2 ? 1 : 0);
  //   }
  //   return +arr.reverse().join('');
  // };

  const toBinary = n => {
    const arr = [];
    while (n >= 1) {
      arr.push(n % 2 ? 1 : 0);
      n = Math.floor(n / 2);
    }
    return +arr.reverse().join('');
  };

  // const toBinary = n => +n.toString(2);

  // console.log(toBinary(8));
}

{ /** 7 kyu  Simple string characters 
  You are given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.      */

  const solve = s => {
    let arr = [[...s].filter(e => /[A-Z]/.test(e)).length, [...s].filter(e => /[a-z]/.test(e)).length, [...s].filter(e => /\d/.test(e)).length,];
    const rest = s.length - arr.reduce((res, e) => res + e, 0);
    return [...arr, rest];
  };

  // const solve = s => [s.match(/[A-Z]/g).length, s.match(/[a-z]/g).length, s.match(/\d/g).length, s.match(/[^A-z0-9]/g).length]; /** failed  */
  // console.log(solve("Codewars@codewars123.com"));
}

{  /** 8 kyu  Multiple of index
  Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
    Some cases:
  [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
    [68, -1, 1, -7, 10, 10] => [-1, 10]
    [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]      */

  function multipleOfIndex(array) {
    return array.filter((e, i) => (e === 0 && i === 0) || e % i === 0);
  }
  // console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
}

{ /** 8 kyu  Template Strings
  emplate Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
Task
Your task is to return the correct string using the Template String Feature.
Input
Two Strings, no validation is needed.
Output
You must output a string containing the two strings with the word ```' are '``` */

  var templateStrings = function (noun, adjective) {
    return `${noun} are ${adjective}`;
  };
  // console.log(templateStrings('Animals', 'Good'));
}

{ /** 7 kyu  A Rule of Divisibility by 7 
  A number m of the form 10x + y is divisible by 7 if and only if x − 2y is divisible by 7. In other words, subtract twice the last digit from the number formed by the remaining digits. Continue to do this until a number known to be divisible by 7 is obtained; you can stop when this number has at most 2 digits because you are supposed to know if a number of at most 2 digits is divisible by 7 or not.
The original number is divisible by 7 if and only if the last number obtained using this procedure is divisible by 7.
Examples:
1 - m = 371 -> 37 − (2×1) -> 37 − 2 = 35 ; thus, since 35 is divisible by 7, 371 is divisible by 7.
The number of steps to get the result is 1.
2 - m = 1603 -> 160 - (2 x 3) -> 154 -> 15 - 8 = 7 and 7 is divisible by 7.
3 - m = 372 -> 37 − (2×2) -> 37 − 4 = 33 ; thus, since 33 is not divisible by 7, 372 is not divisible by 7.
4 - m = 477557101->47755708->4775554->477547->47740->4774->469->28 and 28 is divisible by 7, so is 477557101. The number of steps is 7.
Task:
Your task is to return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language) of numbers, the first being the last number m with at most 2 digits obtained by your function (this last m will be divisible or not by 7), the second one being the number of steps to get the result.
Forth Note:
Return on the stack number-of-steps, last-number-m-with-at-most-2-digits 
Examples:
seven(371) should return [35, 1]
seven(1603) should return [7, 2]
seven(477557101) should return [28, 7]*/

  // function seven(m, count = 0) {
  //   return String(m).length <= 2 ? [m, count] : seven(m = String(m).slice(0, -1) - 2 * String(m).slice(-1), count += 1);
  // }

  const seven = (m, count = 0) => String(m).length <= 2 ? [m, count] : seven(m = String(m).slice(0, -1) - 2 * String(m).slice(-1), count += 1);

  // console.log(seven(1603));
  // console.log(seven(477557101));
}

{ /** 4 kyu  Strings Mix
  Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
Note for Swift, R, PowerShell
The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss   */

  function mix(s1, s2) {
    s1 = s1.match(/[a-z]/g);
    s2 = s2.match(/[a-z]/g);
    const commonUnique = [...new Set((s1.concat(s2)))];
    const filteredS1 = commonUnique.map(e => s1.filter(el => el === e));
    const filteredS2 = commonUnique.map(e => s2.filter(el => el === e));

    return filteredS1.reduce((res, e, i) => {
      e.length > 1 || filteredS2[i].length > 1 ?
        res = (e.length > filteredS2[i].length ? [...res, [1, e]]
          : e.length === filteredS2[i].length ? [...res, ['=', e]]
            : [...res, [2, filteredS2[i]]]) : 0;
      return res;
    }, []).sort().sort((a, b) => b[1].length - a[1].length).map(e => [e[0].toString(), e[1].join('')].join(':')).join('/');
  }

  //   const rawArr = filteredS1.reduce((res, e, i) => {
  //     e.length > 1 || filteredS2[i].length > 1 ?
  //       res = (e.length > filteredS2[i].length ? [...res, [1, e]]
  //         : e.length === filteredS2[i].length ? [...res, ['=', e]]
  //           : [...res, [2, filteredS2[i]]]) : 0;
  //     return res;

  //   }, []);
  //   rawArr.sort();
  //   return rawArr.sort((a, b) => b[1].length - a[1].length).map(e => [e[0].toString(), e[1].join('')].join(':')).join('/');
  // }

  // console.log(mix("Are they here", "yes, they are here"));
  // console.log(mix("ii nnn gg uuu ooo", "dd aa ee sss gg nnn"));
}

{ /** 8 kyu  Surface Area and Volume of a Box
  Write a function that returns the total surface area and volume of a box as an array: [area, volume]    */

  const getSize = (width, height, depth) => [2 * (width * height + width * depth + height * depth), width * height * depth];
  // console.log(getSize(4, 2, 6));
}

{ /** 8 kyu  Did she say hallo?
  You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
Write a simple function to check if the string contains the word hallo in different languages.
These are the languages of the possible people you met the night before:
hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
ahoj - czech republic
czesc - polish
Notes
you can assume the input is a string.
to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
function should be case insensitive to pass the tests          */

  function validateHello(greetings) {
    return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
    // return /hello|ciao|salut|hallo|hola|ahoj|czesc/.test(greetings.toLowerCase());
  }
  // console.log(validateHello('a Hallo'));
}

{ /** 8 kyu  Leonardo Dicaprio and Oscars 
  You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"           */

  const leo = oscar => oscar === 88 ? "Leo finally won the oscar! Leo is happy" : oscar === 86 ? "Not even for Wolf of wallstreet?!" : oscar < 88 ? "When will you give Leo an Oscar?" : "Leo got one already!";
  // console.log(leo(62)); "Leo finally won the oscar! Leo is happy";
}

{ /** 8 kyu  pick a set of first elements 
  Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.
If n == 0 return an empty sequence []
Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];              */

  const first = (arr, n = 1) => arr.slice(0, n);
  // console.log(first(['a', 'b', 'c', 'd', 'e'], 2));
}

{ /** 7 kyu  Sort by Last Char
  Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
If two words have the same last letter, the returned array should show them in the order they appeared in the given string.
All inputs will be valid.     / failed */

  const last = x => x.split(' ').map(e => [...e].reverse()).sort().map(e => e.reverse().join(''));

  // console.log(last('man i need a taxi up to ubud'));
  // console.log(last('what time are we climbing up the volcano'));
}

{ /** 7 kyu  Deodorant Evaporator 
  We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
The program reports the nth day (as an integer) on which the evaporator will be out of use.
Example:
evaporator(10, 10, 5) -> 29
Note:
Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.     */

  function evaporator(content, evap_per_day, threshold, duration = 0) {
    const mlThreshold = content / 100 * threshold;
    while (content >= mlThreshold) {
      content -= content / 100 * evap_per_day;
      duration++;
    }
    return duration;
  }
  // console.log(evaporator(10, 10, 5));
}

{ /** 6 kyu   +1 Array
  Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.
Examples
Valid arrays
[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]
Invalid arrays
[1, -9] is invalid because -9 is not a non-negative integer
[1, 2, 33] is invalid because 33 is not a single-digit integer          */

  // const upArray = arr => {
  //   if (arr.some(e => ('' + e).length > 1 || e < 0) || arr.length === 0) return null;
  //   let end = arr.map(e => '' + e).join('').match(/[9]+$/);

  //   if (end === null) {
  //     arr[arr.length - 1] += 1;
  //     return arr;
  //   }
  //   const endLength = end[0].length;
  //   end = Array(endLength).fill(0);
  //   const start = arr.slice(0, - endLength);

  //   if (start.length === 0) return [1, ...end];

  //   start[start.length - 1] += 1;
  //   return [...start, ...end];
  // };

  const upArray = arr => {
    if (arr.some(e => e > 9 || e < 0) || !(arr.length)) return null;
    let end = arr.map(e => '' + e).join('').match(/[9]+$/);

    if (end === null) {
      arr[arr.length - 1] += 1;
      return arr;
    }
    const endLength = end[0].length;
    end = Array(endLength).fill(0);
    const start = arr.slice(0, - endLength);

    if (start.length === 0) return [1, ...end];

    start[start.length - 1] += 1;
    return [...start, ...end];
  };

  // console.log(upArray([0, 0, 9, 9, 9, 9, 9]));
  // console.log(upArray([2, 3, 9, 9]));
  // console.log(upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
  // console.log(upArray([0, 2, 6, 3, 7, 2, 1, 6, 0, 3, 3, 4, 3, 7, 9, 0, 4, 8, 2, 8, 2]));
}

{ /** 8 kyu  How old will I be in 2099? 
  Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.*/

  // const calculateAge = (born, curr) => curr - born > 1 ? `You are ${curr - born} years old.` : curr - 1 === born ? `You are ${curr - born} year old.`
  //   : curr === born ? "You were born this very year!" : born - curr === 1 ? `You will be born in ${born - curr} year.` : `You will be born in ${born - curr} years.`;

  const calculateAge = (born, curr) => {
    switch (curr - born) {
      case 0: return "You were born this very year!";
      case 1: return `You are ${curr - born} year old.`;
      case -1: return `You will be born in ${born - curr} year.`;
      default: return curr - born < -1 ? `You will be born in ${born - curr} years.` : `You are ${curr - born} years old.`;;
    }
  };
  // console.log(calculateAge(1989, 1989));
}

{ /** 7 kyu  Find the nth Digit of a Number
  Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1      */

  // const findDigit = (num, nth) => {
  //   if (nth < 1) return -1;
  //   const str = [...String(num).replace('-', 0)].reverse();
  //   return str.length < nth ? 0 : +str[nth - 1];
  // };

  const findDigit = (num, nth) => nth > 0 ? +[...String(num)].reverse()[--nth] || 0 : -1;
  // console.log(findDigit(-2825, 5));
}

{ /** 7 kyu  Basic Calculator 
  Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null    */

  // function calculate(num1, operation, num2) {
  //   switch (operation) {
  //     case "+": return num1 + num2;
  //     case "-": return num1 - num2;
  //     case "*": return num1 * num2;
  //     case "/": if (num2) return num1 / num2;

  //     default: return null;
  //   }
  // }

  // function calculate(num1, operation, num2) {
  //   const ops = {
  //     "+": num1 + num2,
  //     "-": num1 - num2,
  //     "*": num1 * num2,
  //     "/": num2 ? num1 / num2 : null,
  //   };
  //   return ops[operation] ?? null;
  // }

  function calculate(num1, operation, num2) {
    const ops = {
      "+": function (a, b) { return a + b; },
      "-": function (a, b) { return a - b; },
      "*": function (a, b) { return a * b; },
      "/": function (a, b) { return b !== 0 ? a / b : null; },
    };
    return (ops[operation] ?? function () { return null; })(num1, num2);
  }
  // console.log(calculate(4, '/', 10));
}

{ /**8 kyu  Simple validation of a username with regex
  Write a simple regex to validate a username. Allowed characters are:
lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).   */

  /**
    - `^`        Start from the beginning of the string.
    - `[]`       Allow any character specified, including...
    - `a-z`      anything from a to z,
    - `0-9`      anything from 0 to 9,
    - `_`        and underscore.
    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
    - `$`        End the string right after specified amount of allowed characters is given.
  */

  // const validateUsr = username => /^[a-z0-9_]{4,16}$/.test(username);
  const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);
  // console.log(validateUsr('jrs5tp_'));
}

{ /** 7 kyu  Digits explosion 
  Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples
"312" should return "333122"
"102269" should return "12222666666999999999"   */

  // const explode = s => s.split('').map(e => e.repeat(e)).join('');
  const explode = s => s.replace(/\d/g, e => e.repeat(e));
  // console.log(explode('102269'));
}

{ /** 7 kyu  Indexed capitalization 
  Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.   */

  const capitalize = (s, arr) => [...s].map((e, i) => arr.includes(i) ? e.toUpperCase() : e).join('');

  // console.log(capitalize("abcdef", [1, 2, 5, 22]));
}

{ /** 8 kyu  Freudian translator
  You probably know that number 42 is "the answer to life, the universe and everything" according to Douglas Adams' "The Hitchhiker's Guide to the Galaxy". For Freud, the answer was quite different...
In the society he lived in, people - women in particular - had to repress their sexual needs and desires. This was simply how the society was at the time. Freud then wanted to study the illnesses created by this, and so he digged to the root of their desires. This led to some of the most important psychoanalytic theories to this day, Freud being the father of psychoanalysis.
Now, basically, when a person hears about Freud, s/he hears "sex" because for Freud, everything was related to, and explained by sex.
In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should return an empty string.    */

  // const toFreud = string => string ? string.split(' ').map(e => 'sex').join(' ') : '';
  // const toFreud = string => string.replace(/[^ ]+/g, 'sex');
  const toFreud = string => string.replace(/[\S]+/g, 'sex');
  // console.log(toFreud("tyhd, tyl, polj"));
}

{ /** 8 kyu  Thinkful - Number Drills: Blue and red marbles
  You and a friend have decided to play a game to drill your statistical intuitions. The game works like this:
You have a bunch of red and blue marbles. To start the game you grab a handful of marbles of each color and put them into the bag, keeping track of how many of each color go in. You take turns reaching into the bag, guessing a color, and then pulling one marble out. You get a point if you guessed correctly. The trick is you only have three seconds to make your guess, so you have to think quickly.
You've decided to write a function, guessBlue() to help automatically calculate whether you should guess "blue" or "red". The function should take four arguments:
the number of blue marbles you put in the bag to start
the number of red marbles you put in the bag to start
the number of blue marbles pulled out so far (always lower than the starting number of blue marbles)
the number of red marbles pulled out so far (always lower than the starting number of red marbles)
guessBlue() should return the probability of drawing a blue marble, expressed as a float. For example, guessBlue(5, 5, 2, 3) should return 0.6.      */

  // function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  //   return (blueStart - bluePulled) / (blueStart - bluePulled + redStart - redPulled);
  // }
  // console.log(guessBlue(5, 7, 4, 3));
}

{ /** 7 kyu  Build a square 
  I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.
Example
n = 3, so I expect a 3x3 square back just like below as a string:
+++
+++
+++   */

  function generateShape(integer) {
    return ('+'.repeat(integer) + '\n').repeat(integer).slice(0, -1);
  }
  // console.log(generateShape(4));
}

{ /** 7 kyu  Simple consecutive pairs
  In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.    */

  const pairs = ar => ar.map((e, i) => (i % 2 !== 0 && Math.abs(ar[i] - ar[i - 1]) === 1) ? e = 1 : e = 0).reduce((res, e) => res + e);
  // console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]));
}

{ /** 7 kyu  Strong Number
  Strong number is a number with the sum of the factorial of its digits is equal to the number itself.
For example, 145 is strong, because 1! + 4! + 5! = 1 + 24 + 120 = 145.
Task
Given a positive number, find if it is strong or not, and return either "STRONG!!!!" or "Not Strong !!".
Examples
1 is a strong number, because 1! = 1, so return "STRONG!!!!".
123 is not a strong number, because 1! + 2! + 3! = 9 is not equal to 123, so return "Not Strong !!".
145 is a strong number, because 1! + 4! + 5! = 1 + 24 + 120 = 145, so return "STRONG!!!!".
150 is not a strong number, because 1! + 5! + 0! = 122 is not equal to 150, so return "Not Strong !!".  */

  const factorial = (n) => n <= 1 ? 1 : n * factorial(n -= 1);
  const strong = n => (n + '').split('').reduce((sum, e) => sum + factorial(+e), 0) === n ? "STRONG!!!!" : "Not Strong !!";
  // console.log(strong(40585));

  /** My created task to find strong numbers */
  const findStrong = (number, strong = []) => number < 2 ? [number, ...strong]
    : findStrong(number - 1, (number + '').split('').reduce((sum, el) => sum + +factorial(el), 0) === number ? [number, ...strong] : strong);
  // console.log(findStrong(6221)) /** [1, 2, 145] */;
}

{ /** 6 kyu  Word a10n (abbreviation) 
  The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").
Example
abbreviate("elephant-rides are really fun!")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     "!" === "e6t-r3s are r4y fun!"   */

  const abbreviate = string => string.replace(/\B\w{2,}\B/g, e => e.length);
  // const abbreviate = string => string.replace(/\B[A-z]{2,}\B/g, e => e.length);
  // const abbreviate = string => string.replace(/[A-z]{4,}/g, e => e[0] + (e.length - 2 + '') + e.slice(-1));
  // const abbreviate = string => string.replace(/\w{4,}/g, e => e[0] + (e.length - 2 + '') + e[e.length - 1]);

  // const abbreviate = string => string.split(' ').map(e => e.includes('-')
  //   ? e.split('-').map(el => el.length > 3 ? el[0] + (el.length - 2 + '') + el[el.length - 1] : el).join('-')
  //   : e.includes(',') && e.length > 4 ? e[0] + (e.length - 3 + '') + e[e.length - 2] + e[e.length - 1 + '']
  //     : e.includes('!') && e.length > 4 ? e[0] + (e.length - 3 + '') + e[e.length - 2] + e[e.length - 2 + '']
  //       : e.includes('!') ? e : e.length > 3 ? e[0] + (e.length - 2 + '') + e[e.length - 1] : e).join(' ');

  // console.log(abbreviate('elephant-rides are really fun!'));
  // console.log(abbreviate('internationalization'));
  // console.log(abbreviate('You need, need not want, to complete this code-wars mission'));
}

{ /** 7 kyu  Basic Sequence Practice
  A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".
In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".
[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3
Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]      */

  // const sumOfN = n => {
  //   let arr = [];
  //   if (!n) [0];
  //   if (n > 0) {
  //     for (let i = 0, res = 0; i <= n; i++) {
  //       arr = [...arr, res += i];
  //     }
  //   }
  //   for (let i = 0, res = 0; i >= n; i--) {
  //     arr = [...arr, res += i];
  //   }
  //   return arr;
  // };

  const sumOfN = n => {
    let arr = [0];
    for (let i = 1, res = 0; i <= Math.abs(n); i++) {
      arr = [...arr, res += i];
    }
    return n < 0 ? arr.map(e => -e) : arr;
  };
  // console.log(sumOfN(3));
}

{ /** 7 kyu  Minimize Sum Of Array (Array Series #1)
  Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74     */

  // function minSum(arr) {
  //   const sorted = arr.slice(0).sort((a, b) => b - a);
  //   return sorted.slice(arr.length / 2).map((e, i) => e * sorted.slice(0, arr.length / 2)[arr.length / 2 - 1 - i]).reduce((sum, e) => sum + e, 0);
  // }

  function minSum(arr) {
    const sorted = arr.slice(0).sort((a, b) => b - a);
    return sorted.slice(arr.length / 2).reduce((sum, e, i) => sum + e * sorted.slice(0, arr.length / 2)[arr.length / 2 - 1 - i], 0);
  }
  // console.log(minSum([12, 6, 10, 26, 3, 24]));
}

{ /** 7 kyu  Disarium Number
  Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
Task
Given a number, Find if it is Disarium or not .
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"         */

  const disariumNumber = n => (n + '').split('').reduce((sum, e, i) => sum + e ** (i + 1), 0) === n ? "Disarium !!" : "Not !!";
  // console.log(disariumNumber(879));
}

{ /**7 kyu  Jumping Number
  Jumping number is the number that All adjacent digits in it differ by 1.
Task
Given a number, Find if it is Jumping or not .
Notes
Number passed is always Positive .
Return the result as String .
The difference between ‘9’ and ‘0’ is not considered as 1 .
All single digit numbers are considered as Jumping numbers.
Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1 */

  // const jumpingNumber = n => (n + '').length === 1 ? "Jumping!!"
  //   : (n + '').split('').map((e, i, ar) => Math.abs(ar[i + 1] - e)).slice(0, -1).every(e => e === 1) ? "Jumping!!" : "Not!!";

  const jumpingNumber = n => (n + '').split('').every((e, i, ar) => i < 1 || Math.abs(ar[i - 1] - e) === 1) ? "Jumping!!" : "Not!!";
  // console.log(jumpingNumber(98789876));
  // console.log(jumpingNumber(6));
}

{ /** 7 kyu  Special Number 
  A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5
Given a number determine if it special number or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed will be positive (N > 0) .
All single-digit numbers within the interval [1:5] are considered as special number.
Input >> Output Examples
specialNumber(2) ==> return "Special!!"
Explanation:
It's a single-digit number within the interval [1:5] .
specialNumber(9) ==> return "NOT!!"
Explanation:
Although, it's a single-digit number but Outside the interval [1:5] .
specialNumber(23) ==> return "Special!!"
Explanation:
All the number's digits formed from the interval [0:5] digits .
specialNumber(39) ==> return "NOT!!"
Explanation:
Although, there is a digit (3) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .
specialNumber(59) ==> return "NOT!!"
Explanation:
Although, there is a digit (5) Within the interval But the second digit is not (Must be ALL The Number's Digits ) .
specialNumber(513) ==> return "Special!!"
specialNumber(709) ==> return "NOT!!"       */

  // const specialNumber = n => [...('' + n)].every(e => '012345'.includes(e)) ? "Special!!" : "NOT!!";
  // const specialNumber = n => [...('' + n)].every(e => e < 6) ? "Special!!" : "NOT!!";
  const specialNumber = n => ('' + n).replace(/[0-5]/g, '').length ? "NOT!!" : "Special!!";
  // const specialNumber = n => /^[0-5]+$/.test(n) ? "Special!!" : "NOT!!";
  // const specialNumber = n => /[6-9]/.test(n) ? "NOT!!" : "Special!!";
  // console.log(specialNumber(55439323));
}

{ /** 7 kyu  Automorphic Number
  A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Task
Given a number determine if it Automorphic or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
The number passed to the function is positive
Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
25 squared is 625 , Ends with the same number's digits which are 25 .
autoMorphic (13) -->> return "Not!!"
Explanation:
13 squared is 169 , Not ending with the same number's digits which are 69 .
autoMorphic (76) -->> return "Automorphic"
Explanation:
76 squared is 5776 , Ends with the same number's digits which are 76 .
autoMorphic (225) -->> return "Not!!"
Explanation:
225 squared is 50625 , Not ending with the same number's digits which are 225 .
autoMorphic (625) -->> return "Automorphic"
Explanation:
625 squared is 390625 , Ends with the same number's digits which are 625 .
autoMorphic (1) -->> return "Automorphic"
Explanation:
1 squared is 1 , Ends with the same number's digits which are 1 .
autoMorphic (6) -->> return "Automorphic"
Explanation:
6 squared is 36 , Ends with the same number's digits which are 6       */

  // const automorphic = n => (n * n + '').endsWith(n) ? "Automorphic" : "Not!!";
  // const automorphic = n => RegExp(`${n}$`).test((n * n) + '') ? "Automorphic" : "Not!!";
  const automorphic = n => ((n * n) + '').slice(-(n + '').length) === n + '' ? "Automorphic" : "Not!!";
  // console.log(automorphic(76));
}

{ /** 7 kyu    Tidy Number
  A Tidy number is a number whose digits are in non-decreasing order.
Task
Given a number, Find if it is Tidy or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as a Boolean
Input >> Output Examples
tidyNumber (12) ==> return (true)
Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
tidyNumber (32) ==> return (false)
Explanation:
The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .
tidyNumber (1024) ==> return (false)
Explanation:
The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .
tidyNumber (13579) ==> return (true)
Explanation:
The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .
tidyNumber (2335) ==> return (true)
Explanation:
The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3      */

  // const tidyNumber = n => !(n + '').split('').some((e, i, ar) => e - ar[i - 1] < 0);
  // const tidyNumber = n => +[...(n + '')].sort().join('') === n;
  const tidyNumber = n => [...(n + '')].every((e, i, ar) => !i || e >= ar[i - 1]);
  // console.log(tidyNumber(22235));
}

{ /** 6 kyu  Primorial Of a Number Definition (Primorial Of a Number)
  Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P# and it is the product of the first n prime numbers.
    Task
  Given a number N , calculate its primorial.!alt!alt
  Notes
  Only positive numbers will be passed (N > 0) .
  Input >> Output Examples:
  1- numPrimorial (3) ==> return (30)
  Explanation:
  Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .
    Mathematically written as , P3# = 30 .
  2- numPrimorial (5) ==> return (2310)
  Explanation:
  Since the passed number is (5) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 = 2310 .
    Mathematically written as , P5# = 2310 .
  3- numPrimorial (6) ==> return (30030)
  Explanation:
  Since the passed number is (6) ,Then the primorial should obtained by multiplying  2 * 3 * 5 * 7 * 11 * 13 = 30030 .
    Mathematically written as , P6# = 30030 .      */

  const getPrimes = n => {
    const arr = [2];

    for (let num = 3; arr.length < n; num++) {
      let ar = [];

      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          ar.push(num);
        }
      }

      if (ar.length === 0) {
        arr.push(num);
      }
    }
    return arr;
  };

  function numPrimorial(n) {
    const arr = getPrimes(n);
    return arr.reduce((res, e) => res * e);
  }

  // function numPrimorial(n) {
  //   let res = 1;
  //   const arr = getPrimes(n);

  //   for (let i = 0; i < arr.length; i++) {
  //     res *= arr[i];

  //   }
  //   return res;
  // }

  // console.log(numPrimorial(3));
}

{ /** 7 kyu
  Convert an array of strings to array of numbers
  Oh no!
  Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
    You need to cast the whole array to the correct type.
    Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
    ie:["1", "2", "3"] to [1, 2, 3]
    Note that you can receive floats as well.   */

  // const toNumberArray = stringArray => stringArray.map(e => +e);
  // const toNumberArray = stringArray => stringArray.map(Number);
  const toNumberArray = stringArray => stringArray.map(parseFloat);
  // console.log(toNumberArray(["1.1", "2.2", "3.3"]));
}

{ /**6 kyu  Decipher this!
  You are given a secret message you need to decipher. Here are the things you need to know to decipher it:
For each word:
the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
Examples
'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'         */

  // function decipherThis(str) {
  //   return str.split(' ').map((e) => e = String.fromCharCode(e.match(/\d{2,3}/)[0]) + (e.length > e.match(/\d{2,3}/)[0].length ? e.charAt(e.length - 1) : '') + e.slice(e.match(/\d{2,3}/)[0].length + 1, -1) + (e.length > e.match(/\d{2,3}/)[0].length + 1 ? e[e.match(/\d{2,3}/)[0].length] : '')).join(' ');
  // }

  const decipherThis = str => str.split(' ').map((e) => e.replace(/^\d{2,3}/, el => String.fromCharCode(el)).replace(/\b(.)(.)(.*)(.)\b/, '$1$4$3$2')).join(' ');

  // console.log(decipherThis('72olle 103doo 100ya'));
  // console.log(decipherThis('82yade 115te 103o'));
  // console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));
}

{ /** 8 kyu  Ensure question
  Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.
For example (Input --> Output)
"Yes" --> "Yes?" 
"No?" --> "No?"     */

  // const ensureQuestion = s => /[?]$/.test(s) ? s : s + '?';
  // const ensureQuestion = s => s.endsWith('?') ? s : s + '?';
  // const ensureQuestion = s => s.split('?').join('') + '?';
  // const ensureQuestion = s => s.slice(-1) === '?' ? s : s + '?';
  const ensureQuestion = s => s.indexOf('?') > 0 ? s : s + '?';
  // console.log(ensureQuestion('Yes'));
}

{ /** 7 kyu  Alphabet war
  There is a war and nobody knows - the alphabet war!
  There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
  
  Task
  Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
  
  The left side letters and their power:
  
   w - 4
   p - 3
   b - 2
   s - 1
  The right side letters and their power:
  
   m - 4
   q - 3
   d - 2
   z - 1
  The other letters don't have power and are only victims.
  
  Example
  alphabetWar("z");        //=> Right side wins!
  alphabetWar("zdqmwpbs"); //=> Let's fight again!
  alphabetWar("zzzzs");    //=> Right side wins!    */

  function alphabetWar(fight) {
    const left = 'sbpw';
    const right = 'zdqm';
    const res = fight.split('').reduce((res, e) => res + left.indexOf(e) + 1 - (right.indexOf(e) + 1), 0);
    return res > 0 ? "Left side wins!" : res < 0 ? "Right side wins!" : "Let's fight again!";
  }
  // console.log(alphabetWar("zdqmwpbs"));
}

{ /** 6 kyu  New Cashier Does Not Know About Space or Shift
  Some new cashiers started to work at your restaurant.
They are good at taking orders, but they don't know how to capitalize words, or use a space bar!
All the orders they create look something like this:
"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
The kitchen staff are threatening to quit, because of how difficult it is to read the orders.
Their preference is to get the orders as a nice clean string with spaces and capitals like so:
"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
The kitchen staff expect the items to be in the same order as they appear in the menu.
The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke            */

  // function getOrder(input) {
  //   const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];

  //   for (let i = 0; i < menu.length; i++) {
  //     input = input.replaceAll(menu[i].toLowerCase(), menu[i] + ' ').trim();
  //   }
  //   return menu.map(e => input.split(' ').filter(el => el === e)).flatMap(e => e).join(' ');
  // }

  // function getOrder(input) {
  //   const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  //   [...menu].forEach(e => {
  //     input = input.replaceAll(e.toLowerCase(), e + ' ').trim();
  //   });
  //   return menu.map(e => input.split(' ').filter(el => el === e)).flatMap(e => e).join(' ');
  // }

  function getOrder(input) {
    const orders = [];
    const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
    [...menu].forEach(e => {
      orders.push(...(e + ' ').repeat(input.split(e.toLowerCase()).length - 1).split(' ').filter(e => e !== ''));
    });
    return orders.join(' ');
  }
  // console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"));
}

{ /**6 kyu  longest_palindrome 
  Find the length of the longest substring in the given string s that is the same in reverse.
As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.
If the length of the input string is 0, the return value must be 0.
Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0 */

  function longestPalindrome(s) {
    if (!s) return 0;
    const res = [];
    for (let i = 0; i < s.length; i++) {
      s.slice(i) === [...s.slice(i)].reverse().join('') ? res.push(s.slice(i)) : res;

      for (let j = 0; j < s.slice(i).length; j++) {
        s.slice(i, -j) === [...s.slice(i, -j)].reverse().join('') ? res.push(s.slice(i, -j)) : res;
      }
    }
    return Math.max(...(res.map(e => e.length)));
  }
  // console.log(longestPalindrome("baablkj12345432133d"));
  // console.log(longestPalindrome("zyabyz"));
  // console.log(longestPalindrome(""));
}

{ /** 5 kyu  Common Denominators 
  You will have a list of rationals in the form

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
where all numbers are positive ints. You have to produce a result in the form:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"
depending on the language (See Example tests) in which D is as small as possible and

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Note:
Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.
Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.    */

  function convertFrac(lst) {
    if (!lst.length) return '';
    const dens = lst.map(e => e[1]);
    let genDen = dens.reduce((arr, e) => arr * e, 1);
    for (let i = 2; i < genDen; i++) {

      // while (dens.map(e => genDen / i / e).every(e => e % 1 === 0)) {
      //   genDen /= i;
      // }
      // while (dens.map(e => genDen / i / e).every(e => !(e % 1))) {
      //   genDen /= i;
      // }
      while (dens.map(e => genDen / i / e).every(e => e === parseInt(e))) {
        genDen /= i;
      }
    }

    return `(${lst.reduce((arr, e) => arr = [...arr, ([genDen / e[1] * e[0], genDen])], []).join(')(')})`;
  }


  // console.log(convertFrac([[1, 2], [1, 3], [1, 4]]));
  // console.log(convertFrac([[69, 130], [87, 1310], [3, 4]]));
  // console.log(convertFrac([]));
}

{ /** 7 kyu  Squares sequence
  Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]    */

  // function squares(x, n) {
  //   if (x <= 0) return [];
  //   const arr = [x];
  //   for (let i = 1; i < n; i++) {
  //     x **= 2;
  //     arr.push(x);
  //   }
  //   return arr;
  // }

  // function squares(x, n) {
  //   if (n <= 0) return [];
  //   let arr = [x];
  //   for (x; n > 1; n--) {
  //     arr.push(x *= x);
  //   }
  //   return arr;
  // }

  // const squares = (x, n) => {
  //   let arr = [];
  //   arr = [x, ...[...Array(n > 0 ? n - 1 : 0)].map((_) => x *= x)];

  //   return n > 0 ? arr : [];
  // };

  const squares = (x, n) => n > 0 ? [x, ...squares(x *= x, n - 1)] : [];
  // console.log(squares(2, 5));
}

{ /** 4 kyu  Multiplying numbers as strings     & bigInt use avoiding.

  This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!
The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!
Usage of BigInt is disallowed and will be checked in the full test suite.  */
  function multiply(a, b) {
    if (a * b < 2 ** 53) return (a * b).toString();
    const res = [...Array.from({ length: a.length + b.length }, e => 0)];
    for (let i = a.length - 1; i >= 0; i--) {
      for (let j = b.length - 1; j >= 0; j--) {
        const sum = a[i] * b[j] + res[i + j + 1];
        res[i + j + 1] = sum % 10;
        res[i + j] += Math.floor(sum / 10);
      }
    }
    // return res.join('').replace(/^[0]*/, '');
    while (res[0] === 0) res[0] = '';
    return res.join('');
  }
  // console.log(multiply('2', '0'));
  // console.log(multiply("11", "85"));
  // console.log(multiply("1020303004875647366210", "2774537626200857473632627613"));
}

{ /**6 kyu  Data Reverse 
  A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:
10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.
The data is given in an array as such:
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]    */

  // function dataReverse(data) {
  //   const arr = [];
  //   const n = data.length / 8;

  //   for (let i = 0; i < n; i++) {
  //     const element = data[i];
  //     let ar = [];

  //     for (let j = 0; j < 8; j++) {
  //       ar.push(data[j]);
  //       if (ar.length === 8) {
  //         arr.push(ar);
  //         console.log(ar, arr);
  //         data = data.slice(j + 1);
  //         break;
  //       }
  //     }
  //   }
  //   return arr.reverse().flatMap(e => e);
  // }

  // function dataReverse(data) {
  //   const arr = [];
  //   for (let i = 0; i < data.length; i += 8) {
  //     arr.unshift(...data.slice(i, i + 8));
  //   }
  //   return arr;
  // }

  function dataReverse(data) {
    data = [...data];
    const arr = [];
    while (data.length) {
      arr.push(...data.splice(-8));
    }
    return arr;
  }
  // console.log(dataReverse([1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]));
}

{ /** 7 kyu  Odd-Even String Sort 
  Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.
Examples
input:    "CodeWars" => "CdWr oeas"
           ||||||||      |||| ||||
indices:   01234567      0246 1357
Even indices 0, 2, 4, 6, so we have "CdWr" as the first group.
Odd indices are 1, 3, 5, 7, so the second group is "oeas".
And the final string to return is "Cdwr oeas".
Notes
Tested strings are at least 8 characters long.       */

  const sortMyString = s => [[...s].filter((_, i) => !(i % 2)).join(''), [...s].filter((_, i) => i % 2).join('')].join(' ');
  // console.log(sortMyString('CodeWars'));
}

{ /** 7 kyu  Substituting Variables Into Strings: Padded Numbers 
  Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
Example:
solution(5) // should return "Value is 00005"     */

  function solution(value) {
    // return `Value is ${'0'.repeat(5 - ('' + value).length)}${value}`;
    // return `Value is ` + `${'0'.repeat(5)}${value}`.slice(-5);
    return `Value is ${(value + '').padStart(5, '0')}`;
  }
  // console.log(solution(5));
}

{ /** 7 kyu  The old switcheroo
  Write a function
vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:
vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels. */

  function vowel2index(str) {
    // return str.split('').map((e, i) => {
    //   return ('aeiou').includes(e.toLowerCase()) ? e = i + 1 : e;
    // }).join('');
    return str.replace(/[aeiou]/gi, (e, i) => i + 1);
  }
  // console.log(vowel2index('Codewars is the best site in the world'));
}

{ /** 5 kyu  Best travel 
  John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.
Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?
Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.
The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].
The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.
Examples:
ts = [50, 55, 56, 57, 58] choose_best_sum(163, 3, ts) -> 163
xs = [50] choose_best_sum(163, 3, xs) -> nil (or null or ... or -1 (C++, C, D, Rust, Swift, Go, ...)
ys = [91, 74, 73, 85, 73, 81, 87] choose_best_sum(230, 3, ys) -> 228
Notes:
try not to modify the input list of distances ls    */

  function chooseBestSum(t, k, ls) {
    if (k > ls.length) return null;
    const arr = [];

    for (let i = 0; i < ls.length; i++) {
      let sum = 0;
      if (k === 1) {
        sum += ls[i];
        if (sum <= t) arr.push(sum);
      }

      for (let j = 0; j < ls.length; j++) {
        if (j === i) { continue; }
        if (k === 2) {
          sum = ls[i] + ls[j];
          if (sum <= t) arr.push(sum);
        };

        for (let m = 0; m < ls.length; m++) {
          if (m === i || m === j) { continue; }
          if (k === 3) {
            sum = ls[i] + ls[j] + ls[m];
            if (sum <= t) arr.push(sum);
          };

          for (let n = 0; n < ls.length; n++) {
            if (n === i || n === j || n === m) { continue; }
            if (k === 4) {
              sum = ls[i] + ls[j] + ls[m] + ls[n];
              if (sum <= t) arr.push(sum);
            };


            for (let p = 0; p < ls.length; p++) {
              if (p === i || p === j || p === m || p === n) { continue; }
              if (k === 5) {
                sum = ls[i] + ls[j] + ls[m] + ls[n] + ls[p];
                if (sum <= t) arr.push(sum);
              };

              for (let q = 0; q < ls.length; q++) {
                if (q === i || q === j || q === m || q === n || q === p) { continue; }
                if (k === 6) {
                  sum = ls[i] + ls[j] + ls[m] + ls[n] + ls[p] + ls[q];
                  if (sum <= t) arr.push(sum);
                };
              }
            }
          }
        }
      }
    }
    return arr.length ? Math.max(...arr) : null;
  }


  // console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
  // console.log(chooseBestSum(163, 3, [50]));
  // console.log(chooseBestSum(430, 5, [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]));  /** Maximum call stack size exceeded */
  // console.log(chooseBestSum(700, 6, [91, 74, 73, 85, 73, 81, 87]));
  // console.log(chooseBestSum(331, 4, [91, 74, 73, 85, 73, 81, 87]));
  // console.log(chooseBestSum(331, 5, [91, 74, 73, 85, 73, 81, 87]));
  // console.log(chooseBestSum(331, 2, [91, 74, 73, 85, 73, 81, 87]));
  // console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
}

{ /** 8 kyu  How many stairs will Suzuki climb in 20 years?
  Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
Your function should return the 20 year estimate of the stairs climbed using the formula above. */

  function stairsIn20(s) {
    return s.flatMap(e => e).reduce((res, e) => res + e, 0) * 20;
    // return s.flat().reduce((res, e) => res + e, 0) * 20;
  }

  const sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063,
    5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496,
    6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
    monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
      6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221,
      5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
      7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
    tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
      7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
      7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493,
      5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
    wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102,
      5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
      5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698,
      9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
    thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
      9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
      9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066,
      7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
    friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362,
      6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501,
      9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
      5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
    saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943,
      5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003,
      5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838,
      7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

  const stairs = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];

  // console.log(stairsIn20(stairs));
}

{ /** 7 kyu  Word values
  Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.  */

  function wordValue(a) {
    // const alph = 'abcdefghijklmnopqrstuvwxyz';
    // return a.map((e, i) => e.split('').map(el => alph.indexOf(el) + 1).reduce((sum, e) => sum + e, 0) * (i + 1));

    return a.map((e, i) => e.split('').reduce((sum, e) => sum + e.charCodeAt() % 32, 0) * (i + 1));
  }
  // console.log(wordValue(["codewars", "abc", "xyz"]));
}

{ /** 7 kyu  Functional Addition
  Create a function add(n)/Add(n) which returns a function that always adds n to any number
Note for Java: the return type and methods have not been provided to make it a bit more challenging.
var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6           */

  // function add(n) {
  //   return function (m) {
  //     return m + n;
  //   };
  // };

  const add = n => m => m + n;

  const addTen = add(10);
  const addTwenty = add(20);

  // console.log(add());
  // console.log(addTen(22));
  // console.log(addTen(1));
  // console.log(addTwenty(22));
}

{/**  8 kyu Simple validation of a username with regex
  Write a simple regex to validate a username. Allowed characters are:
lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included). */

  function validateUsr(username) {
    const res = /\b[a-z\d_]{4,16}\b/.test(username);
    return res;
  }
  // console.log(validateUsr('5t9p'));
}

{ /** 8 kyu  Days in the year
  A variation of determining leap years, assuming only integers are used and years can be negative and positive.

Write a function which will return the days in the year and the year entered in a string. For example:

yearDays(2000) returns "2000 has 366 days"
There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

Also the basic rule for validating a leap year are as follows

Most years that can be divided evenly by 4 are leap years.

Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.  */


  // const yearDays = year => year % 4 || year.toString().endsWith('00') ? year % 400 ? `${year} has 365 days` : `${year} has 366 days` : `${year} has 366 days`;
  const yearDays = year => `${year} has ${year % 4 || year.toString().endsWith('00') ? year % 400 ? `365` : `366` : `366`} days`;
  // console.log(yearDays(210));
}

{ /** 7 kyu  Digital cypher 
  Digital Cypher assigns to each letter of the alphabet unique number. For example:

 a  b  c  d  e  f  g  h  i  j  k  l  m
 1  2  3  4  5  6  7  8  9 10 11 12 13
 n  o  p  q  r  s  t  u  v  w  x  y  z
14 15 16 17 18 19 20 21 22 23 24 25 26
Instead of letters in encrypted word we write the corresponding number, eg. The word scout:

 s  c  o  u  t
19  3 15 21 20
Then we add to each obtained digit consecutive digits from the key. For example. In case of key equal to 1939 :

   s  c  o  u  t
  19  3 15 21 20
 + 1  9  3  9  1
 ---------------
  20 12 18 30 21
  
   m  a  s  t  e  r  p  i  e  c  e
  13  1 19 20  5 18 16  9  5  3  5
+  1  9  3  9  1  9  3  9  1  9  3
  --------------------------------
  14 10 22 29  6 27 19 18  6  12 8
Task
Write a function that accepts str string and key number and returns an array of integers representing encoded str.

Input / Output
The str input string consists of lowercase characters only.
The key input number is a positive integer.

Example
Encode("scout",1939);  ==>  [ 20, 12, 18, 30, 21]
Encode("masterpiece",1939);  ==>  [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8] */

  function encode(str, n) {
    // return [...str].map((e, i) => 'abcdefghijklmnopqrstuvwxyz'.indexOf(e) + +n.toString()[i % n.toString().length] + 1);
    // return [...str].map((e, i) => e.charCodeAt() - 96 + +n.toString()[i % n.toString().length]);
    // return [...str].map((e, i) => e.charCodeAt() - 96 + +('' + n)[i % ('' + n).length]);
    return Array.from(str, (e, i) => e.charCodeAt() - 96 + +('' + n)[i % ('' + n).length]);
  }
  // console.log(encode("masterpiece", 1939));
}

{ /** 7 kyu  Sum of integers in string
  Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.    */

  // const sumOfIntegersInString = s => (s.match(/\d+/g) || []).reduce((sum, e) => sum + +e, 0);
  const sumOfIntegersInString = s => s.split(/\D/).reduce((sum, e) => sum + +e, 0);
  // console.log(sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'));
}

{/** 7 kyu  Over The Road
  You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

Street
1|   |6
3|   |4
5|   |2
  you
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

Example (address, n --> output)
Given your house number address and length of street n, give the house number on the opposite side of the street.

1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8 */

  const overTheRoad = (address, n) => {
    const even = Array(n).fill(0).map((_, i) => i * 2 + 2);
    const odd = even.map(e => e - 1).reverse();
    const i = BigInt(even.indexOf(address));
    return i >= 0 ? odd[i] : even[odd.indexOf(address)];
  };
  // console.log(overTheRoad(2, 3));
  // console.log(overTheRoad(23633656673, 310027696726));/** RangeError: Invalid array length*/
}
// const e = 2.718281828;

{/** 7 kyu  Unlucky Days
 Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.
Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1     */

  // function unluckyDays(year) {
  //   let count = 0;
  //   let fullYear = year;
  //   let monthNumber = 0;
  //   let dateNumber = 1;

  //   const date = new Date();
  //   date.setUTCFullYear(year);
  //   date.setUTCMonth(monthNumber, 1);
  //   date.setUTCHours(2, 0, 0, 0);


  //   while (fullYear <= year) {
  //     dateNumber++;
  //     date.setUTCDate(dateNumber);

  //     const [day, number, _, currYear] = date.toUTCString().split(' ');
  //     if (day === 'Fri,' && number === '13') count++;
  //     fullYear = currYear;
  //     if (number === '01') {
  //       dateNumber = 1;
  //       monthNumber++;
  //     }
  //   }
  //   return count;
  // }

  // function unluckyDays(year) {
  //   let count = 0, m = 0;

  //   const date = new Date();
  //   date.setUTCFullYear(year, m, 13);
  //   date.setUTCHours(2, 0, 0, 0);

  //   while (m <= 11) {
  //     const [day] = date.toUTCString().split(' ');
  //     if (day === 'Fri,') {
  //       count++;
  //     }
  //     m++;
  //     date.setUTCMonth(m);
  //   }
  //   return count;
  // }

  // function unluckyDays(year) {
  //   let count = 0;
  //   for (let i = 0; i < 12; i++) {
  //     new Date(year, i, 13).getDay() === 5 ? count++ : count;
  //   }
  //   return count;
  // }

  const unluckyDays = year => [...Array(12)].map((e, i) => new Date(year, i, 13)).reduce((count, e) => count + (e.getDay() === 5), 0);
  // console.log(unluckyDays(2015));
}

{ /** 7 kyu  Numbers to Letters
  Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
All inputs will be valid.   */

  const switcher = x => x.map(e => ' zyxwvutsrqponmlkjihgfedcba!? '[e]).join('');
  // console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));
}

{ /** 7 kyu  The Office IV - Find a Meeting Room 
  Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).
'X' --> busy
'O' --> empty
If all rooms are busy, return "None available!"
More in this series:  */

  // const meeting = x => x.indexOf('O') >= 0 ? x.indexOf('O') : 'None available!';
  // const meeting = x => x.join('').split('O').length > 1 ? x.indexOf('O') : 'None available!';
  const meeting = (x, room = x.indexOf('O')) => room >= 0 ? room : 'None available!';
  // console.log(meeting(['X', 'X', 'X']));
}

{ /** 6 kyu  Find Cracker.
   Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex> */
  var array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 110, ["B", "A", "A", "A"]],
    ["name3", 200, ["B", "A", "A", "C"]],
    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
  ];

  /* The scores for each grade is:
    A: 30 points
  B: 20 points
  C: 10 points
  D: 5 points
  Everything else: 0 points
  If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.
    Returns the name of the hacked name as an array when scoring with this rule.*/
  var array = [
    ["name1", 445, ["B", "A", "A", "C", "A", "A", "T"]],     // name1 total point is over 200 => hacked
    ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
    ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked

    ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
  ];
  // return ["name1", "name3"]; 

  const scores = { A: 30, B: 20, C: 10, D: 5 };

  // function findHack(arr) {
  //   return arr.map(e =>
  //     e[2].reduce((sum, e) => {
  //       return sum + (scores[e] ? scores[e] : 0);
  //     }, e[2].filter(e => scores[e] >= 20).length > 4 ? + 20 : +0) < e[1] ? e[0] : "").filter(e => e);
  // }

  const findHack = arr => arr.map(e => e[2].reduce((sum, e) => sum + (scores[e] ? scores[e] : 0),
    e[2].filter(e => scores[e] >= 20).length > 4 ? + 20 : +0) < e[1] ? e[0] : "").filter(e => e);

  console.log(findHack(array));
}
