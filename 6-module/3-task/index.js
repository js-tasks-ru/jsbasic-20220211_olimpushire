import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  #slides = [];
  elem = null; 
  constructor(slides) {
    this.#slides = slides;
    this.elem = createElement(this.#template());
    this.#initCarousel();
    this.#userEvent();
  }

  #initCarousel() {
    let currentSlide = 0;
    let carouselInnerWidth = 0;
    let buttonLeft = this.elem.querySelector('.carousel__arrow_left');
    let buttonRight = this.elem.querySelector('.carousel__arrow_right');
    let carouselInner = this.elem.querySelector('.carousel__inner');
    let maxSlideNumber = this.elem.querySelectorAll('.carousel__slide').length;

    //  start hidding Arrows
    const hideArrows = () => {
      currentSlide == 0 ? buttonLeft.style.display = 'none' : buttonLeft.style.display = '';
      currentSlide == maxSlideNumber - 1 ? buttonRight.style.display = 'none' : buttonRight.style.display = '';
    }
    //  end hidding Arrows
    
    hideArrows();

  //Right Arrow
    buttonRight.addEventListener('click', () => {
      console.log(`offset size ${carouselInner.offsetWidth}`);
      let currentWidth = carouselInner.offsetWidth;
      currentSlide += 1;
      carouselInner.style.transform = `translateX(-${currentWidth * currentSlide}px)`;
      hideArrows();
      console.log(`click right ${carouselInner.style.transform}`);
    });
  //end Right Arrow
      
//Left Arrow
      buttonLeft.addEventListener('click', () => {
      let currentWidth = carouselInner.offsetWidth;
        currentSlide -= 1;
      carouselInner.style.transform = `translateX(-${currentWidth * currentSlide}px)`;
      console.log(`click left ${carouselInner.style.transform}`);
      hideArrows();

      }); 
    //end Left Arrow
  }
  
  
  #userEvent() {
    let btn = this.elem.querySelectorAll('.carousel__button');
    btn.forEach(el => el.addEventListener('click', (event) => {
      let slideId = el.closest('[data-id]').dataset.id;

      const customEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
        detail: slideId, // Уникальный идентификатора товара из объекта слайда
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
      });

      this.elem.dispatchEvent(customEvent);

    }))
  } 
  
    
  
//TEMPLATE
 #template() {
   return `
           <!--Корневой элемент карусели-->
           <div class="carousel">
             <!--Кнопки переключения-->
             <div class="carousel__arrow carousel__arrow_right">
               <img src="/assets/images/icons/angle-icon.svg" alt="icon">
             </div>
            <div class="carousel__arrow carousel__arrow_left" style="display: none;" >
              <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
            </div>

            <div class="carousel__inner">
    	${
    			this
      		.#slides
          .map(item => `
            <div class="carousel__slide" data-id="${item.id}">
              <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
              <div class="carousel__caption">
                <span class="carousel__price">€${item.price.toFixed(2)}</span>
                <div class="carousel__title">${item.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>`)
    				.join('\n')
  			}
            </div>
          </div>
	`;
  }

// END TEMPLATE


//class closure

}
// Class ended