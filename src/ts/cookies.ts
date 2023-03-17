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

  mainSetting.value = localStorage.getItem('mainSetting') ?? 'classic';
  firstExpansion.value = localStorage.getItem('firstExpansion') ?? 'none';
  secondExpansion.value = localStorage.getItem('secondExpansion') ?? 'none';
};

// function to save data to local storage
function saveProgress() {
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
}
