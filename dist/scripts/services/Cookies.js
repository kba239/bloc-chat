(function() {
  function BlocChatCookies($cookies, $uibModal) {

    var userName = $cookies.get('blocChatCurrentUser');
    if (!userName || userName === '') {
      $uibModal.open({
        templateUrl: 'templates/cookiesModal.html',
        controller: 'CookiesModalCtrl'
      })
    }
    return userName;
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
