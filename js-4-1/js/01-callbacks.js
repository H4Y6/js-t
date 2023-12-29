/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);

/*
 * функция doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {
    const result = callback(a, b);

    console.log(result);
};

// doMath(2, 3, function (x, y) {
//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });

{
    const doMath = function (a, b, cb) {
        return cb(a, b);
    };

    const add = function (x, y) {
        return x + y;
    };

    const sub = function (x, y) {
        return x - y;
    };

    // console.log(doMath(5, 2, add));
    // console.log(doMath(5, 2, sub));

    const addArrow = (x, y) => x + y;
    const subArrow = (x, y) => x - y;

    const calculate = (a, b, cb) => (cb(a, b));

    // console.log(calculate(6, 1, addArrow));
    // console.log(calculate(6, 1, subArrow));

    // calculate(4, 3, (x, y) => console.log(x + y));
    // calculate(4, 3, (x, y) => console.log(x - y));

    // calculate(4, 3, function (x, y) { console.log(x + y) });
    // calculate(4, 3, function (x, y) { console.log(x - y) });


    const calculateA = (a, b, cb, cbA) => (cb(a, b), cbA(a, b));
    // calculateA(4, 3, (x, y) => console.log(x + y), (x, y) => console.log(x - y));
    // calculateA(4, 3, function (x, y) { console.log(x + y) }, function (x, y) { console.log(x - y) });
}


/*
 * Отложенный вызов: регистрация событий
 */

const buttonRef = document.querySelector('.js-button');
// console.dir(buttonRef);

const handleBtnClick = function () {
    const currentTime = Date.now() / 3600000 % 24;
    // console.log('While the click the time was', currentTime.toFixed(3), 'hrs(UTC)');
};

buttonRef.addEventListener('click', handleBtnClick);
// buttonRef.addEventListener('click',
//     () => console.log('The time is', (Date.now() / 3600000 % 24).toFixed(2), 'hrs(UTC)'));
// buttonRef.addEventListener('click',
//     function () { console.log('The time is', (Date.now() / 3600000 % 24).toFixed(3), 'hrs(UTC)') });

const btnEl = document.querySelector('.js-button');

const onBtnClick = () => {
    const currentTime = Date.now() / 3600000 % 24;
    const currentLT = currentTime + 2;
    const currentMinute = (currentTime % 1 * 60);
    const currentSecond = (currentMinute % 1 * 60);
    console.log(Math.floor(currentLT).toString(), 'hr:', currentMinute.toFixed(), 'min:', currentSecond.toFixed(), 'sec')
}

btnEl.addEventListener('click', onBtnClick)


/*
 * Отложенный вызов: геолокация
 */

// const onGetPositionSuccess = function (position) {
//     console.log('Это вызов onGetPositionSuccess');
//     console.log(position);
// };

// const onGetPositionError = function (error) {
//     console.log('Это вызов onGetPositionError');
//     console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function success(pos) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// navigator.geolocation.getCurrentPosition(success, error, options);

/*
 * Отложенный вызов: интервалы
 */

const callback = function () {
    console.log('Через 2 секунды внутри колбека в таймауте');
};

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

const onRequestSuccess = function (response) {
    console.log(
        'Вызов функции onRequestSuccess после успешного ответа бекенда',
    );
    console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

/*
 * Фильтр
 */

const filter = function (array, test) {
    const filteredArray = [];

    for (const el of array) {
        // console.log(el);
        const passed = test(el);

        if (passed) {
            filteredArray.push(el);
        }
    }

    return filteredArray;
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
    return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1);

const callback2 = function (value) {
    return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2);


const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
    return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);

{
    const filter = (array, cb) => {
        const filtered = [];
        for (const item of array) {
            if (cb(item)) filtered.push(item);
        }
        return filtered;
    }

    const test1 = (el) => el >= 5;
    const test2 = (el) => el < 5;

    const array1 = [1, 2, 3, 4, 5, 8, 9, 11];
    const array2 = [1, 3, 4, 5, 6, 7, 9];

    // console.log(filter(array1, test1));
    // console.log(filter(array1, test2));
    // console.log(filter(array2, test1));
    // console.log(filter(array2, test2));


    const chooseFruit = (el) => el.quantity > 100;

    const filterFruits = (array, cb) => {
        const filteredFruits = [];
        for (const item of array) {
            if (cb(item)) filteredFruits.push(item);
        }
        return filteredFruits;
    };
    // console.log(filterFruits(fruits, chooseFruit));
    // console.log(filter(fruits, chooseFruit));


    const collectFruit = (el, number) => el.quantity <= number;

    const chooseSomeFruits = (array, cb, quantity) => {
        const collectedFruits = [];
        for (const fruit of array) {
            if (cb(fruit, quantity)) collectedFruits.push(fruit);
        }
        return collectedFruits;
    };
    // console.log(chooseSomeFruits(fruits, collectFruit, 150));
}