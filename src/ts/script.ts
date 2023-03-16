import { dicePool, dicePoolType, expansions } from './dice-data';
declare let currentDiceList: string[];
declare let maxRounds: number;
declare let rowLength: number;

export function getDiceList(
  mainSetting: string,
  firstExpansion: string,
  secondExpansion: string,
): string[] {
  return dicePool[mainSetting].dice.concat(
    expansions[firstExpansion].dice,
    expansions[secondExpansion].dice,
  );
}

export function getMaxRounds(
  mainSetting: string,
  firstExpansion: string,
  secondExpansion: string,
): number {
  const effectiveDie =
    dicePool[mainSetting].effective_dice +
    expansions[firstExpansion].effective_dice +
    expansions[secondExpansion].effective_dice;
  const boardSize = dicePool[mainSetting].board_size ?? 0;
  return Math.floor(boardSize / effectiveDie);
}

export function setupGame(): {
  currentDiceList: string[];
  maxRounds: number;
  rowLength: number;
} {
  const mainSetting = document.getElementById(
    'main-setting',
  ) as HTMLInputElement;
  const firstExpansion = document.getElementById(
    'first-expansion',
  ) as HTMLInputElement;
  const secondExpansion = document.getElementById(
    'second-expansion',
  ) as HTMLInputElement;

  const currentDiceList = getDiceList(
    mainSetting.value,
    firstExpansion.value,
    secondExpansion.value,
  );

  const maxRounds = getMaxRounds(
    mainSetting.value,
    firstExpansion.value,
    secondExpansion.value,
  );

  const rowLength = dicePool[mainSetting.value].dice.length;

  return { currentDiceList, maxRounds, rowLength };
}

export function rollDice(): void {
  const rescon = document.getElementById('resCon') as HTMLInputElement;
  const currentRound = rescon.children.length + 1;

  if (currentRound == 1) {
    const _setupGame = setupGame();
    currentDiceList = _setupGame.currentDiceList;
    maxRounds = _setupGame.maxRounds;
    rowLength = _setupGame.rowLength;
  }

  if (currentRound <= maxRounds) {
    const roundImg = createSquare(
      200,
      '#202124',
      'Round ' + currentRound + '/' + maxRounds,
    );

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

export function rand(min: number, max: number): number {
  return (
    (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) %
      (max - min + 1)) +
    min
  );
}

export function createSquare(
  size: number,
  color: string,
  text: string,
): HTMLDivElement {
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

export function unhide_elem(elem: string): void {
  const element = document.getElementById(elem);

  if (element) element.classList.remove('hidden');
}

export function hide_elem(elem: string): void {
  const element = document.getElementById(elem);
  if (element) element.classList.add('hidden');
}

export function spoiler(elem: string): void {
  const element = document.getElementById(elem);
  if (element) element.classList.toggle('blur');
}

export function clearBox(elem: string): void {
  const mainSetting = ((
    document.getElementById('main-setting') as HTMLInputElement
  ).value = 'classic');

  const firstExpansion = ((
    document.getElementById('first-expansion') as HTMLInputElement
  ).value = 'none');

  const secondExpansion = ((
    document.getElementById('second-expansion') as HTMLInputElement
  ).value = 'none');

  (document.getElementById(elem) as HTMLInputElement).innerHTML = '';
}

export function clearLocalStorage(): void {
  clearBox('resCon');
  hide_elem('results');
  unhide_elem('options');
  localStorage.clear();
}
