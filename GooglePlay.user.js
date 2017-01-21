// ==UserScript==
// @name           Google Play: Code Redeemer
// @name:ru        Google Play: Чекер промо-кодов
// @namespace      http://tampermonkey.net/
// @version        1.0
// @date           2017-01-21
// @description    Checks the list of promocodes and finds the free one.
// @description:ru Проверяет список промо-кодов и находит первый свободный.
// @author         ANT0x1
// @icon           https://www.gstatic.com/android/market_images/web/favicon_v2.ico
// @match          https://play.google.com/store?code*
// @grant          none
// @homepage       https://openuserjs.org/scripts/ANT0x1/
// @updateURL      https://openuserjs.org/meta/ANT0x1/Google_Play_Code_Redeemer.meta.js
// @copyright      2017, ANT0x1
// ==/UserScript==

(function() {
    setTimeout(function(){
        'use strict';
        $(".redeem-text-box-container").before("<div id='codesArea' class='redeem-text-box-container' style='height: 200px'><textarea id='promoCodes' placeholder='Список промокодов' rows='10' style='margin-left: 0px; margin-right: 0px; width: 100%;'></textarea> </div>");
        $("#id-redeem-ok-button").after("<button id='id-redeem-check-button' class='play-button neutral id-track-click'> <span>Чек всего списка</span></button>");
        $("#id-redeem-check-button").hide();
        $('#codesArea').hide();
        $('.dialog-image').bind('click', showRedeemer);
        $('.dialog-image').css( 'cursor', 'pointer');
        $('#id-redeem-check-button').bind('click', beginSearch);
        $('.dialog-image').fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    }, 5000);
})();

function isError()
{
    var result = true;
    result = $(".redeem-error-msg")[0] != null;
    result = result || $(".redeem-invalid-code-msg")[0] != null;
    return result;
}

var freeCode = {
    code: null,
    isFree: false
};

function beginSearch()
{
    var codes = $('#promoCodes').val().split('\n');
    var finished = false;
    var i = 0;
    var timerId = setTimeout(function run() {
        if (freeCode.isFree)
        {
            console.log('Free code is found! Value: '+freeCode.code);
            alert('Free code is found! Value: '+freeCode.code);
            return;
        }
        console.log("[" + (i + 1) + "/" + codes.length + "] Trying: " + codes[i] + ".");
        getAnswer(codes[i]);
        i++;
        if (i < codes.length)
            timerId = setTimeout(run, 5000);
    }, 5000);
}

function getAnswer(code) {
    $(".redeem-input-text-box").val(code);
    freeCode.code = code;
    $("#id-redeem-ok-button").click();
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(isError());
        }, 3000);
    });
    promise
        .then(
        result => {
            freeCode.isFree = !result;
            console.log(freeCode);
        }
    );
}

function showRedeemer()
{
    $("#id-redeem-check-button").toggle(1000);
    $("#codesArea").toggle(1000);
}
