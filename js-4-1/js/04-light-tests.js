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
    }
}