function clearLocalStorage() {
	clearBox('resCon');
	hide_elem('results');
	unhide_elem('options');
	localStorage.clear();
}

function rollDice() {
	var mainSetting = document.getElementById("main-setting").value;
	var firstExpansion = document.getElementById("first-expansion").value;
	var secondExpansion = document.getElementById("second-expansion").value;
	var currentDicePool = dicePool[mainSetting].dice.concat(expansions[firstExpansion].dice, expansions[secondExpansion].dice);
	var effective_die = dicePool[mainSetting].effective_dice + expansions[firstExpansion].effective_dice + expansions[secondExpansion].effective_dice;
	var maxRounds = Math.floor(dicePool[mainSetting].board_size / effective_die);
	var border = (dicePool[mainSetting].dice).length
	var currentRound = document.getElementById("resCon").children.length + 1;
	roundImg = createSquare(200, '#202124', "Round " + currentRound + "/" + maxRounds);
	if (currentRound <= maxRounds) {
		var container = document.createElement("div");
		container.appendChild(roundImg)
		var row = document.createElement("div");
		for (var i = 0; i < currentDicePool.length; i++) {
			if (i == border) {
				row.setAttribute('onclick', "spoiler(this)")
				row.classList.add("disable-dbl-tap-zoom", "blur", "image-row");
				container.appendChild(row);
				var row = document.createElement("div");
			}
			var roll = Math.floor(rand(1, 6));
			var diceImg = document.createElement("img");
			diceImg.height = 200;
			diceImg.width = 200;
			diceImg.src = "dice/" + currentDicePool[i] + roll + ".png";
			row.appendChild(diceImg);
		}
		row.setAttribute('onclick', "spoiler(this)")
		row.classList.add("disable-dbl-tap-zoom", "blur", "image-row");
		container.classList.add("row-container");
		container.appendChild(row)
		resCon.appendChild(container);
	}
}

function rand(min, max) {
	return (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) % (max - min + 1)) + min;
}

function createSquare(size, color, text) {
	var square = document.createElement("div");
	var textNode = document.createTextNode(text);
	square.style.color = "white";
	square.style.backgroundColor = color;
	square.appendChild(textNode);
	square.style.fontSize = 25 + 'px';
	square.style.height = 25 + 'px';
	square.style.lineHeight = 25 + 'px';
	return square;
}

function unhide_elem(elem) {
	var element = document.getElementById(elem);
	element.classList.remove('hidden');
}

function hide_elem(elem) {
	var element = document.getElementById(elem);
	element.classList.add('hidden');
}

function spoiler(elem) {
	elem.classList.toggle('blur');
}

function clearBox(elementID) {
	document.getElementById(elementID).innerHTML = "";
}