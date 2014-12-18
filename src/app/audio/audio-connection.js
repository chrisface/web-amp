angular.module('webAmp.audio')
.factory('AudioNodeConnection', [
  function(){

    var AudioNodeConnection = function(fromAudioNode, toAudioNode){
      this.from = fromAudioNode;
      this.to = toAudioNode;

      this.from.getAudioNode().connect(this.to.getAudioNode());
    };

    return AudioNodeConnection;
  }
]);
