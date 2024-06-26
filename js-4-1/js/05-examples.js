{
    const logger = cb => console.log(cb(4));

    const logMessage = (value) => `The value is ${value}.`;

    // logger(logMessage);
}

{
    const arr = [4, 7, 5, 2, 8, 15, 12];
    const logValue = value => console.log(`The value is ${value}.`);
    const multiplyValue = value => console.log(`The multiplied by 2 Value is ${value * 2}.`);

    const callFunctionOnEvenNumber = (arr, cb) => {
        for (const number of arr) {
            if (number % 2 === 0) { cb(number); };
        }
    };

    // callFunctionOnEvenNumber(arr, logValue);
    // callFunctionOnEvenNumber(arr, multiplyValue);
}

const numbers = [4, 7, 5, 2, 8, 9];

{/**            loop ForEach                    */

    const logItems = (el, idx, array) => {
        console.log('el:', el);
        console.log('idx:', idx);
        console.log('array:', array);
    };

    const logValuesWithEvenIndex = (value, idx) => {
        if (idx % 2 === 0) { console.log('value:', value, ', idx:', idx); };
    };
    let total = 0;
    const sumValues = (value) => {
        total += value;
    };
    numbers.forEach(sumValues);
    // console.log(total);

    // numbers.forEach(logItems);
    // numbers.forEach(logValuesWithEvenIndex);
}

/**                  method Filter()                   */
{
    const filteredNumbers = numbers.filter(el => el > 6);
    // console.log(filteredNumbers);
}

{
    const pureMultiplyFn = (array, value) => {
        const newArray = [];
        for (const number of [...array]) {
            newArray.push(number * value);
        };
        return newArray;
    };
    // console.log(pureMultiplyFn(numbers, 3), { numbers });
}
{
    const students = [
        { name: "Манго", courses: ["математика", "фізика"] },
        { name: "Полі", courses: ["інформатика", "математика"] },
        { name: "Ківі", courses: ["фізика", "біологія"] },
    ];

    // const mapResult = students.map(({ courses }) => courses);

    // const mapResConvertedToFlat = (arrayOfArrays) => {
    //     const flat = [];
    //     for (const el of [...arrayOfArrays]) {
    //         flat.push(...el);
    //     }
    //     return flat;
    // };

    // const flatMapResult = students.flatMap(student => student.courses);

    // const allCourses = mapResConvertedToFlat(mapResult);
    // const uniqueCourses = allCourses.filter((el, idx, array) => array.indexOf(el) === idx);

    // console.log(mapResult);
    // console.log(flatMapResult, allCourses);
    // console.log(uniqueCourses);

    const mapFn = students => students.map(({ courses }) => courses);
    const courses = mapFn(students);

    const flattenedMapFn = (cb, students) => {
        const flattenedArray = [];
        cb(students).forEach(elArray => flattenedArray.push(...elArray));
        return flattenedArray;
    };
    const flattenedCourses = flattenedMapFn(mapFn, students);

    // const flattenedMapFn = arrayOfArrays => {
    //     const flattenedArray = [];
    //     arrayOfArrays.forEach(elArray => flattenedArray.push(...elArray));
    //     return flattenedArray;
    // }
    // const flattenedCourses = flattenedMapFn(courses);

    const getUniqueCourses = array => array.filter((el, idx, array) => array.indexOf(el) === idx);
    const uniqueCourses = getUniqueCourses(flattenedCourses);

    // console.log(courses, flattenedCourses, uniqueCourses);
}

{
    const students = [
        { name: "Mango", score: 83 },
        { name: "Poly", score: 59 },
        { name: "Ajax", score: 37 },
        { name: "Kiwi", score: 94 },
        { name: "Huston", score: 64 },
    ];

    const averageScore = students.reduce((acc, { score }) => acc + score, 0) / students.length;
    // console.log(averageScore);

    const ascendingStudentScoreOrder = [...students].sort((first, second) => first.score - second.score);
    const descendingStudentScoreOrder = [...students].sort((first, second) => second.score - first.score);
    // console.log(ascendingStudentScoreOrder, descendingStudentScoreOrder);

    const alphabeticalStudentNameOrder = [...students].sort((first, second) => first.name.localeCompare(second.name));
    // console.log(alphabeticalStudentNameOrder);
}

{
    const tweets = [
        { id: "000", likes: 5, tags: ["js", "nodejs"] },
        { id: "001", likes: 2, tags: ["html", "css"] },
        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
        { id: "003", likes: 8, tags: ["css", "react"] },
        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];

    const getTagsA = tweets => tweets
        // .reduce((allTags, tweet) => {allTags.push(...tweet.tags);
        .reduce((allTags, { tags }) => {
            allTags.push(...tags);
            return allTags;
        }, []);
    // console.log(getTagsA(tweets));

    /**                         Method flatMap()                      */

    // const getTags = tweet => tweet.tags;
    const getTags = ({ tags }) => tags;

    const flatMap = (array, cb) => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            const newEl = cb(array[i], i, array);

            if (Array.isArray(newEl)) {
                result = [...result, ...newEl];
                /**     or         */
                // for (const el of newEl) {
                //     result.push(el);
                // };
            } else {
                result.push(newEl);
            };
        };

        return result;
    };

    const tags = flatMap(tweets, getTags);
    // console.log(tags);
}

