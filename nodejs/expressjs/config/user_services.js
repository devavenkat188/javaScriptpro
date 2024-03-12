class UserService {
    constructor(userModel) {
        this.User = userModel;
    }

    async createUser({ firstName, lastName, email, password }) {
        try {
            const user = await this.User.create({ firstName, lastName, email, password });
            return user;
        } catch (error) {
            throw new Error('Failed to create user');
        }
    }

    async getAllUsersAttributes() {
        try {
            const users = await this.User.findAll({ attributes: { exclude: ['password'] } });
            return users;
        } catch (error) {
            throw new Error('Failed to retrieve users');
        }
    }

    async findOneUser() {
        try {
            const user = await this.User.findOne({ where: { firstName: 'Deva' } });
            return user;
        } catch (error) {
            throw new Error('Failed to find user');
        }
    }

    async getAllUsers() {
        try {
            const users = await this.User.findAll();
            return users;
        } catch (error) {
            throw new Error('Failed to retrieve users');
        }
    }

    async getAllUsersWhere() {
        try {
            const users = await this.User.findAll({ where: { firstName: 'Deva' } });
            return users;
        } catch (error) {
            throw new Error('Failed to retrieve users');
        }
    }

    async updateUser() {
        try {
            const [updatedRowsCount] = await this.User.update(
                { lastName: "lastName changed" },
                { where: { firstName: 'DEVA' } }
            );
            if (updatedRowsCount > 0) {
                return "User updated successfully";
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            throw new Error('Failed to update user');
        }
    }

    async deleteUser() {
        try {
            const deletedRowCount = await this.User.destroy({ where: { firstName: 'test' } });
            if (deletedRowCount > 0) {
                return "User deleted successfully";
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            throw new Error('Failed to delete user');
        }
    }
}

module.exports = UserService;

/*
const Models = require('../curd_operation');

class UserService {
    constructor(sequelize){
        Models(sequelize);
        this.client = sequelize;
        this.models = sequelize;
    }
    async createUser({firstName,lastName,email,password}){
        try {
            const user = await this.models.User.create({
                firstName,
                lastName,
                email,
                password,
            });
            return user;
        } catch(error) {
            return error
        }
    }
    async getAllUsersAttributes(){
        try {
            const users = await this.models.User.findAll({
                // attributes: ['firstName','lastName','email']
                attributes: {exclude: ['password']}
            });
            return users;
        } catch (error) {
            return error;
        }
        }
    async findOneUser(){
        try {
            const user = await this.models.User.findOne({where: {firstName: 'Deva'}});
            return user;
        } catch (error) {
            return error;
        }
    }
    async getAllUsers(){
        try {
            const users = await this.models.User.findAll();
            return users;
        } catch (error) {
            return error;
        }
    }
    async getAllUsersWhere(){
        try {
            const users = await this.models.User.findAll({where: {firstName: 'Deva'}});
            return users;
        } catch (error) {
            return error;
        }
    }
    async updateUser(){
        try {
            await this.models.User.update({lastName:"lastName changed"},{where: {firstName: 'DEVA'}});
            return  "updated User";
        } catch (error) {
            return error;
        }
    }
    async deleteUser(){
        try {
            const user = await this.models.User.destroy({where: {firstName: 'test'}});
            return "deleted User";
        } catch (error) {
            return error;
        }
    }
}

module.exports = UserService;
*/