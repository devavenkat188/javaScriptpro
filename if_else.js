let balanceAmount=3000;
let message;
if (balanceAmount>1000) {
    message="Available Amount +`[balanceAmount]`";
}
else {
    message="Minimum Balance Amount Reached. Please Add Amount";
}
console.log(message);