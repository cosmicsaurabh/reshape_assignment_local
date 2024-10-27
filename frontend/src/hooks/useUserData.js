import { useState, useEffect } from 'react';
import axios from 'axios';

export const useUserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState(false);
  const [ItemsPerPage,setItemsPerPage] = useState(10);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, ItemsPerPage]);


  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    fetchUsers(currentPage, searchTerm, cancelTokenSource);

    return () => cancelTokenSource.cancel("Request cancelled due to new request.");
  }, [currentPage, searchTerm,ItemsPerPage]);

  const fetchUsers = async (page, search, cancelTokenSource) => {
    setLoading(true);
    
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/${process.env.REACT_APP_GET_USERS_ENDPOINT}/${process.env.REACT_APP_AZURE_FUNCTION_NAME}?page=${page}&limit=${ItemsPerPage}&search=${search}`,

        { cancelToken: cancelTokenSource.token },
      );
      // console.log(response.data.users)
      if(response.data.users.length==0){
        console.log(response.data.users)
        if(response.data.filteredResults){
          setFilteredResults(true);
        }
        else setFilteredResults(false);
      }
      setUsers(response.data.users);
      setTotalPages(response.data.metadata.totalPages);
      setError(null);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled', err.message);
      } else {
        setError('Error fetching users. Please try again later.');
      }
    }
    setLoading(false);
  };

  return {
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
    setItemsPerPage
  };
};
