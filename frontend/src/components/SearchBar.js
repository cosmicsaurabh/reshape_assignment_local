import React, { useState, useCallback, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; 

export const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const debouncedSearch = useCallback(
    debounce((query) => {
      onSearchChange(query);
    }, 500), [onSearchChange] 
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value); 
    debouncedSearch(value);    
  };

  return (
    <TextField
      label="Search by Name"
      variant="outlined"
      size="small"
      fullWidth
      value={localSearchTerm}
      onChange={handleChange}
      aria-label="Search by Name" 
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px", 
          
        },
      }}
    />
  );
};

function debounce(func, delay) {
  let timer;
  const debounced = function (...args) {
    clearTimeout(timer);  
    timer = setTimeout(() => {
      func(...args);      
    }, delay);
  };

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  return debounced;
}
