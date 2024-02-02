const Car = function ({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};

const car = new Car({
    brand: 'Audi',
    model: 'A3',
    price: 33555,
});
console.log(car);

// console.log(Car.prototype);

Car.prototype.sayOk = function () {
    console.log('Car.prototype.sayOk -> this:', this);
    console.log("Ok");
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};

car.changePrice(33345);
console.log('New price:', car.price);

// Car.sayOk = function () {
//     console.log('Car.sayOk -> this:', this);
//     console.log("Ok");
// };

// car.sayOk();
// Car.sayOk();

const newCar = new Car();
console.log(newCar);

/**                   User()                                       */

const User = function ({ email, password } = {}) {
    this.email = email;
    this.password = password;
};

console.log('User.prototype:', User.prototype);

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
};

const dingo = new User({
    email: 'erwin@pops.om',
    password: 2222,
});

console.log(dingo.email);

dingo.changeEmail('futo@poli.om');

console.log(dingo.email);

/**                 Static methods                                */

User.logInfo = function (obj) {
    console.log('email:', obj.email);
    console.log('password:', obj.password);
    console.log('User.logInfo -> obj', obj);
};

User.logInfo(dingo);

console.dir(User);

Object.keys(dingo);      /**  -->    static method */
Object.values(dingo);    /**  -->    static method */
Math.PI;                 /**  -->    static method */
Math.round(5.7);         /**  -->    static method */

/**          --------------------         */

const objS = { s: 2 };

console.log(objS.__proto__ === Object.prototype);   /**  true   */