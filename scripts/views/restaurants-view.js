'use strict';

var app = app || {};

// this is a temporary location for the hamburger menu, will move later.
$(document).ready(function() {
  $('.cross').hide();
  $('.menu').hide();
  $('.hamburger').click(function() {
    $('.menu').slideToggle('fast', function() {
      $('.hamburger').hide();
      $('.cross').show();
    });
  });
  $('.cross').click(function() {
    $('.menu').slideToggle('fast', function() {
      $('.cross').hide();
      $('.hamburger').show();
    });
  });
});
// temporary location for hamburger menu

(function (module){

  const restaurantsView = {};

  function reset() {
    $('.container').hide();
    $('.menu').slideUp(350);
  }

  restaurantsView.initView = function (ctx) {
    reset();
    $('.home-view').show();
    $('#home-list').empty();
    module.KC.filter.map(rest => {
      $('#home-list').append(rest.toHtml())});
  }

  restaurantsView.initDetail = function (ctx) {
    reset();
    $('.detail-view').show();
    $('#restaurant-detail').empty();

    let counter = 0;
    module.KC.one.map(rest => {
      $('#restaurant-detail').append(rest.toHtml1());
      if(counter !== 0 && rest.inspection_date === module.KC.one[counter-1].inspection_date){
        $(`.${rest.violation_record_id}`).hide();
      }
      counter++;
    })
    restaurantsView.makeMap();
  };


  
  restaurantsView.makeMap = function(){ 
    let chartKC = [];
    chartKC = module.KC.one.filter((a, b, c) => c.findIndex(a2 => a.inspection_date === a2.inspection_date) === b);
    console.log(chartKC);

    chartKC.sort(function(a, b){
      var dateA=new Date(a.inspection_date), dateB=new Date(b.inspection_date)
      return dateA-dateB //sort by date ascending
    });
    let restDates = [];
    let restScore = [];
    let restName = chartKC.inspection_business_name;
    chartKC.forEach(function(element) {
      restName = element.inspection_business_name;
      restDates.push(element.inspection_date);
      restScore.push(element.inspection_score);
    });
    // console.log(restDates);
    //  console.log(module.KC.one.inspection_business_name);
    //var ctx = document.getElementById('myChart').getContext('2d');
    let ctxMap = document.getElementById('myChart');
    let chart = new Chart(ctxMap, {
      // The type of chart we want to create
      type: 'bar',
      // The data for our dataset
      data: {
        // labels: ["January", "February", "March", "April", "May", "June", "July"],
        labels:restDates,
        datasets: [{
          label: restName,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          // data: [0, 10, 5, 2, 20, 30, 45],
          data:restScore,
        }]
      },

      // Configuration options go here
      options: {}
    });
  };


  // restaurantsView.initUpdateReview = function (ctx) {
  //   reset();
  // }

  module.restaurantsView = restaurantsView;

})(app);