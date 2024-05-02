const animal = {
    legs: 4,
};
animal.move = function () { console.log('I move.'); };

const dog = Object.create(animal);
dog.name = 'B0bby';

// console.log(animal, dog);
// console.log(dog.legs, dog.name);
// console.log(dog.hasOwnProperty('legs'));
// console.log(dog.hasOwnProperty('move'));
// console.log(dog.hasOwnProperty('name'));
// dog.move();

const keys = [];
for (const key in dog) {
    // if (Object.hasOwnProperty(key))
    keys.push(key);
};
// console.log(keys);

// console.log(Object.keys(dog));

class Stugent {
    #rating;
    #guild;

    constructor({ name, age, avatar }) {
        this.name = name;
        this.age = age;
        this.avatar = avatar;
        this.#rating = 0;
        this.#guild = 'gryffindor';
    };

    getRaTing() {
        return `Rating: ${this.#rating}.`;
    };

    updateRaTing(value) {
        this.#rating = value;
    };

    get guild() {
        return this.#guild;
    };

    set guild(value) {
        if (value.length <= 3) {
            console.warn('Can not be shorter then 4 letters');
            return;
        };
        this.#guild = value;
    };

    study() { console.log('I study german.'); };
    promote() { console.log('I am FS eveloper'); };
};

const student = new Stugent({ name: 'John', age: 22, avatar: '😎' });

// console.log(student.name);
// console.log(student.getRaTing());
// student.study();
// student.updateRaTing(4);
// console.log(student.getRaTing());
// console.log(`Guild is ${student.guild}.`);  /** to get student.guild via getter */
// student.guild = 'Gold';
// console.log(`Guild is ${student.guild}.`); 

class Human {
    constructor(name) {
        this.name = name;
    };
};

class SuperHuman extends Human {
    constructor(name) {
        super(name);;
    };

    superPunch() {
        console.log('👊👊👊');
    };
};

const suprtHuman = new SuperHuman('Pit');

// console.log(suprtHuman);
// suprtHuman.superPunch();

{
    class Hero {
        constructor({ name, hp, damage }) {
            this.name = name;
            this.hp = hp;
            this.damage = damage;
        };
        attack() {
            return this.damage;
        };
    };

    class Wizard extends Hero {
        magicDamage = 10;

        constructor({ name, hp, damage, mana = 100 }) {
            super({ name, hp, damage });
            this.mana = mana;
        };

        attack() {
            return this.damage + this.mana / 10;
        }
    };

    const merlin = new Wizard({
        name: 'Merlin',
        hp: 1000,
        damage: 50,
    });

    // console.log(merlin);
    // console.log(merlin.attack());
}

{
    class Student {
        #rating;
        #guild;
        constructor({ name, age, avatar }) {
            this.name = name;
            this.age = age;
            this.avatar = avatar;
            this.#rating = 0;
            this.#guild = 'Gryffindor';
        }

        get guild() { return this.#guild; }
        set guild(value) { this.#guild = value; }

        getRating() {
            return this.#rating;
        }
        updateRating(newRating) {
            this.#rating = newRating;
        }
        study() {
            console.log('I study');
        }
    }

    const studentBob = new Student({ name: 'Bob', age: 21, avatar: '😎' });
    studentBob.study();
    studentBob.updateRating(4);
    console.log(studentBob.getRating());
    console.log(studentBob.guild);
}