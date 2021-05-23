const axios = require('axios');

const request = (uri, method, data) => {
    return axios({ url: `http://localhost:5555${uri}`, method, data, validateStatus: false } )
};

describe('POST /users', () => { 
    test('Should response status code 201', async () => {
        const response = await request('/users', 'post', {
            name: 'Jean Carlos',
            email: 'jean@mail.com',
            password: 'Mud@123'
        });
        expect(response.status).toBe(201);    
    });
});