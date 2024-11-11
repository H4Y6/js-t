{
  /** 8 kyu Merging sorted integer arrays (without duplicates)
Write a function that merges two sorted arrays into a single one. 
The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate. */

  const mergeArrays = (a, b) =>
    [...new Set([...a, ...b])].sort((a, b) => a - b);

  // console.log(mergeArrays([2, 4, 8], [2, 4, 6]));
}
{
  /** 7 kyu shorter concat [reverse longer] 
  Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b */

  // const shorterReverseLonger = (a, b) => a.length < b.length ? [...a].concat([...b].reverse(), [...a]).join('') : [...b].concat([...a].reverse(), [...b]).join('');
  // const shorterReverseLonger = (a, b) => a.length < b.length ? a.concat([...b].reverse().join(''), a) : b.concat([...a].reverse().join(''), b);
  // const shorterReverseLonger = (a, b) => a.length < b.length ? a + [...b].reverse().join('') + a : b + [...a].reverse().join('') + b;
  const shorterReverseLonger = (a, b) => {
    if (a.length < b.length) [a, b] = [b, a];
    return b + [...a].reverse().join('') + b;
  };
  // console.log(shorterReverseLonger("hello", "bau"));
}
{
  /** 8 kyu  Wilson primes
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
  const getFactorial = n => {
    n = BigInt(n);
    return n < 2n ? 1n : n * getFactorial(n - 1n);
  };
  const amIWilson = p => {
    p = BigInt(p);
    if (
      isPrime(p) &&
      [5, 13, 563].includes(p) &&
      !((((getFactorial(p - 1n) + 1n) / p) * p) % 1n)
    )
      return true;
    return false;
  };
  // console.log(amIWilson(467));
  // console.log(getFactorial(467));
  // console.log(isPrime(467));
}
{
  /**7 kyu  Going to the cinema
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
  }
  // console.log(movie(100, 10, 0.95));
}
{
  /** 8 kyu  ASCII Total
  You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.
Examples:
uniTotal("a") == 97
uniTotal("aaa") == 291*/

  function uniTotal(string) {
    return string.split('').reduce((total, e) => total + e.charCodeAt(), 0);
  }
  // console.log(uniTotal('aaaa'));
}
{
  /**7 kyuChanging letters
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
{
  /** 8 kyu USD => CNY 
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
{
  /** 7 kyu Longest vowel chain
  The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou. */

  // const solve = s => Math.max(...s.split(/[bcdfghjklmnpqrstvwxyz]+/g).map(e => e.length));
  // const solve = s => s.split(/[^aeiou]/).reduce((max, e) => max = e.length > max ? e.length : max, 0);
  // const solve = s => s.match(/[aeiou]+/g).reduce((max, e) => max = e.length > max ? e.length : max, 0);
  const solve = s => Math.max(...s.match(/[aeiou]+/g).map(e => e.length));
  // console.log(solve('u'));
  // console.log(solve('chrononhotonthuooaos'));
}
{
  /**5 kyu Factorial decomposition 
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

  const factorial = n => (n < 2 ? 1 : n * factorial(n - 1));

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
{
  /** 8 kyu  Barking mad
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
  const scoobydoo = new Dog('Great Dane');
  const snoopy = new Dog('Beagle');

  // console.log(scoobydoo.bark());
}
{
  /** 7 kyu  Compare Strings by Sum of Chars
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
  const ccSum = s =>
    /\W|\d/.test(s) || !s
      ? 0
      : s.split('').reduce((sum, e) => sum + e.toUpperCase().charCodeAt(), 0);

  const compare = (s1, s2) => ccSum(s1) === ccSum(s2);

  // console.log(compare("AD", "BC"));
  // console.log(compare("AD", "DD"));
  // console.log(compare("zz1", ""));
}
{
  /** 8 kyu
For Twins: 1. Types
 Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.
Examples:
42, "number"   --> true
"42", "number" --> false   */

  const typeValidation = (variable, type) => typeof variable === type;
  // console.log(typeValidation("42", "number"));
}
{
  /**7 kyu  Elevator Distance
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
{
  /**7 kyu  Consecutive items 
  You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).
It is guaranteed that a and b are both present in arr.   */

  // const consecutive = (arr, a, b) => Math.abs(arr.indexOf(a) - arr.indexOf(b)) === 1;
  // const consecutive = (arr, a, b) => Math.abs(arr.findIndex(e => e === a) - arr.indexOf(b)) === 1;
  const consecutive = (arr, a, b) =>
    new RegExp(`${a},${b}|${b},${a}`).test(arr);
  // console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4));
}
{
  /** 7 kyu  Insert dashes
  Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
Note that the number will always be non-negative (>= 0).  */

  // function insertDash(num) {
  //   const arr = ('' + num).split('');
  //   return [...arr.slice(1).map((e, i) => arr[i] % 2 && e % 2 ? arr[i] + '-' : arr[i]), ...arr.slice(-1)].join('');
  // }
  // const insertDash = num => ('' + num).replace(/([13579])(?=[13579])/g, `$&-`);
  // const insertDash = num => ('' + num).replace(/([13579])(?=[13579])/g, `$1-`);
  const insertDash = num =>
    ('' + num).replace(/([13579]){2,}/g, e => e.split('').join('-'));
  // console.log(insertDash(454793));
}
{
  const consecutive = (arr, a, b) => RegExp(`${a},${b}|${b},${a}`).test(arr);
  // console.log(consecutive([1, 3, 5, 7], 3, 1));
}
{
  /**7 kyu  Evens and Odds 
  This kata is about converting numbers to their binary or hexadecimal representation:
If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.*/

  // const evensAndOdds = num => num % 2 ? num.toString(16) : num.toString(2);
  const evensAndOdds = num => num.toString(num % 2 ? 16 : 2);
  // console.log(evensAndOdds(62));
}
{
  /** 6 kyu  Where is my parent!?(cry)
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

  const findChildren = dancingBrigade =>
    [...dancingBrigade]
      .filter(e => e.match(/[A-Z]/))
      .sort()
      .map(e => [
        ...e,
        ...[...dancingBrigade].filter(el => el === e.toLowerCase()),
      ])
      .flat()
      .join('');
  // console.log(findChildren("uwwWUueEe"));
}
{
  /**7 kyu  Count all the sheep on farm in the heights of New Zealand
  Every Friday and Saturday night, farmer counts sheep coming back to his farm (sheep returned on Friday stay and don't leave).
Sheep return in groups both of the days -> You will be given two arrays with these numbers (one for Friday and one for Saturday night). Array entries are integers, equal zero or higher - in case a given array is empty, farmer did not count the sheep or got sick (we treat this as no sheep returned that night).
Farmer knows how many sheep he has in total (third parameter). You need to calculate the amount of sheep lost (not returned to the farm) after final sheep count on Saturday.
Example 1: Input: [1, 2], [3, 4], 15 --> Output: 5
Example 2: Input: [3, 1, 2], [4, 5], 21 --> Output: 6
Example 3: Input: [0], [4, 15], 31 --> Output: 12
Example 4: Input: [], [4], 15 --> Output: 11  */

  // const lostSheep = (friday, saturday, total) => total - friday.reduce((sum, e) => sum + e, 0) - saturday.reduce((sum, e) => sum + e, 0);
  const lostSheep = (friday, saturday, total) =>
    total - [...friday, ...saturday].reduce((sum, e) => sum + e, 0);

  // console.log(lostSheep([1, 2], [3, 4], 15));
}
{
  /** 7 kyu  Formatting decimal places #1
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
{
  /** 7 kyu  Return the Missing Element
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

  const getMissingElement = superImportantArray => {
    for (let i = 0; i <= 9; i++) {
      if (!superImportantArray.includes(i)) return i;
    }
  };
  // console.log(getMissingElement([0, 5, 1, 3, 2, 8, 7, 6, 4]));
}
{
  /** 6 kyu  IPv4 to int32 
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
  const ipToInt32 = ip =>
    ip.split('.').reduce((res, e) => res * 256 + Number(e), 0);
  // console.log(ipToInt32("128.32.10.1"));

  // const binary = (128).toString(2);
  // console.log(binary);
  // console.log(parseInt('10000000001000000000101000000001', 2));
  // console.log(2 ** 31 + 2 ** 21 + 2 ** 11 + 2 ** 9 + 1);
  // 10000000.00100000.00001010.00000001;
}
{
  /** 8 kyu  Grasshopper - Order of operations
  You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.   */
  const orderOperations = () => (2 + 2) * (2 + 2) * 2;
}
{
  /** 7 kyu  Char Code Calculation 
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
  const calc = x =>
    x.replace(/./g, e => e.charCodeAt()).replace(/[^7]/g, '').length * 6;
  // console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
}
{
  /** 7 kyu  Building Strings From a Hash 
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

  const solution = pairs =>
    Object.keys(pairs)
      .map(e => `${e} = ${pairs[e]}`)
      .join(',');
  // console.log(solution({ 'a': 0, 'b': 2 }));
}
{
  /** 7 kyu   SevenAte9
  Write a function that removes every lone 9 that is inbetween 7s.
"79712312" --> "7712312"
"79797"    --> "777"*/

  const sevenAte9 = str => str.replaceAll('797', 77).replaceAll('797', 77);
  // console.log(sevenAte9('165561786121789797'));
}
{
  /** 6 kyu  Prize Draw 
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

  const rank = (st, we, n) =>
    (arr =>
      !st
        ? `No participants`
        : n > arr.length
        ? `Not enough participants`
        : arr[n - 1][0])(
      st
        .split(`,`)
        .map((e, i) => [
          e,
          [...e.toUpperCase()].reduce(
            (res, el) => res + el.charCodeAt() - 64,
            e.length,
          ) * we[i],
        ])
        .sort()
        .sort((a, b) => b[1] - a[1]),
    );

  // console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4));
  // console.log(rank("Addison,Ben,Sofia,Michael,Andrew,William,Willaim", [4, 2, 1, 4, 3, 2, 2], 4));
  // console.log(rank("Lagon,Lily", [1, 5], 2));

  /* curried function  **/
  const multiply = a => b => c => {
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
{
  /** 8 kyu  Online RPG: player to qualifying stage? 
  Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.
Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.
Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.
In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".
Otherwise return, False/false (according to the language in use).       */

  const playerRankUp = points =>
    points < 100
      ? false
      : 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.';
  // console.log(playerRankUp(144));
}
{
  /** 8 kyu  Finish Guess the Number Game   
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
      if (n === this.number) {
        return true;
      } else {
        this.lives -= 1;
        return false;
      }
    }
  }
}
{
  /** 7 kyu  Band name generator
  My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:
"dolphin" -> "The Dolphin"
However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:
"alaska" -> "Alaskalaska"
Complete the function that takes a noun as a string, and returns her preferred band name written as a string.*/

  function bandNameGenerator(str) {
    // return str[0] === str[str.length - 1] ? str.replace(str[0], str[0].toUpperCase()) + str.slice(1) : 'The ' + str.replace(str[0], str[0].toUpperCase());
    // return str[0] === str[str.length - 1] ? str[0].toUpperCase() + str.slice(1).repeat(2) : 'The ' + str[0].toUpperCase() + str.slice(1);
    return str.endsWith(str[0])
      ? str[0].toUpperCase() + str.slice(1).repeat(2)
      : 'The ' + str[0].toUpperCase() + str.slice(1);
  }
  // console.log(bandNameGenerator('tart'));
  // console.log(bandNameGenerator('knife'));
}
{
  /** 7 kyu  How many arguments
  Write a function that returns the number of arguments it received.
args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2   */

  // const args_count = (...args) => args.reduce((count, e) => count + 1, 0);
  // const args_count = (...args) => args.length;
  function args_count() {
    return arguments.length;
  }
  // console.log(args_count('a', 'b', 'c'));
}
{
  /** 7 kyu  Valid Spacing 
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
{
  /** 8 kyu  Grader
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
    return score < 0.6 || score > 1
      ? 'F'
      : score < 0.7
      ? 'D'
      : score < 0.8
      ? 'C'
      : score < 0.9
      ? 'B'
      : 'A';
  }
}
{
  /** 7 kyu  Arithmetic progression 
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
  const arithmeticSequenceElements = (a, d, n) =>
    Array.from({ length: n }, (e, i) => a + i * d).join(', ');
  // console.log(arithmeticSequenceElements(1, 2, 5));
  // console.log(arithmeticSequenceElements(1, -3, 10));
}
{
  /** 8 kyu  Evil or Odious 
  The number n is Evil if it has an even number of 1's in its binary representation.
The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20
The number n is Odious if it has an odd number of 1's in its binary representation.
The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19
You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.  */ // const evil = n => n.toString(2).split('').filter(e => e === '1').length % 2 ? "It's Odious!" : "It's Evil!";
  // const evil = n => n.toString(2).split('1').length % 2 ? "It's Evil!" : "It's Odious!";
  // const evil = n => n.toString(2).match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!";
  const evil = n =>
    n.toString(2).replace(/0/g, '').length % 2 ? "It's Odious!" : "It's Evil!";

  // console.log(evil(33));
}
{
  /**7 kyu  Find min and max 
  Implement a function that returns the minimal and the maximal value of a list (in this order).     */

  // const getMinMax = arr => {
  //   const sorted = [...arr].sort((a, b) => a - b);
  //   return [sorted[0], sorted[arr.length - 1]];
  // };
  const getMinMax = arr => [Math.min(...arr), Math.max(...arr)];
  // console.log(getMinMax([2, 1]));
}
{
  /** 7 kyu  Find the lucky numbers 
  Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.
For example,
ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Don't worry about bad input, you will always receive a finite list of integers.  */

  // const filterLucky = x => [...x].filter(e => /7/.test(e));
  const filterLucky = x =>
    [...x].filter(e => [...(e + '')].some(el => el === '7'));
  // console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
}
{
  /** 7 kyu
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
  const toTime = seconds =>
    `${(seconds / 3600) ^ 0} hour(s) and ${
      ((seconds % 3600) / 60) ^ 0
    } minute(s)`;
  // console.log(toTime(3700));
}
{
  /** 8 kyu  Find the Integral 
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
  const integrate = (coefficient, exponent) =>
    coefficient / ++exponent + 'x^' + exponent;
  // console.log(integrate(12, 5));
}
{
  /** 8 kyuUEFA EURO 2016
  Finish the uefaEuro2016() function so it return string just like in the examples below:
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw." */

  // const uefaEuro2016 = (teams, scores) => scores[0] === scores[1] ? `At match ${teams.join(' - ')}, teams played draw.`
  //   : `At match ${teams.join(' - ')}, ${teams[scores.indexOf(Math.max(...scores))]} won!`;

  // const uefaEuro2016 = (teams, scores) => `At match ${teams.join(' - ')}, ` + (scores[0] === scores[1] ? 'teams played draw.'
  //   : `${teams[scores.indexOf(Math.max(...scores))]} won!`);

  const uefaEuro2016 = (teams, scores) =>
    `At match ${teams.join(' - ')}, ` +
    (scores[0] === scores[1]
      ? 'teams played draw.'
      : `${teams[scores[0] > scores[1] ? 0 : 1]} won!`);

  // console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));
}
{
  /** 8 kyu  Calculate Price Excluding VAT 
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
      const res = array.reduce((res, e) => (e === array[0] ? res + 1 : res), 0);
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

const greet = name => (name ? `hello ${name}!` : null);
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
  const longestWord = stringOfWords =>
    stringOfWords
      .split(' ')
      .sort((b, a) => b.length - a.length)
      .pop();

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
  const stringMerge = (str1, str2, letter) =>
    str1.split(letter)[0] + letter + str2.split(letter).slice(1).join(letter);
  // const stringMerge = (str1, str2, letter) => str1.match(`[^${letter}]*`) + str2.match(`${letter}.*`);
  // console.log(stringMerge("hello", "world", "l"));

  /*7 kyu  Bingo ( Or Not )  
  For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
  Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.*/

  // const bingo = a => 'BINGO'.split('').map(e => a.map(e => String.fromCharCode(e + 64)).join('').includes(e)).every(e => e) ? 'WIN' : 'LOSE';
  const bingo = a =>
    'BINGO'
      .split('')
      .map(e => a.includes(e.charCodeAt() - 64))
      .every(e => e)
      ? 'WIN'
      : 'LOSE';

  // console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));
  // console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
  // console.log('A'.charCodeAt());

  /** 7 kyu  Average Scores 
   * Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
  The array will never be empty.            */

  const average = scores =>
    Math.round(scores.reduce((res, e) => res + e, 0) / scores.length);
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
      A: '@',
      B: '8',
      C: '(',
      D: 'D',
      E: '3',
      F: 'F',
      G: '6',
      H: '#',
      I: '!',
      J: 'J',
      K: 'K',
      L: '1',
      M: 'M',
      N: 'N',
      O: '0',
      P: 'P',
      Q: 'Q',
      R: 'R',
      S: '$',
      T: '7',
      U: 'U',
      V: 'V',
      W: 'W',
      X: 'X',
      Y: 'Y',
      Z: '2',
      ' ': ' ',
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
    return x
      .flat()
      .reduce((res, e) => (e === '@' ? res - 1 : res), bags * cap) < 0
      ? 'Cr@p'
      : 'Clean';
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
    const diff =
      [...left].reduce((res, e) => res + (e === '!' ? 2 : 3), 0) -
      [...right].reduce((res, e) => res + (e === '!' ? 2 : 3), 0);
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

  const paintLetterboxes = (start, end) =>
    Array.from({ length: 10 }, (_, i) => i).map(
      e =>
        0 +
        [
          ...Array.from(
            { length: end - start + 1 },
            (_, i) => start + i + '',
          ).reduce((res, e) => res + e, ''),
        ].filter(el => +el === e).length,
    );
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
    const asdding =
      newavg * (arr.length + 1) - arr.reduce((sum, e) => sum + e, 0);
    if (asdding < 0) throw new Error('Expected New Average is too low');
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

{
  /** 7 kyu  By 3, or not by 3? That is the question . . .
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
  const divisibleByThree = str =>
    Number.isInteger([...str].reduce((sum, e) => sum + +e, 0) / 3);
  // console.log(divisibleByThree('192541'));
}

{
  /** 7 kyu    Flatten 
  Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.
flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]    */

  // const flatten = array => array.flat();
  const flatten = array => array.flatMap(e => e);
  // TODO: Program me
  // console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]));
}
{
  /** 7 kyu  Sum of all arguments 
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
{
  /** 7 kyu  Vowel one
  Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
All non-vowels including non alpha characters (spaces,commas etc.) should be included.
Examples:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100" */

  function vowelOne(s) {
    // return [...s].map(e => 'aeiou'.includes(e.toLowerCase()) ? 1 : 0).join('');
    // return s.replace(/[^aeiou]/gi, '0').replace(/[^0]/g, '1');
    // return s.replace(/[^aeiou]/gi, '0').replace(/[aeiou]/gi, '1');
    return [...s].map(e => (/[aeiou]/i.test(e) ? 1 : 0)).join('');
  }
  // console.log(vowelOne('vowelOne'));
}
{
  /** 7 kyu  Initialize my name
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
    return name
      .split(' ')
      .map((e, i, ar) => (i === 0 || i === ar.length - 1 ? e : e[0] + '.'))
      .join(' ');
  }

  // function initializeNames(name) {
  //   return name.replace(/ (\w)\w*(?= )/g, ' $1.');
  // }

  // function initializeNames(name) {
  //   return name.replace(/ (\w)\w*(?= )/g, (_, a) => ` ${a}.`);
  // }
  // console.log(initializeNames('Alice Betty Catherine Davis'));
}
{
  /** 8 kyu  Is your period late?
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
{
  /** 7 kyu  Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product
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
  const product = string =>
    (string.match(/!/g) || []).length * (string.match(/\?/g) || []).length;
  // console.log(product('!ab? ?'));
}
{
  /** 7 kyu  Is n divisible by (...)?
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
    if (+n !== Math.abs(parseInt(n))) {
      throw new TypeError(`${n} is invalid`);
    }
    return Array.from({ length: n }, e => v);
  }
  // console.log(prefill('1', 'er'));
}
{
  /** 8 kyu  NBA full 48 minutes average 
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

  const pointsPer48 = (ppg, mpg) =>
    ppg ? Number(((ppg / mpg) * 48).toFixed(1)) : 0;
  // console.log(pointsPer48(12, 20));
  // console.log(pointsPer48(11.1, 32));
}
{
  /** 7 kyu  Drying Potatoes 
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

  const potatoes = (p0, w0, p1) => ((w0 * (100 - p0)) / (100 - p1)) ^ 0;

  // console.log(potatoes(99, 100, 98));
  // console.log(potatoes(82, 127, 80));
}
{
  /** 7 kyu  Nice Array 
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
  const isNice = arr =>
    arr.length
      ? arr.every(e => arr.includes(e + 1) || arr.includes(e - 1))
      : false;

  // console.log(isNice([2, 10, 9, 3]));
  // console.log(isNice([]));
}
{
  /** 7 kyu  Split The Bill
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
    return entries.reduce(
      (obj, [key, value]) =>
        (obj = ((obj[key] = +(value - sumDiv).toFixed(2)), obj)),
      {},
    );
  };
  // console.log(splitTheBill({ A: 20, B: 14, C: 10 }));
}
{
  /** 7 kyu  Sum a list but ignore any duplicates
  Please write a function that sums a list, but ignores any duplicated items in the list.
For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.          */

  // const sumNoDuplicates = numList => numList.reduce((sum, e) => sum + (numList.filter(el => e === el).length > 1 ? 0 : e), 0);
  // const sumNoDuplicates = numList => numList.reduce((sum, e) => sum + (numList.indexOf(e) === numList.lastIndexOf(e) ? e : 0), 0);
  const sumNoDuplicates = numList => {
    const arr = [...numList];
    const set = [...new Set(arr)];
    set.map(e => arr.splice(arr.indexOf(e), 1));
    arr.map(e => {
      if (set.indexOf(e) >= 0) set.splice(set.indexOf(e), 1);
    });
    return set.reduce((sum, e) => sum + e, 0);
  };
  // console.log(sumNoDuplicates([3, 4, 4, 6, 6, 3, 2, 5]));
}

{
  /** 5 kyu  Math Issues
  Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.
Here is a list of functions, we need:
Math.round()
Math.ceil()
Math.floor()     */

  Math.round = function (number) {
    return number % 1 < 0.5 ? number ^ 0 : (number ^ 0) + 1;
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
{
  /** 7 kyu  The Office II - Boredom Score
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

  const boredom = (
    staff,
    scoreRes = Object.keys(staff).reduce((sum, e) => sum + score[staff[e]], 0),
  ) =>
    scoreRes <= 80
      ? 'kill me now'
      : scoreRes >= 100
      ? 'party time!!'
      : 'i can handle this';
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
{
  /** 7 kyu  Drone Fly-By 
  The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.  */

  // const flyBy = (lamps, drone) => drone.length > 1 ? lamps.replace('x', 'o'.repeat(drone.length))
  //   .slice(0, - drone.length + 1) : lamps.replace('x', 'o'.repeat(drone.length));

  // const flyBy = (lamps, drone) => lamps.split('').fill(`o`, 0, drone.length).join(``);

  // const flyBy = (lamps, drone) => lamps.replace(/x/g, ((_, i) => i < drone.length ? 'o' : 'x'));

  const flyBy = (lamps, drone) =>
    ('o'.repeat(drone.length) + lamps).slice(0, lamps.length);

  // console.log(flyBy('xxxxxx', '====T'));
  // console.log(flyBy('xxx', 'T'));
}
{
  /** 7 kyu  Nth Root of a Number
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
{
  /** 7 kyu  makeBackronym  
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

  const dict = { D: 'disturbing', G: 'gregarious', M: 'mustache', A: '...' };

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
  const calculate = str =>
    eval(str.replace(/plus/g, '+').replace(/minus/g, ' -')) + '';
  // console.log(calculate("1plus2plus3plus4"));
  // console.log(calculate("1plus2plus3minus4"));
  // console.log(calculate("659minus511minus259"));
}
{
  /** 7 kyu  All Star Code Challenge #3 
  Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
Example (Input --> Output)
"drake" --> "drk"
"aeiou" --> ""
remove_vowels("drake") // => "drk"
remove_vowels("aeiou") // => "" */

  const removeVowels = str => str.replace(/[aeiou]/g, '');
  // console.log(removeVowels("aeifdghou"));
}
{
  /** 7 kyu  Dictionary from two lists 
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

  const createDict = (keys, values) =>
    keys.reduce((obj, key, i) => ((obj[key] = values[i] ?? null), obj), {});
  // console.log(createDict(['a', 'b', 'c', 'd'], [1, 2, 3]));
}
{
  /** 7 kyu  Find Duplicates
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

  const duplicates = arr => [
    ...new Set(arr.filter((e, i) => i !== arr.indexOf(e))),
  ];

  // console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, 3, "5"]));
  // console.log(duplicates([-10, -5, -1, -5, -10, -10, "-1", -1, 1, -10, "-4"]));
}
{
  /** 7 kyu  Count consonants
  Complete the function that takes a string of English-language text and returns the number of consonants in the string.
    Consonants are all letters used to write English excluding the vowels a, e, i, o, u. */
  // const consonantCount = str => [...str].map(e => /[A-z]/g.test(e) ? e : e = '').map(e => /[aeiou]/gi.test(e) ? e = '' : e).map(e => e === ' ' || e === '_' || e === '^' ? '' : e).join('').length;
  // const consonantCount = str => str.replace(/\W|\d|[_aeiou]/gi, "").length;
  // const consonantCount = str => str.replace(/[^A-z]|[_aeiou^]/gi, "").length;
  const consonantCount = str => str.replace(/[^A-Za-z]|[aeiou]/gi, '').length;
  // console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'));
  // console.log(consonantCount('aAa'));
  // console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'));
}
{
  /** 7 kyu  L2: Triple X
  Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".
    "abraxxxas" → true
  "xoxotrololololololoxxx" → false
  "softX kitty, warm kitty, xxxxx" → true
  "softx kitty, warm kitty, xxxxx" → false
  Note :
    capital X's do not count as an occurrence of "x".
  if there are no "x"'s then return false                 */

  // const tripleX = str => /xxx/.test(str) && str.indexOf('x') === str.indexOf('xxx');
  const tripleX = str =>
    str.indexOf('x') >= 0 && str.indexOf('x') === str.indexOf('xxx');
  // const tripleX = str => /^[^x]*xxx/.test(str);

  // console.log(tripleX('xoxotrololololololoxxx'));
  // console.log(tripleX('kittykittywarmkitty'));
  // console.log(tripleX('kitxxxtyXXsoft'));
}
{
  /** 8 kyu  Exclusive "or" (xor) Logical Operator 
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
{
  /** 7 kyu  Extra Perfect Numbers 
   * Extra perfect number is the number that first and last bits are set bits.
Task
Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest
Input >> Output Examples
extraPerfect(3)  ==>  return {1,3}
Explanation:
(1)10 =(1)2
First and last bits as set bits.
(3)10 = (11)2
First and last bits as set bits.
extraPerfect(7)  ==>  return {1,3,5,7}
Explanation:
(5)10 = (101)2
First and last bits as set bits.
(7)10 = (111)2
First and last bits as set bits.    */

  // function extraPerfect(n) {
  //   const arr = Array.from({ length: n / 2 }, (e, i) => 2 * i + 1);
  //   return n % 2 ? [...arr, n] : arr;
  // }

  const extraPerfect = n =>
    Array.from({ length: n }, (e, i) => i + 1).filter(e => e % 2);
  // console.log(extraPerfect(29));
}
{
  /** 7 kyu  True for Just One?
Create a function called one that accepts two params:
a sequence
a function
and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
Example
one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false  */

  const bigger_than_ten = n => n > 10;
  function one(arr, fun) {
    return arr.reduce((count, e) => count + (fun(e) ? 1 : 0), 0);
  }
  // console.log(one([1, 3, 5, 6, 99, 1, 33], bigger_than_ten));
}
{
  /** 8 kyu  Find the Slope 
  Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2
Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope*/

  // const slope = points => points[2] - points[0] ? (points[3] - points[1]) / (points[2] - points[0]) + '' : 'undefined';
  const slope = ([x1, y1, x2, y2]) =>
    x2 - x1 ? (y2 - y1) / (x2 - x1) + '' : 'undefined';
  // console.log(slope([15, 45, 12, 60]));
}
{
  /** 7 kyu  Even or Odd - Which is Greater?
  Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same"   */

  // function evenOrOdd(str) {
  //   const diff = [...str].filter(e => e % 2).reduce((sum, e) => sum + +e, 0) - [...str].filter(e => !(e % 2)).reduce((sum, e) => sum + +e, 0);
  //   return diff > 0 ? 'Odd is greater than Even' : diff ? 'Even is greater than Odd' : 'Even and Odd are the same';
  // }

  // function evenOrOdd(str) {
  //   const diff = [...str].reduce((sum, e) => sum + (e % 2 ? +e : -e), 0);
  //   return diff > 0 ? 'Odd is greater than Even' : diff ? 'Even is greater than Odd' : 'Even and Odd are the same';
  // }

  const evenOrOdd = str =>
    (e =>
      e > 0
        ? 'Odd is greater than Even'
        : e
        ? 'Even is greater than Odd'
        : 'Even and Odd are the same')(
      [...str].reduce((sum, e) => sum + (e % 2 ? +e : -e), 0),
    );

  // console.log(evenOrOdd('12123344'));
}

{
  /** 7 kyu  Is every value in the array an array? 
  Is every value in the array an array?
This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
Examples:
[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false    */

  // const arrCheck = value => value.every(e => Array.isArray(e));
  // const arrCheck = value => value.every(Array.isArray);
  // const arrCheck = value => value.every(e => e.map);
  const arrCheck = value => value.every(e => e instanceof Array);
  // console.log(arrCheck([[5], [2]]));
}
{
  /** 7 kyu  Interview Question (easy)
  You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).
For example:
"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
As you can see, the letter c is shown only once, but with 2 asterisks.
The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.
Note that the return string must list the letters in order of their first appearance in the original string.
More examples:
"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"    */

  // const getStrings = city => {
  //   const set = new Set(city.toLowerCase().replaceAll(' ', ''));
  //   return [...set].map(e => [e, [...city.toLowerCase()].filter(el => el === e)]).map(e => e[0] + ':' + e[1].join('').replace(/./g, '*')).join(',');
  // };
  const getStrings = city =>
    [...new Set(city.toLowerCase().replaceAll(' ', ''))]
      .map(e => [e, [...city.toLowerCase()].filter(el => el === e)])
      .map(e => e[0] + ':' + e[1].join('').replace(/./g, '*'))
      .join(',');

  // console.log(getStrings("Chicago"));
  // console.log(getStrings("Dar es Salaam"));
}
{
  /** 7 kyu  Area of a Circle
  Complete the function which will return the area of a circle with the given radius.
Returned value is expected to be accurate up to tolerance of 0.01.
If the radius is not positive, throw Error.
Example:
circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error         */

  // function circleArea(radius) {
  //   if (radius <= 0) throw new Error('error');
  //   return +(Math.PI * radius ** 2).toFixed(3);
  // }

  function circleArea(radius) {
    if (radius > 0) return +(Math.PI * radius ** 2).toFixed(3);
    throw new Error('error');
  }
  // console.log(circleArea(-3));
}
{
  /** 7 kyu  Especially Joyful Numbers 
  Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...
We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:
its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.*/

  const numberJoy = n => {
    const s = [...('' + n)].reduce((s, e) => s + +e, 0);
    return +[...(s + '')].reverse().join('') * s === n;
  };
  // console.log(numberJoy(14587));
}
{
  /** 6 kyu  Street Fighter 2 - Character Selection 
  Input
the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output
the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, whether successful or not, see tests);
Rules
Selection cursor is circular horizontally but not vertically!
As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.
Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).
Test
For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.
Notice: changing some of the input data might not help you.
Examples
fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:
['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.
fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
Result:
['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']    */

  const fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
  ];
  const moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];

  // function streetFighterSelection(fighters, position, moves) {
  //   if (!fighters.length || !moves.length) return [];
  //   const arr = [];

  //   for (let i = 0; i < moves.length; i++) {
  //     const element = moves[i];
  //     if (element === 'up') { position[0] = 0; }
  //     if (element === 'down') { position[0] = 1; }
  //     if (element === 'right') { position[1] = (position[1] + 1) % fighters[0].length; }
  //     if (element === 'left') { position[1] = (position[1] + fighters[0].length - 1) % fighters[0].length; }
  //     arr.push(fighters[position[0]][position[1]]);
  //   }
  //   return arr;
  // }

  // function streetFighterSelection(fighters, position, moves) {
  //   const arr = [];
  //   for (let i = 0; i < moves.length; i++) {
  //     const element = moves[i];
  //     if (element === 'up') { position[0] = 0; }
  //     if (element === 'down') { position[0] = 1; }
  //     if (element === 'right') { position[1] = (position[1] + 1) % fighters[0].length; }
  //     if (element === 'left') { position[1] = (position[1] + fighters[0].length - 1) % fighters[0].length; }
  //     arr.push(fighters[position[0]][position[1]]);
  //   }
  //   return arr;
  // }

  // function streetFighterSelection(fighters, position, moves) {
  //   const arr = [];

  //   moves.forEach(move => {
  //     switch (move) {
  //       case 'up':
  //         arr.push(fighters[position[0] = 0][position[1]]);
  //         break;

  //       case 'down':
  //         arr.push(fighters[position[0] = 1][position[1]]);
  //         break;

  //       case 'right':
  //         arr.push(fighters[position[0]][position[1] = (position[1] + 1) % fighters[0].length]);
  //         break;

  //       case 'left':
  //         arr.push(fighters[position[0]][position[1] = (position[1] + fighters[0].length - 1) % fighters[0].length]);
  //         break;

  //       default: 'Wtong move';
  //         break;
  //     }
  //   });

  //   return arr;
  // }

  // function streetFighterSelection(fighters, position, moves) {
  //   return moves.map(move => {
  //     switch (move) {
  //       case 'up': return fighters[position[0] = 0][position[1]];
  //       case 'down': return fighters[position[0] = 1][position[1]];
  //       case 'right': return fighters[position[0]][position[1] = (position[1] + 1) % fighters[0].length];
  //       case 'left': return fighters[position[0]][position[1] = (position[1] + fighters[0].length - 1) % fighters[0].length];
  //     }
  //   });
  // }

  function streetFighterSelection(fighters, position, moves) {
    let [v, h] = position;
    return moves.map(move => {
      switch (move) {
        case 'up':
          return fighters[(v = 0)][h];
        case 'down':
          return fighters[(v = 1)][h];
        case 'right':
          return fighters[v][(h = (h + 1) % fighters[0].length)];
        case 'left':
          return fighters[v][
            (h = (h + fighters[0].length - 1) % fighters[0].length)
          ];
      }
    });
  }
  // console.log(streetFighterSelection(fighters, [0, 0], moves));
}
{
  /** 7 kyu  Stanton measure
  The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.
Write a function which takes an integer array and returns its Stanton measure.
Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time. */

  // const stantonMeasure = a => {
  //   const n = a.reduce((count, e) => e === 1 ? count + 1 : count, 0);
  //   return a.reduce((c, e) => e === n ? c + 1 : c, 0);
  // };

  // const stantonMeasure = a => {
  //   const count = q => a.reduce((quantity, e) => e === q ? quantity + 1 : quantity, 0);
  //   return count(count(1));
  // };

  // const stantonMeasure = a => (res => res(res(1)))(q => a.reduce((quantity, e) => e === q ? quantity + 1 : quantity, 0));
  const stantonMeasure = a =>
    (res => res(res(1)))(q => a.filter(e => e === q).length);
  // console.log((stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])));
}
{
  /** 7 kyu  Find all occurrences of an element in an array 
  Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.
If n is not in the given array, return an empty array [].
Assume that n and all values in the given array will always be integers.
Example:
findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]     */

  // const findAll = (array, n) => {
  //   const arr = [];
  //   array.map((e, i) => {
  //     if (e === n) arr.push(i);
  //   });
  //   return arr;
  // };

  const findAll = (array, n) =>
    array.reduce((arr, e, i) => {
      e === n ? arr.push(i) : arr;
      return arr;
    }, []);

  // const findAll = (array, n) => array.reduce((arr, e, i) => e === n ? [...arr, i] : arr, []);
  // console.log(findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20));
}
{
  /** 7 kyu  Responsible Drinking 
  Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.
Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
Examples
"1 beer"  -->  "1 glass of water"
because you drank one standard drink
"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
Note:
To keep the things simple, we'll consider that any "numbered thing" in the string is a drink. Even "1 bear" -> "1 glass of water"; or "1 chainsaw and 2 pools" -> "3 glasses of water"...    */

  // const hydrate = s => {
  //   const n = s.split(/[a-z]+./).reduce((res, e) => res + +e, 0);
  //   return n > 1 ? n + ' glasses of water' : n + ' glass of water';
  // };

  // const hydrate = s => {
  //   const n = s.split(/[a-z]+./).reduce((res, e) => res + +e, 0);
  //   return n + (n > 1 ? ' glasses of water' : ' glass of water');
  // };

  const hydrate = s => {
    const n = s.split(/[a-z]+./).reduce((res, e) => res + +e, 0);
    return n + ' glass' + (n > 1 ? 'es' : '') + ' of water';
  };
  // console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));
}
{
  /** 7 kyu  Plus - minus - plus - plus - ... - Count 
  Count how often sign changes in array.
result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

/*
| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |
*/

  // function catchSignChange(arr) {
  //   return arr.slice(0, -1).reduce((q, e, i) => {
  //     console.log(e);
  //     return (arr.slice(1)[i] >= 0 && e >= 0 || arr.slice(1)[i] < 0 && e < 0 ? q : q + 1);
  //   }, 0);
  // }

  // function catchSignChange(arr) {
  //   return arr.slice(1).reduce((q, e, i) => {
  //     return (arr[i] >= 0 !== e < 0 ? q : q + 1);
  //   }, 0);
  // }

  // const catchSignChange = arr => arr.slice(1).reduce((q, e, i) => (arr[i] >= 0 !== e < 0 ? q : q + 1), 0);
  // const catchSignChange = arr => arr.slice(1).filter((e, i) => (arr[i] >= 0 === e < 0)).length;
  const catchSignChange = (arr, count = 0) => {
    for (let i = 0, a = arr.slice(1); i < a.length; i++) {
      a[i] < 0 === arr[i] >= 0 ? (count += 1) : count;
    }
    return count;
  };

  const arr = [1, -3, -4, 0, 5];
  const ar = [-47, 84, -30, -11, -5, 74, 77];
  const res = catchSignChange(ar);
  // console.log(res);
}
{
  /** 7 kyu  Help Bob count letters and digits
Bob is a lazy man.
He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.
Example:
"hel2!lo" --> 6
"wicked .. !" --> 6
"!?..A" --> 1      */

  // function countLettersAndDigits(input) {
  // return input.replace(/[^A-Za-z0-9]/g, '').length;
  // return input.replace(/[\W_]/g, '').length;
  // }

  const countLettersAndDigits = input => (input.match(/[^\W_]/g) || []).length;

  // console.log(countLettersAndDigits('hel2!lo'));
  // console.log(countLettersAndDigits('n!!_ice!!123'));
}
{
  /** 7 kyu  Evens times last
  Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0. */

  // const evenLast = numbers => numbers.length ? numbers.reduce((res, e, i) => res + (i % 2 ? 0 : e), 0) * numbers[numbers.length - 1] : 0;
  // const evenLast = numbers => numbers.length ? numbers.reduce((res, e, i) => res + (i % 2 ? 0 : e), 0) * numbers.pop() : 0;
  const evenLast = numbers =>
    numbers.length
      ? numbers.reduce((res, e, i) => res + (i % 2 ? 0 : e), 0) *
        numbers.slice(-1)
      : 0;
  // console.log(evenLast([2, 3, 4, 5]));
}
{
  /** 7 kyu  Find Screen Size 
  Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?
The Challenge
Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.
Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.    */

  // const findScreenHeight = (width, ratio) => {
  //   const [w, h] = ratio.split(':');
  //   const height = width / w * h;
  //   return width + "x" + height;
  // };

  // const findScreenHeight = (width, ratio) => ((w, h) => `${width}x${width / w * h}`)(...ratio.split(':'));
  const findScreenHeight = (width, ratio) =>
    (([w, h]) => `${width}x${(width / w) * h}`)(ratio.split(':'));

  // console.log(findScreenHeight(1024, "4:3"));
}

{
  /** 7 kyu  Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins     */
  var list1 = [
    {
      firstName: 'Harry',
      lastName: 'K.',
      country: 'Brazil',
      continent: 'Americas',
      age: 22,
      language: 'JavaScript',
      githubAdmin: 'yes',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 49,
      language: 'Ruby',
      githubAdmin: 'no',
    },
    {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 34,
      language: 'JavaScript',
      githubAdmin: 'yes',
    },
    {
      firstName: 'Piotr',
      lastName: 'B.',
      country: 'Poland',
      continent: 'Europe',
      age: 128,
      language: 'JavaScript',
      githubAdmin: 'no',
    },
  ];

  // function findAdmin(list, lang) {
  //   return list.filter(e => e.language === lang && e.githubAdmin === 'yes');
  // }

  const findAdmin = (list, lang) =>
    list.filter(
      ({ language, githubAdmin }) => language === lang && githubAdmin === 'yes',
    );
  // console.log(findAdmin(list1, 'JavaScript'));
}
{
  /** 7 kyu  See You Next Happy Year
  You're saying good-bye your best friend , See you next happy year .
Happy Year is the year with only distinct digits , (e.g) 2018
Task
Given a year, Find The next happy year or The closest year You'll see your best friend 
Notes
Year Of Course always Positive .
Have no fear , It is guaranteed that the answer exists .
It's not necessary that the year passed to the function is Happy one .
Input Year with in range (1000  ≤  y  ≤  9000)
Input >> Output Examples:
nextHappyYear (7712) ==> return (7801)
Explanation:
As the Next closest year with only distinct digits is 7801 .
nextHappyYear (8989) ==> return (9012)
Explanation:
As the Next closest year with only distinct digits is 9012 .
nextHappyYear (1001) ==> return (1023)
Explanation:
As the Next closest year with only distinct digits is 1023 .*/

  // const nextHappyYear = function (year) {
  //   year += 1;
  //   return new Set((year + '').split('')).size > 3 ? year : nextHappyYear(+year);
  // };

  // function nextHappyYear(year) {
  //   while (new Set([...++year + '']).size < 4);
  //   return year;
  // }

  // const nextHappyYear = year => new Set([...(++year + '')]).size > 3 ? year : nextHappyYear(+year);
  const nextHappyYear = year =>
    [...(++year + '')].every((e, i, arr) => i === arr.lastIndexOf(e))
      ? year
      : nextHappyYear(year);

  // console.log(nextHappyYear(1987));
}
{
  /** 7 kyu  lucky number  
  Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
    1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
    Function will return true for lucky numbers and false for others. */

  // const isLucky = n => n.toString().split('').reduce((sum, e) => sum + +e, 0) % 9 === 0;
  const isLucky = n => n % 9 === 0;
  // console.log(isLucky(1892376));
}
{
  /** 7 kyu  Heron's formula
  Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
    Heron's formula:
  s ∗  (  s  −  a  )  ∗  (  s  −  b  )  ∗  (  s  −  c  )  s∗(s−a)∗(s−b)∗(s−c)   
  where  s  =  (a  +  b  +  c) / 2     
  Output should have 2 digits precision. */

  // function heron(a, b, c) {
  //   const s = (a + b + c) / 2;
  //   return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  // }

  // const heron = (a, b, c, s = (a + b + c) / 2) => Math.sqrt(s * (s - a) * (s - b) * (s - c));
  const heron = (a, b, c, s) => (
    (s = (a + b + c) / 2), Math.sqrt(s * ((s - a) * (s - b) * (s - c)))
  );
  // console.log(heron(3, 4, 5));
}
{
  /** 7 kyu  The Office III - Broken Photocopier
 The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
Given a string of binary, return the version the photocopier gives you as a string.  */

  // const broken = x => x.replaceAll('1', '2').replaceAll('0', '1').replaceAll('2', '0');
  // const broken = x => x.replace(/\d/g, e => e === '0' ? '1' : '0');
  const broken = x => x.replace(/(0)|(1)/g, (_, e) => (e ? '1' : '0'));
  // console.log(broken('10000000101101111110011001000'));
}
{
  /** 7 kyu  Coding Meetup #14 - Higher-Order Functions Series - Order the food
  You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
    Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..
    For example, given the following input array:
    var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
      meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
      meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
      meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
      meal: 'vegetarian' },
  ];
  your function should return the following object (the order of properties does not matter):
    { vegetarian: 2, standard: 1, vegan: 1 }
  Notes:
    The order of the meals count in the object does not matter.
  The count value should be a valid number.
  The input array will always be valid and formatted as in the example above.
  there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'. */

  var list1 = [
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'C',
      meal: 'vegetarian',
    },
    {
      firstName: 'Anna',
      lastName: 'R.',
      country: 'Liechtenstein',
      continent: 'Europe',
      age: 52,
      language: 'JavaScript',
      meal: 'standard',
    },
    {
      firstName: 'Ramona',
      lastName: 'R.',
      country: 'Paraguay',
      continent: 'Americas',
      age: 29,
      language: 'Ruby',
      meal: 'vegan',
    },
    {
      firstName: 'George',
      lastName: 'B.',
      country: 'England',
      continent: 'Europe',
      age: 81,
      language: 'C',
      meal: 'vegetarian',
    },
  ];

  // function orderFood(list) {
  //   const meals = list.map(({ meal }) => meal);
  //   return Object.fromEntries([...new Set(meals)].map(e => meals.filter(el => el === e)).map(e => [e[0], e.length]));
  // }

  // const orderFood = list => list.reduce((count, { meal }) => {
  //   count[meal] = count[meal] + 1 || 1;
  //   return count;
  // }, {});

  // const orderFood = list => list.reduce((count, { meal }) => {
  //   count[meal] = 1 + (count[meal] ?? 0);
  //   return count;
  // }, {});

  const orderFood = list => {
    const count = {};
    list.forEach(({ meal }) => {
      count[meal] = count[meal] + 1 || 1;
    });
    return count;
  };

  // console.log(orderFood(list1));
}
{
  /** 7 kyu  Tail Swap
  You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
    Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
    Examples
  ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
  ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]    */

  function tailSwap(arr) {
    // return JSON.parse('[ "' + arr[0].match(/.+\:/) + arr[1].replace(/.+\:/, '') + '", "' + arr[1].match(/.+\:/) + arr[0].replace(/.+\:/, '') + '" ]');

    // const [[a, b], [c, d]] = arr.map(e => e.split(':'));
    // return [`${a}:${d}`, `${c}:${b}`];

    const ar = arr.map(e => e.split(':'));
    const [a] = ar[0];
    ar[0][1] = ar[1][1];
    ar[1][1] = a;
    return ar.map(e => e.join(':'));
  }
  // console.log(tailSwap(["abc:123", "cde:456"]));
}
{
  /** 7 kyu  Javascript filter - 1 
  While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".
If you have the input-array:
[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]
it should output
[ [ "bar_", "bar@bar.com" ] ]
You have to use the filter-method which returns each element of the array for which the filter-method returns true.
https://developer.mozilla.or     */

  // const searchNames = logins => logins.filter(e => /\_$/.test(e[0]));
  // const searchNames = logins => logins.filter(e => e[0].match(/\_$/));
  // const searchNames = logins => logins.filter(e => e[0].search(/\_$/) >= 0);
  const searchNames = logins => logins.filter(e => e[0].slice(-1) === '_');
  // const searchNames = logins => logins.filter(e => e[0].endsWith('_'));

  // console.log(searchNames([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]));
}
{
  /** 7 kyu  Add property to every object in array 
  Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
The questions array is already defined for you and is not the same as the one in the example.  */

  var questions = [
    {
      question: "What's the currency of the USA?",
      choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
      corAnswer: 0,
    },
    {
      question: 'Where was the American Declaration of Independence signed?',
      choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
      corAnswer: 0,
    },
  ];

  // questions.map(e => e['usersAnswer'] = null);
  for (const key in questions) {
    questions[key].usersAnswer = null;
  }
  // console.log(questions);
}
{
  /** 7 kyu  How many consecutive numbers are needed?
  Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

Example
[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0      */

  // const consecutive = array => array.length ? Math.abs(Math.max(...array) - Math.min(...array)) + 1 - array.length : 0;
  const consecutive = array =>
    (Math.abs(Math.max(...array) - Math.min(...array)) + 1 - array.length) | 0;

  // console.log(consecutive([]));
}
{
  /** time out failure */
  const primes = (a, b) => {
    const primeNums = [];

    for (a; a <= b; a++) {
      let resArr = [];

      for (let j = 2; j < a; j++) {
        if (j === a) continue;
        if (a % j === 0) {
          break;
        } else {
          resArr.push(a);
        }
      }
      if (resArr.length === a - 2) primeNums.push(a);
    }
    return primeNums;
  };

  function step(g, m, n) {
    let primeNums = primes(m, n);
    let res = [];

    for (let i = 0; i < primeNums.length; i++) {
      for (let j = 1; j < primeNums.length; j++) {
        if (primeNums[j] === primeNums[i] + g) {
          res.push(primeNums[i]);
          res.push(primeNums[j]);
        }
      }
    }
    let [a, b] = res;
    return res.length > 1 ? res.slice(0, 2) : null;
  }
  // console.log(step(2, 100, 110));
}
{
  /** 7 kyu  Correct the time-string
  You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++) */

  // function timeCorrect(timestring) {
  //   if (timestring === '' || timestring === null) return timestring;
  //   let arr = [];
  //   if (/\d\d:\d\d:\d\d/.test(timestring)) {
  //     arr = timestring.split(':');
  //   }
  //   if (arr[2] === undefined) return null;
  //   if (+arr[2] > 59) {
  //     arr[2] -= 60;
  //     arr[2] = ('0' + arr[2]).slice(-2);
  //     arr[1] = +arr[1] + 1;
  //   }
  //   if (arr[1] > 59) {
  //     arr[1] -= 60;
  //     arr[1] = ('0' + arr[1]).slice(-2);
  //     arr[0] = +arr[0] + 1;
  //   }
  //   while (+arr[0] > 23) {
  //     arr[0] -= 24;
  //   }
  //   arr[0] = ("0" + arr[0]).slice(-2);

  //   return arr.join(':');
  // }

  // function timeCorrect(timestring) {
  //   if (!timestring) return timestring;
  //   let arr = [];
  //   if (!/(\d\d:){2}\d\d/.test(timestring)) return null;
  //   return new Date(0, 0, -1, ...timestring.split(':')).toString().slice(16, 24);
  // }

  const timeCorrect = timestring =>
    !timestring
      ? timestring
      : /(\d{2}:){2}\d{2}/.test(timestring)
      ? new Date(new Date().setHours(...timestring.split(`:`)))
          .toTimeString()
          .slice(0, 8)
      : null;
  // console.log(timeCorrect("52:01:01"));
}
{
  /** 7 kyu Frequency sequence
  Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).
    Example (s, sep --> Output)
    "hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
  "19999999"   , ":" --> "1:7:7:7:7:7:7:7"
  "^^^**$"     , "x" --> "3x3x3x2x2x1"        */

  function freqSeq(str, sep) {
    // return [...str].reduce((res, e, i, ar) => res + [...str].filter(el => el === e).length + sep, '').slice(0, -1);
    return [...str].map(e => [...str].filter(el => el === e).length).join(sep);
  }
  // console.log(freqSeq('hello world', '-'));
}
{
  /** 7 kyu  Number-Star ladder
  Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern (take the help of examples):
    Note: There is no newline in the end (after the pattern ends)
    Examples
  pattern(3) should return "1\n1*2\n1**3", e.g. the following:
  
  1
  1*2
  1**3
  pattern(10): should return the following:
  
  1
  1*2
  1**3
  1***4
  1****5
  1*****6
  1******7
  1*******8
  1********9
  1*********1   */

  // function pattern(n) {
  //   let output = "";
  //   for (let i = 0; i < n; i++) {
  //     output += 1 + '*'.repeat(i) + (+i + 1) + (i < n - 1 ? '\n' : '');
  //   }
  //   return output.slice(1);
  // }

  // function pattern(n) {
  //   let output = "1";
  //   for (let i = 1; i < n; i++) {
  //     output += '\n' + 1 + '*'.repeat(i) + (i + 1);
  //   }
  //   return output;
  // }

  // const pattern = n => Array.from({ length: n }, (e, i) => '*'.repeat(i) + (i + 1)).join('\n1');
  const pattern = n =>
    n < 2 ? '1' : pattern(n - 1) + '\n1' + Array(n).join('*') + n;
  // console.log(pattern(4));
}
{
  /** 7 kyu  Double Sort 
  Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.
Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.
Note that numbers written as strings are strings and must be sorted with the other strings.*/

  const dbSort = a => [
    ...a.filter(e => typeof e === 'number').sort((a, b) => a - b),
    ...a.filter(e => typeof e === 'string').sort(),
  ];
  // console.log(dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]));
}
{
  /** 7 kyu  Move 10 
  Move every letter in the provided string forward 10 letters through the alphabet.
If it goes past 'z', start again at 'a'.
Input will be a string with length > 0*/

  // const moveTen = s => [...s].map(e => String.fromCharCode(e.charCodeAt() > 112 ? (e.charCodeAt() + 10) % 122 + 96 : e.charCodeAt() + 10)).join('');
  const moveTen = s =>
    s.replace(/[a-z]/g, e =>
      String.fromCharCode(97 + ((e.charCodeAt() - 87) % 26)),
    );
  // console.log(moveTen("exampletesthere"));
}
{
  /** 7 kyu  Dot Calculator 
  You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 =>   */

  // function dotCalculator(equation) {
  //   const [a, sign, b] = equation.split(' ');
  //   if (sign === '+') return '.'.repeat(a.length + b.length);
  //   if (sign === '-') return '.'.repeat(a.length - b.length);
  //   if (sign === '//') return '.'.repeat(a.length / b.length);
  //   if (sign === '*') return '.'.repeat(a.length * b.length);
  // }

  // function dotCalculator(equation) {
  //   const [a, sign, b] = equation.split(' ');
  //   return '.'.repeat(eval([a.length, sign.slice(-1), b.length].join('')));
  // }

  // function dotCalculator(equation, [a, sign, b] = equation.split(' ')) {
  //   return '.'.repeat(eval(a.length + sign.slice(-1) + b.length));
  // }
  // const dotCalculator = (equation, [a, sign, b] = equation.split(' ')) => '.'.repeat(eval(a.length + sign.slice(-1) + b.length));
  const dotCalculator = equation =>
    '.'.repeat(
      eval(equation.replace(/\.+/g, e => e.length).replace('//', '/')),
    );

  // console.log(dotCalculator("..... + ..............."));
  // console.log(dotCalculator("..... // .."));
}
{
  /** 7 kyu  Previous multiple of three
  Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.
    Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
    Examples
  1      => null
  25     => null
  36     => 36
  1244   => 12
  952406 => 9         */

  // const prevMultOfThree = n => {
  //   return !(n % 3) ? +n : +n < 9 ? null : prevMultOfThree(n = (n + '').slice(0, -1));
  // };

  // const prevMultOfThree = n => !(n % 3) ? +n : +n < 9 ? null : prevMultOfThree(n = (n + '').slice(0, -1));
  // const prevMultOfThree = n => !(n % 3) ? +n : +n < 9 ? null : prevMultOfThree((n /= 10) ^ 0);
  // const prevMultOfThree = n => n % 3 ? prevMultOfThree(n / 10 ^ 0) : n || null;
  // const prevMultOfThree = n => n % 3 ? prevMultOfThree(n / 10 | 0) : n || null;
  const prevMultOfThree = n =>
    n % 3 ? prevMultOfThree(Math.trunc(n / 10)) : n || null;

  // console.log(prevMultOfThree(34));
}
{
  /** 7 kyu  Who is the killer?
  Who is the killer?
  Some people have been killed!
  You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.
  
  Task.
  Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:
  
  {'James': ['Jacob', 'Bill', 'Lucas'],
   'Johnny': ['David', 'Kyle', 'Lucas'],
   'Peter': ['Lucy', 'Kyle']}
  and also a list of the names of the dead people:
  
  ['Lucas', 'Bill']
  return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill' */

  // function killer(suspectInfo, dead) {
  //   const keys = Object.keys(suspectInfo);
  //   for (const key of keys) {
  //     if (suspectInfo[key].includes(...dead)) return key;
  //   }
  // }
  const killer = (suspectInfo, dead) =>
    Object.keys(suspectInfo).find(e => suspectInfo[e].includes(...dead));

  // console.log(killer({ 'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle'] }, ['Lucas', 'Bill']));
}
{
  /** 7 kyu  Last ( test failed )
  1843477% of 1,0573,681 of 8,675xcthulhu2 Issues Reported
  Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.
  
  Examples
  last(5)               ==> 5
  last([1, 2, 3, 4])    ==>  4
  last("xyz")           ==> "z"
  last(1, 2, 3, 4)      ==>  4
  last([1, 2], [3, 4])  ==>  [3, 4]
  last([[1, 2], [3, 4]])  ==>  [3, 4]
  (courtesy of haskell.org)             */

  function last() {
    console.log(arguments);
    return Array.isArray(arguments[arguments.length - 1])
      ? arguments[arguments.length - 1].slice(-1)[0]
      : typeof arguments[0] === 'string'
      ? arguments[0].slice(-1)
      : arguments[arguments.length - 1];
  }
  // console.log(last(1, 2, 3));
  // console.log(last('abc'));
  // console.log(last([1, 2, 3, [4, 5]]));
}
{
  /** 7 kyu  Filter Long Words 
  Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.
Example:
* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']   */

  function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(e => e.length > n);
  }
  // console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));
}
function gordon(a) {
  // return a.toUpperCase().replace(/A/g, '@').replace(/[EIOU]/g, '*').replace(/\s/g, '!!!! ') + '!!!!';
  return a
    .toUpperCase()
    .replace(/(\w+)/g, '$&!!!!')
    .replace(/A/g, '@')
    .replace(/[EIOU]/g, '*');
}
// console.log(gordon('What feck damn cake'));

{
  /** 7 kyu  Return substring instance count
  Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.
    Usage example:
    full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
      ---> should return 2 since "bb" shows up twice
    
  full_text = "aaabbbcccc", search_text = "bbb"
      ---> should return 1    */

  // const solution = (fullText, searchText) => fullText.split(searchText).length - 1;
  // const solution = (fullText, searchText, a = fullText.match(RegExp(searchText, 'g'))) => a ? a.length : 0;
  const solution = (fullText, searchText) =>
    (fullText.match(RegExp(searchText, 'g')) || []).length;

  // console.log(solution('abcdeb', 'u'));
}
{
  /** 7 kyu  What dominates your array?
  A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
  For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
  The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
  Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.  */

  // const dominator = arr => {
  //   const domin = [...new Set(arr)].map(e => [e, arr.filter(el => el === e).length]).sort((a, b) => b[1] - a[1])[0];
  //   return arr.length / 2 < domin[1] ? domin[0] : -1;  /* Execution Timed Out */
  // };

  const dominator = arr => {
    const domin = [...new Set(arr)].map(e => [
      e,
      arr.filter(el => el === e).length,
    ]);
    const max = Math.max(...domin.map(e => e[1]));
    return arr.length / 2 < max
      ? domin[domin.map(e => e[1]).indexOf(max)][0]
      : -1; /* Execution Timed Out */
  };

  // console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));
}
{
  /** 6 kyu  How Much?
  I always thought that my old friend John was rather richer than he looked, but I never knew exactly how much money he actually had. One day (as I was plying him with questions) he said:
  
  "Imagine I have between m and n Zloty..." (or did he say Quetzal? I can't remember!)
  "If I were to buy 9 cars costing c each, I'd only have 1 Zloty (or was it Meticals?) left."
  "And if I were to buy 7 boats at b each, I'd only have 2 Ringglets (or was it Zloty?) left."
  Could you tell me in each possible case:
  
  how much money f he could possibly have ?
  the cost c of a car?
  the cost b of a boat?
  So, I will have a better idea about his fortune. Note that if m-n is big enough, you might have a lot of possible answers.
  
  Each answer should be given as ["M: f", "B: b", "C: c"] and all the answers as [ ["M: f", "B: b", "C: c"], ... ]. "M" stands for money, "B" for boats, "C" for cars.
  
  Note: m, n, f, b, c are positive integers, where 0 <= m <= n or m >= n >= 0. m and n are inclusive.
  
  Examples:
  howmuch(1, 100)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"]]
  howmuch(1000, 1100)  => [["M: 1045", "B: 149", "C: 116"]]
  howmuch(10000, 9950) => [["M: 9991", "B: 1427", "C: 1110"]]
  howmuch(0, 200)      => [["M: 37", "B: 5", "C: 4"], ["M: 100", "B: 14", "C: 11"], ["M: 163", "B: 23", "C: 18"]]
  Explanation of the results for howmuch(1, 100):
  
  In the first answer his possible fortune is 37:
  so he can buy 7 boats each worth 5: 37 - 7 * 5 = 2
  or he can buy 9 cars worth 4 each: 37 - 9 * 4 = 1
  The second possible answer is 100:
  he can buy 7 boats each worth 14: 100 - 7 * 14 = 2
  or he can buy 9 cars worth 11: 100 - 9 * 11 = 1       */

  function howMuch(m, n) {
    const res = [];
    let b = ((n - 2) / 7) ^ 0;

    while (n >= m) {
      n = b * 7 + 2;
      if (((n - 1) / 9) % 1 === 0) {
        const c = (n - 1) / 9;
        res.push({ n, b, c });
      }
      b--;
    }

    return res.reverse();
  }
  // console.log(howMuch(1000, 1100));
  // console.log(howMuch(1, 100));
}
{
  /** 7 kyu Unscramble the eggs.
  The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
    Example
  unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
  //             "B---eg---in---n---er---" */

  function unscrambleEggs(word) {
    return word.replace(/egg/g, '');
  }
  // console.log(unscrambleEggs('ceggodegge heggeregge'));
}
{
  /** 6 kyu  Moves in squared strings (II)
  You are given a string of n lines, each substring being n characters long: For example:
  
  s = "abcd\nefgh\nijkl\nmnop"
  
  We will study some transformations of this square of strings.
  
  Clock rotation 180 degrees: rot
  rot(s) => "ponm\nlkji\nhgfe\ndcba"
  selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) It is initial string + string obtained by clock rotation 180 degrees with dots interspersed in order (hopefully) to better show the rotation when printed.
  s = "abcd\nefgh\nijkl\nmnop" --> 
  "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
  or printed:
  |rotation        |selfie_and_rot
  |abcd --> ponm   |abcd --> abcd....
  |efgh     lkji   |efgh     efgh....
  |ijkl     hgfe   |ijkl     ijkl....   
  |mnop     dcba   |mnop     mnop....
                             ....ponm
                             ....lkji
                             ....hgfe
                             ....dcba
  Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".
  
  Task:
  Write these two functions rotand selfie_and_rot
  and
  
  high-order function oper(fct, s) where
  
  fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)
  
  Examples:
  s = "abcd\nefgh\nijkl\nmnop"
  oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
  oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
  Notes:
  The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Your test cases".
  It could be easier to take these katas from number (I) to number (IV)
  Forthcoming katas will study other tranformations. */
  // function rot(strng) {
  //   return [...strng].reverse().join('');
  // }

  // function selfieAndRot(strng) {
  //   const length = strng.split('\n')[0].length;
  //   return (strng.split('\n').join('.'.repeat(length) + '\n') + '.'.repeat(length)) + '\n' + (strng.split('\n').join('.'.repeat(length) + '\n') + '.'.repeat(length)).split('').reverse().join('');
  // }

  // function selfieAndRot(strng) {
  //   return (strng = strng.replace(/.+/g, e => e + e.replace(/./g, '.'))) + '\n' + rot(strng);
  // }

  // function oper(fct, s) {
  //   return fct(s);
  // }

  const rot = strng => [...strng].reverse().join('');

  const selfieAndRot = strng =>
    (strng = strng.replace(/.+/g, e => e + e.replace(/./g, '.'))) +
    '\n' +
    rot(strng);

  const oper = (fct, s) => fct(s);

  // console.log(rot("abcd\nefgh\nijkl\nmnop"));
  // console.log(selfieAndRot("xZBV\njsbS\nJcpN\nfVnP"));
  // console.log(oper(selfieAndRot, "xZBV\njsbS\nJcpN\nfVnP"));
  // console.log(oper(rot, "xZBV\njsbS\nJcpN\nfVnP"));
}
{
  /** 7 kyu  Max-min arrays
  In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
  
  For example:
  
  solve([15,11,10,7,12]) = [15,7,12,10,11]
  The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.  */

  // function solve(arr) {
  //   const res = [];
  //   const maxFirst = [...arr].sort((a, b) => b - a);
  //   const minFirst = [...maxFirst].reverse();

  //   for (let i = 0; i < arr.length / 2; i++) {
  //     res.push(maxFirst[i]);
  //     res.push(minFirst[i]);
  //   }
  //   return res.slice(0, arr.length);
  // };

  // function solve(arr) {
  //   const res = [];
  //   const maxFirst = [...arr].sort((a, b) => b - a);

  //   for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
  //     res.push(maxFirst[i]);
  //     res.push(maxFirst[j]);
  //   }
  //   return res.slice(0, arr.length);
  // };

  // const solve = arr => [...Array.from({ length: arr.sort((a, b) => a - b).length }, (e, i) => i % 2 ? arr.shift() : arr.pop())];
  const solve = arr =>
    [...arr.sort((a, b) => a - b)].map((e, i) =>
      i % 2 ? arr.shift() : arr.pop(),
    );
  // console.log(solve([15, 11, 10, 7, 12]));
}
{
  /** 7 kyu  Who's Online? 
  You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {}        */

  const friends = [
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 10,
    },
    {
      username: 'David',
      status: 'online',
      lastActivity: 10,
    },
    {
      username: 'Barry',
      status: 'online',
      lastActivity: 10,
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22,
    },
    {
      username: 'Ben',
      status: 'online',
      lastActivity: 104,
    },
  ];

  const whosOnline = friends => {
    let res = {};
    const online = [];
    const offline = [];
    const away = [];

    friends.map(({ username, status, lastActivity }) => {
      if (status === 'online' && lastActivity <= 10) {
        online.push(username);
        res = { ...res, online };
      }
      if (status === 'offline') {
        offline.push(username);
        res = { ...res, offline };
      }
      if (status === 'online' && lastActivity > 10) {
        away.push(username);
        res = { ...res, away };
      }
    });

    return res;
  };
  // console.log(whosOnline(friends));
}
{
  /** 7 kyu  Broken sequence 
  You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

Return:

0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")
Examples
"1 2 3 4"  ==>  return 0, because the sequence is complete

"1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

"2 1 3 a"  ==>  return 1, because it contains a non numerical character

"1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

"1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowes   */

  // function findMissingNumber(sequence) {
  //   if (!sequence.length) return 0;
  //   if (/[a-z]/.test(sequence)) return 1;
  //   const sorted = sequence.split(' ').sort((a, b) => a - b);
  //   if (sorted[0] !== '1') return 1;
  //   const res = sorted.find((e, i, arr) => +arr[i + 1] !== +e + 1);
  //   return res === sorted[sorted.length - 1] ? 0 : +res + 1;
  // }

  function findMissingNumber(sequence) {
    if (!sequence) return 0;
    if (/[a-z]/.test(sequence)) return 1;
    const sorted = sequence.split(' ').sort((a, b) => a - b);
    return sorted.findIndex((e, i) => +e !== i + 1) + 1;
  }
  // console.log(findMissingNumber("2 3 4 5"));
}
{
  /** 7 kyu  Numbers to Objects
  You will be given an array of numbers.
  
  For each number in the array you will need to create an object.
  
  The object key will be the number, as a string. The value will be the corresponding character code, as a string.
  
  Return an array of the resulting objects.
  
  All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.   */

  // function numObj(s) {
  //   return s.map(e => Object.fromEntries(new Map([[e, String.fromCharCode(e)]])));
  // }

  // const numObj = s => s.map(e => ({ [e]: String.fromCharCode(e) }));
  const numObj = s =>
    s.reduce((res, e) => [...res, { [e]: String.fromCharCode(e) }], []);

  // console.log(numObj([118, 117, 120]));
}
{
  /** 7 kyu  Exclamation marks series #5: Remove all exclamation marks from the end of words
  Remove all exclamation marks from the end of words. Words are separated by a single space. There are no exclamation marks within a word.
    Examples
  remove("Hi!") === "Hi"
  remove("Hi!!!") === "Hi"
  remove("!Hi") === "!Hi"
  remove("!Hi!") === "!Hi"
  remove("Hi! Hi!") === "Hi Hi"
  remove("!!!Hi !!hi!!! !hi") === "!!!Hi !!hi !hi" */

  // function remove(string) {
  //   return string.replace(/(\w+)(!*)/g, (_, a, b) => a);
  // }

  // const remove = string => string.replace(/(\w+)(!*)/g, (_, a, b) => a);
  // const remove = string => string.replace(/\b!*/g, '');
  const remove = string => string.replace(/(\w)!+/g, '$1');

  // console.log(remove('!!!Hi !!hi!!! !hi'));
}
{
  /** 6 kyu  All Star Code Challenge #15
  This Kata is intended as a small challenge for my students
  
  Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.
  
  The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.
  
  Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.
  
  Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.
  
  rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
  Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an empty array with a 0 length string, '', as input. */

  // function rotate(str) {
  //   return [...str].map((e, i, arr) => str = str.slice(1) + arr[i]);
  // }

  // const rotate = str => [...str].map((e, i, arr) => str = str.slice(1) + arr[i]);
  // const rotate = str => [...str].map(e => str = str.slice(1) + str.slice(0, 1));
  // const rotate = str => [...str].map(() => str = str.slice(1) + str.slice(0, 1));
  // const rotate = str => [...str].map((e, i) => str.slice(i += 1) + str.slice(0, i));
  // const rotate = str => Array.from({ length: str.length }, () => str = str.replace(/(.)(.*)/, (_, a, b) => b + a));
  const rotate = str =>
    Array.from(
      { length: str.length },
      () => (str = str.replace(/(.)(.*)/, '$2$1')),
    );

  // console.log(rotate('Hello'));
}
{
  /** 6 kyu  Loose Change
  Welcome young Jedi! In this Kata you must create a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.
  
  Notes:
  
  If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
  If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.
  Examples
  loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
  loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
  loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0} */

  // function looseChange(cents) {
  //   const res = { 'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0 };
  //   if (cents <= 0) return res;
  //   res.Quarters = cents / 25 ^ 0;
  //   res.Dimes = cents % 25 / 10 ^ 0;
  //   res.Nickels = cents % 25 % 10 / 5 ^ 0;
  //   res.Pennies = cents % 5 ^ 0;
  //   return res;
  // }

  // function looseChange(cents) {
  //   if (cents < 0) cents = 0;
  //   return {
  //     Quarters: cents / 25 ^ 0,
  //     Dimes: cents % 25 / 10 ^ 0,
  //     Nickels: cents % 25 % 10 / 5 ^ 0,
  //     Pennies: cents % 5 ^ 0,
  //   };
  // }

  // const looseChange = cents => (e => ({ Quarters: e / 25 ^ 0, Dimes: e % 25 / 10 ^ 0, Nickels: e % 25 % 10 / 5 ^ 0, Pennies: e % 5 ^ 0, }))
  //   (Math.max(cents, 0));

  const looseChange = cents =>
    (e => ({
      Quarters: (e / 25) ^ 0,
      Dimes: ((e % 25) / 10) ^ 0,
      Nickels: (((e % 25) % 10) / 5) ^ 0,
      Pennies: e % 5 ^ 0,
    }))(Math.sign(cents) + 1 ? cents : 0);

  // console.log(looseChange(66));
}
{
  /** 7 kyu  Moves in squared strings (I)
  This kata is the first of a sequence of four about "Squared Strings".
  
  You are given a string of n lines, each substring being n characters long: For example:
  
  s = "abcd\nefgh\nijkl\nmnop"
  
  We will study some transformations of this square of strings.
  
  Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
  vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
  Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
   hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
  or printed:
  
  vertical mirror   |horizontal mirror   
  abcd --> dcba     |abcd --> mnop 
  efgh     hgfe     |efgh     ijkl 
  ijkl     lkji     |ijkl     efgh 
  mnop     ponm     |mnop     abcd 
  Task:
  Write these two functions
  and
  
  high-order function oper(fct, s) where
  
  fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)
  
  Examples:
  s = "abcd\nefgh\nijkl\nmnop"
  oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
  oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
  Note:
  The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests". */

  // function vertMirror(strng) {
  //   return strng.split('\n').map(e => [...e].reverse().join('')).join('\n');
  // }
  // function horMirror(strng) {
  //   return strng.split('\n').reverse().join('\n');
  // }
  // function oper(fct, s) {
  //   return fct(s);
  // }

  // const vertMirror = strng => strng.split('\n').map(e => [...e].reverse().join('')).join('\n');
  // const horMirror = strng => strng.split('\n').reverse().join('\n');
  // const oper = (fct, s) => fct(s);

  const vertMirror = strng => strng.map(e => [...e].reverse().join(''));
  const horMirror = strng => strng.reverse();
  const oper = (fct, s) => fct(s.split('\n')).join('\n');

  // console.log(oper(vertMirror, "abcd\nefgh\nijkl\nmnop"));
}
{
  /** 7 kyu  Scrolling Texts
  Output
  Let's create some scrolling text!  
  Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.
    Example
  scrollingText("codewars") should return:
  
  [ "CODEWARS",
    "ODEWARSC",
    "DEWARSCO",
    "EWARSCOD",
    "WARSCODE",
    "ARSCODEW"
    "RSCODEWA",
    "SCODEWAR" ]   */

  // const scrollingText = text => (() => Array.from(text, (_, i) => text.slice(i) + text.slice(0, i)))(text = text.toUpperCase());
  // const scrollingText = text => ((t) => [...t].map((_, i) => t.slice(i) + t.slice(0, i)))(text = text.toUpperCase());
  const scrollingText = text =>
    (t =>
      [t, ...[...t].map((_, i) => (t = t.replace(/(.)(.*)/, '$2$1')))].slice(
        0,
        -1,
      ))((text = text.toUpperCase()));

  // console.log(scrollingText('coDEWARS'));
}
{
  /** 7 kyu  Search for letters
  Create a function which accepts one arbitrary string as an argument, and return a string of length 26.
    The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).
    So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.
    For instance:
    "a   **&  cZ"  =>  "10100000000000000000000001" */

  // function change(string) {
  //   return [...'abcdefghijklmnopqrstuvwxyz'].map(e => [...new Set(string.toLowerCase().match(/[a-z]/g))].includes(e) ? '1' : '0').join('');
  // }

  // const change = string => [...'abcdefghijklmnopqrstuvwxyz'].map(e => [...new Set(string.toLowerCase().match(/[a-z]/g))].includes(e) ? '1' : '0').join('');
  // const change = string => 'abcdefghijklmnopqrstuvwxyz'.split('').map(e => [...new Set(string.toLowerCase().match(/[a-z]/g))].indexOf(e) < 0 ? '0' : '1').join('');
  // const change = string => [...'abcdefghijklmnopqrstuvwxyz'].reduce((s, e) => s += [...new Set(string.toLowerCase().match(/[a-z]/g))].indexOf(e) < 0 ? '0' : '1', '');
  // const change = string => [...'abcdefghijklmnopqrstuvwxyz'].reduce((s, e) => s += RegExp(e).test(string.toLowerCase()) ? '1' : '0', '');
  // const change = string => [...'abcdefghijklmnopqrstuvwxyz'].reduce((s, e) => s += string.match(RegExp(e, 'i')) ? '1' : '0', '');
  // const change = string => [...Array(26)].reduce((s, _, i) => s += RegExp(String.fromCharCode(65 + i), `i`).test(string) ? '1' : '0', '');
  const change = string =>
    [...Array(26)]
      .map(
        (s, i) =>
          RegExp(String.fromCharCode(65 + i), `i`).test(string) ? '1' : '0',
        '',
      )
      .join('');

  // console.log(change("a   **&  CZ"));
}
{
  /** 7 kyu  Help Suzuki rake his garden!
  Help Suzuki rake his garden!
  
  The monastery has a magnificent Zen garden made of white gravel and rocks and it is raked diligently everyday by the monks. Suzuki having a keen eye is always on the lookout for anything creeping into the garden that must be removed during the daily raking such as insects or moss.
  
  You will be given a string representing the garden such as:
  
  garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
  Rake out any items that are not a rock or gravel and replace them with gravel such that:
  
  garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
  Returns a string with all items except a rock or gravel replaced with gravel:
  
  garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'        */

  // function rakeGarden(garden) {
  //   return garden.split(' ').map(e => e !== 'rock' ? 'gravel' : e).join(' ');
  // }

  // const rakeGarden = garden => garden.replace(/\w+/g, e => e !== 'rock' ? 'gravel' : e);
  // const rakeGarden = garden => garden.split(' ').map(e => e !== 'rock' ? 'gravel' : e).join(' ');
  const rakeGarden = garden => garden.replace(/(?!rock\b)\b\w+/g, 'gravel');

  // console.log(rakeGarden('gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel'));
}
{
  /** 7 kyu  "Very Even" Numbers.
  Write a function that returns true if the number is a "Very Even" number.
  
  If a number is a single digit, then it is simply "Very Even" if it itself is even.
  
  If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".
  
  Examples
  number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 
  
  number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even
  
  number = 5 => returns false
  
  number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
  Note: The numbers will always be 0 or positive integers!    */

  // function isVeryEvenNumber(n) {
  //   if ((n + '').length < 2) return !(n % 2);
  //   return isVeryEvenNumber((n + '').split('').reduce((sum, e) => sum + +e, 0));
  // }

  // const isVeryEvenNumber = n => (n + '').length < 2 ? !(n % 2) : isVeryEvenNumber((n + '').split('').reduce((sum, e) => sum + +e, 0));
  const isVeryEvenNumber = n =>
    n <= 9
      ? !(n % 2)
      : isVeryEvenNumber((n + '').split('').reduce((sum, e) => sum + +e, 0));

  // console.log(isVeryEvenNumber(7775));
}
{
  /** 7 kyu  Computer problem series #1: Fill the Hard Disk Drive
Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Zero size files can always be saved even HD full.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)
Output:
Number of files that can be fully saved in the HD.
Examples:
save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11
save([12, 0, 0, 1], 12) -> 3
# 12+0+0 <= 12, but 12+0+0+1 > 12
Do not expect any negative or invalid inputs. */

  // function save(sizes, hd) {
  //   let i = 0;
  //   for (let sum = 0; i < sizes.length; i++) {
  //     sum += sizes[i];
  //     if (sum > hd) { return i; }
  //   }
  //   return sizes.length;
  // }

  // function save(sizes, hd) {
  //   let n = 0, sum = 0;
  //   for (const size of sizes) {
  //     sum += size;
  //     if (sum > hd) { return n; }
  //     n++;
  //   }
  //   return sizes.length;
  // }

  const save = (sizes, hd, n = 0) =>
    sizes.reduce((sum, e, i) => sum + e, 0) <= hd
      ? sizes.length - n
      : save(sizes.slice(0, -n - 1), hd, n++);

  // console.log(save([12, 0, 0, 1], 12));
}
{
  /** 6 kyu  Binary to Text (ASCII) Conversion
  Past Solutions
  Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).
  
  Each 8 bits on the binary string represent 1 character on the ASCII table.
  
  The input string will always be a valid binary string.
  
  Characters can be in the range from "00000000" to "11111111" (inclusive)
  
  Note: In the case of an empty binary string your function should return an empty string.  */

  // function binaryToString(binary) {
  //   let res = '';
  //   while (binary) {
  //     res += String.fromCharCode(parseInt(binary.slice(0, 8), 2));
  //     binary = binary.slice(8);
  //   }

  //   return res;
  // }

  // function binaryToString(binary, res = '') {
  //   if (!binary) { return res; }
  //   res += String.fromCharCode(parseInt(binary.slice(0, 8), 2));
  //   binary = binary.slice(8);
  //   return binaryToString(binary, res);
  // }

  // function binaryToString(binary) {
  //   return binary ? binary.replace(/[01]{8}/g, e => String.fromCharCode(parseInt(e, 2))) : '';
  // }

  // const binaryToString = binary => binary ? binary.replace(/[01]{8}/g, e => String.fromCharCode(parseInt(e, 2))) : '';
  // const binaryToString = binary => binary ? binary.replace(/\d{8}/g, e => String.fromCharCode(parseInt(e, 2))) : '';
  const binaryToString = binary =>
    binary
      ? String.fromCharCode(...binary.match(/\d{8}/g).map(e => parseInt(e, 2)))
      : '';

  // console.log(binaryToString('01001011010101000100100001011000010000100101100101000101'));
}
{
  /** 8 kyu  Classy Classes
  Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34 */

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    get info() {
      return `${this.name}s age is ${this.age}`;
    }
    set info(newName) {
      this.name = newName;
    }
    getInfo() {
      return `${this.name}s age is ${this.age}`;
    }
  }

  // class Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //     this.info = `${this.name}s age is ${this.age}`;
  //   }
  // }

  // class Person {
  //   constructor(name, age) {
  //     this.info = `${name}s age is ${age}`;
  //   }
  // }

  const john = new Person('John', 34);
  john.age = 35;
  // console.log(john.getInfo());
  // console.log(john.info);
}
{
  /** 7 kyu  Building blocks
  Write a class Block that creates a block (Duh..)
  
  Requirements
  The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.
  
  Define these methods:
  
  `getWidth()` return the width of the `Block`
  
  `getLength()` return the length of the `Block`
  
  `getHeight()` return the height of the `Block`
  
  `getVolume()` return the volume of the `Block`
  
  `getSurfaceArea()` return the surface area of the `Block`
  Examples
      let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
      b.getWidth() // -> 2
      
      b.getLength() // -> 4
      
      b.getHeight() // -> 6
      
      b.getVolume() // -> 48
      
      b.getSurfaceArea() // -> 88
  Note: no error checking is needed */

  // class Block {

  //   constructor(data) {
  //     this.data = data;
  //   }
  //   getWidth() { return this.data[0]; }
  //   getLength() { return this.data[1]; }
  //   getHeight() { return this.data[2]; }
  //   getVolume() { return this.data[0] * this.data[1] * this.data[2]; }
  //   getSurfaceArea() { return (this.data[0] * this.data[1] + this.data[0] * this.data[2] + this.data[2] * this.data[1]) * 2; }
  // }

  // class Block {

  //   constructor(data) {
  //     [this.width, this.length, this.height] = data;
  //   }
  //   getWidth() { return this.width; }
  //   getLength() { return this.length; }
  //   getHeight() { return this.height; }
  //   getVolume() { return this.width * this.length * this.height; }
  //   getSurfaceArea() { return (this.width * this.length + this.width * this.height + this.height * this.length) * 2; }
  // }

  class Block {
    constructor([width, length, height]) {
      this.width = width;
      this.length = length;
      this.height = height;
    }
    getWidth() {
      return this.width;
    }
    getLength() {
      return this.length;
    }
    getHeight() {
      return this.height;
    }
    getVolume() {
      return this.width * this.length * this.height;
    }
    getSurfaceArea() {
      return (
        (this.width * this.length +
          this.width * this.height +
          this.height * this.length) *
        2
      );
    }
  }

  const block = new Block([2, 4, 6]);
  // console.log(block.getWidth());
}
{
  /** 7 kyu  Unique Sum
  Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.
  
  For example:
  
  [ 1, 2, 3] ==> 6
  
  [ 1, 3, 8, 1, 8] ==> 12
  
  [ -1, -1, 5, 2, -7] ==> -1
  
  [] ==> null */

  // function uniqueSum(arr) {
  //   if (arr.length === 0) return null;
  //   return [...new Set(arr)].reduce((sum, e) => sum + e, 0);
  // }

  // function uniqueSum(arr) {
  //   return [...new Set(arr)].reduce((sum, e) => sum + e, null);
  // }

  // const uniqueSum = arr => [...new Set(arr)].reduce((sum, e) => sum + e, null);

  // const uniqueSum = arr => {
  //   const ar = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(i, arr.indexOf(arr[i]), arr[i], ar);
  //     if (i === arr.indexOf(arr[i])) { ar.push(arr[i]); };
  //   }
  //   return ar.reduce((sum, e) => sum + e, null);
  // };

  // const uniqueSum = arr => {
  //   const ar = [];
  //   let n = 0;
  //   for (const element of arr) {
  //     if (arr.indexOf(element) === n) ar.push(element);
  //     n += 1;
  //   }
  //   return ar.reduce((sum, e) => sum + e, null);
  // };

  const uniqueSum = arr =>
    arr
      .filter((e, i) => arr.indexOf(e) === i)
      .reduce((sum, e) => sum + e, null);

  // console.log(uniqueSum([3, 4, 3, 5, 3, 5]));
}
{
  /** 7 kyu  Fun with ES6 Classes #2 - Animals and Inheritance
  Fun with ES6 Classes #2 - Animals and Inheritance
  Overview
  Preloaded for you in this Kata is a class Animal:*/

  class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  // Get Coding :)

  // class Shark extends Animal {
  //   constructor(/* Insert your parameters here */) {
  //     super(/* Make a call to the parent class's constructor with the correct arguments */);
  //   }
  // }

  // class Cat extends Animal {
  //   // Do the same here as you did for Shark - define your constructor function and any other methods you need
  // }

  // class Dog extends Animal {
  //   // On your own now - you can do it :D
  // }

  /*Task
  Define the following classes that inherit from Animal.
  
  I. Shark
  The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".
  
  II. Cat
  The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".
  
  Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:
  
  var example = new Cat("Example", 10, "Happy");
  example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
  III. Dog
  The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".
  
  Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master). */

  // class Shark extends Animal {
  //   constructor(name, age, status) {
  //     super(name, age, status);
  //     this.legs = 0;
  //     this.species = 'shark';
  //     this.status = status;
  //   }
  // }

  // class Cat extends Animal {
  //   constructor(name, age, status) {
  //     super(name, age, status);
  //     this.legs = 4;
  //     this.species = 'cat';
  //     this.status = status;
  //   }
  //   introduce() {
  //     return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  //   }
  // }

  // class Dog extends Animal {
  //   constructor(name, age, status, master) {
  //     super(name, age, status);
  //     this.master = master;
  //     this.status = status;
  //     this.name = name;
  //     this.legs = 4;
  //     this.species = 'dog';
  //   }
  //   greetMaster() {
  //     return `Hello ${this.master}`;
  //   }
  // }

  // class Shark extends Animal {
  //   constructor(name, age, status, legs = 0, species = "shark") {
  //     super(name, age, legs, species, status);
  //   }
  // }

  // class Cat extends Animal {
  //   constructor(name, age, status, legs = 4, species = "cat") {
  //     super(name, age, legs, species, status);
  //   }

  //   introduce() {
  //     return super.introduce() + '  Meow meow!';
  //   }
  // }

  // class Dog extends Animal {
  //   constructor(name, age, status, master, legs = 4, species = "dog") {
  //     super(name, age, legs, species, status);
  //     this.master = master;
  //   }

  //   greetMaster() {
  //     return `Hello ${this.master}`;
  //   }
  // }

  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, 'shark', status);
    }
  }

  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, 'cat', status);
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
  }

  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, 'dog', status);
      this.master = master;
    }
    greetMaster() {
      return `Hello ${this.master}`;
    }
  }
}
{
  /** 6 kyu  Alphabet war - airstrike - letters massacre
  There is a war...between alphabets!
  There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters called airstrike to help them in war - dashes and dots are spread throughout the battlefield. Who will win?
  
  Task
  Write a function that accepts a fight string which consists of only small letters and * which represents a bomb drop place. Return who wins the fight after bombs are exploded. When the left side wins return Left side wins!, and when the right side wins return Right side wins!. In other cases, return Let's fight again!.
  
  The left side letters and their power:
  
   w - 4
   p - 3 
   b - 2
   s - 1
  The right side letters and their power:
  
   m - 4
   q - 3 
   d - 2
   z - 1
  The other letters don't have power and are only victims.
  The * bombs kill the adjacent letters ( i.e. aa*aa => a___a, **aa** => ______ );
  
  Example
  alphabetWar("s*zz");           //=> Right side wins!
  alphabetWar("*zd*qm*wp*bs*"); //=> Let's fight again!
  alphabetWar("zzzz*s*");       //=> Right side wins!
  alphabetWar("www*www****z");  //=> Left side wins! */

  // function alphabetWar(fight, str = 'mqdz sbpw') {
  //   const res = fight.replace(/(\w?\*\w?)|[^mqdzsbpw]/g, '').split('').reduce((sum, e) => sum + str.indexOf(e) - 4, 0);
  //   return res > 0 ? "Left side wins!" : res < 0 ? "Right side wins!" : "Let's fight again!";
  // }

  function alphabetWar(fight, str = 'mqdz sbpw') {
    return (res =>
      res ? (res > 0 ? 'Lef' : 'Righ') + 't side wins!' : "Let's fight again!")(
      fight
        .replace(/(\w?\*\w?)|[^mqdzsbpw]/g, '')
        .split('')
        .reduce((sum, e) => sum + str.indexOf(e) - 4, 0),
    );
  }

  // const alphabetWar = fight => (res => res > 0 ? "Left side wins!" : res < 0 ? "Right side wins!" : "Let's fight again!")
  //   (fight.replace(/(\w?\*\w?)|[^mqdzsbpw]/g, '').split('').reduce((sum, e) => sum + 'mqdz sbpw'.indexOf(e) - 4, 0));

  // const alphabetWar = fight => (res => !res ? "Let's fight again!" : (res > 0 ? "Lef" : "Righ") + "t side wins!")
  //   (fight.replace(/(\w?\*\w?)|[^mqdzsbpw]/g, '').split('').reduce((sum, e) => sum + 'mqdz sbpw'.indexOf(e) - 4, 0));

  // const alphabetWar = (fight, obj = { m: -4, q: -3, d: -2, z: -1, s: 1, b: 2, p: 3, w: 4 }) =>
  //   (res => res ? (res > 0 ? "Lef" : "Righ") + "t side wins!" : "Let's fight again!")
  //     (fight.replace(/(\w?\*\w?)|[^mqdzsbpw]/g, '').split('').reduce((sum, e) => sum + obj[e], 0));

  // console.log(alphabetWar("z*z*z*zs"));
  // console.log(alphabetWar("mqdzsbpw"));
}
{
  /** 6 kyu  Integer depth
  The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.
  
  example:
  
  let see n=42
  
  Multiple         value         digits     comment
  42*1              42            2,4 
  42*2              84             8         4 existed
  42*3              126           1,6        2 existed
  42*4              168            -         all existed
  42*5              210            0         2,1 existed
  42*6              252            5         2 existed
  42*7              294            9         2,4 existed
  42*8              336            3         6 existed 
  42*9              378            7         3,8 existed
  Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input. */

  // function computeDepth(x) {
  //   const arr = [];
  //   let setSize = 0, n = 0;
  //   while (setSize < 10) {
  //     arr.push(...((x * ++n) + '').split(''));
  //     setSize = new Set(arr).size;
  //   }
  //   return n;
  // }

  // function computeDepth(x) {
  //   let arr = [], setSize = 0, n = 0;
  //   while (setSize < 10) {
  //     arr.push(...((x * ++n) + '').split(''));
  //     if (new Set(arr).size === 10) return n;
  //   }
  // }

  function computeDepth(x, n = 0) {
    for (
      let digitStr = '';
      [...'1234567890'].some(e => !digitStr.includes(e));
      digitStr += x * ++n
    ) {}
    return n;
  }
  // console.log(computeDepth(42));
}
{
  /** 7 kyu  Partial Word Searching
  Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.
  
  The method takes two parameters, the query string and the array of strings to search, and returns an array.
  
  If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)
  
  Examples
  If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"]. */

  // function wordSearch(query, seq) {
  //   return seq.filter(e => e.match(RegExp(query, 'gi'))).length ? seq.filter(e => e.match(RegExp(query, 'gi'))) : ["Empty"];
  // }

  // const wordSearch = (query, seq) => seq.filter(e => e.match(RegExp(query, 'i'))).length ? seq.filter(e => e.match(RegExp(query, 'gi'))) : ["Empty"];
  // const wordSearch = (query, seq) => (seq = seq.filter(e => e.match(RegExp(query, 'i'))))[0] ? seq : ["Empty"];
  // const wordSearch = (query, seq) => (e => e[0] ? e : ["Empty"])(seq.filter(e => e.match(RegExp(query, 'i'))));
  // const wordSearch = (query, seq) => (e => e[0] ? e : ["Empty"])(seq.filter(e => RegExp(query, 'i').test(e)));
  const wordSearch = (query, seq) =>
    RegExp(query, 'gi').test(seq.join(' '))
      ? seq.filter(e => RegExp(query, 'i').test(e))
      : ['Empty'];

  // console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zc"]));
}
{
  /** 8 kyu  Training JS #16: Methods of String object--slice(), substring() and substr()
  Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]           */

  // const cutIt = arr => arr.map(e => e.substr(0, Math.min(...arr.map(e => e.length))));
  // const cutIt = arr => arr.map(e => e.slice(0, Math.min(...arr.map(e => e.length))));
  // const cutIt = arr => arr.map(e => e.slice(0, arr.reduce((min, e) => min = min < e.length ? min : e.length, arr[0].length)));
  // const cutIt = arr => (min => arr.map(e => e.slice(0, min)))(arr.reduce((min, e) => min = min < e.length ? min : e.length, arr[0].length));
  const cutIt = arr =>
    (min => arr.map(e => e.substr(0, min)))(
      Math.min(...arr.map(e => e.length)),
    );

  // console.log(cutIt(["abc", "defgh", "ijklmn"]));
}
{
  class Animal {
    constructor(name, age, legs, species, status) {
      this.name = name;
      this.age = age;
      this.legs = legs;
      this.species = species;
      this.status = status;
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  // class Shark extends Animal {
  //   constructor(name, age, status) {
  //     super(name, age, 0, 'shark', status);
  //   }
  // }

  // class Cat extends Animal {
  //   constructor(name, age, status) {
  //     super(name, age, 4, 'cat', status);
  //   }
  //   introduce() {
  //     return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  //   }
  // }

  // class Dog extends Animal {
  //   constructor(name, age, status, master) {
  //     super(name, age, 4, 'dog', status);
  //     this.master = master;
  //   }
  //   greetMaster() {
  //     return `Hello ${this.master}`;
  //   }
  // }

  class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, status);
      this.species = 'shark';
      this.legs = 0;
      this.status = status;
    }
  }

  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, 'cat', status);
    }
    introduce() {
      // return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
      return super.introduce() + `  Meow meow!`;
    }
  }

  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, 'dog', status);
      this.master = master;
    }
    greetMaster() {
      // return `Hello ${this.master}`;
      return `Hello ` + this.master;
    }
  }

  const dog = new Dog('rex', 2, 'serve', 'El');
  const cat = new Cat('ex', 3, 'Meow');

  // console.log(dog);
  // console.log(cat.introduce());
}
{
  /** 7 kyu
  For every good kata idea there seem to be quite a few bad ones!
  
  In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
  
  The sub arrays may not be the same length.
  
  The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings. */

  // const well = x => (length => !length ? 'Fail!' : length > 2 ? 'I smell a series!' : 'Publish!')(x.flat().filter(e => /good/gi.test(e)).length);
  // const well = x => (l => l ? l > 2 ? `I smell a series!` : `Publish!` : `Fail!`)((('' + x).match(/good/gi) || []).length);
  const well = x =>
    (l => (l ? (l > 2 ? `I smell a series!` : `Publish!`) : `Fail!`))(
      x.flat().reduce((sum, e) => sum + /good/gi.test(e), 0),
    );

  // console.log(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]));
}
{
  /** 7 kyu  Chain me
Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
 return num + 1;
}

function mult(num) {
 return num * 30;
}

chain(2, [add, mult]);
// returns 90; */

  function add(num) {
    return num + 1;
  }

  function mult(num) {
    return num * 30;
  }
  const chain = (input, fs) => fs.reduce((res, func) => func(res), input);

  // console.log(chain(2, [add, mult]));
}
{
  /** 7 kyu  Substring fun
  Complete the function that takes an array of words.
  
  You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.
  
  For example:
  
  ["yoda", "best", "has"]  -->  "yes"
    ^        ^        ^
    n=0     n=1     n=2
  Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters. */

  // function nthChar(words) {
  //   return words.map((e, i, ar) => e[i]).join('');
  // }

  // const nthChar = words => words.map((e, i) => e[i]).join('');
  const nthChar = words => words.reduce((res, e, i) => res + e[i], '');

  // console.log(nthChar(['yoda', 'best', 'has']));
}
{
  /** 7 kyu  Regexp Basics - is it a letter?
  Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise. */

  String.prototype.isLetter = function () {
    return /^[a-zA-Z]$/.test(this);
  };
  // console.log(String.prototype.isLetter());
}
{
  /** 7 kyu  Calculate mean and concatenate string
  You will be given an array which will include both integers and characters.
  
  Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.
  
  lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
  Here is an example of your return  
  [3.6, "udiwstagwo"] */

  // const mean = lst => [lst.reduce((sum, e) => sum + (+e ? +e : 0), 0) / 10, lst.reduce((s, e) => s + e).replace(/\d/g, '')];
  // const mean = lst => lst.reduce(([d, s], e) => +e ? [(10 * d + +e) / 10, s] : [d, (s + e).replace(/\d/, '')], [0, '']);
  // const mean = lst => lst.reduce(([d, s], e) => isNaN(e) ? [d, s + e] : [(10 * d + +e) / 10, s], [0, '']);
  // const mean = lst => lst.reduce(([d, s], e) => !isNaN(e) ? [(10 * d + +e) / 10, s] : [d, s + e], [0, '']);
  const mean = lst => [
    lst.reduce((sum, e) => sum + (!isNaN(e) ? +e : 0), 0) / 10,
    lst.join('').replace(/\d/g, ''),
  ];

  // console.log(mean(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]));
}
{
  /** 7 kyu  Reverse list
  Write reverseList function that simply reverses lists. */

  // function reverseList(arr) {
  //   return arr.reverse();
  // }

  const reverseList = arr => arr.reverse();
}
{
  /** 6 kyu  Sort Arrays (Ignoring Case)
  Sort the given array of strings in alphabetical order, case insensitive. For example:
  
  ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
  ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"] */

  // const sortme = function (names) {
  //   return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  // };

  const sortme = names =>
    names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  // console.log(sortme(["C", "d", "a", "B"]));
}
{
  /** 6 kyu  Is Integer Array?
  Write a function with the signature shown below:
  
  function isIntArray(arr) {
    return true
  }
  returns true  / True if every element in an array is an integer or a float with no decimals.
  returns true  / True if array is empty.
  returns false / False for every other input. */

  // function isIntArray(arr) {
  //   if (!Array.isArray(arr)) return false;
  //   return arr.every(e => e % 1 === 0 && e !== null && e === +e);
  // }

  // const isIntArray = arr => arr ? arr.every(e => e === ~~e) : false;
  // const isIntArray = arr => !!arr && arr.every(Number.isInteger);
  const isIntArray = arr => (arr || ['']).every(e => ~~e === e);

  // console.log(isIntArray(['-1']));
  // console.log(~~1.5);( = 1)
}
{
  /** 6 kyu  Function Composition
  Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well here, but this is my explanation, in simple mathematical notation:
  
  f3 = compose( f1 f2 )
     Is equivalent to...
  f3(a) = f1( f2( a ) )
  Your task is to create a compose function to carry out this task, which will be passed two functions or lambdas. Ruby functions will be passed, and should return, either a proc or a lambda. Remember that the resulting composed function may be passed multiple arguments!
  
  compose(f , g)(x)
  => f( g( x ) ) */

  const compose = function (f, g) {
    return (...args) => f(g(...args));
  };

  // const compose = (f, g) => (...args) => f(g(...args));
}
{
  /** 7 kyu  Dominant array elements
  An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:
  
  solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
  solve([5,4,3,2,1]) = [5,4,3,2,1]
  
  Notice that the last element is always included. All numbers will be greater than 0. */

  // function solve(arr, ar = []) {
  //   const [last] = arr.slice(-1);
  //   const max = Math.max(...arr);
  //   const i = arr.lastIndexOf(max);
  //   arr = arr.slice(i + 1);

  //   return arr.length < 1 ? ar = [...ar, last] : solve(arr, ar = [...ar, max]);
  // }

  // const solve = arr => arr.filter((e, i) => arr.slice(i + 1).every(el => e > el));
  const solve = arr => arr.filter((e, i) => e > Math.max(...arr.slice(i + 1)));

  // console.log(solve([104, 18, 37, 9, 36, 47, 28]));
}
{
  /** 7 kyu  Consecutive letters
  In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.
  
  Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.
  
  For example: 
  solve("abc") = True, because it contains a,b,c
  solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
  solve("dabc") = True, because it contains a, b, c, d
  solve("abbc") = False, because b does not occur once.
  solve("v") = True
  All inputs will be lowercase letters. */

  // const solve = s => {
  //   s = [...s].sort();
  //   return s.slice(1).every((e, i) => Math.abs(e.charCodeAt() - s.join('').charCodeAt(i)) === 1);
  // };

  // const solve = s => (s => s.slice(1).every((e, i) => Math.abs(e.charCodeAt() - s.join('').charCodeAt(i)) === 1))([...s].sort());
  // const solve = s => (s => s.slice(1).every((e, i) => e.charCodeAt() - s.join('').charCodeAt(i) === 1))([...s].sort());
  // const solve = s => 'abcdefghijklmnopqrstuvwxyz'.includes([...s].sort().join(''));
  // const solve = s => RegExp([...s].sort().join('')).test('abcdefghijklmnopqrstuvwxyz');
  // const solve = s => (s => (s[s.length - 1].charCodeAt() - s[0].charCodeAt() + 1) / s.length === 1)([...s].sort());
  const solve = s =>
    (w =>
      w.length === new Set(w).size
        ? !((w.charCodeAt(w.length - 1) - w.charCodeAt() + 1) / w.length - 1)
        : false)([...s].sort().join(''));

  // console.log(solve("svtgqezhhwiotmphoydihfr"));
}
{
  const factorial = n => (n < 3 ? (n ? n : 1) : n * factorial(--n));
  // console.log(factorial(4));
}
{
  /** 5 kyu  Simple fraction to mixed number converter
  Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:
  
  [sign]a b/c
  
  where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).
  
  If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.
  
  Division by zero should raise an error (preferably, the standard zero division error of your language).
  
  Value ranges
  -10 000 000 < x < 10 000 000
  -10 000 000 < y < 10 000 000
  Examples
  Input: 42/9, expected result: 4 2/3.
  Input: 6/3, expedted result: 2.
  Input: 4/6, expected result: 2/3.
  Input: 0/18891, expected result: 0.
  Input: -10/7, expected result: -1 3/7.
  Inputs 0/0 or 3/0 must raise a zero division error.
  Note
  Make sure not to modify the input of your function in-place, it is a bad practice.     */

  function mixedFraction(s) {
    const [a, b] = s.split('/');
    if (a === '0' || '-0') return 0;
    const integer = (a - (a % b)) / b;
    const fractions = [a % b, +b].join('/').replace('-', '');

    // return fractions;

    // s = s.replace('/', '%');
    // return parseInt(eval(s));
    // (eval(s) ^ 0).toFixed(0)+;
  }
  // console.log(mixedFraction('-0/7'));
}
{
  /** 7 kyu  Filter unused digits
  Given a varying number of integer arguments, return the digits that are not present in any of them.
  
  Example:  
  [12, 34, 56, 78]  =>  "09"
  [2015, 8, 26]     =>  "3479"
  Note: the digits in the resulting string should be sorted. */

  // function unusedDigits(...args) {
  //   return '0123456789'.split('').filter(el => !args.map(e => (e + '').split('')).flat().includes(el)).join('');
  // }

  // const unusedDigits = (...args) => '0123456789'.split('').filter(el => !args.map(e => (e + '').split('')).flat().includes(el)).join('');
  const unusedDigits = (...args) =>
    '0123456789'
      .split('')
      .filter(el => !args.join('').includes(el))
      .join('');
  // const unusedDigits = (...args) => '0123456789'.replace(RegExp(`[${args.join('')}]`, 'g'), '');

  // console.log(unusedDigits(12, 34, 56, 78));
}

