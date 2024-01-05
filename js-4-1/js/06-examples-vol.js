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
        price: 122,
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
        tags: ['weapon'],
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
    console.log(productPrices);

    const arrayMap = (array, callBack) => {
        // products
        // callBack = ({ price }) => price;
        let result = [];

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            const newItem = callBack(element, index, array);
            result.push(newItem);
        }

        return result;
    };

    const productPricesA = arrayMap(products, getPrice);
    arrayMap(products, logger);
    console.log(productPricesA);
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

                // с использованием спреда
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
}

/** Method filter */

{
    const filterByPrice = (product) => product.price > 500;

    const filterArray = (array, callBack) => {
        let result = [];

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
}