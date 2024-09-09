// const userName = prompt('Please, enter your name');
// if (userName.length <= 2) {
// console.warn('too short');
// prompt('Please, enter your name');
// } else {
// console.log('Ok');
// };

const minValue = 333;  /**  The random value between min and max */
const maxValue = 1111;
let salary = Math.round(Math.random() * (maxValue - minValue) + minValue);
// console.log(salary)

const incomingValue = undefined;            /**  nullish coalescing operator */
const defaultVaue = 111;
const value = incomingValue ?? defaultVaue;
// console.log(value)

const password = '111';
// const userInput = prompt("Enter your password");
// const isLoggedIn = password === userInput;
// const userRole = isLoggedIn ? "admin" : 'user';

// console.log(userRole) 

let size = 42;
size = size > 44 ? 'xl' : 'l';
// console.log(size);

const option = function (carBrand) {
  let country;
  switch (carBrand) {
    case 'BMW':
      country = "Germany";
      break;

    case "Ford":
      country = "USA";
      break;

    case "Kia":
      country = "South Corea";
      break;

    default: "other";
  }
  return country;
};
// console.log(option("Ford"));

// console.log(' '.charCodeAt());
const triangleSize = 4;
let row = '';
for (let i = 1; i <= triangleSize; i += 1) {
  row = String.fromCharCode(32, 32).repeat(triangleSize - i) + '* '.repeat((i * 2) - 1);
  // row = String.fromCharCode(' ').repeat(triangleSize - i) + '*'.repeat((i * 2) - 1);
  // console.log(row);
}

let trianSize = 5;
let line = '';
for (let i = 0; i < trianSize; i += 1) {
  // console.log(line += '1 ');
}

let str = '';
let x = 0;
while (x < trianSize) {
  str = ('  ' + String.fromCharCode(32)).repeat(triangleSize - x) + ' O '.repeat((x * 2) + 1);
  // str += 'L ';
  // console.log(str);
  x += 1;
}

let s = '';
let y = 0;
do {
  y += 1;
  // s += 'D ';
  s = ' '.repeat(trianSize - y) + '^ '.repeat(y);
  // console.log(s);
} while (y < trianSize);

// function multiply(...args) {
// let total = 1;
// args.map(el => total *= el);

function multiply() {
  let total = 1;
  [...arguments].map(e => total *= e);
  // Array.from(arguments).map(e => total *= e);

  // for (const arg of arguments) total *= arg;
  return total;
}

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

const dist = 20;
const speeds = { pit: 5, allen: 4, tommy: 2 };
// const timeToTom = speed => {
//   let time = 0;
//   const { pit, allen, tommy } = speeds;
//   switch (speed) {
//     case 'pit': {
//       time = 20 / pit;
//       break;
//     }
//     case 'allen': {
//       time = 20 / allen;
//       break;
//     }
//     case 'tommy': {
//       time = 20 / tommy;
//       break;
//     }
//     default: {
//       time = 'No data!';
//     }
//   }
//   return time;
// };

const timeToTom = speed => {
  let time = 0;
  const { pit, allen, tommy } = speeds;
  switch (speed) {
    case 'pit':
      time = 20 / pit;
      break;

    case 'allen':
      time = 20 / allen;
      break;

    case 'tommy':
      time = 20 / tommy;
      break;

    default:
      time = 'No data!';
  }
  return time;
};
// console.log(timeToTom(`allen`));

// const getRandom = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2));
const getRandom = (min, max) => Math.round((Math.random() * (max - min) + min));
// console.log(getRandom(22, 125));

/**  nullish coalescing operator: */

let incomingNumber;
// = 12;

const defaultNumber = 44;

const number = incomingNumber ?? defaultNumber;
// console.log(number);