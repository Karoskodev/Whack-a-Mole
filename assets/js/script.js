
//variable to keep track of the current hole where the mole is spawned
let currentHole;

//variable to track whether the game is running or not
let isRunning = false;

let interval;


// wait for Dom to finish loading before runing the game
document.addEventListener("DOMContentLoaded", function() {

    //start the game when the user clicks the button
    let button = document.getElementById("start")
    button.addEventListener("click", runGame); 
    
})

//spawn a mole every 800ms and prevent multiple functions from running at the same time
function runGame () {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(setMole, 800);
    } else {
        clearInterval(interval); //
        interval = setInterval(setMole, 800);
    }
}
 
//generate a random number between 0 and 5 
function randomNumber() {
    let num = Math.floor(Math.random()*6);
    return num.toString();
}

//Set the mole image in a random hole
function setMole () {

    //remove the mole from the previous hole
    if (currentHole) {
        currentHole.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "../assets/images/mole.png"

    //Choose a random hole to put the mole in
    let num = randomNumber();
    currentHole = document.getElementById(num)
    currentHole.appendChild(mole);
 
}