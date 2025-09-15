const images = document.querySelector('.carousel-images');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  const slides = document.querySelectorAll('.carousel-images img');
  if (i >= slides.length) index = 0;
  else if (i < 0) index = slides.length - 1;
  else index = i;

  images.style.transform = `translateX(${-index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

// Auto Slide
setInterval(() => showSlide(index + 1), 4000);
