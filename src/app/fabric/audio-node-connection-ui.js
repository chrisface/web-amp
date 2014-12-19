angular.module('fabric')
.factory('AudioNodeConnectionUI', [
  function(){

    var AudioNodeConnectionUI = function(audioNode, fromAudioNodeUI, toAudioNodeUI){
      this.audioNode = audioNode;
      this.fromAudioNodeUI = fromAudioNodeUI;
      this.toAudioNodeUI = toAudioNodeUI;
      this.zIndex = 3;


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
    };


    AudioNodeConnectionUI.prototype.setFromPoint = function(audioNodeUI){
      var intersectionPointTo = this.intersectionPoint(audioNodeUI, this.toAudioNodeUI);
      this.ui.set({x1: intersectionPointTo.x, y1: intersectionPointTo.y});
    };

    AudioNodeConnectionUI.prototype.setToPoint = function(audioNodeUI){
      var intersectionPointFrom = this.intersectionPoint(this.fromAudioNodeUI, audioNodeUI);
      this.ui.set({x2: intersectionPointFrom.x, y2: intersectionPointFrom.y});
    };

    AudioNodeConnectionUI.prototype.intersectionPoint = function(fromAudioNodeUI, toAudioNodeUI){
      var angle = this.calculateLineAngle(fromAudioNodeUI, toAudioNodeUI);

      var oppositeLength = Math.sin(angle) * 40;
      var adjacentLength = Math.cos(angle) * 40;

      // console.log("opposite: ", oppositeLength);
      // console.log("adjacent: ", adjacentLength);


      var oldX = toAudioNodeUI.getFabricComponent().getCenterPoint().x;
      var newX = oldX + adjacentLength;

      var oldY = toAudioNodeUI.getFabricComponent().getCenterPoint().y;
      var newY = oldY - oppositeLength;

      return {
        x: newX,
        y: newY
      };
    };

    AudioNodeConnectionUI.prototype.calculateLineAngle = function(fromAudioNodeUI, toAudioNodeUI){

      var x = fromAudioNodeUI.getFabricComponent().getCenterPoint().x - toAudioNodeUI.getFabricComponent().getCenterPoint().x;
      var y = fromAudioNodeUI.getFabricComponent().getCenterPoint().y - toAudioNodeUI.getFabricComponent().getCenterPoint().y;

      var angle;

      if (x == 0) {
        if (y == 0) {
          angle = 0;
        }
        else if (y > 0) {
          angle = Math.PI / 2;
        }
        else {
          angle = Math.PI * 3 / 2;
        }
      }
      else if (y == 0) {
        if (x > 0) {
          angle = 0;
        }
        else {
          angle = Math.PI;
        }
      }
      else {
        if (x < 0) {
          angle = Math.atan(y / x) + Math.PI;
        }
        else if ( y < 0) {
          angle = Math.atan(y / x) + (2 * Math.PI);
        }
        else {
          angle = Math.atan(y / x);
        }
      }

      // Convert to degrees
      // angle = (angle * 180) / Math.PI;

      // Convert to relative angle
      angle = (Math.PI * 2) - angle;
      console.log((angle * 180) / Math.PI);

      return angle;
    };

    AudioNodeConnectionUI.prototype.getFabricComponent = function(){
      return this.ui;
    };

    return AudioNodeConnectionUI;
  }
]);
