let player="scisccors";
let computer="stone";
switch(player) {
    case computer:
        console.log("Tie!");
        break;
    case player:
        if(computer==="paper") {
            console.log("player wins")
        }
        else {
            console.log("computer wins")
        }
        break;
    default:
        console.log("No Tie");
}