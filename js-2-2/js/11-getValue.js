const array = [5, 66, 123, 59, 97];

{
    const getAvarageValue = function (array) {
        let total = 0;

        for (const item of array) {
            total += item;
        }

        console.log(total / array.length);
        return total / array.length;
    };

    // getAvarageValue(array);
}

{
    // const getMaxValue = function (arr) {
    //     return Math.max(...arr);
    // }

    const getMaxValue = function (arr) {
        let maxValue = arr[0];

        for (const item of arr) {
            maxValue = item > maxValue ? item : maxValue;
        }

        return maxValue;
    }

    console.log(getMaxValue(array))
}