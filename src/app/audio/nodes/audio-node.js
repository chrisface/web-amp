angular.module('webAmp.audio.nodes')
.factory('AudioNode', [
  '$rootScope', 'audioContext', 'AudioNodeConnection',
  function($rootScope, audioContext, AudioNodeConnection){

    // This is the abstract class for all audio nodes
    var AudioNode = function(){
      this.name = "NO NAME";
      this.connections = [];
      this.observers = {};
    };

    AudioNode.prototype.value = function(newValue){
      if (angular.isDefined(newValue)){
        this.setTheValue(newValue);
      }
      else{
        return this.getTheValue();
      }
    };

    AudioNode.prototype.setTheValue = function(value){

    };

    AudioNode.prototype.getTheValue = function(value){

    };

    AudioNode.prototype.connect = function(audioNode){
      var connection = new AudioNodeConnection(this, audioNode);
      this.connections.push(connection);
      return connection;
    };

    AudioNode.prototype.disconnect = function(audioNode){
      this.node.disconnect();
      this.connections = [];
      this.triggerEvent("disconnect");
    };

    AudioNode.prototype.getAudioNode = function(){
      return this.node;
    };

    AudioNode.prototype.on = function(eventName, callback, scope){
      this.observers[eventName] = this.observers[eventName] || [];

      this.observers[eventName].push({
        callback: callback,
        scope: scope
      });
    };

    AudioNode.prototype.triggerEvent = function(eventName, payload){
      _.each(this.observers[eventName], function(observer){
        observer.callback.apply(observer.scope, [payload]);
      });
    };

    return AudioNode;
  }
]);
