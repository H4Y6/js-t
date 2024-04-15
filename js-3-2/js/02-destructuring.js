/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

const {
  rating,
  tracks,
  name,
  trackCount: numberOfTracks = 0,
  author = 'user',
} = playlist;

// console.log(numberOfTracks);

/*
 * Глубокая деструктуризация
 */

{
  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const {
    avatar,
    name,
    name: copiedName,
    tag,
    location,
    stats: { followers, views, likes },
  } = profile;

  // console.log(copiedName, name, tag, location, avatar, followers, views, likes);
  // console.log(name === copiedName);
}

/*
 * Деструктуризация массивов
 */

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;
// const [red, , blue] = rgb;

// console.log(red, green, blue);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

// console.log(entries);

// for (const [name, rating] of entries) {
//   // level 1
//   // const [name, rating] = entry;

//   // level 2
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating);
// }

/*
 * Операция rest (сбор)
 */
{
  const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const { name, tag, location, ...restProps } = profile;

  // console.log(name, tag, location);
  // console.log(restProps);
  // console.log(profile);
}
/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

const showProfileInfo = function (userProfile) {
  const { name, tag, location, ...restProps } = userProfile;

  // console.log(name, tag, location, avatar, followers, views, likes);
  console.log(restProps);
};

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

// showProfileInfo(profile);

const makeProfileMarkup = function (userProfile) {
  const {
    avatar,
    name,
    tag,
    location = 'Planet Earth',
    stats: { followers, views, likes },
  } = userProfile;

  return `<div> <img src="${avatar}"  width="212" alt="user avatar"><p>${name}<span>@${tag}</span></p><p>Location: ${location}</p><ul><li> Followers: ${followers}</li><li> Views: $views}</li><li>Likes: ${likes}</li></ul></div>`;
};

const markup = makeProfileMarkup(profile);
document.body.insertAdjacentHTML('afterbegin', markup);
// console.log(markup);

{
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function calculateTotalPrice(productName) {

    let totalPrice = 0;

    for (const product of products) {
      if (product.name === productName) {
        totalPrice = product.price * product.quantity;
      }
    }
    console.log(totalPrice);
    return totalPrice;
  }

  calculateTotalPrice('Grip');
}

{
  const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };

  const { today: { low: lowToday, high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
    tomorrow: { low: lowTomorrow, high: highTomorrow,
      icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;
}

{
  const forecast = { today: { low: 10, high: 20 }, tomorrow: { low: 20, high: 30 } };

  function calculateMeanTemperature(forecast) {
    const {
      today: { low: todayLow, high: todayHigh, },
      tomorrow: { low: tomorrowLow, high: tomorrowHigh, },
    } = forecast;


    return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
  }
}