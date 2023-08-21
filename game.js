function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]; 
    let randomise_group = choices; 
    return randomise_group[Math.floor(Math.random() * randomise_group.length)];
}


function playRound(playerSelection, computerSelection) {

    computerSelection = getComputerChoice(); 

    // toLowerCase() function converst all inputs to lowercase, this is to ensure case insensitivity// 

   if(playerSelection === computerSelection) {
    return "Its a tie!"; 
   } else if(
    (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
   ){
    return "Player wins!"; 
   } else {
    return "Computer wins!"; 
   }
}

const player = prompt("what gesture do you choose?:").toLowerCase();  
comp = getComputerChoice(); 
console.log(playRound(player, comp)); 