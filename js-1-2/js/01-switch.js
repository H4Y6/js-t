/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

// const stars = 3;
// let price = 'not defined';

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log(`The choice is wrong. Please, try again.`)
// }
// console.log(`The price is ${price}.`)

// const learnPrice = (stars) => {
//   switch (stars) {
//     case 1:
//       price = 20;
//       break;

//     case 2:
//       price = 30;
//       break;

//     case 3:
//       price = 50;
//       break;

//     case 4:
//       price = 70;
//       break;

//     case 5:
//       price = 120;
//       break;

//     default: console.log(`The choice is wrong. Please, try again.`)
//       break;
//   }
//   console.log(`The price is ${price}.`)
// };
// learnPrice(4);

// if (stars === 1 || stars === 2) {
//   price = 20;
// }
// if (stars === 3 || stars === 4) {
//   price = 40;
// }
// if (stars === 5) {
//   price = 120;
// }
// console.log(`The price is ${price}.`)

// const learnPrice = (stars) => {
//   switch (stars) {
//     case 1:
//     case 2:
//       price = 20;

//       break;
//     case 3:
//     case 4:
//       price = 40;

//       break;
//     case 5:
//       price = 120;
//       break;

//     default: console.log('Please, try again.')
//       break;
//   }
//   console.log(`The price is ${price}.`)
// }
// learnPrice(5);

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// switch (stars) {
//   case 1:
//     price = 20;
//     break;

//   case 2:
//     price = 30;
//     break;

//   case 3:
//     price = 50;
//     break;

//   case 4:
//     price = 70;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1,2 - 20$, 3,4 - 30$, 5 - 120$
 */

// const stars = 1;
// let price;

// if (stars === 1 || stars === 2) {
//   price = 20;
// } else if (stars === 3 || stars === 4) {
//   price = 30;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log('Такого кол-ва звезд нет');
// }

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

//  1. сделать переменные
// const option = 1526;
// let message = '';

// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в message строку
// switch (option) {
//   case 1:
//     message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
//     break;

//   case 2:
//     message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
//     break;

//   case 3:
//     message = 'Посылка будет отправлена сегодня';
//     break;

//   default:
//     message = 'Вам перезвонит менеджер';
// }

// 4. сделать лог message
// console.log(message);

// function getSubscriptionPrice(type) {
//     let price;

//     switch (type) {
//         case 'starter':
//             price = 0;
//             break;

//         case 'professional':
//             price = 20;
//             break;

//         case 'organization':
//             price = 50;
//             break;

//         default: console.log('Unknown subscription type.');
//     }
//     console.log(price);
//     return price;
// }
// getSubscriptionPrice('professional')

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default: message = "Access denied, wrong password!";
//       break;
//   }
//   console.log(message)
//   return message;
// }
// checkPassword("AAjqueryismyjam");

// function getShippingCost(country) {
//   let message;
//   let price;
//   switch (country) {
//     case 'China':
//       price = 100;
//       break;

//     case 'Chile':
//       price = 250;
//       break;

//     case 'Australia':
//       price = 170;
//       break;

//     case 'Jamayca':
//       price = 120;
//       break;
//   }
//   message = price ? `Shipping to ${country} will cost ${price} credits`
//     : "Sorry, there is no delivery to your country.";

//   console.log(message)
//   return message;
// }

// getShippingCost('Chile');

function getShippingCost(country) {
  let message, price;
  function createMessage() {
    message = `Shipping to ${country} will cost ${price} credits`;
  }
  switch (country) {
    case 'China':
      price = 100;
      createMessage();
      break;

    case 'Chile':
      price = 250;
      createMessage();
      break;

    case 'Australia':
      price = 170;
      createMessage()
      break;

    case 'Jamayca':
      price = 120;
      createMessage()
      break;

    default: message = "Sorry, there is no delivery to your country.";
  }
  console.log(message);
  return message;
}

getShippingCost('China');