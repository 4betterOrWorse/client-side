'use strict';

page('/', ctx => app.KC.fetchAll(() => app.restaurantsView.initView(ctx)));
page('/business/:id', ctx => app.KC.fetchOne(ctx, app.restaurantsView.initDetail));

page();