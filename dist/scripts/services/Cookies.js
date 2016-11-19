(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var userName = $cookies.get('blocChatCurrentUser');

    if (!userName || userName === '') {
      $uibModal.open({
        templateUrl: 'templates/cookiesModal.html',
        controller: function ($uibModalInstance, $cookies, $scope) {
          $scope.submit = function() {
            $cookies.put('blocChatCurrentUser', $scope.userName);
            $uibModalInstance.close();
          };
        },
        backdrop  : 'static',
        keyboard  : false
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
