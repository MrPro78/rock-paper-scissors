let playerScore = 0; 
let computerScore = 0; 


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; 
    let randomise_group = choices; 
    return randomise_group[Math.floor(Math.random() * randomise_group.length)];
}


function playRound(playerSelection, computerSelection) {

    console.log(playerSelection); 
    console.log(computerSelection); 

   
    winner = "";

   if(playerSelection === computerSelection) {
    winner = "Its a tie!"; 
    computerScore = computerScore; 
    playerScore = playerScore; 
   } else if(
    (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
   ){
    winner = "Player wins!";
    playerScore++; 
   
   } else {
    winner = "Computer wins!";
    computerScore++; 
   }

   console.log(playerScore); 
   console.log(computerScore); 

   return console.log(winner); 
}

function game() {   
    for(i=0; i < 5; i++){
        
        let playerChoice = prompt("what gesture do you choose?:").toLowerCase();  
        let compChoice = getComputerChoice(); 
        // toLowerCase() function converst all inputs to lowercase, this is to ensure case insensitivity//         
        playRound(playerChoice, compChoice); 
    }; 
}

game();