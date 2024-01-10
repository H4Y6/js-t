// Петро біжить швидко, тому що він (this) намагається встигнути на потяг.
const petro = {
    username: "Petro",
    showName() {
        console.log(this.username);
    },
};
petro.showName();

const bookShelf = {
    authors: ["Бернард Корнуелл", "Роберт Шеклі"],
    getAuthors() {
        return this.authors;
    },
    addAuthor(authorName) {
        this.authors.push(authorName);
    },
};
console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
bookShelf.addAuthor("Лі Таніт");
console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]


/**  У глобальній області видимості, якщо скрипт виконується не в суворому режимі, this посилається на об'єкт window.
 В суворому режимі значення this, в глобальній області видимості, буде undefined.  */
function foo() {
    console.log(this);
}
foo(); // window без "use strict" і undefined з "use strict".


function showThis() {
    console.log("this in showThis: ", this);
}

// Викликаємо у глобальному контексті
showThis(); // this in showThis: Window

const user = {
    username: "Mango",
};

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()
user.showContext = showThis;

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.
user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