{
  const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    // Change code below this line
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Change code above this line
  };

  customer.setDiscount(0.15);
  // console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, 'Steak');
  // console.log(customer.getBalance()); // 19750
  // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

  const historyService = {
    orders: [
      { email: 'jacob@hotmail.com', dish: 'Burrito' },
      { email: 'solomon@topmail.net', dish: 'Burger' },
      { email: 'artemis@coldmail.net', dish: 'Pizza' },
      { email: 'solomon@topmail.net', dish: 'Apple pie' },
      { email: 'jacob@hotmail.com', dish: 'Taco' },
    ],
    // Change code below this line
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(' - ');
    },
    getEmails() {
      const emails = this.orders.map(order => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
    // Change code above this line
  };

  class Car {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    getPrice() {
      return this.price;
    }
    changePrice(newPrice) {
      this.price = newPrice;
    }
  }

  class Storage {
    #items;

    constructor(items) {
      this.#items = items;
    }
    getItems() {
      return this.#items;
    }
    addItem(newItem) {
      this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
      this.#items.splice(this.#items.indexOf(itemToRemove), 1);
    }
  }

  class StringBuilder {
    #value;

    constructor(initialValue) {
      this.#value = initialValue;
    }
    getValue() {
      return this.#value;
    }
    padEnd(str) {
      this.#value += str;
    }
    padStart(str) {
      this.#value = str + this.#value;
    }
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
    }
  }
}

