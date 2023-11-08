const getCommonElements = function (arrayOne, arrayTwo) {
    let commonElements = [];

    for (const element of arrayOne) {
        if (arrayTwo.includes(element)) {
            commonElements.push(element);
        }
    }

    console.log(commonElements);
    return commonElements;
}

const array1 = [77, 22, 2, 5, 7, 33];
const array2 = [1, 2, 7, 33, 65];

// getCommonElements(array1, array2);