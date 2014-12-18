angular.module('fabric')
.factory('SoundBoardUI', [
  '$rootScope', 'FabricCanvas', 'AudioNodeUI', 'AudioNodeConnectionUI',
  function($rootScope, FabricCanvas, AudioNodeUI, AudioNodeConnectionUI){

    var SoundBoardUI = function(soundBoard){
      this.soundBoard = soundBoard;
      this.audioNodeUis = [];
      this.audioNodeConnectionUis = [];

      this.backround = new fabric.Rect({
        stroke: 'red',
        strokeWidth: 5,
        fill: '#fff',
        width: 500,
        height: 500
      });

      this.soundBoard.on("audioNodeAdded", this.onAudioNodeAdded, this);
      this.soundBoard.on("audioNodeConnected", this.onAudioNodeConnected, this);

      FabricCanvas.add(this);
    };

    SoundBoardUI.prototype.onAudioNodeAdded = function(audioNode){
      var audioNodeUI = new AudioNodeUI(audioNode);

      this.audioNodeUis.push(audioNodeUI);
      FabricCanvas.add(audioNodeUI);
    };

    SoundBoardUI.prototype.onAudioNodeConnected = function(audioNodeConnection){
      var fromNode = this.getAudioNodeUIForAudioNode(audioNodeConnection.from);
      var toNode = this.getAudioNodeUIForAudioNode(audioNodeConnection.to);

      var audioNodeConnectionUI = new AudioNodeConnectionUI(audioNodeConnection, fromNode, toNode);
      this.audioNodeConnectionUis.push(audioNodeConnectionUI);
      FabricCanvas.add(audioNodeConnectionUI);
    };

    SoundBoardUI.prototype.getFabricComponent = function(){
      return this.backround;
    };

    SoundBoardUI.prototype.getAudioNodeUIForAudioNode = function(audioNode){
      return _.find(this.audioNodeUis, {'audioNode': audioNode});
    };

    return SoundBoardUI;
  }
]);
