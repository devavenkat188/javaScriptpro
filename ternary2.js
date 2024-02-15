let player = (Math.floor(Math.random()*6));
let computer = (Math.floor(Math.random()*6));
let diece;
diece = player ===1 ? "Game Starts by Player" : computer === 1 ? "Automatically Game starts" : "Game Ends";
// diece = player ===1 ? "Game Starts" : computer === 1 ? "Automatically Game starts" : player >=1 ? player+1+" Round-2 Player" : computer >=1 ? computer+1+" Round-2 Computer" : "Not Match"; 
console.log(diece);
