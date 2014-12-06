angular.module('webAmp')
.service('SoundBoardService', [
  'OutputAudioNode', 'GainAudioNode', 'InputAudioNode', 'DelayAudioNode',
  function(OutputAudioNode, GainAudioNode, InputAudioNode, DelayAudioNode){

    this.audioNodes = [];

    this.createGainNode = function() {
      this.audioNodes.push(new GainAudioNode());
    };

    this.createDelayNode = function() {
      this.audioNodes.push(new DelayAudioNode());
    };

    this.createInputNode = function() {
      var audioInput = new InputAudioNode();
      this.audioNodes.push(audioInput);

      audioInput.captureInput(
        function(audioInput){
          console.log("Successfully captured input for:", audioInput.name);
        },
        function(error){
          console.log("Failed to capture input for:", error.name);
        },
        this
      );
    };

    this.availableConnections = function(audioNode){
      return _.reject(this.audioNodes, audioNode);
    };

    this.createOutputNode = function() {
      this.audioNodes.push(new OutputAudioNode());
    };

  }
]);
