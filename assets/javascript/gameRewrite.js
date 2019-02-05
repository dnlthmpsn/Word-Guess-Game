var setUp,


WordGuess = {

    setUp: {
        wordList: ["leonard", "lowry", "carter", "bosh", "derozan"],
        wins: 0,
        wrongGuesses: [],
        wordSoFar: [],
        randomWord: wordList[Math.floor(Math.random() * wordList.length)],
        guessesRemaining: (randomWord.length * 2),
        restart: false,
    },

    
    init: function(){

        s = this.setUp;
        this.generateWordsoFar();
        this.playerWin();
        guessesRemaining = randomWord.length * 2;
        currentWord.innterHTML = generateWordsoFar().join(' ');

    },


    //binding UI elements
    listenToKeys: function(){ 
        document.addEventListener('keypress', function(event){
            var key = String.fromCharCode(event.keyCode);
            guessesRemaining = guessesRemaining - 1;
            guessCounter.innerHTML =("remaining guesses: " + guessesRemaining);
            //if user guess is right
            if(randomWord.indexOf(key) > -1){
                wordSoFar[randomWord.indexOf(key)] = key;
                currentWord.innerHTML = wordSoFar,join(' ');
                playerWin();
                if(wordSoFar === randomWord){
                    restart = true;    
                } else {
                        wrongGuesses.push(key);
                        wrongBank.innerHTML = ("wrong guesses " + wrongGuesses.join(", "));            
                }
        }
        if(ordSoFar.join('') != randomWord && guessesRemaining == 0{
            alert"game over");
            restart = true;
        }

    },    
   
    generateWordSoFar: function(){
        for( var i = 0; i <randomWord.length; i++){
            wordSoFar.push('_');
        }
        return wordSoFar;
    },

    playerWin: function(){
        if(wordSoFar.join('' == randomWord){
            wins = wins + 1;
            winCounter.innerHTML =("wins: " + wins);
            restart = true;
        }
    }

   


}





