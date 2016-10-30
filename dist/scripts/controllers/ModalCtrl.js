(function() {
  function ModalCtrl($scope, $uibModal, Room) {
    $scope.rooms = Room.all;

    $scope.create = function() {
      $scope.rooms.$add({
        name: $scope.nameNewRoom
      });
      $uibModal.close();
    };

    $scope.cancel = function() {
      $uibModal.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope', '$uibModal', 'Room', ModalCtrl]);
})();
