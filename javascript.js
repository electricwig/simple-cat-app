// declare our variables
let nextFactSource = "https://catfact.ninja/fact";
let nextFact = "";
let lastFact = "Click for a random cat fact.";
const factText = document.getElementById("fact");
const mainPanel = document.getElementById('fact_panel');

mainPanel.addEventListener('click', displayNextCatFact);


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
    fetchCatImage();

    // TO-DO: store current fact as last fact in memory
}


// get next fact via Fetch API
// Note: this is an asyncrynous function - TO LEARN FULLY LATER!
async function fetchNextFact() {
    let obj;
    const res = await fetch(nextFactSource);
    // returns json data
    obj = await res.json();
    // we then stringify the part of the json data that we need (the cat fact)
    nextFact = JSON.stringify(obj["fact"]);
    // and trim off the quotes from the string using the substring function
    nextFact = nextFact.substring(1, (nextFact.length -1));
}
fetchNextFact();


// bonus cat image function - TO-DO: Rewrite as asynch!
function fetchCatImage() {
    let image = document.getElementById("cat-image");
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json())
    .then(json => image.src = json[0].url)
}