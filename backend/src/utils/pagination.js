class PaginationUtils {
    static validatePaginationParams(page, limit, totalItems) {
        if (limit < 1) {
            throw new Error('Limit must be between 1 and total items');
        }

        const totalPages = Math.ceil(totalItems / limit);
        if (page > totalPages) {
            throw new Error('Page number exceeds total pages');
        }
        return {
            page : page,
            limit: Math.min(limit, totalItems),
            totalPages
        };
    }

    static getPaginatedItems(items, page, limit) {
        const startIndex = (parseInt(page, 10) - 1) * parseInt(limit, 10);
const endIndex = Math.min(startIndex + parseInt(limit, 10), Object.keys(items.mockUsers).length);


if (Array.isArray(items)) {
    return items.slice(startIndex, endIndex);
} else {
    return Object.values(items.mockUsers).slice(startIndex, endIndex);
}

    }
}

module.exports={PaginationUtils}
