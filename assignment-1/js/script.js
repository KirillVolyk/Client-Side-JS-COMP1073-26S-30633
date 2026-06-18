// make arrays of story possibilities
var part1 = ["A starship", "The Deathstar", "A deep‑space shuttle", "A goofy alien", "A scorching meteor"];
var part2 = ["is firing at", "is ramming into", "is accelerating toward", "is closing in on", "is drifting toward"];
var part3 = ["a distant planet", "the sun", "a black hole", "an abandoned space station", "a galaxy"];
var part4 = ["at incredible speed", "while spinning out of control", "with weapons fully charged", "while shaking violently", "with unstoppable momentum"];
var part5 = ["in deep space", "near the Milky Way", "beyond the asteroid belt", "inside a nebula", "at the edge of the universe"]

// make an index tracker. when button is hit an index is incremented (could reset by diving it by the lenght with modulo? Test it)

// indexes
var index1 = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var index5 = 0;

// incrementing function
function indexInc(index)
{
    
}

// button event
let choiceOne = document.getElementById("btn1")
choiceOne.addEventListener("click", indexInc())
