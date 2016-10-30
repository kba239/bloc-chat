(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");

    var rooms = $firebaseArray(ref);

    var getRooms = function() {
      return rooms;
    };

    return {
      rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
