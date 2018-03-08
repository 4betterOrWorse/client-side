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

  restaurantsView.initView = function (ctx) {
    reset();
    $('.home-view').show();
    // $('.create-review').show();
    $('#home-list').empty();
    module.KC.filter.map(rest => {
      $('#home-list').append(rest.toHtml())});
  }

  restaurantsView.initDetail = function (ctx) {
    reset();
    $('.detail-view').show();
    $('#restaurant-detail').empty();
    let counter = 0;
    module.KC.one.map(rest => {
      $('#restaurant-detail').append(rest.toHtml1());
      if(counter !== 0 && rest.inspection_date === module.KC.one[counter-1].inspection_date){
        $(`.${rest.violation_record_id}`).hide();
      }
      counter++;
    })
  };

  // restaurantsView.initUpdateReview = function (ctx) {
  //   reset();
  // }

  module.restaurantsView = restaurantsView;

})(app);