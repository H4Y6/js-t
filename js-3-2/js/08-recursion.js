
{
    /* 🥸🥸  recursion  🥸🥸   */

    // const recursionExample = function (n) {
    //     console.log("n =", n)

    //     if (n === 1) return n;

    //     return recursionExample(n - 1);
    // }

    // const result = recursionExample(3);

    // console.log(result);
}

{
    function createRecursionExample(n) {
        console.log("n = ", n);
        // if (n < 1) return;

        // return createRecursionExample(n - 1);

        return n < 1 ? n : createRecursionExample(n - 1);
    }
    // createRecursionExample(5);
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
    function recursionExample(n) {
        console.log("n = ", n);
        if (n <= 0) return "Let's go!";
        return recursionExample(n - 1);

        // return n < 1 ? "Hooray! Start!" : recursionExample(n - 1);
    }
    // console.log(recursionExample(4))
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
    // const factorial = function (n) {
    // return n === 1 ? n : n * factorial(n - 1);
    // return n < 2 ? n : n * factorial(n - 1);
    // }
    // console.log(factorial(6));
}

{
    // function pow(a, n) {
    //     return n === 1 ? a : a * pow(a, n - 1);
    // return n < 2 ? a : a * pow(a, n - 1);
}

{
    // function countDown(n) {
    //     if (n <= 1) {
    //         console.log(n);
    //         return n;
    //     }
    //     console.log(n, 'clg---before');
    //     countDown(n - 1);
    //     console.log(n, 'clg---after');
    //     return n;
    // };

    // countDown(7);
}

{
    //     function factorial(n) {
    //         if (n === 1)
    //             return n;

    //         return n * factorial(n - 1);
    //     }

    // console.log(factorial(8));
}

{
    // function pow(a, n) {
    //     if (n === 1)
    //         return a;
    //     return a * pow(a, n - 1);
    // }
    // console.log(pow(3, 5))
}

{
    // function countDown(n) {

    //     if (n <= 0) {
    //         console.log('it is done.');
    //         return n;
    //     };

    //     console.log(n);
    //     countDown(n - 1);
    // }
    // countDown(11);
}

{
    // function sumRange(n) {
    //     let total = 0;
    //     for (let i = n; i > 0; i -= 1) {
    //         total += i;
    //     }

    //     return total;
    // }
    // console.log(sumRange(6));
    // console.log(sumRange(4));
}

{
    // function sumRange(n, total = 0) {
    //     // if (n <= 0) return total;
    //     // return sumRange(n - 1, total + n);

    //     return n <= 0 ? total : sumRange(n - 1, total + n)
    // }
    // sumRange(3, 0)
    // sumRange(2, 3)
    // sumRange(1, 5)
    // sumRange(0, 6)

    // console.log(sumRange(4, 0));
    // console.log(sumRange(5, 5));
    // console.log(sumRange(5, 11));
    // console.log(sumRange(6));
}

// {
//     function countDown(n) {
//         for (let i = n; i >= 0; i -= 1) {
//             console.log(i);
//         }
//         console.log("It's done.");
//     }
//     countDown(4);
// }

{
    // const countDown = function (n) {
    //     if (n < 1) {
    //         console.log("Done.")
    //         return;
    //     }
    //     console.log(n);
    //     return countDown(n - 1);
    // }

    // function countDown(n) {
    //     for (let i = n; i > 0; i -= 1) {
    //         console.log(i);
    //     }
    //     console.log("Ok")
    // }

    function countDown(n) {
        if (n <= 0) {
            console.log(n);
            console.log("Ok");
            return n;
        }
        console.log(n)
        countDown(n - 1);
    }

    // countDown(3);
    // countDown(2);
    // countDown(1);
    // countDown(0);
    // return
    // return
    // return
    // return
}

{
    // const sumRange = function (n) {
    //     let total = 0;
    //     for (let i = n; i > 0; i -= 1) {
    //         total += i;
    //     }
    //     return total;
    // }

    function sumRange(n) {
        let total = 0;
        for (let i = n; i > 0; i -= 1) {
            total += i;
        }
        // console.log(total);
        return total;
    }
    // console.log(sumRange(5));
    // sumRange(4);
}

{
    // const sumRangeRecursive = function (n, total = 0) {
    //     if (n <= 0) {
    //         return total;
    //     }
    //     return sumRangeRecursive(n - 1, total + n);
    // }

    function sumRangeRecursive(n, total = 0) {
        // if (n <= 0) {
        //     console.log('Ok')
        //     return total;
        // }

        // total = sumRangeRecursive(n - 1, total + n);
        // return total;
        return n <= 0 ? total : sumRangeRecursive(n - 1, total + n);
    }

    // console.log(sumRangeRecursive(5));
}

{
    function factorial(n) {
        // if (n <= 1) return n;
        // return n * factorial(n - 1);

        return n <= 1 ? n : n * factorial(n - 1)
    }
    // console.log(factorial(7));
}

{
    const pow = function (a, n) {

        return (n === 1) ? a : a * pow(a, n - 1);
    }
    // console.log(pow(3, 6));
}

{
    const sumRangeRecursive = function (sum, n) {
        if (n < 0) {
            return sum
        }
        return sumRangeRecursive(sum + n, n - 1);
    }
    console.log(sumRangeRecursive(0, 6))
}