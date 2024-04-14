

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
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: 'Henry',
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com"
  },
};
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const [firstTag] = apartment.tags;
const lastTag = apartment.tags[numberOfTags - 1];

const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: 'Jamaica',
  city: 'Kingston',
};

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: "jqueryismyjam",
};

// console.log(credentials);


{
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };

  const keys = [];

  for (const key in apartment) {
    if (Object.hasOwnProperty.call(apartment, key)) {
      keys.push(key);
    }
  }
  const values = [];

  for (const key in apartment) {
    if (Object.hasOwnProperty.call(apartment, key)) {
      const element = apartment[key];
      values.push(element);
    }
  }
  console.log(keys);
  console.log(values);
}