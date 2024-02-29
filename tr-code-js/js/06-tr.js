{/*  Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
  Example
For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].  */

  function countPositivesSumNegatives(input) {
    return input && input.length > 0 ? [input.filter(el => el > 0).length, input.reduce((acc, el) => el < 0 ? acc + el : acc, 0)] : [];

    // if (!input || !input.length) return [];
    // let count = 0, sum = 0;
    // input.forEach(el => el > 0 ? count++ : sum += el);
    // return [count, sum];

    // return input && input.length > 0 ?
    //   [input.reduce((count, el) => el > 0 ? count + 1 : count, 0),
    //   input.reduce((acc, el) => el < 0 ? acc + el : acc, 0)] : [];

    // return input === null || input.length === 0 ? [] :
    //   [input.reduce((count, el) => el > 0 ? count + 1 : count, 0),
    //   input.reduce((acc, el) => el < 0 ? acc + el : acc, 0)];
  }
  // console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
}

{  /* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"   */

  function reverseWords(str) {
    return str.split(' ').map(ss => [...ss].reverse().join('')).join(' ');
  }
  // console.log(reverseWords("This is an example!"));
}

{  /*  Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
  */

  function order(words) {
    // return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');

    return words ? words.split(' ').map(w => w.match(/\d/) + w).sort().map(w => w.slice(1)).join(' ') : '';

    // const newArray = [];
    // const array = words.split(' ');
    // for (let i = 0; i < array.length; i++) {
    //   newArray.push(array.find(el => el.includes(i + 1)));
    // }

    // return newArray.join(' ');
  }
  // order("is2 Thi1s T4est 3a");
  // console.log(order("is2 Thi1s T4est 3a"));
  // console.log(order(""));
}

{  /*  Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
Examples:
1: -1
14: -14
-34: 34   */

  function opposite(number) {
    return -number;
  }
  // console.log(opposite(4.25));
}

{  /*  Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.    */

  // const sumMix = x => x.reduce((sum, n) => parseInt(n) + sum, 0);
  const sumMix = x => x.reduce((sum, n) => +n + sum, 0);
  // const sumMix = x => x.reduce((sum, n) => Number(n) + sum, 0);
  // console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']));
}

{  /* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.   */


  /**  this row cw (.length) test failed ->   const countSmileys = arr => arr.reduce((n, el) => n + el.match(/^[:;][-~]?[D)]$/).length, 0);   */
  // const countSmileys = arr => arr.filter((el) => el.match(/^[:;][-~]?[D)]$/)).length;
  const countSmileys = arr => arr.reduce((n, el) => el.match(/^[:;][-~]?[D)]$/) ? n + 1 : n, 0);
  // function countSmileys(arr) {
  //   let n = 0;
  //   arr.forEach(el => {
  //     if (el.match(/^[:;][-~]?[D)]$/)) { n += 1; }
  //     // if ((el.match(/:-?\)/) || el.match(/:~?\)/) || el.match(/;-?\)/) || el.match(/;~?\)/) || el.match(/:-?D/) || el.match(/:~?D/) || el.match(/;-?D/) || el.match(/;~?D/))) { n += 1; }
  //   });
  //   return n;
  // }
  // console.log(countSmileys([':D', ':~)', ';~D', ':)']));
}

{   /**  A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

  //  const alphabetRegex = [/[Aa]/, /[Bb]/, /[Cc]/, /[Dd]/, /[Ee]/, /[Ff]/, /[Gg]/, /[Hh]/, /[Ii]/, /[Jj]/, /[Kk]/, /[Ll]/, /[Mm]/, /[Nn]/, /[Oo]/, /[Pp]/, /[Qq]/, /[Rr]/,
  //       /[Ss]/, /[Tt]/, /[Uu]/, /[Vv]/, /[Ww]/, /[Xx]/, /[Yy]/, /[Zz]/];

  function isPangram(string) {
    // const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    return array.every(el => string.toLowerCase().includes(el)); /**  failed */
  }
  // console.log(isPangram("The quick brown fox jumps over the lazy dog."));
}

{ /**  Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice    */

  function duplicateCount(text) {
    const t = [...text.toLowerCase()];
    return t.reduce((n, el, idx) => t.indexOf(el) !== t.lastIndexOf(el) && t.indexOf(el) === idx ? n + 1 : n, 0);
    // return t.filter((el, idx, t) => t.indexOf(el) === idx).reduce((n, el) => t.indexOf(el) !== t.lastIndexOf(el) ? n + 1 : n, 0);
  }
  // console.log(duplicateCount("Indivisibilities"));
}

