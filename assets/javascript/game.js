// VARIABLES;
// =======================================================
const wordList = ["leonard", "lowry", "carter", "bosh", "derozan"];
var wins = 0;
var wrongGuesses = [];
var wordSoFar = [];
randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var guessesRemaining; 
var restart= false;

//DOM MANIPULATION
var currentWord = document.querySelector("#currentWord");
var wrongBank = document.querySelector("#wrongBank");
var winCounter = document.querySelector("#winCounter");
var guessCounter = document.querySelector("#guessCounter");

// FUNCTIONS;
// =======================================================

function generateWordSoFar(){
    for(var i = 0; i < randomWord.length; i++){
        wordSoFar.push('_');
    }
    return wordSoFar;
}

function playerWin(){

    if(wordSoFar.join('') == randomWord){
       wins = wins + 1;
       winCounter.innerHTML =("Wins: " + wins);
       restart = true;
       console.log(wordSoFar.join(''));   
       console.log(wins);

       
       }
   }
 

function init(){
    guessesRemaining = randomWord.length * 2;
    currentWord.innerHTML = generateWordSoFar().join(' ');
}



init();


// MAIN;
// =======================================================
document.addEventListener('keypress', (event) => {
    var key = String.fromCharCode(event.keyCode);
   
    guessesRemaining = guessesRemaining - 1;
    guessCounter.innerHTML =("Remaining Guesses: "  + guessesRemaining);
    //if users guess is right
    if(randomWord.indexOf(key) > -1) {
        
    //replace currentWord with right letter
        wordSoFar[randomWord.indexOf(key)] = key;
        currentWord.innerHTML = wordSoFar.join(' ');
        playerWin();
        if(wordSoFar === randomWord){
            restart=true;
        }

    } else {
        wrongGuesses.push(key);
        console.log(wrongGuesses); 
        wrongBank.innerHTML =("Wrong Guesses: " + wrongGuesses.join(", "));
          
    }
    if(wordSoFar.join('') != randomWord 
        && guessesRemaining == 0){
        alert("game over");
        restart=true;
        }
 
  if(restart === true){
    wordSoFar = [];
    currentWord.innerHTML = generateWordSoFar().join(' ');
    guessCounter.innerHTML = ("Remaining guesses: ");
    wrongBank.innerHTML = ("Wrong guesses: "); 
    console.log(randomWord);
  }
  
});

















   
    