var lang = null, bitrate = null;
var is_connected = false;
var vid, aud, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;

$(function () {
	loadFromLocalStorage();
	intializePlayer();
	janusConnect(errorHander, destroyHandler, callbackFunc, true);
});

function callbackFunc() {
	is_connected = true;
	if (bitrate) {
		janusAttachVideo(bitrate, '#remoteVideo');
		$('#videolocal').append('<button class="btn btn-success btn-xs" id="forward" style="position: absolute; top: 0px; right: 10px; margin: 10px;">' + localStorage.videotext + '</button>')
		$('#bitrate').removeClass('hide').html("Bitrate: " + localStorage.videotext);
	}
	if(lang) {
		janusAttachAudio(lang, '#remoteAudio');
		$('#status').removeClass('hide').html(localStorage.langtext).show();
		$('#lang').removeClass('hide').html("Lang: " + localStorage.langtext).show();
	}
}

$(document).on('click', '#bitratelist li a', function () {
	bitrate = Number($(this).attr("id"));
	localStorage.bitrate = bitrate;
	localStorage.videotext = $(this).text();
	$('#bitrate').removeClass('hide').html("Bitrate: " + $(this).text()).show();
	if (is_connected) {
		janusAttachVideo(bitrate, '#remoteVideo');
	}
	$('#videolocal').append('<button class="btn btn-success btn-xs" id="forward" style="position: absolute; top: 0px; right: 10px; margin: 10px;">' + localStorage.videotext + '</button>')
	if (bitrate === 0) {
	$('#remoteVideo').addClass('hide');
	} else {
	$('#remoteVideo').removeClass('hide');
	}
});

$(document).on('click', '#langlist li a', function () {
	lang = Number($(this).attr("id"));
	localStorage.lang = lang;
	localStorage.langtext = $(this).text();
	$('#lang').removeClass('hide').html("Lang: " + $(this).text()).show();
	if (is_connected) {
		janusAttachAudio(lang, '#remoteAudio');
	}
	$('#status').removeClass('hide').html(localStorage.langtext).show();
});

function loadFromLocalStorage() {
	if(localStorage.lang) {
		lang = Number(localStorage.lang);
	}

	if(localStorage.bitrate) {
		bitrate = Number(localStorage.bitrate);
	}
}

function errorHander() {
		bootbox.dialog({ message  : "We lost connection to server :( Trying within 10 seconds...",});
                window.setTimeout(function(){
			bootbox.hideAll();
			window.location.reload();
                }, 10000);
}

function destroyHandler() {
                window.location.reload();
}

function intializePlayer(){
	// Set object references
	vid = document.getElementById("remoteVideo");
	aud = document.getElementById("remoteAudio");
	playbtn = document.getElementById("playpausebtn");
	seekslider = document.getElementById("seekslider");
	curtimetext = document.getElementById("curtimetext");
	durtimetext = document.getElementById("durtimetext");
	mutebtn = document.getElementById("mutebtn");
	volumeslider = document.getElementById("volumeslider");
	fullscreenbtn = document.getElementById("fullscreenbtn");
	//
	// Add event listeners
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
	mutebtn.addEventListener("click",vidmute,false);
	volumeslider.addEventListener("change",setvolume,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
	// Init dropdowns
	setBitrates();
	setLanguages();
}

function setBitrates() {
	var bitrates = getBitrates();
	var str = "";
	$.each(bitrates, function (key, val) {
		str += "<li><a href='#' id='" + key + "'>" + val + "</a></li>";
	});
	$('#bitratelist').html(str);
}

function setLanguages() {
	var languages = getLanguages();
	var str = "";
	$.each(languages, function (key, hash) {
		str += '<li role="separator" class="divider"></li><li class="dropdown-header"><h5><b><u>' + key + '</u></b></h5></li><li role="separator" class="divider"></li>';
		$.each(hash, function (id, lang) {
                	str += '<li><a href="#" id="' + id + '">' + lang + '</a></li>';
		});
	});
	$('#langlist').html(str);
}

function playPause(){
	if(vid.paused){
		vid.play();
		playbtn.innerHTML = "Pause";
	} else {
		vid.pause();
		playbtn.innerHTML = "Play";
	}
}
function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}
function seektimeupdate(){
	var nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}
function vidmute(){
	if(aud.muted){
		aud.muted = false;
		mutebtn.innerHTML = "Mute";
	} else {
		aud.muted = true;
		mutebtn.innerHTML = "Unmute";
	}
}
function setvolume(){
	aud.volume = volumeslider.value / 100;
}
function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}
