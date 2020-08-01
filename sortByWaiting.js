var rawNotes = document.getElementsByClassName("note");

var notes = {};
var waiting = {};

for (let index = 0; index < rawNotes.length; index++) {
    const element = rawNotes[index];
    let turnipCode = element.dataset.turnipCode;

    if (turnipCode) {
        notes[turnipCode] = element.outerHTML;

        let p = element.getElementsByTagName("p");
        let wait = parseInt(p[p.length - 1].innerHTML.split(" ")[2].split("/")[0]);
        waiting[turnipCode] = wait;
    }
}

var keys = Object.keys(waiting);
keys.sort(function(a, b) { return waiting[a] - waiting[b] });

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