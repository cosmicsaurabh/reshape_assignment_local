import React, { useState } from "react";
import { Select, MenuItem, Button, CircularProgress,Box } from "@mui/material";

const SortingOptions = ({ users, setUsers }) => {
  const [sortCriteria, setSortCriteria] = useState("name");  
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [originalUsers, setOriginalUsers] = useState([...users]);

  const handleSort = async (criteria, order) => {
    setLoading(true);
    setError(null);  
    
    try {
      
      const sortedUsers = [...users].sort((a, b) => {
        let valA = a[criteria];
        let valB = b[criteria];

        if (typeof valA === 'string') valA = valA.toLowerCase();
        if (typeof valB === 'string') valB = valB.toLowerCase();

        if (order === "asc") {
          return valA > valB ? 1 : -1;
        } else {
          return valA < valB ? 1 : -1;
        }
      });

      setUsers(sortedUsers);
    } catch (err) {
      setError("Error during sorting. Reverting to original list.");
      setUsers(originalUsers);
    }

    setLoading(false);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
  <Select
    value={sortCriteria}
    onChange={(e) => setSortCriteria(e.target.value)}
    sx={{ minWidth: 120 ,borderRadius:'8px'}}
    size="small"
  >
    <MenuItem value="name">Name</MenuItem>
    <MenuItem value="id">ID</MenuItem>
    <MenuItem value="email">Email</MenuItem>
  </Select>

  <Select
    value={sortOrder}
    onChange={(e) => setSortOrder(e.target.value)}
    sx={{ minWidth: 120 ,borderRadius:'8px'}}
    size="small"
  >
    <MenuItem value="asc">Ascending</MenuItem>
    <MenuItem value="desc">Descending</MenuItem>
  </Select>

  <Button
    variant="contained"
    onClick={() => handleSort(sortCriteria, sortOrder)}
    sx={{ backgroundColor: "#0288d1", '&:hover': { backgroundColor: '#0277bd' } }}
    disabled={loading}
  >
    {loading ? <CircularProgress size={24} /> : "Sort"}
  </Button>
</Box>

  );
};

export default SortingOptions;
