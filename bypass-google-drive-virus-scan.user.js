// ==UserScript==
// @name         Bypass Google Drive virus scan
// @namespace    https://konayuki.moe/
// @version      1.0.1
// @description  Bypass Google Drive virus scan
// @author       Proflylab
// @icon         https://avatars1.githubusercontent.com/u/27909158?s=460&v=4
// @match        https://drive.google.com/file/d/*
// @match        https://drive.google.com/uc?id=*
// @match        https://docs.google.com/uc?id=*
// @grant        window.close
// ==/UserScript==

(function () {
    let bypass = document.getElementById("uc-download-link");
    if (bypass) {
        bypass.click();
        document.title = "Bypass Google Drive virus scan";
        document.body.innerHTML = document.getElementsByClassName("uc-name-size")[0].getElementsByTagName("a")[0].innerHTML + "... after 5 second will close the window.";
        setTimeout(() => window.close(), 5000);
    }
    let err = document.getElementsByClassName("uc-error-caption");
    if (err){
        document.title = "Bypass Google Drive virus scan";
        document.body.innerHTML = err[0].innerHTML + "... after 5 second will close the window.";
        setTimeout(() => window.close(), 5000);
    }
})();
