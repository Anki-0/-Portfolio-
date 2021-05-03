"use strict";

//OWL CAROUSEL
$(document).ready(function () {
  var slider = $('.js-slider-details');
  slider.owlCarousel({
    items: 3,
    nav: true,
    navElement: 'button',
    //autoHeight: true,
    //navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    responsive: {
      320: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      }
    }
  });
  $('.js-slider-review').owlCarousel({
    items: 1,
    nav: true,
    navElement: 'button',
    //navText: navArrows,
    dots: false,
    loop: true,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    //autoHeight: true,
    responsive: {
      320: {
        nav: false,
        dots: true
      },
      768: {
        nav: true,
        dots: false
      }
    }
  });
  /*$('.js-slider-cases').owlCarousel({
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
        items: 1
      },
      768: {
        nav: true,
        dots: false,
        items: 2
      }
    }
  });*/
});