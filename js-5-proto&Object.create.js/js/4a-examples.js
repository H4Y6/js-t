const animal = {
    leg: 4,
};

const dog = Object.create(animal);
dog.name = 'Dingo';

// console.log('dog', dog);
// console.log('dog legs', dog.leg);
// console.log(dog.hasOwnProperty('leg'));
// console.log(dog.hasOwnProperty('name'));

// for (const key in dog) {
// console.log("key:", key);
// }

for (const key in dog) {
    if (Object.hasOwnProperty.call(dog, key)) {
        // console.log(key, ':', dog[key]);
    }
}

dog.leg = 7;
// console.log(dog.leg);
// console.log(dog.hasOwnProperty('leg'));

for (const key in dog) {
    // console.log("key:", key);
}

for (const key in dog) {
    if (Object.hasOwnProperty.call(dog, key)) {
        // console.log(key, ':', dog[key]);
    }
}

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

    get guild() {
        return this.#guild;
    }

    set guild(value) {
        if (value.length < 3) {
            console.warn('It should be at least 3 letters');
            return;
        }
        this.#guild = value;
    }

    getRating() {
        return this.#rating;
    }
    setRating(rating) {
        this.#rating = rating;
    }
    study() {
        console.log('I study well.');
    }
}

const student = new Student({ name: 'Pit', age: 18, avatar: '🤷‍♂️' });

// console.log('Student', Student);
// console.log('Rating ->', student.getRating());
// student.study();

student.setRating(4);
// console.log('Rating ->', student.getRating());

// console.log(student.guild);
student.guild = "Silver";
// console.log('student ->', student);

{
    class Human {
        constructor(name) {
            this.name = name;
        }
    }

    class SuperHuman extends Human {
        constructor(name) {
            super(name);
        }
        superPanch() {
            console.log('👊🤛🤛👊');
        }
    }

    const superHuman = new SuperHuman('Pit');
    // console.log(superHuman);
}

{
    class Hero {
        constructor({ name, hp, damage }) {
            this.name = name;
            this.hp = hp;
            this.damage = damage;
        };

        attack() {
            return this.damage;
        }
    }

    class Wizard extends Hero {
        constructor({ name, hp, damage, mana = 100 }) {
            super({ name, hp, damage });
            this.mana = mana;
        }
        attack() {
            return this.damage + this.mana / 20;
        }
    }

    const merlin = new Wizard({
        name: 'Merlin',
        hp: 1500,
        damage: 50,
    });
    console.log('merlin ->', merlin);
    console.log(merlin.attack());
}