{
  class Car {
    static MAX_PRICE = 50000;

    #brand;
    #model;
    #price;

    static checkPrice(price) {
      return price > Car.MAX_PRICE
        ? 'Error! Price exceeds the maximum'
        : 'Success! Price is within acceptable limits';
    }

    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }
    get brand() {
      return this.#brand;
    }
    set brand(newBrand) {
      this.#brand = newBrand;
    }
    get model() {
      return this.#model;
    }
    set model(newModel) {
      this.#model = newModel;
    }
    get price() {
      return this.#price;
    }
    set price(newPrice) {
      newPrice > Car.MAX_PRICE ? this.#price : (this.#price = newPrice);
    }
  }

  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });

  // console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
  // console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
}

{
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }

  class Admin extends User {
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
      this.blacklistedEmails = [];
    }

    static AccessLevel = {
      BASIC: 'basic',
      SUPERUSER: 'superuser',
    };
    blacklist(email) {
      this.blacklistedEmails.push(email);
    }
    isBlacklisted(email) {
      return this.blacklistedEmails.includes(email);
    }
  }

  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  // console.log(mango.email); // "mango@mail.com"
  // console.log(mango.accessLevel); // "superuser"

  // mango.blacklist("poly@mail.com");
  // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  // console.log(mango.isBlacklisted("mango@mail.com")); // false
  // console.log(mango.isBlacklisted("poly@mail.com")); // true
}

