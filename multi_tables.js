var table = 1;
let val = (Math.ceil(Math.random()*10));
let ans;
    while (table <= 10){
    ans = (`${val} * ` +table+" = "+ val * table);
    table ++;
    console.log(ans);
}


