angular.module('webAmp.audio.nodes')
.factory('OutputAudioNode', [
  'audioContext', 'AudioNode',
  function(audioContext, AudioNode){

    var OutputAudioNode = function(){
      this.node = audioContext.destination;
      this.name = "Output";
    };

    OutputAudioNode.prototype = new AudioNode();

    return OutputAudioNode;
  }
]);
