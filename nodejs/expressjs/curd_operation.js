const router = express.Router();
const app = express();
const port = 4000;
 
const userService = require('../expressjs/');

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