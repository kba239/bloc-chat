(function() {
  function Room($firebaseArray) {

    var newFirebase = new Firebase("https://bloc-chat-66364.firebaseio.com/");

    var ref = newFirebase.child("rooms");

    var rooms = $firebaseArray(ref);

    var getRooms = function() {
      return rooms;
    };

    return {
      all: rooms,
      addRoom: function() {
        var newRoomName;
        console.log(newRoomName);
        this.add = this.rooms.$add({
          $value: newRoomName
        });
      }    
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
