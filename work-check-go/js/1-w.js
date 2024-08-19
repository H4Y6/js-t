function checkForSpam(message) {
  return /sale|spam/gi.test(message);
  return result;
}

const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

function sayHi() {
  console.log("Hello, this is my function!");
}
// sayHi();

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  return a + b + c;
}
// add(2, 5, 8);

// console.log(add(5, 10, 15));

function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
};
// console.log(makeMessage('Reactor', 8000));

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
};
// console.log(calculateTotalPrice(5, 100));

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  return `You ordered droids worth ${pricePerDroid * orderedQuantity + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
}
// console.log(makeOrderMessage(2, 100, 50));

function isAdult(age) {
  return age >= 18;
}
// console.log(isAdult(20));

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === SAVED_PASSWORD;
  return isMatch;
}

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }
  return message;
}

function checkStorage(available, ordered) {
  let message;
  if (available < ordered) {
    message = "Not enough goods in stock!";
  } else { message = "Order is processed, our manager will contact you."; }
  return message;
}

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else { message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`; }
  return message;
}
// console.log(makeTransaction(3000, 5, 23000));

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
    let message;
    if (!ordered) {
      message = "There are no products in the order!";
    } else if (ordered > available) {
      message = "Your order is too large, there are not enough items in stock!";
    } else {
      message = "The order is accepted, our manager will contact you";
    }

    return message;
  }
}

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;

  return isInRange;
}

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip';

  return canAccessContent;
}

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;

  return isNotInRange;
}