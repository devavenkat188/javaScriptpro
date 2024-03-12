const express = require('express');
const Models = require('../expressjs/curd_operation.js');
const router = express.Router();
const app = express();
const port = 4000;

/*
class UserService {
    constructor(sequelize){
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize;
    }
*/

const UserService = require('../expressjs/curd_operation.js'); // Invoke the exported function to get the router
const userServiceInstance = new UserService();

router.post('/create', async (request, response, next) => {
    try {
        const user = await UserService.createUser(request.body);
        response.send(user);
    } catch (error) {
        next(error);
    }
});

router.get('/findOne', async (request, response, next) => {
    try {
        const user = await UserService.findOneUser();
        console.log(user.firstName);
        console.log(user.getDataValue('firstName'));
        response.send(user);
    } catch (error) {
        next(error);
    }
});

router.get('/all', async (request, response, next) => {
    try {
        const userList = await UserService.getAllUsers();
        response.send(userList);
    } catch (error) {
        next(error);
    }
});

router.get('/all/attributes', async (request, response, next) => {
    try {
        const userList = await UserService.getAllUsersAttributes();
        response.send(userList);
    } catch (error) {
        next(error);
    }
});

router.get('/all/where', async (request, response, next) => {
    try {
        const userList = await UserService.getAllUsersWhere();
        response.send(userList);
    } catch (error) {
        next(error);
    }
});

router.post('/update', async (request, response, next) => {
    try {
        const user = await UserService.updateUser();
        response.send(user);
    } catch (error) {
        next(error);
    }
});

router.post('/delete', async (request, response, next) => {
    try {
        const user = await UserService.deleteUser();
        response.send(user);
    } catch (error) {
        next(error);
    }
});


// Export the router directly
module.exports = router;

// Start the server
app.use(express.json());
app.use('/', router);
app.listen(port, () => {
    console.log(`The app listens on port no http://localhost:${port}`);
});

/*
const express = require('express');
const router = express.Router();
const app = express();
const port = 4000;
 
const userService = require('../expressjs/curd_operation.js');

module.exports = () => {
    const UserService = new userService();

router.post('/create',async (request,response,next)=>{
    try{
        const user = await UserService.createUser(request.body);
        request.send(user);
    } catch(error){
        return next(error);
    }
});

router.get('/findOne',async(request,response,next)=>{
    try {
        const user = await UserService.findOneUser();
        console.log(user.firstName);
        console.log(user.getDataValue('firstName'));
    } catch(error) {
        return next(error);
    }
});

router.get('/all',async(request,response)=>{
    try{
        const userList = await UserService.getAllUsers();
        response.send(userList);
    } catch(error) {
        return next(error);
    }
});

router.get('/all/attributes',async(request,response)=>{
    try{
        const userList = await UserService.getAllUsersAttributes();
        response.send(userList);
    } catch(error) {
        return next(error);
    }
});

router.get('/all/where',async(request,response)=>{
    try {
        const userList = await UserService.getAllUsersWhere();
        response.send(userList);
    }catch(error) {
        return next(error);
    }
});

router.post('/update',async(request,response,next)=>{
    try {
        const user = await UserService.updateUser();
        response.send(user);
    }catch (error) {
         return next(error);
    }
});

router.post('/delete',async(request,response)=>{
    try {
        const user = await UserService.deleteUser();
        response.send(user);
    }catch(error) {
        return next(error);
    }
});
return router;
};
app.listen(port,()=>{
    console.log(`The app listens on port no http://localhost:${port}`);
});
*/