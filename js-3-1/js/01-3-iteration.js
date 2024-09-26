/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

const keys = Object.keys(feedback);

// console.log(keys);

for (const key of keys) {
  // console.log(key);
  // console.log(feedback[key]);

  totalFeedback += feedback[key];
}

// console.log('totalFeedback: ', totalFeedback);

const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback);

const feedbackKeys = Object.keys(feedback);
console.log(feedbackKeys);

for (const key of feedbackKeys) {
  console.log(key, ':', feedback[key]);
}

const feedbackValues = Object.values(feedback);
console.log(feedbackKeys, feedbackValues);

const feedbackEntries = Object.entries(feedback);
console.log(feedbackEntries);