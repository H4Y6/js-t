const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(class)
 * - remove(class)
 * - toggle(class)
 * - replace(old class, new class)
 * - contains(class)
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');
