/**         Block Scope         */
// Before ES6 (2015), JavaScript did not have Block Scope.

// JavaScript had Global Scope and Function Scope.

// ES6 introduced the two new JavaScript keywords: let and const.

// These two keywords provided Block Scope in JavaScript:

/**    Example           */
// Variables declared inside a { } block cannot be accessed from outside the block:

{
    let x = 2;
}
// x can NOT be used here



/**    Global Scope         */

// Variables declared with the var always have Global Scope.

// Variables declared with the var keyword can NOT have block scope:

/**                    Example         */
// Variables declared with varinside a { } block can be accessed from outside the block:

{
    var x = 2;
}
// x CAN be used here



/**  Difference Between var, let and const      */

// Scope	Redeclare	Reassign	Hoisted	Binds this
// var   No	    Yes	        Yes     	Yes	     Yes
// let   Yes    No      	Yes	        No       No
// const Yes	No	        No          No       No

/**                 What is Good ?            */

// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

/**             What is Not Good?                  */

// var does not have to be declared.

// var is hoisted.

// var binds to this

{
    console.log(myVar); // undefined
    var myVar = 'hello';
    console.log(myVar); // hello
}

{
    function a() {
        console.log(myVar); // gives Error myVar is not defined
    }
    a();

}

{
    function a() {
        console.log(myVar); // undefined no Error
        // cause it would take myVar from global
        // execution context 
        // but also no error cause we define it again
        // in this function (hoisting)
        var myVar = 0;      // define myVar newly in this lexical environment
        console.log(myVar); // 0
    }

    var myVar = 'hello';
    a();
    console.log(myVar);     // hello
}

{
    function a() {
        myVar = 0;           // overwrite global myVar
        console.log(myVar); // 0
    }

    var myVar = 'hello';
    a();
    console.log(myVar);   // 0 did you expect myVar to be 0 ?
}

{
    /**           Lexical environment      */

    env1 = {
        x: 2,
        y: 5
    };
    const x = 2;
    const y = 5;

    const bar = function () {
        env2 = {
            x: 11,
            parentEnv: env1,
        };

        const x = 11;

        console.log(x);
        console.log(y);
    };
    bar();

}

{
    const a = 10;
    const logA = function () {
        console.log(a);
    };

    const foo = function () {
        const a = 15;
        logA();
    };

    foo();
}


{
    const dog = {
        name: 'Paul',
    };

    const cat = {
        name: 'Meow',
    };

    const logName = function () {
        console.log(this.name);
    };

    // logName.call(dog);
    // logName.apply(dog, []);

    const logDogName = logName.bind(dog);
    const logCatName = logName.bind(cat);
    // logDogName();
    // logCatName();

    const showThis = function () {
        console.log('this in showThis', this);
    };

    const user = {
        name: 'Bingo',
    };


    user.showContext = showThis;
    console.log('user ->', user);
    user.showContext();
}

{
    const customer = {
        firstName: 'Andy',
        lastName: 'Piters',

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    const foo = (customer.getFullName.bind(customer));

    function makeMessage(cb) {
        console.log(`Mister ${cb()}! We're glad to see you here!`);
    };

    makeMessage(foo);
    makeMessage(customer.getFullName.bind(customer));

    console.log('window->', Object.keys(window).length);
}

