angular.module('fabric', []);

angular.module('webAmp.audio.nodes', []);
angular.module('webAmp.audio', ['webAmp.audio.nodes']);
angular.module('webAmp', [
  'webAmp.audio',
  'fabric'
]);
