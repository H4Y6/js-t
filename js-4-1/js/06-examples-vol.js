/**  array .(method)(callback[currentValue, index, array]);  

array.method((item, idx, arr) => {
// logic that will be used in each iteration
});

  All parameters, except for the item element value, are optional.
 Parameter names can be arbitrary, but there are unofficial conventions.

array.method(item => {
    // logic that will be used in each iteration
});

const callback = (item, index, currentArray) => { };
 */
// const date = new Date(Date.UTC(2014, 8, 19, 14, 5, 0));

const date = new Date();

// console.log(date.toString().slice(0, 25));

/** JavaScript Internationalization API, regarding dates:  */

// console.log(
//     new Intl.DateTimeFormat('ua-UK', {
//         dateStyle: 'short',
//         timeStyle: 'long',
//     }).format(date),
// );

/**console.log*/(
    new Intl.DateTimeFormat("ua", {
        // dateStyle: 'short',
        // timeStyle: 'full',
        hour12: false,
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour: '2-digit',
    }).format(date));

const options = {
    dateStyle: 'short',
    timeStyle: 'long',
    // hour12: false,
    // day: 'numeric',
    // month: 'short',
    // year: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    // hour: '2-digit',
};

// console.log(new Intl.DateTimeFormat("en-GB", options).format(date));

/**            Carry out function:       */

const calculateVolume = (a) => (b) => (c) => a * b * c;
// console.log((calculateVolume(2)(7)(16)));

const products = [
    {
        id: 1,
        price: 722,
        name: 'iphone',
        tags: ['phone', 'expensive'],
    },
    {
        id: 2,
        price: 222,
        name: 'samsung',
        tags: ['phone', 'mediumPrice'],
    },
    {
        id: 3,
        price: 321,
        name: 'nokia3310',
        tags: ['phone', 'unbreakable'],
    },
    {
        id: 4,
        price: 140,
        name: 'star wars sword',
        tags: 'weapon',
    },
];

/** Method map */
{
    // To get price array:
    // const productsPrices = products.map((product) => product.price);

    // destructuring:
    const getPrice = ({ price }) => price;
    const logger = (product, index, array) =>
        console.log(
            `Product: ${product.name}; Index: ${index}; Length: ${array.length}`
        );

    const productPrices = products.map(getPrice);
    // console.log(productPrices); 

    const arrayMap = (array, callBack) => {
        // products
        // callBack = ({ price }) => price;
        let result = [];

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const newItem = callBack(element, index, array);
            result.push(newItem);
        };

        return result;
    };

    const productPricesA = arrayMap(products, getPrice);
    // console.log(productPricesA);
    // arrayMap(products, logger);

    // console.log(arrayMap(products, getPrice));

    // const mapPrices = (el, idx, array) => { return el => el.price };
    const matPrices = ({ price }) => price;
    const logging = (el, idx, array) =>
        console.log(`${new Date().toLocaleTimeString()}: name:${el.name}, price: ${el.price}, index: ${idx}`);

    const arrayMapping = (array, cb) => {
        const resultedArray = [];

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const newEl = resultedArray.push(element);
        };
        return resultedArray;
    };

    // console.log(arrayMapping(products, matPrices));
    // arrayMap(products, logging);
}

/** Method flatMap */

{
    // const getTags = (product) => product.tags;
    const getTags = ({ tags }) => tags;

    const flatMap = (array, callBack) => {
        let result = [];

        for (let i = 0; i < array.length; i++) {
            const newItem = callBack(array[i], i, array);
            // 0: ['phone', 'expensive']
            // 1: ['phone', 'mediumPrice']

            if (Array.isArray(newItem)) {
                for (const item of newItem) {
                    result.push(item);
                }

                // using spread
                // result = [...result, ...newItem];
            } else {
                result.push(newItem);
            }
        }

        return result;
    };

    const tags = flatMap(products, getTags);
    // const tags = products.flatMap(getTags);
    // console.log(tags);

    const flatMapArray = (array, cb) => {
        let resultedArray = [];

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const newEl = cb(element, index, array);
            if (Array.isArray(newEl)) {
                // for (const iterator of newEl) {
                //     resultedArray.push(iterator);
                // };
                /**  OR    */

                resultedArray = [...resultedArray, ...newEl];

            } else {
                resultedArray.push(newEl);
            }
        };
        return resultedArray;
    };

    // console.log(flatMapArray(products, getTags));
}

/** Method filter */

