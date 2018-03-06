'use strict';

var app = app || {};

// this is a temporary location for the hamburger menu, will move later.
$(document).ready(function() {
  $('.cross').hide();
  $('.menu').hide();
  $('.hamburger').click(function() {
    $('.menu').slideToggle('fast', function() {
      $('.hamburger').hide();
      $('.cross').show();
    });
  });
  $('.cross').click(function() {
    $('.menu').slideToggle('fast', function() {
      $('.cross').hide();
      $('.hamburger').show();
    });
  });
});
// temporary location for hamburger menu

(function (module){

  const restaurantsView = {};

  function reset() {
    $('.container').hide();
    $('.menu').slideUp(350);
  }

  restaurantsView.initDetailView = function (ctx) {
    reset();
    $('.detail-view').show();
  }

  // restaurantsView.initUpdateReview = function (ctx) {
  //   reset();
  // }

  module.restaurantsView = restaurantsView;

})(app);