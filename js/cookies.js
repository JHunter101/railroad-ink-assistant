window.addEventListener('load', function() {
    var htmlContent = getCookie('html_content');document.documentElement.outerHTML = getLocalStorage('pageHTML');
});

// function to save data to local storage
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

// function to load data from local storage
function getLocalStorage(key) {
  return localStorage.getItem(key);
}





