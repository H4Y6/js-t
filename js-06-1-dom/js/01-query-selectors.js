const magicBtn = document.querySelector('.js-magic-btn');

/* document.querySelector(selector) & document.querySelectorAll(selector) */

const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);

const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);
/* Document.querySelector* & Element.querySelector*  */

magicBtn.addEventListener('click', () => {
  console.log('navEl', navEl);
  console.log('navLinksEl', navLinksEl);
});