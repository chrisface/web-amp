angular.module('fabric')
.factory('AudioNodeConnectionUI', [
  function(){

    var AudioNodeConnectionUI = function(audioNode, fromAudioNodeUI, toAudioNodeUI){
      this.audioNode = audioNode;
      this.fromAudioNodeUI = fromAudioNodeUI;
      this.toAudioNodeUI = toAudioNodeUI;


      var fromPoint = this.fromAudioNodeUI.getFabricComponent().getCenterPoint();
      var toPoint =  this.toAudioNodeUI.getFabricComponent().getCenterPoint();

      this.ui = new fabric.Line([fromPoint.x, fromPoint.y, toPoint.x, toPoint.y], {stroke: 'red'});
    };

    AudioNodeConnectionUI.prototype.getFabricComponent = function(){
      return this.ui;
    };

    return AudioNodeConnectionUI;
  }
]);
