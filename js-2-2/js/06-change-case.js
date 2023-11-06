/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const changeCase = function (string) {
//   const letters = string.split('');
//   let invertedString = '';

//   for (const letter of letters) {
//     const isInLowerCase = letter === letter.toLowerCase();

//     invertedString += isInLowerCase
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
//   }

//   return invertedString;
// };

// const invertString = function (string) {
//   let invertedString = "";
//   const letters = string.split("");
//   for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
//       invertedString += letter.toUpperCase();
//     } else {
//       invertedString += letter.toLowerCase();
//     }
//   }
//   return invertedString;
// }



const invertString = function (string) {
  let invertedString = "";
  const letters = string.split("");

  for (const letter of letters) {
    invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()
  }

  return invertedString;
}

console.log(invertString('qweRTY')); // QWErty
console.log(invertString('mAnGo')); // MaNgO
console.log(invertString('AjAx')); // aJaX

