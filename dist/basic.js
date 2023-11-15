"use strict";
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
function spoiler(element) {
    element.classList.toggle('blur');
}
function clearBox(elem) {
    const versionSetting = (document.getElementById('version-setting').value = 'vanilla');
    const mainSetting = (document.getElementById('main-setting').value = 'classic');
    const goalsSetting = (document.getElementById('goals-setting').value = 'disabled');
    const blueprintSetting = (document.getElementById('blueprint-setting').value = 'disabled');
    const firstExpansion = (document.getElementById('first-expansion').value = 'none');
    const secondExpansion = (document.getElementById('second-expansion').value = 'none');
    document.getElementById(elem).innerHTML = '';
}
function clearLocalStorage() {
    hide_elem('results');
    hide_elem('game-goals');
    unhide_elem('main-menu');
    localStorage.clear();
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
    return myList[Math.floor(Math.random() * myList.length)];
}
