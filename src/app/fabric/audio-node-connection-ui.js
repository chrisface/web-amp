angular.module('fabric')
.factory('AudioNodeConnectionUI', [
  'FabricCanvas',
  function(FabricCanvas){

    var AudioNodeConnectionUI = function(audioNode, fromAudioNodeUI, toAudioNodeUI){
      this.audioNode = audioNode;
      this.fromAudioNodeUI = fromAudioNodeUI;
      this.toAudioNodeUI = toAudioNodeUI;
      this.zIndex = 1;


      var fromPoint = this.fromAudioNodeUI.getFabricComponent().getCenterPoint();
      var toPoint =  this.toAudioNodeUI.getFabricComponent().getCenterPoint();

      this.ui = new fabric.Line(
        [
          fromPoint.x,
          fromPoint.y,
          toPoint.x,
          toPoint.y
        ],
        {
          stroke: 'red',
          strokeWidth: 5,
          selectable: false
        }
      );

      this.ui.hasControls = false;
      this.ui.hasBorders = false;

      this.updateGradient();
    };


    AudioNodeConnectionUI.prototype.setFromPoint = function(audioNodeUI){
      var newX = audioNodeUI.getFabricComponent().getCenterPoint().x;
      var newY = audioNodeUI.getFabricComponent().getCenterPoint().y;

      this.ui.set({x1: newX, y1: newY});

      this.updateGradient();
    };

    AudioNodeConnectionUI.prototype.setToPoint = function(audioNodeUI){
      var newX = audioNodeUI.getFabricComponent().getCenterPoint().x;
      var newY = audioNodeUI.getFabricComponent().getCenterPoint().y;

      this.ui.set({x2: newX, y2: newY});

      this.updateGradient();
    };

    AudioNodeConnectionUI.prototype.remove = function(){
      FabricCanvas.remove(this);
    };

     AudioNodeConnectionUI.prototype.updateGradient = function(){
        // this.ui.setGradient('stroke', {
        //   x1: 0,
        //   x2: this.ui.y2 - this.ui.y1,
        //   y1: 0,
        //   y2: this.ui.x2 - this.ui.x1,
        //   colorStops: {
        //     0: 'blue',
        //     1: 'red'
        //   }
        // });
     }

    AudioNodeConnectionUI.prototype.getFabricComponent = function(){
      return this.ui;
    };

    return AudioNodeConnectionUI;
  }
]);
