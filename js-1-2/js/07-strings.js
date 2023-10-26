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

function checkForSpam(message) {
    let result;
    result = message.toLowerCase().includes('spam') ? true : result = message.toLowerCase().includes('sale');

    console.log(result)
    return result;
}
checkForSpam("Get best sam offers now!");

