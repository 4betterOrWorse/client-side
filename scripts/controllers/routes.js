'use strict';

// page('/', ctx => app.userView.initCreateUser(ctx));
page('/', ctx => app.KC.fetchAll(() => app.restaurantsView.initView(ctx)));

page();