{  /**  Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.  */

  function lovefunc(flower1, flower2) {
    return (flower1 + flower2) % 2 !== 0 ? true : false;
    // return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0) ? true : false;
  }
  // console.log(lovefunc(2, 1));
}

{  /** Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]   */

  function tribonacci(signature, n) {
    if (n === 3) return signature;
    if (n <= 2) return signature.slice(0, n);

    signature.push(signature.slice(-3).reduce((sum, el) => sum += el, 0));

    return tribonacci(signature, n - 1);

    // while (signature.length < n) {
    //   signature[signature.length] = (signature.slice(-3).reduce((sum, el) => sum + el, 0));
    // }
    // return signature.slice(0, n);

    // while (signature.length < n) {
    //   signature.push(signature.slice(-3).reduce((sum, el) => sum + el, 0));
    // }
    // return signature.slice(0, n);

    // for (let i = 3; i < n; i++) {
    //   signature[i] = signature[i - 3] + signature[i - 2] + signature[i - 1];
    // }
    // return signature.slice(0, n);
  }
  // console.log(tribonacci([1, 0, 0], 10));
}

{  /**  Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.  */

  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  // console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
}

{  /** Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n cubic m
 , the cube above will have volume of (n−1) cibic m 
  and so on until the top which will have a volume of 1 cubic m .

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
n cubic  + (n−1) cubic + (n−2)cubic +...+1 cubic = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45
findNb(91716553919377) --> -1  */

  function findNb(m) {
    let i = 0;

    while (m > 0) {
      m -= Math.pow(i, 3);
      if (m > 0)
        i++;
      if (m < 0) i = -1;
    }
    return i;
  }
  // console.log(findNb(1071225));
}

{/** Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5  */

  function litres(time) {
    // return Math.floor(.5 * time);
    // return ~~(time / 2);
    return parseInt(time / 2);
  }
  // console.log(litres(11.8));
}

{  /**  Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!   */

  function expandedForm(num) {
    return [...num.toString()].map((el, i, arr) => el * 10 ** (arr.length - 1 - i)).filter(el => el > 0).join(' + ');

    // let str = [];
    // num = num.toString();
    // const n = num.length;
    // for (let i = 0; i < n; i++) {
    //   const s = num[i] * Math.pow(10, n - i - 1);
    //   if (s > 0) str.push(s.toString());
    // }
    // return str.join(' + ');

    // let newStr = '';
    // const str = (num.toString());
    // const n = str.length;
    // for (let i = 0; i < n; i++) {
    //   const s = parseInt(str[i] * Math.pow(10, n - i - 1));
    //   if (s > 0) newStr += (' + ' + s.toString());
    // }
    // return newStr.slice(3);
  }
  // console.log(expandedForm(3040103));
}

{  /**  Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */
  function boolToWord(bool) {
    return bool ? "Yes" : "No";
  }
  // console.log(boolToWord(true));
}

{  /**  Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!
The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings. */

  function areYouPlayingBanjo(name) {
    return name + (name.match(/^[r]/i) ? " plays" : " does not play") + " banjo";
    // return name.match(/^[r]/i) ? name + " plays banjo" : name + " does not play banjo";
  }
  // console.log(areYouPlayingBanjo("Ringo"));
}

{  /**  Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */

  const number = array => array.map((e, i) => (i + 1) + ': ' + e);
  // console.log(number(["a", "b", "c"]));
}

{  /** You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.  */

  function check(a, x) {
    return a.includes(x);
    // return a.includes(x) ? true : false;
  }
  // console.log(check([66, 101], 66));
}

{  /**  A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)    */

  function hero(bullets, dragons) {
    return bullets >= 2 * dragons;
  }
  // console.log(hero(10, 5));
}

{  /**  You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).   */

  function isValidWalk(walk) {
    return walk.length === 10 && !walk.reduce((sum, d) => d === 'n' ? sum + 1 : d === 's' ? sum - 1 : sum, 0) && !walk.reduce((sum, d) => d === 'e' ? sum + 1 : d === 'w' ? sum - 1 : sum, 0);

    // return walk.length === 10 && walk.reduce((sum, d) => d === 'n' ? sum + 1 : d === 's' ? sum - 1 : sum, 0) === 0 && walk.reduce((sum, d) => d === 'e' ? sum + 1 : d === 'w' ? sum - 1 : sum, 0) === 0;

    // return walk.length === 10 && walk.reduce((sum, d) => sum + d.match(/[n]/) ? 1 : 0 - d.match(/[s]/) ? 1 : 0 + d.match(/[e]/) ? 1 : 0 - d.match(/[w]/) ? 1 : 0);

    //   return walk.length === 10 && walk.filter(d => d.match(/[n]/)).length === walk.filter(d => d.match(/[s]/)).length && walk.filter(d => d.match(/[e]/)).length === walk.filter(d => d.match(/[w]/)).length;
  }
  // console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
}

