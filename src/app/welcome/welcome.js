angular.module('app.welcome', [
  'app.welcome.message'
])
.directive('appWelcome', [
  'welcomeMessage',
  function (welcomeMessage) {
    return {
      restrict: 'E',
      templateUrl: 'welcome.html',
      scope: {
        welcomeName: '@'
      },
      link: function (scope) {
        scope.message = welcomeMessage.create(scope.welcomeName)
      }
    }
  }
])
