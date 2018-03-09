'use strict';

var app = app || {};

(function (module) {

  const aboutUs = {};

  aboutUs.initAboutUsView = function () {
    $('.container').hide();
    $('.menu').slideUp(250);
    $('.about-view').show();
  }

  module.aboutUs = aboutUs;
})(app);