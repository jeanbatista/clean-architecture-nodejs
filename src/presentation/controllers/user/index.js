const CreateUserController = require('./createUserController');
const { CreateUserUseCase } = require('../../../usesCases/user');

const createUserController = new CreateUserController(
    new CreateUserUseCase(),
)

module.exports = {
    createUserController
};