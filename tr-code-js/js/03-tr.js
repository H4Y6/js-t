{/**                  Matrix                */
    const matrix = [
        [1, 2],
        [3, 4],
    ];

    function flatArray(matrix) {
        const items = [];
        for (const row of matrix) {
            for (const item of row) {
                items.push(item);
            }
        }
        return items;
    }
    // console.log(flatArray(matrix));
}

const users = [
    { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, gender: "male" },
    { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, gender: "female" },
    { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, gender: "male" },
    { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, gender: "female" },
    { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"], isActive: true, balance: 3951, gender: "male" },
    { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"], isActive: false, balance: 1498, gender: "male" },
    { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, gender: "female" }
];

{   /**       map()        */

    // const getUserNames = array => { return array.map(({ name }) => name); };
    const getName = ({ name }) => name;                 /**  calback function   */
    const getUserNames = array => array.map(getName);
    // console.log(getUserNames(users));

    const getEmail = ({ email }) => email;               /**  calback function   */
    const getUsersEmail = (users).map(getEmail);
    // console.log(getUsersEmail);                 /**  declarative function map logged result  */

    const logger = (el, idx, arr) => console.log(`El:${el.name}, index:${idx}, length:${arr.length}.`);
    // logger(users[3], 3, users);

    const mapArray = (array, cb) => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            const newEl = cb(array[i], i, array);
            result.push(newEl);
        }
        return result;
    };
    // console.log(mapArray(users, getName));    /**  imperative function logged result  */
    // console.log(mapArray(users, getEmail));   /**  imperative function logged result  */
}

{   /**       flatMap()        */

    const getFriends = ({ friends }) => friends;  /**  calback function   */

    const flatMapArray = (array, cb) => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            const newEl = cb(array[i], i, array);

            if (Array.isArray(newEl)) {
                // result = [...result, ...newEl];   /**alternative way: via spread */

                for (const el of newEl) {
                    result.push(el);
                }
            } else { result.push(newEl); }
        }
        return result;
    };

    // console.log(flatMapArray(users, getFriends));  /**  imperative function logged result  */
    // console.log(users.flatMap(getFriends));        /**  declarative function flatMap logged result  */
}

{             /**       filter()        */

    const filterActive = (el, idx, arr) => el.isActive === true;

    const filterArray = (array, cb) => {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) {
                result.push(array[i]);
            }
        }
        return result;
    };
    // console.log(filterArray(users, filterActive));   /**  imperative function result*/
    // console.log(users.filter(filterActive));        /**  declarative function result*/
}

{               /**       find()        */

    const findEmail = ({ email }, idx, arr) => email === "sharlenebush@tubesys.com";

    const findArrayEl = (array, cb) => {
        let result;

        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) {
                result = array[i];
                break;  /** OR  */
                // return result;
            }
        }
        return result;
    };

    const findArrayIdx = (array, cb) => {
        let result;

        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) {
                result = i;
                break;  /** OR  */
                // return result;
            }
        }
        return result;
    };
    // console.log(findArrayEl(users, findEmail));  /**   imperative function result*/
    // console.log(findArrayIdx(users, findEmail)); /**   imperative function result*/
    // console.log(users.find(findEmail));          /**  declarative function result*/
}

{            /**       every()        */

    const checkEveryIsActive = ({ isActive }, idx, arr) => isActive;
    const checkEveryHasEmail = ({ email }, idx, arr) => email;

    const checkEveryInArray = (array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (!cb(array[i], i, array)) return false;
        }
        return true;
    };
    // console.log(checkEveryInArray(users, checkEveryIsActive));
    // console.log(users.every(checkEveryIsActive));
    // console.log(checkEveryInArray(users, checkEveryHasEmail));
    // console.log(users.every(checkEveryHasEmail));

}

