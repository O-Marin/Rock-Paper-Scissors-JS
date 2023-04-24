choices = ["rock","paper","scissors"]

function getComputerChoice(){
    
    var randomAnswer = choices[Math.floor(Math.random() * choices.length)];
    return randomAnswer
}

function playRPS(playerSelection, computerSelection){
    
    beats = {'paper':'rock', 'rock':'scissors', "scissors":'paper'}
    if (playerSelection == beats[computerSelection])
        return "Computer wins, " + computerSelection  + " beats " + playerSelection
    else if(computerSelection == beats[playerSelection])
        return "Player wins, " + playerSelection  + " beats " + computerSelection
    else if(computerSelection == playerSelection)
        return "Draw"
    
}

let pick = prompt("Please select an option");
let playerSelection = pick.toLowerCase();

while (playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper")
    pick = prompt("please enter a valid option")

playerSelection = pick.toLowerCase();
computerSelection = getComputerChoice();



console.log(playRPS(playerSelection, computerSelection));