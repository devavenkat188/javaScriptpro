let player = "rock";
let computer = "pen";
let result;

result = player === computer ? "Tie" : player === "rock" && computer === "scissors" ? "Player wins" : player === "rock" && computer === "paper" ? "Computer wins" : "Player wins";
console.log(result);