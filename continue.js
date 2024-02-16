let j;
let i=0;
while(i<6){
    if(i === 4){
        continue;
    }
    i++;
    j = i+j;
}
console.log(j);