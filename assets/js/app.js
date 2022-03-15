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

const menu = document.querySelector('.menu');
const mobil_menu = document.querySelector('.mobil-menu');
const close_btn = document.querySelector('.close-btn');
const list_anim = document.querySelectorAll('.list_anim')

menu.addEventListener('click', function(){
  mobil_menu.classList.add('active')
  for(let i = 0; i<list_anim.length; i++){
     list_anim[i].classList.add('active')
  }
})

close_btn.addEventListener('click', function(){
  mobil_menu.classList.remove('active')
  for(let i = 0; i<list_anim.length; i++){
    list_anim[i].classList.remove('active')
 }
})


var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity='1'
    
  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity='0'
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
