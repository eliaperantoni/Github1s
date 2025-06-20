// ==UserScript==
// @name         Github1s
// @namespace    https://github.com/eliaperantoni/Github1s
// @version      0.5
// @description  One second to read GitHub code with VS Code.
// @author       JackieZheng & EliaPerantoni
// @match        https://github.com/*/*
// @supportURL   https://github.com/eliaperantoni/Github1s/issues
// @icon         https://github1s.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';
    var github1sBtn = document.createElement("li");
    github1sBtn.innerHTML ='Github1s';
    github1sBtn.className='btn btn-sm';
    github1sBtn.style.background = '#8c7ae6';
    github1sBtn.style.color = 'white';
    github1sBtn.style.borderColor = 'rgb(97, 78, 198)';
    var ul = document.getElementsByClassName('pagehead-actions').item(0);
    ul.insertBefore(github1sBtn, ul.children[0]);
    github1sBtn.onclick=function()
    {
        var href=top.location.href.replace('github.com','github1s.com')
        top.location.href=href;
    }
})();
