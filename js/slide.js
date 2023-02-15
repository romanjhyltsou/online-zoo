var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: false,
    },
    321: {
      slidesPerView: 1,
      allowTouchMove: false,
    },
    322: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2
    },
    901: {
      slidesPerView: 3,
      allowTouchMove: true,
    }
  }
});











