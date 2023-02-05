const {User} = require('../models/index')

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async destory(userId) {
        try {
            await User.destroy({
                where : {
                    id : userId
                }
            })
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async getUserById(id) {
        try {
            
        } catch (error) {
            console.log("Something went wrong in repository layer");
        }
    }

    
}


module.exports = UserRepository;