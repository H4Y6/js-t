/*
 * Object-prototype
 *
 * - https://miro.com/app/board/o9J_ku0WE0g=/
 * - Object.create()
 * - [[Prototype]] и __proto__
 * - Object.getPrototypeOf()
 * - Власні властивості й Object.prototype.hasOwnProperty()
 * - Ланцюг прототипів
 */
{
    // const objC = {
    //     z: 5,
    // };

    // const objB = Object.create(objC);
    // objB.y = 2;

    // const objA = Object.create(objB);
    // objA.x = 1;

    // console.log(objA.z);

    // console.log('objA', objA);

    // console.log(objA.hasOwnProperty('z'));
    // console.log(objA.hasOwnProperty('x'));

    // const dummyObj = Object.create({ message: 'Це властивість объекту протортипу' });
    // dummyObj.message = 'Це  власна властивість объекту';
    // console.log('dummyObj', dummyObj);

    // console.log(dummyObj.message);

    //  'Це власна властивість объекту'
    //  'Це властивість на объекті-прототипі'

    /*
     * Алгоритм пошуку властивості в ланцюгові прототипів:
     * 1. Пошук починається у  власних властивостях
     * 2. Коли властивості немає у власних, пошук переходить до ланцюга прототипів
     * 3. Пошук припиняється при першому співпадінні (є така властивість)
     * 4. Повертається значення властивості
     */

    // const objA = Object.create({ z: 5 });
    // objA.y = 100;
    // console.log('objA', objA);

    // console.log(objA.x);

    const obj1 = {
        a: 4,
    };

    const obj2 = Object.create(obj1);
    obj2.b = 7;

    // console.log("obj1", obj1);
    // console.log("obj2", obj2);

    const obj3 = Object.create(obj2);
    obj3.c = 3;
    // console.log("obj3", obj3);
    // console.log(obj3.a);  /**  4  */
    // console.log(obj3.tttt);  /**  undefined  */
    // console.log(obj3.hasOwnProperty('a'));   /** false */

    // console.log(obj3.hasOwnProperty('c'));   /** true  */

    const newObj = Object.create({
        message: 'This is the prototypal property',
    });
    // console.log(newObj.message, newObj);

    newObj.message = 'Hello!';
    // console.log(newObj.message, newObj);

    const objC = { z: 5 };
    // console.log('objC:', objC);

    const objB = Object.create(objC);
    objB.y = 7;

    // console.log(objB.z, objB.y);
    // console.log('objB:', objB);

    const objA = Object.create(objB);
    objA.x = 11;
    objA.z = 25;
    // console.log('objA:', objA);

    // console.log(objA.hasOwnProperty('y'));
    // console.log(objA.hasOwnProperty('z'), objA.z);
    // console.log(objA.hasOwnProperty('lazz'), objA.lazz);
    // console.log(objC.hasOwnProperty('z'), objC.z)
}

const objC = {
    z: 7,
};
console.log(objC);
console.log(objC.hasOwnProperty('z'));

const objB = Object.create(objC);
objB.y = 5;
console.log(objB);

const objA = Object.create(objB);
objA.x = 3;
objA.z = 1;
console.log(objA);
console.log(objA.hasOwnProperty('z'));
console.log(objA.hasOwnProperty('y'));
console.log(objA.foo);

const objG = Object.create({ a: 4 });
objG.b = 6;
console.log('objG->', objG);
console.log('objG->', objG.hasOwnProperty('a'));
console.log('objG->', objG.hasOwnProperty('b'));

