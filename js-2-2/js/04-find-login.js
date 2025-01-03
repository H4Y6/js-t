/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден.`;
//     }
//   }

//   return `Пользователь ${loginToFind} не найден.`;
// };

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;
// };

// const findLogin = function (logins, loginToFind) {
//   let message = `Login ${loginToFind} is not found.`
//   for (const login of logins) {
//     if (login === loginToFind) {
//       message = `Login ${loginToFind} is found.`
//     }
//   }
//   return message
// }

// const findLogin = function (logins, loginToFind) {
//   for (const login of logins) {
//     if (login !== loginToFind) {
//       continue;
//     }
//     return `Login ${loginToFind} is not found.`
//   }
//   return `Login ${loginToFind} is found.`
// }

// const findLogin = function (logins, loginToFind) {
//   for (const login of logins) {
//     if (login === loginToFind) {
//       return `Login ${loginToFind} is found.`
//     }
//   }
//   return `Login ${loginToFind} is not found.`
// }


const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Login ${loginToFind} is found.`
    : `Login ${loginToFind} is not found.`;
};

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

const numberData = [4, 2, 7, 5,];

const findNumber = function (numbers, number) {
  for (const el of numbers) {
    if (el === number) return 'The number is found.';
  }

  return 'Not found.';

  // return numbers.includes(number) ? 'The number is found.' : "Not found";
};
console.log(findNumber(numberData, 5));
console.log(findNumber(numberData, 1));

const stringArray = ['sdo', 'gof', 'tols'];
console.log('gof', stringArray.includes('gof'));
console.log('st', 'first'.includes('st'));