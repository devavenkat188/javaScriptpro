let player="scissor";
let computer="paper";
switch(player) {
    case computer:
        console.log("Tie!");
        break;
    case "scissor":
        if(computer==="paper") {
            console.log("player wins")
        }
        else {
            console.log("computer wins")
        }
    default:
        console.log("No Tie");
}