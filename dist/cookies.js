"use strict";
window.onload = function () {
    var _a, _b, _c, _d, _e, _f;
    const myCookies = localStorage.getItem('railroad-ink-assistant-pageHTML');
    if (myCookies !== null) {
        // load the saved HTML from local storage and set it as the HTML of the body element
        document.documentElement.innerHTML = myCookies;
    }
    const mainSetting = document.getElementById('main-setting');
    const firstExpansion = document.getElementById('first-expansion');
    const secondExpansion = document.getElementById('second-expansion');
    mainSetting.value = (_a = localStorage.getItem('mainSetting')) !== null && _a !== void 0 ? _a : 'classic';
    firstExpansion.value = (_b = localStorage.getItem('firstExpansion')) !== null && _b !== void 0 ? _b : 'none';
    secondExpansion.value = (_c = localStorage.getItem('secondExpansion')) !== null && _c !== void 0 ? _c : 'none';
    const currentDiceList = ((_d = localStorage.getItem('currentDiceList')) !== null && _d !== void 0 ? _d : '').split(',');
    const maxRounds = (_e = Number(localStorage.getItem('maxRounds'))) !== null && _e !== void 0 ? _e : 0;
    const rowLength = (_f = Number(localStorage.getItem('rowLength'))) !== null && _f !== void 0 ? _f : 0;
};
// function to save data to local storage
function saveProgress() {
    const mainSetting = document.getElementById('main-setting');
    const firstExpansion = document.getElementById('first-expansion');
    const secondExpansion = document.getElementById('second-expansion');
    localStorage.setItem('railroad-ink-assistant-pageHTML', document.documentElement.innerHTML);
    if (mainSetting) {
        localStorage.setItem('mainSetting', mainSetting.value);
    }
    if (firstExpansion) {
        localStorage.setItem('mainSetting', firstExpansion.value);
    }
    if (secondExpansion) {
        localStorage.setItem('mainSetting', secondExpansion.value);
    }
}
