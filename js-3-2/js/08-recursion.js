
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
    /* 🥸🥸  The second factorial through recursion  🥸🥸   */

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
        return n === 1 ? a : a * pow(a, n - 1);
        // return n < 2 ? a : a * pow(a, n - 1);
    }
    // console.log(pow(11, 4));
    // console.log(pow(5, 5));
}

{
    function countDown(n) {
        if (n <= 1) {
            console.log(n);
            return n;
        }
        console.log(n, 'clg---before');
        countDown(n - 1);
        console.log(n, 'clg---after');
        return n;
    };

    // countDown(7);
}

{
    function factorial(n) {
        if (n === 1)
            return n;

        return n * factorial(n - 1);
    }

    // console.log(factorial(8));
}

{
    function pow(a, n) {
        if (n === 1)
            return a;
        return a * pow(a, n - 1);
    }
    // console.log(pow(3, 5))
}

{
    function countDown(n) {

        if (n <= 0) {
            console.log('it is done.');
            return n;
        };

        console.log(n);
        countDown(n - 1);
    }
    // countDown(11);
}

{
    function sumRange(n) {
        let total = 0;
        for (let i = n; i > 0; i -= 1) {
            total += i;
        }

        return total;
    }
    // console.log(sumRange(6));
    // console.log(sumRange(4));
}

{
    function sumRange(n, total = 0) {
        if (n <= 0) {
            return total;
        }
        return sumRange(n - 1, total + n);
    }
    console.log(sumRange(4, 0));
    console.log(sumRange(5));
    console.log(sumRange(5, 11));
}

