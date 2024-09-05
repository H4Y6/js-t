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
{
  /*7 kyu   Inspiring Strings
  Given a string of space separated words, return the longest word.
  If there are multiple longest words, return the rightmost longest word.
  Examples
  "red white blue"  =>  "white"
  "red blue gold"   =>  "gold"     */

  // const longestWord = stringOfWords => stringOfWords.split(' ').reverse()[stringOfWords.split(' ').reverse().map((e, i) => [e.length, i]).sort((a, b) => b[0] - a[0])[0][1]];
  // const longestWord = stringOfWords => stringOfWords.split(' ').sort((a, b) => a.length - b.length).slice(-1)[0];
  // const longestWord = stringOfWords => stringOfWords.split(' ').sort((a, b) => a.length - b.length).pop();
  const longestWord = stringOfWords => stringOfWords.split(' ').sort((b, a) => b.length - a.length).pop();

  // console.log(longestWord('red blue grey'));
  // console.log(longestWord('red white blue'));
  // console.log(longestWord("brings each opportunity step going"));

  /** 7 kyu  String Merge!  
   * Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
  Examples
  ("hello", "world", "l")       ==>  "held"
  ("coding", "anywhere", "n")   ==>  "codinywhere"
  ("jason", "samson", "s")      ==>  "jasamson"
  ("wonderful", "people", "e")  ==>  "wondeople"       */

  // const stringMerge = (string1, string2, letter) => string1.split(letter)[0] + string2.slice(string2.indexOf(letter));
  // const stringMerge = (str1, str2, letter) => str1.split(letter)[0] + str2.substr(str2.indexOf(letter));
  const stringMerge = (str1, str2, letter) => (str1.split(letter)[0] + letter + str2.split(letter).slice(1).join(letter));
  // const stringMerge = (str1, str2, letter) => str1.match(`[^${letter}]*`) + str2.match(`${letter}.*`);
  // console.log(stringMerge("hello", "world", "l"));

  /*7 kyu  Bingo ( Or Not )  
  For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
  Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.*/

  // const bingo = a => 'BINGO'.split('').map(e => a.map(e => String.fromCharCode(e + 64)).join('').includes(e)).every(e => e) ? 'WIN' : 'LOSE';
  const bingo = a => 'BINGO'.split('').map(e => a.includes(e.charCodeAt() - 64)).every(e => e) ? 'WIN' : 'LOSE';

  // console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));
  // console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  // console.log('A'.charCodeAt());

  /** 7 kyu  Average Scores 
   * Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
  The array will never be empty.            */

  const average = scores => Math.round(scores.reduce((res, e) => res + e, 0) / scores.length);
  // console.log(average([49, 3, 5, 300, 7]));
}
{
  /** 7 kyu  ToLeetSpeak
   * Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.
  More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet
  Consider only uppercase letters (no lowercase letters, no numbers) and spaces.
  For example:
  toLeetSpeak("LEET") returns "1337"
  In this kata we use a simple LeetSpeak dialect. Use this alphabet:
  
  {
    A : '@',    B : '8',    C : '(',    D : 'D',    E : '3',    F : 'F',    G : '6',    H : '#',    I : '!',    J : 'J',    K : 'K',    L : '1',    M : 'M',  N : 'N',   O : '0',    P : 'P',    Q : 'Q',    R : 'R',    S : '$',    T : '7',    U : 'U',    V : 'V',    W : 'W',    X : 'X',    Y : 'Y',    Z : '2'  }               */

  function toLeetSpeak(str) {
    const letters = {
      A: '@', B: '8', C: '(', D: 'D', E: '3', F: 'F', G: '6', H: '#', I: '!', J: 'J', K: 'K', L: '1', M: 'M', N: 'N', O: '0', P: 'P', Q: 'Q', R: 'R', S: '$', T: '7', U: 'U', V: 'V', W: 'W', X: 'X', Y: 'Y', Z: '2', ' ': ' '
    };
    // return [...str].map(e => letters[e]).join('');

    /** remove letters` last item: (' ') */
    return [...str].map(e => letters[e] || e).join('');
  }
  // console.log(toLeetSpeak('HELLO WORLD'));
}
{
  /** 7 kyu  Clean up after your dog
  You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
  Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
  You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
  You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
  If you do, return 'Clean', else return 'Cr@p'.
  Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
  For example:
  x=
  [[_,_,_,_,_,_]
  [_,_,_,_,@,_]
  [@,_,_,_,_,_]]
  bags = 2, cap = 2
  return --> 'Clean'         */

  function crap(x, bags, cap) {
    if (x.flat().includes('D')) return 'Dog!!';
    return x.flat().reduce((res, e) =>
      e === '@' ? res - 1 : res, bags * cap) < 0 ? 'Cr@p' : 'Clean';
  }
  // console.log(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 1, 1));
  // console.log(crap([['_', '_', '_', 'D'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2));

  /** 6 kyu  Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced? 
   * Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?
  If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
  Examples
  "!!", "??"     -->  "Right"
  "!??", "?!!"   -->  "Left"
  "!?!!", "?!?"  -->  "Left"
  "!!???!????", "??!!?!!!!!!!"  -->  "Balance"      */

  function balance(left, right) {
    const diff = [...left].reduce((res, e) => res + (e === '!' ? 2 : 3), 0) - [...right].reduce((res, e) => res + (e === '!' ? 2 : 3), 0);
    return diff > 0 ? 'Left' : diff < 0 ? 'Right' : 'Balance';
  }
  // console.log(balance("!!???!????", "??!!?!!!!!!!"));

  /** 7 kyu  Letterbox Paint-Squad 
   * You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.
  
  Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...
  
  But at the end of the day you realise not everybody did the same amount of work.
  
  To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.
  
  Kata Task
  Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.
  
  Example
  For start = 125, and end = 132
  
  The letterboxes are
  
  125 = 1, 2, 5
  126 = 1, 2, 6
  127 = 1, 2, 7
  128 = 1, 2, 8
  129 = 1, 2, 9
  130 = 1, 3, 0
  131 = 1, 3, 1
  132 = 1, 3, 2
  The digit frequencies are:
  
  0 is painted 1 time
  1 is painted 9 times
  2 is painted 6 times
  etc...
  and so the method would return [1,9,6,3,0,1,1,1,1,1]
  
  Notes
  0 < start <= end      */

  // const paintLetterboxes = (start, end) => {
  //   let digits = '';
  //   for (let i = start; i <= end; i++) {
  //     digits += i;
  //   }
  //   return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => 0 + [...digits].filter(el => +el === e).length);
  // };

  const paintLetterboxes = (start, end) => Array.from({ length: 10 }, (_, i) => i).map((e) =>
    0 + [...Array.from({ length: end - start + 1 }, (_, i) => start + i + '').reduce((res, e) => res + e, '')].filter(el => +el === e).length);
  // console.log(paintLetterboxes(125, 132));

  /** 7 kyu  Looking for a benefactor
  The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. The association is funded through financial donations from generous benefactors. John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] He wants to know how much the next benefactor should give to the association so that the average of the first n + 1 donations should reach an average of 30. After doing the math he found 149. He thinks that he could have made a mistake.
  
  if dons = [14, 30, 5, 7, 9, 11, 15] then new_avg(dons, 30) --> 149
  
  Could you help him?
  
  Task
  The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
  
  Should the last donation be a non positive number (<= 0) John wants us:
  
  to return:
  
  Nothing in Haskell, Elm
  None in F#, Ocaml, Rust, Scala
  -1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
  or to throw an error (some examples for such a case):
  
  IllegalArgumentException() in Clojure, Java, Kotlin
  ArgumentException() in C#
  echo ERROR in Shell
  argument-error in Racket
  std::invalid_argument in C++
  ValueError in Python
  So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.
  
  Notes:
  all donations and navg are numbers (integers or floats), arr can be empty.
  See examples below and "Sample Tests" to see which return is to be done.
  new_avg([14, 30, 5, 7, 9, 11, 15], 92) should return 645
  new_avg([14, 30, 5, 7, 9, 11, 15], 2) 
  should raise an error (ValueError or invalid_argument or argument-error or DomainError or ... ) 
  or return `-1` or ERROR or Nothing or None depending on the language. */

  function newAvg(arr, newavg) {
    const asdding = newavg * (arr.length + 1) - arr.reduce((sum, e) => sum + e, 0);
    if (asdding < 0) throw new Error("Expected New Average is too low");
    return Math.ceil(asdding);
  }
  // console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 2));

  /** 7 kyu  Running out of space
  Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
  For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'] */

  // function spacey(array) {
  //   let res = '';
  //   return array.map((e) => res += e);
  // }

  // const spacey = (array, res = '') => array.map((e) => res += e);
  // const spacey = array => array.map((e, i) => '' + array.slice(0, i + 1).join(''));
  const spacey = array => array.map((e, i) => array.slice(0, i + 1).join(''));
  // console.log(spacey(['kevin', 'has', 'no', 'space']));

  /** 6 kyu  Array Deep Count
  You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
  Examples
  []                   -->  0
  [1, 2, 3]            -->  3
  ["x", "y", ["z"]]    -->  4
  [1, 2, [3, 4, [5]]]  -->  7
  The input will always be an array. */

  // function deepCount(a) {
  //   let count = 0;
  //   while (a.some(Array.isArray)) {
  //     count += a.filter(e => Array.isArray(e)).length;
  //     a = a.flat();
  //   }
  //   return count + a.length;
  // }

  // const deepCount = a => a.reduce((count, e) => count + (Array.isArray(e) ? deepCount(e) : 0), a.length);
  const deepCount = a => JSON.stringify(a).replace(/[^[,]|\[]/g, '').length;

  // console.log(deepCount([1, 2, [3, 4, [5]]]));
  // console.log(deepCount(["x", "y", ["z"]]));
  // console.log(deepCount([]));
  // console.log(deepCount([26, [[[[23, 9, 0]], 11, [[19, [[]], [[]]]]]], 4]));
}

{/** 7 kyu  By 3, or not by 3? That is the question . . .
A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three, then the original number is divisible by three as well.

Given a series of digits as a string, determine if the number represented by the string is divisible by three.

Example:

"123"      -> true
"8409"     -> true
"100853"   -> false
"33333333" -> true
"7"        -> false
Try to avoid using the % (modulo) operator. */

  // function divisibleByThree(str) {
  //   const sum = [...str].reduce((sum, e) => sum + +e, 0) / 3;
  //   return sum === parseInt(sum);
  // }
  const divisibleByThree = str => Number.isInteger([...str].reduce((sum, e) => sum + +e, 0) / 3);
  // console.log(divisibleByThree('192541'));
}

{ /** 7 kyu    Flatten 
  Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]    */

  // const flatten = array => array.flat();
  const flatten = array => array.flatMap(e => e);
  // TODO: Program me
  // console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]));
}
{ /** 7 kyu  Sum of all arguments 
  Write a function that finds the sum of all its arguments.
eg:
sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15*/

  // const sum = (...args) => {
  //   let res = 0;
  //   for (let arg of [...args]) {
  //     res += arg;
  //   }
  //   return res;
  // };

  // const sum = function () {
  //   let res = 0;
  //   for (let i = 0; i < arguments.length; i++) {
  //     res += arguments[i];
  //   }
  //   return res;
  // };

  const sum = function () {
    return [...arguments].reduce((res, e) => res + e);
  };
  // console.log(sum(5, 7, 9));
}
{ /** 7 kyu  Vowel one
  Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
All non-vowels including non alpha characters (spaces,commas etc.) should be included.
Examples:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100" */

  function vowelOne(s) {
    // return [...s].map(e => 'aeiou'.includes(e.toLowerCase()) ? 1 : 0).join('');
    // return s.replace(/[^aeiou]/gi, '0').replace(/[^0]/g, '1');
    // return s.replace(/[^aeiou]/gi, '0').replace(/[aeiou]/gi, '1');
    return [...s].map(e => /[aeiou]/i.test(e) ? 1 : 0).join('');
  }
  // console.log(vowelOne('vowelOne'));
}
{/** 7 kyu  Initialize my name
  Some people just have a first name; some people have first and last names and some people have first, middle and last names.
You task is to initialize the middle names (if there is any).
Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'   */

  // function initializeNames(name) {
  //   name = name.split(' ');
  //   return name.length >= 2 ? [name[0], ...name.slice(1, -1).map(e => e[0] + '.'), ...name.slice(-1)].join(' ') : name[0];
  // }

  function initializeNames(name) {
    return name.split(' ').map((e, i, ar) => i === 0 || i === ar.length - 1 ? e : e[0] + '.').join(' ');
  }

  // function initializeNames(name) {
  //   return name.replace(/ (\w)\w*(?= )/g, ' $1.');
  // }

  // function initializeNames(name) {
  //   return name.replace(/ (\w)\w*(?= )/g, (_, a) => ` ${a}.`);
  // }
  // console.log(initializeNames('Alice Betty Catherine Davis'));
}
{ /** 8 kyu  Is your period late?
  In this kata, we will make a function to test whether a period is late.
    Our function will take three parameters:
    last - The Date object with the date of the last period
    today - The Date object with the date of the check
    cycleLength - Integer representing the length of the cycle in days
    Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false. */

  function periodIsLate(last, today, cycleLength) {
    return (today - last) / 36 / 10 ** 5 / 24 > cycleLength;
  }
  // console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));
}
{ /** 7 kyu  Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
  Count the number of exclamation marks and question marks, return the product.
    Examples
  ""          --->   0
  "!"         --->   0
  "!ab? ?"    --->   2
  "!!"        --->   0
  "!??"       --->   2
  "!???"      --->   3
  "!!!??"     --->   6
  "!!!???"    --->   9
  "!???!!"    --->   9
  "!????!!!?" --->  20 */

  // const product = string => [...string].filter(e => e === '!').length * [...string].filter(e => e === '?').length;
  // const product = string => (string.split('!').length - 1) * (string.split('?').length - 1);
  const product = string => (string.match(/!/g) || []).length * (string.match(/\?/g) || []).length;
  // console.log(product('!ab? ?'));
}
{ /** 7 kyu  Is n divisible by (...)?
  Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)
    Example:
    (6,1,3)--> true because 6 is divisible by 1 and 3
  (12,2)--> true because 12 is divisible by 2
  (100,5,4,10,25,20)--> true
  (12,7)--> false because 12 is not divisible by 7 */

  // function isDivisible() {
  //   return [...arguments].map((e, i, ar) => ar[0] % e).every(e => !e);
  // }

  // const isDivisible = (n, ...args) => args.every(e => n % e === 0);
  // const isDivisible = (n, ...args) => !args.some(e => n % e);
  const isDivisible = (n, ...args) => !args.some(e => n % e);
  // console.log(isDivisible(8, 4, 2));
}
{
  /** 6 kyu  Prefill an Array
   *  Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.
You have to validate input:
v can be anything (primitive or otherwise)
if v is ommited, fill the array with undefined
if n is 0, return an empty array
if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
Code Examples
    prefill(3,1) --> [1,1,1]  
    prefill(2,"abc") --> ['abc','abc']
        prefill("1", 1) --> [1]
        prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]    
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"    */

  function prefill(n, v) {
    // if (!Number.isInteger(+n) || isNaN(n) || n === Infinity || n < 0 || typeof n === 'boolean') { throw new TypeError(`${n} is invalid`); }
    if (+n !== Math.abs(parseInt(n))) { throw new TypeError(`${n} is invalid`); }
    return Array.from({ length: n }, e => v);
  }
  // console.log(prefill('1', 'er'));
}
{/** 8 kyu  NBA full 48 minutes average 
  An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
Examples:
pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.  */

  // function pointsPer48(ppg, mpg) {
  //   return !ppg ? 0 : Math.round(ppg / mpg * 480) / 10;
  // }

  const pointsPer48 = (ppg, mpg) => ppg ? Number((ppg / mpg * 48).toFixed(1)) : 0;
  // console.log(pointsPer48(12, 20));
  // console.log(pointsPer48(11.1, 32));
}
{/** 7 kyu  Drying Potatoes 
  All we eat is water and dry matter.

Let us begin with an example:

John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

At the output the water content is only 98%.

What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

Can you help him?

Task
Write function potatoes with

int parameter p0 - initial percent of water-
int parameter w0 - initial weight -
int parameter p1 - final percent of water -
potatoesshould return the final weight coming out of the oven w1 truncated as an int.

Example:
potatoes(99, 100, 98) --> 50  */

  // function potatoes(p0, w0, p1) {
  //   return parseInt(w0 * (100 - p0) / (100 - p1));
  // }

  const potatoes = (p0, w0, p1) => w0 * (100 - p0) / (100 - p1) ^ 0;

  // console.log(potatoes(99, 100, 98));
  // console.log(potatoes(82, 127, 80));
}
{ /** 7 kyu  Nice Array 
  A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.
examples:
[2, 10, 9, 3] is a nice array because
 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1
[4, 2, 3] is a nice array because
4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)
[4, 2, 1] is a not a nice array because
for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.*/

  // const isNice = arr => arr.length < 2 ? false : arr.map((e, i) => arr.find(el => Math.abs(e - el) === 1)).every(e => e !== undefined);
  // const isNice = arr => arr.length ? arr.map((e, i) => arr.find(el => Math.abs(e - el) === 1)).every(e => e !== undefined) : false;
  // const isNice = arr => arr.length ? arr.map(e => arr.includes(e + 1) || arr.includes(e - 1)).every(e => e) : false;
  const isNice = arr => arr.length ? arr.every(e => arr.includes(e + 1) || arr.includes(e - 1)) : false;

  // console.log(isNice([2, 10, 9, 3]));
  // console.log(isNice([]));
}
{ /** 7 kyu  Split The Bill
  You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!
The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.
Your function should return an object/dict with the same names, showing how much money the members should pay or receive.
Further points:
The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
If value is a decimal, round to two decimal places.
Translations and comments (and upvotes!) welcome.
Example
3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.
var group = {
    A: 20, 
    B: 15, 
    C: 10
}
splitTheBill(group) // returns {A: 5, B: 0, C: -5} */

  // const splitTheBill = x => {
  //   const obj = { ...x };
  //   let sumDiv = Object.values(x).reduce((sum, e) => sum + e, 0) / Object.keys(x).length;
  //   Object.entries(x).map(e => obj[e[0]] = !(e[1] - sumDiv) % 1 ? e[1] - sumDiv : +(e[1] - sumDiv).toFixed(2));
  //   return obj;
  // };

  // const splitTheBill = x => {
  //   let sumDiv = Object.values(x).reduce((sum, e) => sum + e, 0) / Object.keys(x).length;
  //   // return Object.keys(x).reduce((res, e) => (res[e] = +(x[e] - sumDiv).toFixed(2), res), {});
  //   return Object.keys(x).reduce((obj, key) => (obj[key] = +(x[key] - sumDiv).toFixed(2), obj), {});
  // };

  // const splitTheBill = (x, sumDiv = Object.values(x).reduce((res, e) => res + e, 0) / Object.keys(x).length) =>
  //   Object.keys(x).reduce((obj, key) => (obj[key] = +(x[key] - sumDiv).toFixed(2), obj), {});

  const splitTheBill = x => {
    const entries = Object.entries(x);
    const sumDiv = entries.reduce((sum, [k, v]) => sum + v, 0) / entries.length;
    return entries.reduce((obj, [key, value]) => (obj = (obj[key] = +(value - sumDiv).toFixed(2), obj)), {});
  };
  // console.log(splitTheBill({ A: 20, B: 14, C: 10 }));
}
{ /** 7 kyu  Sum a list but ignore any duplicates
  Please write a function that sums a list, but ignores any duplicated items in the list.
For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.          */

  // const sumNoDuplicates = numList => numList.reduce((sum, e) => sum + (numList.filter(el => e === el).length > 1 ? 0 : e), 0);
  // const sumNoDuplicates = numList => numList.reduce((sum, e) => sum + (numList.indexOf(e) === numList.lastIndexOf(e) ? e : 0), 0);
  const sumNoDuplicates = numList => {
    const arr = [...numList];
    const set = [...new Set(arr)];
    set.map(e => arr.splice(arr.indexOf(e), 1));
    arr.map(e => { if (set.indexOf(e) >= 0) set.splice(set.indexOf(e), 1); });
    return set.reduce((sum, e) => sum + e, 0);
  };
  // console.log(sumNoDuplicates([3, 4, 4, 6, 6, 3, 2, 5]));
}

{ /** 5 kyu  Math Issues
  Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
Here is a list of functions, we need:
Math.round()
Math.ceil()
Math.floor()     */

  Math.round = function (number) {
    return number % 1 < .5 ? number ^ 0 : (number ^ 0) + 1;
  };

  Math.ceil = function (number) {
    return number === parseInt(number) ? number : (number ^ 0) + 1;
  };

  Math.floor = function (number) {
    return number ^ 0;
  };

  // console.log(Math.round(4.18));
  // console.log(Math.ceil(7.8));
  // console.log(Math.floor(6.8));
}
{ /** 7 kyu  The Office II - Boredom Score
  Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

The Office I - Outed   */

  const score = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  };

  const boredom = (staff, scoreRes = Object.keys(staff).reduce((sum, e) => sum + score[staff[e]], 0)) =>
    scoreRes <= 80 ? 'kill me now' : scoreRes >= 100 ? 'party time!!' : 'i can handle this';
  // console.log(boredom({
  // tim: 'change', jim: 'accounts',
  // randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  // laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  // mr: 'finance'
  // tim: 'IS', jim: 'finance',
  // randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  // katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  // alex: 'regulation', john: 'accounts', mr: 'canteen'
  //   tim: 'accounts', jim: 'accounts',
  //   randy: 'pissing about', sandy: 'finance', andy: 'change',
  //   katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  //   john: 'retail', mr: 'pissing about'
  // }));
}
{ /** 7 kyu  Drone Fly-By 
  The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.  */

  // const flyBy = (lamps, drone) => drone.length > 1 ? lamps.replace('x', 'o'.repeat(drone.length))
  //   .slice(0, - drone.length + 1) : lamps.replace('x', 'o'.repeat(drone.length));

  // const flyBy = (lamps, drone) => lamps.split('').fill(`o`, 0, drone.length).join(``);

  // const flyBy = (lamps, drone) => lamps.replace(/x/g, ((_, i) => i < drone.length ? 'o' : 'x'));

  const flyBy = (lamps, drone) => ('o'.repeat(drone.length) + lamps).slice(0, lamps.length);

  // console.log(flyBy('xxxxxx', '====T'));
  // console.log(flyBy('xxx', 'T'));
}
{/** 7 kyu  Nth Root of a Number
  Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x
Examples
x = 4     n = 2  -->  2    # the square root of 4 is 2     2^2 = 4
x = 8     n = 3  -->  2    # the cube root of 8 is 2       2^3 = 8
x = 256   n = 4  -->  4    # the 4th root of 256 is 4      4^4 = 256
x = 9     n = 2  -->  3    # the square root of 9 is 3     3^2 = 9
x = 6.25  n = 2  -->  2.5  #                             2.5^2 = 6.25
Notes:
4 <= x < 10 ^ 20
4 <= n <= 50           */

  const root = (x, n) => x ** (1 / n);
  // console.log(root(6.25, 2));
}
{ /** 7 kyu  makeBackronym  
  back·ro·nym
An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.
"Biodiversity Serving Our Nation", or BISON
(from https://en.oxforddictionaries.com/definition/backronym)
Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:
dict["P"] == "perfect"
Examples
"dgm" ==> "disturbing gregarious mustache"
"lkj" ==> "literal klingon joke"    */

  const dict = { D: 'disturbing', G: 'gregarious', M: 'mustache', A: "..." };

  const makeBackronym = function (string) {
    return [...string].map(e => dict[e.toUpperCase()]).join(' ');
  };
  // console.log(makeBackronym('dgm'));
}
{
  // const calculate = str => str.split('plus').map(e => e.includes('minus') ? e.split('minus').reduce((diff, el, i, arr) =>
  //   diff + -Number(arr[i + 1] ?? 0), 0) + +e.split('minus')[0] : e).reduce((sum, e) => sum + +e, 0).toString();
  // const calculate = str => eval(str.replaceAll('plus', '+').replaceAll('minus', '-')).toString();
  // const calculate = str => eval(str.split('plus').join('+').split('minus').join('-')).toString();
  // const calculate = str => str.split('plus').join(' ').split('minus').join(' -').split(' ').reduce((sum, e) => sum + +e, 0) + '';
  // const calculate = str => str.replaceAll('plus', ' ').replaceAll('minus', ' -').split(' ').reduce((sum, e) => sum + +e, 0) + '';
  const calculate = str => eval(str.replace(/plus/g, '+').replace(/minus/g, ' -')) + '';
  // console.log(calculate("1plus2plus3plus4"));
  // console.log(calculate("1plus2plus3minus4"));
  // console.log(calculate("659minus511minus259"));
}
{ /** 7 kyu  All Star Code Challenge #3 
  Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
Example (Input --> Output)
"drake" --> "drk"
"aeiou" --> ""
remove_vowels("drake") // => "drk"
remove_vowels("aeiou") // => "" */

  const removeVowels = str => str.replace(/[aeiou]/g, '');
  // console.log(removeVowels("aeifdghou"));
}
{ /** 7 kyu  Dictionary from two lists 
  There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.
Example 1:
keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
Example 2:
keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}  */

  // function createDict(keys, values) {
  //   let obj = {};
  //   for (let i = 0; i < keys.length; i++) {
  //     const key = keys[i];
  //     const v = values[i];
  //     obj = { ...obj, [key]: v ?? null };
  //   }
  //   return obj;
  // }

  // function createDict(keys, values) {
  //   let obj = {};
  //   for (let i = 0; i < keys.length; i++) {
  //     obj[keys[i]] = values[i] ?? null;
  //   }
  //   return obj;
  // }

  const createDict = (keys, values) => keys.reduce((obj, key, i) => (obj[key] = values[i] ?? null, obj), {});
  // console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]));
}
{ /** 7 kyu  Find Duplicates
  Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.
Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
Examples
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []         */

  // const duplicates = arr => {
  //   const dupArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) dupArr.push(arr[i]);
  //   }
  //   const setArr = [...new Set(dupArr)];
  //   setArr.map(e => dupArr.filter(el => el === e)).map(e => {
  //     if (e.length > 2) {
  //       for (let i = 2; i < e.length; i++) {
  //         dupArr.splice(dupArr.lastIndexOf(e[0]), 1);
  //       }
  //     }
  //   });
  //   return setArr.map(e => [dupArr.lastIndexOf(e), e]).sort((a, b) => a[0] - b[0]).map(e => e[1]);
  // };
  // const duplicates = arr => {
  //   return [...new Set(arr.filter((e, i) => i !== arr.indexOf(e)))];
  // };

  const duplicates = arr => [...new Set(arr.filter((e, i) => i !== arr.indexOf(e)))];

  // console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, 3, "5"]));
  // console.log(duplicates([-10, -5, -1, -5, -10, -10, "-1", -1, 1, -10, "-4"]));
}
{ /** 7 kyu  Count consonants
  Complete the function that takes a string of English-language text and returns the number of consonants in the string.
    Consonants are all letters used to write English excluding the vowels a, e, i, o, u. */
  // const consonantCount = str => [...str].map(e => /[A-z]/g.test(e) ? e : e = '').map(e => /[aeiou]/gi.test(e) ? e = '' : e).map(e => e === ' ' || e === '_' || e === '^' ? '' : e).join('').length;
  // const consonantCount = str => str.replace(/\W|\d|[_aeiou]/gi, "").length;
  // const consonantCount = str => str.replace(/[^A-z]|[_aeiou^]/gi, "").length;
  const consonantCount = str => str.replace(/[^A-Za-z]|[aeiou]/gi, "").length;
  // console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'));
  // console.log(consonantCount('aAa'));
  // console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'));
}
{ /** 7 kyu  L2: Triple X
  Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
    "abraxxxas" → true
  "xoxotrololololololoxxx" → false
  "softX kitty, warm kitty, xxxxx" → true
  "softx kitty, warm kitty, xxxxx" → false
  Note :
    capital X's do not count as an occurrence of "x".
  if there are no "x"'s then return false                 */

  // const tripleX = str => /xxx/.test(str) && str.indexOf('x') === str.indexOf('xxx');
  const tripleX = str => str.indexOf('x') >= 0 && str.indexOf('x') === str.indexOf('xxx');
  // const tripleX = str => /^[^x]*xxx/.test(str);

  // console.log(tripleX('xoxotrololololololoxxx'));
  // console.log(tripleX('kittykittywarmkitty'));
  // console.log(tripleX('kitxxxtyXXsoft'));
}
{ /** 8 kyu  Exclusive "or" (xor) Logical Operator 
  In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:
false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.   */

  function xor(a, b) {
    return a !== b;
  }
}