let playaGame = confirm("Shall we played rock, paper or scissors ?");
if(playaGame) {
    let playerChoice = prompt("please enter rock, paper or scissors");
    if(playerChoice) {
        let player1 = playerChoice.trim().toLowerCase();
        if(player1 === "rock" ||
           player1 === "paper" ||
           player1 === "scissors") 
           {    
            let computerChoice = Math.floor(Math.random()*3);
            let computer;
            if(computerChoice === 1) {
                computer = "rock";
            }
            else if (computerChoice === 2) {
                computer = "paper";
            }
            else {
                computer = "scissors";
            }

            let result;
            if( player1 === computer) {
                result = "Tie Game";
            }
            else if(player1 === "paper" && computer === "rock" ) {
                result = "Player Wins";
            }
            else if(player1 === "paper" && computer === "scissors") {
                result = "Player Wins";
            }
            else if(player1 === "rock" && computer === "scissors") {
                result = "Player Wins";
            }
            else {
                result = "Computer Wins";
            }
            alert(result);
            let playAgain = confirm ("play Again ?");
            playAgain ? location.reload() : alert("Ok, Thanks for Playing.");

           } else {
                alert ("You didn't enter rock, Paper or scissors");
           }
    } else {
        alert ("I guess you can change your mind. May be next time");
    }
}
else {
    alert ("Ok, Maybe next time");
}