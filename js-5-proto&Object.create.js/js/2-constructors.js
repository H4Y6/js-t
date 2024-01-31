/*
 * Основи ООП: клас, екземпляр (об'єкт), інтерфейс
 */

/*
 * Функції-конструктори
 * - Найменування
 * - Оператор new
 * - Властивість Function.prototype
 */
{
  const Car = function ({ brand, model, price } = {}) {
    // const { brand, model, price } = config;
    // 2. Функція викликається в контексті створеного объекту,
    //    тобто в this записується посилання на нього
    this.brand = brand;
    this.model = model;
    this.price = price;

    // 3. У властивість this.__proto__ записується посилання на об'єкт Car.prototype
    //    тобто Car.prototype є ПРОТОТИПОМ майбутнього обьекту (екземпляру)

    // 4. Посилання на об'єкт повертається в місце виклику new Car
  };

  Car.prototype.sayHi = function () {
    // console.log('Car.prototype.sayHi -> this', this);
    // console.log('Hello :) ');
  };

  Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
  };

  // console.log(Car.prototype);

  // 1. Якщо  функція викликається через new, створюється пустий об'єкт
  const myCar = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
  });
  // console.log(myCar);

  myCar.sayHi();
  myCar.changePrice(10000);

  const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
  // console.log(myCar2);

  myCar2.sayHi();

  const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
  // console.log(myCar3);

  myCar3.sayHi();

  /** -----------------------    User       -------------------------*/

  const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
  };

  // console.log(User.prototype);

  User.prototype.changeEmail = function (newMail) {
    this.email = newMail;
  };

  const mango = new User({ email: 'mango@mail.com', password: 1111111 });

  mango.changeEmail('my-new-mail@mail.com');
  // console.log(mango);

  /*
   * Статичні властивості та методи
   * - Статичні властивості та методи доступні лише у самому конструкторі
   * - В статичних методах не потрібен this ( але він є )
   */

  User.message =
    'Я статична властивість, мене немає на екземплярах чи у прототипі.';

  User.logInfo = function (obj) {
    console.log('User.logInfo -> obj', obj);
    console.log('Пошта: ', obj.email);
    console.log('Пароль: ', obj.password);
  };
}

// User.logInfo(mango);

// Object.keys()
// Object.value()

// 1. Кожен об'єкт має властивість __proto__
// 2. В цій властивості __proto__ лежить посилання на його ПРОТОТИП, тобто на інший обьект
// 3. При створенні літерала обьекту, у властивість __proto__ записується посилання на Function.prototype
// 4. Функцsя-конструктор - це просто функція :)
// 5. Вся магія створюється завдяки операторові new
// 6. Коли функція викликається через new, виникає пустий об'єкт
// 7. Функція викликається в контексті створеного объекту
// 8. У властивість this.__proto__ записується посилання на об'єкт Функція.prototype
// 9. Посилання на об'єкт повертається в місце виклику new Фунукція()

const objOne = {};
// console.log(objOne.__proto__ === Object.prototype, objOne);


const Car = function ({ brand, model, price } = []) {
  this.brand = brand;
  this.model = model;
  this.price = price;

  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
};

const myCar = new Car({
  brand: 'Audi',
  model: 'Q7',
  price: 32000,
});
console.log(myCar);

const myNewCar = new Car({
  brand: 'Audi',
  model: 'M1',
  price: 25000,
});
console.log(myNewCar);

const myNewestCar = new Car({
  brand: 'VW',
  model: 'D4',
  price: 21000,
});

console.log(myNewestCar);