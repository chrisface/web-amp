angular.module('fabric')
.factory('fabricCanvas', [
  function(){
    var fabric = window.fabric;

    var FabricCanvas = function(){
      this.canvas = new fabric.Canvas('c');
    };

    FabricCanvas.prototype.add = function(component){
      this.canvas.add(component.getUI());
    };

    return new FabricCanvas();
  }
]);
