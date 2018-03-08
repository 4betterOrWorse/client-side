'use strict';

page.base('/client-side');

page('/client-side', ctx => {
  console.log('here');
  app.Yelp.fetchAll(app.yelpView.results)
});

page('/client-side/business', ctx => app.KC.fetchAll(() => app.restaurantsView.initView(ctx)));

page('/client-side/reviews', ctx => {
  console.log('happened');
  app.Review.fetchAll(() => app.reviewView.initReview(ctx))});

page('/client-side/reviews/create', ctx => app.Review.create(ctx));

page('/client-side/reviews/update/:review_id', ctx => app.Review.fetchOne(ctx, app.reviewView.initUpdateReview));

page('/client-side/reviews/:review_id', ctx => app.Review.fetchOne(() => app.reviewView.initSingleReivew(ctx)));

page('/client-side/reviews/delete/:review_id', ctx => app.Review.fetchOne(ctx, app.reviewView.initDelete));

page('/client-side/:id', ctx => {
  app.Yelp.fetchOne(ctx, app.yelpView.initDetail);
});

page('/client-side/business/:id', ctx => app.KC.fetchOne(ctx, app.restaurantsView.initDetail));

page();