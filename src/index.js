!function () {
  function bootstrap() {
    angular.bootstrap(document, ['app'], {strictDi: true})
  }

  document.addEventListener('DOMContentLoaded', bootstrap)
}()
