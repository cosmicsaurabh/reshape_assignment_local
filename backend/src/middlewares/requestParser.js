class RequestParser {
    static parseQueryParams(request) {
        let queryParams = request.query;
        
        if (!queryParams || Object.keys(queryParams).length === 0) {
            const parsedUrl = new URL(request.url);
            queryParams = Object.fromEntries(parsedUrl.searchParams);
        }
        return {
            
            page: parseInt(queryParams.page, 10) || 1,
            limit: parseInt(queryParams.limit, 10) || 5,
            search: queryParams.search || '',
        };
    }
}
module.exports={RequestParser}