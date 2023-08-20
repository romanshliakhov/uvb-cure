let diagnosisSlider = new Swiper(".diagnosis__slider", {
  // slidesPerView: 'auto',
  slidesPerView: 2.75,
  centeredSlides: true,
  loop: true,
  // loopedSlides: 5,
  // initialSlide: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".diagnosis__btn--next",
    prevEl: ".diagnosis__btn--prev",
  },
});

