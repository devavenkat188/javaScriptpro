const express = require('express');
const router = express.Router();

const UserService = require('../../models/se/model');

module.exports = function(config) {
    const UserService = new UserService(config.postgress.client);

router.get('/',async(requset,response) => {
    try{
        const user = await UserService.getUser();
        response.send(user);
    }
    catch(error){
        return next(error);
    }
});
    return router;
}