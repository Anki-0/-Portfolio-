'use strict';

var navArrows = [
  '\n    <span>\n        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none" viewBox="0 0 8 14">\n            <path fill-rule="evenodd" d="M7.707.293a1 1 0 0 1 0 1.414L2.414 7l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0z" fill="#9f9fa9"/>\n        </svg>\n    </span>',
  '<span>\n        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none" viewBox="0 0 8 14">\n            <path fill-rule="evenodd" d="M.293 13.707a1 1 0 0 1 0-1.414L5.586 7 .293 1.707A1 1 0 1 1 1.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0z" fill="#9f9fa9"/>\n        </svg>\n    </span>\n',
];

//OWL CAROUSEL
$(document).ready(function () {
  var slider = $('.js-slider-details');
  slider.owlCarousel({
    items: 3,
    nav: true,
    navElement: 'button',
    navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    responsive: {
      320: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
  $('.js-slider-review').owlCarousel({
    items: 1,
    nav: true,
    navElement: 'button',
    navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    //autoHeight: true,
    responsive: {
      320: {
        nav: false,
        dots: true,
      },
      768: {
        nav: true,
        dots: false,
      },
    },
  });
  $('.js-slider-cases').owlCarousel({
    items: 2,
    nav: true,
    navElement: 'button',
    // navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    responsive: {
      320: {
        nav: false,
        dots: true,
        items: 1,
      },
      768: {
        nav: true,
        dots: false,
        items: 2,
      },
    },
  });
});

(function () {
  var obj = $('.js-owl');

  var fullWidth = window.innerWidth;

  if (navigator.platform.indexOf('Win') > -1) {
    var mobilePoint = 750; // windows
  } else {
    var mobilePoint = 751; // mac os
  }

  if (fullWidth <= mobilePoint) {
    if (!obj.hasClass('owl-carousel')) {
      obj.addClass('owl-carousel');
      obj.owlCarousel({
        items: itemsMobileAlbum,
        nav: false,
        dots: true,
        loop: optionLoop,
        smartSpeed: 600,
        autoHeight: optionAutoHeight,
        responsive: {
          0: {
            items: itemsMobilePortrait,
          },
          480: {
            items: itemsMobileAlbum,
          },
        },
      });
    }
  } else {
    obj.removeClass('owl-carousel');
    obj.removeClass('js-slider-cases');
    obj.trigger('destroy.owl.carousel');
  }
})(); // mobile portrait

// AOS.init();
// AOS.refresh();
(function () {
  var parallax = $('.js-parallax');

  if (parallax.length) {
    parallax.each(function () {
      var _this = $(this),
        scale = _this.data('scale'),
        orientation = _this.data('orientation');

      new simpleParallax(_this[0], {
        scale: scale,
        orientation: orientation,
        delay: 0.5,
        overflow: true,
        transition: 'cubic-bezier(0,0,0,1)',
      });
    });
  }
})(); // scroll to section
