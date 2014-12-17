angular.module('webAmp')
.controller('dashboardCtrl', [
  '$scope', 'SoundBoardService', 'fabricCanvas', 'AudioNodeUI',
  function($scope, SoundBoardService, fabricCanvas, AudioNodeUI){

    $scope.audioNodes = SoundBoardService.audioNodes;

    SoundBoardService;

    $scope.createGainNode = function() {
      var audioNode = SoundBoardService.createGainNode();
      fabricCanvas.add(new AudioNodeUI(audioNode));
    };

    $scope.createDelayNode = function() {
      var audioNode = SoundBoardService.createDelayNode();
      fabricCanvas.add(new AudioNodeUI(audioNode));
    };

    $scope.createInputNode = function() {
      var audioNode = SoundBoardService.createInputNode();
      fabricCanvas.add(new AudioNodeUI(audioNode));
    };

    $scope.createOutputNode = function() {
      var audioNode = SoundBoardService.createOutputNode();
      fabricCanvas.add(new AudioNodeUI(audioNode));
    };

    $scope.availableConnections = function(audioNode) {
      return SoundBoardService.availableConnections(audioNode);
    };



  }
]);;

