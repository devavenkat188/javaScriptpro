let alien = {
    name: "Devashankar",
    tech: "JavaScript",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "lenovo",
       // brand1: "lenovo",
    }
};

console.log(alien);
console.log(alien.tech);
console.log(alien.laptop.brand);
console.log(alien.laptop?.brand?.length); // ? --> it is the property i am not sure means put question mark Nullish
// coalescing operator.
