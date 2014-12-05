angular.module('webAmp.audio.nodes')
.factory('GainAudioNode', [
  'audioContext', 'AudioNode',
  function(audioContext, AudioNode){

    var GainAudioNode = function(){
      this.node = audioContext.createGain(1);
      this.name = "Gain " + (++GainAudioNode.instanceCount);
    };

    // This instanceCount should probably not be here.
    GainAudioNode.instanceCount = 0;

    GainAudioNode.prototype = new AudioNode();

    GainAudioNode.prototype.setTheValue = function(value){
      this.node.gain.value = value;
    };

    GainAudioNode.prototype.getTheValue = function(value){
      return this.node.gain.value;
    };

    return GainAudioNode;
  }
]);