{
    const scores = [27, 2, 41, 4, 7, 3, 75];
    const ascendingScores = [...scores].sort((a, b) => a - b);
    // console.log(ascendingScores);
}

{
    const products = [
        { id: "000", price: 125, name: "stick" },
        { id: "001", price: 212, name: "tel" },
        { id: "002", price: 217, name: "toy" },
        { id: "003", price: 282, name: "card" },
        { id: "004", price: 320, name: "juice" },
    ];

    /**                         Method map()                      */

    // const productPrices = products.map(product => product.price);
    const getPrice = ({ price }) => price;
    const productPrices = products.map(getPrice);
    // console.log(productPrices);

    const logger = (product, i, array) => console.log(`product: ${product.name}, index: ${i}, arrayLength: ${array.length}`);

    const arrayMap = (array, cb) => {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            const newElement = cb(array[i], i, array);
            newArray.push(newElement);
        }
        return newArray;
    };

    const productPricesA = arrayMap(products, getPrice);
    // arrayMap(products, logger);
    // products.map(logger);
    // console.log(productPricesA);

    /**                 Method filter()                */

    // const filterByPrice = el => el.price > 215;
    const filterByPrice = ({ price }) => price > 215;
    const filterArray = (array, cb) => {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (cb(element, i, array)) {
                result.push(element);
            };
        };
        return result;
    };

    // console.log(filterArray(products, filterByPrice));
    const filteredProducts = filterArray(products, filterByPrice);

    /**  Declarative fn :      */
    // const filteredProducts = products.filter(filterByPrice);
    // console.log(filteredProducts);

    /**                 Method find()            */

    const findItem = (arrayItem, _, __, el) => arrayItem.name === el;

    const findInArray = (array, cb, el) => {
        let requiredEl;
        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array, el)) {
                return array[i];
                // return requiredEl = array[i];
            };
        };
        return requiredEl;
    };

    // console.log(findInArray(products, findItem, 'stick'));
    // console.log(findInArray(products, findItem, 'stock'));

    /**                 Method findIndex()            */

    const findEl = (el, i, array, name) => { return el.name === name; };

    const findIndex = (array, name) => {
        let idx = -1;
        for (let i = 0; i < array.length; i++) {
            if (findEl(array[i], i, array, name)) {
                return i;
                // return idx = i;
            };
        };
        return idx;
    };
    // console.log(findIndex(products, 'card'));

    /**                 Methods every() and some()              */

    const hasName = item => Boolean(item.name);
    // const hasName = item => item.name; /** the same as above */

    const arrayEvery = (array, cb) => {
        let result = true;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (!cb(element, i, array, name)) {
                return false;
            };
        };
        return result;
    };
    // console.log(arrayEvery(products, hasName, name));


    const arraySome = (array, cb) => {
        let result = false;
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (cb(element, i, array, name)) {
                return result = true;
            };
        };
        return result;
    };
    // console.log(arraySome(products, hasName, name));


    /**                 Methods reduce()              */

    const sum = products.reduce((acc, product) => {
        return acc + product.price;
    }, 0);
    // console.log(sum);

    const sumProductPrice = (acc, product) => { return acc + product.price; };
    const showAllProductNames = (acc, product) => { return `${acc} ${product.name},`; };

    const arrayReduce = (array, cb, acc) => {
        const result = acc ?? array[0];
        const idx = acc !== undefined || acc ? 0 : 1;
        for (let i = idx; i < array.length; i++) {
            const element = array[i];
            acc = cb(acc, element, i, array);
        }
        return acc;
    };

    // console.log(arrayReduce(products, sumProductPrice, 0));
    // console.log(arrayReduce(products, showAllProductNames, ''));

}

{
    const tweets = [
        { id: "000", likes: 5, tags: ["js", "nodejs"] },
        { id: "001", likes: 2, tags: ["html", "css"] },
        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
        { id: "003", likes: 8, tags: ["css", "react"] },
        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];

    const collectTags = (array, tags = []) => {

        for (let i = 0; i < array.length; i++) {
            const element = array[i].tags;
            if (Array.isArray(element)) {
                for (let index = 0; index < element.length; index++) {
                    const el = element[index];
                    tags.push(el);
                };
                // tags.push(...element);
            }
        };
        return tags;
    };

    function collectTagsRecursive(array, tags = [], i = array.length - 1) {
        if (i < 0) { return tags; }
        {
            collectTagsRecursive(array, tags, i - 1);
            tags.push(...array[i].tags);
        }
        return tags;
    };

    // console.log(collectTagsRecursive(tweets));

    // const collectTags = tweets => tweets.reduce((tagCollection, { tags }) => {
    //     if (Array.isArray(tags)) {
    //         tagCollection.push(...tags);
    //         return tagCollection;
    //     }
    // }, []);
    // console.log(collectTags(tweets));
}

