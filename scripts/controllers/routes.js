'use strict';

page('/', ctx => {
  console.log('here');
  app.Yelp.fetchAll(app.yelpView.results)
});

page('/business', ctx => app.KC.fetchAll(() => app.restaurantsView.initView(ctx)));

page('/reviews', ctx => {
  console.log('happened');
  app.Review.fetchAll(() => app.reviewView.initReview(ctx))});

page('/reviews/create', ctx => app.Review.create(ctx));

page('/reviews/update/:review_id', ctx => app.Review.fetchOne(ctx, app.reviewView.initUpdateReview));

page('/reviews/:review_id', ctx => app.Review.fetchOne(() => app.reviewView.initSingleReivew(ctx)));

page('/reviews/delete/:review_id', ctx => app.Review.fetchOne(ctx, app.reviewView.initDelete));

page('/:id', ctx => {
  app.Yelp.fetchOne(ctx, app.yelpView.initDetail);
});

page('/business/:id', ctx => app.KC.fetchOne(ctx, app.restaurantsView.initDetail));

page();