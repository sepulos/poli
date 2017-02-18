var bannerBig = (function () {

  //catche DOM
  var $banner = $('.banner');
  var $slider = $banner.find('.banner__slider');

  //bind events

  function slick() {
    $slider.waitForImages(function () {
      $slider.slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.banner .banner__prev ',
        nextArrow: '.banner .banner__next ',
        dotsClass: 'banner__dots',
        customPaging: function(slider, i) {
          // this example would render "tabs" with titles
          return '<button class="banner__tab"></button>';
        }
      });
    });

  }

  var init = function () {
    slick();

  };

  $(document).ready(function () {
    slick();
  });



})();