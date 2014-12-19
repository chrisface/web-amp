angular.module('webAmp.audio.nodes')
.factory('DriveAudioNode', [
  'audioContext', 'AudioNode',
  function(audioContext, AudioNode){

    var DriveAudioNode = function(){
      // Maximum delay time
      this.value = 400;
      this.node = audioContext.createWaveShaper();
      this.node.oversample = '4x';
      this.node.curve = this.createWSCurve();
      this.name = "Drive " + (++DriveAudioNode.instanceCount);

    };

    // This instanceCount should probably not be here.
    DriveAudioNode.instanceCount = 0;

    DriveAudioNode.prototype = new AudioNode();

    DriveAudioNode.prototype.setTheValue = function(value){
      this.value = value;
      this.node.curve = this.createWSCurve();
    };

    DriveAudioNode.prototype.getTheValue = function(value){
      return this.value;
    };

    DriveAudioNode.prototype.createWSCurve = function() {
      var k = this.value;
      var n_samples = 22050;
      var wsCurve = new Float32Array(n_samples);
      var deg = Math.PI / 180;
      for (var i = 0; i < n_samples; i += 1) {
          var x = i * 2 / n_samples - 1;
          wsCurve[i] = (3 + k) * x * 20 * deg / (Math.PI + k * Math.abs(x));
      }
      console.log(wsCurve);
      return wsCurve;
  };

    return DriveAudioNode;
  }
]);
