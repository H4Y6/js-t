/*
 * - Переменные и типы примитивов
 * - const и let
 * - Логирование с методом console.log()
 * - Уникальность идентификатора
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
 * - Как window.alert() блокирует интерпретацию
 */

// console.log('До');
// alert('qweqweqwe');
// console.log('После');
