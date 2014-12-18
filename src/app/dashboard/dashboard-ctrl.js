angular.module('webAmp')
.controller('dashboardCtrl', [
  '$scope', 'SoundBoardService', 'SoundBoardUI', 'OutputAudioNode', 'GainAudioNode', 'InputAudioNode', 'DelayAudioNode', 'FabricCanvas',
  function($scope, SoundBoardService, SoundBoardUI, OutputAudioNode, GainAudioNode, InputAudioNode, DelayAudioNode, FabricCanvas){

    $scope.audioNodes = SoundBoardService.audioNodes;
    $scope.soundboardUI = new SoundBoardUI(SoundBoardService);
    // $scope.audioNodeSelection = $scope.soundboardUI.selectedAudioNodeUI;
    this.firstNode = null;
    this.secondNode = null;

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

    $scope.connectNode = function(){

      if (!this.firstNode){
        this.firstNode = $scope.soundboardUI.selectedAudioNodeUI;
      }
      else{
        if ($scope.soundboardUI.selectedAudioNodeUI != this.firstNode){
          this.secondNode = $scope.soundboardUI.selectedAudioNodeUI;
          SoundBoardService.connectNodes(this.firstNode.audioNode, this.secondNode.audioNode);
          this.firstNode = null;
          this.secondNode = null;
        }
      }

      console.log(this.firstNode, this.secondNode);


    };
  }
]);;

