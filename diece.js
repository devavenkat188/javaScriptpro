let player = (Math.floor(Math.random()*6));
let computer = (Math.floor(Math.random()*6));
let result;
if(player == 1){
    result = `Your Game Begins ${player}`;
}
else if (computer == 1) {
    result = `Computer game begins ${computer}`;
}
console.log(result);