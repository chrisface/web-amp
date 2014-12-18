angular.module('fabric')
.factory('FabricCanvas', [
  function(){
    var fabric = window.fabric;

    var FabricCanvas = function(){
      this.canvas = new fabric.Canvas('c');
    };

    FabricCanvas.prototype.add = function(uiComponent){
      var fabricComponent = uiComponent.getFabricComponent();
      this.canvas.add(fabricComponent);
      this.canvas.moveTo(fabricComponent, uiComponent.zIndex);
    };

    return new FabricCanvas();
  }
]);
