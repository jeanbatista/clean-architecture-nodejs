const CreateUserUseCase = require("../../../usesCases/user/createUserUseCase");

module.exports = class CreateUserController {
    /**
     * 
     * @param {CreateUserUseCase} createUserUseCase 
     */
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    /**
     * 
     * @param {Request} request 
     * @param {Response} response 
     * @returns {Promise<Response>}
     */
    async handle(request, response, next) {
        try {
            const { name, email, password } = request.body;

            await this.createUserUseCase.execute({
                name,
                email,
                password,
            });

            return response.status(201).send();
        } catch (err) {
            next(err);
        }
    }
}