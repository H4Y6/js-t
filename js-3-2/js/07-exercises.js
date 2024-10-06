{
    const copyInstance = function (instance) {
        if (Array.isArray(instance)) {
            return [...instance];
        }

        return { ...instance };
    };

    const array1 = [1, 4, 6, 5];
    const newArray = copyInstance(array1);
    // console.log(`Are they equal? ->  ${newArray === array1}`);
}

{
    const copyInstance = function (instance) {
        if (Array.isArray(instance)) {
            return [...instance];
        }

        return { ...instance };
    };

    const oldArray = [1, 5, 2, 9];
    const newArray = copyInstance(oldArray);
    // console.log(newArray);
    // console.log(copyInstance([1, 5, 2, 9]));


    // console.log(`Are they iqual? Answer: ${oldArray === newArray}`)
}

{
    /* Поверхневе копіювання масиву через розпорошення:  */
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
    /* Поверхневе копіювання масиву через розпорошення:  */

    const users = [
        { name: 'Smith' },
        { name: 'Habby', }
    ];

    const newUsers = [...users];

    // console.log('Is iqual? :', users === newUsers);

    newUsers[0].name = 'Paul';
    // console.log(users[0].name);
}

{
    const mergeArray = function (arr1, arr2) {
        return [...arr1, ...arr2];
    };
    // const arr1 = [5, 7, 2, 9, 7];
    // const arr2 = [4, 6, 7, 1];
    // console.log(mergeArray(arr1, arr2));
    // console.log(mergeArray([1, 3, 8], [2, 3, 9]));
}

{
    function mergeArray(oldArr, extraArr) {
        return [...oldArr, ...extraArr];
    }

    // console.log(mergeArray([3, 5, 4], [6, 1, 5, 2]));
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

    // const mathOperation = function (sign, ...args) {
    //     let result = 0;

    //     switch (sign) {
    //         case '+':
    //             for (const arg of args) {
    //                 result += arg;
    //             }
    //             return result

    //         case '-':
    //             for (const arg of args) {
    //                 result -= arg;
    //             }
    //             return result;
    //     }
    // }

    function mathOperation(sign, startNumber, ...args) {
        let result = startNumber;
        if (sign === '+') {
            for (const arg of args) {
                result += arg;
            }
            return result;
        }

        if (sign === '-') {
            for (const arg of args) {
                result -= arg;
            }
            return result;
        }
    }

    const sign = '+';
    // const sign = '-';
    // const startNumber = 0;
    const startNumber = 70;

    const mathFunctionResult = mathOperation(sign, startNumber, 25, -40, 20);
    const result = mathOperation(sign, startNumber, 6, 88, 52, 7);
    // console.log(mathFunctionResult);
    // console.log(result);
}

{
    const DEFAULT_USER_AVATAR = 'https://pict/avatar.jpg';
    const DEFAULT_LOCALE = 'en_GB';

    const generalData = {
        user: {
            name: 'Sam',
            // avatar: 'https://img/avatar.png',
            age: 25,
        },
        // locale: 'en_US',
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

    ];

    // const findYoungestUser = function (...args) {
    //     if (args.length === 0) {
    //         console.error('No user found');
    //         return 'Error!';
    //     }

    //     let youngestUser = args[0];
    //     let { age: youngestUserAge } = youngestUser;


    //     for (const { name, age } of args) {
    //         if (age > youngestUserAge) {
    //             // if (age > youngestUser.age) {
    //             continue;
    //         }
    //         youngestUser = { name, age };
    //     }
    //     // for (const user of args) {
    //     //     if (user.age > youngestUser.age) {
    //     //         continue;
    //     //     }
    //     //     youngestUser = user;
    //     // }
    //     return youngestUser;
    // }

    // const findOldestUser = function (...args) {
    //     if (args.length === 0) {
    //         console.error('No user found');
    //         return 'Error!'
    //     }

    //     // let oldestUser = args[0];
    //     let [oldestUser, ...restUsers] = args;  /* array destructurization to get the first item and the rest ones */
    //     let { age: oldestUserAge } = oldestUser;

    //     for (const { name, age } of restUsers) {
    //         // for (const { name, age } of args) {
    //         if (age < oldestUserAge) {
    //             // if (age < oldestUser.age) {
    //             continue;
    //         }
    //         oldestUser = { name, age };
    //     }
    //     // for (const user of args) {
    //     //     if (user.age < oldestUser.age) {
    //     //         continue;
    //     //     }
    //     //     oldestUser = user;
    //     // }
    //     return oldestUser;
    // }

    function findYoungestUser(users) {
        if (users.length === 0) {
            console.error('No user found');
            return 'Error: no user found';
        };

        // let youngestUser = users[0];
        let [youngestUser] = users;

        for (const { age, name } of users) {
            if (age > youngestUser.age) {
                continue;
            }
            youngestUser = { age, name };
        }

        return youngestUser;
    };

    function findOldestUser(users) {
        if (users.length === 0) {
            console.error('No user found');
            return 'No user found';
        }

        let [oldestUser] = users;
        // let oldestUser = users[0];

        for (const { name, age } of users) {
            if (age < oldestUser.age) {
                continue;
            }
            oldestUser = { name, age };
        }

        return oldestUser;
    }

    // const youngestUser = findYoungestUser(...users);
    // const oldestUser = findOldestUser(...users);

    const youngestUser = findYoungestUser(users);
    const oldestUser = findOldestUser(users);

    // console.log('The youngest user:', youngestUser);
    // console.log('The oldest user:', oldestUser);
}

function factorial(n) {
    return n < 2 ? 1 : n * factorial(n - 1);
};
// console.log(factorial(6));

{
    const coalescingArraysFn = (...args) => args.reduce((coalescing, ar) => [...coalescing, ...ar], []);
    // console.log(coalescingArraysFn([1, 2, 3], [6, 7, 8], [9, 11]));

    // const mathOperation = (sign, ...args) => {
    //     let res = args[0];
    //     for (let i = 1; i < args.length; i++) {
    //         sign === '+' ? res += args[i] : res -= args[i];
    //     }
    //     return res;
    // };
    const mathOperation = (num, sign, ...args) => args.reduce((res, e) => res + eval(sign + e), num);

    // console.log(mathOperation(22, '+', 7, 5, 2, 3));

    const userData = {
        user: { name: 'Otto', age: 44, avatar: '/g/photo/4366', },
        locale: 'en_GB',
        cart: [
            { title: 'can', quantity: 3, },
            { title: 'disk', quantity: 2, },
        ]
    };
    const { user: { name, age, avatar = 'https://hop.lk/picts/3452' }, locale = en_US, cart } = userData;
    // console.log(locale, '<-locale\n', avatar, '<-avatar\n', cart, '<- cart');

    const users = [
        { name: 'Pit', age: 19 },
        { name: 'John', age: 21 },
    ];

    const getEldest = function (...args) {
        let [eldest] = args;
        const { name, age: eldestAge, } = eldest;
        for (const { name, age, } of args) {
            eldest = age > eldestAge ? { name, age } : eldest;
        }
        return eldest;

        // return args.find(arg => arg.age === Math.max(...args.map(({ age }) => age)));
    };
    console.log(getEldest(...users));
}