angular.module('webAmp.audio.nodes')
.factory('GainAudioNode', [
  'audioContext', 'AudioNode',
  function(audioContext, AudioNode){

    var GainAudioNode = function(){
      this.node = audioContext.createGain();
      this.node.gain.value = 1;
      this.name = "Gain " + (++GainAudioNode.instanceCount);
    };

    // This instanceCount should probably not be here.
    GainAudioNode.instanceCount = 0;

    GainAudioNode.prototype = new AudioNode();

    return GainAudioNode;
  }
]);
