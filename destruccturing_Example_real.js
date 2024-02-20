function calculate(a,b) {
    const add = a+b;
    const substract = b-a;
    const multi = a*b;
    const div = a/b;
    // return [add,sub,multi,div];
    return {add,sub:substract,multi,div};
}
/*
const ans = calculate(10,20); // by using Array.
console.log(ans);
*/

/*
const [add1,sub1,multi1,div1] = calculate(10,20);
console.log(add);
console.log(sub);
console.log(multi);
console.log(div);
*/

let {add,sub,multi,div} = calculate(10,20); // by using object.
console.log(add);
console.log(sub);
console.log(multi);
console.log(div);