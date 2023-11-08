/*
 * Цикл for
 */

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }

// console.log('The cicle is over.');

/*
 * Pre-increment и Post-increment
 */

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let a = 10;
// const b = ++a;

// console.log(a);
// console.log(b);

/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

// //  1 сделать вары
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 5;
// let totalSalary = 0;

// // 2 перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//   // 3 сгенерить случайную зп
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );

//   console.log(`ЗП работника номер ${i} - ${salary}`);

//   // 4  прибавить к тоталу
//   totalSalary += salary;
// }

// // 5 лог
// console.log('totalSalary: ', totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

//  1 вары
// const min = 0;
// const max = 5;
// let total = 0;

// For от min до max с шагом в 1
// for (let i = min; i <= max; i += 1) {
//   // проверяем остаток от деления
//   if (i % 2 !== 0) {
//     // console.log('Odd: ', i);
//     continue;
//   }

//   console.log('Even: ', i);
//   total += i;
// }
// console.log('total: ', total);


// let sum = 0;
// for (let it = 4; it <= 8; it += 1) {
//   if (it % 2 !== 0) {
//     continue;
//   }
//   console.log(`Even number: ${it}`);
//   sum += it;
// }
// console.log(`The sum of the even numbers is ${sum}.`)


function findEvenNumberArrayAndSum(min, max) {
  let evenNumberArray = [];
  let sum = 0;
  for (let i = min; i < min + 2; i += 1) {
    if (i % 2 === 0) {
      for (i; i <= max; i += 2) {
        evenNumberArray.push(i);
        sum += i;
      };
    };
  };
  console.log({ evenNumberArray, sum })
};
const paramArray = [21, 33]
findEvenNumberArrayAndSum(...paramArray);

function findEvenNumberArrayAndSum1(min, max) {
  let evenNumberArray = [];
  let sum = 0;
  for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
      evenNumberArray.push(i);
      sum += i;
    };
  };
  console.log({ evenNumberArray, sum })
};
findEvenNumberArrayAndSum1(...paramArray);

function findEvenNumberArrayAndSum2(min, max) {
  let evenNumberArray = [];
  let sum = 0;
  for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) { continue; };
    {
      evenNumberArray.push(i);
      sum += i;
    };
  };
  console.log({ evenNumberArray, sum })
};
findEvenNumberArrayAndSum2(...paramArray);

function findEvenNumberArrayAndSum3(min, max) {
  let evenNumberArray = [];
  let sum = 0;
  if (min % 2 !== 0) { min += 1 };
  for (let i = min; i <= max; i += 2) {
    evenNumberArray.push(i);
    sum += i;
  };
  console.log({ evenNumberArray, sum })
};
findEvenNumberArrayAndSum3(...paramArray);
