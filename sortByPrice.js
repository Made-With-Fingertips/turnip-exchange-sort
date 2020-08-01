var rawNotes = document.getElementsByClassName("note");

var notes = {};
var prices = {};

for (let index = 0; index < rawNotes.length; index++) {
    const element = rawNotes[index];
    let turnipCode = element.dataset.turnipCode;

    if (turnipCode) {
        notes[turnipCode] = element.outerHTML;

        let price = parseInt(element.getElementsByTagName("p")[3].innerHTML.split(" ")[0]);
        prices[turnipCode] = price;
    }
}

var keys = Object.keys(prices);
keys.sort(function(a, b) { return prices[b] - prices[a] });

var noteContainer = document.getElementsByClassName("grid grid-flow-row grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center items-center mb-4");
if (noteContainer[0]) {
    noteContainer[0].innerHTML = "";

    let newHtml = "";
    for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        newHtml += notes[element];
    }

    noteContainer[0].innerHTML = newHtml;
}