{
  /** 7 kyu  Return a string's even characters.
  Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".
  
  For example:
  
  "abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
  "a"             --> "invalid string" */

  // function evenChars(string) {
  //   return (string.length < 2 || string.length > 100) ? "invalid string" : string.split('').filter((e, i, ar) => i % 2);
  // }

  const evenChars = string =>
    string.length < 2 || string.length > 100
      ? 'invalid string'
      : string.split('').filter((e, i) => i % 2);

  // console.log(evenChars("abcdefghijklm"));
}

{
  /** 7 kyu  Double Every Other
  452192% of 7232,882 of 7,074Adam-Morris
  Write a function that doubles every second integer in a list, starting from the left.
    Example:
  
  For input array/list :
  
  [1,2,3,4]
  the function should return :
  
  [1,4,3,8]   */

  // function doubleEveryOther(a) {
  //   return a.map((e, i) => i % 2 ? 2 * e : e);
  // }

  // const doubleEveryOther = a => a.map((e, i) => i % 2 ? 2 * e : e);
  const doubleEveryOther = a => a.map((e, i) => ((i % 2) + 1) * e);

  // console.log(doubleEveryOther([1, 2, 3, 4]));
}
{
  /** 6 kyu  Clocky Mc Clock-Face
  Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
  
  And because the local council has lost most of our tax money to an elaborate email scam there are no funds to fix the clock properly.
  
  Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!
  
  What a bunch of cheapskates!
  
  Can you do it?
  
  Kata
  Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.
  
  Examples
  12:00 = 0 degrees
  
  03:00 = 90 degrees
  
  06:00 = 180 degrees
  
  09:00 = 270 degrees
  
  12:00 = 360 degrees
  
  Notes
  0 <= angle <= 360
  
  Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.
  
  3 o'clock is 03:00, not 15:00
  7 minutes past midnight is 12:07
  7 minutes past noon is also 12:07   */

  // const whatTimeIsIt = function (angle) {
  //   let h = angle < 30 ? '12' : (angle / 30 ^ 0) + '';
  //   h.length < 2 ? h = '0' + h : h;
  //   let m = '0' + ((angle / 30 % 1) * 60).toFixed(2) ^ 0;
  //   (m + '').length < 2 ? m = '0' + m : m;
  //   return `${h + ':' + m}`;
  // };

  // const whatTimeIsIt = function (angle) {
  //   let h = angle < 30 ? '12' : (angle / 30 ^ 0) + '';
  //   h.length < 2 ? h = '0' + h : h;
  //   let m = ((angle / 30 % 1) * 60).toFixed(2) ^ 0;
  //   m < 10 ? m = '0' + m : m;
  //   return `${h + ':' + m}`;
  // };

  const whatTimeIsIt = function (angle) {
    let h = angle < 30 ? '12' : ((angle / 30) ^ 0) + '';
    h.length < 2 ? (h = '0' + h) : h;
    let m = (((angle / 30) % 1) * 60).toFixed(2) ^ 0;
    m < 10 ? (m = '0' + m) : m;
    return h + ':' + m;
  };
  // console.log(whatTimeIsIt(31));
}
{
  /** 7 kyu  What dominates your array?
  A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
  For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
  The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
  Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.   */

  // function dominator(arr) {
  //   const res = [...new Set(arr)].map(e => [e, arr.filter(el => el === e).length]);
  //   const max = Math.max(...res.map(e => e[1]));
  //   return max > arr.length / 2 ? res.find(e => e[1] === max)[0] : -1;
  // } /** time out */

  // function dominator(arr) {
  //   const res = [...new Set(arr)].map(e => [e, arr.filter(el => el === e).length]).sort((a, b) => b[1] - a[1])[0];
  //   return res[1] > arr.length / 2 ? res[0] : -1;
  // } /** time out */
  function dominator(arr) {}
  // console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));
}
{
  class Animal {
    name = 'Coppy';
  }

  class Cat extends Animal {
    speak() {
      return this.name + ` meows.`;
    }
  }
  const cat = new Cat();
  // console.log(cat.speak());
}
{
  /** 8 kyu  Add new item (collections are passed by reference)
  Past Solutions
  Add an item to the list:
  
  AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)
  
  In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
  
  P.S. You have to create a new list and add a new item to that. (This Kata is originally designed for C# language and it shows that adding a new item to the input list is not going to work, even though the parameter is passed by value, but the value is poining to the reference of list and any change on parameter will be seen by caller) */

  function addExtra(listOfNumbers) {
    return [...listOfNumbers, 34];
  }
}
{
  /** 8 kyuFilter out the geese
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated. */

  function gooseFilter(birds) {
    const geese = [
      'African',
      'Roman Tufted',
      'Toulouse',
      'Pilgrim',
      'Steinbacher',
    ];
    return birds.filter(e => !geese.includes(e));
  }
}
{
  /** 7 kyu  Odder Than the Rest
  Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.
  
  This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.
  
  Examples:
  
  oddOne([2,4,6,7,10]) // => 3
  oddOne([2,16,98,10,13,78]) // => 4
  oddOne([4,-8,98,-12,-7,90,100]) // => 4
  oddOne([2,4,6,8]) // => -1   */

  // function oddOne(arr) {
  //   return arr.indexOf(arr.find(e => e % 2));
  // }

  // const oddOne = arr => arr.indexOf(arr.find(e => e % 2));
  // const oddOne = arr => arr.findIndex(e => e % 2);
  // const oddOne = arr => (odd => arr.findIndex(odd))(e => Boolean(e & 1));
  // const oddOne = arr => (odd => arr.findIndex(odd))(e => e & 1);
  const oddOne = (arr, odd = e => e & 1) => arr.findIndex(odd);

  // console.log(oddOne([4, -8, 98, -12, -7, 90, 100]));
}

