'use strict';

page('/'
  // , (ctx, next) => app..fetchAll(() => app.bookView.initIndexPage(ctx, next))
  // , (ctx, next) => app.adminView.verify(ctx, next)
  , ctx => app.userView.initCreateUser(ctx)
);

page();