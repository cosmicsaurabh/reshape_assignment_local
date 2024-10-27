import React from "react";
import { Container, Typography, CircularProgress, Box, Paper, Divider, useMediaQuery } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { UserTable } from "./UserTable";
import Pagination from "./Pagination";
import { useUserData } from "../hooks/useUserData";
import SortingOptions from "./SortingOptions";
import ItemsPerPage from "./ItemsPerPage";
import { useTheme } from '@mui/material/styles';

export const UserManagement = () => {
  const {
    users,
    loading,
    error,
    currentPage,
    totalPages,
    searchTerm,
    setUsers,
    setCurrentPage,
    setSearchTerm,
    filteredResults,
    setItemsPerPage,
  } = useUserData();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); 

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container sx={{ marginTop: 4, padding: 2, backgroundColor: "#f4f6f8", borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#37474f", fontWeight: "bold" }}>
        User Management
      </Typography>

      <Paper sx={{ marginBottom: 5, padding: 2, borderRadius: 2, boxShadow: 2, backgroundColor: "#ffffff" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row", 
            justifyContent: "space-between",
            alignItems: isSmallScreen ? "stretch" : "center", 
            gap: isSmallScreen ? 1 : 2, 
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <ItemsPerPage onItemsPerPageChange={handleItemsPerPageChange} loading={loading} />
          </Box>

          {!isSmallScreen && <Divider orientation="vertical" flexItem />}

          <Box sx={{ flexGrow: 1 }}>
            <SortingOptions users={users} setUsers={setUsers} />
          </Box>

          {!isSmallScreen && <Divider orientation="vertical" flexItem />}

          <Box sx={{ flexGrow: 1 }}>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </Box>
        </Box>
      </Paper>

      {loading ? (
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <CircularProgress color="primary" size={50} />
          <Typography variant="h6" sx={{ mt: 2 }}>
            Loading... Please wait
          </Typography>
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error" sx={{ textAlign: "center", mt: 4 }}>
          {error}
        </Typography>
      ) : (
        <>
          <UserTable users={users} filteredResults={filteredResults} />
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            sx={{ mt: 4 }}
          />
        </>
      )}
    </Container>
  );
};
