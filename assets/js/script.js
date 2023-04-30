// Wait for Dom to finish loading before runing the game

let currentHole;
let isRunning = false;
let interval

document.addEventListener("DOMContentLoaded", function() {

    let button = document.getElementById("start")
    button.addEventListener("click", runGame);
    
})

function runGame () {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(setMole, 1500);
    } else {
        clearInterval(intervalId);
        intervalId = setInterval(setMole, 1500);
    }
}



    
function randomNumber() {
    let num = Math.floor(Math.random()*6);
    return num.toString();
}

function setMole () {

    if (currentHole) {
        currentHole.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "../assets/images/mole.png"

    let num = randomNumber();
    currentHole = document.getElementById(num)
    currentHole.appendChild(mole);


    
}