(function() {
  function RoomCtrl($scope, $uibModal, Room) {
    $scope.rooms = Room;

    $scope.open = function() {
      $uibModal.open({
        templateUrl: 'rooms.html',
        controller: 'ModalCtrl'
      })
    };
    return $scope.rooms;
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', RoomCtrl]);
})();
