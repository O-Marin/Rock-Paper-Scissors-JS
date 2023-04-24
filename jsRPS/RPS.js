function getComputerChoice(){
    choices = ["rock","paper","scissors"]
    var randomAnswer = choices[Math.floor(Math.random() * choices.length)];
    return randomAnswer
}