angular.module('fabric')
.factory('AudioNodeUI', [
  function(){

    var AudioNodeUI = function(audioNode){
      this.observers = {};
      this.audioNode = audioNode;
      this.radius = 40;
      this.zIndex = 2;

      this.backround = new fabric.Circle({
        originX: 'center',
        originY: 'center',
        strokeWidth: 5,
        fill: 'green',
        stroke: 'grey',
        radius: this.radius
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

      this.ui.hasControls = false;
      // this.ui.hasBorders = false;

    };

    AudioNodeUI.prototype.getFabricComponent = function(){
      return this.ui;
    };

    AudioNodeUI.prototype.onMove = function(){
      this.triggerEvent("audioNodeUIMoved", this);
    };

    AudioNodeUI.prototype.onSelection = function(){
      this.triggerEvent("audioNodeUISelected", this);
    };

    AudioNodeUI.prototype.on = function(eventName, callback, scope){
      this.observers[eventName] = this.observers[eventName] || [];

      this.observers[eventName].push({
        callback: callback,
        scope: scope
      });
    };

    AudioNodeUI.prototype.triggerEvent = function(eventName, payload){
      _.each(this.observers[eventName], function(observer){
        observer.callback.apply(observer.scope, [payload]);
      });
    };

    AudioNodeUI.prototype.deselected = function(){
      this.triggerEvent("audioNodeUIDeselected", this);
    }

    return AudioNodeUI;
  }
]);
