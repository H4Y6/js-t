/*
 * - Введення користувача
 * - Методи window.confirm() та window.prompt()
 */

const shouldRenew = confirm('Бажаєте продовжити підписку?');
console.log(shouldRenew);

let quantity = prompt('Уведіть кількість товарів');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);
console.log('first')