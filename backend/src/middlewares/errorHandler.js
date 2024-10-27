class ErrorHandler {
    static handleError(error, context) {
        context.log(`Error: ${error.message}`);
        
        if (error.message.includes('Limit must be') || 
            error.message.includes('Page number exceeds')) {
            return {
                status: 400,
                body: { error: error.message }
            };
        }

        return {
            status: 500,
            body: { error: 'Internal server error' }
        };
    }
}
module.exports = {ErrorHandler}