{
    const pizzaPalace = {
        pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
        order(pizzaName, onSuccesCb, onErrorCb) {
            if (this.pizzas.includes(pizzaName)) {
                return onSuccesCb(pizzaName);
            } else {
                return onErrorCb(pizzaName);
            }
        },
    };
    function makePizza(pizzaName) {
        console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`)
        return `Your order is accepted. Cooking pizza ${pizzaName}.`;
    }

    function onOrderError(pizzaName) {
        console.log(`Error! There is no pizza with a name ${pizzaName} in the assortment.`)
        return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
    }
    // pizzaPalace.order('Smoked', makePizza, onOrderError);
    // pizzaPalace.order('Four meats', makePizza, onOrderError);
    // pizzaPalace.order('Big Mike', makePizza, onOrderError);
    // pizzaPalace.order('Vienna', makePizza, onOrderError);
}

{
    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;
        orderedItems.forEach(function (item) { totalPrice += item });
        // orderedItems.forEach( item => totalPrice += item);

        return totalPrice;
    };

    function filterArray(numbers, value) {
        const filteredNumbers = [];

        // numbers.forEach(function (number) {
        //     if (number > value) {
        //         filteredNumbers.push(number);
        //     }
        numbers.forEach(number => {
            if (number < value) filteredNumbers.push(number);
            // if (number > value) filteredNumbers.push(number);
        });
        return filteredNumbers;
    }
    // console.log(filterArray([12, 24, 8, 41, 76], 20));

    function getCommonElements(firstArray, secondArray) {
        const commonElements = [];
        firstArray.forEach(function (el) {
            if (secondArray.includes(el)) commonElements.push(el);
        });
        // firstArray.forEach(el => {
        //     if (secondArray.includes(el)) commonElements.push(el);
        // });

        return commonElements;
    };
    // console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
}

{
    // function calculateTotalPrice(quantity, pricePerItem) {
    //     return quantity * pricePerItem;
    // };
    const calculateTotalPrice = (quantity, pricePerItem) => { return quantity * pricePerItem; };

    // const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

    // console.log(calculateTotalPrice(8, 60));
}

{


    function changeEven(numbers, value) {
        const changedEvenNumbers = [...numbers];
        for (let i = 0; i < numbers.length; i += 1) {
            if (changedEvenNumbers[i] % 2 === 0) {
                changedEvenNumbers[i] *= value;
            };
        }

        return changedEvenNumbers;
    }

    const numbers = [1, 2, 3, 4, 5];
    // console.log(changeEven(numbers, 3));
    // console.log(numbers);


    const dirtyMultiply = (array, value) => {
        for (let i = 0; i < array.length; i += 1) { array[i] *= value; };
    };

    dirtyMultiply(numbers, 2);
    // console.log(numbers);
}

{
    const planets = ["Earth", "Mars", "Venus", "Jupiter"];
    const planetsLengths = planets.map(p => (p.length));

    // console.log(planetsLengths);
}

{
    const books = [
        {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            genres: ["adventure", "history"],
        },
        {
            title: "Beside Still Waters",
            author: "Robert Sheckley",
            genres: ["fiction"],
        },
        {
            title: "Redder Than Blood",
            author: "Tanith Lee",
            genres: ["horror", "mysticism"],
        },
    ];


    const titles = books.map(b => b.title);
    const genres = books.flatMap(b => b.genres);

    const newGenres = ["science", "adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"];
    const uniqueGenres = newGenres.filter((el, idx, array) => array.indexOf(el) === idx);
    // console.log(titles, genres, uniqueGenres);

    const BOOK_TITLE = 'Redder Than Blood';
    const AUTHOR = 'Robert Sheckley';

    const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
    const bookByAuthor = books.find(({ author }) => author === AUTHOR);
    // console.log(bookWithTitle, bookByAuthor);
}


{
    const users =
        [
            { name: "Moore Hensley", email: "moorehensley@indexia.com", eyeColor: "blue", friends: ["Sharron Pace"], isActive: false, balance: 2811, skills: ["ipsum", "lorem"], gender: "male", age: 37, },
            { name: "Sharlene Bush", email: "sharlenebush@tubesys.com", eyeColor: "blue", friends: ["Briana Decker", "Sharron Pace"], isActive: true, balance: 3821, skills: ["tempor", "mollit", "commodo", "veniam", "laborum"], gender: "female", age: 34, },
            { name: "Ross Vazquez", email: "rossvazquez@xinware.com", eyeColor: "green", friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"], isActive: false, balance: 3793, skills: ["nulla", "anim", "proident", "ipsum", "elit"], gender: "male", age: 24, },
            { name: "Elma Head", email: "elmahead@omatom.com", eyeColor: "green", friends: ["Goldie Gentry", "Aisha Tran"], isActive: true, balance: 2278, skills: ["adipisicing", "irure", "velit"], gender: "female", age: 21, },
            { name: "Carey Barr", email: "careybarr@nurali.com", eyeColor: "blue", friends: ["Jordan Sampson", "Eddie Strong"], isActive: true, balance: 3951, skills: ["ex", "culpa", "nostrud"], gender: "male", age: 27, },
            { name: "Blackburn Dotson", email: "blackburndotson@furnigeer.com", eyeColor: "brown", friends: ["Jacklyn Lucas", "Linda Chapman"], isActive: false, balance: 1498, skills: ["non", "amet", "ipsum"], gender: "male", age: 38, },
            { name: "Sheree Anthony", email: "shereeanthony@kog.com", eyeColor: "brown", friends: ["Goldie Gentry", "Briana Decker"], isActive: true, balance: 2764, skills: ["lorem", "veniam", "culpa"], gender: "female", age: 39, },
        ];

    const getUserNames = users => {
        return users.map(user => user.name)
    };

    const getUserEmails = users => {
        return users.map(user => user.email);
    };

    const getUsersWithEyeColor = (users, color) => users.filter(({ eyeColor }) => eyeColor === color);
    // const getUsersWithEyeColor = (users, color) => {
    //     return users.filter(({ eyeColor }) => eyeColor === color);
    // };

    const getUsersWithAge = (users, minAge, maxAge) => users.filter(({ age }) => age >= minAge && age <= maxAge);
    const getUsersWithFriend = (users, friendName) => users.filter(({ friends }) => friends.includes(friendName));
    // const getFriends = (users) => {
    // return users.flatMap(({ friends }) => friends).filter((friend, idx, array) => array.indexOf(friend) === idx);
    // };
    const getActiveUsers = (users) => users.filter(({ isActive }) => isActive);
    const getInactiveUsers = (users) => users.filter(({ isActive }) => !isActive);
    const getUserWithEmail = (users, email) => users.find(user => user.email === email);

    const isEveryUserActive = users => users.every(({ isActive }) => isActive);
    const isAnyUserActive = users => users.some(({ isActive }) => isActive);

    const calculateTotalBalance = users => {
        return users.reduce((prev, { balance }) => { return prev + balance }, 0);
    };

    const getTotalFriendCount = users => {
        return users.reduce((prev, { friends }) => { return prev + friends.length }, 0);
    };

    // console.log(getUserNames(users), getUserEmails(users));
    // console.log(getUsersWithEyeColor(users, 'blue'));
    // console.log(getUsersWithAge(users, 33, 55));
    // console.log(getUsersWithFriend(users, "Briana Decker"));
    // console.log(getFriends(users));
    // console.log(getActiveUsers(users));
    // console.log(getInactiveUsers(users));
    // console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));
    // console.log(isEveryUserActive(users));
    // console.log(isAnyUserActive(users));
    // console.log(calculateTotalBalance(users));
    // console.log(getTotalFriendCount(users));
}

{
    const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

    const evenNumbers = numbers.filter(number => number % 2 === 0);
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    // console.log(evenNumbers, oddNumbers);
}

{
    const students = [
        { name: "Mango", courses: ["mathematics", "physics"] },
        { name: "Poly", courses: ["science", "mathematics"] },
        { name: "Kiwi", courses: ["physics", "biology"] },];
    const allCourses = students.flatMap(student => student.courses);
    const uniqueCourses = allCourses.filter((course, idx, courses) => courses.indexOf(course) === idx)
    // console.log(allCourses, uniqueCourses);
}

{
    const books = [
        {
            title: "The Last Kingdom",
            author: "Bernard Cornwell",
            rating: 8.38,
        },
        {
            title: "Beside Still Waters",
            author: "Robert Sheckley",
            rating: 8.51,
        },
        {
            title: "The Dream of a Ridiculous Man",
            author: "Fyodor Dostoevsky",
            rating: 7.75,
        },
        {
            title: "Redder Than Blood",
            author: "Tanith Lee",
            rating: 7.94,
        },
        {
            title: "Enemy of God",
            author: "Bernard Cornwell",
            rating: 8.67,
        },
    ];

    const MIN_RATING = 8;
    const AUTHOR = "Bernard Cornwell";

    // const topRatedBooks = books.filter(b => b.rating >= MIN_RATING);
    // const booksByAuthor = books.filter(b => b.author === AUTHOR);
    const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
    const booksByAuthor = books.filter(({ author }) => author === AUTHOR);
    // console.log({ topRatedBooks }, { booksByAuthor });
}

{
    const firstArray = [26, 94, 36, 18];
    const secondArray = [17, 61, 23];
    const thirdArray = [17, 26, 94, 61, 36, 23, 18];

    const eachElementInFirstIsEven = firstArray.every(el => el % 2 === 0);
    const eachElementInFirstIsOdd = firstArray.every(el => el % 2 !== 0);

    const eachElementInSecondIsEven = secondArray.every(el => el % 2 === 0);
    const eachElementInSecondIsOdd = secondArray.every(el => el % 2 !== 0);

    const eachElementInThirdIsEven = thirdArray.every(el => el % 2 === 0);
    const eachElementInThirdIsOdd = thirdArray.every(el => el % 2 !== 0);


    const anyElementInFirstIsEven = firstArray.some(el => el % 2 === 0);
    const anyElementInFirstIsOdd = firstArray.some(el => el % 2 !== 0);

    const anyElementInSecondIsEven = secondArray.some(el => el % 2 === 0);
    const anyElementInSecondIsOdd = secondArray.some(el => el % 2 !== 0);

    const anyElementInThirdIsEven = thirdArray.some(el => el % 2 === 0);
    const anyElementInThirdIsOdd = thirdArray.some(el => el % 2 !== 0);

    // console.log(eachElementInFirstIsEven, eachElementInFirstIsOdd);
    // console.log(eachElementInSecondIsEven, eachElementInSecondIsOdd);
    // console.log(eachElementInThirdIsEven, eachElementInThirdIsOdd);

    // console.log(anyElementInFirstIsEven, anyElementInFirstIsOdd);
    // console.log(anyElementInSecondIsEven, anyElementInSecondIsOdd);
    // console.log(anyElementInThirdIsEven, anyElementInThirdIsOdd);
}

{
    const players = {
        mango: 1270,
        poly: 468,
        ajax: 710,
        kiwi: 244
    };
    const playtimes = Object.values(players);

    const totalPlaytime = playtimes.reduce((previousValue, time) => { return previousValue + time }, 0);
    // const totalPlaytime = playtimes.reduce((previousValue, time) => (previousValue + time), 0);
    // const totalPlaytime = playtimes.reduce((previousValue, time) => previousValue + time);
    const averagePlaytime = totalPlaytime / playtimes.length;

    // console.log(averagePlaytime);

    /* ------------           Recursion       ---------   */

    const n = playtimes.length;

    function getTotalPlaytimeRecursive(n, totalPlaytime = 0) {
        // return n < 1 ? totalPlaytime : getTotalPlaytimeRecursive(n - 1, totalPlaytime += playtimes[n - 1]);
        if (n < 1) return totalPlaytime;

        return getTotalPlaytimeRecursive(n - 1, totalPlaytime += playtimes[n - 1]);
    };
    // console.log(getTotalPlaytimeRecursive(n));

    const averagePlaytimeRec = getTotalPlaytimeRecursive(n) / n;

    // console.log(averagePlaytimeRec);
}

{
    const players = [
        { name: "Mango", playtime: 1270, gamesPlayed: 4 },
        { name: "Poly", playtime: 469, gamesPlayed: 2 },
        { name: "Ajax", playtime: 690, gamesPlayed: 3 },
        { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
    ];

    const totalAveragePlaytimePerGame = players.reduce((prev, { playtime, gamesPlayed }) => (prev + playtime / gamesPlayed), 0);

    // const totalAveragePlaytimePerGame = players.reduce((previousValue, { playtime, gamesPlayed }) => {
    //     return previousValue + playtime / gamesPlayed
    // }, 0);

    // console.log(totalAveragePlaytimePerGame);

    /*    recursion   */

    const idx = players.length - 1;
    const getTotalAveragePlaytimePerGameRecursive = (ps, idx, total = 0) => {
        if (idx < 0) return total;
        return getTotalAveragePlaytimePerGameRecursive(ps, idx - 1, total += ps[idx].playtime / ps[idx].gamesPlayed)
    };
    // console.log(getTotalAveragePlaytimePerGameRecursive(players, idx, 0));
}

{
    const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
    const authors = [
        "Tanith Lee",
        "Bernard Cornwell",
        "Robert Sheckley",
        "Fyodor Dostoevsky",
    ];

    const ascendingReleaseDates = [...releaseDates].sort();
    const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
    const alphabeticalAuthors = [...authors].sort();

    console.log(ascendingReleaseDates, descendingReleaseDates, alphabeticalAuthors);
}