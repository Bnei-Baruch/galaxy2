'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./common');
var crypto = require('crypto');
var fs = require('fs');
var readlineSync = require('readline-sync');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

// Downloads the selenium webdriver
gulp.task('webdriver-update', $.protractor.webdriver_update);
gulp.task('webdriver-standalone', $.protractor.webdriver_standalone);

function runProtractor (done) {
  var params = process.argv;
  var args = params.length > 3 ? [params[3]] : [];
  console.log('Args:', args);

  gulp.src(path.join(conf.paths.e2e, '/**/*.js'))
    .pipe($.protractor.protractor({
      configFile: 'protractor.conf.js',
      args: args
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    })
    .on('end', function () {
      // Close browser sync server
      browserSync.exit();
      done();
    });
}

gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', ['serve:e2e', 'webdriver-update'], runProtractor);
gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);

function readConfig(path) {
  var buf = fs.readFileSync(path, "utf8").toString();
  return JSON.parse(buf);
}

function writeConfig(config, path) {
  fs.writeFileSync(path, JSON.stringify(config, null, 2));
}

function prompt(text, def) {
  var ret =  readlineSync.question(text + ' [' + def + ']: ')
  if (!ret) {
    ret = def;
  }
  return ret;
}

function promptYesNo(question, def) {
  var answer = '';
  while (answer != 'no' && answer != 'yes') {
    var answer = prompt(question, def);
    if (answer != 'no' && answer != 'yes') {
      console.log('Please answer "yes" or "no".');
    }
  }
  return answer == 'yes';
}

function setUri(config) {
  if (promptYesNo('Change default URIs??', 'no')) {
    config.janus.serverUri = prompt('Please insert janus.serverUri', config.janus.serverUri);
    config.janus.stunUri = prompt('Please insert janus.stunUri', config.janus.stunUri);
    config.janus.titleApiUrl = prompt('Please insert janus.titleApiUrl', config.janus.titleApiUrl);
    config.janus.sdiPorts.large1.forwardIp = prompt('Please insert forwardIp', config.janus.sdiPorts.large1.forwardIp);
    config.janus.sdiPorts.large2.forwardIp = config.janus.sdiPorts.large1.forwardIp;
    config.janus.sdiPorts.small1.forwardIp = config.janus.sdiPorts.large1.forwardIp;
    config.janus.sdiPorts.small2.forwardIp = config.janus.sdiPorts.large1.forwardIp;
    config.janus.sdiPorts.control.forwardIp = config.janus.sdiPorts.large1.forwardIp;
    config.backendUri = prompt('Please insert backendUri', config.backendUri);
  } else {
    if (config.environment != 'production') {
      var dummy_title_api = 'https://not.existing.v4g.kbb1.com:8080/title.php?title=%title%&port=%port%';
      console.log('The env is not production. Changing config.titleApiUrl from ' +
                  config.janus.titleApiUrl + ' to ' + dummy_title_api);
      config.janus.titleApiUrl = dummy_title_api;
    }
  }
}

function setPorts(config) {
  var roomId = streamIdBase = portBase = null;
  if (promptYesNo('Use pseudo-random ports/streamIds', 'yes')) {
    var rand_seed = getRand(getUser());
    var def_num = Math.round(40000 + 10000 * rand_seed);
    config.janus.roomId = streamIdBase = portBase = def_num;
  } else {
    config.janus.roomId = prompt('Please make sure roomId is unique', config.janus.roomId);
    var streamIdBase = prompt('Please enter base streamId (consecutive ~10 ids will be used)', 10);
    var portBase = prompt('Please enter base port (consecutuve ~30 ports will be used)', 10000);
  }

  config.janus.sdiPorts.large1.video.program = portBase++;
  config.janus.sdiPorts.large2.video.program = portBase++;
  config.janus.sdiPorts.small1.video.program = [portBase++, portBase++, portBase++, portBase++];
  config.janus.sdiPorts.small1.video.preview = [portBase++, portBase++, portBase++, portBase++];
  config.janus.sdiPorts.small2.video.program = [portBase++, portBase++, portBase++, portBase++];
  config.janus.sdiPorts.small2.video.preview = [portBase++, portBase++, portBase++, portBase++];
  config.janus.sdiPorts.control.video.program = portBase++;
  config.janus.sdiPorts.control.audio = portBase++;

  config.janus.sdiPorts.large1.video.streamId = streamIdBase++;
  config.janus.sdiPorts.large2.video.streamId = streamIdBase++;
  config.janus.sdiPorts.small1.streamIds.program = streamIdBase++;
  config.janus.sdiPorts.small1.streamIds.preview = streamIdBase++;
  config.janus.sdiPorts.small2.streamIds.program = streamIdBase++;
  config.janus.sdiPorts.small2.streamIds.preview = streamIdBase++;
  config.janus.sdiPorts.control.video.streamId = streamIdBase++;
}

