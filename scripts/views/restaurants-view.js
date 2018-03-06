'use strict';

var app = app || {};

(function (module) {

  const restaurantsView = {};

  function reset() {
    $('.container').hide();
    $('.nav-menu').slideUp(350);
  }

  restaurantsView.initView = function (ctx) {
    reset();
    $('.home-view').show();
    $('#home-detail').empty();
    module.KC.filter.map(rest => $('#home-detail').append(rest.toHtml()));
  }

  // restaurantsView.initUpdateReview = function (ctx) {
  //   reset();
  // }
  module.restaurantsView = restaurantsView;
})(app);