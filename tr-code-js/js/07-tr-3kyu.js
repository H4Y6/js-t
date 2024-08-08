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
  console.log(solve('u'));
  console.log(solve('chrononhotonthuooaos'));
}