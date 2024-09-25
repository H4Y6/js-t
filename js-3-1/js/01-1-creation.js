/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

const playlist = {
  name: 'My playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  /**
    getName: function () {
     return this.name;
   }    
   old version 
   */
  getName() { return this.name; },

  changeName(newName) {
    this.name = newName;
  },

  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },

  updateRating(newRating) {
    this.rating = newRating;
  },

  getTrackCount() {
    return this.trackks.length;
  },

};
// playlist.rating = 10;

playlist.changeName('My new playlist');
playlist.addTrack('My new track');
playlist.updateRating(6);
// console.log(playlist.getName());
// console.log(playlist.tracks);
// console.log('rating->', playlist.rating);
// console.log('tracks->', playlist.tracks.length);

const propertyName = 'tracks';

// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

/*
 * Короткая запись свойств
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
};

// console.log(signupData);

/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

// console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);

{
  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  };

  const bookTitle = book["title"];
  // console.log(bookTitle);

  const propKey = "author";
  const bookAuthor = book[propKey];
  // const bookAuthor = book['author'];
  // const bookAuthor = book.author;
  // console.log(bookAuthor);

  const bookGenres = book["genres"];
  bookGenres.push('drama');

  const genreItems = ['albert', 'lock'];
  bookGenres.push(...genreItems);
  book.genres.push('science');

  // console.log(bookGenres);

  book.pageCount = 836;
  book.originalLanguage = "en";

  // console.log(book.pageCount);
  // console.log(book.originalLanguage);

  book.isPublic = false;

  // console.log(book);
}

{
  const propName = "name";
  const user = {
    age: 25,
  };

  user[propName] = "Генрі Сибола";
  // console.log(user.name);
}

{
  const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
      // console.log(this);
    },
  };

  // Перед крапкою знаходиться об'єкт bookShelf,
  // тому, викликаючи метод, this буде зберігати посилання на нього.
  bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}
}

{
  const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
      return this.books;
    },
    addBook(bookName) {
      this.books.push(bookName);
    },
    removeBook(bookName) {
      const bookIndex = this.books.indexOf(bookName);
      this.books.splice(bookIndex, 1);
    },
  };

  console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
  bookShelf.addBook("The Mist");
  bookShelf.addBook("Dream Guardian");
  console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
  bookShelf.removeBook("The Mist");
  console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']
}
{
  const user = {};
  user.name = 'Bob';
  user.age = 22;

  console.log('age:', user['age']);

  const propertyName = 'age';
  console.log(propertyName, ':', user[propertyName]);
  // console.log(user);

  const fn = function (obj) {
    return (obj);
  };
  console.log(fn({ name: 'Rob', age: 25 }));

  const adminName = 'kiwi';
  const adminEmail = 'kiwi#olpas.pl';
  const admin = {
    adminName,
    adminEmail
  };
  console.log(admin);

  const inputName = 'color';
  const inputValue = 'yellow';

  const input = {
    [inputName]: inputValue,
  };


  console.log(input);
}