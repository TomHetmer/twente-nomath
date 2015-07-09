function twenteReady() {
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

// document.addEventListener("DOMContentLoaded", twenteReady, false);
//window.onload = twenteReady;

// it already fires onready??
twenteReady();
