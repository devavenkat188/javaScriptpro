const router = express.Router();

const userService = require('./user_services');

module.exports = (config) => {
    const UserService = new userService(config.postgres.client);

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

router.post('/delete',async(requset,response)=>{
    try {
        const user = await UserService.deleteUser();
        response.send(user);
    }catch(error) {
        return next(error);
    }
});
return router;
};