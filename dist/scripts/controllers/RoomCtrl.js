(function() {
  function RoomCtrl($uibModal, Message, Room) {
    var ctrl = this;

    ctrl.rooms = Room.all;

    ctrl.activeRoom;

/*    ctrl.createActive = function(room) {
      ctrl.activeRoom = room;
      console.console.log(ctrl.activeRoom.room.$id);
      ctrl.messages = Room.getMessages(ctrl.activeRoom.room.$id);
      console.log(ctrl.messages);
    };
*/


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
