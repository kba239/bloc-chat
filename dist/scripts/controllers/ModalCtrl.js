(function() {
  function ModalCtrl($uibModal, Room) {
    this.rooms = Room.all;

    this.getRoomName = function() {
      var newRoomName = document.getElementByID('roomName').value;
        console.log(newRoomName);
        return newRoomName;
    };

    this.addRoom = Room.addRoom();

    this.cancel = function() {
      $uibModalInstance.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
