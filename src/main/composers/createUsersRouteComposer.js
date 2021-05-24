const { UserRepository } = require("../../repositories");
const { CreateUserUseCase } = require("../../usesCases/user");
const { CreateUserController } = require("../../presentation/controllers/user");

module.exports = class CreateUsersRouteComposer {
    static compose() {
        const userRepository = new UserRepository()

        const createUserUsecase = new CreateUserUseCase(
            userRepository
        );

        return new CreateUserController(
            createUserUsecase
        );
    }
}