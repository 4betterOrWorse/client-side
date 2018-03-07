'use strict';

if(window.location.pathname !== '/') {
  page.base('/client-side');
}

page('/client-side/', ctx => app.KC.fetchAll(() => app.restaurantsView.initView(ctx)));
page('/client-side/business/:id', ctx => app.KC.fetchOne(ctx, app.restaurantsView.initDetail));

page();