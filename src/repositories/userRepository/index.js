const MongoUserRepository = require('./mongoUserRepository');

const mongoUserRepository = new MongoUserRepository();

module.exports = {
    findByEmail: mongoUserRepository.findByEmail,
    save: mongoUserRepository.save,
}