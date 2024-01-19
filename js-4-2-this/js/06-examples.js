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
const maxNum = Math.max.call({}, 2, 5, 7, 33, 61, 24, 47, 1);
const maxNumber = Math.max(2, 5, 7, 33, 61, 24, 47, 1);

// console.log(maxVal);
// console.log(maxValue);
// console.log(maxNum);
// console.log(maxNumber);

const admin = { name: 'Michaele' };
const fnA = function () { console.log(this.name) };
const fnB = fnA.bind(admin);
fnB();