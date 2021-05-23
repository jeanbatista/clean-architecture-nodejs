const { UserRepository } = require('./repositories');

const userRepository = new UserRepository();

module.exports = {
    findByEmail: userRepository.findByEmail,
    save: userRepository.save,
}