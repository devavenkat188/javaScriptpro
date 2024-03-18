const express = require('express');
const app = express();
const port = 4000;

const User = require('./sequelize/models/se/dummy/account');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/',async(request,response,next)=> {
    try{
        const user = await User.findAll();
        response.send(user);
    }
    catch(error) {
        return next(error);
    }
});

app.listen(port, ()=> {
    console.log(`The app listen on port http://locahost:${port}`);
});