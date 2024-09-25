const wordsA = ['kodje', 'jow', 'geomy', 'plevs'];
const wordsB = ['woodjic', 'joke', 'glemmy'];

const findLongest = function () {
  let long = '';

  for (const el of arguments[0]) {
    long = el.length > long.length ? el : long;
  }

  return long;
};
console.log(findLongest([...wordsA, ...wordsB]));


const array = ['dolt', 'golf', 'lef', 'folk', 'dell', 'pig'];
const arr = ['golf', 'folk', 'bill', 'dell', 'pig', 'well'];

const getCommon = function (arr1, arr2) {
  const common = [];

  for (const str of arr1) {
    if (arr2.includes(str)) common.push(str);
  }

  return common;
};
console.log(getCommon(array, arr));

const getAverage = function (arr) {
  let sum = 0;
  console.log(arr);
  for (const el of arr) {
    sum += el;
  }

  return sum / arr.length;
};
console.log(getAverage([18, 16, 22, 29, 41, 16, 22, 23]));

const ar = [18, 16, 22, 29, 41, 16, 22, 23];
ar.splice(-2, 1, 7777);
console.table(ar, ar.length);
