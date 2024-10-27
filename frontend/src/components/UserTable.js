import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export const UserTable = ({ users, filteredResults }) => (
  <TableContainer component={Paper} sx={{ boxShadow: 2, borderRadius: 2 }}>
    <Table>
      <TableHead sx={{ backgroundColor: "#e3f2fd" }}>
        <TableRow>
          <TableCell><Typography sx={{ fontWeight: 'bold', color: '#1976d2' }}>ID</Typography></TableCell>
          <TableCell><Typography sx={{ fontWeight: 'bold', color: '#1976d2' }}>Name</Typography></TableCell>
          <TableCell><Typography sx={{ fontWeight: 'bold', color: '#1976d2' }}>Email</Typography></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} sx={{ textAlign: "center", color: "error.main" }}>
              {filteredResults
                ? "No item matches this filter"
                : "No users in DB as of now"}
            </TableCell>
          </TableRow>
        ) : (
          users.map((user, index) => (
            <TableRow
              key={user.id}
              sx={{
                backgroundColor: index % 2 ? "#f1f8e9" : "white",
                "&:hover": { backgroundColor: "#e8f5e9" },
              }}
            >
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  </TableContainer>
);
