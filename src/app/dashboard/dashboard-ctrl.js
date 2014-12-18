angular.module('webAmp')
.controller('dashboardCtrl', [
  '$scope', 'SoundBoardService', 'SoundBoardUI', 'OutputAudioNode', 'GainAudioNode', 'InputAudioNode', 'DelayAudioNode',
  function($scope, SoundBoardService, SoundBoardUI, OutputAudioNode, GainAudioNode, InputAudioNode, DelayAudioNode){

    $scope.audioNodes = SoundBoardService.audioNodes;
    $scope.soundboardUI = new SoundBoardUI(SoundBoardService);

    $scope.createGainNode = function() {
      var node = new GainAudioNode();
      SoundBoardService.addNode(node);
    };

    $scope.createDelayNode = function() {
      var node = new DelayAudioNode();
      SoundBoardService.addNode(node);
    };

    $scope.createInputNode = function() {
      var node = new InputAudioNode();

      node.captureInput(
        function(node){
          console.log("Successfully captured input for:", node.name);
        },
        function(error){
          console.log("Failed to capture input for:", error.name);
        },
        this
      );

      SoundBoardService.addNode(node);
    };

    $scope.createOutputNode = function() {
      var node = new OutputAudioNode();
      SoundBoardService.addNode(node);
    };

    $scope.availableConnections = function(audioNode) {
      return SoundBoardService.availableConnections(audioNode);
    };

    $scope.connectTwoNodes = function(){
      var first = SoundBoardService.audioNodes[0];
      var second = SoundBoardService.audioNodes[1];
      SoundBoardService.connectNodes(first, second);
    };
  }
]);;

