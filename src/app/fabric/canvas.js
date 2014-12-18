angular.module('fabric')
.factory('FabricCanvas', [
  function(){
    var fabric = window.fabric;

    var FabricCanvas = function(){
      this.canvas = new fabric.Canvas('c');
    };

    FabricCanvas.prototype.add = function(uiComponent){
      this.canvas.add(uiComponent.getFabricComponent());
    };

    return new FabricCanvas();
  }
]);
