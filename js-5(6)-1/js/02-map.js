/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */

/**  
 * The map(callback) method is used to transform an array. It calls a callback for each element of the original array and writes its result to a new array, which will be the method execution result.

array.map((element, index, array) => {
  // Callback body
});

* - Iterates over the original array element by element.
* - Does not change the original array.
* - The callback function’s result is written to a new array.
* - Returns a new array of the same length.
  It can be used to change every element of an array. The original array is used as a reference, a basis for making another collection.
  Using anonymous arrow functions with an implicit return greatly reduces the "noise" when declaring a callback function, making the code cleaner and easier to read.
 */

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map(number => {
  return number * 2;
});
// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
console.table(players);

/*
 * Получаем массив имён всех игроков
 */

const playerNames = players.map(player => player.name);
const playerNamesDestructurized = players.map(({ name }) => name);
// console.log('playerNames', playerNames);
// console.log('playerNamesDestructurized', playerNamesDestructurized);

const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

const upatedPlayers = players.map(player => ({
  ...player,
  points: player.points * 1.1,
}));

// console.table(upatedPlayers);
// console.log(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100,
//     };
//   }

//   return player;
// });

const updatedPlayers = players.map(player =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player,
);
console.table(updatedPlayers);
