// function getSubscriptionPrice(type) {
//     let price;

//     switch (type) {
//         case 'starter':
//             price = 0;
//             break;

//         case 'professional':
//             price = 20;
//             break;

//         case 'organization':
//             price = 50;
//             break;

//         default: console.log('Unknown subscription type.');
//     }
//     console.log(price);
//     return price;
// }
// getSubscriptionPrice('professional')

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    switch (password) {
        case null:
            message = "Canceled by user!";
            break;

        case ADMIN_PASSWORD:
            message = "Welcome!";
            break;

        default: message = "Access denied, wrong password!";
            break;
    }
    console.log(message)
    return message;
}
checkPassword("AAjqueryismyjam");