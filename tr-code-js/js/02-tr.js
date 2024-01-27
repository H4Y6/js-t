
const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],
    getPotions() {
        return this.potions;
    },
    addPotion(newPotion) {
        for (const { name } of this.potions) {
            if (name === newPotion.name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }
        this.potions.push(newPotion);
    },
    removePotion(potionName) {
        const potionIndex = this.potions.findIndex(p => p.name === potionName);
        if (potionIndex === -1) {
            return `Potion ${potionName} is not in inventory!`;
        }
        this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
        const potionIndex = this.potions.findIndex(p => p.name === oldName);
        if (potionIndex === -1) {
            return `Potion ${oldName} is not in inventory!`;
        }
        this.potions[potionIndex].name = newName;
    },
};

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Idast"));

function processCall(recipient, onAvailable, onNotAvailable) {
    const isRecipientAvailable = Math.random() > 0.5;
    if (!isRecipientAvailable) {
        onNotAvailable(recipient);
        return;
    }
    onAvailable(recipient);
}

function takeCall(name) {
    console.log(`Соединяем с ${name}, ожидайте...`);
}
function activateAnsweringMachine(name) {
    console.log(`Абонент ${name} недоступен, оставьте сообщение.`
    );
}

function leaveHoloMessage(name) {
    console.log(`Абонент ${name} недоступен, записываем голограмму.`
    );
}
// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, onSuccess, onError) {
        if (!this.pizzas.includes(pizzaName)) {
            return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
        };
        return onSuccess(pizzaName);
    },
};

function makePizza(pizzaName) {
    return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

function onOrderError(error) {
    return `Error! ${error}`;
}

// Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));

{
    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;

        for (let i = 0; i < orderedItems.length; i += 1) {
            totalPrice += orderedItems[i];
        }

        return totalPrice;
    }

    function calculateTotalPriceFE(orderedItems) {
        let totalPrice = 0;

        orderedItems.forEach(el => totalPrice += el);
        return totalPrice;
    }

    // console.log(calculateTotalPrice([164, 48, 291]))
    // console.log(calculateTotalPriceFE([164, 48, 291]))
}

{
    function filterArray(numbers, value) {
        const newNumbers = [];

        numbers.forEach(el => {
            if (el > value)
                newNumbers.push(el);
        });
        return newNumbers;
    };
    // console.log(filterArray([1, 24, 8, 41, 76], 38));

    function getCommonElements(firstArray, secondArray) {
        const commonElements = [];

        firstArray.forEach(el => {
            if (secondArray.includes(el)) commonElements.push(el);
        });
        return commonElements;
    };
    // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

    const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
    // console.log(calculateTotalPrice(31, 40));

    const getTotalPrice = (orderedItems) => {
        let totalPrice = 0;
        const sumPrice = (price) => totalPrice += price;

        orderedItems.forEach(sumPrice);

        return totalPrice;
    };
    // console.log(getTotalPrice([412, 371, 94, 63, 176]));

    const filterArrayArrow = (numbers, value) => {
        const filterredArray = [];
        numbers.forEach(n => { if (n > value) filterredArray.push(n); });
        return filterredArray;
    };
    // console.log(filterArrayArrow([12, 24, 8, 41, 76], 20));
}

{
    function getCommonElements(firstArray, secondArray) {
        const commonArray = [];

        firstArray.forEach(el => {
            if (secondArray.includes(el))
                commonArray.push(el);
        });
        return commonArray;
    };
    // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;

        // const sumPrice = price => totalPrice += price;
        // orderedItems.forEach(sumPrice);

        orderedItems.forEach(item => totalPrice += item);

        return totalPrice;
    };
    // console.log((calculateTotalPrice([412, 371, 94, 63, 176])));

    const filterArray = (numbers, value) => {
        const filteredNumbers = [];
        numbers.forEach(number => { if (number > value) filteredNumbers.push(number); });
        return filteredNumbers;
    };
    // console.log(filterArray([12, 24, 8, 41, 76], 38));
}

{
    const getCommonElements = (firstArray, secondArray) => {
        const commonElements = [];

        firstArray.forEach(el => {
            if (secondArray.includes(el)) { commonElements.push(el); };
        });
        return commonElements;
    };
    // console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

    const changeEven = (numbers, value) => {
        const newNumbers = [];

        numbers.forEach(el => {
            if (el % 2 === 0) newNumbers.push(value + el);
            newNumbers.push(el);
        });
        return newNumbers;
    };
    // console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
}

const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
        genres: ["adventure", "history"],
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
        genres: ["fiction"],
    },
    {
        title: "Redder Than Blood",
        author: "Tanith Lee",
        rating: 7.94,
        genres: ["mysticism"],
    },
    {
        title: "The Dreams in the Witch House",
        author: "Howard Lovecraft",
        rating: 8.67,
    },
];


