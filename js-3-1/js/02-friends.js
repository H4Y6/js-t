/*
 * Работа с коллекцией (массивом объектов)
 */
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

console.log({ objectKeyLength: Object.keys(friends).length });

// console.table(friends);

/*
 * Ищем друга по имени
 */

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) {
      return 'НАШЛИ!!!';
    }
  }

  return 'НЕ НАШЛИ :(';
};

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

const getNames = function (friends) {
  const names = [];

  for (const friend of friends) {
    names.push(friend.name)
  }
  console.log(names);
  // return names;
};

// getNames(friends);

const getFriendsOnLineStatus = function (friends) {
  const friendsOnLineStatus = {
    friendsOnLine: [],
    friendsOffLine: []
  };

  for (const friend of friends) {
    if (friend.online) {
      friendsOnLineStatus.friendsOnLine.push(friend);
      continue;
    }
    friendsOnLineStatus.friendsOffLine.push(friend);

    // friend.online ? friendsOnLineStatus.friendsOnLine.push(friend) : friendsOnLineStatus.friendsOffLine.push(friend);
    // friendsOnLineStatus[friend.online ? 'friendsOnLine' : 'friendsOffLine'].push(friend);
  }
  console.log(friendsOnLineStatus);
  // return friendsOnLineStatus;
}

// console.log(getFriendsOnLineStatus(friends));
getFriendsOnLineStatus(friends)


// const getAllNames = function (allFriends) {
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

// console.log(getFriendsByStatus(friends));

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };

  for (const key in book) {
    // console.log(key);
    // console.log(book[key]);
  }
}

{
  const animal = {
    legs: 4,
  };
  const dog = Object.create(animal);
  dog.name = "Манго";

  // console.log(dog); // {name: 'Манго'}
  // console.log(dog.name); // 'Манго'
  // console.log(dog.legs); // 4

  // ❌ Повертає true для всіх властивостей
  // console.log("name" in dog); // true
  // console.log("legs" in dog); // true

  // ✅ Повертає true тільки для власних властивостей
  // console.log(dog.hasOwnProperty("name")); // true
  // console.log(dog.hasOwnProperty("legs")); // false
}

{
  const goods = {
    apples: 6,
    grapes: 3,
    bread: 4,
    cheese: 7,
  };

  const values = Object.values(goods); // [6, 3, 4, 7]

  let total = 0;

  for (const value of values) {
    total += value;
  }

  // console.log(total); // 20
}

{
  const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "На березі спокійних вод",
      author: "Роберт Шеклі",
      rating: 8.51,
    },
    {
      title: "Сон смішної людини",
      author: "Федір Достоєвський",
      rating: 7.75,
    },
  ];

  const bookNames = [];

  for (const book of books) {
    // Об'єкт книги
    // console.log(book);
    // Назва
    // console.log(book.title);
    // Автор
    // console.log(book.author);
    // Рейтинг
    // console.log(book.rating);

    bookNames.push(book.title);
  }

  console.log(bookNames);

}