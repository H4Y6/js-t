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


