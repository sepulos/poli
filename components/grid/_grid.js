// var grid = new (function () {
//   var $window = $(window);
//   var $body = $('body');
//
//   $(document).ready(function () {
//     init();
//   });
//
//   function init () {
//     bindEvents();
//   }
//
//   function bindEvents(){
//     $(window).smartresize(function () {
//       events.emit('window smartresize', getDimensions());
//     });
//     $(window).resize(function () {
//       events.emit('window resize', getDimensions());
//     });
//   }
//
//   function getDimensions() {
//     var windowWidth = $window.width();
//     var windowHeight = $window.height();
//     var bodyWidth = $body.width();
//     var bodyHeight = $body.height();
//     dimensions = {
//       windowWidth: windowWidth,
//       windowHeight: windowHeight,
//       bodyWidth: bodyWidth,
//       bodyHeight: bodyHeight
//     };
//
//     return dimensions;
//   }
//
//   function getWindowWidth() {
//     var windowWidth = $window.width();
//
//     return windowWidth;
//   }
//
//   function getWindowHeight() {
//     var windowHeight = $window.height();
//
//     return windowHeight;
//   }
//   function getBodyWidth() {
//     var bodyWidth = $body.width();
//
//     return bodyWidth;
//   }
//
//   function getBodyHeight() {
//     var bodyHeight = $body.height();
//
//     return bodyHeight;
//   }
//
//   return {
//     windowWidth: getWindowWidth(),
//     windowHeight: getWindowHeight(),
//     bodyWidth: getBodyWidth(),
//     bodyHeight: getBodyHeight()
//   }
// })();