'strict';
var app = app || {};

(function (module) {
  const yelpView = {};

  yelpView.reset = function () {
    $('.container').hide();
    $('.menu').slideUp(350);
  }

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
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
    $('#yelp-detail').append(module.Yelp.one.toHtml1());
    // $('#healthButton').off().on('click', function(event) {
    //   event.preventDefault();
    //   let addr = {address: $(this).attr('href')};
    //   console.log(addr);
    //   $.get(`${__API_URL__}/api/v1/yelp/KC/${addr.address}`)
    //     .then(module.KC.loadOne)
    //     .then(callback)
    //     .catch(errorCallback);
    // })
  }

  yelpView.initHealth = function () {
    $('#yelp-detail').append(module.KC.one.toHtml1())
  };

  yelpView.results = function () {
    $('#yelp-list').empty();
    module.Yelp.all.map(rest => {
      $('#yelp-list').append(rest.toHtml())
    });
  }

  module.yelpView = yelpView;
})(app);