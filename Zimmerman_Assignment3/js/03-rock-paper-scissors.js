/*eslint-env browser*/

function rockPaperScissors() {
    var clientPick = prompt("Rock, Paper, or Scissors?");
    var realPick;
    if (clientPick != "rock" && clientPick != "paper" && clientPick != "scissors") {
        alert("You must type Rock, Paper, or Scissors");
    } else {
        var randrockpaperscissors = Math.random();
        if (randrockpaperscissors <= 1) {
            realPick = "Rock";
        } else if (randrockpaperscissors <= 2) {
            realPick = "Paper";
        } else {
            realPick = "Scissors";
        }
        if (clientPick == clientPick) {
            alert("You chose " + clientPick + ", but the computer did too! It's a tie!");
            console.log(usersChoice, realPick);
        } else if (clientPick == "rock" && realPick == "scissors") {
            alert("You chose " + clientPick + ", and the computer chose scissors. You win!");
            console.log(clientPick, realPick);
        } else if (realPick == "rock" && clientPick == "scissors") {
            alert("You chose " + clientPick + ", but the computer chose rock. You lose!");
            console.log(clientPick, realPick);
        } else if (usersChoice == "rock" && realPick == "paper") {
            alert("You chose " + clientPick + ", and the computer chose paper. You lose!");
            console.log(clientPick, realPick);
        } else if (realPick == "rock" && clientPick == "paper") {
            alert("You chose " + usersChoice + ", but the computer chose paper. You win!");
            console.log(clientPick, realPick);
        } else if (clientPick == "scissors" && realPick == "paper") {
            alert("You chose " + clientPick + ", and the computer chose paper. You win!");
            console.log(clientPick, realPick);
        } else if (compChoice == "scissors" && clientPick == "paper") {
            alert("You chose " + clientPick + ", but the computer chose paper. You lose!");
            console.log(clientPick, realPick);
        }
    }
    
}
