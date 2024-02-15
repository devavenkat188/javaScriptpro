let balanceAmount=300;
let message;
if (balanceAmount>1000) {
    message=`Available Amount ${balanceAmount} Rupees`;
}
else {
    message="Minimum Balance Amount Reached. Please Add Amount";
}
console.log(message);