{
  /**    6 kyu  Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
  You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
  
  Given the following input array:
  
  var list1 = [
    { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ];
  
  write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:
  
  [
    { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
  ]
  
  Explanation of the above:
  
      Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
      Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
  
  Notes:
  
      Preserve the order of the original list.
      Return an empty array [] if there is no developer with an "odd" name.
      The input array and first names will always be valid and formatted as in the example above. */

  const list1 = [
    {
      firstName: 'Aba',
      lastName: 'N.',
      country: 'Ghana',
      continent: 'Africa',
      age: 21,
      language: 'Python',
    },
    {
      firstName: 'Abb',
      lastName: 'O.',
      country: 'Israel',
      continent: 'Asia',
      age: 39,
      language: 'Java',
    },
  ];

  // function findOddNames(list) {
  //   return list.filter(
  //     ({ firstName }) =>
  //       [...firstName].reduce((res, e) => res + e.charCodeAt(), 0) % 2,
  //   );
  // }

  // const findOddNames = list =>
  //   list.filter(
  //     ({ firstName }) =>
  //       [...firstName].reduce((res, e) => res + e.charCodeAt(), 0) % 2,
  //   );

  const findOddNames = list =>
    list.filter(
      ({ firstName }) =>
        eval([...firstName].map(e => e.charCodeAt()).join('+')) % 2,
    );

  // console.log(findOddNames(list1));
}

