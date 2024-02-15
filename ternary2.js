let player = (Math.floor(Math.random()*6));
let computer = (Math.floor(Math.random()*6));
let diece;
diece = player ===1 ? "Game Starts" : computer === 1 ? "Automatically Game starts" : palyer >=1 ? player+player+" Round-2 Player" : computer >=1 ? computer+computer+" Round-2 Computer" : "Not Match";
console.log(diece);
