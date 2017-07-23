// ==UserScript==
// @name           twente
// @description    Twente modification script by tCZ.
// @match          http://websdr.ewi.utwente.nl:8901/*
// @version        0.1.22
// ==/UserScript==

function injector() {

/*HERE

function sendchat2() {
    document.chatform.sum.value = challengesum;
    sendchat();
}

function totofy() {
  // adjust twente to my taste
  waterfallspeed(1);
  
  // race condition
  var readyStateCheckInterval = setInterval(function() {
    if (waitingforwaterfalls == 0) {
      clearInterval(readyStateCheckInterval);
      waterfallheight(850);
    }
  }, 100);
}

// easily hook into window onload by leveraging existing scripts :>
if (document.getElementById('chatboxchallenge').innerHTML != "") {
  totofy();
} else {
  window.addEventListener('load', totofy, false);
}

HERE*/

    var here = "HERE";
    var reobj = new RegExp("/\\*"+here+"\\n[\\s\\S]*?\\n"+here+"\\*/", "m");
    str = reobj.exec(injector).toString();
    str = str.replace(new RegExp("/\\*"+here+"\\n",'m'),'').toString();
    str = str.replace(new RegExp("\\n"+here+"\\*/",'m'),'').toString();
    
    var script = document.createElement("script");
    script.textContent = str;
    document.body.appendChild(script);
}

function twenteReady() {
  // here we hijack the submitter event
  // we can do it directly, since we have DOM access
  // but! the return function has to be injected into the js context
  var el = document.querySelector("#chatboxspan input[type=button]");
  el.setAttribute("onclick", "return sendchat2();");
  
  var el2 = document.querySelector("form[name=chatform]");
  el2.setAttribute("onsubmit", "return sendchat2();");
}

// we are fired by a 'document-idle' handler
twenteReady();
injector();
