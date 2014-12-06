angular.module('webAmp.audio.nodes')
.factory('InputAudioNode', [
  'audioContext', 'AudioNode',
  function(audioContext, AudioNode){

    var InputAudioNode = function(){
      this.node = null;
      this.name = "Input";
    };

    InputAudioNode.prototype = new AudioNode();

    InputAudioNode.prototype.onInputCaptureSuccess = function(stream){
      this.node = audioContext.createMediaStreamSource(stream);
      this.successCallback.apply(this.callbackScope, [this]);
    };

    InputAudioNode.prototype.onInputCaptureFailure = function(error){
      this.failureCallback.apply(this.callbackScope, [error]);
    };

    InputAudioNode.prototype.captureInput = function(successCallback, failureCallback, scope){
      this.successCallback = successCallback;
      this.failureCallback = failureCallback;
      this.callbackScope = scope;

      var scope = this;

      navigator.webkitGetUserMedia(
        {audio: true},
        function(){ scope.onInputCaptureSuccess.apply(scope, arguments) },
        function(){ scope.onInputCaptureFailure.apply(scope, arguments) }
      );
    };

    InputAudioNode.prototype.isInputCaptured = function(){
      return this.node != null;
    };

    return InputAudioNode;
  }
]);
