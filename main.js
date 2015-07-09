function twenteReady() {
  // here we hijack the submitter event
  var el = document.querySelector("#chatboxspan input[type=button]");
  el.setAttribute("onclick", "return sendchat2();");
  
  // var el2 = document.querySelector("form[name=chatform]");
  var el2 = document.chatform;
  el2.setAttribute("onsubmit", "return sendchat2();");
}

function sendchat2() {
    document.chatform.sum.value = challengesum;
    sendchat();
}

function totofy() {
  // adjust twente to my taste
  waterfallspeed(1);
  waterfallheight(850);
}

// document.addEventListener("DOMContentLoaded", twenteReady, false);
// window.onload = twenteReady;

// it already fires onready??
twenteReady();
totofy();