{  /**   map  && flatMap    */
    const planets = ["Earth", "Mars", "Venus", "Jupiter"];
    const planetsLengths = planets.map(pl => pl.length);
    // console.log(planetsLengths);


    const titles = books.map(b => b.title);
    // console.log(titles);

    const genres = books.flatMap(b => b.genres);
    // console.log(genres);
}

const users = [
    { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, skills: ["ipsum", "lorem"], gender: "male", age: 37, balance: 2811, gender: "male" },
    { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, skills: ["tempor", "mollit", "commodo", "veniam", "laborum"], gender: "female", age: 34, balance: 3821, gender: "female" },
    { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, skills: ["nulla", "anim", "proident", "ipsum", "elit"], gender: "male", age: 24, balance: 3793, gender: "male" },
    { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, skills: ["adipisicing", "irure", "velit"], gender: "female", age: 21, balance: 2278, gender: "female" },
    { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong"], isActive: true, balance: 3951, skills: ["ex", "culpa", "nostrud"], gender: "male", age: 27, balance: 3951, gender: "male" },
    { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman"], isActive: false, balance: 1498, skills: ["non", "amet", "ipsum"], gender: "male", age: 38, balance: 1498, gender: "male" },
    { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, skills: ["lorem", "veniam", "culpa"], gender: "female", age: 39, balance: 2764, gender: "female" },
];

{
    const getUserNames = users => {
        return users.map(u => u.name);
    };
    // console.log(getUserNames(users));

    const getUserEmails = users => {
        return users.map(u => u.email);
    };
    // console.log(getUserEmails(users));
}


{
    /**   filter && find */

    const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

    const evenNumbers = numbers.filter(n => n % 2 === 0);
    const oddNumbers = numbers.filter(n => n % 2 !== 0);

    // console.log(evenNumbers);
    // console.log(oddNumbers);

    const MIN_RATING = 8;
    const AUTHOR = "Bernard Cornwell";

    const topRatedBooks = books.filter(b => b.rating >= MIN_RATING);
    const booksByAuthor = books.filter(b => b.author === AUTHOR);
    // console.log(topRatedBooks);
    // console.log(booksByAuthor);

    const LOW_SCORE = 50;
    const HIGH_SCORE = 80;
    const students = [
        { name: "Mango", score: 83 },
        { name: "Poly", score: 59 },
        { name: "Ajax", score: 37 },
        { name: "Kiwi", score: 94 },
        { name: "Houston", score: 64 },
    ];
    const best = students.filter(student => student.score >= HIGH_SCORE);
    // console.log(best); // Массив объектов с именами Mango и Kiwi 
    const worst = students.filter(student => student.score < LOW_SCORE);
    // console.log(worst); // Массив с одним объектом Ajax 
    // В коллбек-функции удобно деструктуризировать свойства объекта 
    const average = students.filter(({ score }) => score >= LOW_SCORE && score < HIGH_SCORE);
    // console.log(average);

    const allCourses = students.flatMap(student => student.courses);
    const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index);

    // console.log(uniqueCourses);

    const allGenres = books.flatMap(b => b.genres);
    const uniqueGenres = allGenres.filter((el, idx, array) => array.indexOf(el) === idx);

    // console.log(uniqueGenres);

    const getUsersWithEyeColor = (users, color) => {
        return users.filter(u => u.eyeColor === color);
    };
    // console.log(getUsersWithEyeColor(users, 'blue'))

    const getUsersWithAge = (users, minAge, maxAge) => {
        return users.filter(u => u.age > minAge && u.age < maxAge);
    };
    // console.log(getUsersWithAge(users, 20, 30));

    const getUsersWithFriend = (users, friendName) => {
        return users.filter(u => u.friends.includes(friendName));
    };
    // console.log(getUsersWithFriend(users, "Briana Decker"));

    const getFriends = (users) => {
        return users.flatMap(u => u.friends).filter((f, idx, frs) => frs.indexOf(f) === idx);
    };
    // console.log(getFriends(users));

    const getActiveUsers = (users) => {
        return users.filter(u => u.isActive === true);
    };
    // console.log(getActiveUsers(users));

    {
        const BOOK_TITLE = 'The Dream of a Ridiculous Man';
        const AUTHOR = 'Robert Sheckley';

        const bookWithTitle = books.find(b => b.title === BOOK_TITLE);
        const bookByAuthor = books.find(b => b.author === AUTHOR);
        // console.log(bookWithTitle, bookByAuthor);
    }

    {
        const getUserWithEmail = (users, email) => {
            return users.find(u => u.email === email);
        };
        // console.log(getUserWithEmail(users, "elmahead@omatom.com"));
    }

    const firstArray = [26, 94, 36, 18];
    const secondArray = [17, 61, 23];
    const thirdArray = [17, 26, 94, 61, 36, 23, 18];

    const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
    const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);

    const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
    const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);

    const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
    const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);


    const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
    const anyElementInFirstIsOdd = firstArray.some(number => number % 2 !== 0);

    const anyElementInSecondIsEven = secondArray.some(number => number % 2 === 0);
    const anyElementInSecondIsOdd = secondArray.some(number => number % 2 !== 0);

    const anyElementInThirdIsEven = thirdArray.some(number => number % 2 === 0);
    const anyElementInThirdIsOdd = thirdArray.some(number => number % 2 !== 0);

    // console.log(eachElementInFirstIsEven, eachElementInFirstIsOdd, eachElementInSecondIsEven, eachElementInSecondIsOdd, eachElementInThirdIsEven, eachElementInThirdIsOdd)
    // console.log(anyElementInFirstIsEven, anyElementInFirstIsOdd, anyElementInSecondIsEven, anyElementInSecondIsOdd, anyElementInThirdIsEven, anyElementInThirdIsOdd);

    const isEveryUserActive = (users) => {
        return users.every(u => u.isActive === true);
    };
    // console.log(isEveryUserActive(users));

    const isAnyUserActive = users => {
        return users.some(u => u.isActive === true);
    };
    // console.log(isAnyUserActive(users));

    /**    reduce()     */

    const players = [
        { name: "Mango", playtime: 1270, gamesPlayed: 4 },
        { name: "Poly", playtime: 469, gamesPlayed: 2 },
        { name: "Ajax", playtime: 690, gamesPlayed: 3 },
        { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
    ];

    const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
        return acc + player.playtime / player.gamesPlayed;
    }, 0);
    // console.log(totalAveragePlaytimePerGame);

    const calculateTotalBalance = users => {
        return users.reduce((acc, user) => {
            return acc + user.balance;
        }, 0);
    };
    // console.log(calculateTotalBalance(users));

    const getTotalFriendCount = arr => {
        return arr.reduce((acc, { friends }) => {
            return acc + friends.length;
        }, 0);
    };
    // console.log(getTotalFriendCount(users));

    /**    sort()     */

    const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

    const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
    const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

    // console.log(ascendingReleaseDates);
    // console.log(descendingReleaseDates);

    const authors = ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Howard Lovecraft"];

    const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
    const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

    // console.log(authorsInAlphabetOrder);
    // console.log(authorsInReversedOrder);

    const sortedByAuthorName = [...books].sort((fArr, sArr) => fArr.author.localeCompare(sArr.author));
    const sortedByReversedAuthorName = [...books].sort((fArr, sArr) => sArr.author.localeCompare(fArr.author));
    const sortedByAscendingRating = [...books].sort((fArr, sArr) => fArr.rating - sArr.rating);
    const sortedByDescentingRating = [...books].sort((fArr, sArr) => sArr.rating - fArr.rating);

    // console.log(sortedByAuthorName);
    // console.log(sortedByReversedAuthorName);
    // console.log(sortedByAscendingRating);
    // console.log(sortedByDescentingRating);

    const sortByAscendingBalance = users => {
        return [...users].sort((aArr, bArr) => aArr.balance - bArr.balance);
    };
    // console.log(sortByAscendingBalance(users));

    const sortByDescendingFriendCount = users => {
        return [...users].sort((aArr, bArr) => bArr.friends.length - aArr.friends.length);
    };
    // console.log(sortByDescendingFriendCount(users));

    const sortByName = users => {
        return [...users].sort((aArr, bArr) => aArr.name.localeCompare(bArr.name));
    };
    // console.log(sortByName(users));

    const MIN_BOOK_RATING = 8;
    const names = [...books].filter(({ rating }) => rating > MIN_BOOK_RATING).map(({ author }) => author).sort((a, b) => a.localeCompare(b));

    // console.log(names);

    const getNamesSortedByFriendCount = users => {
        // return [...users].sort((a, b) => a.friends.length - b.friends.length).map(({ name }) => name);
    };

    // console.log(getNamesSortedByFriendCount(users));

    const getSortedFriends = users => {
        return [...users].flatMap(({ friends }) => friends).filter((el, idx, arr) => arr.indexOf(el) === idx).sort((a, b) => a.localeCompare(b));
    };

    // console.log(getSortedFriends(users));

    const getTotalBalanceByGender = (arr, gender) => {
        return arr.filter(el => el.gender === gender).reduce((acc, { balance }) => {
            return acc + balance;
        }, 0);
    };

    // console.log(getTotalBalanceByGender(users, 'female'));
}