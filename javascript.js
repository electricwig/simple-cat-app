// declare our variables
let newFact = "This is a random fact about a cat which will be displayed in the panel.";
const factText = document.getElementById("fact");

function displayNewCatFact() {
    factText.innerHTML = newFact;
}