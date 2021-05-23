const { UserEntity } = require('../../entities');

module.exports = class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * 
     * @param {{ name:string,email:string,password:string }} data 
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