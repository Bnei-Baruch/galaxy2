var janusStream;

(function (config) {
    var pluginHandles = [];

    $(function () {
        Janus.init({
            debug: true,
            callback: initCallback
        });
    });

    ////

    function initCallback() {
        // Create session
        janus = new Janus({
            server: "https://galaxy-dev.kbb1.com:8889/janus",
            success: function () {
                // 1 is hard coded value for Video stream
                attachStreamingHandle(11, '#remoteVideo1');
        		attachStreamingHandle(12, '#remoteVideo2');
		        attachStreamingHandle(13, '#remoteVideo3');
        		attachStreamingHandle(14, '#remoteVideo4');
                // 2 is hard coded value for Hebrew audio stream
                //attachStreamingHandle(2, '#remoteAudio');
            },
            error: function(error) {
                displayError(error);
            }
        });

        $(window).unload(function () {
            pluginHandles.forEach(function (handle) {
                var body = { "request": "stop" };
                handle.send({"message": body});
                handle.hangup();
            });

            janus.destroy();
        });
    }

    function attachStreamingHandle(streamId, mediaElementSelector) {
        var streaming;

        janus.attach({
            plugin: "janus.plugin.streaming",
            success: function(pluginHandle) {
                streaming = pluginHandle;
                pluginHandles.push(streaming);

                // Play stream
                var body = { "request": "watch", id: streamId };
                streaming.send({"message": body});
            },
            error: function(error) {
                displayError("Error attaching plugin: " + error);
            },
            onmessage: function (msg, jsep) {
                onStreamingMessage(streaming, msg, jsep);
            },
            onremotestream: function(stream) {
                console.debug("Got a remote stream!", stream);
                janus.attachMediaStream($(mediaElementSelector).get(0), stream);
                janusStream = stream;
            },
            oncleanup: function() {
                console.debug("Got a cleanup notification");
            }
        });
    }

    function onStreamingMessage(handle, msg, jsep) {
        console.debug("Got a message", msg);

        var result = msg.result;

        if(jsep !== undefined && jsep !== null) {
            console.debug("Handling SDP as well...", jsep);

            // Answer
            handle.createAnswer({
                jsep: jsep,
                media: { audioSend: false, videoSend: false },	// We want recvonly audio/video
                success: function(jsep) {
                    console.log("Got SDP!");
                    console.log(jsep);
                    var body = { "request": "start" };
                    handle.send({"message": body, "jsep": jsep});
                },
                error: function(error) {
                    displayError("WebRTC error: " + error);
                }
            });
        }
    }

    function displayError(errorMessage) {
        $('#error')
            .show()
            .find('#message')
            .text(errorMessage);

        console.error(errorMessage);
    }

})(window.config);

