const swiperPhoto = new Swiper('.photo__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  clickable: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  breakpoints: {
    1350: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    320: {
      slidesPerView: 1,
    },

  },
  watchOverflow: true,
});

export { swiperPhoto };
