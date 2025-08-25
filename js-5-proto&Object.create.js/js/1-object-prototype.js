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
}
