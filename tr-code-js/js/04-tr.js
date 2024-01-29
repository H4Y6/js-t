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
    console.log(flatMapArray(books, getGenres));
    console.log(genres);
}