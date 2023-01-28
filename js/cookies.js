window.addEventListener('load', function() {
	if (localStorage.getItem('pageHTML') !== null) {
		var llmainSetting = document.getElementById("main-setting");
		var llfirstExpansion = document.getElementById("first-expansion");
		var llsecondExpansion = document.getElementById("second-expansion");
		
		console.log(getLocalStorage('mainSetting'));
		console.log(getLocalStorage('firstExpansion'));
		console.log(getLocalStorage('secondExpansion'));
		
		// load the saved HTML from local storage and set it as the HTML of the body element
		document.documentElement.innerHTML = getLocalStorage('pageHTML');
		llmainSetting.value = getLocalStorage('mainSetting');
		llfirstExpansion.value = getLocalStorage('firstExpansion');
		llsecondExpansion.value = getLocalStorage('secondExpansion');
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
	console.log(mainSetting.value);
	console.log(firstExpansion.value);
	console.log(secondExpansion.value);
}

// function to load data from local storage
function getLocalStorage(key) {
	return localStorage.getItem(key);
}