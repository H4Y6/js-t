/*
 * - Element creation
 * - Nodes adding: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Creating a title
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'It is a page title :)';
// console.log(titleEl);

// document.body.appendChild(titleEl);

/*
 * Create picture
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 320;
// console.log('imageEl', imageEl);

// document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl);

/*
 * Create & add new menu items
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);

const navEl = document.querySelector('.site-nav');

// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
