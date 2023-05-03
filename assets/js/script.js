
//variable to keep track of the current hole where the mole is spawned
let currentHole;

//variable to track whether the game is running or not
let isRunning = false;

//variable to store setInterval()
let interval;

//tracking score
let score = 0;

//display score
let scoreElement = document.getElementById("score");

//tracking time
let time = 10;

//display time
let timeLeft = document.getElementById("time");


// wait for Dom to finish loading before runing the game
document.addEventListener("DOMContentLoaded", function() {

    //start the game when the user clicks the button
    let button = document.getElementById("start")
    button.addEventListener("click", runGame); 

    //loop through holes and add a click event listener to each one
    let holes = document.getElementsByClassName("hole");
    for (i=0; i < holes.length; i++) {
        holes[i].addEventListener("click", selectHole);
    };
    
})

//spawn a mole every 700ms and prevent multiple functions from running at the same time
function runGame () {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(setMole, 700);
        
        //countdown timer
        let countId = setInterval(count, 1000);

        function count() {

            time--
            timeLeft.textContent = time 
        
            if (time == 0) {

                //stop game when time is 0
                isRunning = false;
                clearInterval(interval);
                alert(`game over  ${score}`
                )
                scoreElement.textContent = 0; 
                score = 0;

                timeLeft.textContent = 10;
                time = 10;

                clearInterval(countId);
            }
        
        }    

    } else {

        //restart the game if its already running
        scoreElement.textContent = 0; 
        score = 0;

        clearInterval(interval); 
        interval = setInterval(setMole, 700);

        time = 10;
        timeLeft.textContent = 10;
        clearInterval(countId);

        count(); 
        
        let countId = setInterval(count, 1000)

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
        currentHole.addEventListener("click", selectHole); // add back eventlistener for hole after removing mole
    }

    let mole = document.createElement("img");
    mole.src = "../assets/images/mole.png";

    //Choose a random hole and put the mole in
    let num = randomNumber();
    currentHole = document.getElementById(num)

    if (currentHole) {
        currentHole.appendChild(mole);
    } else {
        console.log("Error: Cannot find hole with id " + num);
    }
}


//Add 1 to score if selected hole have mole spawned on it
function selectHole () {

    if (this == currentHole) {

        score += 1;
        scoreElement.textContent = score;

        this.removeEventListener("click", selectHole); //remove eventlistener after adding score to prevent multiple score clicks per spawn
            
    }
}