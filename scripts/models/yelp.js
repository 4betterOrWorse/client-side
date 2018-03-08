'use strict';
var app = app || {};

(function(module) {
  Yelp.all = [];
  Yelp.one = {};

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Yelp(rawYelpObj) {
    Object.keys(rawYelpObj).forEach(key => this[key] = rawYelpObj[key]);
  }

  Yelp.prototype.toHtml = function() {
    let template = Handlebars.compile($('#yelp-list-template').text());
    return template(this);
  }

  Yelp.prototype.toHtml1 = function() {
    let template = Handlebars.compile($('#yelp-detail-template').text());
    return template(this);
  }

  Yelp.loadAll = rows => {
    Yelp.all = JSON.parse(rows).businesses
      .map(rest => new Yelp(rest));
  };

  Yelp.loadOne = rows => {
    Yelp.one = new Yelp(JSON.parse(rows));
  }

  Yelp.fetchAll = callback => {
    module.yelpView.reset();
    $('.yelp-view').show();
    $('#yelpSubmit').off().on('submit', function(event) {
      event.preventDefault();
      let search = {term: event.target.yelpSearch.value};
      $.get(`${__API_URL__}/api/v1/yelp/${search.term}`)
        .then(Yelp.loadAll)
        .then(callback)
        .catch(errorCallback);
    })
  }

  Yelp.fetchOne = (ctx, callback) => {
    $.get(`${__API_URL__}/api/v1/yelp/businesses/${ctx.params.id}`)
      .then(Yelp.loadOne)
      .then(callback)
      .catch(errorCallback);
  }

  module.Yelp = Yelp;
})(app);