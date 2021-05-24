const { Router } = require('express');
const { createUsersRouteComposer } = require('../composers');

const router = new Router();

router.post('/users', (request, response, next) => {
    const createUserController = createUsersRouteComposer.compose();
    return createUserController.handle(request, response, next);
});

module.exports = router;