const {Sequelize, Model, DataTypes} = require("sequelize");
// const {sequelize} = require('../../../config/db_connect');

const User = sequelize.define("user",{
    name: DataTypes.TEXT,
    favoriteColor: {
        type: DataTypes.TEXT,
        defaultValue: 'blue',
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
});
// Creating an instance.
/*
const jane = User.build({name: "Jane"});
console.log(jane instanceof User);
console.log(jane.name);

(async ()=>{
    try{
        await jane.save();
        console.log('Jane saved to database');
    }catch (error) {
        console.error('Error in saving Jane to database:',error);
    }
})();
*/

// Create method --> which will combines build & save methods.

(async ()=>{
    const jane = await User.create({name: "Jane"});
    console.log(jane instanceof User);
    console.log(jane.name);
});

// logging Instances --> 
(async ()=> {
    const jane = await User.create({name: "Deva"});
    console.log(jane.toJSON());
    console.log(JSON.stringify(jane, null, 4));
});
// Defaut Values --> built instances will automatically get default values.
const jane = User.build({name: "Jane"});
console.log(jane.favoriteColor);

// Updating Instances --> if you change the value of some field of an instances, calling save again will update.
(async ()=>{
    const jane = await User.create({name: "Jane"});
    jane.set({
        name: "Deva",
        favoriteColor: "green"
    }); // still the Jane & blue will be in database
    await jane.save(); // Now it will update in another new row.
}) ();

// Deleting Instances --> deleting was done by destroy methods.
(async ()=>{
    const jane = await User.create({name: "Jane"});
    console.log(jane.name);
    await jane.destroy();
}) ();

// Reloading Instances --> you can reload the instance from the data base by calling reload.
(async ()=> {
    const jane = await User.create({name: "Jane"});
    console.log(jane.name);
    jane.name = "Deva";
    await jane.reload();
    console.log(jane.name);
}) ();

 // Saving only some fields --> it's possible to define which attribute should be saved when calling save by passing 
 // array of column names.
(async ()=>{
    const jane = await User.create({name: "Jane"});
    console.log(jane.name);
    console.log(jane.favoriteColor);
    jane.name = "Arun";
    jane.favoriteColor = "blue";
    await jane.save({fields: ['name']});
    console.log(jane.name);
    console.log(jane.favoriteColor);
    await jane.reload();
    console.log(jane.name);
    console.log(jane.favoriteColor);
}) ();
// Incrementing & Decrementing Integer values --> sequelize provides the increment & decrement methods
(async ()=>{
    const jane = await User.create({name: "Jane",age: 70, cash: 5000});
    await jane.increment({
        'age': 2,
        'cash': 100,
    });
    await jane.increment(['age','cash'],{by:3});
}) ();
// Decrementing Integer values
(async ()=>{
    const jane = await User.create({name: "Deva", age: 25, cash: 4000});
    await jane.decrement({
        'age':2,
        'cash': 200,
    });
    await jane.decrement(['age','cash'],{by:1});
}) ();
/* ---------------------------------------------------------------------------------------------------------------- */
// Simple Insert queires:
(async ()=>{
    const jane = await User.create({firstName: "Deva",lastName: "Shankar"});
    console.log("Deva auto generated ID:", jane.id);
}) ();

(async ()=> {
    await sequelize.sync();//({force: true});
    
}) ();
module.exports = User;