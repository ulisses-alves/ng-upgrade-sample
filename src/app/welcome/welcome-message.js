angular.module('app.welcome.message', [])
.factory('welcomeMessage', [
  function () {
    return {
      create: function (name) {
        return 'Hello ' + name + '!'
      }
    }
  }
])
