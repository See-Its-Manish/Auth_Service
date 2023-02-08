const ValidationError = require('../utils/validation-error');
const {User, Role} = require('../models/index')
const {StatusCodes} = require('http-status-codes');
const ClientError = require('../utils/client-error');
class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
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

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({
                where : {
                    email : userEmail
                }
            });
            if(!user) {
                throw new ClientError(
                    'AttributeNotFound',
                    'Invalid email sent in the request',
                    'Please check the email, as there is no record of the email',
                    StatusCodes.NOT_FOUND
                )
            }
            return user;
        } catch (error) {
            console.log("Something went wrong in repository layer");
            throw error;
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
}


module.exports = UserRepository;