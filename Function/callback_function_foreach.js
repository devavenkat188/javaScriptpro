arr = ['Deva','Arun','Sanjay'];

arr.forEach(print); // the forEach will be the method available in javascript.

function print(value) {
    console.log(value);
}

arr.forEach(value => { // instead of arguments we can also pass function defnition also.
    console.log(value.toUpperCase().charAt(2));
})

arr.forEach((value,index,arr) => {
    arr[index] = value.toUpperCase();
})
console.log(arr);