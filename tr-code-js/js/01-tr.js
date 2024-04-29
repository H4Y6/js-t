

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
  const values = [];
  for (const key in apartment) {
    if (Object.hasOwnProperty.call(apartment, key)) {
      keys.push(key);
      values.push(apartment[key]);
    }
  }
}

{
  const keys = [];
  const values = [];
  const advert = {
    service: "apt",
  };
  const apartment = Object.create(advert);
  apartment.descr = "Spacious apartment in the city center";
  apartment.rating = 4;
  apartment.price = 2153;

  for (const key in apartment) {
    if (apartment.hasOwnProperty(key)) {
      keys.push(key);
      values.push(apartment[key]);
    }
  }
  // console.log(keys);
  // console.log(values);
}

{
  function countProps(object) {
    let propCount = 0;
    for (const key in object) {
      if (object.hasOwnProperty(key)) propCount += 1;
    }
    return propCount;
  }
  // console.log(countProps({ name: "Mango", age: 2 }));
}

{
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const values = [];
  const keys = Object.keys(apartment);
  for (const key of keys) {
    values.push(apartment[key]);
  }
  // console.log(keys, values);
}

{
  function countProps(object) {
    return Object.keys(object).length;
  }
  // console.log(countProps(apartment));
}

{
  function countTotalSalary(salaries) {
    let totalSalary = 0;
    const salaryArr = Object.values(salaries);
    for (const salary of salaryArr) {
      totalSalary += salary;
    }
    return totalSalary;
  }
  // console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
}


const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
{
  const hexColors = [];
  const rgbColors = [];

  for (const color of colors) {
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
  }
  // console.log(hexColors, rgbColors);
}


const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
{
  function getProductPrice(productName) {
    for (const product of products) {
      if (product.name === productName) return product.price;
    }
    return null;
  }
  // console.log(getProductPrice('Radar'));

  function getAllPropValues(propName) {
    const propValues = [];
    for (const product of products) {
      product[propName] ? propValues.push(product[propName]) : 0;
    }
    return propValues;
  }
  // console.log(getAllPropValues('quantity'));

  function calculateTotalPrice(productName) {
    for (const product of products) {
      if (product.name === productName) return product.price * product.quantity;
    }
    return 0;
  }
  // console.log(calculateTotalPrice("Radar"));
}

{
  const hexColors = [];
  const rgbColors = [];

  for (const { hex, rgb } of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
  }
  // console.log(hexColors, rgbColors);
}

{
  const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };

  const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
    tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
  } = forecast;

  // console.log(lowToday, highToday, highTomorrow, todayIcon);
}

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

{
  function calculateMeanTemperature(forecast) {
    const { today: { low: todayLow, high: todayHigh },
      tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;
    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }
}
{
  const scores = [89, 64, 42, 17, 93, 51, 26];
  const bestScore = Math.max(...scores);
  const worstScore = Math.min(...scores);
  // console.log(bestScore, worstScore);
}

{
  const firstGroupScores = [64, 42, 93];
  const secondGroupScores = [89, 14, 51, 26];
  const thirdGroupScores = [29, 47, 18, 97, 81];
  const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
  const bestScore = Math.max(...allScores);
  const worstScore = Math.min(...allScores);
  // console.log(bestScore, worstScore);
}

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  return { completed, category, priority, ...data, };
}
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));

{
  function add(...args) {
    let total = 0;
    for (const arg of args) {
      total += arg;
    }

    return total;
  }
}

{
  function addOverNum(number, ...args) {
    let total = 0;

    for (const arg of args) {
      if (arg <= number) continue;
      total += arg;
    }

    return total;
  }
  // console.log(addOverNum(15, 32, 6, 13, 19, 8));
}

{
  function findMatches(array, ...args) {
    const matches = [];
    for (const arg of args) {
      if (!array.includes(arg)) continue;
      matches.push(arg);
    }

    return matches;
  }
}

{
  const bookShelf = {
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
      return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
      return `Updating book ${oldName} to ${newName}`;
    },
  };
}

{
  const bookShelf = {
    books: ["The last kingdom", "Haze", "The guardian of dreams"],
    updateBook(oldName, newName) {
      const idx = this.books.indexOf(oldName);
      this.books.splice(idx, 1, newName);
    },
  };
}

