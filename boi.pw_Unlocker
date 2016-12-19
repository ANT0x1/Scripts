// ==UserScript==
// @name          Разблокировщик талантов на boi.pw
// @namespace     ANT0x1
// @version       1.2
// @description   Удаляет рекламу и разблокирует таланты на boi.pw
// @author        ANT0x1
// @include       http://boi.pw/calculator/*
// @include       https://boi.pw/calculator/*
// @updateURL     https://openuserjs.org/meta/ANT0x1/Talent_unlocker_for_boi.pw.meta.js
// @homepage      https://openuserjs.org/scripts/ANT0x1/
// @grant         none
// @copyright     2016, ANT0x1
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
    $(".chat").hide("blind", 1000, function() {
        $(".talants").animate({width: '100%'}, 1000)});
});
