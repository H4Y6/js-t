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

    // console.log(getMaxValue(array))
}

{
    function calculateEngravingPrice(message, pricePerWord) {

        return pricePerWord * message.split(" ").length;
    }
    // console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
}

{
    function slugify(title) {

        return title.toLowerCase().split(" ").join("-");
    }
    // console.log(slugify("Arrays for begginers"))
}

{
    const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
    const newClients = ['Peach', 'Houston'];

    const allClients = [...oldClients, ...newClients];
    // const allClients = oldClients.concat(newClients);
    // console.log(allClients);
}

{
    function makeArray(firstArray, secondArray, maxLength) {
        const newArray = [...firstArray, ...secondArray];

        return newArray.length <= maxLength ? newArray : newArray.slice(0, maxLength);
        // return firstArray.length + secondArray.length <= maxLength ? [...firstArray, ...secondArray]
        //     : [...firstArray, ...secondArray].slice(0, maxLength);
    }
    // console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4))
    // console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3))
}

{
    function calculateTotal(number) {
        let total = 0;

        for (let i = 1; i <= number; i += 1) {
            total += i;
        }

        return total;
    }

    // console.log(calculateTotal(34));
}