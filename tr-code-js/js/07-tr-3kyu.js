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
  console.log(amIWilson(467));
  console.log(getFactorial(467));
  console.log(isPrime(467));
}