{
    const users = [
        { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, gender: "male" },
        { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, gender: "female" },
        { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, gender: "male" },
        { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, gender: "female" },
        { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"], isActive: true, balance: 3951, gender: "male" },
        { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"], isActive: false, balance: 1498, gender: "male" },
        { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, gender: "female" }
    ];

    const getTotalBalanceByGender = (users, gender) => {
        return users.filter((user) => user.gender === gender).reduce((total, { balance }) => { return total + balance; }, 0);
    };
    // console.log(getTotalBalanceByGender(users, 'male'));
    // console.log(getTotalBalanceByGender(users, 'female'));
}

{
    const logger = (number, callback) => console.log(callback(number));

    const logMessage = (value, i = 'in the next ezample') => `The value is ${value}. The index is ${i}.`;

    const logEvenNumber = (values, callback) => {
        values.forEach((el, i, arr) => {
            if (el % 2 === 0) {
                // console.log(callback(el, i));
            }
        });
    };

    const numbers = [2, 5, 7, 8, 6];
    // logger(3, logMessage);
    logEvenNumber(numbers, logMessage);

    const getValues = (array, cb) => array.filter(cb);
    const odd = el => el % 2;
    const even = el => el % 2 === 0;

    // console.log(getValues(numbers, odd));
    // console.log(getValues(numbers, even));
}


const products = [
    { id: "000", price: 125, name: "stick" },
    { id: "001", price: 212, name: "tel" },
    { id: "002", price: 217, name: "toy" },
    { id: "003", price: 282, name: "card" },
    { id: "004", price: 320, name: "juice" },
];


{/**  Array.map() */
    const getPrice = ({ price }) => price;
    const logger = ({ name, price, }, i, arr) => ({
        i, arr, price, name
    });
    const prices = products.map(getPrice);
    // console.log(prices);

    const mapArray = (array, cb) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            const newEl = cb(array[i], i, array);
            result.push(newEl);
        }

        return result;
    };
    // console.log(mapArray(products, getPrice));
    // console.log(mapArray(products, logger, Date));
}

const users = [
    { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, gender: "male" },
    { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, gender: "female" },
    { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, gender: "male" },
    { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, gender: "female" },
    { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"], isActive: true, balance: 3951, gender: "male" },
    { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"], isActive: false, balance: 1498, gender: "male" },
    { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, gender: "female" }
];

{  /**  Array.flatMap() */

    const flattenMappedArray = (array, cb) => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            const newElement = cb(array[i], i, array);
            if (Array.isArray(newElement)) {

                result = [...result, ...newElement]; /* OR */

                //     for (const el of newElement) {
                //         result.push(el);
                //     }
                // } else {
                //     result.push(el);
            }
        }

        return result;
    };

    const getFriends = ({ friends }) => friends;
    // console.log(flattenMappedArray(users, getFriends));
    // console.log(flattenMappedArray(users, ({ friends }) => friends));
};

{ /* Array.filter()   */

    const getBalance = (({ balance }) => balance > 3111);
    // const filteredBalance = users.filter(({ balance }) => balance > 2999);
    const filteredBalance = users.filter(getBalance);
    // console.log(filteredBalance);


    const filterArray = (array, cb) => {
        const filteredArray = [];

        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) filteredArray.push(array[i]);
        }

        return filteredArray;
    };

    // console.log(filterArray(users, getBalance));
}

{/**  Array.find() */

    const findUserFriendsByEmail = (email => (users.find(user => email === user.email).friends));
    // console.log(findUserFriendsByEmail("elmahead@omatom.com"));


    const findInArray = (array, cb) => {

        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) return array[i];

            // for (let i = 0; i < array.length; i++) {
            //     if (cb(array[i], i, array)) return array[i].friends;
        }
    };

    const getUser = ({ email }) => email === "elmahead@omatom.com";
    // console.log(findInArray(users, getUser));
}

{/** Array.every() & Array.some()  */

    // const isEveryActive = array => array.every(({ isActive }) => isActive);
    // console.log(isEveryActive(users));

    const isEveryInArray = ((array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (!cb(array[i], i, array)) return false;
        }
        return true;
    });

    const isEvery = ({ isActive }) => isActive;
    // console.log(isEveryInArray(users, isEvery));


    const isSomeInArray = (array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) return true;
        }
        return false;
    };

    const isSomeActive = (({ isActive }) => isActive);
    // console.log(isSomeInArray(users, isSomeActive));
}

{  /**  Array.reduce() */

    const totalFriendsCount = users.reduce((total, { friends }) => total + friends.length, 0);
    console.log(totalFriendsCount);

    const reduceArray = ((array, cb, initialValue) => {
        let total = initialValue ?? array[0];
        const index = initialValue !== undefined ? 0 : 1;

        for (let i = index; i < array.length; i++) {
            total = cb(total, array[i], i, array);
        }

        return total;
    });

    const countFriends = (total, { friends }, i, arr) => total + friends.length;
    const showAllProductNames = ((prevValue, { name }) => prevValue + name + ', ');
    console.log(reduceArray(users, countFriends, 0));
    console.log(reduceArray(users, showAllProductNames, ''));
}