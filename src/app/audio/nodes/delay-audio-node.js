angular.module('webAmp.audio.nodes')
.factory('DelayAudioNode', [
  'audioContext', 'AudioNode',
  function(audioContext, AudioNode){

    var DelayAudioNode = function(){
      this.node = audioContext.createDelay();
      this.node.delayTime.value = 1;
      this.name = "Delay";
    };

    DelayAudioNode.prototype = new AudioNode();

    return DelayAudioNode;
  }
]);
