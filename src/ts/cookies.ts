declare const currentDiceList: string[];
declare const maxRounds: number;
declare const rowLength: number;

window.onload = function (): void {
  const myCookies = localStorage.getItem('railroad-ink-assistant-pageHTML');

  if (myCookies !== null) {
    // load the saved HTML from local storage and set it as the HTML of the body element
    document.documentElement.innerHTML = myCookies;
  }

  const mainSetting = document.getElementById(
    'main-setting',
  ) as HTMLInputElement;
  const firstExpansion = document.getElementById(
    'first-expansion',
  ) as HTMLInputElement;
  const secondExpansion = document.getElementById(
    'second-expansion',
  ) as HTMLInputElement;

  mainSetting.value = localStorage.getItem('mainSetting') ?? '';
  firstExpansion.value = localStorage.getItem('firstExpansion') ?? '';
  secondExpansion.value = localStorage.getItem('secondExpansion') ?? '';

  const currentDiceList = (localStorage.getItem('currentDiceList') ?? '').split(
    ',',
  );
  const maxRounds = Number(localStorage.getItem('maxRounds')) ?? 0;
  const rowLength = Number(localStorage.getItem('rowLength')) ?? 0;
};

// function to save data to local storage
export function saveProgress() {
  const mainSetting = document.getElementById(
    'main-setting',
  ) as HTMLInputElement;
  const firstExpansion = document.getElementById(
    'first-expansion',
  ) as HTMLInputElement;
  const secondExpansion = document.getElementById(
    'second-expansion',
  ) as HTMLInputElement;
  localStorage.setItem(
    'railroad-ink-assistant-pageHTML',
    document.documentElement.innerHTML,
  );

  if (mainSetting) {
    localStorage.setItem('mainSetting', mainSetting.value);
  }
  if (firstExpansion) {
    localStorage.setItem('mainSetting', firstExpansion.value);
  }
  if (secondExpansion) {
    localStorage.setItem('mainSetting', secondExpansion.value);
  }

  if (currentDiceList) {
    localStorage.setItem('currentDiceList', currentDiceList.join(','));
  }
  if (maxRounds) {
    localStorage.setItem('maxRounds', String(maxRounds));
  }
  if (rowLength) {
    localStorage.setItem('rowLength', String(rowLength));
  }
}
