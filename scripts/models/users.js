'use strict';

var app = app || {};
var __API_URL__ = 'http://localhost:3000';
// var __API_URL__ = 'https://dont-go.herokuapp.com';

(function(module) {
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function User(data) {
    this.username = data.username;
    this.firstname = data.firstname;
    this.lastname = data.lastname;
    this.email = data.email;
    this.password = data.password;
  }

  User.create = user => {
    console.log(user);
    $.post(`${__API_URL__}/api/v1/users`, user)
      .then(() => page('/'))
      .catch(errorCallback);
  }
  // User.update = (user, user_id) =>
  //   $.ajax({
  //     url: `${__API_URL__}/api/v1/users/${user_id}`,
  //     method: 'PUT',
  //     data: user,
  //   })
  //     .then(() => page(`/users/${user_id}`))
  //     .catch(errorCallback)

  // User.destroy = user_id =>
  //   $.ajax({
  //     url: `${__API_URL__}/api/v1/users/${user_id}`,
  //     method: 'DELETE',
  //   })
  //     .then(() => page('/'))
  //     .catch(errorCallback)

  module.User = User;
})(app)

