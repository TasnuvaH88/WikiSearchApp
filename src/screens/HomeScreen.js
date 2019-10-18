import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  //Sends search term to results screen where a hook is called
  const handleSubmit = () => navigation.navigate('Results', { search });

  return (
    <SearchBar
      search={search}
      onSearch={setSearch}
      onSearchSubmit={handleSubmit}
    />
  );
};

export default HomeScreen;
