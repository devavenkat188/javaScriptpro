const express = require('express');
const router = express.Router();

const UserService = require('C:\\Users\\Admin\\Desktop\\HTML TAGS\\javaScriptpro\\nodejs\\expressjs\\server_model.js');

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