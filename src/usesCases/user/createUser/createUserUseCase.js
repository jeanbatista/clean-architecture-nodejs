const CreateUserDTO = require('./createUserDTO');
const UserRepository = require('../../../repositories/userRepository');
const { UserEntity } = require('../../../entities');

module.exports = class CreateUserUserCase {
    /**
     * 
     * @param {UserRepository} userRepository 
     */
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * 
     * @param {CreateUserDTO} data 
     */
    async execute(data) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email);
        
        if (userAlreadyExists) {
            throw new Error('User already exists.');
        }

        const user = new UserEntity(data);

        await this.userRepository.save(user);
    }
}