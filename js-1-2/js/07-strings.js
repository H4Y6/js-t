// function getNameLength(name) {
//     const nameLength = name.length;
//     const message = `Name ${name} is ${nameLength} characters long`; // Change this line
//     console.log(message);
//     return message;
// }
// getNameLength("Billy");

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopicLength, courseTopic[0], courseTopic[courseTopicLength - 1])

// function getSubstring(string, length) {
//     const substring = string.slice(0, length);
//     return substring;
// };
// console.log(getSubstring('folder', 4))

// function formatMessage(message, maxLength) {
//     let result = message.length <= maxLength ? message : message.slice(0, maxLength) + '...';
//     console.log(result);
//     return result;
// }
// formatMessage("polerings", 7)

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase();
//     console.log(normalizedInput)
//     return normalizedInput;
// }
// normalizeInput('AdoPoler');

// function checkForName(fullName, name) {
//     const result = fullName.includes(name);
//     console.log(result)
//     return result;
// }
// checkForName('Crisal Loppers', 'Crisal')

// function checkForSpam(message) {
//     let result;
//     result = message.toLowerCase().includes('spam') ? true : result = message.toLowerCase().includes('sale');

//     console.log(result)
//     return result;
// }
// checkForSpam("Get best sam offers now!");

// const weight = '62.1';
// const height = '1,83';
// const bmi = Number(weight.replace(',', '.'))
//     / Number(height.replace(',', '.')) ** 2;
// // / Math.pow(Number(height.replace(',', '.')), 2);
// console.log(bmi.toFixed(2));
// console.log(+bmi.toFixed(2));


// console.log(10 >= 9);
// console.log(10 >= '9');
// console.log('10' > '9');  //false by unicode
// console.log('10' < '9');  //true by unicode
// console.log('5' == 5);    //true
// console.log('5' === 5);    //false
// console.log('1' == true);    //true
// console.log(1 == true);    //true
// console.log(1 === true);    //false
// console.log('0' == false);    //true (0 == false)
// console.log('0' === false);    //false
// console.log('Pope' < 'pope');  //true by unicode
// console.log('pope' < 'Pope');  //false by unicode
// console.log('Pope' === 'pope');  //false
// console.log(undefined == null);  //true
// console.log(undefined === null);  //false

// console.log(true && 3);  //3  (true)
// console.log(false && 3);  // false
// console.log(true && 3 && 'oops');  //oops (true)
// console.log(true && 0 && 'oops');  // 0 (false)
// console.log(true || 3);  // true
// console.log(true || 3 || 4);  // true
// console.log(true || false || 4);  // true
// console.log(null || 2 || undefined);  // 2  (true)
// console.log((4 && null && 2) > 0);  // false
// console.log(null || (3 && 2) > 0);  // 2 true

// const a = 2;
// const b = 5;
// const c = a || b;
// console.log(c);  // 2

//nullish operator example:
// const incomingValue = undefined; // or null
// const defaultValue = 4;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//     console.log(client);
// }

// const string = "javascript";
// let characters = [];
// for (const character of string) {
//     characters.push(character);
// }
// console.log(characters);

// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message = "Клієнт з таким ім'ям відсутній в базі даних!";

// for (const client of clients) {
//     if (client === clientNameToFind) {
//         message = "Клієнт з таким ім'ям є в базі даних!";
//         break;
//     }
//     // Якщо не збігається, то на цій ітерації нічого не робимо
// }

// console.log(message); // Клієнт з таким ім'ям є в базі даних!

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] < threshold) {
//         continue;
//     }

//     console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }
// Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// припиняється і управління передається на наступну ітерацію.
// for (const number of numbers) {
//     if (number < threshold) {
//         continue;
//     }

//     console.log(`Число більше за ${threshold}: ${number}`); // 18, 29, 34
// }

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// const fruit = "apple";

// if (fruit === "apple" || fruit === "strawberry") {
//     console.log("It is a red fruit!");
// }

// const fruit = "apple";

// if (
//     fruit === "apple" ||
//     fruit === "strawberry" ||
//     fruit === "cherry" ||
//     fruit === "cranberries"
// ) {
//     console.log("It is a red fruit!");
// }

// Виносимо варіанти в масив
// const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
// const fruit = "cherry";
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//     console.log(`${fruit} is a red fruit!`);
// }

// Метод push() додає один або декілька елементів наприкінці масиву,
//  без необхідності зазначати індекси елементів, що додаються.
//  Повертає довжину масиву після додавання елементів.

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

// Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент.
//  Якщо масив порожній, метод повертає undefined.

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
//  не змінюючи його. Копія створюється з begin і до, але не включно, end -
//  індекси елементів вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

// Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

// Щоб видалити елементи в масиві, передаються два аргументи.

// splice(position, num)
// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи.
// const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи,
//  за такої умови, другий аргумент повинен дорівнювати нулю.

// splice(position, 0, new_element_1, new_element_2, ...)

// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
// Наприклад, у нас є масив з назвами кольорів у вигляді рядків.Додамо новий колір
//  перед елементом з індексом 2.

// const colors = ["red", "green", "blue"];
// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

// const colors = ["red", "green", "blue"];
// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.
//  Для цього необхідно передати мінімум три аргументи. Кількість елементів,
//  що видаляються і додаються, може не збігатися.
// splice(position, num, new_element_1, new_element_2, ...)

// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// concat() Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається,
//  а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithOldFirst1 = [...oldClients, ...newClients];
console.log(allClientsWithOldFirst1);

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]