{
  /** 7 kyu  Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe 
   * You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

    The format of the strings will always be Europe and JavaScript.
    All data will always be valid and uniform as in the example above.  */

  const list1 = [
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'JavaScript',
    },
    {
      firstName: 'Maia',
      lastName: 'S.',
      country: 'Tahiti',
      continent: 'Oceania',
      age: 28,
      language: 'JavaScript',
    },
    {
      firstName: 'Shufen',
      lastName: 'L.',
      country: 'Taiwan',
      continent: 'Asia',
      age: 35,
      language: 'HTML',
    },
    {
      firstName: 'Sumayah',
      lastName: 'M.',
      country: 'Tajikistan',
      continent: 'Asia',
      age: 30,
      language: 'CSS',
    },
  ];

  // function countDevelopers(list) {
  //   return list.filter(
  //     e => e.continent === 'Europe' && e.language === 'JavaScript',
  //   ).length;
  // }

  // const countDevelopers = list =>
  //   list.filter(e => e.continent === 'Europe' && e.language === 'JavaScript')
  //     .length;

  // const countDevelopers = list =>
  //   list.filter(
  //     ({ continent, language }) =>
  //       continent === 'Europe' && language === 'JavaScript',
  //   ).length;

  const countDevelopers = list =>
    list.reduce(
      (count, e) =>
        e.continent === 'Europe' && e.language === 'JavaScript'
          ? count + 1
          : count,
      0,
    );

  // console.log(countDevelopers(list1));
}

{
  /** 7 kyu    Coding Meetup #2 - Higher-Order Functions Series - Greet developer
   You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?   */

  const list1 = [
    {
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python',
    },
    {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
    },
  ];

  // function greetDevelopers(list) {
  //   return list.map(
  //     d =>
  //       (d = {
  //         ...d,
  //         greeting: `Hi ${d.firstName}, what do you like the most about ${d.language}?`,
  //       }),
  //   );
  // }

  const greetDevelopers = list =>
    list.map(
      d =>
        (d = {
          ...d,
          greeting: `Hi ${d.firstName}, what do you like the most about ${d.language}?`,
        }),
    );

  // console.log(greetDevelopers(list1));

  /** 7 kyu  Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming? 
    You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

    true if at least one Ruby developer has signed up; or
    false if there will be no Ruby developers.   */

  // function isRubyComing(list) {
  //   return Boolean(list.find(d => d.language === 'Ruby'));
  // }

  // const isRubyComing = list => Boolean(list.find(d => d.language === 'Ruby'));
  // const isRubyComing = list => list.some(d => d.language === 'Ruby');
  const isRubyComing = list => JSON.stringify(list).includes('Ruby');

  // console.log(isRubyComing(list1));

  /** 7 kyu  Coding Meetup #4 - Higher-Order Functions Series 
   Find the first Python developer You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
Your task is to return one of the following strings:

    < firstName here >, < country here > of the first Python developer who has signed up; or
    There will be no Python developers if no Python developer has signed up.                    */

  // function getFirstPython(list) {
  //   const d = list.find(d => d.language === 'Python');
  //   return d
  //     ? `${d.firstName}, ${d.country}`
  //     : 'There will be no Python developers';
  // }

  const getFirstPython = list =>
    (d =>
      d
        ? `${d.firstName}, ${d.country}`
        : 'There will be no Python developers')(
      list.find(d => d.language === 'Python'),
    );

  // console.log(getFirstPython(list1));
}

