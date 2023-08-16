for (const newsSlider of document.querySelectorAll('.info__swiper')) {
  if (newsSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(max-width:575px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(newsSlider, {
          slidesPerView: 1,
          direction: "vertical",
          observer: true,
          observeParents: true,
          loop: true,
          effect: "fade",
          slideToClickedSlide: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".info__swiper-pagination",
            clickable: true,
          },
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }
}

for (const newsSlider of document.querySelectorAll('.feedbacks__slider')) {
  if (newsSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:1025px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(newsSlider, {
          slidesPerView: 1.05,
          spaceBetween: 30,
          observer: true,
          observeParents: true,
          loop: true,

          breakpoints: {
            320: {
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 1.45,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.05,
            },
            // 1240: {
            //   slidesPerView: 2.02,
            //   spaceBetween: 30,
            // }
          }
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }
}


// let feedbacksSlider = new Swiper(".feedbacks__slider", {
//   slidesPerView: 3,
//   // loop: true,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
