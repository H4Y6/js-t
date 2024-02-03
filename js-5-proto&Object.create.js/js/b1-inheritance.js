class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = '';
        this.xp = '';

    }

    gainXp(amount) {
        console.log(`${this.name} gains ${amount} xp`);
        this.xp += amount;
    }
}

const mango = new Hero({ name: 'mango', xp: 1000 });

// console.log(mango);

mango.gainXp(1000);

class Warrior {
    constructor({ }) {
        this.weapon = '';
    }


}
