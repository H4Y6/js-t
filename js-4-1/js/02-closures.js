/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов innerFunction');
    };

    return innerFunction;
};

const fnB = fnA(555);

// fnB();

// console.log(fnB);

const fnC = function (param) {
    const innerVar = 'The inner var meaning';

    const fnInner = function () {
        console.log(param);
        console.log(innerVar);
        console.log('The inner function call');
    };
    return fnInner;
};
const fnD = fnC('das');
// fnD()
// console.log(fnD);

/*
 * Поварёнок
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

const makeSheff = function (name) {
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) {
        console.log(message);
        console.log(innverVar);
        console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
};

{
    const makeChief = function (name) {
        const makeDishA = function (dish) {
            console.log(`${name} is cooking ${dish}.`);
        };

        return makeDishA;
    };

    const mango = makeChief('Mango');
    mango('pie');

    const poly = makeChief('Poly');
    poly('soop');

    // console.dir(mango);  /* closure on {makeChief} */
}

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');
// poly('омлет');

// console.dir(mango);

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 1000) {
                return 'Ты офигел?';
            }

            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарпалата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(10000000));

// console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());

{
    const fnA = function (...params) {
        const innerVariable = 'it is an inner variable.';

        const innerFn = function () {
            // console.log(params);
            // console.log(innerVariable);
            // console.log('This is the inner function call.');
        };

        return innerFn;
    };

    const fnB = fnA(22, 41);

    fnB();

    // console.log(fnB);


    const makeDish = function (name, dish) {
        console.log(`${name} is cooking ${dish}`);
    };

    // makeDish('Pit', 'pie');
    // makeDish('Pit', ' omelette');
    // makeDish('Pit', 'tee');

    // makeDish('Dan', 'cotelette');
    // makeDish('Dan', 'cutlet');
    // makeDish('Dan', 'coffee');


    const makeCook = function (name) {
        // const innerVar = '42';     /**   to see Scopes */
        // const message = 'hello';      /**   to see Scopes */

        const makeDish = function (dish) {
            // console.log(message, innerVar);  /**  to see Scopes */
            // console.log(`${name} is cooking ${dish}.`);
        };

        return makeDish;
    };

    const pit = makeCook('Pit');

    pit('pie');
    pit('cotelette');
    pit('coffee');

    const dan = makeCook('Dan');

    dan('omelette');
    dan('cutlet');
    dan('tee');

    // console.dir(pit);   /**   to see Scopes */


    const rounder = function (places) {
        return function (number) {
            return Number(number.toFixed(places));
        };
    };

    const rounder2 = rounder(2);
    const rounder3 = rounder(3);


    // console.dir(rounder2);
    // console.dir(rounder3);

    // console.log(rounder2(3.48176));
    // console.log(rounder3(3.48176));
    // console.log(rounder2(6.42286));
    // console.log(rounder3(8.33276));
}