{  /** Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.   */


  function comp(ar1, ar2) {
    // console.log(ar1.map(e => e * e).sort().toString());
    // console.log(ar1.map(e => e * e).sort().join());

    // return !ar1 || !ar2 ? false : ar1.map(e => e * e).sort().toString() === [...ar2].sort().toString();

    return ar1 !== null && ar2 !== null && !null && ar1.every(e => {
      const idx = ar2.indexOf(e * e);
      return idx > -1 ? ar2.splice(idx, 1) : false;
    });

    // return (!Array.isArray(ar1) || !Array.isArray(ar2) || null) ? false : !([...ar1].sort((a, b) => a - b).some((e, i) => e ** 2 !== [...ar2].sort((a, b) => a - b)[i]));

    // return (!Array.isArray(ar1) || !Array.isArray(ar2) || null) ? false : ([...ar1].sort((a, b) => a - b).every((e, i) => e ** 2 === [...ar2].sort((a, b) => a - b)[i]));

    // if (!Array.isArray(ar1) || !Array.isArray(ar2) || null) return false;
    // const arr1 = [...ar1].sort((a, b) => a - b);
    // const arr2 = [...ar2].sort((a, b) => a - b);
    // return (arr1.every((e, i) => e ** 2 === arr2[i]));
  }
  // console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 36100, 25921, 361, 20736, 361]));  /**  false   */
  // console.log(comp([11, 19], [121, 361]));  /**  true   */
}

{  /**  A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

Examples:
- h = 3, bounce = 0.66, window = 1.5, result is 3
- h = 3, bounce = 1, window = 1.5, result is -1 
(Condition 2) not fulfilled). */

  function bouncingBall(h, bounce, window) {

    return bounce <= 0 || bounce >= 1 || h <= 0 || window >= h ? -1 : 2 + bouncingBall(h * bounce, bounce, window);
    // return bounce > 0 && bounce < 1 && h > 0 && window < h ? 2 + bouncingBall(h * bounce, bounce, window) : -1;

    // let n = 0;
    // if (bounce >= 1 || bounce <= 0 || window >= h) return -1;
    // for (n; h > window; n += 2) {
    //   h *= bounce;
    // }
    // return n > 0 ? n - 1 : 0;

    // if (bounce === 1) return -1;
    // let n = 0;
    // for (n; h > window; n += 2) {
    // h *= bounce;
    // }
    // return n > 0 ? n - 1 : 0;
  }
  // console.log(bouncingBall(30, 0.66, 1.5));
}

{  /**  7kyu    Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.   */

  function findShort(s) {
    return Math.min(...s.split(' ').map(e => e.length));
  }
  // console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
}

{  /**  8kyu   When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".
If your language supports it, try using a switch statement.   */

  function switchItUp(number) {
    switch (number) {
      case 1:
        return "One";
      case 2:
        return "Two";
      case 3:
        return "Three";
      case 4:
        return "Four";
      case 5:
        return "Five";
      case 6:
        return "Six";
      case 7:
        return "Seven";
      case 8:
        return "Eight";
      case 9:
        return "Nine";

      default: return 'Zero';
    }
  }
  // console.log(switchItUp(0));
}

{  /** 8 kyu altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string. */

  /**test failed */
  String.prototype.toAlternatingCase = function (str) {
    this.str = str;
    return this.str.split('').map(e => e.match(/[a-z]/) ? e.toUpperCase() : e.toLowerCase()).join('');
  };
  const string = new String('');
  // console.log(String.prototype.toAlternatingCase("hello world"));
  // console.log(string.toAlternatingCase("hello world"));
  // console.log('stringObj', string);
}

{  /**  6kyu There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

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

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool  */

  function queueTime(customers, n) {
    if (n === 0) return Infinity;
    if (n > customers.length) return Math.max(...customers);

    for (let i = 0; i < n; i++) {


    }
  }
  // console.log(queueTime([1, 2, 3, 4, 5], 100));
  // console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
}

{    /** 8kyu  Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.   */

  function howMuchILoveYou(nbPetals) {
    switch (nbPetals % 6) {
      case 1:
        return "I love you";
      case 2:
        return "a little";
      case 3:
        return "a lot";
      case 4:
        return "passionately";
      case 5:
        return "madly";
      default: return "not at all";
    }
  }
  // console.log(howMuchILoveYou(11));
}

{  /**  8kyu  Your task is to find the first element of an array that is not consecutive.
By not consecutive we mean not exactly 1 larger than the previous element of the array.
E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
If the whole array is consecutive then return null.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!  */

  function firstNonConsecutive(arr) {
    return arr.find((el, idx, arr) => el - idx !== arr[0]) ?? null;
  }
  // console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
}

