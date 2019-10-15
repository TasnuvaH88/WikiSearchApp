import React, { useState } from 'react';
import wiki from '../api/wiki';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    const searchAPI = async () => {
      console.log('Hi there!');
        const response = await  wiki.get( {
          params: {
            list: search,
            srsearch: userTerm,
            format: json
          }
        });
        setResults(response.data.search);
      }

    return [searchAPI, results, errorMessage];
  };
  