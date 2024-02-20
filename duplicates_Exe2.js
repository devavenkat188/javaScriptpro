let arr = [4,6,2,3,1,1,3,5,7,8,4,3];
let value;
for(let i=0;i<arr.length-1;i++){
 if(arr[i]=== arr[i+1]){
        value = arr[i];
        i++;
 }
 else {
    value = arr[i];
 }
}
 console.log(value);