{ /**  6 kyu  Two Sum   Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]   */

  function twoSum(numbers, target) {
    let result = [];
    numbers.map((e, i) => numbers.map((el, idx) => { if (e + el === target && i !== idx) result = [i, idx]; }));

    // numbers.forEach((e, i) => {
    //   numbers.forEach((el, idx) => {
    //     if (e + el === target && i !== idx) result = [idx, i];
    //   });
    // });
    return result;
  }
  // console.log(twoSum([2, 2, 3], 4));
}

{  /**  8 kyu  Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
Example output: Hello, Mr. Spock     */

  function sayHello(name) {
    return 'Hello, '.concat(name);
    // return 'Hello, ' + name;
  }
  // console.log(sayHello('Dr. McCoy'));
}

{  /**  8 kyu
Basic Mathematical Operations
110331291% of 12,36681,683 of 189,424Quickz4 Issues Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7   */

  function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);

    // switch (operation) {
    //   case '+':
    //     return value1 + value2;
    //   case '-':
    //     return value1 - value2;
    //   case '*':
    //     return value1 * value2;
    //   case '/':
    //     return value1 / value2;

    //   default: "Unknmown operation";
    // }
  }
  // console.log(basicOp("?", 4, 7));
}

{  /**  8 kyu
Removing Elements    Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!    */

  function removeEveryOther(arr) {
    return arr.filter((_, i) => !(i % 2));

    //   let newArr = [];
    //   for (let i = 0; i < arr.length; i += 2) {
    //     newArr.push(arr[i]);
    //   }
    //   return newArr;
  }
  // console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  // console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
}

{  /**  6 kyu Count characters in your string
    The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.    */

  function count(string) {
    return string.split('').reduce((obj, el) => {
      obj[el] ? obj[el]++ : obj[el] = 1;
      return obj;
    }, {});

    // const uniqueLetters = [...string].filter((e, i, arr) => arr.indexOf(e) === i);
    // let obj = {};
    // for (let i = 0; i < uniqueLetters.length; i++) {
    //   const array = [];
    //   for (let idx = 0; idx < [...string].length; idx++) {
    //     if (uniqueLetters[i] === [...string][idx]) {
    //       array.push([...string][idx]);
    //     }
    //   }
    //   obj[uniqueLetters[i]] = array.length;
    // }
    // return obj;
  }
  // console.log(count('abacoo'));
}

{  /**  6 kyu   Unique In Order  
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]                            */

  var uniqueInOrder = function (iterable) {
    // return [...iterable].filter((el, i) => el !== iterable[i + 1]);
    // return [...iterable].filter((e, i, arr) => e !== arr[i + 1]);
    // return Array.prototype.filter.call(iterable, ((el, i) => el !== iterable[i + 1]));
    return [...iterable].filter((e, i, arr) => e !== arr[i - 1]);

    // const arr = [];
    // for (let i = 0; i < iterable.length; i++) {

    //   if (iterable[i + 1] !== iterable[i]) {
    //     arr.push(iterable[i]);
    //   };
    // }
    // return arr;
  };
  // console.log(uniqueInOrder('ABBBBBCcAD'));
}

{  /** 7 kyu  Categorize New Member  
   The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]         */

  function openOrSenior(data) {
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
    // return data.map(([age, handicap]) => age < 55 ? 'Open' : handicap > 7 ? 'Senior' : 'Open');
    // return data.map(subArr => subArr[0] < 55 ? 'Open' : subArr[1] <= 7 ? 'Open' : 'Senior');
  }
  // console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));
  // console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]));
}

{  /**  The highest profit wins!
Story
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.        */

  const minMax = arr => [Math.min(...arr), Math.max(...arr)];
  // const minMax = (arr, ar = [...arr].sort((a, b) => a - b)) => [ar[0], ar[ar.length - 1]];
  // const minMax = arr => {
  //   const newArr = [...arr].sort((a, b) => a - b);
  //   return [newArr[0], newArr[newArr.length - 1]];
  // };
  // console.log(minMax([2334454, 5]));
}

/** 8 kyu   Is it a palindrome?
  Write a function that checks if a given string (case insensitive) is a palindrome.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.     */

const isPalindrome = x => {
  x = x.toLowerCase();
  return x === [...x].reverse().join('') ? true : false;

  // x = x.toLowerCase();
  // for (let i = 0; i < x.length; i++) {
  //   if (x.charAt(i) !== x.charAt(x.length - 1 - i)) return false;
  // }
  // return true;
};
// console.log(isPalindrome("AbBa"));