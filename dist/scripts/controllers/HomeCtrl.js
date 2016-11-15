(function() {
  function HomeCtrl($uibModal, Room, Message) {
    var ctrl = this;

    ctrl.activeRoom;
    ctrl.rooms = Room.all;

    ctrl.selectRoom = function(room) {
      ctrl.activeRoom = room;
      ctrl.messages = Message.getByRoomId(ctrl.activeRoom.$id);
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
    .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', HomeCtrl]);
})();