{
    const filterByPrice = (product) => product.price > 500;

    const filterArray = (array, callBack) => {
        const result = [];

        for (let i = 0; i < array.length; i++) {
            const isSelected = callBack(array[i], i, array);

            if (isSelected) {
                result.push(array[i]);
            }
        }

        return result;
    };

    const filteredProducts = filterArray(products, filterByPrice);
    // const filteredProducts = products.filter(filterByPrice);
    // console.log(filteredProducts);

    const priceFilterCb = ({ price }, idx, arr) => price > 301;

    const filterArr = (array, cb) => {
        const filteredArr = [];

        for (let index = 0; index < array.length; index++) {
            if (cb(array[index], index, array)) filteredArr.push(array[index]);
        };
        return filteredArr;
    };

    // console.log(filterArr(products, priceFilterCb));
}

/** Method find */
{
    const findSamsung = (product) => product.name === 'samsung';

    const findInArray = (array, callback) => {
        let searchedItem;

        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                searchedItem = array[i];
                break;
            }
        }

        return searchedItem;
    };

    const phone = findInArray(products, findSamsung);
    const product = findInArray(products, (product) => product.name === ' ');
    // const phone = products.find(findSamsung);
    // console.log(phone);
    // console.log(product);

    const findEl = (el, _, __, elValue) => el.price === elValue;
    // const findEl = (el, _, __, elValue) => el.name === elValue;

    const findArrayEl = (array, cb, value) => {
        let foundEl;

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (cb(element, index, array, value))
                return foundEl = element;
        };
        return foundEl;
    };

    // console.log(findArrayEl(products, ({ price }) => price === 140));
    // console.log(findArrayEl(products, findEl, 222));
    // console.log(findArrayEl(products, findEl, 'iphone'));

    const findIndex = (array, cb) => {
        let idx = -1;

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (cb(element, index, array)) return idx = index;
        };
        return idx;
    };

    // console.log(findIndex(products, ({ name }) => name === 'nokia3310'));
    // console.log(findIndex(products, ({ price }) => price === 722));
}

/** Methods every & some */
{
    const comparePrice = ({ price }, i, arr) => price > 544;

    const arrayEvery = (array, cb) => {
        let result = false;

        for (let index = 0; index < array.length; index++) {
            if (cb(array[index], index, array)) continue;

            return result;
        };
        return result = true;
    };

    // console.log(arrayEvery(products, comparePrice));

    const arraySome = (array, cb) => {
        let result = true;

        for (let index = 0; index < array.length; index++) {
            if (cb(array[index], index, array)) return result;
            continue;
        };
        return result = false;
    };

    // console.log(arraySome(products, comparePrice))
}

/**       method reduce       */
{
    // const priceSum = products.reduce((sum, { price }) => sum + price, 0);
    const sumProductPrice = (prevValue, product) => prevValue + product.price;

    const arrayReduce = (array, cb, initialValue) => {
        // let prevValue = initialValue ? initialValue : array[0];
        let prevValue = initialValue ?? array[0];
        let i = initialValue || initialValue === 0 ? 0 : 1;

        for (i; i < array.length; i++) {
            prevValue = cb(prevValue, array[i], i, array);
        };
        return prevValue;
    };

    // console.log(arrayReduce(products, sumProductPrice, 0));


    const sumPrices = (products) => products.reduce((sum, { price }) => sum + price, 0);
    // console.log(sumPrices(products));

    /**   OR    */

    const priceSum = products.reduce((total, { price }) => total + price, 0);
    // console.log(priceSum);
}

{
    /**    imperative function      */
/**  cb to get priceSum and more with different params: */  const getSumPrice = ((acc, el, idx, array) => { return acc + el.price });
    const showNames = (acc, { name }) => acc + name + ", ";

    const arrayReduce = (array, cb, initValue) => {
        let acc = initValue ?? array[0];
        let i = initValue === undefined ? 1 : 0;
        for (i; i < array.length; i++) {
            const element = array[i];
            acc = cb(acc, element, i, array);
        };
        return acc;
    };

    // function arrayReduce(array, cb, initialValue) {
    //     let prevValue = initialValue ?? array[0];
    //     let i = initialValue === undefined ? 1 : 0;

    //     for (i; i < array.length; i++) {
    //         prevValue = cb(prevValue, array[i], i, array);
    //         // console.log(prevValue);
    //     };
    //     return prevValue;
    // };
    // console.log(arrayReduce(products, getSumPrice, 0));
    // console.log(arrayReduce(products, showNames, 'Names: '));
}

const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

/**   з масиву постів твіттера окремого користувача необхідно порахувати суму усіх лайків:   */
{
    const countLikes = array => array.reduce((totalLikes, { likes }) => totalLikes + likes, 0);
    const likes = countLikes(tweets);
    // const likes = tweets.reduce((totalLikes, { likes }) => totalLikes + likes, 0);

    console.log(likes);
}

/**   зберемо в масив усі теги, які зустрічаються в постах:    */
{
    const collectTags = tweets => tweets.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);
        return allTags;
    }, []);

    const tags = collectTags(tweets);
    console.log(tags);
}