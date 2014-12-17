angular.module('webAmp.audio.nodes')
.factory('AudioNode', [
  '$rootScope', 'audioContext',
  function($scope, audioContext){

    // This is the abstract class for all audio nodes
    var AudioNode = function(){
      this.name = "NO NAME";
      this.connectedNodes = [];
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
      this.node.connect(audioNode.getAudioNode());
      this.connectedNodes.push(audioNode);
    };

    AudioNode.prototype.disconnect = function(audioNode){
      this.node.disconnect();
    };

    AudioNode.prototype.getAudioNode = function(){
      return this.node;
    };

    return AudioNode;
  }
]);
