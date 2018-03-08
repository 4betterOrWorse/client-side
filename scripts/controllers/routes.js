'use strict';

// page('/', ctx => app.KC.fetchAll(() => app.restaurantsView.initView(ctx)));

page('/', ctx => app.Yelp.fetchAll(app.yelpView.results));

page('/:id', ctx => {
  app.Yelp.fetchOne(ctx, app.yelpView.initDetail);
});

page('/business/:id', ctx => app.KC.fetchOne(ctx, app.restaurantsView.initDetail));

page();