window.addEventListener('load', function() {
	if (localStorage.getItem('pageHTML') !== null) {
		// load the saved HTML from local storage and set it as the HTML of the body element
		document.body.innerHTML = getLocalStorage('pageHTML');
	}
});
// function to save data to local storage
function saveProgress(key, value) {
	localStorage.setItem('pageHTML', document.documentElement.innerHTML);
	localStorage.setItem('mainSetting', mainSetting);
	localStorage.setItem('firstExpansion', firstExpansion);
	localStorage.setItem('secondExpansion', secondExpansion);
}
// function to load data from local storage
function getLocalStorage(key) {
	return localStorage.getItem(key);
}