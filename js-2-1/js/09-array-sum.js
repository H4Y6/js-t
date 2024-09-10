/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//   total += number;
// }

// for (const number of [...array1, ...array2]) {
//   total += number;
// }

const length = array1.length > array2.length ? array1.length : array2.length;
for (let i = 0; i < length; i += 1) {
  total += ((array1[i] ?? 0) + (array2[i] ?? 0));
}

console.log(total);
