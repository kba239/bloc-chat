(function() {
  function Message($firebaseArray) {
    var newFirebase = new Firebase("https://bloc-chat-66364.firebaseio.com/");
    var ref = newFirebase.child("messages");
    var messages = $firebaseArray(ref);
  }

  var getMessages = function(roomId) {
    console.log(roomId);
    var roomMessages = $firebaseArray(messagesRef.orderByChild('roomId').equalTo('roomId'));
    return roomMessages;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
