angular.module('webAmp')
.service('SoundBoardService', [
  function(){

    this.observers = {};
    this.audioNodes = [];

    this.connectNodes = function(fromNode, toNode) {
      var connectionNode = fromNode.connect(toNode);
      this.triggerEvent('audioNodeConnected', connectionNode);
    };

    this.getAudioNodeConnections = function() {
      return _.map(this.audioNodes, "connections");
    };

    this.availableConnections = function(audioNode){
      return _.reject(this.audioNodes, audioNode);
    };

    this.addNode = function(audioNode) {
      this.audioNodes.push(audioNode);
      this.triggerEvent("audioNodeAdded", audioNode);
    };

    this.on = function(eventName, callback, scope){
      this.observers[eventName] = this.observers[eventName] || [];

      this.observers[eventName].push({
        callback: callback,
        scope: scope
      });
    };

    this.triggerEvent = function(eventName, payload){
      _.each(this.observers[eventName], function(observer){
        observer.callback.apply(observer.scope, [payload]);
      });
    };
  }
]);
