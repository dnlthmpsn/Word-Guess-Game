// VARIABLES;
// =======================================================
//Create array or words
const wordList = ["leonard", "lowry", "carter", "bosh", "derozan"];
var wins = 0;
var wrongGuesses = [];
var wordSoFar = [];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
var guessesRemaining; 

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

function init(){
    guessesRemaining = randomWord.length * 2
    currentWord.innerHTML = generateWordSoFar().join(' ');    
}



init();


// MAIN;
// =======================================================
document.addEventListener('keypress', (event) => {
    var key = String.fromCharCode(event.keyCode);
   
    guessesRemaining = guessesRemaining - 1;
    guessCounter.innerHTML = guessesRemaining;
    //if users guess is right
    if(randomWord.indexOf(key) > -1) {

    //replace currentWord with right letter
        wordSoFar[randomWord.indexOf(key)] = key;
        currentWord.innerHTML = wordSoFar.join(' ');

      //  console.log(wordSoFar);
        

    } else {
        wrongGuesses.push(key);
        console.log(wrongGuesses); 
        wrongBank.innerHTML = wrongGuesses.join(", ");  
    }
});















   
    