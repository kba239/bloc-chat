(function() {
  function Room($firebaseArray) {
    var Room = {};

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var getRooms = function() {
      return rooms;
    };

    Room.all = rooms;

    Room.add = function() {
      var newRoomName;
      console.log(newRoomName);
      this.add = this.rooms.$add({
        $value: newRoomName
      });
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
