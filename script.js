// Global variables
var humanScore = 0;
var machineScore = 0;
var machineChoices = ['r', 'p', 's'];

//Start of program
emojiController();
gameStart();

//Main logic function
document.onkeyup = function(event) {
    var userGuess = event.key;
    if(userGuess === 'r'){
        hideWarning();
        var machineGuess = machineChoices[Math.floor(Math.random() * machineChoices.length)];
        displayMachineGuess(machineGuess);
        document.getElementById('humanSelection').innerHTML="Rock";
        console.log("r: " + machineGuess);
        if(machineGuess === 'r'){
            humanScore += 0;
            machineScore +=0;
            emojiController();
            sameGuess();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);

        }else if(machineGuess === 's'){
            humanScore += 1;
            machineScore +=0;
            emojiController();
            humanWinner();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);
            

        }else{
            humanScore += 0;
            machineScore +=1;
            emojiController();
            humanLooser();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);
            if(humanScore > 5 || machineScore > 5){
                hideScores();    
            }        
        }


    }else if(userGuess === 'p'){
        hideWarning();
        var machineGuess = machineChoices[Math.floor(Math.random() * machineChoices.length)];
        displayMachineGuess(machineGuess);
        document.getElementById('humanSelection').innerHTML="Paper";
        console.log("p: " + machineGuess);
        if(machineGuess === 'p'){
            humanScore += 0;
            machineScore +=0;
            emojiController();
            sameGuess();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);
            if(humanScore > 5 || machineScore > 5){
                hideScores();    
            }    
            

        }else if(machineGuess === 'r'){
            humanScore += 1;
            machineScore +=0;
            emojiController();
            humanWinner();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);
            if(humanScore > 5 || machineScore > 5){
                hideScores();    
            }    
            

        }else{
            humanScore += 0;
            machineScore +=1;
            emojiController();
            humanLooser();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);
            if(humanScore > 5 || machineScore > 5){
                hideScores();    
            }    
            
        }



    }else if(userGuess === 's'){
        hideWarning();
        var machineGuess = machineChoices[Math.floor(Math.random() * machineChoices.length)];
        displayMachineGuess(machineGuess);
        document.getElementById('humanSelection').innerHTML="Scissors";
        console.log("s: " + machineGuess);
        if(machineGuess === 's'){
            humanScore += 0;
            machineScore +=0;
            emojiController();
            sameGuess();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);
            if(humanScore > 5 || machineScore > 5){
                hideScores();    
            }    

        }else if(machineGuess === 'p'){
            humanScore += 1;
            machineScore +=0;
            emojiController();
            humanWinner();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);
            if(humanScore > 5 || machineScore > 5){
                hideScores();    
            }    
            

        }else{
            humanScore += 0;
            machineScore +=1;
            emojiController();
            humanLooser();
            console.log(machineScore + " - Machine : Human - " + humanScore);
            gameTerminator(machineScore,humanScore);
            if(humanScore > 5 || machineScore > 5){
                hideScores();    
            }              
        }
       
    }else{
        showWarning();
    }
}

//Score  emoji controller
function emojiController(){
        displayScores();
        if (humanScore === machineScore){
            displayNormalHuman();
            displayNormalMachine();
        }else if(humanScore > machineScore){
            displayHappyHuman();
            displaySadMachine()
        }else{
            displayHappyMachine();
            displaySadHuman();    
        } 
}
//Warning when wrong key is pressed
function gameStart(){
    document.getElementById('message').innerHTML = "R - Rock, P - Paper, S - Scissors ";
    document.getElementById('message').parentElement.style.backgroundColor = "red";
    document.getElementById('message').style.color = "white";
    document.getElementById('humanSelection').parentElement.style.background="#4da6ff"; 
    document.getElementById('machineSelection').parentElement.style.background="#4da6ff"; 
}
//Function to show normal human emoji
function displayNormalHuman(){
    document.getElementById('normalHuman').style.display="inline";
    document.getElementById('happyHuman').style.display="none";
    document.getElementById('sadHuman').style.display="none";
}

