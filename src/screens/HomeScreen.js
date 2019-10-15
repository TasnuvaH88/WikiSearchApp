import React, { useState } from 'react';
import { Text, StyleSheet , View} from 'react-native';
import SearchBar from '../components/SearchBar';
//import searchAPI from '../hooks/useResults';

const HomeScreen = ({ navigation}) => {
    const [search, setSearch] = useState('');
    
    return(

        <SearchBar
          search={search}
          onSearch={setSearch}
          onSearchSubmit = {()=> navigation.navigate('Results', {search: search})}
          />
    
    );
};



export default HomeScreen;
