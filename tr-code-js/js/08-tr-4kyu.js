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

  function wave(str, res = []) {
    [...str].forEach((e, i) => (/\w/.test(e)) ? res.push(str.slice(0, i) + e.toUpperCase() + str.slice(i + 1)) : 0);
    return res;
  };
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
  // console.log(wave(" two  words "));
}