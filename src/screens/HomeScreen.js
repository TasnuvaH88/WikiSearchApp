import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { withNavigation } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const handleSubmit = () => navigation.navigate('Results', { search });

  return (
    <SearchBar
      search={search}
      onSearch={setSearch}
      onSearchSubmit={handleSubmit}
    />
  );
};

export default withNavigation(HomeScreen);
