const UserEntity = require("../../entities/userEntity");

const users = [];

module.exports = class UserRepository {
    /**
     * 
     * @param {string} email 
     * @returns {Promise<UserEntity>}
     */
    async findByEmail(email) { 
        return users.find(user => user.email === email);
    }

    /**
     * 
     * @param {UserEntity} user
     */
    async save(user) {
        users.push(user);
    }
}