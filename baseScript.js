// ==UserScript==
// @name         ho_tro_vuot_link
// @namespace    http://tampermonkey.net/
// @version      2024-05-18
// @description  solve link
// @author       hectran
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var content = document.body.outerHTML;
    // disable yêu cầu mở tab khác để điếm giờ
    if(content.includes('Click The Ad Below & Keep It Open')) {
        document.hasFocus = () => { return false; }
    }

    // disable check phải luôn dí chuột vào trang để diếm giờ
    if(content.includes('Scroll Down & Wait For The Timer To Continue')) {
        document.hasFocus = () => { return true; }

    }




})();
