// ==UserScript==
// @namespace    https://github.com/JackieZheng
// @name         Github1s
// @namespace    https://github.com/conwnet/github1s
// @version      0.2
// @description  One second to read GitHub code with VS Code.
// @author       JackieZheng
// @match        https://github.com/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var github1sBtn = document.createElement("li");
    github1sBtn.innerHTML ='Github1s';
    github1sBtn.className='open-on-sourcegraph btn btn-sm tooltipped tooltipped-s';
    var li=document.getElementsByClassName('pagehead-actions flex-shrink-0 d-none d-md-inline').item(0).getElementsByTagName('li')[0]
    document.getElementsByClassName('pagehead-actions flex-shrink-0 d-none d-md-inline').item(0).insertBefore(github1sBtn,li)
    github1sBtn.onclick=function()
    {
        var href=top.location.href.replace('github.com','github1s.com')
        top.location.href=href;
    }
})();