//Display happy Human emoji
function displayHappyHuman(){
    document.getElementById('happyHuman').style.display="inline";
    document.getElementById('normalHuman').style.display="none";
    document.getElementById('sadHuman').style.display="none";
}

//Display sad Human emoji
function displaySadHuman(){
    document.getElementById('sadHuman').style.display="inline";
    document.getElementById('happyHuman').style.display="none";
    document.getElementById('normalHuman').style.display="none";
}

//Function to show normal Machine emoji
function displayNormalMachine(){
    document.getElementById('normalMachine').style.display="inline";
    document.getElementById('happyMachine').style.display="none";
    document.getElementById('sadMachine').style.display="none";
}

//Function to show normal Machine emoji
function displayHappyMachine(){
    document.getElementById('happyMachine').style.display="inline";
    document.getElementById('normalMachine').style.display="none";
    document.getElementById('sadMachine').style.display="none";
}

//Function to show normal Machine emoji
function displaySadMachine(){
    document.getElementById('sadMachine').style.display="inline";
    document.getElementById('happyMachine').style.display="none";
    document.getElementById('normalMachine').style.display="none";
}

//game over function
function gameOver(humanScore, machineScore){
    document.getElementById('message').innerHTML="GAME OVER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "<button class='btn btn-danger' onClick='refreshPage();'>PLAY AGAIN</button>";
    document.getElementById('message').style.color="white";
    document.getElementById('selectionRow').style.display='none';
    document.getElementById('message').parentElement.style.backgroundColor = "red";
    hideScores();

}


//Display Human and computer score
function displayScores(){
    document.getElementById('humanScore').innerHTML = humanScore;
    document.getElementById('machineScore').innerHTML = machineScore;
}

//Warning when wrong key is pressed
function showWarning(){
    document.getElementById('message').innerHTML = "INCORRECT KEY";
    document.getElementById('message').parentElement.style.backgroundColor = "red";
    document.getElementById('message').style.color = "white";
    document.getElementById('humanSelection').style.display="none"; 
    document.getElementById('machineSelection').style.display= "none"; 
}

//Hide warning 
function hideWarning(){
    document.getElementById('message').innerHTML = "";
    document.getElementById('message').parentElement.style.backgroundColor = "white";
    document.getElementById('humanSelection').style.display="inline"; 
    document.getElementById('machineSelection').style.display= "inline"; 
}

//displaying Machine guesses
function displayMachineGuess(machineGuess){
    if (machineGuess === 'r'){
        document.getElementById('machineSelection').innerHTML="Rock";

    }else if(machineGuess === 'p'){
        document.getElementById('machineSelection').innerHTML="Paper";

    }else{
        document.getElementById('machineSelection').innerHTML="Scissors";

    }
}

//Both machine and human guessed same
function sameGuess(){
    document.getElementById('humanSelection').parentElement.style.backgroundColor = "Yellow";
    document.getElementById('machineSelection').parentElement.style.backgroundColor = "yellow";

}

// human winner or machine looser
function humanWinner(){
    document.getElementById('humanSelection').parentElement.style.backgroundColor = "green";
    document.getElementById('machineSelection').parentElement.style.backgroundColor = "red";
}

//machine winner or human looser 
function humanLooser(){
    document.getElementById('machineSelection').parentElement.style.backgroundColor = "green";
    document.getElementById('humanSelection').parentElement.style.backgroundColor = "red";
}

// refresh page function
function refreshPage(){
    window.location.reload();
} 

//Terminate game when the score is 20
function gameTerminator(machineScore, humanScore){
    if((humanScore >= 5) || (machineScore >= 5)){ 
        gameOver();
    }  
}

function hideScores(){
    if((humanScore >= 6) || (machineScore >= 6)){ 
        document.getElementById('humanScore').style.display = 'none';
        document.getElementById('machineScore').style.display = 'none';
        document.getElementById('machineEmoji').style.display='none';
        document.getElementById('humanEmoji').style.display='none';

    }
}