const express = require('express');
const { errorMidleware } = require('./middlewares');
const { userRoutes } = require('./routes');

const app = express();

app.use(express.json());

app.use(userRoutes);

app.use((error, request, response, next) => {
    return errorMidleware.handle(error, request, response);
});

module.exports = { app };