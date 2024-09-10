/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }

// console.log('smallestNumber: ', smallestNumber);

let max = numbers[0];

for (const number of numbers) {
  max = number > max ? number : max;
}
console.log({ max });

console.dir(Math);

console.log({ max: Math.max(...numbers) });

let min = numbers[0];
for (const number of numbers) {
  min = number < min ? number : min;
  // if (number >= min) continue;
  // min = number;
}
console.log('min->', min);

const digits = [3, 5, 1, 8, 4];
// const getMax = digits => {
//   let max = digits[0];
//   for (let i = 0; i < digits.length; i += 1) {
//     max = digits[i] <= max ? max : digits[i];
//   }

//   return { max };
// };

const getMax = digits => {
  let max = digits[0];
  for (const digit of digits) {
    max = digit <= max ? max : digit;
  };

  return { max };
};
console.log(getMax(digits));