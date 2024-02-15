let bank="ICICI";
let bank2="ICICI"
let availableAmount=5000;
let user="Withdraw";
let user2="close";
let display;
if(bank === bank2){
    display="Welcome to ICICI Bank";
}
else if (availableAmount > 1000) {
    display=`Available amount ${availableAmount} Rupees`;
}
else if (user === user2) {
    display="Please Collect Your Cash";
}
else {
    display="Use ICICI bank ATM Card"
}