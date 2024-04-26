{
    // const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
    //     this._value = initialValue;
    //     this._step = step;

    //     this._refs = this._getRefs(rootSelector);

    //     this.bindEvents();
    //     this.updateValuePointer();
    // };

    // CounterPlugin.prototype._getRefs = function (rootSelector) {
    //     const refs = {};
    //     refs.container = document.querySelector(rootSelector);
    //     refs.incrementBtn = refs.container.querySelector('[data-increment]');
    //     refs.decrementBtn = refs.container.querySelector('[data-decrement');
    //     refs.valuePointer = refs.container.querySelector('[data-value');

    //     return refs;
    // };

    // CounterPlugin.prototype.bindEvents = function () {
    //     this._refs.incrementBtn.addEventListener('click', () => {
    //         console.log('CounterPlugin.prototype.bindEvents -> this', this);
    //         this.increment();
    //         this.updateValuePointer();
    //     });

    //     this._refs.decrementBtn.addEventListener('click', () => {
    //         console.log(' CounterPlugin.prototype.bindEvents -> this', this);
    //         this.decrement();
    //         this.updateValuePointer();
    //     });
    // };

    // CounterPlugin.prototype.updateValuePointer = function () {
    //     this._refs.valuePointer.textContent = this._value;
    // };

    // CounterPlugin.prototype.increment = function () {
    //     this._value += this._step;
    // };

    // CounterPlugin.prototype.decrement = function () {
    //     this._value -= this._step;
    // };

    // const counter1 =
    // new CounterPlugin({ rootSelector: '#counter-1', step: 1, initialValue: 40, });

    // const counter2 =
    // new CounterPlugin({ rootSelector: '#counter-2', step: 2 });

    // const counter3 = new CounterPlugin({ rootSelector: '#counter-3', step: 5 });

    // console.log('counter1', counter1);
    // console.log('counter2', counter2);
    // console.log('counter2', counter3);
}

{
    const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 }) {
        this._value = initialValue;
        this._step = step;

        this._refs = this._getRefs(rootSelector);

        this._bindEvents();
        this.updateValueUI();
    };

    CounterPlugin.prototype._getRefs = function (rootSelector) {
        console.log(rootSelector);

        const refs = {};
        refs.container = document.querySelector(rootSelector);
        refs.incrementBtn = refs.container.querySelector('[data-increment]');
        refs.decrementBtn = refs.container.querySelector('[data-decrement]');
        refs.value = refs.container.querySelector('[data-value]');

        console.log(refs.container);
        console.log(refs.incrementBtn);
        console.log(refs.decrementBtn);
        return refs;
    };

    CounterPlugin.prototype._bindEvents = function () {
        this._refs.incrementBtn.addEventListener('click', () => {
            console.log('bindEvents->this-> +', this);
            this.increment();
            this.updateValueUI();
        });

        this._refs.decrementBtn.addEventListener('click', () => {
            console.log('bindEvents->this-> -', this);
            this.decrement();
            this.updateValueUI();
        });
    };

    CounterPlugin.prototype.updateValueUI = function () {
        this._refs.value.textContent = this._value;
    };

    CounterPlugin.prototype.increment = function () {
        this._value += this._step;
    };

    CounterPlugin.prototype.decrement = function () {
        this._value -= this._step;
    };

    const counter1 = new CounterPlugin({ rootSelector: '#counter-1', step: 1 });
    console.log('counter1: ', counter1);

    const counter2 = new CounterPlugin({ rootSelector: '#counter-2', step: 5, initialValue: 25 });
    console.log('counter2: ', counter2);


}