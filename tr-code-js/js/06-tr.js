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