{
  const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      this.potions.push(potionName);
    },
    removePotion(potionName) {
      const idx = this.potions.indexOf(potionName);
      this.potions.splice(idx, 1);
    },
    updatePotionName(oldName, newName) {
      const idx = this.potions.indexOf(oldName);
      this.potions.splice(idx, 1, newName);
    },
  };
}

{
  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      for (const { name } of this.potions) {
        if (name === newPotion.name) return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
      this.potions.push(newPotion);
    },
    removePotion(potionName) {

      for (let i = 0; i < this.potions.length; i++) {
        const element = this.potions[i];
        if (element.name !== potionName) continue;
        this.potions.splice(i, 1);
      }
    },
    updatePotionName(oldName, newName) {
      for (let i = 0; i < this.potions.length; i++) {
        const element = this.potions[i];
        if (element.name !== oldName) continue;
        this.potions[i].name = newName;
      }
    },
  };

}

{
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
  // console.log('parent:', parent);
  // console.log('child:', child);

  class Car {
    #brand;
    #model;
    #price;
    static #MAX_PRICE = 50000;
    static checkPrice(price) {
      return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : `Success! Price is within acceptable limits`;
    }

    constructor({ brand, model, price } = {}) {
      this.#brand = brand;
      this.#model = model;
      this.#price = price;
    }

    get brand() { return this.#brand; }
    // getBrand() { return this.#brand; }
    set brand(newBrand) { this.#brand = newBrand; }
    // changeBrand(newBrand) { this.#brand = newBrand; }
    get model() { return this.#model; }
    set model(newModel) { this.#model = newModel; }
    get price() { return this.#price; }
    // getPrice() { return this.#price; }
    set price(newPrice) { this.#price = newPrice > Car.#MAX_PRICE ? this.#price : newPrice; }
    // changePrice(newPrice) { this.#price > Car.MAX_PRICE ? this.#price : newPrice; }
  }
  const audi = new Car({ price: 36000 });
  const bmw = new Car({ price: 64000 });
  // console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
  // console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


  const car = new Car({ brand: "Audi", model: "Q3", price: 36000 });
  car.brand = 'Moto';
  // console.log('car.brand-> ', car.brand);
  car.model = 'M-4';
  // console.log('car.model-> ', car.model);
  car.price = 53333;
  // console.log('car.price-> ', car.price);
  // console.log('car:', car);

  class Storage {
    #items;
    constructor(items) {
      this.#items = items;
    }
    getItems() { return this.#items; }
    addItem(newItem) { this.#items.push(newItem); }
    // removeItem(itemToRemove) { return this.#items.splice(this.#items.indexOf(itemToRemove), 1); }
    removeItem(itemToRemove) { this.#items = this.#items.filter(item => item !== itemToRemove); }
  }
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
  // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
  storage.addItem("Droid");
  // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
  storage.removeItem("Prolonger");  /*  ['Prolonger']   */
  const storageRemoveItem = storage.removeItem.bind(storage);  /*  ['Prolonger']   */
  // storageRemoveItem('Prolonger');
  // storage.removeItem.call(storage, 'Prolonger');  /*  ['Prolonger']   */
  // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

  class StringBuilder {
    #value;
    constructor(initialValue) {
      this.#value = initialValue;
    }
    getValue() { return this.#value; }
    padEnd(str) { this.#value += str; }
    padStart(str) { this.#value = str + this.#value; }
    padBoth(str) { this.#value = [str, str].join(this.#value); }
    // padBoth(str) { this.#value = str + this.#value + str; }
  }
  const builder = new StringBuilder(".");
  // console.log(builder.getValue()); // "."
  builder.padStart("^");
  // console.log(builder.getValue()); // "^."
  builder.padEnd("^");
  // console.log(builder.getValue()); // "^.^"
  builder.padBoth("=");
  // console.log(builder.getValue()); // "=^.^="


  class User {
    static #takenEmails = [];
    static isEmailTaken(email) { return User.#takenEmails.includes(email); }
    #email;
    constructor({ email }) {
      this.#email = email;
      User.#takenEmails.push(email);
    }
  }
  const mango = new User({ email: "mango@mail.com" });
  // console.log(User.isEmailTaken("poly@mail.com"));
  // console.log(User.isEmailTaken("mango@mail.com"));
}

{
  class User {
    constructor(email) {
      this._email = email;
    }
    get email() { return this._email; }
    set email(newEmail) { this._email = newEmail; }
  }
  class ContentEditor extends User {
    constructor({ email, posts }) {
      // Вызов конструктора родительского класса User 
      super(email);
      this.posts = posts;
    }
  }
  const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
  // console.log('editor ->', editor); // { email: 'mango@mail.com', posts: [] }
  // console.log(editor.email); // 'mango@mail.com'
}

{
  class User {
    constructor(email) {
      this._email = email;
    }

    get email() {
      return this._email;
    }

    set email(newEmail) {
      this._email = newEmail;
    }
  }

  class Admin extends User {
    static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
      this.blacklistedEmails = [];
    }
    blacklist(email) {
      this.blacklistedEmails.push(email);
    }
    isBlacklistedEmail(email) {
      return this.blacklistedEmails.includes(email);
    }
  }

  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  // console.log(mango.email); // "mango@mail.com"
  // console.log(mango.accessLevel); // "superuser"

  mango.blacklist("poly@mail.com");
  // console.log(mango.isBlacklistedEmail('mango@mail.com'));
  // console.log(mango.isBlacklistedEmail('poly@mail.com'));

  // console.log(Admin.AccessLevel.BASIC);
  // console.log(Admin.AccessLevel.SUPERUSER);

}

{
  class User {
    email;

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

    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };

    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
      this.blacklistedEmails = [];
    }

    blacklist(email) {
      this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
      return this.blacklistedEmails.includes(email);
    }
  }

  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  // console.log(mango.email); // "mango@mail.com"
  // console.log(mango.accessLevel); // "superuser"

  mango.blacklist("poly@mail.com");
  // console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  // console.log(mango.isBlacklisted("mango@mail.com")); // false
  // console.log(mango.isBlacklisted("poly@mail.com")); // true
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
    padEnd(str) { this.#value += str; }
    padStart(str) { this.#value = str + this.#value; }
    padBoth(str) { this.#value = [str, str].join(this.#value); }
    // padBoth(str) { this.padStart(str) + this.padEnd(str); }
  }
  const builder = new StringBuilder(".");

  class Car {
    #_brand;
    #_model;
    #_price;
    static #MAX_PRICE = 50000;
    static checkPrice(price) { return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits"; }
    constructor({ brand, model, price }) {
      this.#_brand = brand;
      this.#_model = model;
      this.#_price = price;
    }
    get brand() { return this.#_brand; }
    set brand(newBrand) { this.#_brand = newBrand; }
    get model() { return this.#_model; }
    set model(newModel) { this.#_model = newModel; }
    get price() { return this.#_price; }
    set price(newPrice) { this.#_price = newPrice > Car.#MAX_PRICE ? this.#_price : newPrice; }
  }
  const car = new Car({ brand: 'Kia', model: 'L9', price: 22333 });
  car.price = 55000;
  // console.log("kia ->", car);
  // console.log(Car.checkPrice(car.price));

  class Storage {
    #items;
    constructor(items) {
      this.#items = items;
    }
    getItems() { return this.#items; }
    addItem(newItem) { this.#items.push(newItem); }
    removeItem(itemToRemove) { this.#items = this.#items.filter(item => item !== itemToRemove); }
  }
  const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

  class User {
    constructor(email) {
      this._email = email;
    }

    get email() {
      return this._email;
    }

    set email(newEmail) {
      this._email = newEmail;
    }
  }

  class Admin extends User {
    static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
    constructor({ email, accessLevel, blacklistedEmails = [] }) {
      super(email);
      this.accessLevel = accessLevel;
      this.blacklistedEmails = blacklistedEmails;
    }
    blacklist(email) { this.blacklistedEmails.push(email); }

    isBlacklisted(email) { return this.blacklistedEmails.includes(email); }
  }
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });

  console.log(mango.email); // "mango@mail.com"
  console.log(mango.accessLevel); // "superuser"

  mango.blacklist("poly@mail.com");
  console.log(mango.blacklistedEmails); // ["poly@mail.com"]
  console.log(mango.isBlacklisted("mango@mail.com")); // false
  console.log(mango.isBlacklisted("poly@mail.com")); // true


}