{ /** 7 kyu  Squares sequence
  Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]    */

  const squares = (x, n) => n > 0 ? [x, ...squares(x *= x, n - 1)] : [];
  console.log(squares(2, 5));
}


{  /**7 kyu  Factorial 
  In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
  Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).  */

  const factorial = (n, res = 1) => {
    if (n > 12 || n < 0) {
      throw new RangeError("The argument must be between 0 and 12.");
    }
    return n ? n * factorial(n - 1) : res;

    // for (n; n > 1; n -= 1) {
    //   res *= n;
    // }
    // return res;
  };
  // console.log(factorial(6));
}

{  /**  7 kyu  Factorial       Your task is to write function factorial.         */

  const factorial = n => n < 2 ? 1 : n * factorial(n - 1);
  // console.log(factorial(5));
}

{
  const sum1_n = (n) => n < 2 ? n : n + sum1_n(n - 1);
  console.log(sum1_n(12));
}