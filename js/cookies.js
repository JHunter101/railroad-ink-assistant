window.onload = function() {
	if (localStorage.getItem('pageHTML') !== null) {
		// load the saved HTML from local storage and set it as the HTML of the body element
		document.documentElement.innerHTML = getLocalStorage('pageHTML');
		document.getElementById("main-setting").value = getLocalStorage('mainSetting');
		document.getElementById("first-expansion").value = getLocalStorage('firstExpansion');
		document.getElementById("second-expansion").value = getLocalStorage('secondExpansion');
	}
};
// function to save data to local storage
function saveProgress() {
	var mainSetting = document.getElementById("main-setting");
	var firstExpansion = document.getElementById("first-expansion");
	var secondExpansion = document.getElementById("second-expansion");
	localStorage.setItem('pageHTML', document.documentElement.innerHTML);
	localStorage.setItem('mainSetting', mainSetting.value);
	localStorage.setItem('firstExpansion', firstExpansion.value);
	localStorage.setItem('secondExpansion', secondExpansion.value);
}
// function to load data from local storage
function getLocalStorage(key) {
	return localStorage.getItem(key);
}