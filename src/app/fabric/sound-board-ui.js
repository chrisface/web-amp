angular.module('fabric')
.factory('SoundBoardUI', [
  '$rootScope', 'FabricCanvas', 'AudioNodeUI', 'AudioNodeConnectionUI',
  function($rootScope, FabricCanvas, AudioNodeUI, AudioNodeConnectionUI){

    var SoundBoardUI = function(soundBoard){
      this.soundBoard = soundBoard;
      this.audioNodeUis = [];
      this.audioNodeConnectionUis = [];
      this.selectedAudioNodeUI = null;

      this.backround = new fabric.Rect({
        stroke: 'red',
        strokeWidth: 5,
        fill: '#fff',
        width: 1800,
        height: 1000,
        selectable: false
      });

      this.soundBoard.on("audioNodeAdded", this.onAudioNodeAdded, this);
      this.soundBoard.on("audioNodeConnected", this.onAudioNodeConnected, this);

      FabricCanvas.add(this);
    };

    SoundBoardUI.prototype.onAudioNodeAdded = function(audioNode){
      var audioNodeUI = new AudioNodeUI(audioNode);

      audioNodeUI.on('audioNodeUIMoved', this.onAudioNodeUIMoved, this);
      audioNodeUI.on("audioNodeUISelected", this.onAudioNodeUISelected, this);
      audioNodeUI.on("audioNodeUIDeselected", this.onAudioNodeUIDeselected, this);

      this.audioNodeUis.push(audioNodeUI);
      FabricCanvas.addAudioNodeUI(audioNodeUI);
    };

    SoundBoardUI.prototype.onAudioNodeConnected = function(audioNodeConnection){
      var fromNode = this.getAudioNodeUIForAudioNode(audioNodeConnection.from);
      var toNode = this.getAudioNodeUIForAudioNode(audioNodeConnection.to);

      var audioNodeConnectionUI = new AudioNodeConnectionUI(audioNodeConnection, fromNode, toNode);
      this.audioNodeConnectionUis.push(audioNodeConnectionUI);
      FabricCanvas.add(audioNodeConnectionUI);
    };

    SoundBoardUI.prototype.onAudioNodeUIMoved = function(audioNodeUI){
      var connectionsFrom = _.select(this.audioNodeConnectionUis, function(audioNodeConnectionUI) {
        return audioNodeConnectionUI.fromAudioNodeUI == audioNodeUI;
      });

      var connectionsTo = _.select(this.audioNodeConnectionUis, function(audioNodeConnectionUI) {
        return audioNodeConnectionUI.toAudioNodeUI == audioNodeUI;
      });

      _.each(connectionsFrom, function(connection){
        connection.setFromPoint(audioNodeUI);
      });

      _.each(connectionsTo, function(connection){
        connection.setToPoint(audioNodeUI);
      });
    };

    SoundBoardUI.prototype.onAudioNodeUISelected = function(audioNodeUI){
      this.selectedAudioNodeUI = audioNodeUI;
      $rootScope.$digest();
    };

    SoundBoardUI.prototype.onAudioNodeUIDeselected = function(audioNodeUI){
      console.log("Deslected a node");
      this.selectedAudioNodeUI = null;

      // Don't trigger a digest if one is already in progress
      if(!$rootScope.$$phase) {
        $rootScope.$digest();
      }
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
