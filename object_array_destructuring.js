const employee = {
    company1: ['Deva','Sanjay'],
    company2: ['Arun','Amul']
}

const {company1:[name1 , name2], company2: [name3, name4]} = employee; // destructuring

console.log(name1);
console.log(name2);
console.log(name4);
console.log(name3);