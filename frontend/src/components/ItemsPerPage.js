import React, { useState } from "react";
import { Select, MenuItem, Button, CircularProgress } from "@mui/material";

const ItemsPerPage = ({ onItemsPerPageChange, loading }) => {
  const [selectedValue, setSelectedValue] = useState(10);

  const handleChange = (e) => {
    onItemsPerPageChange(selectedValue);
  };

  return (
    <>
      <Select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        sx={{ marginRight: 2, minWidth: 120 }}
        variant="outlined"
        size="small"
        style={{ borderRadius: 8, borderColor: "#43a047" }}
      >
        {[5, 10, 15, 20, 25, 30, 50].map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        disabled={loading}
        onClick={handleChange}
        sx={{
          backgroundColor: "#43a047",
          '&:hover': { backgroundColor: '#388e3c' },
          padding: "6px 16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
        }}
      >
        {loading ? <CircularProgress size={24} /> : "Limit"}
      </Button>
    </>
  );
};

export default ItemsPerPage;
