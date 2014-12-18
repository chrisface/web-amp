angular.module('webAmp')
.controller('dashboardCtrl', [
  '$scope', 'SoundBoardService', 'fabricCanvas', 'AudioNodeUI',
  function($scope, SoundBoardService, fabricCanvas, AudioNodeUI){

    $scope.audioNodes = SoundBoardService.audioNodes;

    SoundBoardService;

    $scope.createGainNode = function() {
      var audioNode = SoundBoardService.createGainNode();
      fabricCanvas.addAudioNode(new AudioNodeUI(audioNode));
    };

    $scope.createDelayNode = function() {
      var audioNode = SoundBoardService.createDelayNode();
      fabricCanvas.addAudioNode(new AudioNodeUI(audioNode));
    };

    $scope.createInputNode = function() {
      var audioNode = SoundBoardService.createInputNode();
      fabricCanvas.addAudioNode(new AudioNodeUI(audioNode));
    };

    $scope.createOutputNode = function() {
      var audioNode = SoundBoardService.createOutputNode();
      fabricCanvas.addAudioNode(new AudioNodeUI(audioNode));
    };

    $scope.availableConnections = function(audioNode) {
      return SoundBoardService.availableConnections(audioNode);
    };

    $scope.connectTwoNodes = function(){
      var first = SoundBoardService.audioNodes[0];
      var second = SoundBoardService.audioNodes[1];
      SoundBoardService.connectNodes(first, second);

      console.log(first.connections);
      fabricCanvas.drawAudioNodeConnections();
    };

  }
]);;

