const orderedQuantity = 6;
const pricePerDroid = 800;
const deliveryFee = 50;
const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

function sayHi() {
  console.log('Hello, this is my function!');
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
}
// console.log(makeMessage('Reactor', 8000));

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}
// console.log(calculateTotalPrice(5, 100));

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  return `You ordered droids worth ${
    pricePerDroid * orderedQuantity + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;
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
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }
  return message;
}

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = 'Insufficient funds!';
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
  }
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
      message = 'There are no products in the order!';
    } else if (ordered > available) {
      message = 'Your order is too large, there are not enough items in stock!';
    } else {
      message = 'The order is accepted, our manager will contact you';
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

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  } else if (totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else {
    discount = GOLD_DISCOUNT;
  }

  return discount;
}
// console.log(getDiscount(137000));

{
  function checkStorage(available, ordered) {
    return ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';
  }
  // console.log(checkStorage(100, 50));
}

{
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    message =
      password === ADMIN_PASSWORD
        ? 'Access is allowed'
        : 'Access denied, wrong password!';
    return message;
  }
  // console.log(checkPassword("angul4r1sl1f3"));
}

function getSubscriptionPrice(type) {
  let price;
  switch (type) {
    case 'starter':
      price = 0;
      break;

    case 'professional':
      price = 20;
      break;

    default:
      price = 50;
  }
  return price;
}
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

{
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    switch (password) {
      case null:
        message = 'Canceled by user!';
        break;

      case ADMIN_PASSWORD:
        message = 'Welcome!';
        break;

      default:
        message = 'Access denied, wrong password!';
    }
    return message;
  }
}

function getShippingCost(country) {
  let message;
  let price;

  switch (country) {
    case 'China':
      price = 100;
      break;

    case 'Chile':
      price = 250;
      break;

    case 'Austrlia':
      price = 170;
      break;

    case 'Jamaica':
      price = 100;
      break;

    default:
      return 'Sorry, there is no delivery to your country';
  }

  return (message = `Shipping to ${country} will cost ${price} credits`);
}

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}

function formatMessage(message, maxLength) {
  let result;
  result =
    message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
  return result;
}
// console.log(formatMessage("Curabitur ligula sapien", 16));

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();
  return normalizedInput;
}

function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}

function checkForSpam(message) {
  return /sale|spam/gi.test(message);
}

{
  const bookShelf = {
    authors: ['Bernard Cornwell', 'Robert Sheckley'],
    getAuthors() {
      return this.authors;
    },
    addAuthor(authorName) {
      this.authors.push(authorName);
    },
  };
  // console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
  bookShelf.addAuthor('Tanith Lee');
  // console.log(bookShelf.getAuthors());

  const pizzaPalace = {
    pizzas: ['Supercheese', 'Smoked', 'Four meats'],
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);

      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }

      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
  };

  // console.log(pizzaPalace.checkPizza('Smoked'));
  // console.log(pizzaPalace.order('Four meats'));
}
{
  const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
  };

  customer.setDiscount(0.15);
  // console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, 'Steak');
  // console.log(customer.getBalance()); // 19750
  // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
}
{
  const historyService = {
    orders: [
      { email: 'jacob@hotmail.com', dish: 'Burrito' },
      { email: 'solomon@topmail.net', dish: 'Burger' },
      { email: 'artemis@coldmail.net', dish: 'Pizza' },
      { email: 'solomon@topmail.net', dish: 'Apple pie' },
      { email: 'jacob@hotmail.com', dish: 'Taco' },
    ],
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(' - ');
    },
    getEmails() {
      const emails = this.orders.map(order => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
  };
}
{
  const animal = { legs: 4 };
  const dog = Object.create(animal);
  dog.name = 'Mango';
  // console.log(dog);
  // { name: 'Mango', __proto__: animal }
  // console.log(animal.isPrototypeOf(dog));

  // console.log(dog.hasOwnProperty("name"));   // true
  // console.log(dog.name); // 'Mango'
  // console.log(dog.hasOwnProperty("legs")); // false console.log(dog.legs); // 4

  const parent = {
    name: 'Stacey',
    surname: 'Moore',
    age: 54,
    heritage: 'Irish',
  };

  const child = Object.create(parent);
  child.name = 'Jason';
  child.age = 27;
  // console.log(child);
}
{
  const ancestor = {
    name: 'Paul',
    age: 83,
    surname: 'Dawson',
    heritage: 'Irish',
  };

  const parent = Object.create(ancestor);
  parent.name = 'Stacey';
  parent.surname = 'Moore';
  parent.age = 54;

  const child = Object.create(parent);
  child.name = 'Jason';
  child.age = 27;
}
{
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  const mango = new User('Mango', 'mango@mail.com');
  // console.log(mango);

  class Car {
    constructor(brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  }
}
{
  class Car {
    constructor({ brand, model, price }) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    getPrice() {
      return this.price;
    }
    changePrice(newPrice) {
      this.price = newPrice;
    }
  }
}
{
  class Storage {
    #items;
    constructor(items) {
      this.#items = items;
    }
    getItems() {
      return this.#items;
    }
    addItem(newItem) {
      this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
      this.#items.splice(this.#items.indexOf(itemToRemove), 1);
    }
  }

  const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
  // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem('Droid');
  // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem('Prolonger');
  // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
}
{
  class StringBuilder {
    #value;
    constructor(initialValue) {
      this.#value = initialValue;
    }
    getValue() {
      return this.#value;
    }
    padEnd(str) {
      this.#value += str;
    }
    padStart(str) {
      this.#value = str + this.#value;
    }
    padBoth(str) {
      this.padStart(str);
      this.padEnd(str);
      // this.#value += str;
    }
  }

  const builder = new StringBuilder('.');
  // console.log(builder.getValue()); // "."
  builder.padStart('^');
  // console.log(builder.getValue()); // "^."
  builder.padEnd('^');
  // console.log(builder.getValue()); // "^.^"
  builder.padBoth('=');
  // console.log(builder.getValue()); // "=^.^="
}
{
  class Car {
    static MAX_PRICE = 50000;
    #brand;
    #model;
    #price;
    constructor({ brand, model, price }) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }
    get brand() {
      return this.#brand;
    }
    set brand(newBrand) {
      this.#brand = newBrand;
    }
    get model() {
      return this.#model;
    }
    set model(newModel) {
      this.#model = newModel;
    }
    get price() {
      return this.#price;
    }
    set price(newPrice) {
      if (newPrice > Car.MAX_PRICE) {
        return;
      }
      this.#price = newPrice;
    }
  }
}
{
  class Car {
    static #MAX_PRICE = 50000;
    static checkPrice(price) {
      if (price > this.#MAX_PRICE) {
        return 'Error! Price exceeds the maximum';
      }
      return 'Success! Price is within acceptable limits';
    }

    constructor({ price }) {
      this.price = price;
    }
  }

  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });

  // console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
  // console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"
}
{
  class User {
    constructor(email) {
      this.email = email;
    }

    get email() {
      return this.email;
    }

    set email(newEmail) {
      this.email = newEmail;
    }
  }

  class Admin extends User {
    static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
  }
}
{
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get mail() {
      return this.email;
    }

    set mail(newEmail) {
      this.email = newEmail;
    }
  }

  class Admin extends User {
    static AccessLevel = {
      BASIC: 'basic',
      SUPERUSER: 'superuser',
    };

    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }
  }

  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  // console.log(mango.email); // "mango@mail.com"
  // console.log(mango.accessLevel); // "superuser"
}
{
  class User {
    email;

    constructor(email) {
      this.email = email;
    }

    get mail() {
      return this.email;
    }

    set mail(newEmail) {
      this.email = newEmail;
    }
  }

  class Admin extends User {
    static AccessLevel = {
      BASIC: 'basic',
      SUPERUSER: 'superuser',
    };

    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }

    blacklistedEmails = [];

    blacklist(email) {
      this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
      return this.blacklistedEmails.includes(email);
    }
  }

  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  // console.log(mango.email); // "mango@mail.com"
  // console.log(mango.accessLevel); // "superuser"

  mango.blacklist('poly@mail.com');
  // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  // console.log(mango.isBlacklisted('mango@mail.com')); // false
  // console.log(mango.isBlacklisted('poly@mail.com')); // true
}

{
  const pricePerItem = 3500;
  const orderedQuantity = 4;

  const totalPrice = pricePerItem * orderedQuantity;

  const productName = 'Droid';

  const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
  // console.log(message);
}

{
  const orderedQuantity = 6;
  const pricePerDroid = 800;
  const deliveryFee = 50;
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // console.log(message);
}

{
  function add(a, b, c) {
    // console.log(`Addition result equals ${a + b + c}`);
    return a + b + c;
  }
  // console.log(add(3, 6, 97));
}

{
  function makeMessage(name, price) {
    return `You picked ${name}, price per item is ${price} credits`;
  }

  function calculateTotalPrice(orderedQuantity, pricePerItem) {
    return orderedQuantity * pricePerItem;
  }

  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    return `You ordered droids worth ${
      orderedQuantity * pricePerDroid + deliveryFee
    } credits. Delivery (${deliveryFee} credits) is included in total price.`;
  }

  function isAdult(age) {
    return age >= 18;
  }

  function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    const isMatch = SAVED_PASSWORD === password;
    return isMatch;
  }

  function checkAge(age) {
    if (age < 18) {
      return 'You are a minor';
    } else {
      return 'You are an adult ';
    }
  }
  // console.log(checkAge(22));

  {
    function checkStorage(available, ordered) {
      if (ordered > available) return 'Not enough goods in stock!';
      return 'Order is processed, our manager will contact you.';
    }
  }

  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    const totalPrice = pricePerDroid * orderedQuantity;
    if (totalPrice > customerCredits) return 'Insufficient funds!';

    return `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } credits left`;
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

  function checkStorage(available, ordered) {
    let message;

    if (ordered === 0) {
      message = 'There are no products in the order!';
    } else if (ordered > available) {
      message = 'Your order is too large, there are not enough items in stock!';
    } else {
      message = 'The order is accepted, our manager will contact you';
    }

    return message;
  }

  function isNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;

    return isInRange;
  }

  function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === 'pro' || subType === 'vip';
    return canAccessContent;
  }
}
{
  function isNotInRange(start, end, number) {
    return !(start < number && end > number);
  }

  function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;

    if (!(totalSpent < 50000)) {
      discount = GOLD_DISCOUNT;
    } else if (!(totalSpent < 20000)) {
      discount = SILVER_DISCOUNT;
    } else if (!(totalSpent < 5000)) {
      discount = BRONZE_DISCOUNT;
    } else {
      discount = BASE_DISCOUNT;
    }

    return discount;
  }

  const age = 18;
  // console.log(age < 18 ? 'child' : 'adult');

  function checkStorage(available, ordered) {
    return ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';
  }

  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';

    // return password === ADMIN_PASSWORD
    //   ? 'Access is allowed'
    //   : 'Access denied, wrong password!';

    message =
      password === ADMIN_PASSWORD
        ? 'Access is allowed'
        : 'Access denied, wrong password!';

    return message;
  }

  function getSubscriptionPrice(type) {
    let price;
    switch (type) {
      case 'starter':
        price = 0;
        break;

      case 'professional':
        price = 20;
        break;

      case 'organization':
        price = 50;
        break;
    }

    return price;
  }
}
{
  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    switch (password) {
      case null:
        message = 'Canceled by user!';
        break;

      case ADMIN_PASSWORD:
        message = 'Welcome!';
        break;

      default:
        message = 'Access denied, wrong password!';
    }

    return message;
  }

  function getShippingCost(country) {
    let message = 'Sorry, there is no delivery to your country';

    switch (country) {
      case 'China':
        message = 'Shipping to China will cost 100 credits';
        break;

      case 'Chile':
        message = 'Shipping to Chile will cost 250 credits';
        break;

      case 'Australia':
        message = 'Shipping to Australia will cost 170 credits';
        break;

      case 'Jamaica':
        message = 'Shipping to Jamaica will cost 120 credits';
        break;
    }

    return message;
  }
  // console.log(getShippingCost('Jamaica'));

  function getNameLength(name) {
    return `Name ${name} is ${name.length} characters long`;
  }

  const courseTopic = 'JavaScript essentials';

  const courseTopicLength = courseTopic.length;
  const firstElement = courseTopic[0];
  const lastElement = courseTopic[courseTopicLength - 1];

  function getSubstring(string, length) {
    return string.slice(0, length);
  }

  function formatMessage(message, maxLength) {
    return message.length > maxLength
      ? message.slice(0, maxLength) + '...'
      : message;
  }

  function normalizedInput(input) {
    return input.toLowerCase();
  }

  function checkForName(fullName, name) {
    return fullName.includes(name);
  }

  function checkForSpam(message) {
    return (
      message.toLowerCase().includes('spam') ||
      message.toLowerCase().includes('sale')
    );
  }
}

{
  function checkStorage(available, ordered) {
    if (ordered === 0) return 'Your order is empty!';
    if (ordered > available)
      return 'Your order is too large, not enough goods in stock!';

    return 'The order is accepted, our manager will contact you';
  }

  // console.log(checkStorage(122, 33));

  function getExtremeElements(array) {
    return [array[0], array[array.length - 1]];
  }

  function splitMessage(message, delimiter) {
    return message.split(delimiter);
  }

  function calculateEngravingPrice(message, pricePerWord) {
    return message.split(' ').length * pricePerWord;
  }

  function makeStringFromArray(array, delimiter) {
    return array.join(delimiter);
  }

  function slugify(title) {
    // return title.toLowerCase().replace(' ', '-');
    return title.toLowerCase().split(' ').join('-');
  }

  // console.log(slugify('Arrays for begginers'));

  const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

  const firstTwoEls = fruits.slice(0, 2);
  const nonExtremeEls = fruits.slice(1, fruits.length - 1);
  const lastThreeEls = fruits.slice(-3);

  function makeArray(firstArray, secondArray, maxLength) {
    return firstArray.concat(secondArray).slice(0, maxLength);
  }

  function calculateTotal(number) {
    let sum = 0;

    for (let index = 0; index <= number; index++) {
      sum += index;
    }

    return sum;
  }

  // console.log(calculateTotal(1));

  function calculateTotalPrice(order) {
    let total = 0;

    for (let i = 0; i < order.length; i += 1) {
      total += order[i];
    }

    return total;
  }

  function findLongestWord(string) {
    let word = '';
    let max = 0;
    const words = string.split(' ');

    for (let i = 0; i < words.length; i += 1) {
      if (max < words[i].length) {
        max = words[i].length;
        word = words[i];
      }
    }

    return word;
  }

  // console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

  function createArrayOfNumbers(min, max) {
    const numbers = [];

    for (let i = min; i <= max; i += 1) {
      numbers.push(i);
    }

    return numbers;
  }

  function filterArray(numbers, value) {
    const filteredArray = [];

    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > value) {
        filteredArray.push(numbers[i]);
      }
    }
    return filteredArray;
  }

  function checkFruit(fruit) {
    return fruits.includes(fruit);
  }
  // console.log(checkFruit('banana'));

  function getCommonEls(array1, array2) {
    const commonArray = [];

    for (let i = 0; i < array1.length; i += 1) {
      if (array2.includes(array1[i])) commonArray.push(array1[i]);
    }

    return commonArray;
  }

  // console.log(getCommonEls([1, 2, 3], [2, 1, 17, 19]));
}

{
  function calculateTotalPrice(order) {
    let total = 0;

    for (const el of order) {
      total += el;
    }

    return total;
  }
  // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

  function filterArray(numbers, value) {
    const filtered = [];

    for (const number of numbers) {
      number > value ? filtered.push(number) : [];
    }

    return filtered;
  }

  // console.log(filterArray([12, 24, 8, 41, 76], 20));

  function getEvenNumbers(start, end) {
    const even = [];

    for (let i = start; i <= end; i += 1) {
      i % 2 ? null : even.push(i);
    }
    return even;
  }

  // console.log(getEvenNumbers(3, 11));

  function includes(array, value) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === value) return true;
    }
    return false;
  }

  // console.log(includes([1, 2, 3, 4, 5], 17));
}
{
  function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }

  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  }

  function makeMessage(pizzaName, cb) {
    return cb(pizzaName);
  }

  // console.log(makeMessage('Royal Grand', makePizza));
}
{
  const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
      if (this.pizzas.includes(pizzaName)) {
        return onSuccess(pizzaName);
      } else {
        return onError(
          `There is no pizza with a name ${pizzaName} in the assortment.`,
        );
      }
    },
  };

  function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
  }

  function onOrderError(error) {
    return `Error! ${error}`;
  }

  function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;

    orderedItems.forEach(function (item) {
      totalPrice += item;
    });

    return totalPrice;
  }

  function filterArray(numbers, value) {
    const filteredNumbers = [];

    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });

    return filteredNumbers;
  }

  function getCommonElements(firstArray, secondArray) {
    const commonElements = [];

    firstArray.forEach(el => {
      if (secondArray.includes(el)) {
        commonElements.push(el);
      }
    });

    return commonElements;
  }

  const calculatePrice = (quantity, pricePerItem) => {
    return quantity * pricePerItem;
  };

  const calculateTotal = (quantity, pricePerItem) => quantity * pricePerItem;
}
{
  const calculateTotalPrice = orderedItems => {
    let totalPrice = 0;

    orderedItems.forEach(item => (totalPrice += item));

    return totalPrice;
  };

  const filterArray = (numbers, value) => {
    const filteredNumbers = [];
    numbers.forEach(number =>
      number > value ? filteredNumbers.push(number) : 0,
    );
    return filteredNumbers;
  };

  const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];
    firstArray.forEach(el =>
      secondArray.includes(el) ? commonElements.push(el) : 0,
    );
    return commonElements;
  };

  function changeEven(numbers, value) {
    const changed = [];
    numbers.forEach(num =>
      num % 2 ? changed.push(num) : changed.push(num + value),
    );

    return changed;
  }

  // console.log(changeEven([1, 2, 3, 4, 5], 10));

  const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
  const planetsLengths = planets.map(pl => pl.length);
  // console.log(planetsLengths);

  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
  ];

  const titles = books.map(({ title }) => title);
  const genres = books.flatMap(({ genres }) => genres);
}
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ];

  const getUserNames = users => users.map(({ name }) => name);
  const getUserEmails = users => users.map(({ email }) => email);
  const getUsersWithEyeColor = (users, color) =>
    users.filter(({ eyeColor }) => color === eyeColor);
  const getUsersWithAge = (users, minAge, maxAge) =>
    users.filter(({ age }) => age >= minAge && age <= maxAge);
  const getUsersWithFriend = (users, friendName) =>
    users.filter(({ friends }) => friends.includes(friendName));
  const getFriends = users =>
    users
      .flatMap(({ friends }) => friends)
      .filter((fr, i, arr) => arr.indexOf(fr) === i);

  const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

  const evenNumbers = numbers.filter(num => !(num % 2));
  const oddNumbers = numbers.filter(num => num % 2);

  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      genres: ['adventure', 'history'],
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      genres: ['fiction', 'mysticism'],
    },
    {
      title: 'Redder Than Blood',
      author: 'Tanith Lee',
      genres: ['horror', 'mysticism', 'adventure'],
    },
  ];
  const allGenres = books.flatMap(({ genres }) => genres);
  const uniqueGenres = allGenres.filter((el, i, arr) => i === arr.indexOf(el));

  const MIN_RATING = 8;
  const AUTHOR = 'Bernard Cornwell';

  const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
  const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

  const sortedByAuthorName = [...books].sort((a, b) =>
    a.author.localeCompare(b.author),
  );
  const sortedByReversedAuthorName = [...books].sort((a, b) =>
    b.author.localeCompare(a.author),
  );

  const sortedByAscendingRating = [...books].sort(
    (a, b) => a.rating - b.rating,
  );

  const sortedByDescentingRating = [...books].sort(
    (a, b) => b.rating - a.rating,
  );
}
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
      age: 37,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
      age: 34,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
      age: 24,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
      age: 21,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
      age: 27,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
      age: 38,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
      age: 39,
    },
  ];

  const getFriends = users =>
    users
      .flatMap(({ friends }) => friends)
      .filter((fr, i, arr) => i === arr.indexOf(fr));
  // console.log(getFriends(users));

  const getActiveUsers = users => users.filter(({ isActive }) => isActive);
  // console.log(getActiveUsers(users));

  const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);
  const getUserWithEmail = (users, email) =>
    users.find(user => user.email === email);
  const isEveryUserActive = users => users.every(({ isActive }) => isActive);
  const isAnyUserActive = users => users.some(({ isActive }) => isActive);
  const calculateTotalBalance = users =>
    users.reduce((total, { balance }) => total + balance, 0);
}
{
  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  ];
  const BOOK_TITLE = 'The Dream of a Ridiculous Man';
  const AUTHOR = 'Robert Sheckley';

  const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
  const bookByAuthor = books.find(({ author }) => author === AUTHOR);

  // console.log(bookWithTitle);
  // console.log(bookByAuthor);
}
{
  const firstArray = [26, 94, 36, 18];
  const secondArray = [17, 61, 23];
  const thirdArray = [17, 26, 94, 61, 36, 23, 18];

  const eachElementInFirstIsEven = firstArray.every(num => !(num % 2));
  const eachElementInFirstIsOdd = firstArray.every(num => num % 2);

  const eachElementInSecondIsEven = secondArray.every(num => !(num % 2));
  const eachElementInSecondIsOdd = secondArray.every(num => num % 2);

  const eachElementInThirdIsEven = thirdArray.every(num => !(num % 2));
  const eachElementInThirdIsOdd = thirdArray.every(num => num % 2);

  const anyElementInFirstIsEven = firstArray.some(num => !(num % 2));
  const anyElementInFirstIsOdd = firstArray.some(num => num % 2);

  const anyElementInSecondIsEven = secondArray.some(num => !(num % 2));
  const anyElementInSecondIsOdd = secondArray.some(num => num % 2);

  const anyElementInThirdIsEven = thirdArray.some(num => !(num % 2));
  const anyElementInThirdIsOdd = thirdArray.some(num => num % 2);
}
{
  const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
  };

  const playtimes = Object.values(players);
  const totalPlayTime = playtimes.reduce((acc, time) => acc + time, 0);
  const averagePlayTime = totalPlayTime / playtimes.length;
  // console.log(averagePlayTime);
}
{
  const players = [
    { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
    { name: 'Poly', playtime: 469, gamesPlayed: 2 },
    { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
    { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
  ];

  const totalAveragePlaytimePerGame = players.reduce(
    (acc, { playtime, gamesPlayed }) => acc + playtime / gamesPlayed,
    0,
  );
}
{
  const users = [
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      gender: 'male',
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      gender: 'female',
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      gender: 'male',
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      gender: 'female',
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      gender: 'male',
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      gender: 'male',
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      gender: 'female',
    },
  ];

  const calculateTotalBalance = users =>
    users.reduce((total, { balance }) => total + balance, 0);
  const getTotalFriendCount = users =>
    users.reduce((total, { friends }) => total + friends.length, 0);
  const sortByAscendingBalance = users =>
    [...users].sort((a, b) => a.balance - b.balance);
  const sortByDescendingFriendCount = users =>
    [...users].sort((a, b) => b.friends.length - a.friends.length);
  const sortByName = users =>
    [...users].sort((a, b) => a.name.localeCompare(b.name));

  const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
  const authors = [
    'Tanith Lee',
    'Bernard Cornwell',
    'Robert Sheckley',
    'Fyodor Dostoevsky',
  ];

  const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

  const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

  const authorsInAlphabetOrder = [...authors].sort((a, b) =>
    a.localeCompare(b),
  );
  const authorsInReversedOrder = [...authors].sort((a, b) =>
    b.localeCompare(a),
  );

  /** Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён
   *  пользователей отсортированный по возрастанию количества их друзей (свойство friends). */
  const getNamesSortedByFriendCount = users =>
    [...users]
      .sort((a, b) => a.friends.length - b.friends.length)
      .map(({ name }) => name);

  /**  Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён
   *  друзей (свойство friends) отсортированный по алфавиту . */
  const getSortedFriends = users =>
    [...users]
      .flatMap(({ friends }) => friends)
      .filter((f, i, arr) => arr.indexOf(f) === i)
      .sort((a, b) => a.localeCompare(b));
  // console.log(getSortedFriends(users));

  /**  Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс
   *  пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender. */

  const getTotalBalanceByGender = (users, gender) =>
    users
      .filter(user => gender === user.gender)
      .reduce((total, { balance }) => total + balance, 0);
  // console.log(getTotalBalanceByGender(users, 'female'));

  const books = [
    {
      title: 'The Last Kingdom',
      author: 'Bernard Cornwell',
      rating: 8.38,
    },
    {
      title: 'Beside Still Waters',
      author: 'Robert Sheckley',
      rating: 8.51,
    },
    {
      title: 'The Dream of a Ridiculous Man',
      author: 'Fyodor Dostoevsky',
      rating: 7.75,
    },
    { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
    {
      title: 'The Dreams in the Witch House',
      author: 'Howard Lovecraft',
      rating: 8.67,
    },
  ];

  const sortedByAuthorName = [...books].sort((first, second) =>
    first.author.localeCompare(second.author),
  );

  const sortedByReversedAuthorName = [...books].sort((first, second) =>
    second.author.localeCompare(first.author),
  );

  const sortedByAscendingRating = [...books].sort(
    (first, second) => first.rating - second.rating,
  );

  const sortedByDescentingRating = [...books].sort(
    (first, second) => second.rating - first.rating,
  );

  /**  Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке,
   * рейтинг книг которых больше значения переменной MIN_BOOK_RATING */
  const MIN_BOOK_RATING = 8;
  const names = [...books]
    .filter(({ rating }) => rating > MIN_BOOK_RATING)
    .map(({ author }) => author)
    .sort((a, b) => a.localeCompare(b));
  // console.log(names);

  const students = [
    { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
    { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
    { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
    { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
  ];

  const sortedNames = [...students]
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name }) => name);

  const uniqueSortedCourses = [...students]
    .flatMap(({ courses }) => courses)
    .filter((c, i, arr) => arr.indexOf(c) === i)
    .sort((a, b) => a.localeCompare(b));

  // console.log(sortByName(students));
  // console.log(uniqueSortedCourses);
}
{
  const pizzaPalace = {
    pizzas: ['Supercheese', 'Smoked', 'Four meats'],

    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);

      if (!isPizzaAvailable) {
        return `Sorry, there is no pizza named «${pizzaName}»`;
      }

      return `Order accepted, preparing «${pizzaName}» pizza`;
    },
  };

  const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],

    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      // this.balance -= cost * (1 - this.discount);
      this.orders.push(order);
    },
  };

  customer.setDiscount(0.15);
  // console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, 'Steak');
  // console.log(customer.getBalance()); // 19750
  // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

  const historyService = {
    orders: [
      { email: 'jacob@hotmail.com', dish: 'Burrito' },
      { email: 'solomon@topmail.net', dish: 'Burger' },
      { email: 'artemis@coldmail.net', dish: 'Pizza' },
      { email: 'solomon@topmail.net', dish: 'Apple pie' },
      { email: 'jacob@hotmail.com', dish: 'Taco' },
    ],

    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(' - ');
    },
    getEmails() {
      const emails = this.orders.map(order => order.email);
      const uniqueEmails = new Set(emails);
      return [...uniqueEmails];
    },
    getOrdersByEmail(email) {
      return this.orders.filter(order => order.email === email);
    },
  };
  // console.log(historyService.getOrdersLog());
}
