let alien = {
    name: "Devashankar",
    tech: "JavaScript",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "Lenovo",
    }
};

for(let key in alien) {
    console.log(key, alien[key]);
}
for(let value in alien.laptop) {
    console.log(value, alien.laptop[value]);
}


// console.log(alien);