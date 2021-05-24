const { app } = require('../../../src/main/app');
const request = require('supertest');

describe('POST /users', () => {
    let user = null;

    beforeAll(() => {
        user = {
            name: 'Jean Carlos',
            email: 'jean@mail.com',
            password: 'Mud@123'
        };
    })

    test('Should response status code 201', (done) => {
        request(app)
            .post('/users')
            .send(user)
            .then(response => {
                expect(response.statusCode).toBe(201);
                done();
            });
    });

    test('Should response status code 400 with message "User already exists"', (done) => {
        request(app)
            .post('/users')
            .send(user)
            .then(response => {
                expect(response.status).toBe(400)
                expect(response.body.message).toBe('User already exists');
                done();
            });
    });
});