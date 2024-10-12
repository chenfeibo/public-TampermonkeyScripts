// ==UserScript==
// @name         Merriam-Webster search shortcut
// @namespace    http://tampermonkey.net/
// @version      2024-10-05
// @description  try to take over the world!
// @author       chenfeibo
// @match        https://www.merriam-webster.com/*
// @downloadURL  https://raw.githubusercontent.com/chenfeibo/public-TampermonkeyScripts/refs/heads/main/Merriam-WebsterSearchShortcut.js
// @updateURL    https://raw.githubusercontent.com/chenfeibo/public-TampermonkeyScripts/refs/heads/main/Merriam-WebsterSearchShortcut.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=merriam-webster.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to focus on the textbox and select all text
    function focusAndSelectTextbox() {
        var textbox = document.getElementById('search-term');
        if (textbox) {
            textbox.focus();
            textbox.select();
        }
    }

    // Add event listener for keydown
    document.addEventListener('keydown', function(e) {
        // Check if Tab is pressed
        if (e.code === 'Tab') {
            e.preventDefault(); // Prevent the default tab behavior
            focusAndSelectTextbox();
        }
    });
})();