{
    const apartment = {
        imgUrl: 'https://via.placeholder.com/640x480',
        descr: 'Spacious apartment in the city center',
        rating: 4,
        price: 2153,
        tags: ['premium', 'promoted', 'top'],
        owner: {
            name: 'Henry',
            phone: '982-126-1588',
            email: 'henry.carter@aptmail.com',
        },
    };
    // apartment.owner = {
    //     name: 'Henry',
    //     phone: '982-126-1588',
    //     email: 'henry.carter@aptmail.com',
    // };

    // const apartmentRating = apartment.rating;
    // const apartmentDescr = apartment.descr;
    // const apartmentPrice = apartment.price;
    // const apartmentTags = apartment.tags;

    // console.table([
    //     apartmentRating,
    //     apartmentDescr,
    //     apartmentPrice,
    //     apartmentTags,
    // ]);

    const ownerName = apartment.owner.name;
    const ownerPhone = apartment.owner.phone;
    const ownerEmail = apartment.owner.email;
    const numberOfTags = apartment.tags.length;
    const firstTag = apartment.tags[0];
    const lastTag = apartment.tags[apartment.tags.length - 1];

    const apartmentRating = apartment['rating'];
    const apartmentDescr = apartment['descr'];
    const apartmentPrice = apartment['price'];
    const apartmentTags = apartment['tags'];

    apartment.price = 5000;
    apartment.rating = 4.7;
    apartment.owner.name = 'Henry Sibola';
    apartment.tags.push('trusted');

    // console.log(apartment.tags);

    apartment.area = 60;
    apartment.rooms = 3;
    apartment.location = { country: 'Jamaica', city: 'Kingston' };

    // console.log(apartment);

    const emailInputName = 'email';
    const passwordInputName = 'password';

    const credentials = {
        [emailInputName]: 'henry.carter@aptmail.com',
        [passwordInputName]: 'jqueryismyjam',
    };

    // console.log(credentials);

    const keys = [];
    const values = [];
    for (const key in apartment) {
        if (apartment.hasOwnProperty(key)) {
            keys.push(key);
            values.push(apartment[key]);
        }
    }

    // console.log(keys, values);

    function countProps(object) {
        let propCount = 0;

        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                propCount += 1;
            }
        }
        return propCount;
    }
}

{
    const apartment = {
        descr: 'Spacious apartment in the city center',
        rating: 4,
        price: 2153,
    };

    const values = [];
    const keys = Object.keys(apartment);

    for (const key of keys) {
        values.push(apartment[key]);
    }

    // console.log(values);

    function countProps(object) {
        return Object.keys(object).length;
    }
}

{
    const apartment = {
        descr: 'Spacious apartment in the city center',
        rating: 4,
        price: 2153,
    };

    const keys = Object.keys(apartment);
    const values = Object.values(apartment);
    // console.log(keys, values);

    const object = { a: 'm' };
    function countProps(object) {
        let count = 0;
        const keys = Object.keys(object);
        for (const time of keys) {
            count += 1;
            console.log(time);
            console.log(object[time]);
        }
        return count;
    }
    // console.log(countProps(object));

    function countTotalSalary(salaries) {
        let totalSalary = 0;

        const allSalaries = Object.values(salaries);

        for (const salary of allSalaries) {
            totalSalary += salary;
        }

        return totalSalary;
    }

    const colors = [
        { hex: '#f44336', rgb: '244,67,54' },
        { hex: '#2196f3', rgb: '33,150,243' },
        { hex: '#4caf50', rgb: '76,175,80' },
        { hex: '#ffeb3b', rgb: '255,235,59' },
    ];

    const hexColors = [];
    const rgbColors = [];

    for (const color of colors) {
        hexColors.push(color.hex);
        rgbColors.push(color.rgb);
    }
    // console.log(hexColors, rgbColors);

    const products = [
        { name: 'Radar', price: 1300, quantity: 4 },
        { name: 'Scanner', price: 2700, quantity: 3 },
        { name: 'Droid', price: 400, quantity: 7 },
        { name: 'Grip', price: 1200, quantity: 9 },
    ];

    function getProductPrice(productName) {
        for (const { name, price } of products) {
            if (name === productName) return price;
        }
        return null;
    }
    // console.log(getProductPrice('Grip'));

    function getAllPropValues(propName) {
        const propNames = [];

        for (const product of products) {
            if (product[propName]) {
                propNames.push(product[propName]);
            }
        }
        return propNames;
    }
    // console.log(getAllPropValues('name'));

    function calculateTotalPrice(productName) {
        let total = 0;
        for (const { name, price, quantity } of products) {
            name === productName ? (total = price * quantity) : 0;
        }
        return total;
    }
    // console.log(calculateTotalPrice('Radar'));
}
