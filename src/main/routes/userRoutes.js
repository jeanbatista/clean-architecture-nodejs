const { Router } = require('express');
const { createUserController } = require('../../presentation/controllers/user');

const router = new Router();

router.post('/users', (request, response) => { 
    return createUserController.handle(request, response);
});

module.exports = router;