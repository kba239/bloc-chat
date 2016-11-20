(function() {
  function HomeCtrl($uibModal, Room, $cookies, Message) {
    var ctrl = this;

    ctrl.currentUser = $cookies.get('blocChatCurrentUser');

    ctrl.open = function() {
      console.log("open");
      $uibModal.open({
        templateUrl: '/templates/cookiesModal.html',
        controller: 'CookiesModalCtrl as cookiesModal'
      });
    };

    ctrl.activeRoom;
    ctrl.rooms = Room.all;

    ctrl.selectRoom = function(room) {
      ctrl.activeRoom = room;
      ctrl.messages = Message.getByRoomId(ctrl.activeRoom.$id);
    };

    ctrl.sendMessage = function() {
      ctrl.newMessage.roomId = ctrl.activeRoom.$id;
      ctrl.newMessage.userName = ctrl.currentUser;
      Message.send(ctrl.newMessage);
    };

    ctrl.open = function() {
      console.log("open");
      $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalCtrl as modal'
      });
    };
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['$uibModal', 'Room', '$cookies', 'Message', HomeCtrl]);
})();
