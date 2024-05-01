{
    const customer = {
        firstName: 'Jacob',
        lastName: 'Mercer',
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    };

    function makeMessage(callback) {
        // callback() это вызов метода getFullName без объекта
        console.log(`Обрабатываем заявку от ${callback()}.`);
    }

    const foo = function () {
        // this = customer;
        return `${this.firstName} ${this.lastName}`;
    };

    // There's a mistake while fn call
    // makeMessage(customer.getFullName);
    // makeMessage(foo);

    // makeMessage(customer.getFullName.bind(customer));
    // makeMessage(foo.bind(customer));
    // console.log(window);
}

// лексичн оточенняе
{
    /*
    лексичне оточенняе не помітне розробникові:
    Env1 = {
      a: 5,
      b: 10,
    };
    */

    const a = 5;
    const b = 10;

    const foo = function () {
        /*
        Env2 = {
          a: 10,
          parentEnv: Env1
        };
        */

        const a = 10;
        console.log(a);
        console.log(b);
    };
}

{
    const a = 10;
    const logA = function () {
        /*
        Env1 = {
          parentEnv: Env1,
          this: undefined
        };
        */
        // console.log(a);
        // console.log('window: ', this);
        // console.log('window.a: ', this.a);
    };

    // thisin arrow functions is definded whle writing:
    const foo = () => {
        /*
        Env1 = {
          parentEnv: Env1,
          this: window
        };
        */
        const a = 15;
        logA();
    };

    foo();
}

{
    const user = {
        name: 'Tom',
        age: 22,
        logNameAfterOneSecond() {
            const callback = function () {
                console.log('this:', this);
                console.log('this.name:', this.name);
            };

            const arrowFunctionCallback = () => {
                console.log('this:', this);
                console.log('this.name:', this.name);
            };
            // callback();
            setTimeout(callback.bind(this), 1000);
            setTimeout(arrowFunctionCallback, 3000);
        },
    };

    // user.logNameAfterOneSecond();
}

{
    // Find max value:
    const arr = [25, 1, 2, -10, 5];

    const maxVal = Math.max(...arr);
    // console.log(Math.max(25, 1, 200, 15));
    const maxValue = Math.max.apply({}, arr);
    // console.log(maxValue);
}

{
    const user = {
        age: 22,
        say: () => {
            console.log(this.name);
        },
    };

    const foo = function () {
        // console.log(this.age);
    };
    /*
      Incorrect:
      foo.bind(user);
      foo();
    */
    const fooBinded = foo.bind(user);
    fooBinded();
}

// console.dir(window);

// const obj = { foo: () => console.log(this) };
// obj.foo();

{
    const matrix = [
        [1, 2],
        [5, 6]
    ];

    for (const row of matrix) {
        for (const el of row) {
            // console.log(el);
        }
    }
}
{
    const user = {
        name: 'Bill',
        age: 33,
        logNameInSeconds() {
            const cb = () => {
                console.log(this.name);
            };
            const callback = function () { console.log(this.name); };
            setTimeout(cb, 1400);
            setTimeout(callback.bind(user), 2200);
            setTimeout(() => { console.log(this.name); }, 3000);
        }
    };

    // user.logNameInSeconds();
}

{
    const numbers = [4, 6, 2, 7];
    const max = Math.max.apply({}, numbers);
    // const max = Math.max(...numbers);

    // console.log(max);
}

{
    const dog = {
        name: 'Bars',
    };

    const cat = {
        name: 'Meow',
    };

    const getName = function () {
        return this.name;
    };
    const getDogName = getName.bind(dog);
    const getCatName = getName.bind(cat);
    // console.log(getDogName());
    // console.log(getCatName());
}

{
    const user = {
        name: 'Forgel',
        logNameDelayed() {
            const cb = function () {
                console.log('this.name->', this.name);
            };
            setTimeout(cb.bind(this), 911);

            const arrowCb = () => {
                console.log('this.name arrow->', this.name);
            };
            setTimeout(arrowCb, 2111);
        }
    };
    // user.logNameDelayed();


    const arr = [3, 5, 6, 7, 8, 11];
    const max = Math.max.apply(null, arr);
    // console.log(max);
}