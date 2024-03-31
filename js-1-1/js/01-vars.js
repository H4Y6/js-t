/*
 * - Змінні та типи примітивів
 * - const и let
 * - Логування методом console.log()
 * - Унікальність ідентифікаторів
 */

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Welcome!';
const isOpen = true;
const shouldConfirm = false;

/*
 * * - Оператор typeof
 */

const type = typeof totalPrice;
const type1 = typeof isOpen;

console.table({ age, totalPrice, userName, message, isOpen, type, type1 });

/*
 * - Як window.alert() блокує інтерпретацію
 */

// console.log('before');
// alert('qweqweqwe');
// console.log('after');
