/*
 * Посчитать общую сумму покупок в корзине
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// 2 сделать переменную total до цикла
let total = 0;

// 1 перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//   // console.log(cart[i]);
//   // 3 каждый элемент приплюслвать к total
//   total += cart[i];
//   // total = total + cart[i];
// }

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

// Добавить такс

// for (let i = 0; i < cart.length; i += 1) {
//   cart[i] = Math.round(cart[i] * 1.1);
// }

// for (let value of cart) {
//   value = Math.round(value * 1.1);
// }

// console.log(cart);

const params = [34, 61, 24, 77, 42, 95];

// const getAverage = function (prices) {
//   let totalPrice = 0;
//   for (let i = 0; i < prices.length; i += 1) {
//     totalPrice += prices[i];
//   }

//   return totalPrice / prices.length;
// };
// console.log(getAverage(params));

const getAverage = function (prices) {
  let totalPrice = 0;
  for (const price of prices) {
    totalPrice += price;
  }

  return totalPrice / prices.length;
};
console.log('Average price-> ', getAverage(params));