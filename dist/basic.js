"use strict";
function spoiler(element) {
    element.classList.toggle('blur');
}
function toggle_elem(elem) {
    const element = document.getElementById(elem);
    if (element) {
        if (element.classList.contains('hidden')) {
            unhide_elem(elem); // If hidden, unhide the element
        }
        else {
            hide_elem(elem); // If visible, hide the element
        }
    }
}
function unhide_elem(elem) {
    const element = document.getElementById(elem);
    if (element)
        element.classList.remove('hidden');
}
function hide_elem(elem) {
    const element = document.getElementById(elem);
    if (element)
        element.classList.add('hidden');
}
function clearBox(elem) {
    document.getElementById(elem).innerHTML = '';
}
function restart() {
    clearBox('resCon');
    clearBox('game-goals');
    clearBox('rule-container');
    hide_elem('rules');
    hide_elem('rule-container');
    unhide_elem('main-menu');
    unhide_elem('results');
    unhide_elem('game-goals');
    localStorage.clear();
}
function clearLocalStorage() {
    restart();
    const rulesSetting = (document.getElementById('rules-setting').value = 'vanilla');
    const mainSetting = (document.getElementById('main-setting').value = 'classic');
    const goalsSetting = (document.getElementById('goals-setting').value = 'disabled');
    const blueprintSetting = (document.getElementById('blueprint-setting').value = 'disabled');
    const firstExpansion = (document.getElementById('first-expansion').value = 'none');
    const secondExpansion = (document.getElementById('second-expansion').value = 'none');
    const gameSeed = (document.getElementById('game-seed').value = '');
}
// Helpers
function getInputElementValue(id) {
    const inputElement = document.getElementById(id);
    // Check if the element is present before accessing its value
    if (inputElement) {
        return inputElement.value;
    }
    else {
        // Handle the case when the element is not found
        console.error(`Element with id '${id}' not found.`);
        return ''; // or any default value you want
    }
}
function randUniqueItems(myList, amount) {
    if (amount >= myList.length) {
        return myList.slice(); // Return a copy of the original list since all items are unique
    }
    const uniqueItems = new Set();
    while (uniqueItems.size < amount) {
        const randomItem = randItem(myList);
        uniqueItems.add(randomItem);
    }
    return Array.from(uniqueItems);
}
function randItem(myList) {
    if (myList.length === 0) {
        return '';
    }
    const gameSettings = JSON.parse(localStorage.getItem('gameSettings') || 'null') || setupGame();
    let gameSeed = calculateSeed(gameSettings.seed);
    let value = myList[Math.floor(seededRandom(gameSeed) * myList.length)];
    gameSettings.seed = getNextSeed(gameSeed);
    localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
    return value;
}
function calculateSeed(input) {
    if (typeof input === 'number') {
        return input;
    }
    if (input === '') {
        return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    let seed = 0;
    const strInput = input.toString();
    for (let i = 0; i < strInput.length; i++) {
        seed = (seed * 31 + strInput.charCodeAt(i)) & 0x7fffffff;
    }
    return seed;
}
function getNextSeed(seed) {
    seed = (seed * 1664525 + 1013904223) & 0x7fffffff;
    return seed;
}
function seededRandom(seed) {
    const nextSeed = getNextSeed(seed);
    return nextSeed / 0x7fffffff;
}
