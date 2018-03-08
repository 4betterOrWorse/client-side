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
    let template = Handlebars.compile($('#home-list-template').text());
    return template(this);
  }

  KC.prototype.toHtml1 = function() {
    let template = Handlebars.compile(
      $('#restaurant-detail-template').text());
    return template(this);
  }

  KC.all = [];
  KC.filter = [];
  KC.one = [];

  KC.loadAll = rows => {
    KC.all = JSON.parse(rows).sort((a, b) => b.inspection_score - a.inspection_score).map(rest => new KC(rest));
    KC.filter = KC.all.filter((a, b) => KC.all.findIndex(a2 => (a.inspection_score === a2.inspection_score) && (a.inspection_business_name === a2.inspection_business_name)) === b);
  }


  KC.loadOne = rows => {
    KC.one = JSON.parse(rows).sort((a, b) => (new Date(b.inspection_date)) - (new Date(a.inspection_date))).map(rest => new KC(rest));
  }

  KC.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/rests`)
      .then(KC.loadAll)
      .then(callback)
      .catch(errorCallback);

  KC.fetchOne = (ctx, callback) => {
    console.log(ctx);
    $.get(`${__API_URL__}/api/v1/rests/${ctx.params.id}`)
      .then(KC.loadOne)
      .then(callback)
      .catch(errorCallback);
  }
  module.KC = KC;
})(app)