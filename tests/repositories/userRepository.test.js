const { UserRepository } = require('../../src/repositories');
const { UserEntity } = require('../../src/entities');

const userRepository = new UserRepository();

test('Should create user', async () => {
    const user = new UserEntity({
        name: 'José', 
        email: 'jose@email.com',
        password: 'Muda@123'
    });
    await userRepository.save(user);
    const userExists = await userRepository.findByEmail(user.email);
    expect(userExists.email).toBe(user.email);
});