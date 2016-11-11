(function() {
  function ModalCtrl($uibModalInstance, Room) {
    this.submit = function() {
      console.log(this.room);
      Room.add(this.room);
      $uibModalInstance.close();
    };

    this.cancel = function() {
      $uibModalInstance.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
