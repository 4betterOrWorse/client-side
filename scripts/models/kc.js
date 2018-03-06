'use strict';



$.get(`/api/v1/rests`)
  .then(
    data => JSON.parse(data).forEach(result=>
      $('#home-list').append(`${result.inspection_business_name}, ${result.inspection_result}, ${result.inspection_score}`),
    err => console.error(err.status, err.statusText, 'Is the reason this is broken')

    )
  )