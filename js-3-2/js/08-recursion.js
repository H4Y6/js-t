
{
    /* 🥸🥸  recursion  🥸🥸   */

    const recursionExample = function (n) {
        // console.log("n =", n)

        if (n === 1) return n;

        return recursionExample(n - 1);
    }

    const result = recursionExample(3);

    // console.log(result);
}

{
    /* 🥸🥸  factorial through recursion  🥸🥸   */

    const factorial = function (n) {
        if (n === 1) return n;

        return n * factorial(n - 1);
    }

    // const result = factorial(5);

    // console.log(result);
}

{
    /* 🥸🥸 second factorial through recursion  🥸🥸   */

    const factorial = function (n) {
        if (n === 1) return n;
        const res = n * factorial(n - 1);

        // console.log(`${n}! = ${res}`)
        return res;
    }

    const result = factorial(7);

    // console.log(result);
}

{
    function calculateFactorial(n) {
        if (n === 1)
            return n;

        // console.log('n:', n, '---before')
        const result = n * calculateFactorial(n - 1);
        // console.log('n:', n, 'result:', result);

        return result;
    }

    // const factorial = calculateFactorial(5);
    // console.log(factorial);
    // console.log(calculateFactorial(4));

    /*
    when n=4: factorial(4) =  4*factorial(4-1);
    when n=3: factorial(4) =  4*3*factorial(3-1);
    when n=2: factorial(4) =  4*3*2*factorial(2-1);
    when n=1: factorial(4) =  4*3*2;
    */
}

{
    const factorial = function (n) {
        return n === 1 ? n : n * factorial(n - 1);
        // return n < 2 ? n : n * factorial(n - 1);
    }
    // console.log(factorial(6));
}

{
    function pow(a, n) {
        // return n === 1 ? a : a * pow(a, n - 1);
        return n < 2 ? a : a * pow(a, n - 1);
    }
    console.log(pow(3, 4));
    console.log(pow(5, 4));
}