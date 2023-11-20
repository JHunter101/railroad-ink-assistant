"use strict";
window.onload = function () {
    const myCookies = localStorage.getItem('railroad-ink-assistant-pageHTML');
    if (myCookies !== null) {
        // load the saved HTML from local storage and set it as the HTML of the body element
        console.log(myCookies);
        document.documentElement.innerHTML = myCookies;
    }
    const form = document.getElementById('main-menu-settings-form');
    if (form !== null) {
        form.addEventListener('change', function (event) {
            saveProgress();
        });
    }
};
// function to save data to local storage
function saveProgress() {
    localStorage.setItem('railroad-ink-assistant-pageHTML', document.documentElement.innerHTML);
}
