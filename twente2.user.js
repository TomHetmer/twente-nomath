// ==UserScript==
// @name           twente
// @description    Twente modification script by tCZ.
// @match          http://websdr.ewi.utwente.nl:8901/*
// @run-at         document-idle
// @grant          none
// @version        0.2-tampermonkey
// @author         totoCZ
// @homepage       https://github.com/TomHetmer/twente-nomath/
// ==/UserScript==

(function() {
    'use strict';

    function sendchat2() {
        document.chatform.sum.value = challengesum;
        sendchat();
    }

    function totofy() {
        // here we hijack the submitter event
        var el = document.querySelector("#chatboxspan input[type=button]");
        el.setAttribute("onclick", "return sendchat2();");

        var el2 = document.querySelector("form[name=chatform]");
        el2.setAttribute("onsubmit", "return sendchat2();");

        // adjust twente to my taste
        waterfallspeed(1);

        // race condition
        var readyStateCheckInterval = setInterval(function() {
            if (waitingforwaterfalls === 0) {
                clearInterval(readyStateCheckInterval);
                waterfallheight(850);
            }
        }, 100);
    }

    // easily hook into window onload by leveraging existing scripts :>
    // document-idle is fine, but we need onload for watefall size
    if (document.getElementById('chatboxchallenge').innerHTML !== "") {
        totofy();
    } else {
        window.addEventListener('load', totofy, false);
    }

}());
