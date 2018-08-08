// ==UserScript==
// @name            HDRezka Assistant
// @name:en         HDRezka Assistant
// @namespace       ANT0x1
// @version         2.0.2
// @date            2018-08-08
// @description     Расширяет функционал плеера HDRezka.
// @description:en  Extends player functionality on HDRezka.
// @author          ANT0x1
// @match           http://*.abbanole.com/*/iframe*
// @icon            http://hdrezka.me/templates/hdrezka/images/favicon.ico
// @updateURL       https://openuserjs.org/meta/ANT0x1/HDRezka_Assistant.meta.js
// @downloadURL     https://openuserjs.org/install/ANT0x1/HDRezka_Assistant.user.js
// @run-at          document-end
// @homepage        https://openuserjs.org/scripts/ANT0x1/
// @grant           none
// @copyright       2018, ANT0x1
// @license         CC-BY-NC-SA-4.0; https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode
// @license         GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @namespace       ANT0x1
// ==/UserScript==

// ==OpenUserJS==
// @author          ANT0x1
// ==/OpenUserJS==

(function() {
    'use strict';
    removeAds();
})();

var currentVideo = {
	position: 0,
	isFinished: false,
	volume: 100
}

function removeAds(){
    setTimeout(function(){
        if (typeof player === 'undefined') {
            removeAds();
        }
        else {
            if (typeof player.vast === 'undefined' || typeof player.vast.remove === 'undefined'){
                removeAds();
            }
            else{
                player.vast.remove();
                console.log("[Assistant] Ads disabled.");
                playVideo();
            }
        }
    }, 2000);
}

function playVideo(){
    setTimeout(function(){
        if (typeof player === 'undefined' || typeof player.api === 'undefined'){
            playVideo();
            return;
        }
		
		player.api.play();
		
		console.log("[Assistant] Playing.");
		
		restoreFromStorage(); 

		api.fullscreen();
		console.log("[Assistant] Set to fullscreen.");

		player.api.setVolume(currentVideo.volume);		
		
		autoSave();
		        
    }, 2000);
}

function autoSave(){
	var timeout = api.paused ? 20000 : 5000;
		
	setTimeout(function(){
			savePosition();
			
			if (!api.paused)
				saveToStorage();
						
			if (!currentVideo.isFinished)
				autoSave();
			
		}, timeout);
}

function savePosition(){
	currentVideo.position = _mw_current_time;
	currentVideo.volume = api.volumeLevel;
	currentVideo.isFinished = api.finished;
}

function restorePosition(){
	
	if (currentVideo.position > 0){
		player.api.seek(currentVideo.position);
		console.log("[Assistant] Position restored to "+currentVideo.position+' sec.');
	}
}

function saveToStorage(){
	var videos = JSON.parse(localStorage.getItem('videos'));
	
	if (!videos)
		videos = {};
	
	videos[video_balancer.options.video_token] = currentVideo;
	localStorage.setItem('videos', JSON.stringify(videos));
	
	console.log('[Assistant] Saved to storage');
}

function restoreFromStorage(){
	var videos = JSON.parse(localStorage.getItem('videos'));
	
	if (!videos)
	{
		videos = {};
	}
	
	currentVideo = videos[video_balancer.options.video_token];
	
	if (!currentVideo){
		currentVideo = {
			position: 0,
			isFinished: false,
			volume: api.volumeLevel
		}
	}
	
	console.log('[Assistant] Restored from storage');
	
	if (!currentVideo.isFinished)
		restorePosition();
	else
		currentVideo.isFinished = false;
}
