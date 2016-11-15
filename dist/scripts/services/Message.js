(function() {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      console.log(roomId);
      var roomMessages = $firebaseArray(messagesRef.orderByChild('roomId').equalTo(roomId));
      return roomMessages;
    }

    return Message;
  }
  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
