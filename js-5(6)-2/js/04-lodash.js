/*
 * isEmpty()
 */

console.dir(_);

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));

/*
 * get()
 *
 * - if(user && user.location && obj.location.city)
 * - user?.location?.city    <--short form for upper expression.
 */

const user = {
    name: 'mango',
    location: {
        city: 'Lviv',
    },
};

// console.log(_.get(user, 'location.city'));

// console.log(user.location.city);

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// }

// console.log(user?.location?.city);

/*
 * union()
 */

console.log(_.union([1, 2, 3], [3, 4, 5]));    /**unique elements only */

/*
 * range()
 */

// console.log(_.range(10, 51));

/*
 * sortBy()
 */

/*
 * sum() и sumBy()
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

console.log(_.sumBy(players, player => player?.timePlayed));
console.log(_.sumBy(players, player => player?.online ? player.timePlayed : 0));
console.log(_.sumBy(players, player => !player?.online ? player.timePlayed : 0));

const objects = [{ 'n': 4 }, { 'n': 21 }, { 'n': 8 }, { 'n': 6 }];

const sum = _.sumBy(objects, function (o) { return o.n; });
const sumB = _.sumBy(objects, o => o.n % 2 ? o.n : 0);
console.log(sum, "&", sumB);

/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */

/*
 * random()
 */

/*
 * min() и max()
 * minBy() и maxBy()
 */

// console.log(_.minBy(players, player => player.timePlayed));

/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

console.log(_.kebabCase(' a b c '));
console.log(_.join(['a', 'b', 'c'], '-'));
