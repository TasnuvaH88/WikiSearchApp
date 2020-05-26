import React, { View, useState } from 'react';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  //Sends search term to results screen where a hook is called
  const handleSubmit = () => navigation.navigate('Results', { search });

  return (
    <>
    <Header></Header>
   
    <SearchBar
      search={search}
      onSearch={setSearch}
      onSearchSubmit={handleSubmit}/>
  
   </>
  );
};

export default HomeScreen;
