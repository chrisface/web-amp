angular.module('fabric')
.factory('AudioNodeUI', [
  '$rootScope', 'audioContext',
  function($scope, audioContext){

    var AudioNodeUI = function(audioNode){
      this.audioNode = audioNode;

      this.backround = new fabric.Circle({
        originX: 'center',
        originY: 'center',
        fill: 'green',
        radius: 60
      });

      this.text = new fabric.Text(this.audioNode.name, {
        fontSize: 16,
        originX: 'center',
        originY: 'center'
      });


      this.ui = new fabric.Group([ this.backround, this.text ], {
        left: 50,
        top: 50
      });

    };

    AudioNodeUI.prototype.getUI = function(){
      return this.ui;
    };

    return AudioNodeUI;
  }
]);
