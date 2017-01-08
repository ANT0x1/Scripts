// ==UserScript==
// @name            Talent unlocker for boi.pw
// @name:ru         Разблокировщик талантов на boi.pw
// @namespace       ANT0x1
// @version         1.3.3
// @description     Removes ads, unlocks the talents and hides the chat on boi.pw
// @description:ru  Удаляет рекламу и разблокирует таланты на boi.pw
// @author          ANT0x1
// @match           https://boi.pw/calculator/my_bild.php*
// @updateURL       https://openuserjs.org/meta/ANT0x1/Talent_unlocker_for_boi.pw.meta.js
// @homepage        https://openuserjs.org/scripts/ANT0x1/
// @icon            https://boi.pw/calculator/images/favicon.ico
// @grant           none
// @copyright       2016, ANT0x1
// ==/UserScript==
'use strict';

$(document).ready(function() {
    document.getElementById('reklama').height = 1;
    window.adblock= '1';
    $('.adsbygoogle').hide();
    document.getElementById('reklama').innerHTML = '<iframe height="1" frameborder="0"/>';
    chata = 0;
    var block = document.getElementById('main_block');
    var toRemove = block.childNodes[5]
    block.removeChild(toRemove);
    $(twitch).hide();
    $(".chat").hide();
    $(".talants").width('100%');
});
