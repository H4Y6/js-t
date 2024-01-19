{
    const kook = () => console.log(this);
    const obj = { logA: kook };
    // obj.logA();  /**  strict mode: this is indefined, unstrict: window */

    // kook(); /**  strict mode: this is indefined, unstrict: window */
}

{
    const dog = {
        name: "Dogger",
    };
    const cat = {
        name: 'Meow',
    }
    const logName = function () {
        console.log(this.name);
    };

    const logDogName = logName.bind(dog);
    // logDogName();

    const logCatName = logName.bind(cat);
    // logCatName();

    const logCatNameA = logDogName.bind(cat);   /**  function rebinding is impossible */
    // logCatNameA();  /**  Dogger - (dog name, not Cat name) */
}

{
    const customer = { firstName: "Piter", lastName: 'Golens', getFullName() { return `${this.firstName} ${this.lastName}` } };

    function makeMessage(cb) {
        console.log(`The order for ${cb()} is in progress.`);
    };

    const foo = function () {
        return `${this.firstName} ${this.lastName}`;
    };

    // makeMessage(customer.getFullName);  /** Error in strict mode, otherwise undefined this */
    // makeMessage(customer.getFullName.bind(customer));

    const getCustomerFullName = customer.getFullName.bind(customer);
    // makeMessage(getCustomerFullName);

    // makeMessage(foo);  /** Error in strict mode, otherwise undefined this */
    // makeMessage(foo.bind(customer));

    // console.log(Object.keys(window).length, window);
}

{
    // const loo = console.log(this);
    // loo();   /**  undefined */

    // const obj = { foo: () => console.log(this) };
    // obj.foo();

    const fnA = () => console.log(this);
    const objA = { logCtx: fnA };
    // objA.logCtx();


    const fooo = function (value, number) { console.log(this.name, value, number) };
    const bar = { name: 'Rohn', logName: fooo, };

    // bar.logName();
    // fooo.call(bar, 3, 8);        /**  'Rohn' 3 8 */
    // fooo.apply(bar, [3, 8]);    /**  'Rohn' 3 8 */
}

{
    const robot = {
        legs: 2,
        name: 'Robert',
        greet() { clearInterval`Hello! I'm ${this.name}` },
    };

    const cat = {
        name: 'Moor',
        legs: 4,
        getLegsAmount() { return this.legs },
    };

    robot.getCatLegAmount = cat.getLegsAmount.bind(cat);
    // console.log(robot.getCatLegAmount());

    robot.getCatLegAmount = cat.getLegsAmount;
    // console.log(robot.getCatLegAmount());

    // console.log(robot);
    // console.log(cat.getLegsAmount());
}