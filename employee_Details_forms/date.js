let d = new Date();
console.log(typeof(d));

let [month, date, year] = new Date().toLocaleDateString("en-US").split("/");
console.log(month, date, year);

var today = new Date();
var validMinDate = new Date(
    today.getFullYear()-18,
    today.getMonth(),
    today.getDate(),
    today.getHours(),
    today.getMinutes(),
);
