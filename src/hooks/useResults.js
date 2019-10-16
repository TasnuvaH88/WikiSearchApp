import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchAPI = async searchInput => {
       try{
          const response = 
          await axios('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='+searchInput+
          '&format=json');
          setResults(response.data.query.search);
        
          
      } catch (err) {
        setErrorMessage('Something went wrong');
      }
  };
  return [searchAPI, results, errorMessage];
 
};