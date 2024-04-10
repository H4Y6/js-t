/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

function aboutArgs() {
  // console.log(arguments);

  const elements = Array.from(arguments);
  console.log('elements->', elements);

  for (const arg of arguments) {
    // console.log(arg);
  }
}

aboutArgs(1, 2, 3, 4, 5, 6, 7);
aboutArgs(1, 2, 6, 7);


function sumArgs() {
  let sum = 0;

  for (const arg of arguments) {
    sum += arg;
  }

  return sum;
}

console.log('sum of args->', sumArgs(1, 2, 6, 7));


function aboutRest(...anyName) {
  return `anyName: ${anyName}`;
}

console.log(aboutRest(1, 2, 3, 4, 5, 6, 7));

function sumEls(...els) {
  return `sum of els: ${els.reduce((sum, el) => sum + el, 0)}`;
}

console.log(sumEls(111, 2, 3, 4, 5, 6, 7));

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (array, ...args) {
//   const equalElements = [];

//   for (const arg of args) {
//     array.includes(arg) ? equalElements.push(arg) : null;
//   }

//   return equalElements;
// }

// const filterNumbers = function (array, ...args) {
//   console.log('array: ', array);
//   console.log('args: ', args);
//   const uniqueElements = [];

//   for (const element of array) {
//     if (args.includes(element)) {
//       uniqueElements.push(element);

//       console.log(`${element} есть везде!`);
//     }
//   }

//   return uniqueElements;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]

const filterNums = function (array, ...args) {
  let common = ['common:'];
  let unique = ['unique:'];

  for (const el of args) {
    array.includes(el) ? common.push(el) : unique.push(el);
    // continue;
  }

  return [common, unique];
};
console.log(filterNums([18, 15, 25, 30], 23, 30, 18, 15, 11));

console.log((/7/).test([23, 30, 18, 15, 11]));


function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
    return;
  }
  if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
    return;
  }
  console.log("Операція зняття коштів проведена");
}

// withdraw(200, 300);
// withdraw(0, 300);
// withdraw(440, 300);

{
  const foo = function (...args) {
    let total = 0;
    for (const el of args) {
      total += el;
    }

    // console.log(total);
  };

  foo(2, 3, 8, 9, 5, 1);
}

{
  const sum = function (value1, value2) {
    return value1 + value2;
  };

  const a = 4;
  const b = 8;
  // console.log(sum(a, b))
}