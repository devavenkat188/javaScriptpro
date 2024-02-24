let firstname = "sanjay";
let word = "i love javascript";
const capitalized = function (firstname) {
    let str = firstname.split(" ");
    for(let i=0;i<str.length;i++) {
         str[i] = str[i][0].toUpperCase()+str[i].substring(1);
         
    }
    return str.join(" ");
}
console.log(capitalized(word));
