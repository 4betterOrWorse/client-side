'strict';
var app = app || {};

(function (module) {
  const yelpView = {};

  yelpView.reset = function () {
    $('.container').hide();
    $('.menu').slideUp(350);
  }

  // yelpView.initSearchView = function (callback) {
  //   yelpView.reset();
  //   $('.yelp-view').show()
  //   $('#yelpSubmit').on('submit', function(event) {
  //     event.preventDefault();
  //     let search = {term: event.target.yelpSearch.value};
  //     module.Yelp.fetchAll(search, callback);
  //   })
  // }

  yelpView.initDetail = function () {
    yelpView.reset();
    $('#yelp-detail').empty();
    $('.yelp-detail-view').show();
    $('#yelp-detail').append(module.Yelp.one.toHtml());
  }

  yelpView.results = function () {
    $('#yelp-list').empty();
    module.Yelp.all.map(rest => {
      $('#yelp-list').append(rest.toHtml())
    });
  }

  module.yelpView = yelpView;
})(app);