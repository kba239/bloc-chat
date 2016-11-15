(function() {
  function RoomCtrl($uibModal, Room, Message ) {
    var ctrl = this;

    ctrl.rooms = Room.all;

    ctrl.activeRoom;

    ctrl.chatRooms = Room.all;

    ctrl.selectRoom = function(room) {
      ctrl.activeRoom = room;
      console.log(ctrl.activeRoom.room.$id);
      ctrl.messages = Room.getMessages(ctrl.activeRoom.room.$id);
      console.log(ctrl.messages);
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
    .controller('RoomCtrl', ['$uibModal', 'Room', 'Message', RoomCtrl]);
})();
