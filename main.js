// ==UserScript==
// @name         Blur Filmweb Forum Div
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Blur the forum div on Filmweb, remove blur on click
// @author       Your Name
// @match        https://www.filmweb.pl/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the page to load
    window.addEventListener('load', function() {
        // Select the div with class 'page__group' and data-group='g12'
        const forumDiv = document.querySelector('div.page__group[data-group="g12"]');
        if (forumDiv) {
            // Apply initial styles
            forumDiv.style.filter = 'blur(10px)';
            forumDiv.style.transition = 'filter 0.3s ease, max-height 0.5s ease';
            forumDiv.style.maxHeight = '100px';
            forumDiv.style.overflow = 'hidden';

            // Remove blur and expand height on click
            forumDiv.addEventListener('click', function() {
                forumDiv.style.filter = 'none';
                forumDiv.style.maxHeight = forumDiv.scrollHeight + 'px';
            });
        }
    }, false);
})();