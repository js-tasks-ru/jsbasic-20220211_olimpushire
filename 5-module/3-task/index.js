function initCarousel() {
  // ваш код...
  const buttonLeft = document.querySelector('.carousel__arrow_left');
  const buttonRight = document.querySelector('.carousel__arrow_right');
  const carouselInner = document.querySelector('.carousel__inner');
  const maxSlideNumber = carouselInner.querySelectorAll('.carousel__slide').length;

  let currentSlide = 1;
  let currentWidth = 0;
  let carouselInnerWidth;
  
  checkCurrentSlide(currentSlide, maxSlideNumber, buttonLeft, buttonRight); // to disable Arrows if we are on the edge slide

  buttonLeft.onclick = function () {
    currentSlide -= 1;
    currentWidth -= carouselInner.offsetWidth;
    carouselInnerWidth = `${currentWidth}px`;
    checkCurrentSlide(currentSlide, maxSlideNumber, buttonLeft, buttonRight);
    carouselInner.style.transform = `translateX(-${carouselInnerWidth})`;
  };

  buttonRight.onclick = function () {
    console.log("right");
    currentSlide += 1;
    currentWidth += carouselInner.offsetWidth;
    carouselInnerWidth = `${currentWidth}px`;
    checkCurrentSlide(currentSlide, maxSlideNumber, buttonLeft, buttonRight);
    carouselInner.style.transform = `translateX(-${carouselInnerWidth})`;
  };

}

//Функция проверки крайнего слайда
function checkCurrentSlide(number, max, buttonLeft, buttonRight) {
  // hidding Arrows
  if (number == 1) {
    buttonLeft.style.display = 'none';
  } else {
    buttonLeft.style.display = '';
  }

    if (number == max) {
    buttonRight.style.display = 'none';
  } else {
    buttonRight.style.display = '';
  }
}
