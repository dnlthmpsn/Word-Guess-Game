var s,


WordGuess = {

    setUp: {
        wordList: ["leonard", "lowry", "carter", "bosh", "derozan"],
        randomWord: function(){
            var randomWord =(wordList[Math.floor(Math.random() * wordList.length)])
            return randomWord;
    },


        
        wins: 0,
        wrongGuesses: [],
        wordSoFar: [],
        randomWord: [],
        guessesRemaining: (randomWord.length * 2),
        restart: false,
    },

    
    init: function(){

        s = this.setUp;
        this.randomWord;
        this.generateWordsoFar();
        this.playerWin();
        guessesRemaining = (randomWord.length * 2);
        currentWord.innterHTML = generateWordsoFar().join(' ');
        this.keyPress();
    },


    //binding UI elements
   keyPress: function(){ 
        document.addEventListener('keypress', function(event){
            var key = String.fromCharCode(event.keyCode);
            guessesRemaining = guessesRemaining - 1;
            guessCounter.innerHTML = ("remaining guesses: " + guessesRemaining);
        })
    },

        
    correctGuess: function(){
        if (randomWord.indexof(ley) > -1){
            wordSoFar[randomWord.indexOf(key)] = key;
            correntWord.innerHTML = wordsoFar,join(' ');
        }
    },

    guessHandler: function(){
        if (wordSoFar === randomWord){
            restart = true;
        } else {
            wrongGuess.push(key);
            wrongBank.innerHTML = ("wrong guesses " + wrongGuess.join(", "));
        }
        if(orderSoFar.join('') != randomWord && guessesRemaining == 0){
            alert("game over");
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
        if(wordSoFar.join('') == randomWord){

            wins = wins + 1;
            winCounter.innerHTML =("wins: " + wins);
            restart = true;
        }
    }

   


}





