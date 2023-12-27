{
    const pizzaPalace = {
        pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
        order(pizzaName, onSuccesCb, onErrorCb) {
            if (this.pizzas.includes(pizzaName)) {
                return onSuccesCb(pizzaName);
            } else {
                return onErrorCb(pizzaName);
            }
        },
    };
    function makePizza(pizzaName) {
        console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`)
        return `Your order is accepted. Cooking pizza ${pizzaName}.`;
    }

    function onOrderError(pizzaName) {
        console.log(`Error! There is no pizza with a name ${pizzaName} in the assortment.`)
        return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
    }
    // pizzaPalace.order('Smoked', makePizza, onOrderError);
    // pizzaPalace.order('Four meats', makePizza, onOrderError);
    // pizzaPalace.order('Big Mike', makePizza, onOrderError);
    // pizzaPalace.order('Vienna', makePizza, onOrderError);
}

{
    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;
        orderedItems.forEach(function (item) { totalPrice += item });
        // orderedItems.forEach( item => totalPrice += item);

        return totalPrice;
    };

    function filterArray(numbers, value) {
        const filteredNumbers = [];

        // numbers.forEach(function (number) {
        //     if (number > value) {
        //         filteredNumbers.push(number);
        //     }
        numbers.forEach(number => {
            if (number < value) filteredNumbers.push(number);
            // if (number > value) filteredNumbers.push(number);
        });
        return filteredNumbers;
    }
    console.log(filterArray([12, 24, 8, 41, 76], 20));

    function getCommonElements(firstArray, secondArray) {
        const commonElements = [];
        firstArray.forEach(el => {
            if (secondArray.includes(el)) commonElements.push(el);
        });

        return commonElements;
    };
    console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
}
