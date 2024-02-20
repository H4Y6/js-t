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
    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ');

    // const newArray = [];
    // const array = words.split(' ');
    // for (let i = 0; i < array.length; i++) {
    //   newArray.push(array.find(el => el.includes(i + 1)));
    // }

    // return newArray.join(' ');
  }
  console.log(order("is2 Thi1s T4est 3a"));
}