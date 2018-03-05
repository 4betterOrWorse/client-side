'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000'; 

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function User(rawBookObj) {
    Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
  }

  Book.prototype.toHtml = function() {
    // let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  }

  User.all = [];

