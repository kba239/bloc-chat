(function() {
  function Room($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("rooms");

    $scope.rooms = $firebaseArray(ref);

    $scope.addRooms = function(numRooms) {
      $scope.rooms.$add({
        name: $scope.nameNewRoom
      });
    };

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$scope', '$firebaseArray', Room]);
})();
