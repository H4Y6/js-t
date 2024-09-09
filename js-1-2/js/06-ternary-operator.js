
// function checkStorage(available, ordered) {
//     let message;
//     if (ordered > available) {
//         message = "Not enough goods in stock!";
//     } else {
//         message = "The order is accepted, our manager will contact you";
//     }
//     return message;
// }

// function checkStorage(available, ordered) {
//     let message;
//     message = (ordered > available) ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you.";
//     return message;
// };
// console.log(checkStorage(115, 61));

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    message = password !== ADMIN_PASSWORD ? "Access denied, wrong password!" : "Access is allowed.";
    return message;
}
console.log(checkPassword("JJ-jqueryismyjam"));
