const user = {
    name: 'Paul',
    age: 33,
    logNameInOneSec() {
        const arrowFunctionCb = () => console.log('Name:', this.name);

        const cb = function () {
            console.log('Age:', this.age);
        };

        setTimeout(arrowFunctionCb, 1000);
        setTimeout(cb.bind(this), 2000);
    }
};
// user.logNameInOneSec();

const arr = [3, 7, 44, 25, 87, 2];

const maxVal = Math.max.apply({}, arr);
const maxValue = Math.max(...arr);
// const maxNum = Math.max.call({}, 2, 5, 7, 33, 61, 24, 47, 1);
const maxNumber = Math.max(2, 5, 7, 33, 61, 24, 47, 1);

console.log(maxVal);
console.log(maxValue);
// console.log(maxNum);
console.log(maxNumber);

const admin = { name: 'Michael', age: 33, };
const fnA = function () { console.log(this.name) };
const koo = fnA.bind(admin);
koo();

{
    const customer = {
        firstName: 'Piter',
        lastName: 'Colt',
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        },
    };

    function makeMessage(cb) {
        console.log(`${cb}! Your order will be ready in 5 minutes.`)
    };

    const foo = function () {
        return `${this.firstName} ${this.lastName}`;
    };

    // makeMessage(customer.getFullName());

    // makeMessage(customer.getFullName.bind(customer));
    // makeMessage(foo.bind(customer));
}
{
    const person = {
        name: 'Martin',
        age: 22,

    };
    const showThisOut = () => {
        console.log('this;', this);
    };
    person.showThisIn = showThisOut;
    console.log(person);
    // person.showThisIn();
}

{
    const hotel = {
        username: "Resort hotel",
        showThis() {
            const foo = () => {
                // Стрілки запам'ятовують контекст під час оголошення
                // з батьківської області видимості
                console.log("this in foo: ", this);
            };

            foo();
            console.log("this in showThis: ", this);
        },
    };

    hotel.showThis();
}

{
    const a = 7;

    const logA = function () {
        console.log('a:', a)
        console.log(this)
        console.log('this.a:', this.a)
    };

    const foo = () => {
        const a = 11;
        logA();
    };

    // logA();
    // foo();
}