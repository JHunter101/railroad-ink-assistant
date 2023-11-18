"use strict";
const baseGameResData = {
    classic: {
        dice: [
            'classic_defaultA_',
            'classic_defaultA_',
            'classic_defaultA_',
            'classic_defaultB_',
        ],
        goals: [
            'classic_defaultA',
            // 'classic_defaultB', removed as it is impossible to score
            'classic_defaultC',
            'classic_defaultD',
            'classic_defaultE',
            'classic_defaultF',
            'classic_defaultG',
            'classic_defaultH',
            'classic_defaultI',
            'classic_defaultJ',
            'classic_defaultK',
            'classic_defaultL',
        ],
        blueprints: [],
        effective_dice: 4,
        board_size: 39, // 49
    },
    challenge: {
        dice: [
            'classic_defaultA_',
            'classic_defaultA_',
            'challenge_defaultA_',
            'challenge_defaultB_',
        ],
        goals: [
            'classic_defaultA',
            'classic_defaultB',
            'classic_defaultC',
            'classic_defaultD',
            'classic_defaultE',
            'classic_defaultF',
            'classic_defaultG',
            'classic_defaultH',
            'classic_defaultI',
            'classic_defaultJ',
            'classic_defaultK',
            'classic_defaultL',
        ],
        blueprints: [],
        effective_dice: 5,
        board_size: 47, // 49
    },
    giant: {
        dice: [
            'classic_defaultA_',
            'classic_defaultA_',
            'challenge_defaultA_',
            'challenge_defaultB_',
        ],
        blueprints: [],
        goals: [
            'classic_defaultA',
            'classic_defaultB',
            'classic_defaultC',
            'classic_defaultD',
            'classic_defaultE',
            'classic_defaultF',
            'classic_defaultG',
            'classic_defaultH',
            'classic_defaultI',
            'classic_defaultJ',
            'classic_defaultK',
            'classic_defaultL',
        ],
        effective_dice: 5,
        board_size: 77, // 81
    },
    epic: {
        dice: [
            'classic_defaultA_',
            'classic_defaultA_',
            'challenge_defaultA_',
            'challenge_defaultB_',
            'classic_defaultA_',
            'classic_defaultA_',
        ],
        blueprints: [],
        goals: [
            'classic_defaultA',
            'classic_defaultB',
            'classic_defaultC',
            'classic_defaultD',
            'classic_defaultE',
            'classic_defaultF',
            'classic_defaultG',
            'classic_defaultH',
            'classic_defaultI',
            'classic_defaultJ',
            'classic_defaultK',
            'classic_defaultL',
        ],
        effective_dice: 7,
        board_size: 87, // 121
    },
};
const expansionsGameResData = {
    none: {
        dice: [],
        goals: [],
        effective_dice: 0.5,
    },
    airline: {
        dice: ['sky_airportA_', 'sky_airportB_'],
        goals: [],
        effective_dice: 0.5,
    },
    'alien-farmer': {
        dice: ['future_alienFarmerA_'],
        goals: [],
        effective_dice: 1,
    },
    canyon: {
        dice: ['yellow_canyonA_', 'yellow_canyonA_'],
        goals: [],
        effective_dice: 0.5,
    },
    'city-builder': {
        dice: ['future_cityBuilderA_', 'future_cityBuilderB_'],
        goals: [],
        effective_dice: 1,
    },
    construction: {
        dice: ['engineer_constructionA_'],
        goals: [],
        effective_dice: 0.5,
    },
    desert: {
        dice: ['yellow_desertA_', 'yellow_desertB_'],
        goals: ['yellow_desertA', 'yellow_desertB', 'yellow_desertC'],
        effective_dice: 1,
    },
    forest: {
        dice: ['green_forestA_', 'green_forestA_'],
        goals: ['green_forestA', 'green_forestB', 'green_forestC'],
        effective_dice: 2,
    },
    'galactic-invaders': {
        dice: ['arcade_galacticInvaderA_'],
        goals: [],
        effective_dice: 0.5,
    },
    investigation: {
        dice: ['cthulu_investigationA_'],
        goals: [],
        effective_dice: 1,
    },
    lake: {
        dice: ['blue_lakeA_', 'blue_lakeA_'],
        goals: ['blue_lakeA', 'blue_lakeB', 'blue_lakeC'],
        effective_dice: 2,
    },
    lava: {
        dice: ['red_lavaA_', 'red_lavaA_'],
        goals: ['red_lavaA', 'red_lavaB', 'red_lavaC'],
        effective_dice: 2,
    },
    meteor: {
        dice: ['red_meteorA_', 'red_meteorB_'],
        goals: ['red_meteorA', 'red_meteorB', 'red_meteorC'],
        effective_dice: 1,
    },
    'pluck-man': {
        dice: ['arcade_plucManA_'],
        goals: [],
        effective_dice: 0.5,
    },
    portal: {
        dice: ['cthulu_portalA_'],
        goals: ['cthulu_portalA', 'cthulu_portalB', 'cthulu_portalC'],
        effective_dice: 1,
    },
    'power-grid': {
        dice: ['electricity_powerGridA_', 'electricity_powerGridA_'],
        goals: [],
        effective_dice: 0.5,
    },
    rainbow: {
        dice: ['arcade_rainbowA_'],
        goals: [],
        effective_dice: 1,
    },
    renovation: {
        dice: ['engineer_renovationA_', 'engineer_renovationA_'],
        goals: [],
        effective_dice: 0.5,
    },
    ritual: {
        dice: ['cthulu_ritualA_'],
        goals: [],
        effective_dice: 1,
    },
    river: {
        dice: ['blue_riverA_', 'blue_riverA_'],
        goals: ['blue_riverA', 'blue_riverB', 'blue_riverC'],
        effective_dice: 2,
    },
    separation: {
        dice: ['engineer_separationA_'],
        goals: [],
        effective_dice: 0.5,
    },
    special: {
        dice: ['engineer_specialA_'],
        goals: [],
        effective_dice: 0.5,
    },
    'street-lamps': {
        dice: ['electricity_streetLampsA_', 'electricity_streetLampsA_'],
        goals: [],
        effective_dice: 2,
    },
    superconnection: {
        dice: ['future_superconnectionA_'],
        goals: [],
        effective_dice: 1,
    },
    tentacle: {
        dice: ['cthulu_tentaclesA_'],
        goals: [],
        effective_dice: 0.5,
    },
    tetromino: {
        dice: ['arcade_tetrominoA_'],
        goals: [],
        effective_dice: 0.5,
    },
    trail: {
        dice: ['green_trailsA_', 'green_trailsA_'],
        goals: ['green_trailsA', 'green_trailsB', 'green_trailsC'],
        effective_dice: 2,
    },
    underground: {
        dice: [
            'underground_defaultA_',
            'underground_defaultB_',
            'underground_defaultC_',
            'underground_defaultD_',
        ],
        goals: [],
        effective_dice: 0.5,
    },
    weather: {
        dice: ['sky_weatherA_', 'sky_weatherA_'],
        goals: [],
        effective_dice: 0.5,
    },
};
// COMPS
function setupDiceList({ mainSetting, firstExpansion, secondExpansion, }) {
    return baseGameResData[mainSetting].dice.concat(expansionsGameResData[firstExpansion].dice, expansionsGameResData[secondExpansion].dice);
}
function setupGoalsList({ mainSetting, firstExpansion, secondExpansion, goalSetting, }) {
    if (goalSetting === 'disabled') {
        return [];
    }
    const getGoals = (expansion) => expansion !== 'none' ? expansionsGameResData[expansion].goals : [];
    const firstGoals = getGoals(firstExpansion);
    const secondGoals = getGoals(secondExpansion);
    const mainGoals = baseGameResData[mainSetting].goals;
    const myGoalsList = [];
    if (firstExpansion === secondExpansion) {
        myGoalsList.push(...randUniqueItems(firstGoals, 2));
    }
    else {
        myGoalsList.push(...randUniqueItems(firstGoals, 1));
        myGoalsList.push(...randUniqueItems(secondGoals, 1));
    }
    myGoalsList.push(...randUniqueItems(mainGoals, 3 - myGoalsList.length));
    // Goals
    const goalsRow = document.getElementById('game-goals');
    for (let i = 0; i < myGoalsList.length; i++) {
        const goalBox = document.createElement('div'); // Create a new goalBox for each iteration
        goalBox.classList.add('goal-box');
        const goalIMG = document.createElement('img');
        goalIMG.height = 350;
        goalIMG.width = 250; // Fixed the typo: height to width
        goalIMG.src = `res/images/cards/goals/${myGoalsList[i]}.jpg`;
        goalBox.appendChild(goalIMG);
        goalsRow.appendChild(goalBox);
    }
    unhide_elem('game-goals');
    return myGoalsList;
}
function setupBlueprint({ mainSetting, firstExpansion, secondExpansion, blueprintSetting, }) {
    var _a;
    const blueprints = (_a = baseGameResData[mainSetting]) === null || _a === void 0 ? void 0 : _a.blueprints;
    if (blueprints && blueprints.length > 0) {
        const myBlueprint = randItem(blueprints);
        // TODO
        return myBlueprint;
    }
    return '';
}
function setRowLength({ mainSetting, firstExpansion, secondExpansion, }) {
    return baseGameResData[mainSetting].dice.length;
}
function setMaxRounds({ mainSetting, firstExpansion, secondExpansion, }) {
    var _a;
    const effectiveDie = baseGameResData[mainSetting].effective_dice +
        expansionsGameResData[firstExpansion].effective_dice +
        expansionsGameResData[secondExpansion].effective_dice;
    const boardSize = (_a = baseGameResData[mainSetting].board_size) !== null && _a !== void 0 ? _a : 0;
    return Math.floor(boardSize / effectiveDie);
}
// MAIN
function resetGameSettings() {
    return {
        newGame: true,
        rulesSetting: '',
        mainSetting: '',
        goalSetting: '',
        blueprintSetting: '',
        firstExpansion: '',
        secondExpansion: '',
        diceList: [],
        goalList: [],
        blueprint: '',
        rowLength: 0,
        maxRounds: 0,
    };
}
function setupGame() {
    const gameSettings = resetGameSettings();
    gameSettings.newGame = false;
    gameSettings.rulesSetting = getInputElementValue('rules-setting');
    gameSettings.mainSetting = getInputElementValue('main-setting');
    gameSettings.goalSetting = getInputElementValue('goals-setting');
    gameSettings.blueprintSetting = getInputElementValue('blueprint-setting');
    gameSettings.firstExpansion = getInputElementValue('first-expansion');
    gameSettings.secondExpansion = getInputElementValue('second-expansion');
    gameSettings.diceList = setupDiceList(gameSettings);
    gameSettings.goalList = setupGoalsList(gameSettings);
    gameSettings.blueprint = setupBlueprint(gameSettings);
    gameSettings.rowLength = setRowLength(gameSettings);
    gameSettings.maxRounds = setMaxRounds(gameSettings);
    // Convert gameSettings to a JSON string and store in local storage
    localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
    return gameSettings;
}
