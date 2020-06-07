const slider = document.querySelector(`.twitter__slider`);
const slides = document.querySelectorAll(`.twitter__blockquote`);
const indicators = document.querySelectorAll(`.twitter__indicator`);

let currentIndex = 0;
// let slideInterval = setInterval(autoMove, 6000);

function move(newIndex) {
  slides[newIndex].style.display = `block`;
  indicators[currentIndex].classList.remove(`active`);
  indicators[newIndex].classList.add(`active`);
  slides[currentIndex].style.display = `none`;
  currentIndex = newIndex;
}

function toMove(evt) {
  if (currentIndex === evt.target.dataset.slide) return;
  move(evt.target.dataset.slide);
}

// function autoMove() {
//   move((currentIndex + 1) % slides.length);
// }

indicators.forEach(indicator => indicator.addEventListener(`click`, toMove));
