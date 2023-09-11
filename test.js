let Score = 0; 
let playerScore = 0; 
let computerScore = 0; 

function getComputerChoice() {
    const computerChoice = ["rock","paper","scissor"]; 
    //Apply the array over the rounding method and multiply it by length method// 
    // length method converts elements into integer indexes to be compatible with random method//
    let Randomise = computerChoice[(Math.floor(Math.random()*computerChoice.length))]; 
    return Randomise; 
}

function playRound(playerSelection,computerSelection){


    if(playerSelection === computerSelection) { 
        winner = "Tie!";
        playerScore = playerScore; 
        computerScore = computerScore; 
    }
    else if(
        (playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
    ){
        computerScore++;  
        winner = "Computer wins this round!";
        
    }
    else{
        playerScore++;
        winner = "Player Wins this round!"; 
    }

    console.log("Player chose: " + playerSelection); 
    console.log("Computer chose: " + computerSelection);
    console.log("Player score: " + playerScore + " and " + "Computer score is : " + computerScore);
    return console.log(winner); 
}

function game() {

    for(let i=0;  i < 5; i++){ 
        let playerChoice = prompt("Pick rock, paper or scissor: ").toLowerCase();
        const computerChoice = getComputerChoice(); 
        playRound(playerChoice,computerChoice);
    }

    if(playerScore > computerScore){

        return console.log("Player wins the match by " + (playerScore - computerScore) + " points!");
    }
    else if( playerScore === computerScore){
        return console.log("The game is a draw!");
    }
    else {
        return console.log("Computer wins the match by " + (computerScore - playerScore) + " points!"); 
    }

}

game(); 

