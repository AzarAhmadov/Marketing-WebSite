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

menu.addEventListener('click', function () {
  mobil_menu.classList.add('active')
  for (let i = 0; i < list_anim.length; i++) {
    list_anim[i].classList.add('active')
  }
})

close_btn.addEventListener('click', function () {
  mobil_menu.classList.remove('active')
  for (let i = 0; i < list_anim.length; i++) {
    list_anim[i].classList.remove('active')
  }
})


var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300) {
    mybutton.style.visibility = "visible";
    mybutton.style.opacity = '1'

  } else {
    mybutton.style.visibility = "hidden";
    mybutton.style.opacity = '0'
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

ScrollReveal({
  reset: true
});

ScrollReveal().reveal(".b-left,.w-right", {
  duration: 2000,
  origin: "left",
  distance: "400px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".global-top ,.why-top", {
  duration: 2000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal("#Banner", {
  duration: 3000,
  move: 0,
  rotate: {
    x: 20,
    z: -10
  }
});


ScrollReveal().reveal(".bg-images, .b-right,.w-left", {
  duration: 4000,
  scale: 0.85
});

ScrollReveal().reveal(".s-item", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});

ScrollReveal().reveal("#portfolio", {
  duration: 5000,
  move: 0
});


ScrollReveal().reveal(".footer-item", {
  duration: 3000,
  origin: "left",
  distance: "200px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

const scrool_top = document.querySelector(".scrool-top");
let body = document.querySelector('body')
const scrool_value_top = body.getBoundingClientRect().top;

window.addEventListener('scrool',scrool_value_top  )
console.log(scrool_value_top)
