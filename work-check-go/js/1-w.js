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

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  if (totalSpent < 5000) { discount = BASE_DISCOUNT; }
  else if (totalSpent < 20000) { discount = BRONZE_DISCOUNT; }
  else if (totalSpent < 50000) { discount = SILVER_DISCOUNT; } else {
    discount = GOLD_DISCOUNT;
  }

  return discount;
}
// console.log(getDiscount(137000));

{
  function checkStorage(available, ordered) {
    return ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  }
  // console.log(checkStorage(100, 50));
}

{
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
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

    default: price = 50;
  }
  return price;
}
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

{
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    switch (password) {
      case null:
        message = "Canceled by user!";
        break;


      case ADMIN_PASSWORD:
        message = "Welcome!";
        break;

      default:
        message = "Access denied, wrong password!";

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

    default: return "Sorry, there is no delivery to your country";
  }

  return message = `Shipping to ${country} will cost ${price} credits`;
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
  result = message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
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
    authors: ["Bernard Cornwell", "Robert Sheckley"],
    getAuthors() { return this.authors; },
    addAuthor(authorName) { this.authors.push(authorName); },
  };
  // console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
  bookShelf.addAuthor("Tanith Lee");
  // console.log(bookShelf.getAuthors());

  const pizzaPalace = {
    pizzas: ["Supercheese", "Smoked", "Four meats"],
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
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
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
  customer.addOrder(5000, "Steak");
  // console.log(customer.getBalance()); // 19750
  // console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
}
{
  const historyService = {
    orders: [
      { email: "jacob@hotmail.com", dish: "Burrito" },
      { email: "solomon@topmail.net", dish: "Burger" },
      { email: "artemis@coldmail.net", dish: "Pizza" },
      { email: "solomon@topmail.net", dish: "Apple pie" },
      { email: "jacob@hotmail.com", dish: "Taco" },
    ],
    getOrdersLog() {
      return this.orders
        .map(order => `email: ${order.email} dish: ${order.dish}`)
        .join(" - ");
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
  const animal = { legs: 4, };
  const dog = Object.create(animal); dog.name = "Mango";
  // console.log(dog);
  // { name: 'Mango', __proto__: animal }
  // console.log(animal.isPrototypeOf(dog));

  // console.log(dog.hasOwnProperty("name"));   // true
  // console.log(dog.name); // 'Mango' 
  // console.log(dog.hasOwnProperty("legs")); // false console.log(dog.legs); // 4

  const parent = {
    name: "Stacey",
    surname: "Moore",
    age: 54,
    heritage: "Irish",
  };

  const child = Object.create(parent);
  child.name = "Jason";
  child.age = 27;
  // console.log(child);
}
{
  const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
  };

  const parent = Object.create(ancestor);
  parent.name = "Stacey";
  parent.surname = "Moore";
  parent.age = 54;

  const child = Object.create(parent);
  child.name = "Jason";
  child.age = 27;
}
{
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  const mango = new User("Mango", "mango@mail.com");
  // console.log(mango);

  class Car {
    constructor(brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
  }
}