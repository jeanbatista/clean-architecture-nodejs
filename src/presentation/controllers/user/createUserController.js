module.exports = class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    /**
     * 
     * @param {Request} request 
     * @param {Response} response 
     * @returns {Promise<Response>}
     */
    async handle(request, response) {
        try {
            const { name, email, password } = request.body;
            
            await this.createUserUseCase.execute({
                name,
                email,
                password,
            });
            
            return response.status(201).send();
        } catch (err) {
            console.log(err.stack);
            console.log(err.message);
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}