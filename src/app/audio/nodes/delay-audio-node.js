angular.module('webAmp.audio.nodes')
.factory('DelayAudioNode', [
  'audioContext', 'AudioNode',
  function(audioContext, AudioNode){

    var DelayAudioNode = function(){
      // Maximum delay time
      this.node = audioContext.createDelay(5);
      this.name = "Delay " + (++DelayAudioNode.instanceCount);
    };

    // This instanceCount should probably not be here.
    DelayAudioNode.instanceCount = 0;

    DelayAudioNode.prototype = new AudioNode();

    DelayAudioNode.prototype.setTheValue = function(value){
      console.log(value);
      this.node.delayTime.value = value;
    };

    DelayAudioNode.prototype.getTheValue = function(value){
      return this.node.delayTime.value;
    };

    return DelayAudioNode;
  }
]);
