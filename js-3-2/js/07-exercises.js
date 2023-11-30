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
    // console.log(mathFunctionResult);
}

{
    const DEFAULT_USER_AVATAR = 'https://pict/avatar.jpg';
    const DEFAULT_LOCALE = 'en_GB';

    const generalData = {
        user: {
            name: 'Sam',
            avatar: 'https://img/avatar.png',
            age: 25,
        },
        locale: 'en_US',
        cart: [
            { productName: 'cup', price: 22 },
            { productName: 'iron', price: 25 },
            { productName: 'plate', price: 12 },
        ],
    };

    const { user: { avatar = DEFAULT_USER_AVATAR, name: userName }, locale = DEFAULT_LOCALE, cart, } = generalData;
    // const { avatar = DEFAULT_USER_AVATAR } = user;

    // console.log(userName, ',', avatar);
    // console.log(cart);
    // console.log(locale);
}

{
    const users = [
        {
            name: 'Pit',
            age: 43,
        },
        {
            name: 'Lee',
            age: 18,
        },
        {
            name: 'Anrew',
            age: 29,
        },

    ]

    const findYoungestUser = function (...args) {
        if (args.length === 0) {
            console.error('No user found');
            return 'Error!';
        }

        let youngestUser = args[0];
        let { age: youngestUserAge } = youngestUser;


        for (const { name, age } of args) {
            if (age > youngestUserAge) {
                // if (age > youngestUser.age) {
                continue;
            }
            youngestUser = { name, age };
        }
        // for (const user of args) {
        //     if (user.age > youngestUser.age) {
        //         continue;
        //     }
        //     youngestUser = user;
        // }
        return youngestUser;
    }

    const findOldestUser = function (...args) {
        if (args.length === 0) {
            console.error('No user found');
            return 'Error!'
        }

        let oldestUser = args[0];
        let { age: oldestUserAge } = oldestUser;

        for (const { name, age } of args) {
            if (age < oldestUserAge) {
                // if (age < oldestUser.age) {
                continue;
            }
            oldestUser = { name, age };
        }
        // for (const user of args) {
        //     if (user.age < oldestUser.age) {
        //         continue;
        //     }
        //     oldestUser = user;
        // }
        return oldestUser;
    }

    const youngestUser = findYoungestUser(...users);
    const oldestUser = findOldestUser(...users);

    console.log(youngestUser);
    console.log(oldestUser);
}