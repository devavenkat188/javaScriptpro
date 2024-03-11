const express = require('express');
const router = express.Router();

const UserService = require('./sequelize/models/sequelize/model');

module.exports = function(config) {
    const userService = new UserService(config.postgress.client);

router.get('/',async(requset,response) => {
    try{
        const user = await userService.getUser();
        response.send(user);
    }
    catch(error){
        return next(error);
    }
});
    return router;
}