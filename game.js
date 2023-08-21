function getComputerChoice() {
    const  a = "rock";
    const b = "scissors";
    const c = "paper"; 
    let randomise_group = [a, b, c]; 
    return randomise_group[Math.floor(Math.random() * randomise_group.length)];
}

let check = getComputerChoice();
console.log(check);