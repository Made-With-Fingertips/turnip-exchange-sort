let priceButton = document.getElementById("price");
priceButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            file: "sortByPrice.js"
        }, function(result) {
            priceButton.innerHTML = "SORTED!";
            setTimeout(function() {
                priceButton.innerHTML = "SORT BY PRICE";
            }, 5000);
        });
    });
};

let waitingButton = document.getElementById("waiting");
waitingButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            file: "sortByWaiting.js"
        }, function(result) {
            waitingButton.innerHTML = "SORTED!";
            setTimeout(function() {
                waitingButton.innerHTML = "SORT BY WAITING";
            }, 5000);
        });
    });
};