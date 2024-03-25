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
    const idx = sumValues.indexOf(Math.max(...sumValues));
    return x.split(' ')[idx];
  };

  // const high = (x, sumValues = []) => {
  //   sumValues = x.split(' ').map(e => [...e].reduce((res, el, i) => res + (el.codePointAt() - 96), 0));
  //   const max = Math.max(...sumValues);
  //   const idx = sumValues.indexOf(max);
  //   return x.split(' ')[idx];
  // };
  // console.log(high('man i need a taxi up to ubud'));
}
