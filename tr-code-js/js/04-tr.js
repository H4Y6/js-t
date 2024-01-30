const callback = (el, idx, arr) => { };

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
        genres: ["fiction", "science"],
    },
    {
        title: "Redder Than Blood",
        author: "Tanith Lee",
        rating: 7.94,
        genres: ["mysticism", "adventure"],
    },
    {
        title: "The Dreams in the Witch House",
        author: "Howard Lovecraft",
        rating: 8.67,
        genres: ["mysticism", "fiction"],
    },
];

{/**                     map()                             */

    const getAuthorNames = ((({ author }) => author));        /**   cb    */
    const logger = (book, idx, arr) => (`Title:${book.title} ; index:${idx} ; length:${arr.length}`);        /**   cb    */

    const authors = books.map(getAuthorNames);            /** <-<- declarative fn */
    // const authors = books.map(({ author }) => author);

    /**                 Imperative fn: mapArray()       */
    const mapArray = (array, cb) => {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const newEl = cb(element, i, array);
            result.push(newEl);
        }
        return result;
    };

    // console.log(mapArray(books, getAuthorNames));
    // console.log(mapArray(books, logger));
    // console.log(authors);
}

{/**                     flatMap()                             */

    const getGenres = ({ genres }) => genres;

    const genres = books.flatMap(getGenres);

    const flatMapArray = (array, cb) => {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            const newEl = cb(array[i], i, array);

            // let i = 0;
            // for (let el of array) {
            //     const newEl = cb(el, i, array);
            //     i++;

            if (Array.isArray(newEl)) {
                // result = [...result, ...newEl];

                // for (let i = 0; i < newEl.length; i++) {

                for (const el of newEl) {
                    result.push(el);
                }
            } else { result.push(newEl); }
        };
        return result;
    };
    // console.log(flatMapArray(books, getGenres));
    // console.log(genres);
}

{/**                     filter()                             */

    const filterRating = ({ rating }) => rating > 8.5;
    const highRatingBooks = books.filter(filterRating);

    const filterArray = (array, cb) => {
        const result = [];
        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) { result.push(array[i]); }
        }
        return result;
    };

    // console.log(highRatingBooks);
    // console.log(filterArray(books, filterRating));
}

{/**                     find()                             */

    const findBookByAuthor = ({ author }) => author === "Tanith Lee";
    const searchedBook = books.find(findBookByAuthor);

    const findInArray = (array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) return array[i];
            // if (cb(array[i], i, array)) return i;         /**  to find index */
        }
    };

    // console.log(findInArray(books, findBookByAuthor));
    // console.log(searchedBook);
}

{ /**                     every()                             */

    const compareBookRatings = ({ rating }) => rating > 8.2;
    const everyInArray = books.every(compareBookRatings);

    const checkEveryInArray = (array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (!cb(array[i], i, array)) {
                return false;
            }
        }
        return true;
    };

    // console.log(checkEveryInArray(books, compareBookRatings));
    // console.log(everyInArray);

    /**                     some()                             */

    const someInArray = books.some(compareBookRatings);

    const checkSomeInArray = (array, cb) => {
        for (let i = 0; i < array.length; i++) {
            if (cb(array[i], i, array)) {
                return true;
            };
        }
        return false;
    };

    // console.log(someInArray);
    // console.log(checkSomeInArray(books, compareBookRatings));
}

{/**                     reduce()                             */

    const defineAverageBookRatingPart = ((prevValue, { rating }) => {
        return prevValue + rating / books.length;
    });
    const averageBookRating = books.reduce(defineAverageBookRatingPart, 0);

    const reduceArray = (array, cb, initialValue) => {
        let total = initialValue;
        // let total = initialValue ?? array[0];
        // const i = initialValue === undefined ? 1 : 0;
        for (let i = 0; i < array.length; i++) {
            total = cb(total, array[i], i, array);
        }
        return total;
    };

    console.log(averageBookRating);
    console.log(reduceArray(books, defineAverageBookRatingPart, 0));
}