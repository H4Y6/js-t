/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Function add is proceeding');

//   return x + y;
// };

// console.log(`Result: ${add(2, 4)}`);

// const r1 = add(5, 3);
// console.log('r1: ', r1);

// const r2 = add(10, 15);
// console.log('r2: ', r2);

// const r3 = add(30, 50);
// console.log('r3: ', r3);

const fn = function (value) {
  console.log(1);
  console.log(2);

  if (value < 50) {
    return 'Less then 50';
  }

  return 'More then 50';
};

console.log('Result: ', fn(10));

console.log('Result: ', fn(1000));

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */
const fnA = function () {
  console.log('Выполняется функция A');
};

const fnB = function () {
  console.log('Выполняется функция B');
};

const fnC = function () {
  console.log('Выполняется функция C');
};

// console.log('Лог перед вызовом функции A');

// fnA();

// console.log('Лог после вызова функции A');

// console.log('Лог перед вызовом функции B');
// fnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции C');
// fnC();
// console.log('Лог после вызова функции C');
