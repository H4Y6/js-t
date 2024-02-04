class Hero {
    constructor({ name = 'hero', xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;

    }

    gainXp(amount) {
        console.log(`${this.name} gains ${amount} xp`);
        this.xp += amount;
    }
}

// class Warrior extends Hero {
//     constructor(name, xp, weapon) {
//         super(name, xp);

//         this.weapon = weapon;
//     }
// }

// class Warrior extends Hero {
//     constructor({ name, xp, weapon } = {}) {
//         super({ name, xp });

//         this.weapon = weapon;
//     }
// }

class Warrior extends Hero {
    constructor({ weapon, ...restProps } = {}) {
        super({ ...restProps });

        this.weapon = weapon;
    }
}
// console.log('Warrior:', Warrior);

const mango = new Warrior({ name: 'mango', xp: 200, weapon: 'halberd' });
// console.log("mango:", mango);
// mango.gainXp(300);
// console.log("mango:", mango);
// console.log(mango.__proto__ === Warrior.prototype);                 /**  true */
// console.log(Warrior.prototype.__proto__ === Hero.prototype);        /**  true */