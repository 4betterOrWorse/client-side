'use strict';

page('/', ctx => app.KC.fetchAll(() => app.restaurantsView.initView(ctx)));
page('/business/:id', ctx => {
  console.log(ctx);
  app.KC.fetchOne(ctx, app.restaurantsView.initDetail)

});
page('/reviews', ctx => app.Review.fetchAll(() => app.reviewView.initReview(ctx)));

page('/reviews/create', ctx => app.Review.create(ctx));
page('/reviews/update/:review_id', (ctx, next) => app.Review.fetchOne(ctx, next), ctx => app.reviewView.initUpdateReview(ctx));
page();