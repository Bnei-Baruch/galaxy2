'use strict';

function requirePortOnCommandLine() {
  var port = getPortFromCommandLine();
  if (!port) {
    throw "Port not set, please run --port=9876";
  }
}

function getPortFromCommandLine() {
  var ret = null;
  for (var idx in process.argv) {
    var param = process.argv[idx].replace('--', '');
    if (param.startWith('param') && param.indexOf('=') != -1) {
      ret = param.split('=')[1];
      break;
    }
  }
  return ret;
}
