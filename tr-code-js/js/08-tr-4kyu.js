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

  // console.log(calculateYears(1000, 0.05, 0.18, 1100));
  // console.log(calculateYears(1000, 0.01625, 0.18, 1200));
}
