/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

/**
 *  This is an array iteration method that is used as a replacement for the for and for...of loops when working with a data collection.

array.forEach(function callback(element, index, array) {
  // Callback body
});

* - Iterates over an array element by element.
* - Calls a callback function for each element of the array.
* - Returns nothing.
Callback arguments are the value of the current element element, its index index and the original array. You can declare only those parameters that are required – most often this is an element – but never forget about their order. */

const numbers = [0, 5, 10, 15, 20, 25];

numbers.forEach(function (number, i, array) {
  console.log(`Index ${i}, number ${number}, value ${numbers[i]}`);
  console.log('this: ', this);
  numbers[i] += 1;  /** the way to change an array values */
}, { a: 2, b: 5 });

console.log(numbers);
