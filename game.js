function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; 
    let randomise_group = choices; 
    return randomise_group[Math.floor(Math.random() * randomise_group.length)];
}

let playerScore = 0; 
let computerScore = 0; 
let tieScore = 0; 



function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice(); 

    // toLowerCase() function converst all inputs to lowercase, this is to ensure case insensitivity// 

   if(playerSelection === computerSelection) {
    return "Its a tie!" + tieScore++; 
   } else if(
    (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
   ){
    return "Player wins!" +  playerScore++;
   
   } else {
    return "Computer wins!" + computerScore++;
   }
}

function game() {
    round = playRound(); 
     
    for(i=0; i < 5; i++){
        let player_input = prompt("what gesture do you choose?:").toLowerCase();  

        if(playerScore > computerScore){
            return "Player wins with a score of" + playerScore; 
        } else if (computerScore > playerScore) {
            return "Computer wins with a score of" + computerScore; 
        } else if ( playerScore === computerScore) {
            return "Tie with a score of" + tieScore; 
        }
    }
}

console.log(game()); 