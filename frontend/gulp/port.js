'use strict';

exports.requirePortOnCommandLine = function() {
  var port = exports.getPortFromCommandLine();
  if (!port) {
    throw "Port not set, please run --port=9876";
  }
}

exports.getPortFromCommandLine = function() {
  var ret = null;
  for (var idx in process.argv) {
    var param = process.argv[idx].replace('--', '');
    if (param.indexOf('port') == 0 && param.indexOf('=') != -1) {
      ret = param.split('=')[1];
      break;
    }
  }
  return ret;
}
