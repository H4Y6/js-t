// const foo = [1, 2, 3];
// const bood = [1, 2, 3];
// const bar = foo;

// console.log(foo, bar);
// console.log(foo === bar);
// console.log(foo === bood);

const fruits = ['kiwi', 'banana', 'apple', 'ananas', 'cucumber'];
console.log({ slicedFruits: fruits.slice(1, -1), fruits });

console.log({ fruits, splicedFruits: fruits.splice(-3, 1, 'papaya') });
// console.log({ fruits, splicedFruits: fruits.splice(-3) });

// console.log(fruits.pop(), fruits, fruits.push('pumpkin'), fruits.unshift('laster'), fruits.shift());

function checkStorage(a, o) {
  if (o === 0) {
    return 'empty';
  }
  else if (o > a) {
    return 'too much';
  }
  return 'ok';
}
// console.log(checkStorage(4, 3));

const numbers = [2, 4, 3, 8, 5, 9, 7];
const findIndex = function (array, num) {
  let idx = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === num) {
      idx = i;
      break;
    }
  }

  return idx;
};
// console.log(findIndex(numbers, 5));

const sumNumbers = function (arr, threshold) {
  let sum = 0;
  for (const num of arr) {
    sum += num > threshold ? num : 0;
  }

  return sum;
};
// console.log(sumNumbers(numbers, 6));

{
  let a = 4;
  const b = ++a;
  // const b = a++;
  // console.log(a, b);
}