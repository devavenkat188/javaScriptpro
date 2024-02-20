const input = [
    {name:'Deva',age:25},
    {name:'Sanjay',age:22},
    {name:'Arun',age:25},
    {name:'Amul',age:24},
    {name:'Aravind',age:24},
    {name:'Gowtham',age:25},
];

const age = input.map(x => x.age);
let name = input.map(y => y.name);

console.log(age);
console.log(name);
