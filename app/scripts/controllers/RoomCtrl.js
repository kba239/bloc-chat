(function() {
  function RoomCtrl($uibModal, Message, Room) {
    this.rooms = Room.all;

    this.activeRoom;

    this.createActive = function(room) {
      this.activeRoom = room;
      console.console.log(this.activeRoom.room.$id);
      this.messages = Room.getMessages(this.activeRoom.room.$id);
      console.log(this.messages);
    };


    this.open = function() {
      $uibModal.open({
        templateUrl: 'modal.html',
        controller: 'ModalCtrl'
      });
    };
    return this.rooms;
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['$uibModal', 'Room', 'Message', RoomCtrl]);
})();
