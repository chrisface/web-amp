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

    // FabricCanvas.prototype.drawAudioNodeConnections = function(){
    //   this.clearConnectionLines();

    //   _.each(this.audioUINodes, function(audioNodeUIFrom){
    //     _.each(audioNodeUIFrom.audioNode.connectedNodes, function(audioNodeTo){
    //       console.log("draw line from",audioNodeUIFrom.audioNode.name, "to",audioNodeTo.name);

    //       var from = audioNodeUIFrom.getUI().getCenterPoint();
    //       var to = this.findUINodeForAudioNode(audioNodeTo).getUI().getCenterPoint();

    //       var connectionLine = new fabric.Line([from.x, from.y, to.x, to.y], {stroke: 'red'});
    //       this.canvas.add(connectionLine);
    //       this.connectionLines.push(connectionLine);

    //     }, this);
    //   }, this);

    // };

    // FabricCanvas.prototype.clearConnectionLines = function(){
    //   _.each(this.connectionLines, function(connectionLine){
    //     this.canvas.remove(connectionLine);
    //   }, this);
    // };

    // FabricCanvas.prototype.findUINodeForAudioNode = function(audioNode){
    //   return _.find(this.audioUINodes, {'audioNode': audioNode});
    // };

    return new FabricCanvas();
  }
]);
