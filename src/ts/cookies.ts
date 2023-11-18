window.onload = function (): void {
  const myCookies = localStorage.getItem('railroad-ink-assistant-pageHTML');
  if (myCookies !== null) {
    // load the saved HTML from local storage and set it as the HTML of the body element
    document.documentElement.innerHTML = myCookies;
  }
};

// function to save data to local storage
function saveProgress() {
  const gameSettings =
    JSON.parse(localStorage.getItem('gameSettings') || 'null') || setupGame();
  localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
  localStorage.setItem(
    'railroad-ink-assistant-pageHTML',
    document.documentElement.innerHTML,
  );
}
