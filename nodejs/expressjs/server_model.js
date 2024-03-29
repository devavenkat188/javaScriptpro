const express = require('express');
// const router = express.Router();
const app = express();
const port = 3000;

const User = require('./sequelize/models/se/models/account');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (requset, response, next) => {
    try {
        const user = await User.findAll();
        response.send(user);
    }
    catch (error) {
        return next(error);
    }
});

app.listen(port, () => {
    console.log(`The app listen on port http://localhost:${port}`);
})