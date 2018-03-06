'use strict';

var app = app || {};

(function (module) {

  const restaurantsView = {};

  function reset() {s
    $('.container').hide();
    $('.nav-menu').slideUp(350);
  }

  restaurantsView.initDetailView = function (ctx) {
    reset();
    $('.detail-view').show();
  }

  // restaurantsView.initUpdateReview = function (ctx) {
  //   reset();
  }
})(app);