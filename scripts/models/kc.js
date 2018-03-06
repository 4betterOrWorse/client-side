'use strict';
var app = app || {};

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
  function KC(rawRestObj) {
    Object.keys(rawRestObj).forEach(key => this[key] = rawRestObj[key]);
  }

  KC.prototype.toHtml = function() {
    let template = Handlebars.compile($('#restaurant-list-template').text());
    return template(this);
  }

  KC.all = [];
  KC.filter = [];

  KC.loadAll = rows => {
    KC.all = JSON.parse(rows).sort((a, b) => b.inspection_score - a.inspection_score).map(rest => new KC(rest));
    KC.filter = KC.all.filter((a, b) => KC.all.findIndex(a2 => (a.inspection_score === a2.inspection_score) && (a.inspection_business_name === a2.inspection_business_name)) === b);
  }

  KC.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/rests`)
      .then(KC.loadAll)
      .then(callback)
      .catch(errorCallback);

  module.KC = KC;
})(app)