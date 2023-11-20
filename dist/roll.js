"use strict";
function createRoundBanner(text) {
    const square = document.createElement('div');
    square.classList.add('round-banner');
    square.appendChild(document.createTextNode(text));
    return square;
}
function rollDice() {
    // Collect Memory
    const gameSettings = JSON.parse(localStorage.getItem('gameSettings') || 'null') || setupGame();
    const rescon = document.getElementById('resCon');
    const currentRound = rescon.children.length + 1;
    const { diceList, maxRounds, rowLength } = gameSettings;
    console.log(gameSettings);
    // Roll
    if (currentRound <= maxRounds) {
        // Round
        const roundContainer = document.createElement('div');
        roundContainer.classList.add('row-container');
        roundContainer.appendChild(createRoundBanner(`Round ${currentRound}/${maxRounds}`));
        // Dice
        let diceRow = document.createElement('div');
        for (let i = 0; i < diceList.length; i++) {
            const roll = randItem(['1', '2', '3', '4', '5', '6']);
            const dieIMG = document.createElement('img');
            dieIMG.height = dieIMG.width = 150;
            dieIMG.src = `res/images/dice/${diceList[i]}${roll}.png`;
            diceRow.appendChild(dieIMG);
            // Row break after main dice
            if (i === rowLength - 1 || i === diceList.length - 1) {
                diceRow.setAttribute('onclick', 'spoiler(this)');
                diceRow.classList.add('flex', 'disable-dbl-tap-zoom', 'blur', 'image-row');
                roundContainer.appendChild(diceRow);
                diceRow = document.createElement('div');
            }
        }
        rescon.appendChild(roundContainer);
    }
}