{
  /**   7 kyu  Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
  You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) representing data about developers who have signed up to attend the next coding meetup that you are organising.
  
  Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) which includes the count of each coding language represented at the meetup.
  Notes:

    The order of the languages in the object does not matter.
    The count value should be a valid number.
    The input array will always be valid and formatted as in the example above.     */

  const list1 = [
    {
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'C',
    },
    {
      firstName: 'Anna',
      lastName: 'R.',
      country: 'Liechtenstein',
      continent: 'Europe',
      age: 52,
      language: 'JavaScript',
    },
    {
      firstName: 'Ramon',
      lastName: 'R.',
      country: 'Paraguay',
      continent: 'Americas',
      age: 29,
      language: 'Ruby',
    },
    {
      firstName: 'George',
      lastName: 'B.',
      country: 'England',
      continent: 'Europe',
      age: 81,
      language: 'C',
    },
  ];

  // function countLanguages(list) {
  //   const langSet = new Set(list.map(({ language }) => language));
  //   return [...langSet].reduce(
  //     (res, l) =>
  //       (res = {
  //         ...res,
  //         [l]: list.filter(({ language }) => language === l).length,
  //       }),
  //     {},
  //   );
  // }

  const countLanguages = list =>
    [...new Set(list.map(({ language }) => language))].reduce(
      (res, l) =>
        (res = {
          ...res,
          [l]: list.filter(({ language }) => language === l).length,
        }),
      {},
    );

  // console.log(countLanguages(list1));
}

{
  /** 7 kyu  Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language? 
   * You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return either:

    true if all developers in the list code in the same language; or
    false otherwise.

// For example, given the following input array:   */

  const list1 = [
    {
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'JavaScript',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'JavaScript',
    },
    {
      firstName: 'Hanna',
      lastName: 'L.',
      country: 'Hungary',
      continent: 'Europe',
      age: 65,
      language: 'JavaScript',
    },
  ];

  /** your function should return true.

Notes:

    The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
    The input array will always be valid and formatted as in the example above. */

  // function isSameLanguage(list) {
  //   return list.every(({ language }) => language === list[0].language);
  // }

  // const isSameLanguage = list =>
  //   list.every(({ language }) => language === list[0].language);

  const isSameLanguage = list =>
    new Set(list.map(({ language }) => language)).size === 1;

  // console.log(isSameLanguage(list1));
}
{
  /** 
6 kyu  Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

For example, given the following input array:  */

  const list1 = [
    {
      firstName: 'Gabriel',
      lastName: 'X.',
      country: 'Monaco',
      continent: 'Europe',
      age: 49,
      language: 'PHP',
    },
    {
      firstName: 'Odval',
      lastName: 'F.',
      country: 'Mongolia',
      continent: 'Asia',
      age: 38,
      language: 'Python',
    },
    {
      firstName: 'Emilija',
      lastName: 'S.',
      country: 'Lithuania',
      continent: 'Europe',
      age: 19,
      language: 'Python',
    },
    {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      continent: 'Asia',
      age: 49,
      language: 'PHP',
    },
  ];

  /* your function should return the following array:

[
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]

Notes:    The input array will always be valid and formatted as in the example above and will never be empty.  */

  // function findSenior(list) {
  //   return list.filter(
  //     ({ age }) => age === Math.max(...list.map(({ age }) => age)),
  //   );
  // }

  const findSenior = list =>
    list.filter(({ age }) => age === Math.max(...list.map(({ age }) => age)));

  // console.log(findSenior(list1));
}
{
  /**   6 kyu  Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
  You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
  
  Your task is to return:
  
      true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
      false otherwise.
  
  For example, given the following input array: */

  const list1 = [
    {
      firstName: 'Fatima',
      lastName: 'A.',
      country: 'Algeria',
      continent: 'Africa',
      age: 25,
      language: 'JavaScript',
    },
    {
      firstName: 'Agustín',
      lastName: 'M.',
      country: 'Chile',
      continent: 'Americas',
      age: 37,
      language: 'C',
    },
    {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 39,
      language: 'Ruby',
    },
    {
      firstName: 'Laia',
      lastName: 'P.',
      country: 'Andorra',
      continent: 'Europe',
      age: 55,
      language: 'Ruby',
    },
    {
      firstName: 'Oliver',
      lastName: 'Q.',
      country: 'Australia',
      continent: 'Oceania',
      age: 65,
      language: 'PHP',
    },
  ];

  /** your function should return true as there is at least one developer from the required 5 geographic zones.
  
  Notes:
  
      The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.   */

  // const allContinents = function (list) {
  //   return new Set(list.map(e => e.continent)).size === 5;
  // };

  // const allContinents = list => new Set(list.map(e => e.continent)).size === 5;
  const allContinents = list =>
    list.map(e => e.continent).filter((e, i, ar) => ar.indexOf(e) === i)
      .length === 5;

  // console.log(allContinents(list1));
}
{
  /** 6 kyu  Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
Your task is to return:

    true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
    false otherwise.

For example, given the following input array: */

  var list1 = [
    {
      firstName: 'Harry',
      lastName: 'K.',
      country: 'Brazil',
      continent: 'Americas',
      age: 19,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 29,
      language: 'JavaScript',
    },
    {
      firstName: 'Jing',
      lastName: 'X.',
      country: 'China',
      continent: 'Asia',
      age: 39,
      language: 'Ruby',
    },
    {
      firstName: 'Noa',
      lastName: 'A.',
      country: 'Israel',
      continent: 'Asia',
      age: 40,
      language: 'Ruby',
    },
    {
      firstName: 'Andrei',
      lastName: 'E.',
      country: 'Romania',
      continent: 'Europe',
      age: 59,
      language: 'C',
    },
    {
      firstName: 'Maria',
      lastName: 'S.',
      country: 'Peru',
      continent: 'Americas',
      age: 60,
      language: 'C',
    },
    {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 75,
      language: 'Python',
    },
    {
      firstName: 'Chloe',
      lastName: 'K.',
      country: 'Guernsey',
      continent: 'Europe',
      age: 88,
      language: 'Ruby',
    },
    {
      firstName: 'Viktoria',
      lastName: 'W.',
      country: 'Bulgaria',
      continent: 'Europe',
      age: 98,
      language: 'PHP',
    },
    {
      firstName: 'Piotr',
      lastName: 'B.',
      country: 'Poland',
      continent: 'Europe',
      age: 128,
      language: 'JavaScript',
    },
  ];

  /** your function should return true as there is at least one developer from each age group.
Notes:
    The input array will always be valid and formatted as in the example above.
    Age is represented by a number which can be any positive integer up to 199. */

  // function isAgeDiverse(list) {
  //   return (arr =>
  //     Math.max(...arr) > 9 &&
  //     arr.includes(1) &&
  //     arr.includes(2) &&
  //     arr.includes(3) &&
  //     arr.includes(4) &&
  //     arr.includes(5) &&
  //     arr.includes(6) &&
  //     arr.includes(7) &&
  //     arr.includes(8) &&
  //     arr.includes(9))(list.map(d => (d.age / 10) ^ 0));
  // }

  const isAgeDiverse = list =>
    (arr =>
      Math.max(...arr) > 9 &&
      arr.includes(1) &&
      arr.includes(2) &&
      arr.includes(3) &&
      arr.includes(4) &&
      arr.includes(5) &&
      arr.includes(6) &&
      arr.includes(7) &&
      arr.includes(8) &&
      arr.includes(9))(list.map(d => (d.age / 10) ^ 0));

  // console.log(isAgeDiverse(list1));
}
{
  /** 
  6 kyu
  Coding Meetup #10 - Higher-Order Functions Series - Create usernames
  505194% of 5753,311 of 3,313PiotrBerebecki
  
      JavaScript
      Node v8.1.3
  
          VIM
          EMACS
  
  Instructions
  Output
  
  Given the following input array: */

  const list1 = [
    {
      firstName: 'Emily',
      lastName: 'N.',
      country: 'Ireland',
      continent: 'Europe',
      age: 30,
      language: 'Ruby',
    },
    {
      firstName: 'Nor',
      lastName: 'E.',
      country: 'Malaysia',
      continent: 'Asia',
      age: 20,
      language: 'Clojure',
    },
  ];

  // write a function that adds the username property to each object in the input array:

  [
    {
      firstName: 'Emily',
      lastName: 'N.',
      country: 'Ireland',
      continent: 'Europe',
      age: 30,
      language: 'Ruby',
      username: 'emilyn1990',
    },
    {
      firstName: 'Nor',
      lastName: 'E.',
      country: 'Malaysia',
      continent: 'Asia',
      age: 20,
      language: 'Clojure',
      username: 'nore2000',
    },
  ];

  /** The value of the username property is composed by concatenating:
  
      firstName in lower-case;
      first letter of the lastName in lower-case; and
      the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
  
  Notes:
  
      The input array will always be valid and formatted as in the example above.
      Age is represented by a number which can be any positive integer.
      Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
      Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter. */

  // function addUsername(list) {
  //   return list.map(
  //     d =>
  //       (d = {
  //         ...d,
  //         username:
  //           (d.firstName + d.lastName[0]).toLowerCase() +
  //           (new Date().getFullYear() - d.age),
  //       }),
  //   );
  // }

  const addUsername = list =>
    list.map(
      d => (
        (d.username =
          (d.firstName + d.lastName[0]).toLowerCase() +
          (new Date().getFullYear() - d.age)),
        d
      ),
    );

  // console.log(addUsername(list1));
}
{
  /**  7 kyu  Coding Meetup #11 - Higher-Order Functions Series - Find the average age
You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising. 
write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

Notes:
    The input array will always be valid and formatted as in the example above.
    Age is represented by a number which can be any positive integer. */

  const list1 = [
    {
      firstName: 'Maria',
      lastName: 'Y.',
      country: 'Cyprus',
      continent: 'Europe',
      age: 30,
      language: 'Java',
    },
    {
      firstName: 'Victoria',
      lastName: 'T.',
      country: 'Puerto Rico',
      continent: 'Americas',
      age: 70,
      language: 'Python',
    },
  ];

  // function getAverageAge(list) {
  //   return Math.round(list.reduce((av, e) => av + e.age, 0) / list.length);
  // }

  // const getAverageAge = list =>
  //   Math.round(list.reduce((av, e) => av + e.age, 0) / list.length);

  const getAverageAge = list =>
    (a => Math.round(a))(list.reduce((av, e) => av + e.age, 0) / list.length);

  // console.log(getAverageAge(list1));
}
{
  /** 
  6 kyu  Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
  You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.
  
  Your task is to return either:
  
      true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
      false otherwise.  

  your function should return false as the number of JavaScript developers (3) is 3 times higher than the number of Python developers (1). It can't be more than 2 times higher to be regarded as language-diverse.
  
  Notes:
  
      The strings representing all three programming languages will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.
      The input array will always be valid and formatted as in the example above.
      Each of the 3 programming languages will always be represented. */

  const list1 = [
    {
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'Python',
    },
    {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'Ruby',
    },
    {
      firstName: 'Sou',
      lastName: 'B.',
      country: 'Japan',
      continent: 'Asia',
      age: 43,
      language: 'Ruby',
    },
    {
      firstName: 'Hanna',
      lastName: 'L.',
      country: 'Hungary',
      continent: 'Europe',
      age: 95,
      language: 'JavaScript',
    },
    {
      firstName: 'Jayden',
      lastName: 'P.',
      country: 'Jamaica',
      continent: 'Americas',
      age: 18,
      language: 'JavaScript',
    },
    {
      firstName: 'Joao',
      lastName: 'D.',
      country: 'Portugal',
      continent: 'Europe',
      age: 25,
      language: 'JavaScript',
    },
  ];

  // function isLanguageDiverse(list) {
  //   const set = list
  //     .map(d => d.language)
  //     .filter((l, i, arr) => arr.indexOf(l) === i);

  //   const max = Math.max(
  //     ...set.map(l => list.filter(e => e.language === l).length),
  //   );
  //   return (
  //     Math.max(
  //       ...set
  //         .map(l => list.filter(e => e.language === l).length)
  //         .map(e => max / e),
  //     ) <= 2
  //   );
  // }

  // function isLanguageDiverse(list) {
  //   const countArr = [...new Set(list.map(d => d.language))].map(
  //     l => list.filter(e => e.language === l).length,
  //   );
  //   return Math.max(...countArr) / Math.min(...countArr) <= 2;
  // }

  const isLanguageDiverse = list =>
    (arr => Math.max(...arr) / Math.min(...arr) <= 2)(
      [...new Set(list.map(d => d.language))].map(
        l => list.filter(e => e.language === l).length,
      ),
    );

  // console.log(isLanguageDiverse(list1));
}
{
  /** 7 kyu  Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:  */

  var list1 = [
    {
      firstName: 'Nikau',
      lastName: 'R.',
      country: 'New Zealand',
      continent: 'Oceania',
      age: 39,
      language: 'Ruby',
    },
    {
      firstName: 'Precious',
      lastName: 'G.',
      country: 'South Africa',
      continent: 'Africa',
      age: 22,
      language: 'JavaScript',
    },
    {
      firstName: 'Maria',
      lastName: 'S.',
      country: 'Peru',
      continent: 'Americas',
      age: 30,
      language: 'C',
    },
    {
      firstName: 'Agustin',
      lastName: 'V.',
      country: 'Uruguay',
      continent: 'Americas',
      age: 19,
      language: 'JavaScript',
    },
  ];

  // Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:

  [
    {
      firstName: 'Maria',
      lastName: 'S.',
      country: 'Peru',
      continent: 'Americas',
      age: 30,
      language: 'C',
    },
    {
      firstName: 'Agustin',
      lastName: 'V.',
      country: 'Uruguay',
      continent: 'Americas',
      age: 19,
      language: 'JavaScript',
    },
    {
      firstName: 'Precious',
      lastName: 'G.',
      country: 'South Africa',
      continent: 'Africa',
      age: 22,
      language: 'JavaScript',
    },
    {
      firstName: 'Nikau',
      lastName: 'R.',
      country: 'New Zealand',
      continent: 'Oceania',
      age: 39,
      language: 'Ruby',
    },
  ];

  /** Notes:
    The input array will always be valid and formatted as in the example above.
    The array does not include developers coding in the same language and sharing the same name.   */

  // function sortByLanguage(list) {
  //   return [...new Set(list.map(d => d.language))]
  //     .sort()
  //     .map(l =>
  //       list
  //         .filter(d => d.language === l)
  //         .sort((a, b) => a.firstName.localeCompare(b.firstName)),
  //     )
  //     .flat();
  // }

  // const sortByLanguage = list =>
  //   [...new Set(list.map(d => d.language))]
  //     .sort()
  //     .map(l =>
  //       list
  //         .filter(d => d.language === l)
  //         .sort((a, b) => a.firstName.localeCompare(b.firstName)),
  //     )
  //     .flat();

  const sortByLanguage = list =>
    list.sort((a, b) =>
      a.language === b.language
        ? a.firstName.localeCompare(b.firstName)
        : a.language.localeCompare(b.language),
    );

  // console.log(sortByLanguage(list1));
}
{
  /** 7 kyu  Scaling Squared Strings
You are given a string of n lines, each substring being n characters long. For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study the "horizontal" and the "vertical" scaling of this square of strings.

A k-horizontal scaling of a string consists of replicating k times each character of the string (except '\n').

    Example: 2-horizontal scaling of s: => "aabbccdd\neeffgghh\niijjkkll\nmmnnoopp"

A v-vertical scaling of a string consists of replicating v times each part of the squared string.

    Example: 2-vertical scaling of s: => "abcd\nabcd\nefgh\nefgh\nijkl\nijkl\nmnop\nmnop"

Function scale(strng, k, v) will perform a k-horizontal scaling and a v-vertical scaling.

Example: a = "abcd\nefgh\nijkl\nmnop"
scale(a, 2, 3) --> "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"

Printed:
abcd   ----->   aabbccdd
efgh            aabbccdd
ijkl            aabbccdd
mnop            eeffgghh
                eeffgghh
                eeffgghh
                iijjkkll
                iijjkkll
                iijjkkll
                mmnnoopp
                mmnnoopp
                mmnnoopp

Task:    Write function scale(strng, k, v) k and v will be positive integers. If strng == "" return "".      */

  // function scale(strng, k, n) {
  //   return strng === ''
  //     ? ''
  //     : strng
  //         .split('\n')
  //         .map(e => ([...e].map(el => el.repeat(k)).join('') + '\n').repeat(n))
  //         .join('')
  //         .slice(0, -1);
  // }

  // const scale = (strng, k, n) =>
  //   strng === ''
  //     ? ''
  //     : strng
  //         .split('\n')
  //         .map(e => ([...e].map(el => el.repeat(k)).join('') + '\n').repeat(n))
  //         .join('')
  //         .slice(0, -1);

  // const scale = (strng, k, n) =>
  //   strng === ''
  //     ? ''
  //     : strng
  //         .split('\n')
  //         .map(e => ([...e].map(el => el.repeat(k)).join('') + '\n').repeat(n))
  //         .join('')
  //         .trim();

  const scale = (strng, k, n) =>
    strng
      ? strng
          .split('\n')
          .map(e => ([...e].map(el => el.repeat(k)).join('') + '\n').repeat(n))
          .join('')
          .trim()
      : '';

  // console.log(scale('abcd\nefgh\nijkl\nmnop', 2, 3));
}
{
  /**   7 kyu  What dominates your array?
  A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
  For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
  The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
  Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.    */

  // function dominator(arr) {
  //   const res = [...new Set(arr)].map(e => [
  //     e,
  //     arr.filter(el => el === e).length,
  //   ]);
  //   const max = Math.max(...res.map(e => e[1]));
  //   return max > arr.length / 2 ? res.find(e => e[1] === max)[0] : -1;
  // }

  function dominator(arr) {
    const res = arr
      .filter((e, i, ar) => ar.indexOf(e) === i)
      .map(e => [e, arr.filter(el => el === e).length]);
    const max = Math.max(...res.map(e => e[1]));
    return max > arr.length / 2 ? res.find(e => e[1] === max)[0] : -1;
  }
  /** Execution Timed Out (12000 ms) */
  // console.log(dominator([1, 2, 3, 3, 4, 3, 5]));
}
{
  /** 8 kyuGrasshopper - Object syntax debug
Object debugging
While making a zork-type game, you create an object of rooms. Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.    */

  const rooms = {
    first: {
      description: 'This is the first room',
      items: {
        chair: 'The old chair looks comfortable',
        lamp: 'This lamp looks ancient',
      },
    },
    second: {
      description: 'This is the second room',
      items: {
        couch: 'This couch looks like it would hurt your back',
        table: 'On the table there is an unopened bottle of water',
      },
    },
  };
  // console.log(rooms);
}
{
  /**   7 kyu  Alphabetically ordered
  Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.
  Examples (input -> output)
  
      "kata" -> false ('a' comes after 'k')
      "ant" -> true (all characters are in alphabetical order)   */

  function alphabetic(s) {
    return s === [...s].sort().join('');
  }
}
{
  /** 7 kyu  Find all non-consecutive numbers
Your task is to find all the elements of an array that are non consecutive.

A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

Create a function named allNonConsecutive

E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.

E.g., for the above array the result should be:

[
  {i: 4, n:6},
  {i: 7, n:15}
]

If the whole array is consecutive or has one element then return an empty array.

The array elements will all be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive and/or negetive and the gap could be larger than one.  */

  // function allNonConsecutive(arr) {
  //   return arr
  //     .filter((e, i) => e - 1 - arr[i - 1])
  //     .map(e => ({ i: arr.indexOf(e), n: e }));
  // }

  const allNonConsecutive = arr =>
    arr
      .filter((e, i) => e - 1 - arr[i - 1])
      .map(e => ({ i: arr.indexOf(e), n: e }));

  // function allNonConsecutive(arr) {
  //   return arr
  //     .map((n, i, ar) => (n - 1 - ar[i - 1] ? { i, n } : null))
  //     .filter(e => e);
  // }

  // const allNonConsecutive = arr =>
  //   arr.map((n, i, ar) => (n - 1 - ar[i - 1] ? { i, n } : null)).filter(e => e);

  // console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 15, 16]));
}
{
  /**   7 kyu  Length and two values.
  Given an integer n and two other values, build an array of size n filled with these two values alternating.
  Examples  
  5, true, false     -->  [true, false, true, false, true]
  10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
  0, "one", "two"    -->  []      */

  // function alternate(n, firstValue, secondValue) {
  //   return Array(n)
  //     .fill('')
  //     .map((e, i) => [firstValue, secondValue][i % 2]);
  // }

  // const alternate = (n, firstValue, secondValue) =>
  //   Array(n)
  //     .fill('')
  //     .map((e, i) => [firstValue, secondValue][i % 2]);

  // const alternate = (n, firstValue, secondValue) =>
  //   [...Array(n)].map((e, i) => [firstValue, secondValue][i % 2]);

  const alternate = (n, firstValue, secondValue) => [
    ...Array.from({ length: n }, (e, i) => [firstValue, secondValue][i % 2]),
  ];

  // const alternate = (n, firstValue, secondValue) =>
  //   n ? [firstValue, ...alternate(--n, secondValue, firstValue)] : [];

  // console.log(alternate(3, true, false));
}
{
  /**   8 kyu  Neutralisation
  Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
  
      When positives and positives interact, they remain positive.
      When negatives and negatives interact, they remain negative.
      But when negatives and positives interact, they become neutral, and are shown as the number 0.
  
  Worked Example
  
  ("+-+", "+--") ➞ "+-0"
  # Compare the first characters of each string, then the next in turn.
  # "+" against a "+" returns another "+".
  # "-" against a "-" returns another "-".
  # "+" against a "-" returns "0".
  # Return the string of characters.
  
  Examples
  
  ("--++--", "++--++") ➞ "000000"
  
  ("-+-+-+", "-+-+-+") ➞ "-+-+-+"
  
  ("-++-", "-+-+") ➞ "-+00"
  
  Notes
  
  The two strings will be the same length.     */

  // function neutralise(s1, s2) {
  //   return [...s1]
  //     .map((e, i) =>
  //       (v => (v === '++' ? '+' : v === '--' ? '-' : '0'))(e + s2[i]),
  //     )
  //     .join('');
  // }

  // const neutralise = (s1, s2) =>
  //   [...s1]
  //     .map((e, i) =>
  //       (v => (v === '++' ? '+' : v === '--' ? '-' : '0'))(e + s2[i]),
  //     )
  //     .join('');

  // const neutralise = (s1, s2) => [...s1].map((e, i) => (e === s2[i] ? e : '0')).join('');

  const neutralise = (s1, s2) =>
    [...s1].reduce((s, e, i) => (e === s2[i] ? s + e : s + '0'), '');

  // console.log(neutralise('-++-', '-+-+'));
}
{
  /** 7 kyu  Multiples!
 Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, "Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, and "Miss" if it isn't divisible by any of them. Note: Your program should only return one value
Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom"   */

  // function multiple(x) {
  //   return !(x % 3) && !(x % 5)
  //     ? 'BangBoom'
  //     : !(x % 3)
  //     ? 'Bang'
  //     : !(x % 5)
  //     ? 'Boom'
  //     : 'Miss';
  // }

  // const multiple = x =>
  //   !(x % 15) ? 'BangBoom' : !(x % 3) ? 'Bang' : !(x % 5) ? 'Boom' : 'Miss';

  // const multiple = x =>
  //   (!(x % 3) ? 'Bang' : '') + (!(x % 5) ? 'Boom' : '') || 'Miss';

  // const multiple = x => (v => (v.length ? v : 'Miss'))((!(x % 3) ? 'Bang' : '') + (!(x % 5) ? 'Boom' : ''));

  const multiple = x => {
    const res = (!(x % 3) ? 'Bang' : '') + (!(x % 5) ? 'Boom' : '');
    switch (res.length > 0) {
      case true:
        return res;

      default:
        return 'Miss';
    }
  };

  // console.log(multiple(130));
}
{
  /** 
  7 kyu  Merge two arrays
  Write a function that combines two arrays by alternatingly taking elements from each array in turn.
  
  Examples:
  
  [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
  
  [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
  
  Points:
  
      The arrays may be of different lengths, with at least one character/digit.
      One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).   */

  // function mergeArrays(a, b) {
  //   return a.length < b.length
  //     ? a
  //         .map((e, i) => [e, b[i]])
  //         .flat()
  //         .concat(b.slice(a.length))
  //     : a
  //         .slice(0, b.length)
  //         .map((e, i) => [e, b[i]])
  //         .flat()
  //         .concat(a.slice(b.length));
  // }

  function mergeArrays(a, b) {
    return a.length === b.length
      ? a.reduce((res, e, i) => [...res, e, b[i]], [])
      : a.length < b.length
      ? a.reduce((res, e, i) => [...res, e, b[i]], []).concat(b.slice(a.length))
      : a
          .slice(0, b.length)
          .reduce((res, e, i) => [...res, e, b[i]], [])
          .concat(a.slice(b.length));
  }

  // console.log(mergeArrays([1, 2, 3, 6, 8, 5], ['a', 'b', 'c', 'd']));
}
{
  // function calcType(a, b, res) {
  //   return res === a + b
  //     ? 'addition'
  //     : res === a - b
  //     ? 'subtraction'
  //     : res === a / b
  //     ? 'division'
  //     : 'multiplication';
  // }

  // const calcType = (a, b, res) =>
  //   res === a + b
  //     ? 'addition'
  //     : res === a - b
  //     ? 'subtraction'
  //     : res === a / b
  //     ? 'division'
  //     : 'multiplication';

  // const calcType = (a, b, res) => {
  //   switch (res) {
  //     case a + b:
  //       return 'addition';
  //     case a - b:
  //       return 'subtraction';
  //     case a / b:
  //       return 'division';

  //     default:
  //       return 'multiplication';
  //   }
  // };

  // const calcType = (a, b, res) =>
  //   ({
  //     [a + b]: 'addition',
  //     [a - b]: 'subtraction',
  //     [a * b]: 'multiplication',
  //     [a / b]: 'division',
  //   }[res]);

  // const calcType = (a, b, res) =>
  //   a + b - res
  //     ? a - b - res
  //       ? a * b - res
  //         ? 'division'
  //         : 'multiplication'
  //       : 'subtraction'
  //     : 'addition';

  const calcType = (a, b, res) =>
    Object.entries({
      addition: a + b - res,
      subtraction: a - b - res,
      multiplication: a * b - res,
      division: a / b - res,
    }).find(e => !e[1])[0];

  // console.log(calcType(1, 2, -1));
}
{
  /** 7 kyuFix My Phone Numbers!
Fix My Phone Numbers
Oh thank goodness you're here! The last intern has completely ruined everything!

All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!

The Format
Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.

However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!

For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.

The Task
Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".    */

  // function isItANum(str) {
  //   return (e =>
  //     e.length === 11 && e.charAt() === '0' ? e : 'Not a phone number')(
  //     str.replace(/[^0-9]/g, ''),
  //   );
  // }

  // const isItANum = str =>
  //   (e => (e.length === 11 && e.charAt() === '0' ? e : 'Not a phone number'))(
  //     str.replace(/[^0-9]/g, ''),
  //   );

  // const isItANum = str =>
  //   (e => (e.match(/0\d{10}/) ? e : 'Not a phone number'))(
  //     str.replace(/\D/g, ''),
  //   );

  // const isItANum = (str, s = str.replace(/\D/g, '')) =>
  //   s.match(/0\d{10}/) ? s : 'Not a phone number';

  const isItANum = (str, s = str.replace(/\D/g, '')) =>
    /0\d{10}/.test(s) ? s : 'Not a phone number';

  // console.log(isItANum('S:)0207ERGQREG88349F82!efRF)'));
}
{
  /** 6 kyu  Round by 0.5 steps
Round any given number to the closest 0.5 step
I.E.
solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5

Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5   */

  // function solution(n) {
  //   return Math.round((n % Math.trunc(n)) * 2) / 2 + Math.trunc(n);
  // }

  // const solution = n => Math.round((n % Math.trunc(n)) * 2) / 2 + Math.trunc(n);

  // const solution = n => Math.round((n * 2) / 2);

  // const solution = n => Math.trunc(n) + (n % 1 < 0.25 ? 0 : n % 1 >= 0.75 ? 1 : 0.5);

  const solution = n => (2 * n).toFixed() / 2;

  // console.log(solution(4.75));
}
{
  /** 8 kyu  Potenciation
The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata */

  // function power(x, y) {
  //   return x ** y;
  // }

  const power = (x, y) => x ** y;

  // console.log(power(-1, 40));
}
{
  /**  7 kyu Vampire Numbers
Vampire Numbers

Our loose definition of Vampire Numbers can be described as follows:

6 * 21 = 126
# 6 and 21 would be valid 'fangs' for a vampire number as the 
# digits 6, 1, and 2 are present in both the product and multiplicands

10 * 11 = 110
# 110 is not a vampire number since there are three 1's in the
# multiplicands, but only two 1's in the product

Create a function that can receive two 'fangs' and determine if the product of the two is a valid vampire number.  */

  // const vampireTest = (a, b) =>
  //   [...String(a * b)].sort().join('') ===
  //   [...(a.toString() + b)].sort().join('');

  const ss = s => [...s].sort().join('');
  const vampireTest = (a, b) =>
    ss((a * b).toString()) === ss(a.toString() + b.toString());

  // console.log(vampireTest(6, 21));
}

