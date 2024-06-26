/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];

// console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];

console.log('Min temperature:' + Math.min(...temps));
console.log('Max temperature:' + Math.max(...temps));
console.log('Average temperature:' + Math.round(...temps));

// console.log(temps);

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
const a = [{ x: 1, y: 2 }, { a: 4 }];
const aa = { ...a };
aa[1].a = 44;
console.log('aa===a:', aa === a, ', a[0]===aa[0]:', a[0] === aa[0], ', a[1]===aa[1]:', a[1] === aa[1]);

const b = { x: 0, z: 3 };

const c = Object.assign({ name: 'Mango' }, a[0], b);
const cc = Object.assign({ name: 'Mango' }, a, b);

const ccc = {
  ...a[0],
  x: 10,
  ...b,
  y: 20,
};

console.log('c:', c);
console.log('cc:', cc);
console.log('ccc:', ccc);

const defaultSettings = {
  theme: 'dark',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);

{
  const scores = [89, 64, 42, 17, 93, 51, 26];

  const bestScore = Math.max(...scores);
  const worstScore = Math.min(...scores);

  // console.log(bestScore, worstScore);
}

{
  const firstGroupScores = [64, 42, 93];
  const secondGroupScores = [89, 14, 51, 26];
  const thirdGroupScores = [29, 47, 18, 97, 81];

  const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
  const bestScore = Math.max(...allScores);
  const worstScore = Math.min(...allScores);

  // console.log(bestScore, worstScore);
}