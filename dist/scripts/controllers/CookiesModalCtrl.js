(function() {
  function CookiesModalCtrl($uibModalInstance, $cookies) {
    this.submit = function() {
      console.log(this.userName);
      $cookies.add(this.userName);
      $uibModalInstance.close();
    };

  }

  angular
    .module('blocChat')
    .controller('CookiesModalCtrl', ['$uibModalInstance', '$cookies', CookiesModalCtrl]);
})();
