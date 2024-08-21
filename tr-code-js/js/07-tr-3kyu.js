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
{/** 7 kyu  Insert dashes
  Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
Note that the number will always be non-negative (>= 0).  */

  // function insertDash(num) {
  //   const arr = ('' + num).split('');
  //   return [...arr.slice(1).map((e, i) => arr[i] % 2 && e % 2 ? arr[i] + '-' : arr[i]), ...arr.slice(-1)].join('');
  // }
  // const insertDash = num => ('' + num).replace(/([13579])(?=[13579])/g, `$&-`);
  // const insertDash = num => ('' + num).replace(/([13579])(?=[13579])/g, `$1-`);
  const insertDash = num => ('' + num).replace(/([13579]){2,}/g, e => e.split('').join('-'));
  // console.log(insertDash(454793));
}
{
  const consecutive = (arr, a, b) => RegExp(`${a},${b}|${b},${a}`).test(arr);
  // console.log(consecutive([1, 3, 5, 7], 3, 1));
}
{/**7 kyu  Evens and Odds 
  This kata is about converting numbers to their binary or hexadecimal representation:
If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.*/

  // const evensAndOdds = num => num % 2 ? num.toString(16) : num.toString(2);
  const evensAndOdds = num => num.toString(num % 2 ? 16 : 2);
  // console.log(evensAndOdds(62));
}
{/** 6 kyu  Where is my parent!?(cry)
   Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".  */

  // const findChildren = dancingBrigade => [...dancingBrigade.replace(/[a-z]/g, '')].sort().map(e =>
  //   e + [...dancingBrigade.replace(/[A-Z]/g, '')].filter(el => e === el.toUpperCase()).join('')).join('');

  // const findChildren = dancingBrigade => [...dancingBrigade].filter(e => e.match(/[A-Z]/)).sort().map(e => e +
  //   [...dancingBrigade].filter(el => el === e.toLowerCase()).join('')).join('');

  const findChildren = dancingBrigade => [...dancingBrigade].filter(e => e.match(/[A-Z]/)).sort().map(e => [...e,
  ...[...dancingBrigade].filter(el => el === e.toLowerCase())]).flat().join('');
  // console.log(findChildren("uwwWUueEe"));
}
{/**7 kyu  Count all the sheep on farm in the heights of New Zealand
  Every Friday and Saturday night, farmer counts sheep coming back to his farm (sheep returned on Friday stay and don't leave).
Sheep return in groups both of the days -> You will be given two arrays with these numbers (one for Friday and one for Saturday night). Array entries are integers, equal zero or higher - in case a given array is empty, farmer did not count the sheep or got sick (we treat this as no sheep returned that night).
Farmer knows how many sheep he has in total (third parameter). You need to calculate the amount of sheep lost (not returned to the farm) after final sheep count on Saturday.
Example 1: Input: [1, 2], [3, 4], 15 --> Output: 5
Example 2: Input: [3, 1, 2], [4, 5], 21 --> Output: 6
Example 3: Input: [0], [4, 15], 31 --> Output: 12
Example 4: Input: [], [4], 15 --> Output: 11  */

  // const lostSheep = (friday, saturday, total) => total - friday.reduce((sum, e) => sum + e, 0) - saturday.reduce((sum, e) => sum + e, 0);
  const lostSheep = (friday, saturday, total) => total - [...friday, ...saturday].reduce((sum, e) => sum + e, 0);

  // console.log(lostSheep([1, 2], [3, 4], 15));
}
{/** 7 kyu  Formatting decimal places #1
  Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
Don't round the numbers! Just cut them after two decimal places!
Right examples:  
32.8493 is 32.84  
14.3286 is 14.32
Incorrect examples (e.g. if you round the numbers):  
32.8493 is 32.85  
14.3286 is 14.33      */

  // const twoDecimalPlaces = number => +('' + number).replace(/(\.\d{2})(\d*)/, (e, a, b) => a);
  // const twoDecimalPlaces = number => +number.toFixed(5).slice(0, -3);
  // const twoDecimalPlaces = number => Math.trunc(100 * number) / 100;
  const twoDecimalPlaces = number => parseInt(100 * number) / 100;
  // console.log(twoDecimalPlaces(32.8493));
}
{/** 7 kyu  Return the Missing Element
  Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!
Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.
Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3       */

  // const getMissingElement = superImportantArray => {
  //   for (let i = 0; i < superImportantArray.length; i++) {
  //     if (!superImportantArray.includes(i + 1)) { return i + 1; }
  //   }
  //   return 0;
  // };

  const getMissingElement = (superImportantArray) => {
    for (let i = 0; i <= 9; i++) {
      if (!superImportantArray.includes(i)) return i;
    }
  };
  // console.log(getMissingElement([0, 5, 1, 3, 2, 8, 7, 6, 4]));
}
{/** 6 kyu  IPv4 to int32 
  Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).
1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001
Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.
Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.
Example
"128.32.10.1" => 2149583361   */

  // const ipToInt32 = ip => [...ip.split('.').map(e => +e).reduce((bin, e) => bin + ('0000000' + (e).toString(2)).slice(-8), '')]
  //   .reverse().reduce((res, e, i) => res + e * 2 ** i, 0);
  // const ipToInt32 = ip => parseInt(ip.split('.').map((e) => ('0000000' + (Number(e)).toString(2)).slice(-8)).join(''), 2);
  // const ipToInt32 = ip => parseInt(ip.split('.').map(e => ('00000000' + (+e).toString(2)).slice(-8)).reduce((bin, e) => bin + e, ''), 2);
  // const ipToInt32 = ip => ip.split('.').map(Number).reduceRight((res, e, i) => res + e * 256 ** (3 - i), 0);
  const ipToInt32 = ip => ip.split('.').reduce((res, e) => res * 256 + Number(e), 0);
  // console.log(ipToInt32("128.32.10.1"));

  // const binary = (128).toString(2);
  // console.log(binary);
  // console.log(parseInt('10000000001000000000101000000001', 2));
  // console.log(2 ** 31 + 2 ** 21 + 2 ** 11 + 2 ** 9 + 1);
  // 10000000.00100000.00001010.00000001;
}
{/** 8 kyu  Grasshopper - Order of operations
  You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.   */
  const orderOperations = () => (2 + 2) * (2 + 2) * 2;
}
{/** 7 kyu  Char Code Calculation 
  Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6   */

  // const calc = x => [...[...x].map(e => e.charCodeAt() + '').join('')].filter(e => e === '7').length * 6;
  // const calc = x => [...[...x].map(e => (e.charCodeAt() + '').split(''))].flat().reduce((res, e) => res += e === '7' ? 6 : 0, 0);
  const calc = x => x.replace(/./g, e => e.charCodeAt()).replace(/[^7]/g, '').length * 6;
  // console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
}
{/** 7 kyu  Building Strings From a Hash 
  Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"*/

  // const solution = pairs => {
  //   let res = [];

  //   for (const key in pairs) {
  //     if (Object.prototype.hasOwnProperty.call(pairs, key)) {
  //       const el = pairs[key];
  //       res.push(`${key} = ${el}`);
  //     }
  //   }
  //   return res.join(',');
  // };

  // const solution = pairs => Object.entries(pairs).map(e => `${e[0]} = ${e[1]}`).join(',');

  const solution = pairs => Object.keys(pairs).map(e => `${e} = ${pairs[e]}`).join(',');
  // console.log(solution({ 'a': 0, 'b': 2 }));
};
{ /** 7 kyu   SevenAte9
  Write a function that removes every lone 9 that is inbetween 7s.
"79712312" --> "7712312"
"79797"    --> "777"*/

  const sevenAte9 = str => str.replaceAll('797', 77).replaceAll('797', 77);
  // console.log(sevenAte9('165561786121789797'));
};
{/** 6 kyu  Prize Draw 
  To participate in a prize draw each one gives his/her firstname.
Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.
The length of the firstname is added to the sum of these ranks hence a number som.
An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.
Task:
parameters: st a string of firstnames, we an array of weights, n a rank
return: the firstname of the participant whose rank is n (ranks are numbered from 1)
Example:
names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4
The function should return: "PauL"
Notes:
The weight array is at least as long as the number of names, it may be longer.
If st is empty return "No participants".
If n is greater than the number of participants then return "Not enough participants".
See Examples Test Cases for more examples.    */

  // function rank(st, we, n) {
  //   const nameArr = st.split(',');
  //   if (!st) {
  //     return "No participants";
  //   } else if (nameArr.length < n) {
  //     return "Not enough participants";
  //   }
  //   const scores = nameArr.map((name) => [...name.toUpperCase()].reduce((sum, e, i) => sum + e.charCodeAt() - 64, 0) + name.length)
  //     .map((e, i) => [nameArr[i], e * we[i]]);
  //   const winnerScore = scores.sort((a, b) => b[1] - a[1])[n - 1][1];
  //   return scores.findIndex(e => e[1] === winnerScore) + 1 === n
  //     ? scores.filter(e => e[1] === winnerScore).sort()[0][0] : scores.filter(e => e[1] === winnerScore).sort()[1][0];
  // }

  // const rank = (st, we, n) => {
  //   if (!st) return `No participants`;
  //   const arr = st.split(',');
  //   if (arr.length < n) return `Not enough participants`;
  //   return arr.map((name, i) => [name, name.toUpperCase().split('').reduce((acc, e) => acc + e.charCodeAt() - 64, name.length) * we[i]])
  //     .sort().sort((a, b) => b[1] - a[1])[n - 1][0];
  // };

  const rank = (st, we, n) => (arr => !st ? `No participants` : n > arr.length ? `Not enough participants` : arr[n - 1][0])
    (st.split(`,`).map((e, i) => [e, [...e.toUpperCase()].reduce((res, el) => res + el.charCodeAt() - 64, e.length) * we[i]]).sort().sort((a, b) => b[1] - a[1]));

  // console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4));
  // console.log(rank("Addison,Ben,Sofia,Michael,Andrew,William,Willaim", [4, 2, 1, 4, 3, 2, 2], 4));
  // console.log(rank("Lagon,Lily", [1, 5], 2));

  /* curried function  **/
  const multiply = (a) => (b) => (c) => {
    // const multiplyThree = multiply(3);
    // const multiplyThreeAndFour = multiplyThree(4);
    // const result = multiplyThreeAndFour(5);
    console.log(a);
    console.log(b);
    console.log(c);
    return a * b * c;
  };
  // console.log(multiply(3)(4)(5));
}
{ /** 8 kyu  Online RPG: player to qualifying stage? 
  Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.
Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.
Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.
In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".
Otherwise return, False/false (according to the language in use).       */

  const playerRankUp = points => points < 100 ? false : "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.";
  // console.log(playerRankUp(144));
}
{ /** 8 kyu  Finish Guess the Number Game   
  Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.
If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
Can you finish the game so all the rules are met?    */

  class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }

    guess(n) {
      if (this.lives === 0) {
        throw new Error('Expect error already dead');
      }
      if (n === this.number) { return true; }
      else {
        this.lives -= 1;
        return false;
      }
    }
  }
}
{ /** 7 kyu  Band name generator
  My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:
"dolphin" -> "The Dolphin"
However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:
"alaska" -> "Alaskalaska"
Complete the function that takes a noun as a string, and returns her preferred band name written as a string.*/

  function bandNameGenerator(str) {
    // return str[0] === str[str.length - 1] ? str.replace(str[0], str[0].toUpperCase()) + str.slice(1) : 'The ' + str.replace(str[0], str[0].toUpperCase());
    // return str[0] === str[str.length - 1] ? str[0].toUpperCase() + str.slice(1).repeat(2) : 'The ' + str[0].toUpperCase() + str.slice(1);
    return str.endsWith(str[0]) ? str[0].toUpperCase() + str.slice(1).repeat(2) : 'The ' + str[0].toUpperCase() + str.slice(1);
  }
  // console.log(bandNameGenerator('tart'));
  // console.log(bandNameGenerator('knife'));
}
{ /** 7 kyu  How many arguments
  Write a function that returns the number of arguments it received.
args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2   */

  // const args_count = (...args) => args.reduce((count, e) => count + 1, 0);
  // const args_count = (...args) => args.length;
  function args_count() { return arguments.length; }
  // console.log(args_count('a', 'b', 'c'));
}
{ /** 7 kyu  Valid Spacing 
  Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).
For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:
* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true
Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true      */

  function validSpacing(s) {
    // return !/^\s|\s$|\s\s+/.test(s);
    return !/^\s|\s$|\s{2,}/.test(s);
    // return !/^ | $|\  /.test(s);
    // return s.trim() === s && !s.includes('  ');
  }
  // console.log(validSpacing(' Hello world'));
}
{ /** 8 kyu  Grader
  Create a function that takes a number as an argument and returns a grade based on that number.
Score	Grade
Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
Examples:
grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"         */

  function grader(score) {
    // return score < .6 ? 'F' : score < .7 ? 'D' : score < .8 ? 'C' : score < .9 ? 'B' : score <= 1 ? 'A' : 'F';
    return score < .6 || score > 1 ? 'F' : score < .7 ? 'D' : score < .8 ? 'C' : score < .9 ? 'B' : 'A';
  }
}
{ /** 7 kyu  Arithmetic progression 
  In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!
The result should be a string of numbers, separated by comma and space.
Example
# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"      */

  // const arithmeticSequenceElements = (a, d, n) => {
  //   const arr = [a];
  //   while (arr.length < n) {
  //     arr.push(a += d);
  //   }
  //   return arr.join(', ');
  // };

  // const arithmeticSequenceElements = (a, d, n) => Array(n).fill(a).map((e, i) => e + i * d).join(', ');
  const arithmeticSequenceElements = (a, d, n) => Array.from({ length: n }, (e, i) => a + i * d).join(', ');
  // console.log(arithmeticSequenceElements(1, 2, 5));
  // console.log(arithmeticSequenceElements(1, -3, 10));
}
{ /** 8 kyu  Evil or Odious 
  The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20
The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19
You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.  */;

  // const evil = n => n.toString(2).split('').filter(e => e === '1').length % 2 ? "It's Odious!" : "It's Evil!";
  // const evil = n => n.toString(2).split('1').length % 2 ? "It's Evil!" : "It's Odious!";
  // const evil = n => n.toString(2).match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!";
  const evil = n => n.toString(2).replace(/0/g, '').length % 2 ? "It's Odious!" : "It's Evil!";

  // console.log(evil(33));
}
{ /**7 kyu  Find min and max 
  Implement a function that returns the minimal and the maximal value of a list (in this order).     */

  // const getMinMax = arr => {
  //   const sorted = [...arr].sort((a, b) => a - b);
  //   return [sorted[0], sorted[arr.length - 1]];
  // };
  const getMinMax = arr => [Math.min(...arr), Math.max(...arr)];
  // console.log(getMinMax([2, 1]));
}
{ /** 7 kyu  Find the lucky numbers 
  Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
For example,
ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Don't worry about bad input, you will always receive a finite list of integers.  */

  // const filterLucky = x => [...x].filter(e => /7/.test(e));
  const filterLucky = x => [...x].filter(e => [...e + ''].some(el => el === '7'));
  // console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
}
{ /** 7 kyu
  All Star Code Challenge #22 
  Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.
Any remaining seconds left over are ignored.
Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"
For example:
3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"  */

  // const toTime = seconds => `${Math.trunc(seconds / 3600)} hour(s) and ${Math.trunc(seconds % 3600 / 60)} minute(s)`;
  const toTime = seconds => `${seconds / 3600 ^ 0} hour(s) and ${seconds % 3600 / 60 ^ 0} minute(s)`;
  // console.log(toTime(3700));
}
{ /** 8 kyu  Find the Integral 
  Create a function that finds the integral of the expression passed.
In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.
For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).
Notes:
The output should be a string.
The coefficient and exponent is always a positive integer.
Examples
 3, 2  -->  "1x^3"
12, 5  -->  "2x^6"
20, 1  -->  "10x^2"
40, 3  -->  "10x^4"
90, 2  -->  "30x^3"       */

  // const integrate = (coefficient, exponent) => [coefficient / (exponent += 1), 'x^', exponent].join('');
  // const integrate = (coefficient, exponent) => `${coefficient / (exponent += 1)}x^${exponent}`;
  // const integrate = (coefficient, exponent) => coefficient / (exponent += 1) + 'x^' + exponent;
  const integrate = (coefficient, exponent) => coefficient / ++exponent + 'x^' + exponent;
  // console.log(integrate(12, 5));
}
{/** 8 kyuUEFA EURO 2016
  Finish the uefaEuro2016() function so it return string just like in the examples below:
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw." */

  // const uefaEuro2016 = (teams, scores) => scores[0] === scores[1] ? `At match ${teams.join(' - ')}, teams played draw.`
  //   : `At match ${teams.join(' - ')}, ${teams[scores.indexOf(Math.max(...scores))]} won!`;

  // const uefaEuro2016 = (teams, scores) => `At match ${teams.join(' - ')}, ` + (scores[0] === scores[1] ? 'teams played draw.'
  //   : `${teams[scores.indexOf(Math.max(...scores))]} won!`);

  const uefaEuro2016 = (teams, scores) => `At match ${teams.join(' - ')}, ` + (scores[0] === scores[1] ? 'teams played draw.'
    : `${teams[scores[0] > scores[1] ? 0 : 1]} won!`);

  // console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));
}
{ /** 8 kyu  Calculate Price Excluding VAT 
  Write a function that calculates the original product price, without VAT.
Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
Thus, if your function receives 230.00 as input, it should return 200.00
Notes:
VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1     */

  function excludingVatPrice(price) {
    return price !== null ? +(price / 1.15).toFixed(2) : -1;
  }
  // console.log(excludingVatPrice(0));
}
{
  /**7 kyu  Check three and two  
   * Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.
Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"   */

  function checkThreeAndTwo(array) {
    if (new Set(array).size === 2) {
      const res = array.reduce((res, e) => e === array[0] ? res + 1 : res, 0);
      return res === 2 || res === 3;
    }
    return false;
  }
  // console.log(checkThreeAndTwo(["a", "c", "a", "c", "c"]));
}
{
  /**7 kyu  Sort arrays - 1 
   Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.  */

  const sortme = names => names.sort();
  // console.log(sortme(['one', 'two', 'three']));
}

/* 7 kyu  Say hello! 
Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
Example:
greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null           */

const greet = name => name ? `hello ${name}!` : null;
// console.log(greet(""));

/*8 kyu  Playing with cubes II
Hey Codewarrior!You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!
Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!
The constructor taking no arguments should assign 0 to Cube's Side property.*/

class Cube {
  constructor(side = 0) {
    this.side = side;
  }

  getSide() {
    return Math.abs(this.side);
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

/*7 kyu   Inspiring Strings
Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.
Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"     */

const longestWord = stringOfWords => stringOfWords.split(' ').reverse()[stringOfWords.split(' ').reverse().map((e, i) => [e.length, i]).sort((a, b) => b[0] - a[0])[0][1]];

console.log(longestWord('red blue grey'));
console.log(longestWord('red white blue'));
console.log(longestWord("brings each opportunity step going"));