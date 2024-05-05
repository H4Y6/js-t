let value = 15;

{
  const logins = ['mango', 'poly', 'ajajjaja'];
  const loginToFind = 'poly';
  let message = '';

  for (let i = 0; i < logins.length; i += 1) {
    const login = logins[i];

    if (login !== loginToFind) {
      message = `user ${loginToFind} not found`;
    } else {
      message = `user ${loginToFind} found`;
      break;
    }
  }

  // console.log(message);
}

{
  // const userInput = prompt('Enter login');

  const loginUser = (login) => {
    // делает запрос на сервер для логинизации пользовтеля
  };

  const validateLogin = (login) => {
    if (!login) {
      console.error('Login is not provided');
      return;
    }

    loginUser(login);
  };
}

// Использование колекций для разных типов ролей пользователей
{
  // const getUserRoleSettings = (role) => {
  //   const roles = {
  //     admin: {},
  //     superAdmin: {},
  //     quest: {},
  //     maintainer: {},
  //   };

  //   return roles[role];
  // };

  const getUserRoleSettings = (role) => {
    if (role === 'superAdmin') {
      return {
        role: 'superAdmin',
      };
    }

    if (role === 'admin') {
      return {
        role: 'admin',
      };
    }

    return {
      role: 'quest',
    };
  };

  const user = {
    name: 'Tom',
    email: 'gmail@gmail.com',
    role: 'quest',
  };

  const userRoleSettings = getUserRoleSettings(user.role);
}

{
  const values = [1, 2, 3, 4];
  const oddValues = [];
  const evenValues = [];

  for (const value of values) {
    if (value % 2) { oddValues.push(value); } else { evenValues.push(value); }
  }
  // console.log(oddValues, evenValues);
}

/** Превратить массив книг в объект, ключи которого являются id каждой книги  */
{
  const books = [
    {
      id: '324fdsfdsf3',
      title: 'Tom',
    },
    {
      id: 'dsfdsfdsfdsf',
      title: 'Tom',
    },
    {
      id: '234njk34bjk',
      title: 'Tom',
    },
    {
      id: 'dsfdsfdsf',
      title: 'Tom',
    },
    {
      id: '8f7ds7fds7f',
      title: 'Tom',
    },
  ];

  const transformToObject = (books) => {
    return books.reduce((acc, item) => {
      // acc = {}
      // acc = {
      //   324fdsfdsf3: {
      //     id: 324fdsfdsf3,
      //     title: 'Tom',
      //   },
      // };
      const { id } = item;
      acc[id] = item;

      return acc;
    }, {});
  };

  const booksCollection = transformToObject(books);
  const searchedBook = booksCollection['324fdsfdsf3'];

  // console.log(booksCollection);
  // console.log(searchedBook);
}

// добавить в массив свойство id(пусть айди равно имени) и отфильтровать по цене выше 200
{
  const products = [
    {
      name: 'kiwi',
      price: 133,
    },
    {
      name: 'banana',
      price: 122,
    },
    {
      name: 'potato',
      price: 111,
    },
  ];

  const productsWithId = products
    .map((item) => {
      const { name } = item;

      return {
        id: name,
        ...item,
      };
    })
    .filter((item) => item.price > 200);

  // {
  //   name: 'kiwi',
  //   price: 123123,
  // }

  const foo = products.reduce((acc, item) => {
    // acc = [{ id, name, price}]
    const { name, price } = item;

    if (price <= 200) {
      return acc;
    }

    acc.push({
      id: name,
      ...item,
    });

    return acc;
  }, []);

  // console.log(productsWithId);
  // console.log(foo);
}

{
  class User {
    static name = 'Dan';

    #password;
    #login;

    constructor(login, password) {
      this.#login = login;
      this.#password = password;
    }
  }

  const user = new User('login', 'qwerty');
  // console.log(user.#password);
  // console.log(User.name);
  // console.log(user.name);
}

{
  class NewMath {
    constructor() {
      throw new Error('Math is not a constructor');
    }

    static max(...args) {
      return args.reduce((acc, item) => {
        if (acc < item) {
          return item;
        }

        return acc;
      });
    }

    static min() { }

    static pow() { }

    static random() { }
  }

  // console.log(NewMath.max(2, 5, 10, 2));

  // const newMath = new NewMath();
}

