var gallery = (function () {

  //catche DOM
  var $gallery = $('.galleryBig');
  var $galleryBox = $gallery.find('.galleryBig__box');
  var $item = $gallery.find('.galleryBig__boxItem');

  //bind events

  var lightBox = function () {
    $galleryBox.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };

  var slickGallery = function () {
    $galleryBox.waitForImages(function () {
      $galleryBox.slick({
        infinite: true,
        selector: $item,
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '.galleryBig .galleryBig__prev ',
        nextArrow: '.galleryBig .galleryBig__next ',
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  };

  var init = function () {
    lightBox();
    slickGallery();

  };

  $(document).ready(function () {
    init();
  });

})();
