window.addEventListener('load', function() {
	if (localStorage.getItem('pageHTML') !== null) {
		var mainSetting = document.getElementById("main-setting");
		var firstExpansion = document.getElementById("first-expansion");
		var secondExpansion = document.getElementById("second-expansion");
		// load the saved HTML from local storage and set it as the HTML of the body element
		document.body.innerHTML = getLocalStorage('pageHTML');
		mainSetting.value = getLocalStorage('mainSetting');
		firstExpansion.value = getLocalStorage('firstExpansion');
		secondExpansion.value = getLocalStorage('secondExpansion');
	}
});

// function to save data to local storage
function saveProgress(key, value) {
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