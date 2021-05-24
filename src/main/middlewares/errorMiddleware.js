module.exports = class ErrorMiddleware {
    handle(error, request, response) {
        console.log(error.message);
        if (error.message === 'User already exists') {
            return response.status(400).json({
                message: error.message
            });
        }
        response.status(500).json({
            message: 'Unexpected error'
        });
    }
}