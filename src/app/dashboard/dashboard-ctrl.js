angular.module('webAmp')
.controller('dashboardCtrl', [
  '$scope', 'audioContext', 'OutputAudioNode', 'GainAudioNode', 'InputAudioNode', 'DelayAudioNode',
  function($scope, audioContext, OutputAudioNode, GainAudioNode, InputAudioNode, DelayAudioNode){

    $scope.audioNodes = [];

    $scope.createGainNode = function() {
      var node = new GainAudioNode();
      $scope.audioNodes.push(node);
    };

    $scope.createDelayNode = function() {
      var node = new DelayAudioNode();
      $scope.audioNodes.push(node);
    };


    var audioInput = new InputAudioNode();
    var audioDelay = new DelayAudioNode();
    var audioGain = new GainAudioNode();
    var audioOutput = new OutputAudioNode();


    $scope.audioNodes.push(audioInput);
    $scope.audioNodes.push(audioDelay);
    $scope.audioNodes.push(audioGain);
    $scope.audioNodes.push(audioOutput);


    audioDelay.connect(audioGain);
    audioGain.connect(audioOutput);

    // Capture the input from the user
    audioInput.captureInput(function(audioInput){
      audioInput.connect(audioDelay);
    },null, this);

  }
]);;

