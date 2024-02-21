let alien = {
    name: "Devashankar",
    tech: "JavaScript",
    laptop: {
        cpu: "i7",
        ram: 4,
        brand: "lenovo",
    }
};

delete alien.laptop.ram; // delete is the default keyword in javascript.
console.log(alien);
delete alien.laptop;
console.log(alien);