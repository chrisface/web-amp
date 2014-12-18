angular.module('webAmp.audio.nodes')
.factory('AudioNode', [
  '$rootScope', 'audioContext', 'AudioNodeConnection',
  function($rootScope, audioContext, AudioNodeConnection){

    // This is the abstract class for all audio nodes
    var AudioNode = function(){
      this.name = "NO NAME";
      this.connections = [];
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
    };

    AudioNode.prototype.getAudioNode = function(){
      return this.node;
    };

    return AudioNode;
  }
]);
