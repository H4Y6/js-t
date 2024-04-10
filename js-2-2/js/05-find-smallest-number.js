/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const findSmallesNumber = function (numbers) {
//   let smallestNumber = numbers[0];

//   for (const number of numbers) {
//     if (number < smallestNumber) {
//       smallestNumber = number;
//     }
//   }

//   return smallestNumber;
// };

const findSmallestNumber = function (args) {
  let smallestNumber = 1 / 0;
  // let smallestNumber = args[1];
  for (const number of args) {
    smallestNumber = number < smallestNumber ? number : smallestNumber;
  }
  return smallestNumber;
};

// console.log(findSmallestNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallestNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallestNumber([7, 21, 84, 15, 4])); // 4

const arr = [14, 154, 8, 12, 4, 21, 7];

const findMin = function (arr) {
  let min = Infinity;
  for (const el of arr) {
    min = min > el ? el : min;
  }

  return min;
};
console.log(findMin(arr));