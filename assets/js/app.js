var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    140: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1224: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
})