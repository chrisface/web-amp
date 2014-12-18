angular.module('webAmp')
.service('SoundBoardService', [
  'OutputAudioNode', 'GainAudioNode', 'InputAudioNode', 'DelayAudioNode',
  function(OutputAudioNode, GainAudioNode, InputAudioNode, DelayAudioNode){

    this.audioNodes = [];

    this.connectNodes = function(fromNode, toNode) {
      fromNode.connect(toNode);
    };

    this.getAudioNodeConnections = function() {
      return _.map(this.audioNodes, "connections");
    };

    this.createGainNode = function() {
      var node = new GainAudioNode();
      this.audioNodes.push(node);
      return node;
    };

    this.createDelayNode = function() {
      var node = new DelayAudioNode();
      this.audioNodes.push(node);
      return node;
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
      return audioInput;
    };

    this.availableConnections = function(audioNode){
      return _.reject(this.audioNodes, audioNode);
    };

    this.createOutputNode = function() {
      var node = new OutputAudioNode();
      this.audioNodes.push(node);
      return node;
    };

  }
]);
