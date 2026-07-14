let index = 0;

function showSlide(n) {
const slides = document.querySelectorAll('.carousel-item');
if (n >= slides.length) index = 0;
if (n < 0) index = slides.length - 1;

slides.forEach((slide, i) => {
slide.style.transform = `translateX(${-index * 100}%)`;
slide.classList.toggle('active', i === index);
});
}

function nextSlide() { showSlide(++index); }
function prevSlide() { showSlide(--index); }

showSlide(index);