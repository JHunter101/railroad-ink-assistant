window.onload = function () {
  if (localStorage.getItem('railroad-ink-assistant-pageHTML') !== null) {
    // load the saved HTML from local storage and set it as the HTML of the body element
    document.documentElement.innerHTML = getLocalStorage('railroad-ink-assistant-pageHTML')
    document.getElementById('main-setting').value = getLocalStorage('mainSetting')
    document.getElementById('first-expansion').value = getLocalStorage('firstExpansion')
    document.getElementById('second-expansion').value = getLocalStorage('secondExpansion')
  }
}
// function to save data to local storage
function saveProgress () {
  const mainSetting = document.getElementById('main-setting')
  const firstExpansion = document.getElementById('first-expansion')
  const secondExpansion = document.getElementById('second-expansion')
  localStorage.setItem('railroad-ink-assistant-pageHTML', document.documentElement.innerHTML)
  localStorage.setItem('mainSetting', mainSetting.value)
  localStorage.setItem('firstExpansion', firstExpansion.value)
  localStorage.setItem('secondExpansion', secondExpansion.value)
}
// function to load data from local storage
function getLocalStorage (key) {
  return localStorage.getItem(key)
}
