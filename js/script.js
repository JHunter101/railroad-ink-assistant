var dicePool = {
	classic: {
		dice: ["Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultB_"
		],
		effective_dice: 4,
		board_size: 39 // 49
	},
	challenge: {
		dice: ["Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Challenge/images/challenge_defaultA_",
			"Challenge/images/challenge_defaultB_"
		],
		effective_dice: 5,
		board_size: 47 // 49
	},
	giant: {
		dice: ["Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Challenge/images/challenge_defaultA_",
			"Challenge/images/challenge_defaultB_"
		],
		effective_dice: 5,
		board_size: 77 // 81
	},
	epic: {
		dice: ["Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_",
			"Challenge/images/challenge_defaultA_",
			"Challenge/images/challenge_defaultB_",
			"Classic/images/classic_defaultA_",
			"Classic/images/classic_defaultA_"
		],
		effective_dice: 7,
		board_size: 87 // 121
	}
};
var expansions = {
	"none": {
		dice: [],
		effective_dice: 0.5
	},
	"airline": {
		dice: ["Sky/images/sky_airportA_",
			"Sky/images/sky_airportB_"
		],
		effective_dice: 0
	},
	"alien-farmer": {
		dice: ["Future/images/future_alienFarmerA_"],
		effective_dice: 1
	},
	"canyon": {
		dice: ["Yellow/images/yellow_canyonA_",
			"Yellow/images/yellow_canyonA_"
		],
		effective_dice: 0
	},
	"city-builder": {
		dice: ["Future/images/future_citybuilderA_",
			"Future/images/future_citybuilderB_"
		],
		effective_dice: 1
	},
	"construction": {
		dice: ["Engineer/images/engineer_constructionA_"],
		effective_dice: 0
	},
	"desert": {
		dice: ["Yellow/images/yellow_desertA_",
			"Yellow/images/yellow_desertB_"
		],
		effective_dice: 1
	},
	"forest": {
		dice: ["Green/images/green_forestA_",
			"Green/images/green_forestA_"
		],
		effective_dice: 2
	},
	"galactic-invaders": {
		dice: ["Arcade/images/arcade_galacticInvaderA_"],
		effective_dice: 0
	},
	"investigation": {
		dice: ["Cthulu/images/cthulu_investigationA_"],
		effective_dice: 1
	},
	"lake": {
		dice: ["Blue/images/blue_lakeA_",
			"Blue/images/blue_lakeA_"
		],
		effective_dice: 2
	},
	"lava": {
		dice: ["Red/images/red_lavaA_",
			"Red/images/red_lavaA_"
		],
		effective_dice: 2
	},
	"meteor": {
		dice: ["Red/images/red_meteorA_",
			"Red/images/red_meteorB_"
		],
		effective_dice: 1
	},
	"pluck-man": {
		dice: ["Arcade/images/arcade_plucManA_"],
		effective_dice: 0
	},
	"portal": {
		dice: ["Cthulu/images/cthulu_portalA_"],
		effective_dice: 1
	},
	"power-grid": {
		dice: ["Electricity/images/electricity_powergridA_",
			"Electricity/images/electricity_powergridA_"
		],
		effective_dice: 0
	},
	"rainbow": {
		dice: ["Arcade/images/arcade_rainbowA_"],
		effective_dice: 1
	},
	"renovation": {
		dice: ["Engineer/images/engineer_renovationA_",
			"Engineer/images/engineer_renovationA_"
		],
		effective_dice: 0
	},
	"ritual": {
		dice: ["Cthulu/images/cthulu_ritualA_"],
		effective_dice: 1
	},
	"river": {
		dice: ["Blue/images/blue_riverA_",
			"Blue/images/blue_riverA_"
		],
		effective_dice: 2
	},
	"separation": {
		dice: ["Engineer/images/engineer_separationA_"],
		effective_dice: 0
	},
	"special": {
		dice: ["Engineer/images/engineer_specialA_"],
		effective_dice: 0
	},
	"street-lamps": {
		dice: ["Electricity/images/electricity_streetLampsA_",
			"Electricity/images/electricity_streetLampsA_"
		],
		effective_dice: 2
	},
	"superconnection": {
		dice: ["Future/images/future_superconnectionA_"],
		effective_dice: 1
	},
	"tentacle": {
		dice: ["Cthulu/images/cthulu_tentacleA_"],
		effective_dice: 0
	},
	"tetromino": {
		dice: ["Arcade/images/arcade_tetrominoA_"],
		effective_dice: 0
	},
	"trail": {
		dice: ["Green/images/green_trailA_",
			"Green/images/green_trailA_"
		],
		effective_dice: 2
	},
	"underground": {
		dice: ["Underground/images/underground_defaultA_",
			"Underground/images/underground_defaultB_",
			"Underground/images/underground_defaultC_",
			"Underground/images/underground_defaultD_"
		],
		effective_dice: 0
	},
	"weather": {
		dice: ["Sky/images/sky_weatherA_",
			"Sky/images/sky_weatherB_"
		],
		effective_dice: 0
	}
};
var currentRound = 1;

function rollDice() {
	var mainSetting = document.getElementById("main-setting").value;
	var firstExpansion = document.getElementById("first-expansion").value;
	var secondExpansion = document.getElementById("second-expansion").value;
	var currentDicePool = dicePool[mainSetting].dice.concat(expansions[firstExpansion].dice, expansions[secondExpansion].dice);
	var effective_die = dicePool[mainSetting].effective_dice + expansions[firstExpansion].effective_dice + expansions[secondExpansion].effective_dice;
	var maxRounds = Math.floor(dicePool[mainSetting].board_size / effective_die);
	var border = (dicePool[mainSetting].dice).length
	roundImg = createSquare(200, '#202124', "Round " + currentRound + "/" + maxRounds);
	if (currentRound <= maxRounds) {
		currentRound += 1;
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
	currentRound = 1;
	document.getElementById(elementID).innerHTML = "";
}