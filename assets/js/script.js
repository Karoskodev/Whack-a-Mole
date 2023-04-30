// Wait for Dom to finish loading before runing the game

let currentHole;

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("start")
    button.addEventListener("click", runGame);
})

function runGame () {
    
    setInterval(setMole, 1500);

}

    
function randomNumber() {
    let num = Math.floor(Math.random()*6);
    return num.toString();
}

function setMole () {

        let mole = document.createElement("img");
        mole.src = "../images/mole.png";

        let num = randomNumber();
        currentHole = document.getElementById(num)
        currentHole.appendChild(mole);
}