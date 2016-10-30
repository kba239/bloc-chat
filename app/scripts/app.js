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
        });
        .state('rooms', {
          url: '/Room',
          controller: 'RoomCtrl as rooms',
          templateUrl: '/services/rooms.html'
        });
  }


  angular
    .module('blocChat', ['ui.router', 'firebase'])
    .config(config);
})();
