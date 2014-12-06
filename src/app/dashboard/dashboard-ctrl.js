angular.module('webAmp')
.controller('dashboardCtrl', [
  '$scope', 'SoundBoardService',
  function($scope, SoundBoardService){

    $scope.audioNodes = SoundBoardService.audioNodes;

    SoundBoardService;

    $scope.createGainNode = function() {
      SoundBoardService.createGainNode();
    };

    $scope.createDelayNode = function() {
      SoundBoardService.createDelayNode();
    };

    $scope.createInputNode = function() {
      SoundBoardService.createInputNode();
    };

    $scope.createOutputNode = function() {
      SoundBoardService.createOutputNode();
    };

    $scope.availableConnections = function(audioNode) {
      return SoundBoardService.availableConnections(audioNode);
    }

  }
]);;

