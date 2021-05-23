const { UserRepository } = require('../../../../src/repositories');
const { CreateUserUseCase } = require('../../../../src/usesCases/user');

describe('Testes Create User Use Case', () => {
    test('Should create user', async () => { 
        const userRepository = new UserRepository();

        const createUserUseCase = new CreateUserUseCase(userRepository); 

        await createUserUseCase.execute({
            name: 'João',
            email: 'joao@mail.com',
            password: 'Mud@123'
        });
        try {
            await createUserUseCase.execute({
                name: 'João',
                email: 'joao@mail.com',
                password: 'Mud@123'
            });        
        } catch (err) {
            expect(err.message).toBe('User already exists.');
        }
    });
});
