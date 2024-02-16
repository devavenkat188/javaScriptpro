/*
function multi(a,b){
    return a*b;
}
console.log(multi(3,4));
*/

let mail = "devavenkat188@gmail.com"
function gmail(mail){
    return mail.slice(0,mail.indexOf("@"));
}
console.log(gmail(`${mail}`));
