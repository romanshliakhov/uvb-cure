import Swiper from 'swiper/bundle';

let diagnosisSlider = new Swiper(".diagnosis__slider", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".diagnosis__btn--next",
    prevEl: ".diagnosis__btn--prev",
  },
  pagination: {
    el: ".diagnosis__pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2.75,
      spaceBetween: 20,
    },
  },
});

let equipmentProducts = new Swiper(".equipment__products", {
  slidesPerView: 1.2,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".equipment-next",
    prevEl: ".equipment-prev",
  },
  pagination: {
    el: ".equipment__pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1.75,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.25,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});
