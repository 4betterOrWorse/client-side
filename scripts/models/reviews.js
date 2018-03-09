'use strict';
var app = app || {};

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
  function Review(data) {
    let time = new Date(data.published_on);
    this.review_id = data.review_id;
    this.username = data.username;
    this.review = data.review;
    this.published_on = time.toLocaleString('en-US');
    this.index;
  }
  Review.prototype.toHtml = function() {
    let template = Handlebars.compile($('#review-list-template').text());
    return template(this);
  }

  Review.all = [];

  Review.loadAll = rows => {
    Review.all = rows.sort((a, b) => (new Date(b.published_on)) - (new Date(a.published_on))).map(review => new Review(review));
  }

  Review.fetchAll = callback =>
    $.get(`${__API_URL__}/api/v1/reviews`)
      .then(Review.loadAll)
      .then(callback)
      .catch(errorCallback);

  Review.fetchOne = (ctx, callback) => {
    $.get(`${__API_URL__}/api/v1/reviews/${ctx.params.review_id}`)
      .then(results => results[0])
      .then(callback)
      .catch(errorCallback);
  }

  Review.create = review => {
    console.log(review);
    $.post(`${__API_URL__}/api/v1/reviews/create`, review)
      .then(() => page('/reviews'))
      .catch(errorCallback);
  }

  Review.update = (review, review_id) =>{
    $.ajax({
      url: `${__API_URL__}/api/v1/reviews/update/${review_id}`,
      method: 'PUT',
      data: review,
    })
      .then(() => page('/reviews'))
      .catch(errorCallback)

  }

  Review.delete = (review) => {
    $.ajax({
      url: `${__API_URL__}/api/v1/reviews/delete`,
      method: 'DELETE',
      data: review
    })
      .then(() => page('/reviews'));
  };

  Review.cancel = () => {
    page('/reviews');
  };

  module.Review = Review;
})(app)