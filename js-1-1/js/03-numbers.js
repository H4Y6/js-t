/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

// let elementWidth = '50px';
// elementWidth = Number.parseInt(elementWidth);

// const type = typeof elementWidth;
// console.table({ elementWidth, type });

// let elementHeight = '200.74px';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрёшки на примере  console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;
// salary = salary.toFixed(2);
// const a = Number(salary);
// const salaryType = typeof salary;
// console.table({ stf: salary.toFixed(2), fst: typeof salary.toFixed(2), s: salary, tos: typeof salary, tostfn: typeof Number(salary.toFixed(2)), stfn: Number(salary.toFixed(2)) });

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */
// let quantity = '30';
// let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity));
// console.log(Number(value));

console.log(Math, 360 / Math.PI / 2, 1.5575 * 57.3, Math.tan(1 / 1.273), Math.atan(1.5575));
// console.log(Math, Math.PI, Math.tan(.7854), Math.atan(1));

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(base ** power, result, Math.sqrt(1024), 5 ** 4);

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

/** 1. попросить ввести число и сохранить в переменную    */
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

/* 2. попросить ввести степень и сохранить в переменную  */

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

/* 3. Возвести введенные данные в степень и вывести;  */
// const result = base ** power;

// console.log(result);

// const max = 57;
// const min = 5;

// const randomInteger = Math.round(Math.random() * ((max - min) + min));
// console.log(randomInteger);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */
// const max = 80;
// const min = 10;
// Math.random() * (max - min) + min;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// const colors = ['tomato', 'teal', 'orange', 'blue', 'red', 'purple', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;
