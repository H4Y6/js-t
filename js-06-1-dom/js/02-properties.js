const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Element properties (hero)
 * - Picture
 * - Text & textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
console.log('imageEl', imageEl);
// imageEl.src =
//   'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// imageEl.alt = 'A new cat';

const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl', heroTitleEl);
// heroTitleEl.textContent = 'Good boy!';

magicBtn.addEventListener('click', () => {
  // const imageEl = document.querySelector('.hero__image');
  console.log('imageEl', imageEl);
  imageEl.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  imageEl.alt = 'A new cat';

  // const heroTitleEl = document.querySelector('.hero__title');
  console.log('heroTitleEl', heroTitleEl);
  heroTitleEl.textContent = 'Good boy!';
});

/*
 * Attributes
 * - get(Attribute name)
 * - set(Attribute name)
 * - remove(Attribute name)
 * - has(Attribute name)
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
console.log(imageEl.hasAttribute('src'));

/* Data-Attributes  */
const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[2].dataset.action);
