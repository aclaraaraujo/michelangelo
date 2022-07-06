// feather icons
feather.replace();

// swiper paintings
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },

    1920: {
      slidesPerView: 4,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
  },
});
