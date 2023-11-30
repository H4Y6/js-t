{
    const copyInstance = function (instance) {
        if (Array.isArray(instance)) {
            return [...instance];
        }

        return { ...instance };
    };

    const array1 = [1, 4, 6, 5]
    const newArray = copyInstance(array1);
    // console.log(`Are they equal? ->  ${newArray === array1}`);
}

{
    // Поверхнева копія масиву:
    const users = [
        { name: 'Pit' },
        { name: 'Tit' },
    ];

    const newUsers = [...users];
    newUsers[0].name = 'Sam';

    // console.log(users === newUsers);
    // console.log(users, '---users');
    // console.log(newUsers, '---newUsers');
}

{
    const mergeArray = function (arr1, arr2) {
        return [...arr1, ...arr2];
    };

    // console.log(mergeArray([1, 3, 8], [2, 3, 9]));
}

{
    // const mathOperation = function (sign, ...restValues) {
    //         let result = 0;
    //         if (sign === '+') {
    //             for (const value of restValues) {
    //                 result += value;
    //             }

    //             return result;
    //         }

    //         if (sign === '-') {
    //             for (const value of restValues) {
    //                 result -= value;
    //             }

    //             return result;
    //         }
    //     };

    const mathOperation = function (sign, ...args) {
        let result = 0;

        switch (sign) {
            case '+':
                for (const arg of args) {
                    result += arg;
                }
                return result

            case '-':
                for (const arg of args) {
                    result -= arg;
                }
                return result;
        }
    }

    // const sign = '+';
    const sign = '-';

    const mathFunctionResult = mathOperation(sign, 25, -40, 20);
    // const result = mathOperation(sign);
    console.log(mathFunctionResult);
}

