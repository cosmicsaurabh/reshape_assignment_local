import React from 'react';
import { Pagination as MuiPagination, Stack } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <Stack spacing={6} sx={{ marginTop: 4, display: 'flex', alignItems:'center' }}>
            <MuiPagination
                count={totalPages}
                page={currentPage}
                onChange={onPageChange}
                color="primary"
            />
        </Stack>
    );
};

export default Pagination;