{            /**       some()        */

    const checkSomeIsActive = ({ isActive }, idx, arr) => isActive;
    const checkSomeHasEmail = ({ email }, idx, arr) => email;

    const checkSomeInArray = (array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) return true;
        }
        return false;
    };
    // console.log(checkSomeInArray(users, checkSomeIsActive));
    // console.log(users.some(checkSomeIsActive));
    // console.log(checkSomeInArray(users, checkSomeHasEmail));
    // console.log(users.some(checkSomeHasEmail));
}

{            /**       reduce()        */
    const sum = (total, { balance }) => { return total + balance; };

    const reduceArray = (array, cb, initialValue) => {
        // let acc = initialValue ? initialValue : array[0];  /**  OR  */
        let acc = initialValue ?? array[0];
        const idx = initialValue === undefined ? 0 : 1;

        for (let i = idx; i < array.length; i++) {
            acc = cb(acc, array[i], i, array);
        }
        return acc;
    };

    // console.log(reduceArray(users, sum, 0));
    const totalBalance = users.reduce(sum, 0);
    // console.log(totalBalance);
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
    // console.log(pizzaPalace.order("Smoked"));

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
    // console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

    {
        const parent = {
            name: "Stacey",
            surname: "Moore",
            age: 54,
            heritage: "Irish",
        };

        const child = Object.create(parent);

        child.name = "Jason";
        child.age = 27;
        // console.table(child);
        // console.log(parent.isPrototypeOf(child));
        // console.table(child.__proto__);
    }
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
    // console.table(ancestor);
    // console.table(parent);
    // console.table(child);

    class Car {
        constructor({ brand, model, price }) {
            this.brand = brand;
            this.model = model;
            this.price = price;
        }
        getPrice() { return this.price; }
        changePrice(newPrice) { this.price = newPrice; }
    }
    const audi = new Car({ brand: "Audi", model: "Q3", price: 34000 });

    audi.changePrice(33000);
    // console.log('audi ->', audi);
    // console.log(audi.getPrice());

    class Storage {
        constructor(items) {
            this.items = items;
        }
        getItems() { return this.items; }
        addItem(newItem) { this.items.push(newItem); }
        removeItem(itemToRemove) { this.items.splice(this.items.indexOf(itemToRemove), 1); }
        // removeItem(itemToRemove) { this.items = this.items.filter(item => item !== itemToRemove); }
    }

    const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
    // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
    storage.addItem("Droid");
    // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
    storage.removeItem("Prolonger");
    // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

    class StringBuilder {
        constructor(initialValue) {
            this.value = initialValue;
        }
        getValue() { return this.value; }
        padEnd(str) {
            this.value += str;
        }
        padStart(str) {
            this.value = str + this.value;
        }
        padBoth(str) {
            // this.value = str + this.value + str;
            this.padStart(str);
            this.padEnd(str);
        }
    }

    const builder = new StringBuilder(".");
    // console.log(builder.getValue()); // "."
    builder.padStart("^");
    // console.log(builder.getValue()); // "^."
    builder.padEnd("^");
    // console.log(builder.getValue()); // "^.^"
    builder.padBoth("=");
    // console.log(builder.getValue()); // "=^.^="
};

