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

  yelpView.initDetail = function () {
    yelpView.reset();
    $('#yelp-detail').empty();
    $('.yelp-detail-view').show();
    $('#yelp-detail').append(module.Yelp.one.toHtml1());
    $('#healthButton').off().on('click', function(event) {
      event.preventDefault();
      let addr = {address: $(this).attr('data-id')};
      $.get(`${__API_URL__}/api/v1/yelp/KC/${addr.address}`)
        .then(module.KC.loadOne)
        .then(yelpView.initHealth)
        .catch(errorCallback);
    })
  }

  yelpView.initHealth = function () {
    let counter = 0;
    $('.detail-view').show();
    module.KC.one.map(rest => {
      $('#restaurant-detail').append(rest.toHtml1());
      if(counter !== 0 && rest.inspection_date === module.KC.one[counter-1].inspection_date){
        $(`.${rest.violation_record_id}`).hide();
      }
      counter++;
    });
    module.restaurantsView.makeMap();
  }

  yelpView.results = function () {
    $('#yelp-list').empty();
    module.Yelp.all.map(rest => {
      $('#yelp-list').append(rest.toHtml())
    });
  }

  module.yelpView = yelpView;
})(app);