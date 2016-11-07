(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

      $stateProvider
        .state('home', {
          url: '/',
          controller: 'HomeCtrl as home',
          templateUrl: '/templates/home.html'
        })
        .state('room', {
          url: '/',
          controller: 'RoomCtrl as room',
          templateUrl: '/templates/home.html'
        })
        .state('modal', {
          url: '/modal',
          controller: 'ModalCtrl as modal',
          templateUrl: '/templates/modal.html'
        });
        
  }


  angular
    .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
    .config(config);
})();
