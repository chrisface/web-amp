angular.module('webAmp.audio.nodes')
.factory('AudioNode', [
  'audioContext',
  function(audioContext){

    // This is the abstract class for all audio nodes
    var AudioNode = function(){
      this.name = "NO NAME";
      this.connectedNode = null;
    };

    AudioNode.prototype.connect = function(audioNode){
      this.connectedNode = audioNode;
      this.node.connect(audioNode.getAudioNode());
    };

    AudioNode.prototype.getAudioNode = function(){
      return this.node;
    };

    return AudioNode;
  }
]);
