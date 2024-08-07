{/** 8 kyu Merging sorted integer arrays (without duplicates)
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate. */

  const mergeArrays = (a, b) => [...new Set([...a, ...b])].sort((a, b) => a - b);

  // console.log(mergeArrays([2, 4, 8], [2, 4, 6]));
}
{/** 7 kyu shorter concat [reverse longer] 
  Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b */

  // const shorterReverseLonger = (a, b) => a.length < b.length ? [...a].concat([...b].reverse(), [...a]).join('') : [...b].concat([...a].reverse(), [...b]).join('');
  // const shorterReverseLonger = (a, b) => a.length < b.length ? a.concat([...b].reverse().join(''), a) : b.concat([...a].reverse().join(''), b);
  // const shorterReverseLonger = (a, b) => a.length < b.length ? a + [...b].reverse().join('') + a : b + [...a].reverse().join('') + b;
  const shorterReverseLonger = (a, b) => { if (a.length < b.length) [a, b] = [b, a]; return b + [...a].reverse().join('') + b; };
  // console.log(shorterReverseLonger("hello", "bau"));
}
{ /** 8 kyu  Wilson primes
  Wilson primes satisfy the following condition. Let P represent a prime number.
Then,
((P-1)! + 1) / (P * P)
should give a whole number.
Your task is to create a function that returns true if the given number is a Wilson prime. */

  [5, 13, 563];
  const isPrime = n => {
    n = BigInt(n);
    for (let i = 2n; i < n; i += 1n) {
      if (!(n % i)) return false;
    }
    return true;
  };
  const getFactorial = n => { n = BigInt(n); return n < 2n ? 1n : n * getFactorial(n - 1n); };
  const amIWilson = (p) => {
    p = BigInt(p);
    if (isPrime(p) && [5, 13, 563].includes(p) && !((getFactorial(p - 1n) + 1n) / p * p % 1n)) return true;
    return false;
  };
  // console.log(amIWilson(467));
  // console.log(getFactorial(467));
  // console.log(isPrime(467));
}
{ /**7 kyu  Going to the cinema
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
    (with card the total price is 235, with tickets 240)  */

  // function movie(card, ticket, perc) {
  //   let priceB = card;
  //   let i = 1;
  //   let k = perc;
  //   while (i * ticket <= priceB) {
  //     priceB += (ticket * k);
  //     i++;
  //     k *= perc;
  //   }
  //   return i * ticket > Math.ceil(priceB + ticket * k) ? i : i + 1;
  // };

  function movie(card, ticket, perc) {
    let i = 0;
    while (i * ticket <= Math.ceil(card)) {
      i++;
      card += ticket * perc ** i;
    }
    return i;
  };
  // console.log(movie(100, 10, 0.95));
}
{ /** 8 kyu  ASCII Total
  You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
Examples:
uniTotal("a") == 97
uniTotal("aaa") == 291*/

  function uniTotal(string) {
    return string.split('').reduce((total, e) => total + e.charCodeAt(), 0);
  }
  // console.log(uniTotal('aaaa'));
}
{/**7 kyuChanging letters
  When provided with a String, capitalize all vowels
For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata. */

  function swap(string) {
    return string.replace(/[aeiou]/g, e => e.toUpperCase());
  }
  // console.log(swap("Hello World!"));
}
{/** 8 kyu USD => CNY 
  Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
Examples (Input -> Output)
15  -> '101.25 Chinese Yuan'
465 -> '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")*/

  function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
  }
  // console.log(usdcny(465));
}
{/** 7 kyu Longest vowel chain
  The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou. */

  // const solve = s => Math.max(...s.split(/[bcdfghjklmnpqrstvwxyz]+/g).map(e => e.length));
  // const solve = s => s.split(/[^aeiou]/).reduce((max, e) => max = e.length > max ? e.length : max, 0);
  // const solve = s => s.match(/[aeiou]+/g).reduce((max, e) => max = e.length > max ? e.length : max, 0);
  const solve = s => Math.max(...s.match(/[aeiou]+/g).map(e => e.length));
  // console.log(solve('u'));
  // console.log(solve('chrononhotonthuooaos'));
}
{/**5 kyu Factorial decomposition 
  The aim of the kata is to decompose n! (factorial n) into its prime factors.
Examples:
n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.
n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.
Notes
the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.     */
  /** Test failed at bigInt */

  const factorial = n => n < 2 ? 1 : n * factorial(n - 1);

  /**primes w/o '1' */
  const getPrime = n => {
    const arr = [];

    for (n; n > 2; n -= 1) {
      const ar = [];

      for (let i = 2; i < n; i++) {
        if (n % i === 0) continue;
        ar.push(n);
      }

      if (ar.length === n - 2) arr.unshift(n);
    }
    arr.unshift(2);
    return arr;
  };

  function decomp(n) {
    let factNum = factorial(n);
    factNum = BigInt(factNum);
    const arr = [];
    let count = 0n;
    getPrime(n).map(e => {
      e = BigInt(e);
      while (factNum % e === 0n) {
        factNum /= e;
        count += 1n;
      }
      arr.push(count > 1 ? `${e}^${count}` : `${e}`);
      count = 0n;

    });
    return arr.join(' * ');
  }
  // console.log(decomp(14));
  // console.log(decomp(25));
}
{/** 8 kyu  Barking mad
  Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.
snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.*/

  // function Dog(breed) {
  //   this.breed = breed;
  // }

  // Dog.prototype.bark = function () {
  //   return 'Woof';
  // };

  // var snoopy = new Dog("Beagle");

  // snoopy.bark = function () {
  //   return "Woof";
  // };

  // var scoobydoo = new Dog("Great Dane");

  class Dog {
    constructor(breed) {
      this.breed = breed;
    }
    bark() {
      return 'Woof';
    }
  }
  const scoobydoo = new Dog("Great Dane");
  const snoopy = new Dog("Beagle");

  // console.log(scoobydoo.bark());
}
{/** 7 kyu  Compare Strings by Sum of Chars
  Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.
Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal          */

  // const ccSum = s => { return /\W|\d/.test(s) || s === '' || s === null ? 0 : s.split('').reduce((sum, e) => sum + e.toUpperCase().charCodeAt(), 0); };
  const ccSum = s => /\W|\d/.test(s) || !s ? 0 : s.split('').reduce((sum, e) => sum + e.toUpperCase().charCodeAt(), 0);

  const compare = (s1, s2) => ccSum(s1) === ccSum(s2);

  // console.log(compare("AD", "BC"));
  // console.log(compare("AD", "DD"));
  // console.log(compare("zz1", ""));
}
{/** 8 kyu
For Twins: 1. Types
 Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
Examples:
42, "number"   --> true
"42", "number" --> false   */

  const typeValidation = (variable, type) => typeof variable === type;
  // console.log(typeValidation("42", "number"));
}
{/**7 kyu  Elevator Distance
  Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor. You have travelled a total of 3 + 6 = 9 floors of distance.

Given an array representing a series of floors you must reach by elevator, return an integer representing the total distance travelled for visiting each floor in the array in order.
// simple examples
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18
// if two consecutive floors are the same,
//distance travelled between them is 0
elevatorDistance([3,3]) = 0
Array will always contain at least 2 floors. Random tests will contain 2-20 elements in array, and floor values between 0 and 30.  */

  // const elevatorDistance = array => array.map((e, i, ar) => Math.abs(e - ar[i + 1])).slice(0, -1).reduce((dist, e) => dist + e, 0);
  // const elevatorDistance = array => array.slice(1).reduce((dist, e, i) => dist + Math.abs(e - array[i]), 0);
  const elevatorDistance = array => {
    let dist = 0;
    for (let i = 0; i < array.length - 1; i++) {
      dist += Math.abs(array[i] - array[i + 1]);
      console.log('i:', i, '|', 'i+1:', i + 1, '|', 'dist:', dist);
    }
    return dist;
  };
  // console.log(elevatorDistance([7, 1, 7, 1]));
}
{/**7 kyu  Consecutive items 
  You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
It is guaranteed that a and b are both present in arr.   */

  // const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
  // const consecutive = (arr, a, b) => Math.abs(arr.findIndex(e => e === a) - arr.indexOf(b)) === 1;
  const consecutive = (arr, a, b) => new RegExp(`${a},${b}|${b},${a}`).test(arr);
  // console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4));
}