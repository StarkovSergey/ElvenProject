const swiperVideo = new Swiper('.video__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  watchOverflow: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
export { swiperVideo };
