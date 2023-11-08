/*
 * Оператор ветвеления if
 */

// if (5 > 30) {
//   //  тело
//   console.log('qweqwe');
// }

// console.log('дальше');
/*
 * Оператор ветвления if...else
 */

// if (5 > 30) {
//   console.log('x > y');
// } else {
//   console.log('x < y');
// }

/*
 * Оператор ветвления else...if
 */

const salary = 5000;

// if (salary <= 500) {
//   console.log('Уровень 1');
// } else if (salary > 500 && salary <= 1500) {
//   console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//   console.log('Уровень 3');
// } else {
//   console.log('Уровень 4');
// }

// console.log('qweqwe');

/*
 * Тернарный оператор
 */
// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = 'Позитивный баланс';
// } else {
//   message = 'Негативный баланс';
// }

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);

/*
 * Блочная область видимости переменных
 */

// if (true) {
//   const a = 5;
//   console.log(b);
// }

// if (true) {
//   const b = 10;

//   console.log(a);
// }

// let type;
const age = 20;

// if (age >= 18) {
//     type = "adult";
// } else {
//     type = "child";
// }
const type = age >= 18 ? 'adult' : 'child';
console.log(type);

const num1 = 5;
const num2 = 10;
// let biggerNumber;
// if (num1 > num2) { biggerNumber = num1 }
// else { biggerNumber = num2 }

const biggerNumber = num1 > num2 ? num1 : num2;
console.log(biggerNumber)

// for (let i = 0; i <= 4; i += 2) {
//     console.log(i);
// };

// let i;
// for (i = 0; i <= 4; i += 2) {
// }
// console.log(i);

const target = 7;
let sum = 0;
for (let i = 0; i <= target; i += 1) {
    sum += i;
}
console.log(sum);

for (let i = 0; i < 5; i += 1) {
    console.log(i)
    if (i === 4) {
        break
    }
}
console.log('Cicle is over.')

let iArray = [];
const max = 5;
for (let i = 0; i <= max; i += 1) {
    if (i % 2 === 0) {
        continue;
    }
    iArray.push(' ' + i);
}
console.log('The odd numbers:' + iArray + '.');
