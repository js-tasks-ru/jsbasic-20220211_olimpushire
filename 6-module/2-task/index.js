import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
    #items = [];
 
 
  constructor(product) {
    this.#items = product;
    this.elem = createElement(this.#template());

    let productAdd = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: this.#items.id, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    });

    let addButton = this.elem.querySelector('.card__button');
    const mainElem = this.elem.querySelector('.card');

    addButton.addEventListener("click", function (event) {
      document.body.dispatchEvent(productAdd);
    });

  }

//TEMPLATE
 #template() {
   return `
    <div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${this.#items.image}" class="card__image" alt="product">
        <span class="card__price">€${this.#items.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.#items.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
  </div>
	`;
  }
// END TEMPLATE

}