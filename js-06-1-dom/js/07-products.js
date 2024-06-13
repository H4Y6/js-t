import products from './data/proucts.js';

/*
 * Create a product
 * - Product class may have: product--on-sale product--not-available
 */

{
  /*
<article class="product">
  <h2 class="product__name">Product name</h2>
  <p class="product__descr">Description</p>
  <p product__pridct>Price: 1111 credits</p>
</article>
*/
}

/*
 * Function to create product card
 */

const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

const elements = products.map(makeProductCard);

console.log(elements);
productsContainerEl.append(...elements);
