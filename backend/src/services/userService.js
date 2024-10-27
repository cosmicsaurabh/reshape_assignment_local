const {PaginationUtils} = require('../utils/pagination');

class UserService {
    constructor(users) {
        this.users = users;
    }
    

    searchUsers(searchTerm) {
        if (!searchTerm) return this.users;
        const modifiedData = {mockUsers: this.users.mockUsers.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        )};
        return modifiedData;
    }

    getPaginatedUsers(page, limit, searchTerm) {
        const filteredUsers = this.searchUsers(searchTerm);
        
        if (Object.keys(filteredUsers.mockUsers).length === 0) {
            return {
                users: [],
                metadata: {
                    page,
                    limit,
                    totalPages: 0,
                    totalUsers: 0,
                    filteredResults: true
                }
            };
        }
        const { page: validPage, limit: validLimit, totalPages} = PaginationUtils.validatePaginationParams(
            page,
            limit,
            Object.keys(filteredUsers.mockUsers).length
        );
        const paginatedUsers = PaginationUtils.getPaginatedItems(
            filteredUsers,
            validPage,
            validLimit
        );
        
        return {
            users: paginatedUsers,
            metadata: {
                page:1,
                limit: validLimit,
                totalPages,
                totalUsers: filteredUsers.mockUsers.length,
                filteredResults: Boolean(searchTerm)
            }
        };
    }
}
module.exports = UserService;