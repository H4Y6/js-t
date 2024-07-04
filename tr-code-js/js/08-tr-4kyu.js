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

  const vowelIndices = (word, res = []) => [...word].map((e, i) => res = e.match(/[aeiouy]/i) ? [...res, i + 1] : res).reverse()[0];
  console.log(vowelIndices('YoMama'));

}