// Замыкания
{
  // const square = (x, y) => {
  //   return x * y;
  // };

  const square = (x) => {
    const b = 20;

    return (y) => {
      return x * y + b;
    };
  };

  const result = square(10)(20);
  const resultWithWidth = square(10);
  // console.log(result);
  // console.log(resultWithWidth(20));
  // console.log(resultWithWidth(30));

  // const volume = (a) => {
  //   const reserveTankVolume = 178;
  //   return (b) => {
  //     return (c) => {
  //       return a * b * c + reserveTankVolume;
  //     };
  //   };
  // };

  const volume = (a, reserveTankVolume = 250) => (b) => (c) => a * b * c + reserveTankVolume;

  const volumeResult = volume(11)(12)(15);
  // console.log(volumeResult);


  const add = (initialValue) => {
    let total = initialValue;
    const addRecursion = (value) => {
      if (!value) return total;
      total += value;
      return addRecursion;
    };
    return addRecursion;
  };
  const sum = add(22)(24)(31)(11)();
  // console.log(sum);
}

{
  const add = (initialValue) => {
    let result = initialValue;

    const addRecursive = (value) => {
      if (!value) return result;

      result += value;
      return addRecursive;
    };

    return addRecursive;
  };

  const res = add(11)(2)(12)();

  // console.log(res);
}

{
  let options = {
    size: {
      width: 100,
      height: 200,
    },
    items: ['Пончик', 'Пирожное'],
  };

  let {
    title = 'Меню',
    size: { width: w, height: h },
    items: [foo, potato],
  } = options;

  // const { items } = options;
  // const [foo, potato] = items;
  // console.log(foo, potato);
}

{
  const arr = [1, 2, 3, 4];

  const [firstElement, ...restArr] = arr;
}

// На входе функции приходит массив из целых чисел.
// Найдите в массиве все числа, которые окружены нулями.
// Если таких чисел нет - возвращается -1. Например на входе функции получаем [1, 2, 5, 0, 8, 0, 4, 3, 0, 2, 0, 8].
// Получаем на выходе результат - индекс чисел - 4, 9
const arr = [1, 2, 5, 0, 8, 0, 4, 3, 0, 2, 0, 8];

const findIndexesWrappedByZero = (arr) => {
  const result = [];

  for (let i = 1; i < arr.length - 1; i++) {
    const value = arr[i];
    const prevValue = arr[i - 1];
    const nextValue = arr[i + 1];

    if (value === 0) continue;

    if (prevValue === 0 && nextValue === 0) {
      result.push(i);
    }
  }

  return result;
};

// console.log(findIndexesWrappedByZero(arr));

const obj = {
  name: 'Pit',
  logName() {
    const bar = function () {
      console.log(this.name);
    };

    const foo = () => {
      // console.log(obj.name);
    };

    // bar.call(this);
    foo();
  },
};

obj.logName();
const method = obj.logName;
method();

{
  class newMath {
    static max(...args) {
      let maxValue = args[0];
      return args.reduce((maxValue, el) => maxValue = el > maxValue ? el : maxValue);

      // for (let i = 0; i < args.length; i++) {
      //   maxValue = maxValue < args[i] ? args[i] : maxValue;
      // }

      // return maxValue;
    };

    constructor() {
      throw new Error('Uncaught TypeError: Math is no t a constructor');
    }
  }
  // console.log(newMath.max(4, 5, 7, 8, 2, 1));


  const square = (a) => (b) => a * b;
  console.log(square(4)(5));

  const add = (initialValue) => {
    let result = initialValue;

    const addRecursion = (value) => {
      if (!value) return result;
      result += value;

      return addRecursion;
    };

    return addRecursion;
  };

  const result = add(23)(25)(20)();
  console.log(result);
}

{
  class MyMath {
    constructor() {
      throw new Error('Uncaught TypeError: Math is no t a constructor');
    }
    static max(...args) {
      return args.reduce((acc, e) => acc = e > acc ? e : acc);
    }
  }
  // console.log(MyMath.max(2, 4, 1, 7, 5));   /* 7 */
}

{  /* We have an array from integers. Find all integers with '0' on both sides. If we have no such integers return -1. Output is indices of those integers   */
  const arr = [3, 4, 5, 0, 7, 0, 2, 0, 4, 0, 11];
  // const arr = [3, 4, 5, 0, 22, 7, 0, 2, 4, 0, 11];

  const findIndices = (arr) => {
    const result = [];
    for (let i = 1; i < arr.length - 1; i++) {
      if (!arr[i - 1] && !arr[i + 1]) result.push(i);
    }

    return result.length ? result : -1;
  };
  console.log(findIndices(arr));
}