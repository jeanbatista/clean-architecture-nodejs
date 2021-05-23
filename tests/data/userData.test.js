const { userData } = require('../../src/data');
const { UserEntity } = require('../../src/entities');

test('Should create user', async () => {
    const user = new UserEntity({
        name: 'José', 
        email: 'jose@email.com',
        password: 'Muda@123'
    });
    await userData.save(user);
    const userExists = await userData.findByEmail(user.email);
    expect(userExists.email).toBe(user.email);
});