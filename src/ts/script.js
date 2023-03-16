import { dicePool, expansions } from './dice-data';
export function getDiceList(mainSetting, firstExpansion, secondExpansion) {
    return dicePool[mainSetting].dice.concat(expansions[firstExpansion].dice, expansions[secondExpansion].dice);
}
export function getMaxRounds(mainSetting, firstExpansion, secondExpansion) {
    var _a;
    const effectiveDie = dicePool[mainSetting].effective_dice +
        expansions[firstExpansion].effective_dice +
        expansions[secondExpansion].effective_dice;
    const boardSize = (_a = dicePool[mainSetting].board_size) !== null && _a !== void 0 ? _a : 0;
    return Math.floor(boardSize / effectiveDie);
}
export function setupGame() {
    const mainSetting = document.getElementById('main-setting');
    const firstExpansion = document.getElementById('first-expansion');
    const secondExpansion = document.getElementById('second-expansion');
    const currentDiceList = getDiceList(mainSetting.value, firstExpansion.value, secondExpansion.value);
    const maxRounds = getMaxRounds(mainSetting.value, firstExpansion.value, secondExpansion.value);
    const rowLength = dicePool[mainSetting.value].dice.length;
    return { currentDiceList, maxRounds, rowLength };
}
export function rollDice() {
    const rescon = document.getElementById('resCon');
    const currentRound = rescon.children.length + 1;
    if (currentRound == 1) {
        const _setupGame = setupGame();
        currentDiceList = _setupGame.currentDiceList;
        maxRounds = _setupGame.maxRounds;
        rowLength = _setupGame.rowLength;
    }
    if (currentRound <= maxRounds) {
        const roundImg = createSquare(200, '#202124', 'Round ' + currentRound + '/' + maxRounds);
        // dice + round banner
        const container = document.createElement('div');
        container.appendChild(roundImg);
        // dice
        const row = document.createElement('div');
        for (let i = 0; i < currentDiceList.length; i++) {
            // random
            const roll = Math.floor(rand(1, 6));
            const diceImg = document.createElement('img');
            diceImg.height = 200;
            diceImg.width = 200;
            diceImg.src = 'res/dice/' + currentDiceList[i] + roll + '.png';
            row.appendChild(diceImg);
            // Next Row
            if (i == rowLength - 1 || i == currentDiceList.length - 1) {
                // dice
                row.setAttribute('onclick', 'spoiler(this)');
                row.classList.add('disable-dbl-tap-zoom', 'blur', 'image-row');
                container.appendChild(row);
                row.innerHTML = '';
            }
        }
        container.classList.add('row-container');
        container.appendChild(row);
        rescon.appendChild(container);
    }
}
export function rand(min, max) {
    return ((Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) %
        (max - min + 1)) +
        min);
}
export function createSquare(size, color, text) {
    const square = document.createElement('div');
    const textNode = document.createTextNode(text);
    square.style.color = 'white';
    square.style.backgroundColor = color;
    square.appendChild(textNode);
    square.style.fontSize = 25 + 'px';
    square.style.height = 25 + 'px';
    square.style.lineHeight = 25 + 'px';
    return square;
}
export function unhide_elem(elem) {
    const element = document.getElementById(elem);
    if (element)
        element.classList.remove('hidden');
}
export function hide_elem(elem) {
    const element = document.getElementById(elem);
    if (element)
        element.classList.add('hidden');
}
export function spoiler(elem) {
    const element = document.getElementById(elem);
    if (element)
        element.classList.toggle('blur');
}
export function clearBox(elem) {
    const mainSetting = (document.getElementById('main-setting').value = 'classic');
    const firstExpansion = (document.getElementById('first-expansion').value = 'none');
    const secondExpansion = (document.getElementById('second-expansion').value = 'none');
    document.getElementById(elem).innerHTML = '';
}
export function clearLocalStorage() {
    clearBox('resCon');
    hide_elem('results');
    unhide_elem('options');
    localStorage.clear();
}
