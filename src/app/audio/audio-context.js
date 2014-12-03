angular.module('webAmp')
.factory('audioContext', [
  function(){
    var audioContext;

    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();
      console.log('Created web audio context');
    }
    catch(e) {
      console.log('Web Audio API is not supported in this browser');
    }

    return audioContext;
  }
]);
