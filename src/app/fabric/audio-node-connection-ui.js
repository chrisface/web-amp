angular.module('fabric')
.factory('AudioNodeConnectionUI', [
  function(){

    var AudioNodeConnectionUI = function(audioNode, fromAudioNodeUI, toAudioNodeUI){
      this.audioNode = audioNode;
      this.fromAudioNodeUI = fromAudioNodeUI;
      this.toAudioNodeUI = toAudioNodeUI;
      this.zIndex = 1;


      var fromPoint = this.fromAudioNodeUI.getFabricComponent().getCenterPoint();
      var toPoint =  this.toAudioNodeUI.getFabricComponent().getCenterPoint();

      this.ui = new fabric.Line([
        fromPoint.x,
        fromPoint.y,
        toPoint.x,
        toPoint.y
        ],
        {
          stroke: 'red',
          strokeWidth: 5,
          selectable: false
        });

      this.ui.hasControls = false;
      this.ui.hasBorders = false;
    };


    AudioNodeConnectionUI.prototype.setFromPoint = function(audioNodeUI){
      var newX = audioNodeUI.getFabricComponent().getCenterPoint().x;
      var newY = audioNodeUI.getFabricComponent().getCenterPoint().y;

      this.ui.set({x1: newX, y1: newY});
    };

    AudioNodeConnectionUI.prototype.setToPoint = function(audioNodeUI){
      var newX = audioNodeUI.getFabricComponent().getCenterPoint().x;
      var newY = audioNodeUI.getFabricComponent().getCenterPoint().y;

      this.ui.set({x2: newX, y2: newY});
    };

    AudioNodeConnectionUI.prototype.getFabricComponent = function(){
      return this.ui;
    };

    return AudioNodeConnectionUI;
  }
]);