function getUser() {
  var username =  require('child_process').execSync( "whoami", { encoding: 'utf8', timeout: 1000 } );
  return String(username).trim();
}

function hexToInt(hex) {
  return parseInt(hex, 16).toString(10);
}

function getRand(username) {
  var hex = crypto.createHash('md5').update(username).digest('hex');
  var max_hex = new Array(hex.length + 1).join('f');
  return hexToInt(hex) / hexToInt(max_hex);
}

function readJanusConfig(path) {
  var lines = fs.readFileSync(path, "utf8").toString().split("\n");
  var config = {};
  var block = null;
  for (var i in lines) {
    var line = lines[i];
    if (!line.startsWith(';') && line != '') {
      if (line.startsWith('[')) {
        if (block) {
          config[block.block_name] = block;
        }
        // Create new block
        var block_name = line.substring(1, line.length - 1);
        block = { block_name: block_name };
      } else if (line.indexOf('=') != -1) {
        var name = line.split('=')[0].trim();
        var value = line.split('=').slice(1).join('=').trim();
        if (!block) {
          throw 'Cannot read janus config ' + path + ' at line ' + i + ' (key, value outside of block) exiting.';
        }
        block[name] = value;
      } else {
        throw 'Cannot read janus config ' + path + ' at line ' + i + ' exiting.';
      }
    }
  }
  if (block) {
    config[block.block_name] = block;
  }
  return config;
}

function checkConfigs() {
  var testing_config = 'config.testing.json';
  var config = readConfig(testing_config);
  var janus_videoroom_config = '/opt/janus/etc/janus/janus.plugin.videoroom.cfg';
  var videoroom = readJanusConfig(janus_videoroom_config);

  var require_janus_restart = false;
  if (config.janus.roomId in videoroom) {
    console.log('roomId ' + config.janus.roomId + ' exists in janus videoroom plugin config.');
  } else {
    require_janus_restart = true;
    console.log('\nroomId ' + config.janus.roomId + ' does not exists in videoroom config.')
    console.log(['Please append the following to ' + janus_videoroom_config,
                 '> sudo vi ' + janus_videoroom_config + '\n'].join('\n'));
    console.log([
      '; Automatically added roomId block',
      '[' + config.janus.roomId + ']',
      'description = Demo Room ' + config.janus.roomId,
      'secret = adminpwd',
      'publishers = 100',
      'bitrate = 600000',
      'fir_freq = 10',
      'record = false'
    ].join('\n'));
  }

  var janus_streaming_config = '/opt/janus/etc/janus/janus.plugin.streaming.cfg';
  var streaming = readJanusConfig(janus_streaming_config);
  var janus_stream_ids = {}
  for (var block_name in streaming) {
    var block = streaming[block_name];
    if ('id' in block) {
      janus_stream_ids[block.id] = block;
    }
  }
  var streamIds = {};
  streamIds[config.janus.sdiPorts.large1.video.streamId] = config.janus.sdiPorts.large1;

  for (var streamId in streamIds) {
    if (streamId in janus_stream_ids) {
      console.log('streamId ' + streamId + ' exists in janus streaming plugin config.')
    } else {
      require_janus_restart = true;
      console.log('\nstreamId ' + streamId + ' does not exists in streaming plugin config.')
      console.log(['Please append the following to ' + janus_streaming_config,
                   '> sudo vi ' + janus_streaming_config + '\n'].join('\n'));
      console.log([
        '; Automatically added stream block',
        '[auto-generated-stream-' + streamId + '-block]',
        'type = rtp',
        'id = ' + streamId,
        'description = Opus/VP8 live stream coming from gstreamer',
        'audio = no',
        'video = yes',
        'audiortpmap = opus/48000/2',
        'videoport = ' + streamIds[streamId].video.program,
        'videopt = 100',
        'videortpmap = VP8/90000',
        'secret = adminpwd'
      ].join('\n'));
    }
  }

  if (require_janus_restart) {
    console.log(['\nPlease restart janus after editing the configs: ',
                'on-dev> sudo killall janus',
                'on-dev> sudo nohup /opt/janus/bin/janus'].join('\n'));
  } else {
    console.log('Janus configs were not changed, no need to restart janus.');
  }
}

function initConfigs() {
  var testing_config = 'config.testing.json';
  var sample_config = 'config.json.sample';
  fs.exists(testing_config, function(exists) {
    if (!exists) {
      console.log('Copying sample config to testing...');
      fs.writeFileSync(testing_config, fs.readFileSync(sample_config));
    }
    var config = readConfig(testing_config);
    console.log(JSON.stringify(config, null, 2));
    config.environment = prompt('What is this config environment? (production/development)', 'development');
    setUri(config);
    setPorts(config);
    console.log(JSON.stringify(config, null, 2));
    writeConfig(config, testing_config);
  });
}

gulp.task('configs:init', initConfigs);
gulp.task('configs:check', checkConfigs);