{
    class User {
        #email;
        constructor({ name, email }) {
            this.name = name;
            this.#email = email;
        }
        getEmail() { return this.#email; }
        changeEmail(newEmail) { this.#email = newEmail; }
    }
    const mango = new User({ name: "Mango", email: "mango@mail.com", });
    mango.changeEmail("mango@supermail.com");
    // console.log(mango.getEmail()); // mango@supermail.com
    //  console.log(mango.#email);  Будет ошибка, это приватное свойство

    class Car {
        #brand; #model; #price;
        constructor({ brand, model, price }) {
            this.#brand = brand;
            this.#model = model;
            this.#price = price;
        }
        getBrand() { return this.#brand; }
        changeBrand(newBrand) { this.#brand = newBrand; }
    }

    const audi = new Car({ brand: "Audi", model: "Q3", price: 35000 });
    const bmw = new Car({ brand: "BMW", model: "X5", price: 57000 });
    const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31000 });
    // console.log(audi);
    // console.log(bmw);
    // console.log(nissan);
    // console.log(bmw.getBrand());
    nissan.changeBrand("Honda");
    // console.log(nissan.getBrand());

    class Storage {
        #items;
        constructor(initialValue) {
            this.#items = initialValue;
        }
        getItems() { return this.#items; };
        addItem(newItem) { this.#items.push(newItem); }
        removeItem(itemToRemove) {
            const idx = this.#items.indexOf(itemToRemove);
            this.#items.splice(idx, 1);
        }
    }
    const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
    storage.addItem("Droid");
    storage.removeItem("Prolonger");
    // console.table(storage.getItems());

    class StringBuilder {
        #value;
        constructor(initialValue) {
            this.#value = initialValue;
        }
        getValue() { return this.#value; }
        padEnd(str) {
            this.#value += str;
        }
        padStart(str) {
            this.#value = str + this.#value;
        }
        padBoth(str) {
            // this.value = str + this.#value + str;
            this.padStart(str);
            this.padEnd(str);
        }
    }
    const builder = new StringBuilder('.');
    // console.log(builder);
    builder.padStart('^');
    builder.padEnd('^');
    builder.padBoth('_');
    // console.log(builder.getValue());
}

{
    class User {
        #email;
        constructor({ name, email }) {
            this.name = name;
            this.#email = email;
        } // Геттер email:
        get email() { return this.#email; }
        // Сеттер email:
        set email(newEmail) { this.#email = newEmail; }
    }

    const mango = new User({ name: "Mango", email: "mango@mail.com" });
    // console.log(mango.email); // mango@mail.com
    mango.email = "mango@supermail.com";
    // console.log(mango.email); // mango@supermail.com

    class Car {
        #brand;
        #model;
        #price;
        constructor({ brand, model, price }) {
            this.#brand = brand;
            this.#model = model;
            this.#price = price;
        }
        get brand() { return this.#brand; }
        set brand(newBrand) { this.#brand = newBrand; }

        get model() { return this.#model; }
        set model(newModel) { this.#model = newModel; }

        get price() { return this.#price; }
        set price(newPrice) { this.#price = newPrice; }

    }
}

{
    class User { // Объявление и инициализация статического свойства 
        static Roles = { ADMIN: "admin", EDITOR: "editor", };
        #email;
        #role;
        constructor({ email, role }) {
            this.#email = email;
            this.#role = role;
        }
        get role() { return this.#role; }
        set role(newRole) { this.#role = newRole; }
    }
    const mango = new User({ email: "mango@mail.com", role: User.Roles.ADMIN, });
    // console.log(mango.Roles); // undefined 
    // console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }
    // console.log(mango.role); // "admin" 
    mango.role = User.Roles.EDITOR;
    // console.log(mango.role); // "editor"

    class Car {
        #brand;
        #model;
        #price;
        static MAX_PRICE = 50000;
        constructor({ brand, model, price }) {
            this.#brand = brand;
            this.#model = model;
            this.#price = price;
        };
        get brand() { return this.#brand; }
        set brand(newBrand) { this.#brand = newBrand; }

        get model() { return this.#model; }
        set model(newModel) { this.#model = newModel; }

        get price() { return this.#price; }
        set price(newPrice) { this.#price = newPrice > Car.MAX_PRICE ? this.#price : newPrice; }
    }
}

{
    class User {
        static #takenEmails = [];
        static isEmailTaken(email) {
            return User.#takenEmails.includes(email);
        }
        #email;
        constructor({ email }) {
            this.#email = email;
            User.#takenEmails.push(email);
        }
    }
    const mango = new User({ email: "mango@mail.com" });
    // console.log(User.isEmailTaken("poly@mail.com"));
    // console.log(User.isEmailTaken("mango@mail.com"));

    class Car {
        static #MAX_PRICE = 50000;
        static checkPrice(price) { return price > this.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits"; }

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

        // get email() {
        //     return this.email;
        // }

        // set email(newEmail) {
        //     this.email = newEmail;
        // }
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