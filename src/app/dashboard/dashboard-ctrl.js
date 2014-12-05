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
    var audioOutput = new OutputAudioNode();

    $scope.audioNodes.push(audioOutput);

    // Capture the input from the user
    audioInput.captureInput(function(audioInput){
      $scope.audioNodes.push(audioInput);
    } ,null, this);

  }
]);;

