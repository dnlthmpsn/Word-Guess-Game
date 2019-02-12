//GLOBAL VARIABLES;
// =======================================================
// arrays and variables for holding data
var wordList = ["leonard", "lowry", "carter", "bosh", "derozan"];
var currentWord = "";
var lettersinWord = [];
var numBlanks = 0;
var wordsoFar = [];
var wrongLetters = [];

//Game counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

// FUNCTIONS
// =======================================================

function startGame() {
     currentWord = wordList[Math.floor(Math.random() * wordList.length)];
     lettersinWord = currentWord.split("");
     numBlanks = lettersinWord.length;


// reset
   
    guessesLeft = 10;
    wrongLetters = [];
    wordsoFar = [];

//Populate blanks and successes with right number of blanks
    for (var i = 0; i <numBlanks; i++){
        wordsoFar.push("_");
    }

//updating html
document.querySelector("#currentWord").innerHTML = wordsoFar.join(" ");
document.querySelector("#guessCounter").innerHTML = ("Guesses Remaining: " + guessesLeft);
document.querySelector("#winCounter").innerHTML = ("Games Won: " + winCount);
document.querySelector("#lossCounter").innerHTML = ("Games Lost: " + lossCount);
document.querySelector("#wrongBank").innerHTML = ("Wrong Guesses: " + wrongLetters);

//testing and debugging
console.log(currentWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(wordsoFar);

}

function checkLetters(letter) {
    //check if the letter exists anywhere in the word
    var letterPresence = false;
    for (var i = 0; i <numBlanks; i++){
        if(currentWord[i] == letter) {
            letterPresence = true;
        }
    }
    // check where in the word the letter exists, then populate out the wordsoFar array.
    if(letterPresence) {
        for(var i=0; i<numBlanks; i++){
            if(currentWord[i] == letter){
                wordsoFar[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
    //testing and debugging
console.log(wordsoFar); 
}

function roundComplete(){
    console.log("win count: " + winCount + "| Loss Count: " + lossCount + "|Guesses Left: " + guessesLeft);

    //update html to reflect the most recent count stats
    document.querySelector("#guessCounter").innerHTML =("Guesses Remaining: " +guessesLeft);
    document.querySelector("#currentWord").innerHTML = wordsoFar.join(" ");
    document.querySelector("#wrongBank").innerHTML = ("Wrong Guessses: " + wrongLetters.join(" "));

    //check if user won
    if(lettersinWord.toString() == wordsoFar.toString()){
        winCount++;
        alert("Winner!");

        // update the win counter in the html
        document.querySelector("#winCounter").innerHTML = winCount;
        
        startGame();

    } 
    //check if user lost
    else if (guessesLeft ==0){
        lossCount++;
        alert("You Lose");

        //update HTML
        document.querySelector("#lossCounter").innerHTML = lossCount;

        startGame();

    }
    
    // check if user lost
}



//MAIN PROCESS
//====================================================
//initiates game
startGame();

document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
    //testing / debugging
    console.log(letterGuessed);
}
