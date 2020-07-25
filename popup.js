let sortButton = document.getElementById("sort");
sortButton.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            file: "content.js"
        }, function(result) {
            sortButton.innerHTML = "SORTED!";
            setTimeout(function() {
                sortButton.innerHTML = "SORT BY PRICE";
            }, 5000);
        });
    });
};