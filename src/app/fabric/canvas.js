angular.module('fabric')
.factory('FabricCanvas', [
  function(){
    var fabric = window.fabric;

    var FabricCanvas = function(){
      this.canvas = new fabric.Canvas('c');
      this.audioNodeUIs = [];

      var scope = this;

      this.canvas.on('object:moving', function(e) {
        scope.onObjectMove.call(scope, e.target);
      });
    };

    FabricCanvas.prototype.addAudioNodeUI = function(uiComponent){
      this.add(uiComponent);
      var fabricComponent = uiComponent.getFabricComponent();
      this.audioNodeUIs.push(uiComponent);
    }


    FabricCanvas.prototype.add = function(uiComponent){
      var fabricComponent = uiComponent.getFabricComponent();
      this.canvas.add(fabricComponent);
      this.canvas.moveTo(fabricComponent, uiComponent.zIndex);
    };

    FabricCanvas.prototype.onObjectMove = function(fabricComponent){
      var audioNodeUI = _.find(this.audioNodeUIs, function(audioNodeUI){
        return audioNodeUI.getFabricComponent() == fabricComponent;
      });

      if (audioNodeUI){
        audioNodeUI.onMove();
      }
    };

    return new FabricCanvas();
  }
]);
