'use strict';

var app = app || {};

(function (module) {
  const userView = {};

  userView.initCreateUser = function () {
    $('#add-user-form').on('submit', function(event) {
      console.log('event handler got hit');
      event.preventDefault();
      let user = {
        username: event.target.username.value,
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
        email: event.target.email.value,
        password: event.target.password.value
      }
      module.User.create(user);
    })

  }

  module.userView = userView;
})(app)