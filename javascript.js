// declare our variables
let nextFactSource = "https://catfact.ninja/fact";
let nextFact = "";
let lastFact = "Many cats cannot properly digest cow's milk. Milk and milk products give them diarrhea.";
const factText = document.getElementById("fact");


// on loading of page, retrieve last fact from memory
function displayLastCatFact() {
    // TO-DO: if lastFact does not exist choose one from facts array (?)

    // display last fact on load
    factText.innerHTML = lastFact;
    // retrieve next fact, ready to display when user clicks the 'next fact' button
    fetchNextFact();

    // TO-DO: store current fact in memory as lastFact
}


// display new fact on click and retrieve next fact
function displayNextCatFact() {
    fetchNextFact();
    factText.innerHTML = nextFact;

    // TO-DO: store current fact as last fact in memory
}


// get next fact via Fetch API
// this is an asyncrynous function - TO LEARN FULLY LATER!
async function fetchNextFact() {
    let obj;
    const res = await fetch(nextFactSource);
    // returns json data
    obj = await res.json();
    // we then stringify the part of the json data that we need (the cat fact)
    nextFact = JSON.stringify(obj["fact"]);
}
fetchNextFact();



