'use strict';

var app = app || {};

(function (module) {

  const aboutUsView = {};

  aboutUsView.initAboutUsView = function () {
    $('.container').hide();
    $('.nav-menu').slideUp(350);
    $('.about-us').show();
  }
})