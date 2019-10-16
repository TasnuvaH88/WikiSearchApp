import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
   const [search, setSearch] = useState('');
   const handleSubmit = () =>navigation.navigate('Results', {search});
    
    return(

        <SearchBar
          search={search}
          onSearch={setSearch}
          onSearchSubmit = {handleSubmit}
            //navigation.navigate('Results', {search: search})}
          />
    
    );
};



export default HomeScreen;
