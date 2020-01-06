// ==UserScript==
// @name         Show Pulse Secure DSID
// @description  Show DSID in Pulse Connect Secure page
// @version      1
// @grant        none
// @include      https://staff.nominet.uk/dana/home/index.cgi
// ==/UserScript==

function getCookie(name) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
    cookie[k.trim()] = v;
  })
  return cookie[name];
}

DSID = getCookie("DSID");

span_el = document.createElement("span");
span_el.innerHTML = "DSID = " + DSID;
span_el.style.fontSize = "20px";
span_el.style.fontFamily = "monospace";

body = document.getElementsByTagName("body")[0];

body.insertBefore(span_el, body.childNodes[0]);
