angular.module('fabric')
.factory('SoundBoardUI', [
  '$rootScope', 'FabricCanvas', 'AudioNodeUI',
  function($rootScope, FabricCanvas, AudioNodeUI){

    var SoundBoardUI = function(soundBoard){
      this.scope = $rootScope.$new();
      this.scope.audioNodeUis = [];

      this.scope.backround = new fabric.Rect({
        stroke: 'red',
        strokeWidth: 5,
        fill: '#fff',
        width: 500,
        height: 500
      });

      this.scope.$on("audioNodeAdded", this.onAudioNodeAdded);

      FabricCanvas.add(this);
    };

    SoundBoardUI.prototype.onAudioNodeAdded = function(event, audioNode){
      var audioNodeUI = new AudioNodeUI(audioNode);
      console.log(audioNode);
      event.currentScope.audioNodeUis.push(audioNodeUI);
      FabricCanvas.add(audioNodeUI);
    };

    SoundBoardUI.prototype.getFabricComponent = function(){
      return this.scope.backround;
    };

    return SoundBoardUI;
  }
]);
