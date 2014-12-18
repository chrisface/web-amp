angular.module('webAmp')
.service('SoundBoardService', [
  function(){

    this.audioNodes = [];

    this.connectNodes = function(fromNode, toNode) {
      fromNode.connect(toNode);
    };

    this.getAudioNodeConnections = function() {
      return _.map(this.audioNodes, "connections");
    };

    this.availableConnections = function(audioNode){
      return _.reject(this.audioNodes, audioNode);
    };

    this.addNode = function(audioNode) {
      this.audioNodes.push(audioNode);
    };
  }
]);
