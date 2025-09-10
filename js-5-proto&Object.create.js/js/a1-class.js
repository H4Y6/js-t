class Car {
    static description = 'The Class to describe a car';

    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    }

    #test = 'test';

    myPublicField = 43;

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    // changePrice(newPrice) {
    //     this.price = newPrice;
    // };

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}

console.dir(Car);
console.log('Car.description', Car.description);

const carInstance = new Car({
    brand: 'Audi',
    model: 'A7',
    price: 34000,
});

console.log('carInstance:', carInstance);

// Car.logInfo(carInstance);

// carInstance.model = ('M3');
// carInstance.price = 33333;

// console.log(carInstance.model);
// console.log(carInstance.price);
// console.log(carInstance)

{
    class Car {
        #price;
        static MAX_PRICE = 50000;
        constructor({ brand, model, price }) {
            this.#price = price;
        }
        get price() {
            return this.#price;
        }
        set price(newPrice) {
            if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
        }
    }
    const audi = new Car({ price: 35000 });
    console.log(audi.price);

    audi.price = 51000;
    console.log(audi.price);
}
