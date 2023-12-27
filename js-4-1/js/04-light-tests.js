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
        return `Your order is accepted. Cooking pizza ${pizzaName}.`;
    }

    function onOrderError(pizzaName) {
        return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
    }

    console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
    console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
    console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
    console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

}