function tankvol(h, d, vt, r = d / 2) {
  const halfAlfa = Math.acos((r - h) / r);
  const halfBase = r * Math.sin(halfAlfa);
  const res =
    ((r ** 2 * halfAlfa - halfBase * (r - h)) / (Math.PI * r ** 2)) * vt;
  return res ^ 0;
}
// console.log(tankvol(40, 120, 3500));

{
  function containAllRots(strng, arr) {
    if (typeof strng !== 'string') return false;
    const rots = [...strng].map(
      (e, I) => (strng = strng.slice(-1) + strng.slice(0, -1)),
    );
    const delta = arr.length - rots.length;
    rots.map(e => {
      const i = arr.indexOf(e);
      i >= 0 ? arr.splice(i, 1) : arr.push(false);
    });
    return !arr.includes(false) && arr.length === delta;
  }

  // console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
}
{
  /** 7 kyuFind the index of the second occurrence of a letter in a string
In this kata, you need to write a function that takes a string and a letter as input and then returns the index of the second occurrence of that letter in the string. If there is no such letter in the string, then the function should return -1. If the letter occurs only once in the string, then -1 should also be returned.

Examples:

secondSymbol('Hello world!!!','l')  --> 3
secondSymbol('Hello world!!!', 'A') --> -1   */

  // function secondSymbol(s, symbol) {
  //   return s.replace(symbol, '_').indexOf(symbol);
  // }

  // const secondSymbol = (s, symbol) => s.replace(symbol, '_').indexOf(symbol);

  const secondSymbol = (s, symbol) => s.indexOf(symbol, s.indexOf(symbol) + 1);

  // console.log(secondSymbol('Hello world!!!', 'l'));
}
{
  // const AmIAfraid = function (day, num) {
  //   const numbers = {
  //     Monday: num === 12,
  //     Tuesday: num > 95,
  //     Wednesday: num === 34,
  //     Thursday: num === 0,
  //     Friday: num % 2 === 0,
  //     Saturday: num === 56,
  //     Sunday: num === -666 || num === 666,
  //   };
  //   return numbers[day];
  // };

  // const AmIAfraid = (day, num) =>
  //   ({
  //     Monday: num === 12,
  //     Tuesday: num > 95,
  //     Wednesday: num === 34,
  //     Thursday: num === 0,
  //     Friday: num % 2 === 0,
  //     Saturday: num === 56,
  //     Sunday: num === -666 || num === 666,
  //   }[day]);

  const AmIAfraid = (day, num) =>
    (d =>
      ({
        Mo: num === 12,
        Tu: num > 95,
        We: num === 34,
        Th: num === 0,
        Fr: num % 2 === 0,
        Sa: num === 56,
        Su: 666 === Math.abs(num),
      }[d]))((day = day.slice(0, 2)));

  // console.log(AmIAfraid('Friday', 2));
}
{
  /** 7 kyu  Fizz Buzz Cuckoo Clock
Your story
You've always loved both Fizz Buzz katas and cuckoo clocks, and when you walked by a garage sale and saw an ornate cuckoo clock with a missing pendulum, and a "Beyond-Ultimate Raspberry Pi Starter Kit" filled with all sorts of sensors and motors and other components, it's like you were suddenly hit by a beam of light and knew that it was your mission to combine the two to create a computerized Fizz Buzz cuckoo clock!

You took them home and set up shop on the kitchen table, getting more and more excited as you got everything working together just perfectly. Soon the only task remaining was to write a function to select from the sounds you had recorded depending on what time it was:

Your plan
When a minute is evenly divisible by three, the clock will say the word "Fizz".
When a minute is evenly divisible by five, the clock will say the word "Buzz".
When a minute is evenly divisible by both, the clock will say "Fizz Buzz", with two exceptions:
On the hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo bird will come out and "Cuckoo" between one and twelve times depending on the hour.
On the half hour, instead of "Fizz Buzz", the clock door will open, and the cuckoo will come out and "Cuckoo" just once.
With minutes that are not evenly divisible by either three or five, at first you had intended to have the clock just say the numbers ala Fizz Buzz, but then you decided at least for version 1.0 to just have the clock make a quiet, subtle "tick" sound for a little more clock nature and a little less noise.
Your input will be a string containing hour and minute values in 24-hour time, separated by a colon, and with leading zeros. For example, 1:34 pm would be "13:34".

Your return value will be a string containing the combination of Fizz, Buzz, Cuckoo, and/or tick sounds that the clock needs to make at that time, separated by spaces. Note that although the input is in 24-hour time, cuckoo clocks' cuckoos are in 12-hour time.

Some examples
"13:34"       "tick"
"21:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
"11:15"       "Fizz Buzz"
"03:03"       "Fizz"
"14:30"       "Cuckoo"
"08:55"       "Buzz"
"00:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
"12:00"       "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"   */

  // function fizzBuzzCuckooClock(time) {
  //   const t = time.split(':');
  //   return !+t[1]
  //     ? 'Cuckoo '.repeat(+t[0] % 12).trim() || 'Cuckoo '.repeat(12).trim()
  //     : t[1] === '30'
  //     ? 'Cuckoo'
  //     : !(+t[1] % 15)
  //     ? 'Fizz Buzz'
  //     : !(+t[1] % 5)
  //     ? 'Buzz'
  //     : !(+t[1] % 3)
  //     ? 'Fizz'
  //     : 'tick';
  // }

  // const fizzBuzzCuckooClock = time =>
  //   (t =>
  //     !+t[1]
  //       ? 'Cuckoo '.repeat(+t[0] % 12).trim() || 'Cuckoo '.repeat(12).trim()
  //       : t[1] === '30'
  //       ? 'Cuckoo'
  //       : !(+t[1] % 15)
  //       ? 'Fizz Buzz'
  //       : !(+t[1] % 5)
  //       ? 'Buzz'
  //       : !(+t[1] % 3)
  //       ? 'Fizz'
  //       : 'tick')(time.split(':'));

  const fizzBuzzCuckooClock = time =>
    (([hs, ms]) =>
      !ms
        ? 'Cuckoo '.repeat(hs % 12).trim() || 'Cuckoo '.repeat(12).trim()
        : ms + '' === '30'
        ? 'Cuckoo'
        : !(ms % 15)
        ? 'Fizz Buzz'
        : !(ms % 5)
        ? 'Buzz'
        : !(ms % 3)
        ? 'Fizz'
        : 'tick')(time.split(':').map(e => +e));

  // const fizzBuzzCuckooClock = time => (([hs, ms]) => !ms ? Array(hs > 12 ? hs - 12 : hs || 12).fill('Cuckoo').join(' ') : ms + '' === '30'
  // ? 'Cuckoo' : !(ms % 15) ? 'Fizz Buzz' : !(ms % 5) ? 'Buzz' : !(ms % 3) ? 'Fizz' : 'tick')(time.split(':').map(e => +e));
  // console.log(fizzBuzzCuckooClock('24:00'));
}
{
  /** 7 kyu  C.Wars
A person's full name is usually composed of a first name, middle name and last name; however in some cultures 
(for example in South India) there may be more than one middle name.

Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). 
The initials must be uppercase. The last name of the person must appear in full, with its first letter in uppercase as well.

See the pattern below:

"code wars"            ---> "C.Wars"
"Barack hussein obama" ---> "B.H.Obama"
Names in the full name are separated by exactly one space (' ' ) ; without leading or trailing spaces.
 Names will always be lowercase, except optionally their first letter. */

  //  const initials = n =>
  // 	 (a =>
  // 		 a.map(e => e.at().toUpperCase()).join('.') + a[a.length - 1].slice(1))(
  // 		 n.split(' '),
  // 	 );

  // const initials = n =>
  //   (n = n.split(' ')).map(e => e.at().toUpperCase()).join('.') +
  //   n[n.length - 1].slice(1);

  const initials = n =>
    (n = n.split(' ')).map(e => e[0].toUpperCase()).join('.') +
    n.pop().slice(1);

  // console.log(initials('barack hussain Obama'));
}
{
  /**7 kyu  Ghostbusters (whitespace removal)
Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

Example:

"Sky scra per" -> "Skyscraper"
If the building contains no ghosts, return the string:

"You just wanted my autograph didn't you?"   */

  // function ghostBusters(building) {
  //   return building.split(' ').length > 1
  //     ? building.split(' ').join('')
  //     : "You just wanted my autograph didn't you?";
  // }

  const ghostBusters = building =>
    / /.test(building)
      ? building.replaceAll(' ', '')
      : "You just wanted my autograph didn't you?";

  // console.log(ghostBusters('Sky scra per'));
}
{
  /** 7 kyu  Hit Count
You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your companies software.
You have been tasked with adding an effect to this counter to make it more interesting.
Instead of just displaying the count value immediatley when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.
Task
As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.
Rules
The function will take one argument which will be a four character string representing hit count
The function must return a multi-dimensional array containing four inner arrays
The final value in each inner array must be the actual value to be displayed
Values returned in the array must be of the type number
Examples
counterEffect("1250") // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]] 
counterEffect("0050") // [[0],[0],[0,1,2,3,4,5],[0]] 
counterEffect("0000") // [[0],[0],[0],[0]]   */

  function counterEffect(hitCount) {
    return [...hitCount].map(e => Array.from({ length: +e + 1 }, (el, i) => i));
  }

  console.log(counterEffect('1250'));
}
