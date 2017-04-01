// ==UserScript==
// @name            HDRezka Player Ads Disabler [1/2]
// @name:en         HDRezka Player Ads Disabler [1/2]
// @namespace       ANT0x1
// @version         1.3.1
// @date            2017-04-01
// @description     Отключает рекламу в плеере на HDRezka.
// @description:en  Disables all ads in player on site HDRezka.
// @author          ANT0x1
// @match           http://*.cdnapponline.com/*/iframe*
// @icon            http://hdrezka.me/templates/hdrezka/images/favicon.ico
// @updateURL       https://openuserjs.org/meta/ANT0x1/HDRezka_Player_Ads_Disabler_[12].meta.js
// @downloadURL     https://openuserjs.org/install/ANT0x1/HDRezka_Player_Ads_Disabler_[12].user.js
// @run-at          document-end
// @homepage        https://openuserjs.org/scripts/ANT0x1/
// @grant           none
// @copyright       2016, ANT0x1
// ==/UserScript==

(function() {
    'use strict';
    adv_enabled = false;
    showVideo();
    console.log("Ads disabled [1/2].");
})();
