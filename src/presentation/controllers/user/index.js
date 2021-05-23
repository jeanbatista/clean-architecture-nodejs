const CreateUserController = require('./createUserController');
const { CreateUserUseCase } = require('../../../usesCases/user');
const { UserRepository } = require('../../../repositories');

const userRepository = new UserRepository();

const createUserUsecase = new CreateUserUseCase(
    userRepository
);

const createUserController = new CreateUserController(
    createUserUsecase
);

module.exports = {
    createUserController
};