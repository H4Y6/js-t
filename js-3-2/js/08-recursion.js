/* 🥸🥸  recursion  🥸🥸   */
{
    function createRecursionExample(n) {
        console.log("n =", n);
        if (n <= 1) return;
        return createRecursionExample(n - 1);

        // return n <= 1 ? n : createRecursionExample(n - 1);
        // return n > 1 ? createRecursionExample(n - 1) : n;
    }
    // createRecursionExample(3);
}

{
    /* 🥸🥸  factorial through recursion  🥸🥸   */

    const factorial = function (n) {
        if (n === 1) return n;

        return n * factorial(n - 1);
    }

    // const result = factorial(5);
    // console.log(result);

    // console.log(factorial(4));
}

{
    /* 🥸🥸  The second factorial through recursion  🥸🥸   */

    const factorial = function (n) {
        console.log(n);
        if (n < 3) return n;
        const res = n * factorial(n - 1);

        console.log(`${n}! = ${res}`)
        return res;
    }

    // const result = factorial(5);
    // console.log(result);
}

{
    function factorial(n) {
        return n < 2 ? n : n * factorial(n - 1);
    };

    // console.log(factorial(7));
}

{
    function calculateFactorial(n) {
        if (n === 1)
            return n;

        console.log('n:', n, '---before')
        const result = n * calculateFactorial(n - 1);
        console.log('n:', n, 'result:', result);

        return result;
    }

    // const factorial = calculateFactorial(3);
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
        return n < 2 ? n : n * factorial(n - 1);
    }
    // console.log(factorial(6));
}

{
    function countDown(n) {
        if (n <= 0) {
            console.log("n =", n);
            return;
        }
        console.log(n, 'clg---before');
        countDown(n - 1);
        console.log(n, 'clg---after');
        return;
    };
    // countDown(7);
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

    function sumRangeRecursive(n, total = 0) {
        if (n <= 0) {
            return total;
        }
        return sumRangeRecursive(n - 1, total + n)

        // return n <= 0 ? total : sumRangeRecursive(n - 1, total + n);
    }
    // console.log(sumRangeRecursive(11));
}

{
    function factorial(n) {
        return n > 1 ? n * factorial(n - 1) : n;
    }
    // console.log(factorial(7));
}


{
    function estimateFactorial(n) {
        if (n < 2) return n;
        return n * estimateFactorial(n - 1);
    }
    // console.log(estimateFactorial(6));
}

{
    function pow(a, n) {
        let result = 1;
        if (n < 0) {
            for (let i = 0; i > n; i -= 1) {
                result /= a;
            }
            return result;
        } else {
            for (let i = 1; i <= n; i += 1) {
                result *= a;
            }
            return result;
        }
    }
    console.log(pow(2, 3))
    console.log(pow(2, 0))
    console.log(pow(2, -4))

    function powRecursive(x, n) {
        if (n === 0) return 1;
        if (n < 0) return 1 / x * pow(x, n + 1);
        return x * pow(x, n - 1);

        // return n > 1 ? x * pow(x, n - 1) : Math.pow(x, n)
    }
    // console.log(powRecursive(2, -2))
}
{
    function printChildrenRecursive(t) {
        if (t.children.length === 0) {
            return;
        }
        t.children.forEach(child => {
            console.log(child.name);
            printChildrenRecursive(child);
        });
    }

    const tree = {
        name: "Peter",
        children: [
            {
                name: "Tom",
                children: []
            },
            {
                name: "Ann",
                children: [
                    { name: "Sam", children: [] },
                    { name: "Dan", children: [] },
                ]
            },
        ],
    };
    // printChildrenRecursive(tree);
}