

/*                      false`: `0`, `NaN`, `null`, `undefined`, empty row `""` or `''` and false itself                  */

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  return isInRange;
}

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';
  return canAccessContent;
}

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (totalSpent >= 50000) return discount = GOLD_DISCOUNT;
  if (totalSpent >= 20000) return discount = SILVER_DISCOUNT;
  if (totalSpent >= 5000) return discount = BRONZE_DISCOUNT;
  else { discount = BASE_DISCOUNT; }
  return discount;
}
// console.log(getDiscount(115000));


function checkForSpam(message) {
  return message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
}
// console.log(checkForSpam('saLe'));

const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

function sayHi() {
  console.log("Hello, this is my first function!");
}
// sayHi();

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = SAVED_PASSWORD === password;
  return isMatch;
}

function checkStorage(available, ordered) {
  let message = available >= ordered ? "Order is processed, our manager will contact you." : "Not enough goods in stock!";
  return message;
}
// console.log(checkStorage(100, 150));

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  const totalPrice = pricePerDroid * orderedQuantity;
  return totalPrice > customerCredits ? "Insufficient funds!" : `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
}

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

{
  function checkStorage(available, ordered) {
    return !ordered ? "There are no products in the order!" : ordered > available ? "Your order is too large, there are not enough items in stock!" : "The order is accepted, our manager will contact you";
  }
}

function formatMessage(message, maxLength) {
  let result;
  result = maxLength >= message.length ? message : message.slice(0, maxLength) + '...';
  return result;
}
console.log(formatMessage("Vestibulum facilisis purus nec", 30));