var menu = (function () {

  //catche DOM

  var $menu = $('.menu');
  var $nav = $menu.find('.menu__nav');
  var $item = $menu.find('.menu__navItem');
  var $bars = $menu.find('.menu__bars');
  var $sub = $menu.find('.menu__navSubItem');

  //bind events
  var showSubHover = function () {
    $item.hover(function () {
      $(this).find($sub).stop().slideToggle(600);
    });
  };

  var active = function () {
    $item.on('click', function () {
      $div = $(this);
      $div.addClass("-active");
      $item.not($div).removeClass("-active");
    })
  };

  var menuDisplay = function () {
    $( window ).resize(function () {
      menuResize();
    });
  };

  var menuResize = function () {
    if ($( window ).width() >= 800) {
      $nav.show();
      $bars.hide();
    }
    else {
      $nav.hide();
      $bars.show();
    }
  };

  var menuClick = function () {

    $bars.on('click', function () {
      menuToggle();
    });

  };

  var menuToggle = function () {
    $nav.stop().slideToggle(300);
  };

  var init = function () {
    menuDisplay();
    menuClick();
    active();
    showSubHover();

  };

  $(document).ready(function () {
    init();
  });

  return {
    init : init
  }


})();